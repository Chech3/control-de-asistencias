import { Navbar } from "@/components/navbar"
import Link from "next/link"
import { UserRound, BookOpen, HardHat, ClipboardCheck, BarChart } from "lucide-react"

export default function Home() {
  return (
    <div>
      <Navbar />
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-center mb-8">Sistema de Gestión Escolar</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          <Link href="/estudiantes">
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="flex items-center justify-center mb-4">
                <UserRound className="h-12 w-12 text-blue-500" />
              </div>
              <h2 className="text-xl font-semibold text-center">Estudiantes</h2>
              <p className="text-gray-600 text-center mt-2">Gestionar estudiantes</p>
            </div>
          </Link>

          <Link href="/profesores">
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="flex items-center justify-center mb-4">
                <BookOpen className="h-12 w-12 text-green-500" />
              </div>
              <h2 className="text-xl font-semibold text-center">Profesores</h2>
              <p className="text-gray-600 text-center mt-2">Gestionar profesores</p>
            </div>
          </Link>

          <Link href="/obreros">
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="flex items-center justify-center mb-4">
                <HardHat className="h-12 w-12 text-yellow-500" />
              </div>
              <h2 className="text-xl font-semibold text-center">Obreros</h2>
              <p className="text-gray-600 text-center mt-2">Gestionar obreros</p>
            </div>
          </Link>

          <Link href="/asistencias">
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="flex items-center justify-center mb-4">
                <ClipboardCheck className="h-12 w-12 text-purple-500" />
              </div>
              <h2 className="text-xl font-semibold text-center">Asistencias</h2>
              <p className="text-gray-600 text-center mt-2">Gestionar asistencias</p>
            </div>
          </Link>

          <Link href="/reportes">
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="flex items-center justify-center">
                <BarChart className="h-12 w-12 text-red-500" />
              </div>
              <h2 className="text-xl font-semibold text-center">Reportes</h2>
              <p className="text-gray-600 text-center ">Ver reportes de asistencia</p>
            </div>
          </Link>
        </div>
      </main>
    </div>
  )
}
