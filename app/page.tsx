import Header from '@/components/Header'
import HeroSection from '@/components/HeroSection'
import QuienesSomos from '@/components/QuienesSomos'
import QueHacemos from '@/components/QueHacemos'
import DondeEstamos from '@/components/DondeEstamos'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />
      <QuienesSomos />
      <QueHacemos />
      <DondeEstamos />
      <Footer />
    </main>
  )
}
