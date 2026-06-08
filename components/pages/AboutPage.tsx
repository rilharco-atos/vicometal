'use client'

import { motion, useInView, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import ScrollReveal from '@/components/ScrollReveal'

const timeline = [
  { year: '2001', event: 'Fundação da Vicometal em Soure, Portugal' },
  { year: '2005', event: 'Certificação ISO 9001 — primeiros projetos internacionais' },
  { year: '2010', event: 'Expansão para 10.000m² — novos equipamentos CNC' },
  { year: '2015', event: 'Presença em 10 países — equipa de 150 colaboradores' },
  { year: '2020', event: 'Certificação ISO 14001 — compromisso sustentável' },
  { year: '2024', event: '40.000m² de instalações — integração digital completa' },
]

const values = [
  {
    title: 'Precisão',
    description: 'Cada componente é fabricado com tolerâncias que desafiam os limites da engenharia convencional.',
  },
  {
    title: 'Inovação',
    description: 'Investimento contínuo em tecnologia de ponta e processos digitais avançados.',
  },
  {
    title: 'Fiabilidade',
    description: 'Mais de duas décadas entregando projetos complexos dentro do prazo e especificações.',
  },
  {
    title: 'Sustentabilidade',
    description: 'Compromisso ambiental certificado com processos otimizados para redução de desperdício.',
  },
]

export default function AboutPage() {
  const heroRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start'],
  })
  const heroOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])
  const heroScale = useTransform(scrollYProgress, [0, 0.5], [1, 0.95])

  return (
    <div className="pt-32 pb-24">
      {/* Hero */}
      <motion.section
        ref={heroRef}
        style={{ opacity: heroOpacity, scale: heroScale }}
        className="max-w-[1440px] mx-auto px-6 md:px-margin mb-32"
      >
        <ScrollReveal>
          <div className="flex items-center gap-4 mb-4">
            <div className="w-16 h-[1px] bg-blueprint-cyan" />
            <span className="font-mono text-label-caps text-blueprint-cyan uppercase tracking-widest">
              Sobre Nós
            </span>
          </div>
        </ScrollReveal>
        <ScrollReveal delay={0.1}>
          <h1 className="font-display text-[clamp(48px,7vw,80px)] leading-[1.1] tracking-[-0.04em] font-bold text-on-surface uppercase mb-8">
            Duas Décadas de<br />
            <span className="text-blueprint-cyan text-glow">Excelência</span> Industrial
          </h1>
        </ScrollReveal>
        <ScrollReveal delay={0.2}>
          <p className="font-body text-body-lg text-on-surface-variant max-w-3xl">
            Fundada em 2001 em Soure, a Vicometal nasceu da visão de criar uma empresa de
            metalomecânica capaz de responder aos desafios mais complexos da indústria pesada.
            Ao longo de mais de 24 anos, crescemos para um grupo industrial com mais de 200
            colaboradores, instalações com 40.000 m² e projetos em mais de 15 países.
          </p>
        </ScrollReveal>
      </motion.section>

      {/* Values */}
      <section className="max-w-[1440px] mx-auto px-6 md:px-margin mb-32">
        <ScrollReveal className="mb-16">
          <h2 className="font-headline text-headline-lg text-on-surface uppercase">
            Os Nossos Valores
          </h2>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((value, i) => (
            <ScrollReveal key={value.title} delay={i * 0.1}>
              <div className="glass-card-hover p-8 h-full">
                <div className="font-display text-[48px] font-bold text-blueprint-cyan/20 mb-4">
                  0{i + 1}
                </div>
                <h3 className="font-headline text-headline-md text-on-surface mb-3">
                  {value.title}
                </h3>
                <p className="font-body text-body-md text-on-surface-variant">
                  {value.description}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* Timeline */}
      <section className="max-w-[1440px] mx-auto px-6 md:px-margin mb-32">
        <ScrollReveal className="mb-16">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-12 h-[1px] bg-blueprint-cyan" />
            <span className="font-mono text-label-caps text-blueprint-cyan uppercase tracking-widest">
              Percurso
            </span>
          </div>
          <h2 className="font-headline text-headline-lg text-on-surface uppercase">
            A Nossa História
          </h2>
        </ScrollReveal>

        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-[1px] bg-wireframe-stroke md:-translate-x-1/2" />

          <div className="space-y-12">
            {timeline.map((item, i) => (
              <TimelineItem key={item.year} item={item} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* Bottom stats */}
      <section className="max-w-[1440px] mx-auto px-6 md:px-margin">
        <div className="border border-wireframe-stroke p-12 md:p-16 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-blueprint-cyan/[0.02] to-transparent" />
          <div className="absolute top-0 left-0 w-12 h-12 border-t border-l border-blueprint-cyan/40" />
          <div className="absolute bottom-0 right-0 w-12 h-12 border-b border-r border-blueprint-cyan/40" />

          <div className="relative z-10 grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
            {[
              { value: '24+', label: 'Anos' },
              { value: '200+', label: 'Colaboradores' },
              { value: '15+', label: 'Países' },
              { value: '40K', label: 'm² Instalações' },
            ].map((stat, i) => (
              <ScrollReveal key={stat.label} delay={i * 0.1}>
                <div className="font-display text-[clamp(36px,5vw,56px)] font-bold text-blueprint-cyan text-glow mb-2">
                  {stat.value}
                </div>
                <div className="font-mono text-label-caps uppercase text-on-surface-variant">
                  {stat.label}
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

function TimelineItem({ item, index }: { item: typeof timeline[0]; index: number }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-50px' })
  const isEven = index % 2 === 0

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: isEven ? -30 : 30 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
      className={`relative pl-16 md:pl-0 md:grid md:grid-cols-2 md:gap-12 items-center`}
    >
      {/* Dot */}
      <div className="absolute left-4 md:left-1/2 md:-translate-x-1/2 w-4 h-4 border-2 border-blueprint-cyan bg-background rounded-full z-10" />

      {/* Content */}
      <div className={`${isEven ? 'md:text-right md:pr-12' : 'md:col-start-2 md:pl-12'}`}>
        <span className="font-mono text-label-caps text-blueprint-cyan block mb-1">
          {item.year}
        </span>
        <p className="font-body text-body-lg text-on-surface">
          {item.event}
        </p>
      </div>
    </motion.div>
  )
}
