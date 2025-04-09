"use client";

import type React from "react";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Loader2, Plus, Pencil, Trash2 } from "lucide-react";

type Estudiante = {
  id: number;
  nombre: string;
  grado: string;
  seccion: string;
  creadoEn: string;
};

export function EstudiantesClient() {
  const [estudiantes, setEstudiantes] = useState<Estudiante[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [isEditMode, setIsEditMode] = useState(false);
  const [currentEstudiante, setCurrentEstudiante] = useState<
    Partial<Estudiante>
  >({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [deleteId, setDeleteId] = useState<number | null>(null);

  // Cargar estudiantes
  const fetchEstudiantes = async () => {
    try {
      setLoading(true);
      const response = await fetch("/api/estudiantes");
      if (!response.ok) {
        throw new Error("Error al cargar estudiantes");
      }
      const data = await response.json();
      setEstudiantes(data);
    } catch (error) {
      console.error("Error:", error);
      setError("Error al cargar estudiantes");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchEstudiantes();
  }, []);

  // Crear o actualizar estudiante
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (
      !currentEstudiante.nombre ||
      !currentEstudiante.grado ||
      !currentEstudiante.seccion
    ) {
      return;
    }

    try {
      setIsSubmitting(true);

      const url = isEditMode
        ? `/api/estudiantes/${currentEstudiante.id}`
        : "/api/estudiantes";

      const method = isEditMode ? "PUT" : "POST";

      const response = await fetch(url, {
        method,
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          nombre: currentEstudiante.nombre,
          grado: currentEstudiante.grado,
          seccion: currentEstudiante.seccion,
        }),
      });

      if (!response.ok) {
        throw new Error("Error al guardar estudiante");
      }

      // Recargar estudiantes
      await fetchEstudiantes();

      // Cerrar diálogo y limpiar estado
      setIsDialogOpen(false);
      setCurrentEstudiante({});
      setIsEditMode(false);
    } catch (error) {
      console.error("Error:", error);
      setError("Error al guardar estudiante");
    } finally {
      setIsSubmitting(false);
    }
  };

  // Eliminar estudiante
  const handleDelete = async (id: number) => {
    try {
      setDeleteId(id);

      const response = await fetch(`/api/estudiantes/${id}`, {
        method: "DELETE",
      });

      if (!response.ok) {
        throw new Error("Error al eliminar estudiante");
      }

      // Recargar estudiantes
      await fetchEstudiantes();
    } catch (error) {
      console.error("Error:", error);
      setError("Error al eliminar estudiante");
    } finally {
      setDeleteId(null);
    }
  };

  // Abrir diálogo para crear
  const handleCreate = () => {
    setCurrentEstudiante({});
    setIsEditMode(false);
    setIsDialogOpen(true);
  };

  // Abrir diálogo para editar
  const handleEdit = (estudiante: Estudiante) => {
    setCurrentEstudiante(estudiante);
    setIsEditMode(true);
    setIsDialogOpen(true);
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <Loader2 className="h-8 w-8 animate-spin text-gray-500" />
      </div>
    );
  }

  return (
    <div>
      {error && (
        <div className="bg-red-50 border border-red-200 text-red-600 p-4 rounded-md mb-4">
          {error}
        </div>
      )}

      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-semibold">Lista de Estudiantes</h2>
        <Button onClick={handleCreate}>
          <Plus className="h-4 w-4 mr-2" />
          Nuevo Estudiante
        </Button>
      </div>

      <Card>
        <CardContent className="p-0">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>ID</TableHead>
                <TableHead>Nombre</TableHead>
                <TableHead>Grado</TableHead>
                <TableHead>Sección</TableHead>
                <TableHead>Fecha de Creación</TableHead>
                <TableHead className="text-right">Acciones</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {estudiantes.length === 0 ? (
                <TableRow>
                  <TableCell
                    colSpan={6}
                    className="text-center py-6 text-gray-500"
                  >
                    No hay estudiantes registrados
                  </TableCell>
                </TableRow>
              ) : (
                estudiantes.map((estudiante) => (
                  <TableRow key={estudiante.id}>
                    <TableCell>{estudiante.id}</TableCell>
                    <TableCell>{estudiante.nombre}</TableCell>
                    <TableCell>{estudiante.grado}</TableCell>
                    <TableCell>{estudiante.seccion}</TableCell>
                    <TableCell>
                      {new Date(estudiante.creadoEn).toLocaleDateString()}
                    </TableCell>
                    <TableCell className="text-right">
                      <div className="flex justify-end gap-2">
                        <Button
                          variant="outline"
                          size="icon"
                          onClick={() => handleEdit(estudiante)}
                        >
                          <Pencil className="h-4 w-4" />
                        </Button>
                        <Button
                          variant="destructive"
                          size="icon"
                          onClick={() => handleDelete(estudiante.id)}
                          disabled={deleteId === estudiante.id}
                        >
                          {deleteId === estudiante.id ? (
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

      {/* Diálogo para crear/editar estudiante */}
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>
              {isEditMode ? "Editar Estudiante" : "Nuevo Estudiante"}
            </DialogTitle>
          </DialogHeader>
          <form onSubmit={handleSubmit}>
            <div className="grid gap-4 py-4">
              <div className="grid gap-2">
                <Label htmlFor="nombre">Nombre</Label>
                <Input
                  id="nombre"
                  value={currentEstudiante.nombre || ""}
                  onChange={(e) =>
                    setCurrentEstudiante({
                      ...currentEstudiante,
                      nombre: e.target.value,
                    })
                  }
                  required
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="grado">Grado</Label>
                <Input
                  id="grado"
                  value={currentEstudiante.grado || ""}
                  onChange={(e) =>
                    setCurrentEstudiante({
                      ...currentEstudiante,
                      grado: e.target.value,
                    })
                  }
                  required
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="seccion">Sección</Label>
                <Input
                  id="seccion"
                  value={currentEstudiante.seccion || ""}
                  onChange={(e) =>
                    setCurrentEstudiante({
                      ...currentEstudiante,
                      seccion: e.target.value,
                    })
                  }
                  required
                />
              </div>
            </div>
            <DialogFooter>
              <Button
                type="button"
                variant="outline"
                onClick={() => setIsDialogOpen(false)}
              >
                Cancelar
              </Button>
              <Button type="submit" disabled={isSubmitting}>
                {isSubmitting && (
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                )}
                {isEditMode ? "Actualizar" : "Crear"}
              </Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
}
