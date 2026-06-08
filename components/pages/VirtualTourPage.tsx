'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

const tourZones = [
  {
    type: '360°',
    title: 'Nave Principal — Corte & Soldadura',
    description: '12.000 m² com corte plasma CNC, oxicorte e células de soldadura robotizada MIG/MAG.',
  },
  {
    type: 'Drone',
    title: 'Vista Aérea do Complexo',
    description: 'Perspetiva geral dos 40.000 m² incluindo naves, parque exterior e acessos logísticos.',
  },
  {
    type: '360°',
    title: 'Nave de Montagem Pesada',
    description: 'Área com pontes rolantes até 60 ton para pré-montagem de conjuntos de grande dimensão.',
  },
  {
    type: '360°',
    title: 'Grenalhagem & Pintura',
    description: 'Câmara de grenalhagem automática (12×6×5m) e cabina de pintura industrial (18×7×6m).',
  },
  {
    type: '360°',
    title: 'Gabinete de Engenharia',
    description: 'Gabinete técnico com estações Tekla Structures, SolidWorks e salas de reunião com clientes.',
  },
  {
    type: 'Drone',
    title: 'Soldadura Robotizada em Ação',
    description: 'Vídeo do processo de soldadura MIG/MAG robotizado em peças de caldeiraria pesada.',
  },
]

export default function VirtualTourPage() {
  return (
    <section className="pt-40 pb-24">
      <div className="max-w-[1440px] mx-auto px-6 md:px-margin">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <span className="font-mono text-label-caps text-blueprint-cyan tracking-widest uppercase block mb-4">
            360° Experience
          </span>
          <h1 className="font-display text-[clamp(36px,5vw,64px)] font-bold text-on-surface leading-tight mb-6">
            Tour Virtual
          </h1>
          <p className="text-body-lg text-on-surface-variant max-w-2xl">
            Explore as nossas instalações sem sair do escritório — 40.000 m² de capacidade industrial.
          </p>
        </motion.div>

        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h2 className="font-display text-2xl font-bold text-on-surface mb-2">
            Conheça a Nossa Fábrica
          </h2>
          <p className="text-on-surface-variant">
            Selecione uma zona para explorar em vista 360° ou vídeo drone.
          </p>
        </motion.div>

        {/* Tour Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {tourZones.map((zone, i) => (
            <motion.div
              key={zone.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="group border border-wireframe-stroke bg-white/[0.02] backdrop-blur-sm hover:border-blueprint-cyan/40 transition-colors"
            >
              {/* Placeholder visual */}
              <div className="aspect-video flex items-center justify-center bg-surface-elevated border-b border-wireframe-stroke relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-blueprint-cyan/[0.03] to-transparent" />
                {zone.type === '360°' ? (
                  <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" className="text-blueprint-cyan/40">
                    <circle cx="12" cy="12" r="10" />
                    <path d="M2 12h20M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z" />
                  </svg>
                ) : (
                  <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" className="text-blueprint-cyan/40">
                    <polygon points="5 3 19 12 5 21 5 3" />
                  </svg>
                )}
                <span className="absolute bottom-3 right-3 font-mono text-xs text-blueprint-cyan/60 uppercase">
                  {zone.type === '360°' ? 'Vista 360°' : 'Vídeo Drone'}
                </span>
              </div>
              <div className="p-5">
                <h3 className="font-display text-lg font-semibold text-on-surface mb-2 group-hover:text-blueprint-cyan transition-colors">
                  {zone.title}
                </h3>
                <p className="text-sm text-on-surface-variant leading-relaxed">{zone.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Coming soon */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center border border-wireframe-stroke bg-white/[0.02] p-12"
        >
          <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-[#c8963e] mx-auto mb-4">
            <circle cx="12" cy="12" r="10" />
            <path d="M12 6v6l4 2" />
          </svg>
          <h3 className="font-display text-xl font-bold text-on-surface mb-3">Conteúdo em Preparação</h3>
          <p className="text-on-surface-variant max-w-lg mx-auto mb-4">
            As filmagens drone e captação 360° estão agendadas. Em breve poderá explorar as nossas instalações virtualmente.
          </p>
          <p className="text-sm text-on-surface-variant">
            Entretanto,{' '}
            <Link href="/contactos" className="text-blueprint-cyan hover:underline">
              agende uma visita presencial
            </Link>{' '}
            às nossas instalações.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
