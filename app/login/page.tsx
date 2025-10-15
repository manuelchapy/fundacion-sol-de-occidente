'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import Image from 'next/image'
import { Eye, EyeOff, Lock, User } from 'lucide-react'
import { login, checkAuthentication } from '@/lib/auth'

export default function LoginPage() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [error, setError] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const router = useRouter()

  // Check if user is already authenticated
  useEffect(() => {
    if (checkAuthentication()) {
      router.push('/planchas')
    }
  }, [router])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setError('')

    // Simulate loading delay
    await new Promise(resolve => setTimeout(resolve, 1000))

    // Authenticate using utility function
    if (login(username, password)) {
      router.push('/planchas')
    } else {
      setError('Credenciales incorrectas. Intente nuevamente.')
    }
    
    setIsLoading(false)
  }

  return (
    <div className="min-h-screen bg-masonic-dark flex items-center justify-center px-4 relative overflow-hidden">
      {/* Background stars effect */}
      <div className="absolute inset-0 bg-masonic-dark">
        <div className="absolute inset-0 opacity-30">
          {Array.from({ length: 50 }).map((_, i) => (
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

      <div className="relative z-10 w-full max-w-md">
        {/* Logo */}
        <div className="text-center mb-8">
          <div className="relative w-24 h-24 mx-auto mb-4">
            <Image
              src="/sdo283Logo.jpg"
              alt="Sol de Occidente N° 283"
              fill
              className="object-contain"
              priority
            />
          </div>
          <h1 className="text-2xl font-bold text-masonic-white mb-2">
            RESP:. LOG:. SOL DE OCCIDENTE N° 283
          </h1>
        </div>

        {/* Login Form */}
        <div className="bg-masonic-white/10 backdrop-blur-md rounded-2xl p-8 border border-masonic-gray/20 shadow-2xl">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Username Field */}
            <div>
              <label htmlFor="username" className="block text-sm font-medium text-masonic-white mb-2">
                Usuario
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <User className="h-5 w-5 text-masonic-gray" />
                </div>
                <input
                  id="username"
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className="block w-full pl-10 pr-3 py-3 border border-masonic-gray/30 rounded-lg bg-masonic-white/10 text-masonic-white placeholder-masonic-gray focus:outline-none focus:ring-2 focus:ring-masonic-gold focus:border-transparent transition-all duration-300"
                  placeholder="Ingrese su usuario"
                  required
                />
              </div>
            </div>

            {/* Password Field */}
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-masonic-white mb-2">
                Contraseña
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Lock className="h-5 w-5 text-masonic-gray" />
                </div>
                <input
                  id="password"
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="block w-full pl-10 pr-12 py-3 border border-masonic-gray/30 rounded-lg bg-masonic-white/10 text-masonic-white placeholder-masonic-gray focus:outline-none focus:ring-2 focus:ring-masonic-gold focus:border-transparent transition-all duration-300"
                  placeholder="Ingrese su contraseña"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute inset-y-0 right-0 pr-3 flex items-center"
                >
                  {showPassword ? (
                    <EyeOff className="h-5 w-5 text-masonic-gray hover:text-masonic-white transition-colors" />
                  ) : (
                    <Eye className="h-5 w-5 text-masonic-gray hover:text-masonic-white transition-colors" />
                  )}
                </button>
              </div>
            </div>

            {/* Error Message */}
            {error && (
              <div className="bg-red-500/20 border border-red-500/50 rounded-lg p-3">
                <p className="text-red-200 text-sm">{error}</p>
              </div>
            )}

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isLoading}
              className="w-full bg-gradient-to-r from-masonic-gold to-yellow-400 text-masonic-dark font-bold py-3 px-6 rounded-lg hover:from-yellow-400 hover:to-masonic-gold transform hover:scale-105 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none shadow-lg"
            >
              {isLoading ? (
                <div className="flex items-center justify-center">
                  <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-masonic-dark mr-2"></div>
                  Iniciando Sesión...
                </div>
              ) : (
                'INICIAR SESIÓN'
              )}
            </button>
          </form>

          {/* Back to Home */}
          <div className="mt-6 text-center">
            <button
              onClick={() => router.push('/')}
              className="text-masonic-gray hover:text-masonic-white transition-colors duration-300 text-sm"
            >
              ← Volver al inicio
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
