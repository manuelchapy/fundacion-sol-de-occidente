'use client'

import { useState, useEffect } from 'react'
import { useRouter, useParams } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowLeft, User, X, FileText, Info, Download } from 'lucide-react'
import { checkAuthentication } from '@/lib/auth'
import { getPlanchaByFilename, AUTHOR_INFO } from '@/lib/planchas'

export default function PlanchaViewerPage() {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [showAuthorModal, setShowAuthorModal] = useState(false)
  const [filename, setFilename] = useState('')
  const [isPdfLoading, setIsPdfLoading] = useState(true)
  const router = useRouter()
  const params = useParams()

  useEffect(() => {
    // Check authentication
    if (!checkAuthentication()) {
      router.push('/login')
      return
    }
    
    setIsAuthenticated(true)
    
    // Get filename from params
    if (params.filename) {
      setFilename(decodeURIComponent(params.filename as string))
    }
  }, [router, params])

  const handleBack = () => {
    router.push('/planchas')
  }

  const handleAuthorInfo = () => {
    setShowAuthorModal(true)
  }

  const closeAuthorModal = () => {
    setShowAuthorModal(false)
  }

  const handlePdfLoad = () => {
    setIsPdfLoading(false)
  }

  const handleDownload = () => {
    const link = document.createElement('a')
    link.href = `/planchas/${encodeURIComponent(filename)}`
    link.download = filename
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
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
        <div className="absolute inset-0 opacity-10">
          {Array.from({ length: 20 }).map((_, i) => (
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
                  VISOR DE PLANCHA
                </h1>
                <p className="text-sm text-masonic-gray truncate max-w-md">
                  {filename.replace('.pdf', '')}
                </p>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex items-center space-x-3">
              <button
                onClick={handleDownload}
                className="flex items-center space-x-2 bg-masonic-white/20 text-masonic-white px-4 py-2 rounded-lg hover:bg-masonic-white/30 transition-colors duration-300 font-medium border border-masonic-white/30"
              >
                <Download size={16} />
                <span>Descargar</span>
              </button>
              
              <button
                onClick={handleAuthorInfo}
                className="flex items-center space-x-2 bg-masonic-gold/20 text-masonic-gold px-4 py-2 rounded-lg hover:bg-masonic-gold/30 transition-colors duration-300 font-medium border border-masonic-gold/30"
              >
                <Info size={16} />
                <span>Autor</span>
              </button>
              
              <button
                onClick={handleBack}
                className="flex items-center space-x-2 bg-masonic-gray/20 text-masonic-white px-4 py-2 rounded-lg hover:bg-masonic-gray/30 transition-colors duration-300 font-medium border border-masonic-gray/30"
              >
                <ArrowLeft size={16} />
                <span>Volver</span>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* PDF Viewer Container */}
        <div className="bg-masonic-white rounded-xl shadow-2xl overflow-hidden">
          <div className="bg-masonic-dark px-6 py-4 border-b border-masonic-gray/20">
            <div className="flex items-center space-x-3">
              <FileText className="h-5 w-5 text-masonic-gold" />
              <h2 className="text-lg font-semibold text-masonic-white">
                {filename.replace('.pdf', '')}
              </h2>
            </div>
          </div>
          
          {/* PDF Embed */}
          <div className="relative bg-masonic-white" style={{ height: '80vh' }}>
            {/* Loading indicator */}
            {isPdfLoading && (
              <div className="absolute inset-0 flex items-center justify-center bg-masonic-white z-10">
                <div className="text-center">
                  <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-masonic-gold mx-auto mb-4"></div>
                  <p className="text-masonic-dark font-medium">Cargando plancha...</p>
                </div>
              </div>
            )}
            
            <iframe
              src={`/planchas/${encodeURIComponent(filename)}#toolbar=1&navpanes=1&scrollbar=1&page=1&view=FitH`}
              className="w-full h-full border-0"
              title={filename}
              style={{ minHeight: '600px' }}
              onLoad={handlePdfLoad}
            />
          </div>
        </div>
      </main>

      {/* Author Info Modal */}
      {showAuthorModal && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="bg-masonic-dark rounded-xl border border-masonic-gray/20 shadow-2xl max-w-md w-full mx-4">
            {/* Modal Header */}
            <div className="flex items-center justify-between p-6 border-b border-masonic-gray/20">
              <div className="flex items-center space-x-3">
                <div className="p-2 bg-masonic-gold/20 rounded-lg">
                  <User className="h-6 w-6 text-masonic-gold" />
                </div>
                <h3 className="text-xl font-bold text-masonic-white">
                  Información del Autor
                </h3>
              </div>
              <button
                onClick={closeAuthorModal}
                className="p-2 hover:bg-masonic-gray/20 rounded-lg transition-colors duration-300"
              >
                <X className="h-5 w-5 text-masonic-gray hover:text-masonic-white" />
              </button>
            </div>

            {/* Modal Content */}
            <div className="p-6">
              <div className="space-y-4">
                <div className="bg-masonic-white/5 rounded-lg p-4 border border-masonic-gray/10">
                  <div className="flex items-center space-x-3 mb-3">
                    <div className="w-2 h-2 bg-masonic-gold rounded-full"></div>
                    <h4 className="font-semibold text-masonic-white">Autor</h4>
                  </div>
                  <p className="text-masonic-gray">{AUTHOR_INFO.name}</p>
                </div>

                <div className="bg-masonic-white/5 rounded-lg p-4 border border-masonic-gray/10">
                  <div className="flex items-center space-x-3 mb-3">
                    <div className="w-2 h-2 bg-masonic-gold rounded-full"></div>
                    <h4 className="font-semibold text-masonic-white">Grado</h4>
                  </div>
                  <p className="text-masonic-gray">{AUTHOR_INFO.grade}</p>
                </div>

                <div className="bg-masonic-white/5 rounded-lg p-4 border border-masonic-gray/10">
                  <div className="flex items-center space-x-3 mb-3">
                    <div className="w-2 h-2 bg-masonic-gold rounded-full"></div>
                    <h4 className="font-semibold text-masonic-white">Logia</h4>
                  </div>
                  <p className="text-masonic-gray">{AUTHOR_INFO.lodge}</p>
                </div>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="p-6 border-t border-masonic-gray/20">
              <button
                onClick={closeAuthorModal}
                className="w-full bg-masonic-gold text-masonic-dark font-bold py-3 px-6 rounded-lg hover:bg-yellow-400 transition-colors duration-300"
              >
                Volver
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
