'use client'

import ScrollReveal from '@/components/ScrollReveal'

const esgStats = [
  { value: '420 MWh', label: 'Energia Solar Produzida / Ano' },
  { value: '92%', label: 'Taxa de Reciclagem de Aço' },
  { value: '0', label: 'Acidentes Graves (2025)' },
  { value: '-35%', label: 'Redução Emissões CO₂ vs 2019' },
]

const pillars = [
  {
    title: 'Ambiental',
    icon: '🌱',
    items: [
      'Central fotovoltaica própria de 420 MWh/ano',
      '92% de taxa de reciclagem de aço e subprodutos',
      'Gestão de resíduos certificada ISO 14001',
      'Redução de 35% de emissões CO₂ face a 2019',
      'Tratamento de efluentes industriais em ETAR própria',
    ],
  },
  {
    title: 'Social',
    icon: '👥',
    items: [
      '200+ colaboradores com contratos estáveis',
      '4.200 horas anuais de formação profissional',
      'Zero acidentes graves em 2025',
      'Protocolos com escolas técnicas da região',
      'Apoio a instituições sociais locais',
    ],
  },
  {
    title: 'Governação',
    icon: '⚖️',
    items: [
      'Código de ética e conduta publicado',
      'Gestão de risco operacional formalizada',
      'Cadeia de fornecimento auditada',
      'Transparência fiscal — reporte país a país',
      'Política anticorrupção implementada',
    ],
  },
]

export default function SustainabilityPage() {
  return (
    <div className="pt-32 pb-24">
      {/* Hero */}
      <section className="max-w-[1440px] mx-auto px-6 md:px-margin mb-32">
        <ScrollReveal>
          <div className="flex items-center gap-4 mb-4">
            <div className="w-16 h-[1px] bg-blueprint-cyan" />
            <span className="font-mono text-label-caps text-blueprint-cyan uppercase tracking-widest">
              ESG
            </span>
          </div>
        </ScrollReveal>
        <ScrollReveal delay={0.1}>
          <h1 className="font-display text-[clamp(48px,7vw,72px)] leading-[1.1] tracking-[-0.04em] font-bold text-on-surface uppercase mb-6">
            Sustentabilidade
          </h1>
        </ScrollReveal>
        <ScrollReveal delay={0.2}>
          <p className="font-body text-body-lg text-on-surface-variant max-w-2xl">
            Compromisso com o ambiente, as pessoas e a governação responsável.
            Transparência nos nossos indicadores ESG.
          </p>
        </ScrollReveal>
      </section>

      {/* ESG Stats */}
      <section className="max-w-[1440px] mx-auto px-6 md:px-margin mb-32">
        <ScrollReveal className="mb-12">
          <h2 className="font-headline text-headline-lg text-on-surface uppercase">
            Indicadores 2025
          </h2>
        </ScrollReveal>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {esgStats.map((stat, i) => (
            <ScrollReveal key={stat.label} delay={i * 0.1}>
              <div className="border border-wireframe-stroke p-6 text-center">
                <div className="font-display text-[32px] font-bold text-blueprint-cyan text-glow mb-2">
                  {stat.value}
                </div>
                <div className="font-mono text-[10px] uppercase text-on-surface-variant tracking-wider">
                  {stat.label}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* Pillars */}
      <section className="max-w-[1440px] mx-auto px-6 md:px-margin">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pillars.map((pillar, i) => (
            <ScrollReveal key={pillar.title} delay={i * 0.15}>
              <div className="glass-card p-8 h-full">
                <div className="text-2xl mb-4">{pillar.icon}</div>
                <h3 className="font-headline text-headline-md text-on-surface mb-6">{pillar.title}</h3>
                <ul className="space-y-3">
                  {pillar.items.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-blueprint-cyan mt-2 shrink-0" />
                      <span className="font-body text-body-md text-on-surface-variant">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>
    </div>
  )
}
