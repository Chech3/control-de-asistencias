import { NextResponse } from "next/server"
import prisma from "@/lib/prisma"

// GET /api/obreros - Obtener todos los obreros
export async function GET() {
  try {
    const obreros = await prisma.obrero.findMany()
    return NextResponse.json(obreros)
  } catch (error) {
    console.error("Error al obtener obreros:", error)
    return NextResponse.json({ error: "Error al obtener obreros" }, { status: 500 })
  }
}

// POST /api/obreros - Crear un nuevo obrero
export async function POST(request: Request) {
  try {
    const { nombre, area } = await request.json()

    if (!nombre || !area) {
      return NextResponse.json({ error: "Faltan campos requeridos" }, { status: 400 })
    }

    const obrero = await prisma.obrero.create({
      data: {
        nombre,
        area,
      },
    })

    return NextResponse.json(obrero, { status: 201 })
  } catch (error) {
    console.error("Error al crear obrero:", error)
    return NextResponse.json({ error: "Error al crear obrero" }, { status: 500 })
  }
}
