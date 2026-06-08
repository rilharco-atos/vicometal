'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'

const caseStudies = [
  {
    id: 'ciclones-alemanha',
    country: 'Alemanha',
    flag: '🇩🇪',
    year: '2023',
    category: 'Caldeiraria Pesada',
    title: 'Ciclones Industriais — Cimenteira',
    challenge:
      'Cliente alemão necessitava de substituir um conjunto de 4 ciclones de captação de poeiras numa cimenteira em operação. O desafio principal era fabricar equipamentos de grande dimensão (ø4.5m × 12m altura) com tolerâncias apertadas e coordenar a entrega para uma paragem programada de apenas 21 dias.',
    solution:
      'Fabrico integral em Soure com pré-montagem em módulos transportáveis. Modelação 3D em SolidWorks para validação de interfaces. Soldadura robotizada nas virolas e junta circular por arco submerso (SAW). Grenalhagem e pintura intumescente incluídas. Transporte especial em 6 cargas excecionais.',
    result:
      'Entrega 3 dias antes do prazo. Montagem concluída dentro da paragem programada. Cliente adjudicou 2 projetos adicionais no ano seguinte.',
    kpis: [
      { value: '85 ton', label: 'Peso Total Fabricado' },
      { value: '3.200 h', label: 'Horas de Fabrico' },
      { value: '18 dias', label: 'Montagem em Obra' },
      { value: '0', label: 'Não-conformidades' },
    ],
  },
  {
    id: 'central-asfalto-franca',
    country: 'França',
    flag: '🇫🇷',
    year: '2024',
    category: 'Montagem Chave-na-Mão',
    title: 'Central de Fabrico de Asfalto',
    challenge:
      'Montagem completa de uma central de produção de asfalto no sul de França, incluindo estruturas metálicas, equipamentos mecânicos, tubagem e plataformas de acesso. Prazo extremamente apertado de 45 dias para entrar em funcionamento antes da época de pavimentação.',
    solution:
      'Equipa de 24 montadores destacados durante 6 semanas. Pré-fabrico em Soure de todos os componentes estruturais com marcação individual. Plano de montagem 3D com sequenciação de grua (250 ton). Coordenação com fornecedores de equipamentos mecânicos e elétricos.',
    result:
      'Central operacional 3 dias antes do prazo contratual. Zero incidentes de segurança. Cliente emitiu carta de recomendação.',
    kpis: [
      { value: '120 ton', label: 'Estruturas Montadas' },
      { value: '24', label: 'Montadores em Obra' },
      { value: '42 dias', label: 'Prazo Real (vs. 45)' },
      { value: '0', label: 'Acidentes de Trabalho' },
    ],
  },
  {
    id: 'evaporador-espanha',
    country: 'Espanha',
    flag: '🇪🇸',
    year: '2024',
    category: 'Equipamentos Industriais',
    title: 'Evaporador Quench — Siderurgia',
    challenge:
      'Fabrico de um evaporador (quench) de 26 toneladas para instalação siderúrgica em Espanha. Requisitos de qualidade EXC3 com controlo integral por ultrassons. Tolerâncias de ±2mm em equipamento de 8m de comprimento com geometria complexa.',
    solution:
      'Modelação 3D completa para simular deformações de soldadura. Sequenciação de soldadura otimizada para minimizar distorção. Arco submerso (SAW) nas juntas longitudinais, MIG/MAG robotizada nas juntas circulares. END integral (100% UT + MT nas zonas críticas).',
    result:
      'Equipamento entregue dentro do prazo com zero reparações de soldadura. Dimensionais finais dentro de ±1.5mm (requisito ±2mm). Dossier de qualidade aprovado à primeira revisão.',
    kpis: [
      { value: '26 ton', label: 'Peso do Equipamento' },
      { value: '1.800 h', label: 'Horas de Fabrico' },
      { value: '100%', label: 'END sem Defeitos' },
      { value: '±1.5mm', label: 'Tolerância Atingida' },
    ],
  },
  {
    id: 'biomassa-finlandia',
    country: 'Finlândia',
    flag: '🇫🇮',
    year: '2022',
    category: 'Equipamentos Industriais',
    title: 'Disc Screen — Linha de Biomassa',
    challenge:
      'Fabrico de um equipamento de classificação de biomassa (disc screen) para uma linha de processamento de madeira na Finlândia. Requisitos de resistência ao desgaste extremo e capacidade de processamento de 200 ton/hora de estilha.',
    solution:
      'Estrutura em S355J2 com zonas de desgaste em Hardox 450. Componentes de precisão maquinados em CNC. Montagem parcial em fábrica com testes de rotação. Envio em 3 módulos para container marítimo até Helsínquia.',
    result:
      'Equipamento em operação desde 2022 sem paragens não programadas. Vida útil dos componentes de desgaste superou as expectativas em 30%.',
    kpis: [
      { value: '32 ton', label: 'Peso Total' },
      { value: '2.100 h', label: 'Horas de Fabrico' },
      { value: '200 t/h', label: 'Capacidade Processamento' },
      { value: '5 anos', label: 'Vida Útil Garantida' },
    ],
  },
]

