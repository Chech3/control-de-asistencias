import { Navbar } from "@/components/navbar"
import { EstudiantesClient } from "./estudiantes-client"

export default function EstudiantesPage() {
  return (
    <div>
      <Navbar />
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">Gestión de Estudiantes</h1>
        <EstudiantesClient />
      </div>
    </div>
  )
}
