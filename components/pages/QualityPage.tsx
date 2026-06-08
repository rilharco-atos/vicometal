'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import ScrollReveal from '@/components/ScrollReveal'

const certifications = [
  {
    code: 'ISO 9001:2015',
    title: 'Sistema de Gestão da Qualidade',
    description: 'Certificação do sistema de gestão da qualidade para processos de fabrico de estruturas metálicas e equipamentos industriais.',
  },
  {
    code: 'ISO 14001:2015',
    title: 'Sistema de Gestão Ambiental',
    description: 'Compromisso com a sustentabilidade ambiental através de processos otimizados e gestão responsável de resíduos.',
  },
  {
    code: 'ISO 3834-2',
    title: 'Requisitos de Qualidade em Soldadura',
    description: 'Requisitos abrangentes de qualidade para soldadura por fusão de materiais metálicos.',
  },
  {
    code: 'EN 1090-2',
    title: 'Execução de Estruturas de Aço',
    description: 'Classe de execução EXC3 para estruturas de aço — aplicável a pontes, edifícios e estruturas industriais.',
  },
]

const processes = [
  'Inspeção visual 100%',
  'Controlo dimensional 3D (FARO)',
  'Ensaios não destrutivos (END)',
  'Rastreabilidade de materiais',
  'Controlo de soldadura (WPS/PQR)',
  'Testes de tracção e impacto',
  'Relatórios de conformidade',
  'Calibração de equipamentos',
]

export default function QualityPage() {
  return (
    <div className="pt-32 pb-24">
      {/* Hero */}
      <section className="max-w-[1440px] mx-auto px-6 md:px-margin mb-32">
        <ScrollReveal>
          <div className="flex items-center gap-4 mb-4">
            <div className="w-16 h-[1px] bg-blueprint-cyan" />
            <span className="font-mono text-label-caps text-blueprint-cyan uppercase tracking-widest">
              Certificações
            </span>
          </div>
        </ScrollReveal>
        <ScrollReveal delay={0.1}>
          <h1 className="font-display text-[clamp(48px,7vw,72px)] leading-[1.1] tracking-[-0.04em] font-bold text-on-surface uppercase mb-6">
            Qualidade &<br />
            <span className="text-blueprint-cyan text-glow">Conformidade</span>
          </h1>
        </ScrollReveal>
        <ScrollReveal delay={0.2}>
          <p className="font-body text-body-lg text-on-surface-variant max-w-2xl">
            Na Vicometal, a qualidade não é um departamento — é uma cultura. Cada colaborador
            é responsável pela excelência do seu trabalho, garantindo que os nossos produtos
            cumprem os mais elevados padrões internacionais.
          </p>
        </ScrollReveal>
      </section>

      {/* Certifications */}
      <section className="max-w-[1440px] mx-auto px-6 md:px-margin mb-32">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {certifications.map((cert, i) => (
            <CertCard key={cert.code} cert={cert} index={i} />
          ))}
        </div>
      </section>

      {/* Quality processes */}
      <section className="max-w-[1440px] mx-auto px-6 md:px-margin">
        <ScrollReveal className="mb-12">
          <h2 className="font-headline text-headline-lg text-on-surface uppercase">
            Processos de Controlo
          </h2>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {processes.map((process, i) => (
            <ScrollReveal key={process} delay={i * 0.06}>
              <div className="flex items-center gap-3 p-4 border border-wireframe-stroke bg-white/[0.02] hover:border-blueprint-cyan/30 transition-colors duration-300">
                <div className="w-6 h-6 border border-blueprint-cyan/50 flex items-center justify-center shrink-0">
                  <div className="w-1.5 h-1.5 bg-blueprint-cyan rounded-full" />
                </div>
                <span className="font-mono text-technical text-on-surface">
                  {process}
                </span>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>
    </div>
  )
}

function CertCard({ cert, index }: { cert: typeof certifications[0]; index: number }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-50px' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
      className="group"
    >
      <div className="glass-card-hover p-8 h-full relative">
        <div className="absolute top-4 right-4 font-mono text-[10px] text-on-tertiary-container opacity-0 group-hover:opacity-100 transition-opacity">
          CERT_{String(index + 1).padStart(2, '0')}
        </div>
        <span className="font-mono text-label-caps text-blueprint-cyan uppercase tracking-widest block mb-4">
          {cert.code}
        </span>
        <h3 className="font-headline text-headline-md text-on-surface mb-3">
          {cert.title}
        </h3>
        <p className="font-body text-body-md text-on-surface-variant">
          {cert.description}
        </p>
      </div>
    </motion.div>
  )
}
