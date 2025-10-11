'use client'

import { Heart, Users, Target } from 'lucide-react'

export default function QuienesSomos() {
  return (
    <section id="quienes-somos" className="section-padding bg-fsdo-gray">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-fsdo-dark mb-6 font-playfair">
            QUIÉNES SOMOS
          </h2>
          <div className="w-24 h-1 bg-fsdo-green mx-auto mb-8"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="fade-in">
            <div className="prose prose-lg max-w-none">
              <p className="text-xl text-gray-700 leading-relaxed mb-8">
                Somos el Componente filantrópico de la logia{' '}
                <a 
                  href="https://www.instagram.com/soldeoccidente283?igsh=Y2RvdWl3cjVhcDNt" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-fsdo-green hover:text-fsdo-light-green font-semibold transition-colors duration-300"
                >
                  @soldeoccidente283
                </a>
                . Nuestra misión es llevar esperanza y ayuda a quienes más lo necesitan en el estado Táchira.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-12">
              <div className="text-center">
                <div className="bg-fsdo-green text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart size={32} />
                </div>
                <h3 className="text-2xl font-bold text-fsdo-dark mb-2">100%</h3>
                <p className="text-gray-600">Sin fines de lucro</p>
              </div>
              <div className="text-center">
                <div className="bg-fsdo-yellow text-fsdo-dark w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users size={32} />
                </div>
                <h3 className="text-2xl font-bold text-fsdo-dark mb-2">+500</h3>
                <p className="text-gray-600">Familias ayudadas</p>
              </div>
              <div className="text-center">
                <div className="bg-fsdo-light-green text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Target size={32} />
                </div>
                <h3 className="text-2xl font-bold text-fsdo-dark mb-2">2023</h3>
                <p className="text-gray-600">Año de fundación</p>
              </div>
            </div>
          </div>

          {/* Image/Visual */}
          <div className="fade-in">
            <div className="relative">
              <div className="bg-white rounded-2xl shadow-2xl p-8 card">
                <div className="text-center">
                  <div className="w-32 h-32 mx-auto mb-6 relative">
                    <img 
                      src="/sdoc_283.jpg" 
                      alt="Logo Fundación Sol de Occidente" 
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <h3 className="text-2xl font-bold text-fsdo-dark mb-4">
                    FUNDACIÓN SOL DE OCCIDENTE
                  </h3>
                  <p className="text-gray-600 mb-6">
                    J-504970522
                  </p>
                  <div className="flex justify-center space-x-4">
                    <div className="w-8 h-8 bg-fsdo-green rounded-full"></div>
                    <div className="w-8 h-8 bg-fsdo-yellow rounded-full"></div>
                    <div className="w-8 h-8 bg-fsdo-light-green rounded-full"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
