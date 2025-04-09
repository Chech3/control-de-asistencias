import { NextResponse } from "next/server"
import { prisma } from "@/lib/prisma"

// GET /api/asistencias - Obtener todas las asistencias
export async function GET(request: Request) {
  try {
    console.log("Iniciando consulta de asistencias")

    // Consulta simple sin filtros para depuración
    const asistencias = await prisma.asistencia.findMany({
      include: {
        estudiante: true,
        profesor: true,
        obrero: true,
      },
    })

    console.log(`Asistencias encontradas: ${asistencias.length}`)
    return NextResponse.json(asistencias)
  } catch (error) {
    console.error("Error al obtener asistencias:", error)
    return NextResponse.json({ error: "Error al obtener asistencias", details: String(error) }, { status: 500 })
  }
}

// POST /api/asistencias - Crear una nueva asistencia
export async function POST(request: Request) {
  try {
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

    // Crear la asistencia
    const data: any = {
      tipoPersona,
      fecha: fecha ? new Date(fecha) : new Date(),
      presente,
    }

    // Asignar el ID correspondiente según el tipo de persona
    if (tipoPersona === "estudiante") {
      data.estudianteId = Number(estudianteId)
    } else if (tipoPersona === "profesor") {
      data.profesorId = Number(profesorId)
    } else if (tipoPersona === "obrero") {
      data.obreroId = Number(obreroId)
    }

    const asistencia = await prisma.asistencia.create({
      data,
      include: {
        estudiante: true,
        profesor: true,
        obrero: true,
      },
    })

    return NextResponse.json(asistencia, { status: 201 })
  } catch (error) {
    console.error("Error al crear asistencia:", error)
    return NextResponse.json({ error: "Error al crear asistencia" }, { status: 500 })
  }
}
