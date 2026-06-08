import Header from '@/components/Header'
import Footer from '@/components/Footer'
import PremiumBackground from '@/components/PremiumBackground'
import QuotePage from '@/components/pages/QuotePage'

export const metadata = {
  title: 'Solicitar Orçamento — VICOMETAL',
  description: 'Solicite um orçamento para o seu projeto industrial. Corte laser, quinagem, soldadura e montagem.',
}

export default function Page() {
  return (
    <>
      <PremiumBackground />
      <Header />
      <main>
        <QuotePage />
      </main>
      <Footer />
    </>
  )
}
