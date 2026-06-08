'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

const features = [
  {
    icon: 'M22 11.08V12a10 10 0 11-5.93-9.14M22 4L12 14.01l-3-3',
    title: 'Estado da Produção',
    description: 'Percentagem concluída por fase (corte, soldadura, pintura, expedição)',
  },
  {
    icon: 'M3 3h18v18H3zM3 9h18M9 21V9',
    title: 'Fotografias de Fabrico',
    description: 'Registo fotográfico atualizado de cada etapa do seu projeto',
  },
  {
    icon: 'M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8zM14 2v6h6',
    title: 'Certificados & Relatórios',
    description: 'Certificados de material, relatórios END, dimensionais e dossier de qualidade',
  },
  {
    icon: 'M1 3h15v13H1zM16 8h4l3 3v5h-7V8zM5.5 21a2.5 2.5 0 100-5 2.5 2.5 0 000 5zM18.5 21a2.5 2.5 0 100-5 2.5 2.5 0 000 5z',
    title: 'Planeamento de Expedição',
    description: 'Datas previstas de transporte, documentação de carga e tracking',
  },
]

const demoProgress = [
  { label: 'Engenharia', pct: 100, status: 'done' },
  { label: 'Corte', pct: 100, status: 'done' },
  { label: 'Soldadura', pct: 65, status: 'active' },
  { label: 'Pintura', pct: 0, status: 'pending' },
  { label: 'Expedição', pct: 0, status: 'pending' },
]

export default function ClientPortalPage() {
  return (
    <section className="pt-40 pb-24">
      <div className="max-w-[1440px] mx-auto px-6 md:px-margin">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="font-mono text-label-caps text-blueprint-cyan tracking-widest uppercase block mb-4">
            Acesso Reservado
          </span>
          <h1 className="font-display text-[clamp(36px,5vw,64px)] font-bold text-on-surface leading-tight mb-6">
            Portal do <span className="text-blueprint-cyan text-glow">Cliente</span>
          </h1>
          <p className="text-body-lg text-on-surface-variant max-w-2xl mx-auto">
            Acompanhe o estado da produção, aceda a documentação e certificados dos seus projetos em tempo real.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Login Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="border border-wireframe-stroke bg-white/[0.02] backdrop-blur-sm p-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-10 h-10 border border-blueprint-cyan/30 flex items-center justify-center">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-blueprint-cyan">
                    <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                    <path d="M7 11V7a5 5 0 0110 0v4" />
                  </svg>
                </div>
                <div>
                  <h2 className="font-display text-xl font-bold text-on-surface">Acesso ao Portal</h2>
                  <p className="text-sm text-on-surface-variant">Credenciais fornecidas pela equipa comercial</p>
                </div>
              </div>

              <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
                <div>
                  <label className="block font-mono text-xs text-on-surface-variant uppercase tracking-wider mb-2">
                    Email corporativo
                  </label>
                  <input
                    type="email"
                    placeholder="utilizador@empresa.com"
                    className="w-full bg-surface-elevated border border-wireframe-stroke px-4 py-3 text-on-surface placeholder:text-on-surface-variant/50 focus:border-blueprint-cyan focus:outline-none transition-colors"
                  />
                </div>
                <div>
                  <label className="block font-mono text-xs text-on-surface-variant uppercase tracking-wider mb-2">
                    Palavra-passe
                  </label>
                  <input
                    type="password"
                    placeholder="••••••••"
                    className="w-full bg-surface-elevated border border-wireframe-stroke px-4 py-3 text-on-surface placeholder:text-on-surface-variant/50 focus:border-blueprint-cyan focus:outline-none transition-colors"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full btn-primary flex items-center justify-center gap-2"
                >
                  Entrar no Portal
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </button>
                <p className="text-center text-sm text-on-surface-variant">
                  Esqueceu a palavra-passe?{' '}
                  <a href="mailto:vicometal@vicometal.pt" className="text-blueprint-cyan hover:underline">
                    Contacte-nos
                  </a>
                </p>
              </form>
            </div>
          </motion.div>

          {/* Demo / Features */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-8"
          >
            <h3 className="font-display text-xl font-bold text-on-surface">O que pode consultar</h3>

            <div className="space-y-4">
              {features.map((f, i) => (
                <motion.div
                  key={f.title}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.5 + i * 0.1 }}
                  className="flex items-start gap-4 p-4 border border-wireframe-stroke bg-white/[0.01]"
                >
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-blueprint-cyan flex-shrink-0 mt-0.5">
                    <path d={f.icon} />
                  </svg>
                  <div>
                    <strong className="text-on-surface block mb-1">{f.title}</strong>
                    <span className="text-sm text-on-surface-variant">{f.description}</span>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Demo progress */}
            <div className="border border-wireframe-stroke bg-white/[0.02] p-6">
              <h4 className="font-mono text-sm text-on-surface-variant uppercase tracking-wider mb-4">
                Exemplo — Projeto 2026-054
              </h4>
              <div className="space-y-3">
                {demoProgress.map((step) => (
                  <div key={step.label} className="flex items-center gap-3">
                    <span className="w-24 text-sm text-on-surface-variant font-mono">{step.label}</span>
                    <div className="flex-1 h-2 bg-surface-elevated rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${step.pct}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.8 }}
                        className={`h-full rounded-full ${
                          step.status === 'done'
                            ? 'bg-green-500'
                            : step.status === 'active'
                            ? 'bg-blueprint-cyan'
                            : 'bg-wireframe-stroke'
                        }`}
                      />
                    </div>
                    <span className="w-10 text-right text-sm font-mono text-on-surface-variant">
                      {step.pct}%
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* How to get access */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-24 text-center border border-wireframe-stroke bg-white/[0.02] p-12"
        >
          <h2 className="font-display text-2xl font-bold text-on-surface mb-4">Como obter acesso?</h2>
          <p className="text-on-surface-variant max-w-lg mx-auto mb-8">
            O acesso ao Portal do Cliente é disponibilizado automaticamente após a adjudicação de um projeto. As credenciais são enviadas por email ao contacto principal da empresa.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/contactos" className="btn-primary">
              Contactar Equipa Comercial
            </Link>
            <Link href="/orcamento" className="btn-ghost">
              Solicitar Orçamento
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
