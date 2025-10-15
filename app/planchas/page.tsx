'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import { FileText, LogOut, Star, BookOpen } from 'lucide-react'
import { checkAuthentication, logout } from '@/lib/auth'
import { getAllPlanchas, type PlanchaFile } from '@/lib/planchas'

export default function PlanchasPage() {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [planchas, setPlanchas] = useState<PlanchaFile[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const router = useRouter()

  // Check authentication and load planchas
  useEffect(() => {
    if (!checkAuthentication()) {
      router.push('/login')
      return
    }
    
    setIsAuthenticated(true)
    loadPlanchas()
  }, [router])

  const loadPlanchas = async () => {
    try {
      const planchasList = getAllPlanchas()
      setPlanchas(planchasList)
    } catch (error) {
      console.error('Error loading planchas:', error)
    } finally {
      setIsLoading(false)
    }
  }

  const handleLogout = () => {
    logout()
    router.push('/')
  }

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-masonic-dark flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-masonic-gold"></div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-masonic-dark">
      {/* Background stars effect */}
      <div className="absolute inset-0 bg-masonic-dark">
        <div className="absolute inset-0 opacity-20">
          {Array.from({ length: 30 }).map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-masonic-white rounded-full animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${2 + Math.random() * 3}s`
              }}
            />
          ))}
        </div>
      </div>

      {/* Header */}
      <header className="relative z-10 bg-masonic-dark/95 backdrop-blur-md border-b border-masonic-gray/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo and Title */}
            <div className="flex items-center space-x-4">
              <div className="relative w-12 h-12">
                <Image
                  src="/sdo283Logo.jpg"
                  alt="Sol de Occidente N° 283"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
              <div>
                <h1 className="text-lg font-bold text-masonic-white">
                  SECCIÓN DE PLANCHAS DEL DÍA
                </h1>
                <p className="text-sm text-masonic-gray">
                  Resp:. Log:. Sol de Occidente N° 283
                </p>
              </div>
            </div>

            {/* Logout Button */}
            <button
              onClick={handleLogout}
              className="flex items-center space-x-2 bg-masonic-gold text-masonic-dark px-4 py-2 rounded-lg hover:bg-yellow-400 transition-colors duration-300 font-medium"
            >
              <LogOut size={16} />
              <span>Cerrar Sesión</span>
            </button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Welcome Section */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-4">
            <BookOpen className="h-8 w-8 text-masonic-gold mr-3" />
            <h2 className="text-3xl font-bold text-masonic-white">
              Planchas Masónicas
            </h2>
          </div>
          <p className="text-masonic-gray text-lg max-w-2xl mx-auto">
            Seleccione una plancha para acceder a su contenido. Cada documento contiene 
            enseñanzas y reflexiones de nuestros hermanos masones.
          </p>
        </div>

        {/* Loading State */}
        {isLoading ? (
          <div className="flex items-center justify-center py-20">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-masonic-gold"></div>
          </div>
        ) : (
          /* Planchas Grid */
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {planchas.map((plancha, index) => (
              <Link
                key={plancha.filename}
                href={`/planchas/${encodeURIComponent(plancha.filename)}`}
                className="group"
              >
                <div className="bg-masonic-white/10 backdrop-blur-md rounded-xl p-6 border border-masonic-gray/20 hover:border-masonic-gold/50 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-2xl">
                  {/* Icon */}
                  <div className="flex items-center justify-center w-16 h-16 bg-masonic-gold/20 rounded-xl mb-4 mx-auto group-hover:bg-masonic-gold/30 transition-colors duration-300">
                    <FileText className="h-8 w-8 text-masonic-gold" />
                  </div>

                  {/* Content */}
                  <div className="text-center">
                    <h3 className="text-lg font-semibold text-masonic-white mb-2 group-hover:text-masonic-gold transition-colors duration-300">
                      {plancha.displayName}
                    </h3>
                    <p className="text-sm text-masonic-gray mb-4">
                      Autor: {plancha.author}
                    </p>
                    <div className="flex items-center justify-center text-masonic-gold">
                      <Star className="h-4 w-4 mr-1" />
                      <span className="text-sm font-medium">Plancha Masónica</span>
                    </div>
                  </div>

                  {/* Hover Effect */}
                  <div className="mt-4 text-center">
                    <div className="inline-flex items-center text-masonic-gold text-sm font-medium group-hover:translate-x-1 transition-transform duration-300">
                      Leer Plancha
                      <svg className="ml-1 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}

        {/* Empty State */}
        {!isLoading && planchas.length === 0 && (
          <div className="text-center py-20">
            <FileText className="h-16 w-16 text-masonic-gray mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-masonic-white mb-2">
              No hay planchas disponibles
            </h3>
            <p className="text-masonic-gray">
              No se encontraron planchas en este momento.
            </p>
          </div>
        )}

        {/* Footer Info */}
        <div className="mt-16 text-center">
          <div className="bg-masonic-white/5 backdrop-blur-md rounded-xl p-6 border border-masonic-gray/10">
            <p className="text-masonic-gray text-sm">
              Todas las planchas son propiedad intelectual de la Resp:. Log:. Sol de Occidente N° 283
            </p>
            <p className="text-masonic-gray text-xs mt-2">
              Para uso exclusivo de miembros autorizados
            </p>
          </div>
        </div>
      </main>
    </div>
  )
}
