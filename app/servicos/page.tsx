import Header from '@/components/Header'
import Footer from '@/components/Footer'
import PremiumBackground from '@/components/PremiumBackground'
import ServicesPage from '@/components/pages/ServicesPage'

export const metadata = {
  title: 'Serviços — VICOMETAL',
  description: 'Serviços industriais Vicometal — Corte laser, quinagem CNC, soldadura avançada e soluções integradas de metalomecânica.',
}

export default function Page() {
  return (
    <>
      <PremiumBackground />
      <Header />
      <main>
        <ServicesPage />
      </main>
      <Footer />
    </>
  )
}
