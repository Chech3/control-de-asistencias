import Link from "next/link"

export function Navbar() {
  return (
    <nav className="bg-slate-700 shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex justify-between h-16">
          <div className="flex">
            <div className="flex-shrink-0 flex items-center">
              <Link href="/" className="text-xl font-bold text-white hover:text-gray-400">
                Sistema Escolar
              </Link>
            </div>
            <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
              <Link
                href="/estudiantes"
                className="border-transparent text-gray-300 hover:border-gray-300 hover:text-gray-400 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
              >
                Estudiantes
              </Link>
              <Link
                href="/profesores"
                className="border-transparent text-gray-300 hover:border-gray-300 hover:text-gray-400 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
              >
                Profesores
              </Link>
              <Link
                href="/obreros"
                className="border-transparent text-gray-300 hover:border-gray-300 hover:text-gray-400 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
              >
                Obreros
              </Link>
              <Link
                href="/asistencias"
                className="border-transparent text-gray-300 hover:border-gray-300 hover:text-gray-400 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
              >
                Asistencias
              </Link>

              <Link
                href="/reportes"
                className="border-transparent text-gray-300 hover:border-gray-300 hover:text-gray-400 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
              >
                Reportes
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}