export default function CaseStudiesPage() {
  const [activeCase, setActiveCase] = useState<string | null>(null)

  return (
    <section className="pt-40 pb-24">
      <div className="max-w-[1440px] mx-auto px-6 md:px-margin">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <span className="font-mono text-label-caps text-blueprint-cyan tracking-widest uppercase block mb-4">
            Case Studies
          </span>
          <h1 className="font-display text-[clamp(36px,5vw,64px)] font-bold text-on-surface leading-tight mb-6">
            Casos de Estudo
          </h1>
          <p className="text-body-lg text-on-surface-variant max-w-2xl">
            Projetos detalhados com o desafio do cliente, a nossa solução e os resultados alcançados.
          </p>
        </motion.div>

        {/* Case Studies */}
        <div className="space-y-16">
          {caseStudies.map((cs, i) => (
            <motion.article
              key={cs.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: i * 0.1 }}
              className="border border-wireframe-stroke bg-white/[0.02] backdrop-blur-sm"
            >
              {/* Case header */}
              <div
                className="p-8 cursor-pointer group"
                onClick={() => setActiveCase(activeCase === cs.id ? null : cs.id)}
              >
                <div className="flex flex-wrap items-center gap-3 mb-4">
                  <span className="font-mono text-sm text-on-surface-variant">
                    {cs.flag} {cs.country}
                  </span>
                  <span className="w-1 h-1 rounded-full bg-wireframe-stroke" />
                  <span className="font-mono text-sm text-on-surface-variant">{cs.year}</span>
                  <span className="w-1 h-1 rounded-full bg-wireframe-stroke" />
                  <span className="font-mono text-sm text-blueprint-cyan">{cs.category}</span>
                </div>
                <div className="flex items-center justify-between">
                  <h2 className="font-display text-2xl md:text-3xl font-bold text-on-surface group-hover:text-blueprint-cyan transition-colors">
                    {cs.title}
                  </h2>
                  <motion.span
                    animate={{ rotate: activeCase === cs.id ? 180 : 0 }}
                    className="text-blueprint-cyan text-2xl ml-4 flex-shrink-0"
                  >
                    ↓
                  </motion.span>
                </div>
              </div>

              {/* Expandable content */}
              <motion.div
                initial={false}
                animate={{
                  height: activeCase === cs.id ? 'auto' : 0,
                  opacity: activeCase === cs.id ? 1 : 0,
                }}
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                className="overflow-hidden"
              >
                <div className="px-8 pb-8 space-y-8">
                  {/* Challenge */}
                  <div className="border-l-2 border-blueprint-cyan/30 pl-6">
                    <h3 className="font-mono text-label-caps text-blueprint-cyan tracking-widest uppercase mb-3">
                      Desafio
                    </h3>
                    <p className="text-on-surface-variant leading-relaxed">{cs.challenge}</p>
                  </div>

                  {/* Solution */}
                  <div className="border-l-2 border-blueprint-cyan/30 pl-6">
                    <h3 className="font-mono text-label-caps text-blueprint-cyan tracking-widest uppercase mb-3">
                      Solução
                    </h3>
                    <p className="text-on-surface-variant leading-relaxed">{cs.solution}</p>
                  </div>

                  {/* KPIs */}
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-6 py-6 border-t border-b border-wireframe-stroke">
                    {cs.kpis.map((kpi) => (
                      <div key={kpi.label}>
                        <div className="font-display text-2xl font-bold text-blueprint-cyan text-glow mb-1">
                          {kpi.value}
                        </div>
                        <div className="font-mono text-xs text-on-surface-variant uppercase">
                          {kpi.label}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Result */}
                  <div className="border-l-2 border-green-500/30 pl-6">
                    <h3 className="font-mono text-label-caps text-green-400 tracking-widest uppercase mb-3">
                      Resultado
                    </h3>
                    <p className="text-on-surface-variant leading-relaxed">{cs.result}</p>
                  </div>
                </div>
              </motion.div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
