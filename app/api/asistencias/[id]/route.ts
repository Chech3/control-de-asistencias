import { type NextRequest, NextResponse } from "next/server"
import { prisma } from "@/lib/prisma"

// Utilidad para extraer el ID desde la URL
function getIdFromRequest(request: NextRequest): number | null {
  const idParam = request.nextUrl.pathname.split("/").pop()
  const id = Number.parseInt(idParam || "")
  return isNaN(id) ? null : id
}

// GET /api/asistencias/[id] - Obtener una asistencia por ID
export async function GET(request: NextRequest) {
  try {
    const id = getIdFromRequest(request)

    if (id === null) {
      return NextResponse.json({ error: "ID inválido" }, { status: 400 })
    }

    const asistencia = await prisma.asistencia.findUnique({
      where: { id },
      include: {
        estudiante: true,
        profesor: true,
        obrero: true,
      },
    })

    if (!asistencia) {
      return NextResponse.json({ error: "Asistencia no encontrada" }, { status: 404 })
    }

    return NextResponse.json(asistencia)
  } catch (error) {
    console.error("Error al obtener asistencia:", error)
    return NextResponse.json({ error: "Error al obtener asistencia" }, { status: 500 })
  }
}

// PUT /api/asistencias/[id] - Actualizar una asistencia
export async function PUT(request: NextRequest) {
  try {
    const id = getIdFromRequest(request)

    if (id === null) {
      return NextResponse.json({ error: "ID inválido" }, { status: 400 })
    }

    const { tipoPersona, estudianteId, profesorId, obreroId, fecha, presente } = await request.json()

    if (!tipoPersona || presente === undefined) {
      return NextResponse.json({ error: "Faltan campos requeridos" }, { status: 400 })
    }

    let personaExiste = false

    if (tipoPersona === "estudiante" && estudianteId) {
      const estudiante = await prisma.estudiante.findUnique({
        where: { id: Number(estudianteId) },
      })
      personaExiste = !!estudiante
    } else if (tipoPersona === "profesor" && profesorId) {
      const profesor = await prisma.profesor.findUnique({
        where: { id: Number(profesorId) },
      })
      personaExiste = !!profesor
    } else if (tipoPersona === "obrero" && obreroId) {
      const obrero = await prisma.obrero.findUnique({
        where: { id: Number(obreroId) },
      })
      personaExiste = !!obrero
    }

    if (!personaExiste) {
      return NextResponse.json({ error: "Persona no encontrada" }, { status: 404 })
    }

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const data: any = {
      tipoPersona,
      fecha: fecha ? new Date(fecha) : undefined,
      presente,
    }

    if (tipoPersona === "estudiante") {
      data.estudianteId = Number(estudianteId)
      data.profesorId = null
      data.obreroId = null
    } else if (tipoPersona === "profesor") {
      data.estudianteId = null
      data.profesorId = Number(profesorId)
      data.obreroId = null
    } else if (tipoPersona === "obrero") {
      data.estudianteId = null
      data.profesorId = null
      data.obreroId = Number(obreroId)
    }

    const asistencia = await prisma.asistencia.update({
      where: { id },
      data,
      include: {
        estudiante: true,
        profesor: true,
        obrero: true,
      },
    })

    return NextResponse.json(asistencia)
  } catch (error) {
    console.error("Error al actualizar asistencia:", error)
    return NextResponse.json({ error: "Error al actualizar asistencia" }, { status: 500 })
  }
}

// DELETE /api/asistencias/[id] - Eliminar una asistencia
export async function DELETE(request: NextRequest) {
  try {
    const id = getIdFromRequest(request)

    if (id === null) {
      return NextResponse.json({ error: "ID inválido" }, { status: 400 })
    }

    await prisma.asistencia.delete({
      where: { id },
    })

    return NextResponse.json({ message: "Asistencia eliminada correctamente" })
  } catch (error) {
    console.error("Error al eliminar asistencia:", error)
    return NextResponse.json({ error: "Error al eliminar asistencia" }, { status: 500 })
  }
}
