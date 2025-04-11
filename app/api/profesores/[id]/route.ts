import { NextResponse, type NextRequest } from "next/server"
import { prisma } from "@/lib/prisma"

// Utilidad para extraer el ID desde la URL
function getIdFromRequest(request: NextRequest): number | null {
  const idParam = request.nextUrl.pathname.split("/").pop()
  const id = Number.parseInt(idParam || "")
  return isNaN(id) ? null : id
}

// GET /api/profesores/[id]
export async function GET(request: NextRequest) {
  try {
    const id = getIdFromRequest(request)

    if (id === null) {
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

// PUT /api/profesores/[id]
export async function PUT(request: NextRequest) {
  try {
    const id = getIdFromRequest(request)

    if (id === null) {
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

// DELETE /api/profesores/[id]
export async function DELETE(request: NextRequest) {
  try {
    const id = getIdFromRequest(request)

    if (id === null) {
      return NextResponse.json({ error: "ID inválido" }, { status: 400 })
    }

    // Primero eliminamos las asistencias relacionadas
    await prisma.asistencia.deleteMany({
      where: { profesorId: id },
    })

    // Luego eliminamos el profesor
    await prisma.profesor.delete({
      where: { id },
    })

    return NextResponse.json({ message: "Profesor eliminado correctamente" })
  } catch (error) {
    console.error("Error al eliminar profesor:", error)
    return NextResponse.json({ error: "Error al eliminar profesor" }, { status: 500 })
  }
}
