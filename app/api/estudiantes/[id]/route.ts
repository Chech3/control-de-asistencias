import { NextResponse } from "next/server"
import prisma from "@/lib/prisma"

// GET /api/estudiantes/[id] - Obtener un estudiante por ID
export async function GET(request: Request, { params }: { params: { id: string } }) {
  try {
    const id = Number.parseInt(params.id)

    if (isNaN(id)) {
      return NextResponse.json({ error: "ID inválido" }, { status: 400 })
    }

    const estudiante = await prisma.estudiante.findUnique({
      where: { id },
      include: {
        asistencias: true,
      },
    })

    if (!estudiante) {
      return NextResponse.json({ error: "Estudiante no encontrado" }, { status: 404 })
    }

    return NextResponse.json(estudiante)
  } catch (error) {
    console.error("Error al obtener estudiante:", error)
    return NextResponse.json({ error: "Error al obtener estudiante" }, { status: 500 })
  }
}

// PUT /api/estudiantes/[id] - Actualizar un estudiante
export async function PUT(request: Request, { params }: { params: { id: string } }) {
  try {
    const id = Number.parseInt(params.id)

    if (isNaN(id)) {
      return NextResponse.json({ error: "ID inválido" }, { status: 400 })
    }

    const { nombre, grado, seccion } = await request.json()

    if (!nombre || !grado || !seccion) {
      return NextResponse.json({ error: "Faltan campos requeridos" }, { status: 400 })
    }

    const estudiante = await prisma.estudiante.update({
      where: { id },
      data: {
        nombre,
        grado,
        seccion,
      },
    })

    return NextResponse.json(estudiante)
  } catch (error) {
    console.error("Error al actualizar estudiante:", error)
    return NextResponse.json({ error: "Error al actualizar estudiante" }, { status: 500 })
  }
}

// DELETE /api/estudiantes/[id] - Eliminar un estudiante
export async function DELETE(request: Request, { params }: { params: { id: string } }) {
  try {
    const id = Number.parseInt(params.id)

    if (isNaN(id)) {
      return NextResponse.json({ error: "ID inválido" }, { status: 400 })
    }

    // Primero eliminamos las asistencias relacionadas
    await prisma.asistencia.deleteMany({
      where: {
        estudianteId: id,
      },
    })

    // Luego eliminamos el estudiante
    await prisma.estudiante.delete({
      where: { id },
    })

    return NextResponse.json({ message: "Estudiante eliminado correctamente" })
  } catch (error) {
    console.error("Error al eliminar estudiante:", error)
    return NextResponse.json({ error: "Error al eliminar estudiante" }, { status: 500 })
  }
}
