import { NextResponse, type NextRequest } from "next/server"
import { prisma } from "@/lib/prisma"

// Utilidad para extraer el ID desde la URL
function getIdFromRequest(request: NextRequest): number | null {
  const idParam = request.nextUrl.pathname.split("/").pop()
  const id = Number.parseInt(idParam || "")
  return isNaN(id) ? null : id
}

// GET /api/estudiantes/[id]
export async function GET(request: NextRequest) {
  try {
    const id = getIdFromRequest(request)

    if (id === null) {
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

// PUT /api/estudiantes/[id]
export async function PUT(request: NextRequest) {
  try {
    const id = getIdFromRequest(request)

    if (id === null) {
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

// DELETE /api/estudiantes/[id]
export async function DELETE(request: NextRequest) {
  try {
    const id = getIdFromRequest(request)

    if (id === null) {
      return NextResponse.json({ error: "ID inválido" }, { status: 400 })
    }

    // Eliminar asistencias primero
    await prisma.asistencia.deleteMany({
      where: { estudianteId: id },
    })

    // Eliminar estudiante
    await prisma.estudiante.delete({
      where: { id },
    })

    return NextResponse.json({ message: "Estudiante eliminado correctamente" })
  } catch (error) {
    console.error("Error al eliminar estudiante:", error)
    return NextResponse.json({ error: "Error al eliminar estudiante" }, { status: 500 })
  }
}
