import { Navbar } from "@/components/navbar"
import { ObrerosClient } from "./obreros-client"

export default function ObrerosPage() {
  return (
    <div>
      <Navbar />
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">Gestión de Obreros</h1>
        <ObrerosClient />
      </div>
    </div>
  )
}
