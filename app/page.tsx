import Header from '@/components/Header'
import Footer from '@/components/Footer'
import PremiumBackground from '@/components/PremiumBackground'
import Hero from '@/components/home/Hero'
import Services from '@/components/home/Services'
import Experience from '@/components/home/Experience'
import WorldMap from '@/components/home/WorldMap'
import Process from '@/components/home/Process'
import CTA from '@/components/home/CTA'

export default function HomePage() {
  return (
    <>
      <PremiumBackground />
      <Header />
      <main>
        <Hero />
        <Services />
        <Experience />
        <WorldMap />
        <Process />
        <CTA />
      </main>
      <Footer />
    </>
  )
}
