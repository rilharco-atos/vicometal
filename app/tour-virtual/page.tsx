import Header from '@/components/Header'
import Footer from '@/components/Footer'
import PremiumBackground from '@/components/PremiumBackground'
import VirtualTourPage from '@/components/pages/VirtualTourPage'

export default function TourVirtual() {
  return (
    <>
      <PremiumBackground />
      <Header />
      <main>
        <VirtualTourPage />
      </main>
      <Footer />
    </>
  )
}
