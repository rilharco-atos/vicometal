import Header from '@/components/Header'
import Footer from '@/components/Footer'
import PremiumBackground from '@/components/PremiumBackground'
import CapabilitiesPage from '@/components/pages/CapabilitiesPage'

export const metadata = {
  title: 'Capacidades — VICOMETAL',
  description: 'Capacidades técnicas do Grupo Vicometal — Equipamentos, processos e certificações.',
}

export default function Page() {
  return (
    <>
      <PremiumBackground />
      <Header />
      <main>
        <CapabilitiesPage />
      </main>
      <Footer />
    </>
  )
}
