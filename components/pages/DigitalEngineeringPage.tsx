'use client'

import ScrollReveal from '@/components/ScrollReveal'

const tools = [
  {
    name: 'Tekla Structures',
    capabilities: [
      'Modelação 3D detalhada de estruturas',
      'Geração automática de desenhos de fabrico',
      'Listas de corte automáticas (NC files)',
      'Numeração e rastreabilidade de peças',
      'Modelos de montagem com sequenciação',
      'Exportação IFC para coordenação BIM',
    ],
  },
  {
    name: 'SolidWorks',
    capabilities: [
      'Projeto de equipamentos industriais',
      'Análise de elementos finitos (FEA)',
      'Simulação de fluxos e cargas',
      'Desenho de caldeiraria e tubagem',
      'Renderização para apresentação ao cliente',
      'PDM para gestão de revisões',
    ],
  },
  {
    name: 'AutoCAD',
    capabilities: [
      'Desenhos 2D de detalhe e fabrico',
      'Layouts de implantação industrial',
      'Plantas de montagem em obra',
      'Documentação técnica normativa',
      'Compatibilidade universal DWG/DXF',
      'Integração com máquinas CNC',
    ],
  },
]

const benefits = [
  { value: '0', label: 'Colisões em obra', desc: 'Deteção de conflitos antes do fabrico' },
  { value: '-30%', label: 'Desperdício', desc: 'Otimização de corte automática' },
  { value: '100%', label: 'Rastreabilidade', desc: 'Cada peça numerada e documentada' },
  { value: '3D', label: 'Modelos interativos', desc: 'Entregues ao cliente para validação' },
]

export default function DigitalEngineeringPage() {
  return (
    <div className="pt-32 pb-24">
      {/* Hero */}
      <section className="max-w-[1440px] mx-auto px-6 md:px-margin mb-32">
        <ScrollReveal>
          <div className="flex items-center gap-4 mb-4">
            <div className="w-16 h-[1px] bg-blueprint-cyan" />
            <span className="font-mono text-label-caps text-blueprint-cyan uppercase tracking-widest">
              BIM & Modelação 3D
            </span>
          </div>
        </ScrollReveal>
        <ScrollReveal delay={0.1}>
          <h1 className="font-display text-[clamp(48px,7vw,72px)] leading-[1.1] tracking-[-0.04em] font-bold text-on-surface uppercase mb-6">
            Engenharia{' '}
            <span className="text-blueprint-cyan text-glow">Digital</span>
          </h1>
        </ScrollReveal>
        <ScrollReveal delay={0.2}>
          <p className="font-body text-body-lg text-on-surface-variant max-w-3xl">
            Projeto integrado com tecnologia BIM para máxima precisão desde o gabinete até
            à montagem em obra. A Vicometal integra ferramentas digitais avançadas em todas
            as fases — da modelação 3D ao planeamento de montagem, garantindo zero colisões
            e otimização de processos.
          </p>
        </ScrollReveal>
      </section>

      {/* Benefits stats */}
      <section className="max-w-[1440px] mx-auto px-6 md:px-margin mb-32">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {benefits.map((stat, i) => (
            <ScrollReveal key={stat.label} delay={i * 0.1}>
              <div className="border border-wireframe-stroke p-6">
                <div className="font-display text-[28px] font-bold text-blueprint-cyan text-glow mb-1">
                  {stat.value}
                </div>
                <div className="font-mono text-[11px] uppercase text-on-surface mb-1 tracking-wider">
                  {stat.label}
                </div>
                <p className="font-mono text-[10px] text-on-tertiary-container">{stat.desc}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* Tools */}
      <section className="max-w-[1440px] mx-auto px-6 md:px-margin">
        <ScrollReveal className="mb-16">
          <h2 className="font-headline text-headline-lg text-on-surface uppercase">
            Ferramentas & Competências
          </h2>
        </ScrollReveal>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {tools.map((tool, i) => (
            <ScrollReveal key={tool.name} delay={i * 0.15}>
              <div className="glass-card p-8 h-full">
                <h3 className="font-headline text-headline-md text-blueprint-cyan mb-6">{tool.name}</h3>
                <ul className="space-y-3">
                  {tool.capabilities.map((cap) => (
                    <li key={cap} className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-blueprint-cyan/60 mt-2 shrink-0" />
                      <span className="font-body text-body-md text-on-surface-variant">{cap}</span>
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
