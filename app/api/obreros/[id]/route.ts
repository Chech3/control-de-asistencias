import { NextResponse } from "next/server"
import prisma from "@/lib/prisma"

// GET /api/obreros/[id] - Obtener un obrero por ID
export async function GET(request: Request, { params }: { params: { id: string } }) {
  try {
    const id = Number.parseInt(params.id)

    if (isNaN(id)) {
      return NextResponse.json({ error: "ID inválido" }, { status: 400 })
    }

    const obrero = await prisma.obrero.findUnique({
      where: { id },
    })

    if (!obrero) {
      return NextResponse.json({ error: "Obrero no encontrado" }, { status: 404 })
    }

    return NextResponse.json(obrero)
  } catch (error) {
    console.error("Error al obtener obrero:", error)
    return NextResponse.json({ error: "Error al obtener obrero" }, { status: 500 })
  }
}

// PUT /api/obreros/[id] - Actualizar un obrero
export async function PUT(request: Request, { params }: { params: { id: string } }) {
  try {
    const id = Number.parseInt(params.id)

    if (isNaN(id)) {
      return NextResponse.json({ error: "ID inválido" }, { status: 400 })
    }

    const { nombre, area } = await request.json()

    if (!nombre || !area) {
      return NextResponse.json({ error: "Faltan campos requeridos" }, { status: 400 })
    }

    const obrero = await prisma.obrero.update({
      where: { id },
      data: {
        nombre,
        area,
      },
    })

    return NextResponse.json(obrero)
  } catch (error) {
    console.error("Error al actualizar obrero:", error)
    return NextResponse.json({ error: "Error al actualizar obrero" }, { status: 500 })
  }
}

// DELETE /api/obreros/[id] - Eliminar un obrero
export async function DELETE(request: Request, { params }: { params: { id: string } }) {
  try {
    const id = Number.parseInt(params.id)

    if (isNaN(id)) {
      return NextResponse.json({ error: "ID inválido" }, { status: 400 })
    }

    await prisma.obrero.delete({
      where: { id },
    })

    return NextResponse.json({ message: "Obrero eliminado correctamente" })
  } catch (error) {
    console.error("Error al eliminar obrero:", error)
    return NextResponse.json({ error: "Error al eliminar obrero" }, { status: 500 })
  }
}
