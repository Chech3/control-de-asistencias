import { Navbar } from "@/components/navbar";
import { AsistenciasClient } from "./asistencias-client";

export default function AsistenciasPage() {
  return (
    <div>
      <Navbar />
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">Gestión de Asistencias</h1>
        <AsistenciasClient />
      </div>
    </div>
  );
}
