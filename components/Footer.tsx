'use client'

import { Phone, Mail, MapPin, Instagram, Heart } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-fsdo-dark text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="relative w-12 h-12">
                <img 
                  src="/sdoc_283.jpg" 
                  alt="Fundación Sol de Occidente" 
                  className="w-full h-full object-contain"
                />
              </div>
              <div>
                <h3 className="text-xl font-bold">FUNDACIÓN</h3>
                <p className="text-fsdo-yellow font-semibold">SOL DE OCCIDENTE</p>
              </div>
            </div>
            <p className="text-gray-300 leading-relaxed mb-6 max-w-md">
              Construyendo un mundo más igualitario en pro de la dignidad humana. 
              Ayudando a los más necesitados del estado Táchira, Venezuela.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://www.instagram.com/soldeoccidente283?igsh=Y2RvdWl3cjVhcDNt" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-pink-500 to-purple-600 p-3 rounded-full hover:scale-110 transition-transform duration-300"
              >
                <Instagram size={20} />
              </a>
            </div>
          </div>

          {/* Contact Information */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-fsdo-yellow">CONTACTO</h4>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Phone size={20} className="text-fsdo-yellow flex-shrink-0" />
                <a 
                  href="tel:+584147340470" 
                  className="text-gray-300 hover:text-white transition-colors duration-300"
                >
                  +58 414 734 0470
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Mail size={20} className="text-fsdo-yellow flex-shrink-0" />
                <a 
                  href="mailto:fundacionsoldeoccidente@gmail.com" 
                  className="text-gray-300 hover:text-white transition-colors duration-300"
                >
                  fundacionsoldeoccidente@gmail.com
                </a>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin size={20} className="text-fsdo-yellow flex-shrink-0 mt-1" />
                <div className="text-gray-300">
                  <p>Calle 8 con, casa N° 13-66</p>
                  <p>pasaje Mucuritas</p>
                  <p>San Cristóbal 5001, Táchira</p>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-fsdo-yellow">ENLACES RÁPIDOS</h4>
            <div className="space-y-3">
              <a 
                href="#quienes-somos" 
                className="block text-gray-300 hover:text-white transition-colors duration-300"
              >
                Quiénes Somos
              </a>
              <a 
                href="#que-hacemos" 
                className="block text-gray-300 hover:text-white transition-colors duration-300"
              >
                Qué Hacemos
              </a>
              <a 
                href="#donde-estamos" 
                className="block text-gray-300 hover:text-white transition-colors duration-300"
              >
                Dónde Estamos
              </a>
              <a 
                href="https://www.instagram.com/soldeoccidente283?igsh=Y2RvdWl3cjVhcDNt" 
                target="_blank" 
                rel="noopener noreferrer"
                className="block text-gray-300 hover:text-white transition-colors duration-300"
              >
                Instagram
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 text-gray-400 mb-4 md:mb-0">
              <Heart size={16} className="text-fsdo-accent" />
              <span className="text-sm">
                Hecho con amor para la comunidad de Táchira
              </span>
            </div>
            <div className="text-gray-400 text-sm">
              © 2024 Fundación Sol de Occidente. Todos los derechos reservados.
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
