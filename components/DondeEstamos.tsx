'use client'

import { MapPin, Phone, Mail, Clock } from 'lucide-react'

export default function DondeEstamos() {
  return (
    <section id="donde-estamos" className="section-padding bg-fsdo-gray">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-fsdo-dark mb-6 font-playfair">
            DÓNDE ESTAMOS
          </h2>
          <div className="w-24 h-1 bg-fsdo-green mx-auto mb-8"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="fade-in">
            <div className="bg-white rounded-2xl shadow-xl p-8 card">
              <h3 className="text-2xl font-bold text-fsdo-dark mb-8 text-center">
                INFORMACIÓN DE CONTACTO
              </h3>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-fsdo-green text-white p-3 rounded-full flex-shrink-0">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-fsdo-dark mb-2">Dirección</h4>
                    <p className="text-gray-600 leading-relaxed">
                      Calle 8 con, casa N° 13-66 pasaje Mucuritas<br />
                      San Cristóbal 5001, Táchira, Venezuela
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-fsdo-yellow text-fsdo-dark p-3 rounded-full flex-shrink-0">
                    <Phone size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-fsdo-dark mb-2">Teléfono</h4>
                    <a 
                      href="tel:+584147340470" 
                      className="text-fsdo-green hover:text-fsdo-light-green transition-colors duration-300"
                    >
                      +58 414 734 0470
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-fsdo-light-green text-white p-3 rounded-full flex-shrink-0">
                    <Mail size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-fsdo-dark mb-2">Email</h4>
                    <a 
                      href="mailto:fundacionsoldeoccidente@gmail.com" 
                      className="text-fsdo-green hover:text-fsdo-light-green transition-colors duration-300"
                    >
                      fundacionsoldeoccidente@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-fsdo-accent text-white p-3 rounded-full flex-shrink-0">
                    <Clock size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-fsdo-dark mb-2">Horarios de Atención</h4>
                    <p className="text-gray-600">
                      Lunes a Viernes: 8:00 AM - 5:00 PM<br />
                      Sábados: 8:00 AM - 12:00 PM
                    </p>
                  </div>
                </div>
              </div>

              {/* Social Media */}
              <div className="mt-8 pt-8 border-t border-gray-200">
                <h4 className="font-semibold text-fsdo-dark mb-4 text-center">Síguenos en Redes Sociales</h4>
                <div className="flex justify-center">
                  <a 
                    href="https://www.instagram.com/soldeoccidente283?igsh=Y2RvdWl3cjVhcDNt" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="bg-gradient-to-r from-pink-500 to-purple-600 text-white p-3 rounded-full hover:scale-110 transition-transform duration-300"
                  >
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.62 5.367 11.987 11.988 11.987s11.987-5.367 11.987-11.987C24.014 5.367 18.647.001 12.017.001zM8.449 16.988c-1.297 0-2.448-.49-3.323-1.297C4.198 14.895 3.708 13.744 3.708 12.447s.49-2.448 1.297-3.323c.875-.807 2.026-1.297 3.323-1.297s2.448.49 3.323 1.297c.807.875 1.297 2.026 1.297 3.323s-.49 2.448-1.297 3.323c-.875.807-2.026 1.297-3.323 1.297zm7.83-9.281h-1.869v1.869h1.869V7.707zm-5.596 1.869c0-1.033.84-1.873 1.873-1.873s1.873.84 1.873 1.873-.84 1.873-1.873 1.873-1.873-.84-1.873-1.873z"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Google Maps */}
          <div className="fade-in">
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden card">
              <div className="p-6 border-b border-gray-200">
                <h3 className="text-xl font-bold text-fsdo-dark text-center">
                  NUESTRA UBICACIÓN
                </h3>
              </div>
              <div className="relative h-96">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3939.123456789!2d-72.2218391!3d7.7490291!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e661334d3f331d9%3A0x7bc707c4e879a271!2sFundaci%C3%B3n%20Sol%20de%20Occidente!5e0!3m2!1ses!2sve!4v1234567890123!5m2!1ses!2sve"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Ubicación de Fundación Sol de Occidente"
                />
              </div>
              <div className="p-4 bg-fsdo-gray">
                <p className="text-sm text-gray-600 text-center">
                  Haz clic en el mapa para ver la ubicación completa en Google Maps
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
