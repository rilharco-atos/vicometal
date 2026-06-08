'use client'

import { motion } from 'framer-motion'
import ScrollReveal from '@/components/ScrollReveal'

export default function QuotePage() {
  return (
    <div className="pt-32 pb-24">
      {/* Hero */}
      <section className="max-w-[1440px] mx-auto px-6 md:px-margin mb-20">
        <ScrollReveal>
          <div className="flex items-center gap-4 mb-4">
            <div className="w-16 h-[1px] bg-blueprint-cyan" />
            <span className="font-mono text-label-caps text-blueprint-cyan uppercase tracking-widest">
              Iniciar Projeto
            </span>
          </div>
        </ScrollReveal>
        <ScrollReveal delay={0.1}>
          <h1 className="font-display text-[clamp(48px,7vw,72px)] leading-[1.1] tracking-[-0.04em] font-bold text-on-surface uppercase mb-6">
            Solicitar<br />
            <span className="text-blueprint-cyan text-glow">Orçamento</span>
          </h1>
        </ScrollReveal>
        <ScrollReveal delay={0.2}>
          <p className="font-body text-body-lg text-on-surface-variant max-w-2xl">
            Preencha o formulário abaixo com os detalhes do seu projeto.
            A nossa equipa de engenharia responderá em 24 horas úteis.
          </p>
        </ScrollReveal>
      </section>

      {/* Form */}
      <section className="max-w-3xl mx-auto px-6 md:px-margin">
        <ScrollReveal delay={0.3}>
          <div className="glass-card p-8 md:p-12 relative overflow-hidden">
            {/* Decorative */}
            <div className="absolute top-0 right-0 w-40 h-40 bg-blueprint-cyan/[0.03] blur-[100px] rounded-full" />
            <div className="absolute top-0 left-0 w-12 h-12 border-t border-l border-blueprint-cyan/30 m-4" />
            <div className="absolute bottom-0 right-0 w-12 h-12 border-b border-r border-blueprint-cyan/30 m-4" />

            <form className="space-y-8 relative z-10">
              {/* Row 1 */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <label className="font-mono text-label-caps text-on-surface-variant mb-2 block uppercase">
                    Empresa / Nome
                  </label>
                  <input
                    type="text"
                    className="w-full bg-transparent border-0 border-b border-wireframe-stroke text-on-surface font-body py-3 px-0 focus:outline-none focus:border-blueprint-cyan focus:shadow-[0_1px_0_0_#00F0FF] transition-all placeholder:text-on-tertiary-container"
                    placeholder="Nome da empresa ou contacto"
                  />
                </div>
                <div>
                  <label className="font-mono text-label-caps text-on-surface-variant mb-2 block uppercase">
                    Email
                  </label>
                  <input
                    type="email"
                    className="w-full bg-transparent border-0 border-b border-wireframe-stroke text-on-surface font-body py-3 px-0 focus:outline-none focus:border-blueprint-cyan focus:shadow-[0_1px_0_0_#00F0FF] transition-all placeholder:text-on-tertiary-container"
                    placeholder="email@empresa.com"
                  />
                </div>
              </div>

              {/* Row 2 */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <label className="font-mono text-label-caps text-on-surface-variant mb-2 block uppercase">
                    Telefone
                  </label>
                  <input
                    type="tel"
                    className="w-full bg-transparent border-0 border-b border-wireframe-stroke text-on-surface font-body py-3 px-0 focus:outline-none focus:border-blueprint-cyan transition-all placeholder:text-on-tertiary-container"
                    placeholder="+351 XXX XXX XXX"
                  />
                </div>
                <div>
                  <label className="font-mono text-label-caps text-on-surface-variant mb-2 block uppercase">
                    Serviço Pretendido
                  </label>
                  <select className="w-full bg-transparent border-0 border-b border-wireframe-stroke text-on-surface font-body py-3 px-0 focus:outline-none focus:border-blueprint-cyan transition-all appearance-none">
                    <option value="" className="bg-surface">Selecionar...</option>
                    <option value="laser" className="bg-surface">Corte Laser</option>
                    <option value="quinagem" className="bg-surface">Quinagem CNC</option>
                    <option value="soldadura" className="bg-surface">Soldadura</option>
                    <option value="maquinacao" className="bg-surface">Maquinação CNC</option>
                    <option value="montagem" className="bg-surface">Montagem Industrial</option>
                    <option value="multiple" className="bg-surface">Múltiplos Serviços</option>
                  </select>
                </div>
              </div>

              {/* Material */}
              <div>
                <label className="font-mono text-label-caps text-on-surface-variant mb-2 block uppercase">
                  Material / Especificações
                </label>
                <input
                  type="text"
                  className="w-full bg-transparent border-0 border-b border-wireframe-stroke text-on-surface font-body py-3 px-0 focus:outline-none focus:border-blueprint-cyan transition-all placeholder:text-on-tertiary-container"
                  placeholder="ex. Aço S355, espessura 12mm, tolerância ±0.5mm"
                />
              </div>

              {/* Quantity */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <label className="font-mono text-label-caps text-on-surface-variant mb-2 block uppercase">
                    Quantidade Estimada
                  </label>
                  <input
                    type="text"
                    className="w-full bg-transparent border-0 border-b border-wireframe-stroke text-on-surface font-body py-3 px-0 focus:outline-none focus:border-blueprint-cyan transition-all placeholder:text-on-tertiary-container"
                    placeholder="ex. 500 unidades"
                  />
                </div>
                <div>
                  <label className="font-mono text-label-caps text-on-surface-variant mb-2 block uppercase">
                    Prazo Desejado
                  </label>
                  <input
                    type="text"
                    className="w-full bg-transparent border-0 border-b border-wireframe-stroke text-on-surface font-body py-3 px-0 focus:outline-none focus:border-blueprint-cyan transition-all placeholder:text-on-tertiary-container"
                    placeholder="ex. 4 semanas"
                  />
                </div>
              </div>

              {/* Details */}
              <div>
                <label className="font-mono text-label-caps text-on-surface-variant mb-2 block uppercase">
                  Detalhes do Projeto
                </label>
                <textarea
                  rows={5}
                  className="w-full bg-white/[0.02] border border-wireframe-stroke text-on-surface font-body p-4 focus:outline-none focus:border-blueprint-cyan focus:shadow-[0_0_0_1px_rgba(0,240,255,0.2)] transition-all resize-none placeholder:text-on-tertiary-container"
                  placeholder="Descreva o projeto, requisitos especiais, certificações necessárias, acabamentos..."
                />
              </div>

              {/* File upload note */}
              <div className="border border-dashed border-wireframe-stroke p-6 text-center">
                <span className="font-mono text-technical text-on-surface-variant">
                  Pode anexar ficheiros técnicos (PDF, DWG, STEP) após submissão
                </span>
              </div>

              {/* Submit */}
              <div className="pt-4">
                <motion.button
                  type="submit"
                  className="btn-primary w-full justify-center text-center"
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.99 }}
                >
                  <span className="flex items-center justify-center gap-2">
                    Submeter Pedido de Orçamento
                    <span>→</span>
                  </span>
                </motion.button>
              </div>
            </form>
          </div>
        </ScrollReveal>
      </section>
    </div>
  )
}
