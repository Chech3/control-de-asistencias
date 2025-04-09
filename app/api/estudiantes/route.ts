import { NextResponse } from "next/server"
import prisma from "@/lib/prisma"

// GET /api/estudiantes - Obtener todos los estudiantes
export async function GET() {
  try {
    const estudiantes = await prisma.estudiante.findMany({
      include: {
        asistencias: true,
      },
    })
    return NextResponse.json(estudiantes)
  } catch (error) {
    console.error("Error al obtener estudiantes:", error)
    return NextResponse.json({ error: "Error al obtener estudiantes" }, { status: 500 })
  }
}

// POST /api/estudiantes - Crear un nuevo estudiante
export async function POST(request: Request) {
  try {
    const { nombre, grado, seccion } = await request.json()

    if (!nombre || !grado || !seccion) {
      return NextResponse.json({ error: "Faltan campos requeridos" }, { status: 400 })
    }

    const estudiante = await prisma.estudiante.create({
      data: {
        nombre,
        grado,
        seccion,
      },
    })

    return NextResponse.json(estudiante, { status: 201 })
  } catch (error) {
    console.error("Error al crear estudiante:", error)
    return NextResponse.json({ error: "Error al crear estudiante" }, { status: 500 })
  }
}
