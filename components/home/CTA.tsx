'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import Link from 'next/link'

export default function CTA() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section ref={ref} className="py-32 relative">
      <div className="max-w-[1440px] mx-auto px-6 md:px-margin">
        <div className="relative border border-wireframe-stroke p-12 md:p-20 text-center overflow-hidden">
          {/* Background glow */}
          <div className="absolute inset-0 bg-gradient-to-br from-blueprint-cyan/[0.02] via-transparent to-blueprint-cyan/[0.01]" />

          {/* Corner brackets */}
          <div className="absolute top-0 left-0 w-16 h-16 border-t border-l border-blueprint-cyan/40" />
          <div className="absolute bottom-0 right-0 w-16 h-16 border-b border-r border-blueprint-cyan/40" />

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="relative z-10"
          >
            <span className="font-mono text-label-caps text-blueprint-cyan uppercase tracking-widest block mb-6">
              Próximo Passo
            </span>
            <h2 className="font-headline text-headline-lg md:text-display-lg text-on-surface mb-6 uppercase tracking-tight">
              Inicie O Seu Projeto
            </h2>
            <p className="font-body text-body-lg text-on-surface-variant max-w-2xl mx-auto mb-10">
              Da conceção à entrega — a nossa equipa de engenharia está preparada para
              transformar as suas especificações em realidade industrial.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link href="/orcamento" className="btn-primary">
                Solicitar Orçamento
              </Link>
              <Link href="/contactos" className="btn-ghost">
                Falar com Engenharia
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
