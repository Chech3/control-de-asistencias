import { NextResponse, type NextRequest } from "next/server"
import { prisma } from "@/lib/prisma"

// Utilidad para extraer el ID desde la URL
function getIdFromRequest(request: NextRequest): number | null {
  const idParam = request.nextUrl.pathname.split("/").pop()
  const id = Number.parseInt(idParam || "")
  return isNaN(id) ? null : id
}

// GET /api/obreros/[id]
export async function GET(request: NextRequest) {
  try {
    const id = getIdFromRequest(request)

    if (id === null) {
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

// PUT /api/obreros/[id]
export async function PUT(request: NextRequest) {
  try {
    const id = getIdFromRequest(request)

    if (id === null) {
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

// DELETE /api/obreros/[id]
export async function DELETE(request: NextRequest) {
  try {
    const id = getIdFromRequest(request)

    if (id === null) {
      return NextResponse.json({ error: "ID inválido" }, { status: 400 })
    }

    // Primero eliminamos las asistencias relacionadas
    await prisma.asistencia.deleteMany({
      where: { obreroId: id },
    })

    // Luego eliminamos el obrero
    await prisma.obrero.delete({
      where: { id },
    })

    return NextResponse.json({ message: "Obrero eliminado correctamente" })
  } catch (error) {
    console.error("Error al eliminar obrero:", error)
    return NextResponse.json({ error: "Error al eliminar obrero" }, { status: 500 })
  }
}
