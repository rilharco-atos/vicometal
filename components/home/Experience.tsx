'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import ScrollReveal from '@/components/ScrollReveal'

const highlights = [
  { icon: '✓', text: '40.000 m² de instalações industriais' },
  { icon: '✓', text: 'Certificação ISO 9001, ISO 14001 & EN ISO 3834' },
  { icon: '✓', text: '5 pontes rolantes até 30 toneladas' },
  { icon: '✓', text: 'Projetos em 4 continentes, 15+ países' },
  { icon: '✓', text: '2 robots de soldadura MIG/MAG' },
  { icon: '✓', text: 'Capacidade de 3.000 ton/mês' },
]

export default function Experience() {
  const sectionRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  })

  const imageY = useTransform(scrollYProgress, [0, 1], [60, -60])
  const imageScale = useTransform(scrollYProgress, [0, 0.5, 1], [0.95, 1, 0.95])

  return (
    <section ref={sectionRef} className="py-32 relative overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-6 md:px-margin">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          {/* Left content */}
          <div className="lg:col-span-5">
            <ScrollReveal>
              <motion.div className="font-display text-[clamp(60px,10vw,96px)] font-bold text-blueprint-cyan text-glow leading-none mb-4">
                24+
              </motion.div>
            </ScrollReveal>

            <ScrollReveal delay={0.1}>
              <h2 className="font-headline text-headline-lg text-on-surface mb-6 uppercase">
                Anos de Experiência Industrial
              </h2>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <p className="font-body text-body-lg text-on-surface-variant mb-10">
                Desde 2001, o Grupo Vicometal tem sido sinónimo de fiabilidade na indústria
                metalomecânica pesada. Com mais de 200 colaboradores e presença em 4 continentes,
                assumimos os projetos mais exigentes — do fabrico à montagem em obra.
              </p>
            </ScrollReveal>

            <div className="space-y-4">
              {highlights.map((item, i) => (
                <ScrollReveal key={item.text} delay={0.3 + i * 0.08}>
                  <div className="flex items-center gap-4 group cursor-default">
                    <div className="w-8 h-8 border border-blueprint-cyan/40 flex items-center justify-center text-blueprint-cyan text-xs group-hover:bg-blueprint-cyan/10 transition-colors duration-300">
                      {item.icon}
                    </div>
                    <span className="font-mono text-technical text-on-surface group-hover:text-on-surface transition-colors">
                      {item.text}
                    </span>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>

          {/* Right visual */}
          <div className="lg:col-span-6 lg:col-start-7 relative">
            <ScrollReveal direction="right" delay={0.3}>
              <div className="relative aspect-square">
                {/* Corner brackets */}
                <div className="absolute top-0 left-0 w-12 h-12 border-t-2 border-l-2 border-blueprint-cyan/60" />
                <div className="absolute bottom-0 right-0 w-12 h-12 border-b-2 border-r-2 border-blueprint-cyan/60" />

                {/* Image container with parallax */}
                <motion.div
                  style={{ y: imageY, scale: imageScale }}
                  className="absolute inset-4 bg-surface-container border border-wireframe-stroke overflow-hidden"
                >
                  <div
                    className="w-full h-full bg-cover bg-center opacity-50 mix-blend-luminosity"
                    style={{
                      backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAWzT7bYzx-e0SO4c7Kl3OHnw2z4_YALddwdt9wykGD_lw6IZ4-6U_z-oxldlC25RTSDT782cL8Wsh2SujTc3q0ezXQmZh60ce66c4WgZIxxHzRww7zKpCzsHUmYFnlyxdz4MdFbNOtZ3UKWPaXe3xRCG8OrdJL-y1_gAeXQbDALSxEPjbLS3hH5nDni1W64VURgvSzaOdPq4vYcLvzJi-DYNg2aPiMbQhqq8WYZ8Fjl_A6hVIMv70wriyXHcLhgly1iEqLwiq15Q')",
                    }}
                  />
                  {/* Tech overlay */}
                  <div className="absolute inset-0 pointer-events-none">
                    <div className="absolute top-1/2 left-0 w-full h-[1px] bg-blueprint-cyan/20" />
                    <div className="absolute top-0 left-1/2 w-[1px] h-full bg-blueprint-cyan/20" />
                    <div className="absolute top-1/2 left-1/2 w-6 h-6 -translate-x-1/2 -translate-y-1/2 border border-blueprint-cyan/60 rounded-full flex items-center justify-center">
                      <div className="w-2 h-2 bg-blueprint-cyan rounded-full animate-pulse" />
                    </div>
                  </div>
                </motion.div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  )
}
