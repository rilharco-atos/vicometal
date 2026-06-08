'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import ScrollReveal from '@/components/ScrollReveal'
import StickyScroll from '@/components/StickyScroll'

const equipment = [
  { name: '5 Pontes Rolantes', brand: 'Até 30 ton', spec: 'Nave com 12m de altura máxima' },
  { name: '2 Robots de Soldadura', brand: 'MIG/MAG', spec: 'Produção em série e grandes espessuras' },
  { name: 'Oxicorte CNC', brand: 'Multitorcha', spec: 'Até 200mm de espessura' },
  { name: 'Calandra de Chapas', brand: '4 Rolos', spec: '3000mm × 30mm espessura' },
  { name: 'Prensas Hidráulicas', brand: 'CNC', spec: 'Quinagem até 400 toneladas' },
  { name: 'Guilhotina', brand: 'CNC', spec: 'Corte de chapa até 16mm × 6000mm' },
  { name: 'Soldadura SAW', brand: 'Arco Submerso', spec: 'Juntas de grande espessura' },
  { name: 'Granalhagem', brand: 'Cabine & Túnel', spec: 'Peças até 12m comprimento' },
]

const capabilities = [
  {
    label: 'Fase 01',
    title: 'Corte & Perfuração',
    description: 'Laser fibra de última geração, puncionamento CNC e oxicorte para chapas até 200mm. Capacidade para peças de grande formato e produção em série.',
  },
  {
    label: 'Fase 02',
    title: 'Conformação & Quinagem',
    description: 'Prensas hidráulicas até 400 toneladas com controlo CNC de 6 eixos. Simulação de quinagem para otimização antes da produção.',
  },
  {
    label: 'Fase 03',
    title: 'Soldadura & Montagem',
    description: 'Soldadura robotizada e manual certificada ISO 3834. Montagem de conjuntos complexos com tolerâncias apertadas e controlo dimensional.',
  },
  {
    label: 'Fase 04',
    title: 'Acabamento & Expedição',
    description: 'Grenalhagem, pintura industrial, galvanização e tratamentos de superfície. Embalagem técnica para transporte internacional.',
  },
]

export default function CapabilitiesPage() {
  return (
    <div className="pt-32 pb-24">
      {/* Hero */}
      <section className="max-w-[1440px] mx-auto px-6 md:px-margin mb-32">
        <ScrollReveal>
          <div className="flex items-center gap-4 mb-4">
            <div className="w-16 h-[1px] bg-blueprint-cyan" />
            <span className="font-mono text-label-caps text-blueprint-cyan uppercase tracking-widest">
              Infraestrutura
            </span>
          </div>
        </ScrollReveal>
        <ScrollReveal delay={0.1}>
          <h1 className="font-display text-[clamp(48px,7vw,72px)] leading-[1.1] tracking-[-0.04em] font-bold text-on-surface uppercase mb-6">
            Capacidades<br />
            <span className="text-on-surface-variant">Industriais</span>
          </h1>
        </ScrollReveal>
        <ScrollReveal delay={0.2}>
          <p className="font-body text-body-lg text-on-surface-variant max-w-2xl">
            40.000 m² equipados com tecnologia de ponta para os projetos mais exigentes.
            Complexo industrial em Soure com acesso privilegiado à A1 e A14.
          </p>
        </ScrollReveal>
      </section>

      {/* Process sticky */}
      <StickyScroll steps={capabilities} className="mb-32" />

      {/* Equipment list */}
      <section className="max-w-[1440px] mx-auto px-6 md:px-margin">
        <ScrollReveal className="mb-16">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-12 h-[1px] bg-blueprint-cyan" />
            <span className="font-mono text-label-caps text-blueprint-cyan uppercase tracking-widest">
              Parque de Máquinas
            </span>
          </div>
          <h2 className="font-headline text-headline-lg text-on-surface uppercase">
            Equipamento Principal
          </h2>
        </ScrollReveal>

        <EquipmentGrid />
      </section>
    </div>
  )
}

function EquipmentGrid() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-50px' })

  return (
    <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      {equipment.map((item, i) => (
        <motion.div
          key={item.name}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
          className="group"
        >
          <div className="glass-card-hover p-6 h-full">
            <span className="font-mono text-[10px] text-blueprint-cyan uppercase tracking-widest block mb-3">
              {item.brand}
            </span>
            <h3 className="font-mono text-technical text-on-surface mb-2">
              {item.name}
            </h3>
            <p className="font-mono text-[11px] text-on-tertiary-container">
              {item.spec}
            </p>
          </div>
        </motion.div>
      ))}
    </div>
  )
}
