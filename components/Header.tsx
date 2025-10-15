'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Menu, X, Search, Share2 } from 'lucide-react'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="relative w-10 h-10">
              <Image
                src="/sdoc_283.jpg"
                alt="Fundación Sol de Occidente"
                fill
                className="object-contain"
                priority
              />
            </div>
            <div className="text-white">
              <h1 className="text-lg font-bold">FUNDACIÓN</h1>
              <p className="text-sm text-gray-300">SOL DE OCCIDENTE</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link 
              href="#quienes-somos" 
              className="text-white hover:text-fsdo-yellow transition-colors duration-300 font-medium"
            >
              QUIÉNES SOMOS
            </Link>
            <Link 
              href="#donde-estamos" 
              className="text-white hover:text-fsdo-yellow transition-colors duration-300 font-medium"
            >
              DONDE ESTAMOS
            </Link>
            <Link 
              href="#que-hacemos" 
              className="text-white hover:text-fsdo-yellow transition-colors duration-300 font-medium"
            >
              QUÉ HACEMOS
            </Link>
          </nav>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center space-x-4">
            <Link 
              href="/login"
              className="bg-masonic-gold text-masonic-dark px-4 py-2 rounded-full font-semibold text-sm hover:bg-yellow-400 transition-colors duration-300 border border-masonic-gold/50"
            >
              MIEMBROS
            </Link>
            <button className="donation-btn text-white px-6 py-2 rounded-full font-semibold text-sm">
              HAGA UNA DONACIÓN
            </button>
            <button className="text-white hover:text-fsdo-yellow transition-colors duration-300">
              <Search size={20} />
            </button>
            <button className="text-white hover:text-fsdo-yellow transition-colors duration-300">
              <Share2 size={20} />
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-white hover:text-fsdo-yellow transition-colors duration-300"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-black/95 backdrop-blur-md border-t border-gray-700">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <Link
                href="#quienes-somos"
                className="block px-3 py-2 text-white hover:text-fsdo-yellow transition-colors duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                QUIÉNES SOMOS
              </Link>
              <Link
                href="#donde-estamos"
                className="block px-3 py-2 text-white hover:text-fsdo-yellow transition-colors duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                DONDE ESTAMOS
              </Link>
              <Link
                href="#que-hacemos"
                className="block px-3 py-2 text-white hover:text-fsdo-yellow transition-colors duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                QUÉ HACEMOS
              </Link>
              <div className="pt-4 space-y-3">
                <Link
                  href="/login"
                  className="block bg-masonic-gold text-masonic-dark px-6 py-2 rounded-full font-semibold text-sm text-center hover:bg-yellow-400 transition-colors duration-300"
                  onClick={() => setIsMenuOpen(false)}
                >
                  MIEMBROS
                </Link>
                <button className="donation-btn text-white px-6 py-2 rounded-full font-semibold text-sm w-full">
                  HAGA UNA DONACIÓN
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
