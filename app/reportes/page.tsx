import { Navbar } from "@/components/navbar"
import { ReportesClient } from "./reportes-client"

export default function ReportesPage() {
  return (
    <div>
      <Navbar />
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">Reportes de Asistencia</h1>
        <ReportesClient />
      </div>
    </div>
  )
}
