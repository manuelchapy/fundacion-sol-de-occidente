'use client'

import { Heart, Home, Users, Shield, Lightbulb, Hand } from 'lucide-react'

export default function QueHacemos() {
  const activities = [
    {
      icon: <Heart size={48} />,
      title: "Ayuda Humanitaria",
      description: "Brindamos asistencia directa a las familias más vulnerables del estado Táchira."
    },
    {
      icon: <Home size={48} />,
      title: "Desarrollo Comunitario",
      description: "Trabajamos en proyectos que fortalecen las comunidades locales."
    },
    {
      icon: <Users size={48} />,
      title: "Apoyo Social",
      description: "Ofrecemos acompañamiento y orientación a quienes más lo necesitan."
    },
    {
      icon: <Hand size={48} />,
      title: "Dignidad Humana",
      description: "Promovemos el respeto y la valoración de cada persona."
    },
    {
      icon: <Shield size={48} />,
      title: "Protección",
      description: "Garantizamos un ambiente seguro para el desarrollo de las familias."
    },
    {
      icon: <Lightbulb size={48} />,
      title: "Educación",
      description: "Fomentamos el aprendizaje y el crecimiento personal."
    }
  ]

  return (
    <section id="que-hacemos" className="section-padding bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-fsdo-dark mb-6 font-playfair">
            QUÉ HACEMOS
          </h2>
          <div className="w-24 h-1 bg-fsdo-green mx-auto mb-8"></div>
        </div>

        {/* Main Description */}
        <div className="text-center mb-16">
          <div className="max-w-4xl mx-auto">
            <p className="text-xl md:text-2xl text-gray-700 leading-relaxed mb-8">
              Somos una Fundación sin fines de lucro que permite llevar una mano a los más necesitados del estado Táchira. 
              Trabajando en la construcción de un mundo más igualitario, en pro de la dignidad humana.
            </p>
          </div>
        </div>

        {/* Activities Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {activities.map((activity, index) => (
            <div 
              key={index} 
              className="card rounded-2xl p-8 text-center group hover:shadow-xl transition-all duration-300"
            >
              <div className="text-fsdo-green mb-6 group-hover:scale-110 transition-transform duration-300 flex justify-center">
                {activity.icon}
              </div>
              <h3 className="text-xl font-bold text-fsdo-dark mb-4">
                {activity.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {activity.description}
              </p>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-fsdo-green to-fsdo-light-green rounded-2xl p-8 text-white">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              ¿Quieres ser parte del cambio?
            </h3>
            <p className="text-lg mb-6 opacity-90">
              Tu apoyo puede hacer la diferencia en la vida de muchas familias
            </p>
            <button className="bg-white text-fsdo-green px-8 py-3 rounded-full font-semibold text-lg hover:bg-fsdo-gray transition-colors duration-300">
              ÚNETE A NUESTRA CAUSA
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
