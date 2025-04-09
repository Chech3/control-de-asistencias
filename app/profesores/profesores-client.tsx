"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Label } from "@/components/ui/label"
import { Loader2, Plus, Pencil, Trash2 } from "lucide-react"

type Profesor = {
  id: number
  nombre: string
  materia: string
  creadoEn: string
}

export function ProfesoresClient() {
  const [profesores, setProfesores] = useState<Profesor[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  const [isDialogOpen, setIsDialogOpen] = useState(false)
  const [isEditMode, setIsEditMode] = useState(false)
  const [currentProfesor, setCurrentProfesor] = useState<Partial<Profesor>>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [deleteId, setDeleteId] = useState<number | null>(null)

  // Cargar profesores
  const fetchProfesores = async () => {
    try {
      setLoading(true)
      const response = await fetch("/api/profesores")
      if (!response.ok) {
        throw new Error("Error al cargar profesores")
      }
      const data = await response.json()
      setProfesores(data)
    } catch (error) {
      console.error("Error:", error)
      setError("Error al cargar profesores")
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchProfesores()
  }, [])

  // Crear o actualizar profesor
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!currentProfesor.nombre || !currentProfesor.materia) {
      return
    }

    try {
      setIsSubmitting(true)

      const url = isEditMode ? `/api/profesores/${currentProfesor.id}` : "/api/profesores"

      const method = isEditMode ? "PUT" : "POST"

      const response = await fetch(url, {
        method,
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          nombre: currentProfesor.nombre,
          materia: currentProfesor.materia,
        }),
      })

      if (!response.ok) {
        throw new Error("Error al guardar profesor")
      }

      // Recargar profesores
      await fetchProfesores()

      // Cerrar diálogo y limpiar estado
      setIsDialogOpen(false)
      setCurrentProfesor({})
      setIsEditMode(false)
    } catch (error) {
      console.error("Error:", error)
      setError("Error al guardar profesor")
    } finally {
      setIsSubmitting(false)
    }
  }

  // Eliminar profesor
  const handleDelete = async (id: number) => {
    try {
      setDeleteId(id)

      const response = await fetch(`/api/profesores/${id}`, {
        method: "DELETE",
      })

      if (!response.ok) {
        throw new Error("Error al eliminar profesor")
      }

      // Recargar profesores
      await fetchProfesores()
    } catch (error) {
      console.error("Error:", error)
      setError("Error al eliminar profesor")
    } finally {
      setDeleteId(null)
    }
  }

  // Abrir diálogo para crear
  const handleCreate = () => {
    setCurrentProfesor({})
    setIsEditMode(false)
    setIsDialogOpen(true)
  }

  // Abrir diálogo para editar
  const handleEdit = (profesor: Profesor) => {
    setCurrentProfesor(profesor)
    setIsEditMode(true)
    setIsDialogOpen(true)
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
        <h2 className="text-xl font-semibold">Lista de Profesores</h2>
        <Button onClick={handleCreate}>
          <Plus className="h-4 w-4 mr-2" />
          Nuevo Profesor
        </Button>
      </div>

      <Card>
        <CardContent className="p-0">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>ID</TableHead>
                <TableHead>Nombre</TableHead>
                <TableHead>Materia</TableHead>
                <TableHead>Fecha de Creación</TableHead>
                <TableHead className="text-right">Acciones</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {profesores.length === 0 ? (
                <TableRow>
                  <TableCell colSpan={5} className="text-center py-6 text-gray-500">
                    No hay profesores registrados
                  </TableCell>
                </TableRow>
              ) : (
                profesores.map((profesor) => (
                  <TableRow key={profesor.id}>
                    <TableCell>{profesor.id}</TableCell>
                    <TableCell>{profesor.nombre}</TableCell>
                    <TableCell>{profesor.materia}</TableCell>
                    <TableCell>{new Date(profesor.creadoEn).toLocaleDateString()}</TableCell>
                    <TableCell className="text-right">
                      <div className="flex justify-end gap-2">
                        <Button variant="outline" size="icon" onClick={() => handleEdit(profesor)}>
                          <Pencil className="h-4 w-4" />
                        </Button>
                        <Button
                          variant="destructive"
                          size="icon"
                          onClick={() => handleDelete(profesor.id)}
                          disabled={deleteId === profesor.id}
                        >
                          {deleteId === profesor.id ? (
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

      {/* Diálogo para crear/editar profesor */}
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>{isEditMode ? "Editar Profesor" : "Nuevo Profesor"}</DialogTitle>
          </DialogHeader>
          <form onSubmit={handleSubmit}>
            <div className="grid gap-4 py-4">
              <div className="grid gap-2">
                <Label htmlFor="nombre">Nombre</Label>
                <Input
                  id="nombre"
                  value={currentProfesor.nombre || ""}
                  onChange={(e) => setCurrentProfesor({ ...currentProfesor, nombre: e.target.value })}
                  required
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="materia">Materia</Label>
                <Input
                  id="materia"
                  value={currentProfesor.materia || ""}
                  onChange={(e) => setCurrentProfesor({ ...currentProfesor, materia: e.target.value })}
                  required
                />
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
