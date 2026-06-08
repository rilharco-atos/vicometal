import Header from '@/components/Header'
import Footer from '@/components/Footer'
import PremiumBackground from '@/components/PremiumBackground'
import ContactPage from '@/components/pages/ContactPage'

export const metadata = {
  title: 'Contactos — VICOMETAL',
  description: 'Contacte o Grupo Vicometal — Morada, telefone, email e mapa de localização. Soure, Portugal.',
}

export default function Page() {
  return (
    <>
      <PremiumBackground />
      <Header />
      <main>
        <ContactPage />
      </main>
      <Footer />
    </>
  )
}
