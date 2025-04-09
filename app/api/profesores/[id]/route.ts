import { NextResponse } from "next/server"
import prisma from "@/lib/prisma"

// GET /api/profesores/[id] - Obtener un profesor por ID
export async function GET(request: Request, { params }: { params: { id: string } }) {
  try {
    const id = Number.parseInt(params.id)

    if (isNaN(id)) {
      return NextResponse.json({ error: "ID inválido" }, { status: 400 })
    }

    const profesor = await prisma.profesor.findUnique({
      where: { id },
    })

    if (!profesor) {
      return NextResponse.json({ error: "Profesor no encontrado" }, { status: 404 })
    }

    return NextResponse.json(profesor)
  } catch (error) {
    console.error("Error al obtener profesor:", error)
    return NextResponse.json({ error: "Error al obtener profesor" }, { status: 500 })
  }
}

// PUT /api/profesores/[id] - Actualizar un profesor
export async function PUT(request: Request, { params }: { params: { id: string } }) {
  try {
    const id = Number.parseInt(params.id)

    if (isNaN(id)) {
      return NextResponse.json({ error: "ID inválido" }, { status: 400 })
    }

    const { nombre, materia } = await request.json()

    if (!nombre || !materia) {
      return NextResponse.json({ error: "Faltan campos requeridos" }, { status: 400 })
    }

    const profesor = await prisma.profesor.update({
      where: { id },
      data: {
        nombre,
        materia,
      },
    })

    return NextResponse.json(profesor)
  } catch (error) {
    console.error("Error al actualizar profesor:", error)
    return NextResponse.json({ error: "Error al actualizar profesor" }, { status: 500 })
  }
}

// DELETE /api/profesores/[id] - Eliminar un profesor
export async function DELETE(request: Request, { params }: { params: { id: string } }) {
  try {
    const id = Number.parseInt(params.id)

    if (isNaN(id)) {
      return NextResponse.json({ error: "ID inválido" }, { status: 400 })
    }

    await prisma.profesor.delete({
      where: { id },
    })

    return NextResponse.json({ message: "Profesor eliminado correctamente" })
  } catch (error) {
    console.error("Error al eliminar profesor:", error)
    return NextResponse.json({ error: "Error al eliminar profesor" }, { status: 500 })
  }
}
