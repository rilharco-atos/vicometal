import Header from '@/components/Header'
import Footer from '@/components/Footer'
import PremiumBackground from '@/components/PremiumBackground'
import ClientPortalPage from '@/components/pages/ClientPortalPage'

export default function PortalCliente() {
  return (
    <>
      <PremiumBackground />
      <Header />
      <main>
        <ClientPortalPage />
      </main>
      <Footer />
    </>
  )
}
