import type { Metadata } from 'next'
import { inter, playfair } from './fonts'
import './globals.css'

export const metadata: Metadata = {
  title: 'Fundación Sol de Occidente - Ayudando a los más necesitados en Táchira',
  description: 'Somos una fundación sin fines de lucro que trabaja en la construcción de un mundo más igualitario, en pro de la dignidad humana en el estado Táchira, Venezuela.',
  keywords: 'fundación, sol de occidente, táchira, venezuela, ayuda humanitaria, caridad, donaciones',
  authors: [{ name: 'Fundación Sol de Occidente' }],
  openGraph: {
    title: 'Fundación Sol de Occidente',
    description: 'Ayudando a los más necesitados en Táchira, Venezuela',
    type: 'website',
    locale: 'es_VE',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" className={`${inter.variable} ${playfair.variable}`}>
      <body className={`${inter.className} antialiased`}>
        {children}
      </body>
    </html>
  )
}
