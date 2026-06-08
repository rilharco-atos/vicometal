import Header from '@/components/Header'
import Footer from '@/components/Footer'
import PremiumBackground from '@/components/PremiumBackground'
import QualityPage from '@/components/pages/QualityPage'

export const metadata = {
  title: 'Qualidade — VICOMETAL',
  description: 'Sistema de gestão de qualidade Vicometal — ISO 9001:2015, ISO 14001, ISO 3834, controlo dimensional 3D.',
}

export default function Page() {
  return (
    <>
      <PremiumBackground />
      <Header />
      <main>
        <QualityPage />
      </main>
      <Footer />
    </>
  )
}
