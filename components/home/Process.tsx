'use client'

import StickyScroll from '@/components/StickyScroll'
import ScrollReveal from '@/components/ScrollReveal'

const processSteps = [
  {
    label: 'Fase 01',
    title: 'Análise & Engenharia',
    description: 'Revisão técnica completa do projeto, análise de viabilidade, seleção de materiais e definição de tolerâncias. Engenharia de valor para otimização de custos sem comprometer a qualidade.',
  },
  {
    label: 'Fase 02',
    title: 'Fabricação de Precisão',
    description: 'Execução dos processos produtivos com equipamentos CNC de última geração. Monitorização contínua de parâmetros e controlo dimensional em tempo real.',
  },
  {
    label: 'Fase 03',
    title: 'Controlo & Certificação',
    description: 'Inspeção 3D, ensaios não destrutivos e validação dimensional. Emissão de certificados de conformidade, rastreabilidade total e documentação técnica completa.',
  },
  {
    label: 'Fase 04',
    title: 'Entrega & Montagem',
    description: 'Logística especializada para transporte de componentes de grande porte. Montagem no local com equipas certificadas e comissionamento de sistemas.',
  },
]

export default function Process() {
  return (
    <section className="relative">
      {/* Section header */}
      <div className="max-w-[1440px] mx-auto px-6 md:px-margin py-16">
        <ScrollReveal>
          <div className="flex items-center gap-4 mb-4">
            <div className="w-12 h-[1px] bg-blueprint-cyan" />
            <span className="font-mono text-label-caps text-blueprint-cyan uppercase tracking-widest">
              Metodologia
            </span>
          </div>
          <h2 className="font-headline text-headline-lg text-on-surface">
            DO CONCEITO À REALIDADE
          </h2>
        </ScrollReveal>
      </div>

      {/* Sticky scroll */}
      <StickyScroll steps={processSteps} />
    </section>
  )
}
