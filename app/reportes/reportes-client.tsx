"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Loader2, Check, X, User, BookOpen, HardHat, Download } from "lucide-react"
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, ArcElement } from "chart.js"
import { Bar, Pie } from "react-chartjs-2"

// Registrar componentes de Chart.js
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, ArcElement)

type Persona = {
  id: number
  nombre: string
}

type Estudiante = Persona & {
  grado: string
  seccion: string
}

type Profesor = Persona & {
  materia: string
}

type Obrero = Persona & {
  area: string
}

type Asistencia = {
  id: number
  fecha: string
  presente: boolean
  tipoPersona: "estudiante" | "profesor" | "obrero"
  estudianteId: number | null
  profesorId: number | null
  obreroId: number | null
  estudiante: Estudiante | null
  profesor: Profesor | null
  obrero: Obrero | null
}

type ResumenAsistencia = {
  total: number
  presentes: number
  ausentes: number
  porcentajePresentes: number
  porcentajeAusentes: number
}

export function ReportesClient() {
  const [asistencias, setAsistencias] = useState<Asistencia[]>([])
  const [estudiantes, setEstudiantes] = useState<Estudiante[]>([])
  const [profesores, setProfesores] = useState<Profesor[]>([])
  const [obreros, setObreros] = useState<Obrero[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [resumen, setResumen] = useState<ResumenAsistencia>({
    total: 0,
    presentes: 0,
    ausentes: 0,
    porcentajePresentes: 0,
    porcentajeAusentes: 0,
  })

  // Filtros
  const [tipoPersona, setTipoPersona] = useState<string>("")
  const [personaId, setPersonaId] = useState<string>("")
  const [fechaInicio, setFechaInicio] = useState<string>("")
  const [fechaFin, setFechaFin] = useState<string>("")

  // Cargar asistencias con filtros
  const fetchAsistencias = async () => {
    try {
      setLoading(true)

      // Construir URL con parámetros de filtro
      let url = "/api/asistencias?"

      if (tipoPersona && tipoPersona !== "all") {
        url += `tipoPersona=${tipoPersona}&`
      }

      if (personaId && personaId !== "all") {
        url += `personaId=${personaId}&`
      }

      if (fechaInicio) {
        url += `fechaInicio=${fechaInicio}&`
      }

      if (fechaFin) {
        url += `fechaFin=${fechaFin}&`
      }

      console.log("Consultando URL:", url)

      const response = await fetch(url)
      if (!response.ok) {
        throw new Error("Error al cargar asistencias")
      }

      const data = await response.json()
      console.log("Datos de asistencias:", data)
      setAsistencias(data)

      // Calcular resumen
      const total = data.length
      const presentes = data.filter((a: Asistencia) => a.presente).length
      const ausentes = total - presentes

      setResumen({
        total,
        presentes,
        ausentes,
        porcentajePresentes: total > 0 ? (presentes / total) * 100 : 0,
        porcentajeAusentes: total > 0 ? (ausentes / total) * 100 : 0,
      })
    } catch (error) {
      console.error("Error:", error)
      setError("Error al cargar asistencias")
    } finally {
      setLoading(false)
    }
  }

  // Cargar personas
  const fetchPersonas = async () => {
    try {
      // Cargar estudiantes
      const estudiantesResponse = await fetch("/api/estudiantes")
      if (!estudiantesResponse.ok) {
        throw new Error("Error al cargar estudiantes")
      }
      const estudiantesData = await estudiantesResponse.json()
      setEstudiantes(estudiantesData)

      // Cargar profesores
      const profesoresResponse = await fetch("/api/profesores")
      if (!profesoresResponse.ok) {
        throw new Error("Error al cargar profesores")
      }
      const profesoresData = await profesoresResponse.json()
      setProfesores(profesoresData)

      // Cargar obreros
      const obrerosResponse = await fetch("/api/obreros")
      if (!obrerosResponse.ok) {
        throw new Error("Error al cargar obreros")
      }
      const obrerosData = await obrerosResponse.json()
      setObreros(obrerosData)
    } catch (error) {
      console.error("Error:", error)
      setError("Error al cargar personas")
    }
  }

  useEffect(() => {
    const loadData = async () => {
      try {
        await fetchPersonas()
        await fetchAsistencias()
      } catch (error) {
        console.error("Error cargando datos:", error)
      }
    }

    loadData()
  }, [])

  // Aplicar filtros
  const handleAplicarFiltros = () => {
    fetchAsistencias()
  }

  // Limpiar filtros
  const handleLimpiarFiltros = () => {
    setTipoPersona("")
    setPersonaId("")
    setFechaInicio("")
    setFechaFin("")

    // Recargar sin filtros
    setTimeout(() => {
      fetchAsistencias()
    }, 0)
  }

  // Exportar a CSV
  const exportarCSV = () => {
    // Crear encabezados
    let csv = "ID,Tipo,Persona,Fecha,Presente\n"

    // Agregar filas
    asistencias.forEach((asistencia) => {
      const nombre = getNombrePersona(asistencia)
      const tipo = getTipoPersonaTexto(asistencia.tipoPersona)
      const fecha = new Date(asistencia.fecha).toLocaleDateString()
      const presente = asistencia.presente ? "Sí" : "No"

      csv += `${asistencia.id},"${tipo}","${nombre}","${fecha}","${presente}"\n`
    })

    // Crear blob y descargar
    const blob = new Blob([csv], { type: "text/csv;charset=utf-8;" })
    const url = URL.createObjectURL(blob)
    const link = document.createElement("a")
    link.setAttribute("href", url)
    link.setAttribute("download", `reporte_asistencias_${new Date().toISOString().split("T")[0]}.csv`)
    link.style.visibility = "hidden"
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  // Obtener el nombre de la persona según el tipo
  const getNombrePersona = (asistencia: Asistencia) => {
    if (asistencia.tipoPersona === "estudiante" && asistencia.estudiante) {
      return asistencia.estudiante.nombre
    } else if (asistencia.tipoPersona === "profesor" && asistencia.profesor) {
      return asistencia.profesor.nombre
    } else if (asistencia.tipoPersona === "obrero" && asistencia.obrero) {
      return asistencia.obrero.nombre
    }
    return "Desconocido"
  }

  // Obtener el ícono según el tipo de persona
  const getIconoTipoPersona = (tipo: string) => {
    switch (tipo) {
      case "estudiante":
        return <User className="h-4 w-4 text-blue-500" />
      case "profesor":
        return <BookOpen className="h-4 w-4 text-green-500" />
      case "obrero":
        return <HardHat className="h-4 w-4 text-yellow-500" />
      default:
        return null
    }
  }

  // Obtener el texto del tipo de persona
  const getTipoPersonaTexto = (tipo: string) => {
    switch (tipo) {
      case "estudiante":
        return "Estudiante"
      case "profesor":
        return "Profesor"
      case "obrero":
        return "Obrero"
      default:
        return "Desconocido"
    }
  }

  // Datos para gráfico de barras por tipo de persona
  const datosGraficoBarras = {
    labels: ["Estudiantes", "Profesores", "Obreros"],
    datasets: [
      {
        label: "Presentes",
        data: [
          asistencias.filter((a) => a.tipoPersona === "estudiante" && a.presente).length,
          asistencias.filter((a) => a.tipoPersona === "profesor" && a.presente).length,
          asistencias.filter((a) => a.tipoPersona === "obrero" && a.presente).length,
        ],
        backgroundColor: "rgba(75, 192, 192, 0.6)",
      },
      {
        label: "Ausentes",
        data: [
          asistencias.filter((a) => a.tipoPersona === "estudiante" && !a.presente).length,
          asistencias.filter((a) => a.tipoPersona === "profesor" && !a.presente).length,
          asistencias.filter((a) => a.tipoPersona === "obrero" && !a.presente).length,
        ],
        backgroundColor: "rgba(255, 99, 132, 0.6)",
      },
    ],
  }

  const datosGraficoPastel = {
    labels: ["Presentes", "Ausentes"],
    datasets: [
      {
        data: [resumen.presentes, resumen.ausentes],
        backgroundColor: ["rgba(75, 192, 192, 0.6)", "rgba(255, 99, 132, 0.6)"],
        borderColor: ["rgba(75, 192, 192, 1)", "rgba(255, 99, 132, 1)"],
        borderWidth: 1,
      },
    ],
  }

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <Loader2 className="h-8 w-8 animate-spin text-gray-500" />
      </div>
    )
  }

  return (
    <div>
      {error && <div className="bg-red-50 border border-red-200 text-red-600 p-4 rounded-md mb-4">{error}</div>}

      <Card className="mb-6">
        <CardHeader>
          <CardTitle>Filtros de Reporte</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="space-y-2">
              <Label htmlFor="tipoPersona">Tipo de Persona</Label>
              <Select value={tipoPersona} onValueChange={setTipoPersona}>
                <SelectTrigger>
                  <SelectValue placeholder="Todos los tipos" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">Todos los tipos</SelectItem>
                  <SelectItem value="estudiante">Estudiantes</SelectItem>
                  <SelectItem value="profesor">Profesores</SelectItem>
                  <SelectItem value="obrero">Obreros</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="persona">Persona</Label>
              <Select value={personaId} onValueChange={setPersonaId} disabled={!tipoPersona}>
                <SelectTrigger>
                  <SelectValue placeholder="Todas las personas" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">Todas las personas</SelectItem>

                  {tipoPersona === "estudiante" &&
                    estudiantes.map((estudiante) => (
                      <SelectItem key={estudiante.id} value={estudiante.id.toString()}>
                        {estudiante.nombre}
                      </SelectItem>
                    ))}

                  {tipoPersona === "profesor" &&
                    profesores.map((profesor) => (
                      <SelectItem key={profesor.id} value={profesor.id.toString()}>
                        {profesor.nombre}
                      </SelectItem>
                    ))}

                  {tipoPersona === "obrero" &&
                    obreros.map((obrero) => (
                      <SelectItem key={obrero.id} value={obrero.id.toString()}>
                        {obrero.nombre}
                      </SelectItem>
                    ))}
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="fechaInicio">Fecha Inicio</Label>
              <Input
                id="fechaInicio"
                type="date"
                value={fechaInicio}
                onChange={(e) => setFechaInicio(e.target.value)}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="fechaFin">Fecha Fin</Label>
              <Input id="fechaFin" type="date" value={fechaFin} onChange={(e) => setFechaFin(e.target.value)} />
            </div>
          </div>

          <div className="flex justify-end gap-2 mt-4">
            <Button variant="outline" onClick={handleLimpiarFiltros}>
              Limpiar Filtros
            </Button>
            <Button onClick={handleAplicarFiltros}>Aplicar Filtros</Button>
          </div>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-lg">Total Asistencias</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold">{resumen.total}</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-lg">Presentes</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center justify-between">
              <p className="text-3xl font-bold text-green-600">{resumen.presentes}</p>
              <p className="text-lg font-medium text-green-600">{resumen.porcentajePresentes.toFixed(1)}%</p>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-lg">Ausentes</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center justify-between">
              <p className="text-3xl font-bold text-red-600">{resumen.ausentes}</p>
              <p className="text-lg font-medium text-red-600">{resumen.porcentajeAusentes.toFixed(1)}%</p>
            </div>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="tabla" className="mb-6">
        <TabsList className="mb-4">
          <TabsTrigger value="tabla">Tabla</TabsTrigger>
          <TabsTrigger value="graficos">Gráficos</TabsTrigger>
        </TabsList>

        <TabsContent value="tabla">
          <Card>
            <CardHeader className="pb-0">
              <div className="flex justify-between items-center">
                <CardTitle>Detalle de Asistencias</CardTitle>
                <Button variant="outline" onClick={exportarCSV}>
                  <Download className="h-4 w-4 mr-2" />
                  Exportar CSV
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>ID</TableHead>
                    <TableHead>Tipo</TableHead>
                    <TableHead>Persona</TableHead>
                    <TableHead>Fecha</TableHead>
                    <TableHead>Presente</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {asistencias.length === 0 ? (
                    <TableRow>
                      <TableCell colSpan={5} className="text-center py-6 text-gray-500">
                        No hay asistencias que coincidan con los filtros
                      </TableCell>
                    </TableRow>
                  ) : (
                    asistencias.map((asistencia) => (
                      <TableRow key={asistencia.id}>
                        <TableCell>{asistencia.id}</TableCell>
                        <TableCell>
                          <div className="flex items-center gap-1">
                            {getIconoTipoPersona(asistencia.tipoPersona)}
                            <span>{getTipoPersonaTexto(asistencia.tipoPersona)}</span>
                          </div>
                        </TableCell>
                        <TableCell>{getNombrePersona(asistencia)}</TableCell>
                        <TableCell>{new Date(asistencia.fecha).toLocaleDateString()}</TableCell>
                        <TableCell>
                          {asistencia.presente ? (
                            <div className="flex items-center">
                              <Check className="h-4 w-4 text-green-500 mr-1" />
                              <span>Presente</span>
                            </div>
                          ) : (
                            <div className="flex items-center">
                              <X className="h-4 w-4 text-red-500 mr-1" />
                              <span>Ausente</span>
                            </div>
                          )}
                        </TableCell>
                      </TableRow>
                    ))
                  )}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="graficos">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Asistencia por Tipo de Personal</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="h-80">
                  <Bar
                    data={datosGraficoBarras}
                    options={{
                      responsive: true,
                      maintainAspectRatio: false,
                      scales: {
                        y: {
                          beginAtZero: true,
                          ticks: {
                            precision: 0,
                          },
                        },
                      },
                    }}
                  />
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Resumen de Asistencia</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="h-80 flex items-center justify-center">
                  <div className="w-64">
                    <Pie
                      data={datosGraficoPastel}
                      options={{
                        responsive: true,
                        maintainAspectRatio: false,
                      }}
                    />
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}
