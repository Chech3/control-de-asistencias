"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Label } from "@/components/ui/label"
import { Loader2, Plus, Pencil, Trash2, Check, X, User, BookOpen, HardHat } from "lucide-react"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Switch } from "@/components/ui/switch"
import Link from "next/link"

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

export function AsistenciasClient() {
  const [asistencias, setAsistencias] = useState<Asistencia[]>([])
  const [estudiantes, setEstudiantes] = useState<Estudiante[]>([])
  const [profesores, setProfesores] = useState<Profesor[]>([])
  const [obreros, setObreros] = useState<Obrero[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  const [isDialogOpen, setIsDialogOpen] = useState(false)
  const [isEditMode, setIsEditMode] = useState(false)
  const [currentAsistencia, setCurrentAsistencia] = useState<Partial<Asistencia>>({
    presente: true,
    tipoPersona: "estudiante",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [deleteId, setDeleteId] = useState<number | null>(null)

  // Cargar asistencias
  const fetchAsistencias = async () => {
    try {
      setLoading(true)
      const response = await fetch("/api/asistencias")
      if (!response.ok) {
        throw new Error("Error al cargar asistencias")
      }
      const data = await response.json()
      setAsistencias(data)
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
    Promise.all([fetchAsistencias(), fetchPersonas()])
  }, [])

  // Crear o actualizar asistencia
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!currentAsistencia.tipoPersona) {
      return
    }

    // Verificar que se ha seleccionado una persona según el tipo
    if (
      (currentAsistencia.tipoPersona === "estudiante" && !currentAsistencia.estudianteId) ||
      (currentAsistencia.tipoPersona === "profesor" && !currentAsistencia.profesorId) ||
      (currentAsistencia.tipoPersona === "obrero" && !currentAsistencia.obreroId)
    ) {
      setError("Debe seleccionar una persona")
      return
    }

    try {
      setIsSubmitting(true)

      const url = isEditMode ? `/api/asistencias/${currentAsistencia.id}` : "/api/asistencias"

      const method = isEditMode ? "PUT" : "POST"

      const response = await fetch(url, {
        method,
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          tipoPersona: currentAsistencia.tipoPersona,
          estudianteId: currentAsistencia.tipoPersona === "estudiante" ? currentAsistencia.estudianteId : null,
          profesorId: currentAsistencia.tipoPersona === "profesor" ? currentAsistencia.profesorId : null,
          obreroId: currentAsistencia.tipoPersona === "obrero" ? currentAsistencia.obreroId : null,
          fecha: currentAsistencia.fecha,
          presente: currentAsistencia.presente,
        }),
      })

      if (!response.ok) {
        throw new Error("Error al guardar asistencia")
      }

      // Recargar asistencias
      await fetchAsistencias()

      // Cerrar diálogo y limpiar estado
      setIsDialogOpen(false)
      setCurrentAsistencia({
        presente: true,
        tipoPersona: "estudiante",
      })
      setIsEditMode(false)
      setError(null)
    } catch (error) {
      console.error("Error:", error)
      setError("Error al guardar asistencia")
    } finally {
      setIsSubmitting(false)
    }
  }

  // Eliminar asistencia
  const handleDelete = async (id: number) => {
    try {
      setDeleteId(id)

      const response = await fetch(`/api/asistencias/${id}`, {
        method: "DELETE",
      })

      if (!response.ok) {
        throw new Error("Error al eliminar asistencia")
      }

      // Recargar asistencias
      await fetchAsistencias()
    } catch (error) {
      console.error("Error:", error)
      setError("Error al eliminar asistencia")
    } finally {
      setDeleteId(null)
    }
  }

  // Abrir diálogo para crear
  const handleCreate = () => {
    setCurrentAsistencia({
      presente: true,
      tipoPersona: "estudiante",
    })
    setIsEditMode(false)
    setIsDialogOpen(true)
    setError(null)
  }

  // Abrir diálogo para editar
  const handleEdit = (asistencia: Asistencia) => {
    setCurrentAsistencia({
      id: asistencia.id,
      tipoPersona: asistencia.tipoPersona,
      estudianteId: asistencia.estudianteId,
      profesorId: asistencia.profesorId,
      obreroId: asistencia.obreroId,
      fecha: asistencia.fecha,
      presente: asistencia.presente,
    })
    setIsEditMode(true)
    setIsDialogOpen(true)
    setError(null)
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

      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-semibold">Lista de Asistencias</h2>
        <div className="flex gap-2">
          <Button onClick={handleCreate}>
            <Plus className="h-4 w-4 mr-2" />
            Nueva Asistencia
          </Button>
          <Link href="/reportes">
            <Button variant="outline">Ver Reportes</Button>
          </Link>
        </div>
      </div>

      <Card>
        <CardContent className="p-0">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>ID</TableHead>
                <TableHead>Tipo</TableHead>
                <TableHead>Persona</TableHead>
                <TableHead>Fecha</TableHead>
                <TableHead>Presente</TableHead>
                <TableHead className="text-right">Acciones</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {asistencias.length === 0 ? (
                <TableRow>
                  <TableCell colSpan={6} className="text-center py-6 text-gray-500">
                    No hay asistencias registradas
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
                    <TableCell className="text-right">
                      <div className="flex justify-end gap-2">
                        <Button variant="outline" size="icon" onClick={() => handleEdit(asistencia)}>
                          <Pencil className="h-4 w-4" />
                        </Button>
                        <Button
                          variant="destructive"
                          size="icon"
                          onClick={() => handleDelete(asistencia.id)}
                          disabled={deleteId === asistencia.id}
                        >
                          {deleteId === asistencia.id ? (
                            <Loader2 className="h-4 w-4 animate-spin" />
                          ) : (
                            <Trash2 className="h-4 w-4" />
                          )}
                        </Button>
                      </div>
                    </TableCell>
                  </TableRow>
                ))
              )}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      {/* Diálogo para crear/editar asistencia */}
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>{isEditMode ? "Editar Asistencia" : "Nueva Asistencia"}</DialogTitle>
          </DialogHeader>
          <form onSubmit={handleSubmit}>
            <div className="grid gap-4 py-4">
              <div className="grid gap-2">
                <Label htmlFor="tipoPersona">Tipo de Persona</Label>
                <Select
                  value={currentAsistencia.tipoPersona}
                  onValueChange={(value: "estudiante" | "profesor" | "obrero") => {
                    setCurrentAsistencia({
                      ...currentAsistencia,
                      tipoPersona: value,
                      // Limpiar los IDs de otros tipos de persona
                      estudianteId: value === "estudiante" ? currentAsistencia.estudianteId : null,
                      profesorId: value === "profesor" ? currentAsistencia.profesorId : null,
                      obreroId: value === "obrero" ? currentAsistencia.obreroId : null,
                    })
                  }}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Seleccionar tipo de persona" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="estudiante">Estudiante</SelectItem>
                    <SelectItem value="profesor">Profesor</SelectItem>
                    <SelectItem value="obrero">Obrero</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Selector de persona según el tipo */}
              {currentAsistencia.tipoPersona === "estudiante" && (
                <div className="grid gap-2">
                  <Label htmlFor="estudianteId">Estudiante</Label>
                  <Select
                    value={currentAsistencia.estudianteId?.toString() || ""}
                    onValueChange={(value) =>
                      setCurrentAsistencia({ ...currentAsistencia, estudianteId: Number(value) })
                    }
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Seleccionar estudiante" />
                    </SelectTrigger>
                    <SelectContent>
                      {estudiantes.map((estudiante) => (
                        <SelectItem key={estudiante.id} value={estudiante.id.toString()}>
                          {estudiante.nombre} - {estudiante.grado} {estudiante.seccion}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              )}

              {currentAsistencia.tipoPersona === "profesor" && (
                <div className="grid gap-2">
                  <Label htmlFor="profesorId">Profesor</Label>
                  <Select
                    value={currentAsistencia.profesorId?.toString() || ""}
                    onValueChange={(value) => setCurrentAsistencia({ ...currentAsistencia, profesorId: Number(value) })}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Seleccionar profesor" />
                    </SelectTrigger>
                    <SelectContent>
                      {profesores.map((profesor) => (
                        <SelectItem key={profesor.id} value={profesor.id.toString()}>
                          {profesor.nombre} - {profesor.materia}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              )}

              {currentAsistencia.tipoPersona === "obrero" && (
                <div className="grid gap-2">
                  <Label htmlFor="obreroId">Obrero</Label>
                  <Select
                    value={currentAsistencia.obreroId?.toString() || ""}
                    onValueChange={(value) => setCurrentAsistencia({ ...currentAsistencia, obreroId: Number(value) })}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Seleccionar obrero" />
                    </SelectTrigger>
                    <SelectContent>
                      {obreros.map((obrero) => (
                        <SelectItem key={obrero.id} value={obrero.id.toString()}>
                          {obrero.nombre} - {obrero.area}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              )}

              <div className="grid gap-2">
                <Label htmlFor="presente">Asistencia</Label>
                <div className="flex items-center space-x-2">
                  <Switch
                    id="presente"
                    checked={currentAsistencia.presente}
                    onCheckedChange={(checked) => setCurrentAsistencia({ ...currentAsistencia, presente: checked })}
                  />
                  <Label htmlFor="presente">{currentAsistencia.presente ? "Presente" : "Ausente"}</Label>
                </div>
              </div>
            </div>
            <DialogFooter>
              <Button type="button" variant="outline" onClick={() => setIsDialogOpen(false)}>
                Cancelar
              </Button>
              <Button type="submit" disabled={isSubmitting}>
                {isSubmitting && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                {isEditMode ? "Actualizar" : "Crear"}
              </Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  )
}
