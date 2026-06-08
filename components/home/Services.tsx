'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import ScrollReveal from '@/components/ScrollReveal'

const services = [
  {
    icon: '🏭',
    title: 'Fabrico',
    description: 'Estruturas metálicas, caldeiraria pesada e equipamentos industriais. Desde perfis simples a conjuntos de elevada complexidade com tolerâncias apertadas.',
    spec: '3.000 ton/mês',
    code: 'SRV.FAB_01',
  },
  {
    icon: '🔧',
    title: 'Montagem',
    description: 'Montagem de equipamentos e estruturas em obra, com equipas especializadas e meios de elevação próprios em qualquer ponto do mundo.',
    spec: 'Global',
    code: 'SRV.MNT_02',
  },
  {
    icon: '⚙️',
    title: 'Manutenção Industrial',
    description: 'Contratos de manutenção preventiva e corretiva em unidades industriais. Equipas residentes ou de intervenção rápida 24/7.',
    spec: '24/7',
    code: 'SRV.MAN_03',
  },
  {
    icon: '🔑',
    title: 'Chave-na-Mão',
    description: 'Soluções integradas do projeto à entrega: engenharia, fabrico, transporte, montagem e comissionamento de instalações completas.',
    spec: 'Turnkey',
    code: 'SRV.TKY_04',
  },
  {
    icon: '⚡',
    title: 'Soldadura Especializada',
    description: 'Processos MIG/MAG, TIG, arco submerso e soldadura robotizada. Soldadores certificados e procedimentos qualificados EN ISO 3834.',
    spec: 'ISO 3834',
    code: 'SRV.WLD_05',
  },
  {
    icon: '◈',
    title: 'Inox & Vicoinox',
    description: 'Especialistas em aço inoxidável para indústria alimentar, farmacêutica e química. Acabamentos sanitários e salas limpas.',
    spec: 'AISI 304/316',
    code: 'SRV.INX_06',
  },
]

export default function Services() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section ref={ref} className="py-32 relative">
      <div className="max-w-[1440px] mx-auto px-6 md:px-margin">
        {/* Section header */}
        <ScrollReveal className="mb-20">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-12 h-[1px] bg-blueprint-cyan" />
            <span className="font-mono text-label-caps text-blueprint-cyan uppercase tracking-widest">
              Capacidades Técnicas
            </span>
          </div>
          <h2 className="font-headline text-headline-lg text-on-surface">
            PROCESSOS DE FABRICAÇÃO CORE
          </h2>
        </ScrollReveal>

        {/* Cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.8,
                delay: index * 0.12,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="group"
            >
              <div className="glass-card-hover p-8 h-full flex flex-col relative corner-brackets">
                {/* Code badge */}
                <span className="absolute top-4 right-4 font-mono text-[10px] text-on-tertiary-container opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  {service.code}
                </span>

                {/* Icon */}
                <div className="text-[32px] mb-6 text-on-surface-variant group-hover:text-blueprint-cyan transition-colors duration-500">
                  {service.icon}
                </div>

                {/* Content */}
                <h3 className="font-headline text-headline-md text-on-surface mb-3">
                  {service.title}
                </h3>
                <p className="font-body text-body-md text-on-surface-variant mb-6 flex-grow">
                  {service.description}
                </p>

                {/* Footer */}
                <div className="flex justify-between items-center pt-4 border-t border-wireframe-stroke">
                  <span className="font-mono text-label-caps uppercase text-on-tertiary-container">
                    {service.spec}
                  </span>
                  <motion.span
                    className="text-blueprint-cyan text-sm"
                    whileHover={{ x: 4 }}
                  >
                    →
                  </motion.span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
