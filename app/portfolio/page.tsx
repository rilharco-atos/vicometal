import Header from '@/components/Header'
import Footer from '@/components/Footer'
import PremiumBackground from '@/components/PremiumBackground'
import PortfolioPage from '@/components/pages/PortfolioPage'

export const metadata = {
  title: 'Projetos — VICOMETAL',
  description: 'Portfólio de projetos industriais — estruturas metálicas, equipamentos, centrais e instalações em mais de 15 países.',
}

export default function Page() {
  return (
    <>
      <PremiumBackground />
      <Header />
      <main>
        <PortfolioPage />
      </main>
      <Footer />
    </>
  )
}
