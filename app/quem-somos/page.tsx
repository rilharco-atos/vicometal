import Header from '@/components/Header'
import Footer from '@/components/Footer'
import PremiumBackground from '@/components/PremiumBackground'
import AboutPage from '@/components/pages/AboutPage'

export const metadata = {
  title: 'Quem Somos — VICOMETAL',
  description: 'Conheça o Grupo Vicometal — mais de 24 anos de experiência em metalomecânica industrial, com presença em 4 continentes.',
}

export default function Page() {
  return (
    <>
      <PremiumBackground />
      <Header />
      <main>
        <AboutPage />
      </main>
      <Footer />
    </>
  )
}
