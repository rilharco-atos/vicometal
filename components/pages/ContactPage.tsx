'use client'

import { motion } from 'framer-motion'
import ScrollReveal from '@/components/ScrollReveal'

const contactInfo = [
  { label: 'Morada', value: 'Barroco, Vila Nova de Anços\n3130-400 Soure, Portugal', icon: '📍' },
  { label: 'Telefone', value: '(+351) 239 644 616', icon: '📞' },
  { label: 'Email', value: 'vicometal@vicometal.pt', icon: '✉️' },
  { label: 'Coordenadas', value: 'N 40° 07\' 19.68" W 8° 35\' 52.50"', icon: '🌐' },
]

export default function ContactPage() {
  return (
    <div className="pt-32 pb-24">
      {/* Hero */}
      <section className="max-w-[1440px] mx-auto px-6 md:px-margin mb-20">
        <ScrollReveal>
          <div className="flex items-center gap-4 mb-4">
            <div className="w-16 h-[1px] bg-blueprint-cyan" />
            <span className="font-mono text-label-caps text-blueprint-cyan uppercase tracking-widest">
              Fale Connosco
            </span>
          </div>
        </ScrollReveal>
        <ScrollReveal delay={0.1}>
          <h1 className="font-display text-[clamp(48px,7vw,72px)] leading-[1.1] tracking-[-0.04em] font-bold text-on-surface uppercase mb-6">
            Contactos
          </h1>
        </ScrollReveal>
        <ScrollReveal delay={0.2}>
          <p className="font-body text-body-lg text-on-surface-variant max-w-2xl">
            Estamos disponíveis para esclarecer qualquer questão ou agendar uma visita
            às nossas instalações.
          </p>
        </ScrollReveal>
      </section>

      <section className="max-w-[1440px] mx-auto px-6 md:px-margin">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact info cards */}
          <div className="space-y-6">
            {contactInfo.map((info, i) => (
              <ScrollReveal key={info.label} delay={i * 0.1}>
                <div className="glass-card-hover p-6 flex items-start gap-4">
                  <div className="w-10 h-10 border border-blueprint-cyan/40 flex items-center justify-center text-lg shrink-0">
                    {info.icon}
                  </div>
                  <div>
                    <span className="font-mono text-label-caps text-blueprint-cyan uppercase block mb-1">
                      {info.label}
                    </span>
                    <p className="font-body text-body-md text-on-surface whitespace-pre-line">
                      {info.value}
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            ))}

            {/* Map */}
            <ScrollReveal delay={0.5}>
              <div className="border border-wireframe-stroke relative overflow-hidden aspect-[4/3]">
                {/* Dark overlay filter for the map */}
                <div className="absolute inset-0 z-10 pointer-events-none mix-blend-multiply bg-[#111415]/30" />
                <div className="absolute inset-0 z-10 pointer-events-none border border-wireframe-stroke" />
                {/* Corner brackets */}
                <div className="absolute top-2 left-2 w-6 h-6 border-t border-l border-blueprint-cyan/50 z-20 pointer-events-none" />
                <div className="absolute top-2 right-2 w-6 h-6 border-t border-r border-blueprint-cyan/50 z-20 pointer-events-none" />
                <div className="absolute bottom-2 left-2 w-6 h-6 border-b border-l border-blueprint-cyan/50 z-20 pointer-events-none" />
                <div className="absolute bottom-2 right-2 w-6 h-6 border-b border-r border-blueprint-cyan/50 z-20 pointer-events-none" />
                {/* Location label */}
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 pointer-events-none">
                  <div className="bg-[#111415]/90 backdrop-blur-sm border border-wireframe-stroke px-4 py-2">
                    <span className="font-mono text-[11px] text-blueprint-cyan">
                      40°07&apos;19.68&quot;N 8°35&apos;52.50&quot;W — Soure, PT
                    </span>
                  </div>
                </div>
                {/* OpenStreetMap dark tile embed */}
                <iframe
                  title="Localização Vicometal — Soure, Portugal"
                  src="https://www.openstreetmap.org/export/embed.html?bbox=-8.615%2C40.11%2C-8.575%2C40.135&layer=mapnik&marker=40.1221%2C-8.5979"
                  className="w-full h-full border-0 invert brightness-[0.85] contrast-[1.2] hue-rotate-[180deg] saturate-[0.3]"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                />
              </div>
            </ScrollReveal>
          </div>

          {/* Contact form */}
          <ScrollReveal delay={0.3} direction="right">
            <div className="glass-card p-8 md:p-10 relative">
              <div className="absolute top-0 right-0 w-8 h-8 border-t border-r border-wireframe-stroke m-4" />
              <div className="absolute bottom-0 left-0 w-8 h-8 border-b border-l border-wireframe-stroke m-4" />

              <h2 className="font-headline text-headline-md text-on-surface mb-8 uppercase">
                Enviar Mensagem
              </h2>

              <form className="space-y-6">
                <div>
                  <label className="font-mono text-label-caps text-on-surface-variant mb-2 block uppercase">
                    Nome
                  </label>
                  <input
                    type="text"
                    className="w-full bg-transparent border-0 border-b border-wireframe-stroke text-on-surface font-body py-3 px-0 focus:outline-none focus:border-blueprint-cyan transition-all placeholder:text-on-tertiary-container"
                    placeholder="O seu nome"
                  />
                </div>
                <div>
                  <label className="font-mono text-label-caps text-on-surface-variant mb-2 block uppercase">
                    Email
                  </label>
                  <input
                    type="email"
                    className="w-full bg-transparent border-0 border-b border-wireframe-stroke text-on-surface font-body py-3 px-0 focus:outline-none focus:border-blueprint-cyan transition-all placeholder:text-on-tertiary-container"
                    placeholder="email@empresa.com"
                  />
                </div>
                <div>
                  <label className="font-mono text-label-caps text-on-surface-variant mb-2 block uppercase">
                    Assunto
                  </label>
                  <input
                    type="text"
                    className="w-full bg-transparent border-0 border-b border-wireframe-stroke text-on-surface font-body py-3 px-0 focus:outline-none focus:border-blueprint-cyan transition-all placeholder:text-on-tertiary-container"
                    placeholder="Assunto da mensagem"
                  />
                </div>
                <div>
                  <label className="font-mono text-label-caps text-on-surface-variant mb-2 block uppercase">
                    Mensagem
                  </label>
                  <textarea
                    rows={4}
                    className="w-full bg-white/[0.02] border border-wireframe-stroke text-on-surface font-body p-4 focus:outline-none focus:border-blueprint-cyan transition-all resize-none placeholder:text-on-tertiary-container"
                    placeholder="Descreva o que pretende..."
                  />
                </div>
                <motion.button
                  type="submit"
                  className="btn-primary w-full justify-center"
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.99 }}
                >
                  Enviar Mensagem
                </motion.button>
              </form>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  )
}
