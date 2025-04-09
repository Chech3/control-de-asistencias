import { Navbar } from "@/components/navbar"
import { ProfesoresClient } from "./profesores-client"

export default function ProfesoresPage() {
  return (
    <div>
      <Navbar />
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">Gestión de Profesores</h1>
        <ProfesoresClient />
      </div>
    </div>
  )
}
