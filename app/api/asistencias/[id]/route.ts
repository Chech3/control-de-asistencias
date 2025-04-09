import { NextResponse } from "next/server"
import prisma from "@/lib/prisma"

// GET /api/asistencias/[id] - Obtener una asistencia por ID
export async function GET(request: Request, { params }: { params: { id: string } }) {
  try {
    const id = Number.parseInt(params.id)

    if (isNaN(id)) {
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
export async function PUT(request: Request, { params }: { params: { id: string } }) {
  try {
    const id = Number.parseInt(params.id)

    if (isNaN(id)) {
      return NextResponse.json({ error: "ID inválido" }, { status: 400 })
    }

    const { tipoPersona, estudianteId, profesorId, obreroId, fecha, presente } = await request.json()

    if (!tipoPersona || presente === undefined) {
      return NextResponse.json({ error: "Faltan campos requeridos" }, { status: 400 })
    }

    // Verificar que existe la persona según el tipo
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

    const asistencia = await prisma.asistencia.update({
      where: { id },
      data: {
        tipoPersona,
        estudianteId: tipoPersona === "estudiante" ? Number(estudianteId) : null,
        profesorId: tipoPersona === "profesor" ? Number(profesorId) : null,
        obreroId: tipoPersona === "obrero" ? Number(obreroId) : null,
        fecha: fecha ? new Date(fecha) : undefined,
        presente,
      },
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
export async function DELETE(request: Request, { params }: { params: { id: string } }) {
  try {
    const id = Number.parseInt(params.id)

    if (isNaN(id)) {
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
