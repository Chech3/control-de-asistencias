import { NextResponse } from "next/server"
import prisma from "@/lib/prisma"

// GET /api/profesores - Obtener todos los profesores
export async function GET() {
  try {
    const profesores = await prisma.profesor.findMany()
    return NextResponse.json(profesores)
  } catch (error) {
    console.error("Error al obtener profesores:", error)
    return NextResponse.json({ error: "Error al obtener profesores" }, { status: 500 })
  }
}

// POST /api/profesores - Crear un nuevo profesor
export async function POST(request: Request) {
  try {
    const { nombre, materia } = await request.json()

    if (!nombre || !materia) {
      return NextResponse.json({ error: "Faltan campos requeridos" }, { status: 400 })
    }

    const profesor = await prisma.profesor.create({
      data: {
        nombre,
        materia,
      },
    })

    return NextResponse.json(profesor, { status: 201 })
  } catch (error) {
    console.error("Error al crear profesor:", error)
    return NextResponse.json({ error: "Error al crear profesor" }, { status: 500 })
  }
}
