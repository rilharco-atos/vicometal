'use client'

import { motion, useInView, AnimatePresence } from 'framer-motion'
import { useRef, useState } from 'react'
import ScrollReveal from '@/components/ScrollReveal'
import Link from 'next/link'

const categories = ['Todos', 'Caldeiraria', 'Estruturas', 'Soldadura', 'Transporte']

const projects = [
  {
    title: 'Evaporador Quench',
    category: 'Caldeiraria',
    description: '26 toneladas — Espanha, 2024. Caldeiraria pesada para indústria de celulose.',
    image: '/uploads/destaques/evaporador-quench.jpg',
  },
  {
    title: 'Central de Asfalto',
    category: 'Estruturas',
    description: '120 toneladas — França, 2024. Estrutura metálica completa e montagem on-site.',
    image: '/uploads/destaques/central-asfalto.jpg',
  },
  {
    title: 'Ciclone Industrial',
    category: 'Caldeiraria',
    description: '85 toneladas — Alemanha, 2023. Equipamento para indústria cimenteira.',
    image: '/uploads/destaques/ciclone-alemanha.jpg',
  },
  {
    title: 'Soldadura Robotizada MIG/MAG',
    category: 'Soldadura',
    description: 'Portugal, 2024. Processos automatizados com robots de soldadura de última geração.',
    image: '/uploads/destaques/soldadura-mig-mag.jpg',
  },
  {
    title: 'Transportadores em Galeria',
    category: 'Transporte',
    description: '200 metros — Portugal, 2023. Fabrico e montagem de sistema de transporte completo.',
    image: '/uploads/destaques/transportadores-galeria.jpg',
  },
]

export default function PortfolioPage() {
  const [activeFilter, setActiveFilter] = useState('Todos')
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-50px' })

  const filteredProjects = activeFilter === 'Todos'
    ? projects
    : projects.filter(p => p.category === activeFilter)

  return (
    <div className="pt-32 pb-24">
      {/* Header */}
      <section className="max-w-[1440px] mx-auto px-6 md:px-margin mb-16">
        <ScrollReveal>
          <div className="flex items-center gap-4 mb-4">
            <div className="w-16 h-[1px] bg-blueprint-cyan" />
            <span className="font-mono text-label-caps text-blueprint-cyan uppercase tracking-widest">
              Portfólio
            </span>
          </div>
        </ScrollReveal>
        <ScrollReveal delay={0.1}>
          <h1 className="font-display text-[clamp(48px,7vw,72px)] leading-[1.1] tracking-[-0.04em] font-bold text-on-surface uppercase">
            Projetos
          </h1>
        </ScrollReveal>
      </section>

      {/* Filters */}
      <section className="max-w-[1440px] mx-auto px-6 md:px-margin mb-16">
        <div className="flex flex-wrap gap-6">
          {categories.map((cat) => (
            <motion.button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className={`font-mono text-label-caps uppercase tracking-widest pb-2 relative transition-colors duration-300
                ${activeFilter === cat ? 'text-blueprint-cyan' : 'text-on-surface-variant hover:text-on-surface'}`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {cat}
              {activeFilter === cat && (
                <motion.div
                  layoutId="filter-underline"
                  className="absolute bottom-0 left-0 right-0 h-[1px] bg-blueprint-cyan"
                  transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                />
              )}
            </motion.button>
          ))}
        </div>
      </section>

      {/* Grid */}
      <section ref={ref} className="max-w-[1440px] mx-auto px-6 md:px-margin">
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.title}
                layout
                initial={{ opacity: 0, y: 40, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.08,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="group"
              >
                <div className="glass-card-hover overflow-hidden cursor-pointer relative">
                  {/* Image */}
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <div
                      className="w-full h-full bg-cover bg-center grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-90 group-hover:scale-105 transition-all duration-700"
                      style={{ backgroundImage: `url('${project.image}')` }}
                    />
                    {/* Hover overlay */}
                    <div className="absolute inset-0 bg-background/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                      <motion.span
                        initial={{ y: 10, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        className="font-mono text-label-caps uppercase text-blueprint-cyan border border-blueprint-cyan px-6 py-3 tracking-widest"
                      >
                        Ver Projeto
                      </motion.span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <span className="font-mono text-[10px] text-blueprint-cyan uppercase tracking-widest">
                      {project.category}
                    </span>
                    <h3 className="font-mono text-technical text-on-surface uppercase mt-2 mb-1">
                      {project.title}
                    </h3>
                    <p className="font-body text-body-md text-on-surface-variant opacity-80">
                      {project.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </section>

      {/* CTA */}
      <section className="max-w-[1440px] mx-auto px-6 md:px-margin mt-32 pt-16 border-t border-wireframe-stroke text-center">
        <ScrollReveal>
          <h2 className="font-headline text-headline-md text-on-surface mb-8 tracking-tight uppercase">
            Inicie o Seu Projeto Connosco
          </h2>
          <Link href="/orcamento" className="btn-primary inline-block">
            Iniciar Projeto
          </Link>
        </ScrollReveal>
      </section>
    </div>
  )
}
