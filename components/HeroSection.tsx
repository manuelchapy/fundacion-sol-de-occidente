'use client'

import { ChevronDown } from 'lucide-react'

export default function HeroSection() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/fsdo_banne.jpeg')",
        }}
      />
      
      {/* Overlay */}
      <div className="hero-overlay absolute inset-0" />
      
      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
        <div className="fade-in">
          <h1 className="text-6xl md:text-8xl font-bold mb-6 font-playfair">
            FUNDACIÓN
          </h1>
          <h2 className="text-4xl md:text-6xl font-bold mb-8 font-playfair">
            SOL DE OCCIDENTE
          </h2>
          <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto leading-relaxed">
            Construyendo un mundo más igualitario en pro de la dignidad humana
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="donation-btn text-white px-8 py-4 rounded-full font-semibold text-lg">
              HAGA UNA DONACIÓN
            </button>
            <button 
              onClick={() => document.getElementById('quienes-somos')?.scrollIntoView({ behavior: 'smooth' })}
              className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-fsdo-dark transition-all duration-300"
            >
              CONOCER MÁS
            </button>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <button 
          onClick={() => document.getElementById('quienes-somos')?.scrollIntoView({ behavior: 'smooth' })}
          className="text-white hover:text-fsdo-yellow transition-colors duration-300"
        >
          <ChevronDown size={32} />
        </button>
      </div>
    </section>
  )
}
