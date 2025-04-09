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

type Obrero = {
  id: number
  nombre: string
  area: string
  creadoEn: string
}

export function ObrerosClient() {
  const [obreros, setObreros] = useState<Obrero[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  const [isDialogOpen, setIsDialogOpen] = useState(false)
  const [isEditMode, setIsEditMode] = useState(false)
  const [currentObrero, setCurrentObrero] = useState<Partial<Obrero>>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [deleteId, setDeleteId] = useState<number | null>(null)

  // Cargar obreros
  const fetchObreros = async () => {
    try {
      setLoading(true)
      const response = await fetch("/api/obreros")
      if (!response.ok) {
        throw new Error("Error al cargar obreros")
      }
      const data = await response.json()
      setObreros(data)
    } catch (error) {
      console.error("Error:", error)
      setError("Error al cargar obreros")
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchObreros()
  }, [])

  // Crear o actualizar obrero
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!currentObrero.nombre || !currentObrero.area) {
      return
    }

    try {
      setIsSubmitting(true)

      const url = isEditMode ? `/api/obreros/${currentObrero.id}` : "/api/obreros"

      const method = isEditMode ? "PUT" : "POST"

      const response = await fetch(url, {
        method,
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          nombre: currentObrero.nombre,
          area: currentObrero.area,
        }),
      })

      if (!response.ok) {
        throw new Error("Error al guardar obrero")
      }

      // Recargar obreros
      await fetchObreros()

      // Cerrar diálogo y limpiar estado
      setIsDialogOpen(false)
      setCurrentObrero({})
      setIsEditMode(false)
    } catch (error) {
      console.error("Error:", error)
      setError("Error al guardar obrero")
    } finally {
      setIsSubmitting(false)
    }
  }

  // Eliminar obrero
  const handleDelete = async (id: number) => {
    try {
      setDeleteId(id)

      const response = await fetch(`/api/obreros/${id}`, {
        method: "DELETE",
      })

      if (!response.ok) {
        throw new Error("Error al eliminar obrero")
      }

      // Recargar obreros
      await fetchObreros()
    } catch (error) {
      console.error("Error:", error)
      setError("Error al eliminar obrero")
    } finally {
      setDeleteId(null)
    }
  }

  // Abrir diálogo para crear
  const handleCreate = () => {
    setCurrentObrero({})
    setIsEditMode(false)
    setIsDialogOpen(true)
  }

  // Abrir diálogo para editar
  const handleEdit = (obrero: Obrero) => {
    setCurrentObrero(obrero)
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
        <h2 className="text-xl font-semibold">Lista de Obreros</h2>
        <Button onClick={handleCreate}>
          <Plus className="h-4 w-4 mr-2" />
          Nuevo Obrero
        </Button>
      </div>

      <Card>
        <CardContent className="p-0">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>ID</TableHead>
                <TableHead>Nombre</TableHead>
                <TableHead>Área</TableHead>
                <TableHead>Fecha de Creación</TableHead>
                <TableHead className="text-right">Acciones</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {obreros.length === 0 ? (
                <TableRow>
                  <TableCell colSpan={5} className="text-center py-6 text-gray-500">
                    No hay obreros registrados
                  </TableCell>
                </TableRow>
              ) : (
                obreros.map((obrero) => (
                  <TableRow key={obrero.id}>
                    <TableCell>{obrero.id}</TableCell>
                    <TableCell>{obrero.nombre}</TableCell>
                    <TableCell>{obrero.area}</TableCell>
                    <TableCell>{new Date(obrero.creadoEn).toLocaleDateString()}</TableCell>
                    <TableCell className="text-right">
                      <div className="flex justify-end gap-2">
                        <Button variant="outline" size="icon" onClick={() => handleEdit(obrero)}>
                          <Pencil className="h-4 w-4" />
                        </Button>
                        <Button
                          variant="destructive"
                          size="icon"
                          onClick={() => handleDelete(obrero.id)}
                          disabled={deleteId === obrero.id}
                        >
                          {deleteId === obrero.id ? (
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

      {/* Diálogo para crear/editar obrero */}
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>{isEditMode ? "Editar Obrero" : "Nuevo Obrero"}</DialogTitle>
          </DialogHeader>
          <form onSubmit={handleSubmit}>
            <div className="grid gap-4 py-4">
              <div className="grid gap-2">
                <Label htmlFor="nombre">Nombre</Label>
                <Input
                  id="nombre"
                  value={currentObrero.nombre || ""}
                  onChange={(e) => setCurrentObrero({ ...currentObrero, nombre: e.target.value })}
                  required
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="area">Área</Label>
                <Input
                  id="area"
                  value={currentObrero.area || ""}
                  onChange={(e) => setCurrentObrero({ ...currentObrero, area: e.target.value })}
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
