'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { useState, useEffect } from 'react'
import HeroVisual from './HeroVisual'

export default function Hero() {
  const [mounted, setMounted] = useState(false)
  useEffect(() => { setMounted(true) }, [])

  return (
    <section className="relative min-h-screen flex items-center pt-32 pb-24">
      <div className="max-w-[1440px] mx-auto px-6 md:px-margin w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter">
          <div className="lg:col-span-8">
            {/* Status badge */}
            <motion.div
              initial={false}
              animate={mounted ? { opacity: 1, y: 0 } : { opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="inline-flex items-center gap-3 mb-8 border border-wireframe-stroke px-4 py-2 bg-white/[0.02] backdrop-blur-sm"
            >
              <span className="w-2 h-2 rounded-full bg-blueprint-cyan animate-pulse" />
              <span className="font-mono text-label-caps uppercase text-blueprint-cyan tracking-widest">
                System Active // VCM-2001
              </span>
            </motion.div>

            {/* Main headline */}
            <motion.h1
              initial={false}
              animate={mounted ? { opacity: 1, y: 0 } : { opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="font-display text-[clamp(48px,8vw,88px)] leading-[1.05] tracking-[-0.04em] font-bold text-on-surface uppercase mb-8"
            >
              Engenharia de{' '}
              <span className="text-blueprint-cyan text-glow">Precisão</span>,
              <br />
              Moldando O Futuro
              <br />
              Industrial.
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={false}
              animate={mounted ? { opacity: 1, y: 0 } : { opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="font-body text-body-lg text-on-surface-variant max-w-xl mb-12"
            >
              Especialistas em metalomecânica industrial com mais de duas décadas de
              excelência técnica. Integramos processos digitais avançados para fabricação
              de alto desempenho.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={false}
              animate={mounted ? { opacity: 1, y: 0 } : { opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="flex flex-wrap gap-4"
            >
              <Link href="/capacidades" className="btn-primary">
                Explorar Capacidades
              </Link>
              <Link href="/portfolio" className="btn-ghost">
                Ver Portfólio
              </Link>
            </motion.div>
          </div>

          {/* Right decorative element */}
          <div className="hidden lg:flex lg:col-span-4 items-center justify-center relative">
            <motion.div
              initial={false}
              animate={mounted ? { opacity: 1, scale: 1 } : { opacity: 1, scale: 1 }}
              transition={{ duration: 1.5, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
            >
              <HeroVisual />
            </motion.div>
          </div>
        </div>

        {/* Bottom stats bar */}
        <motion.div
          initial={false}
          animate={mounted ? { opacity: 1, y: 0 } : { opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2, ease: [0.22, 1, 0.36, 1] }}
          className="mt-24 pt-8 border-t border-wireframe-stroke grid grid-cols-2 md:grid-cols-4 gap-8"
        >
          {[
            { value: '24+', label: 'Anos Experiência' },
            { value: '15+', label: 'Países' },
            { value: '200+', label: 'Colaboradores' },
            { value: '3.000', label: 'ton/mês' },
          ].map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={false}
              animate={mounted ? { opacity: 1, y: 0 } : { opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.4 + i * 0.1 }}
            >
              <div className="font-display text-[36px] font-bold text-blueprint-cyan text-glow mb-1">
                {stat.value}
              </div>
              <div className="font-mono text-label-caps uppercase text-on-surface-variant">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
