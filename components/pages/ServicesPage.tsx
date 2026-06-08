'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import ScrollReveal from '@/components/ScrollReveal'
import Link from 'next/link'

const services = [
  {
    title: 'Fabrico',
    subtitle: 'Estruturas & Caldeiraria Pesada',
    description: 'A Vicometal fabrica todo o tipo de estruturas metálicas e equipamentos industriais, desde perfis simples a conjuntos de elevada complexidade com tolerâncias apertadas. Capacidade até 3.000 ton/mês com peças unitárias até 60 toneladas.',
    specs: [
      { label: 'Capacidade', value: '3.000 ton/mês' },
      { label: 'Peça máx.', value: '60 ton' },
      { label: 'Área', value: '40.000 m²' },
    ],
    code: 'SRV.FAB_01',
    image: '/uploads/destaques/ciclone-alemanha.jpg',
  },
  {
    title: 'Montagem',
    subtitle: 'Montagem Industrial On-Site',
    description: 'Equipas experientes de montagem em obra, com capacidade para operar em ambientes industriais exigentes — centrais de britagem, asfalto, betão e biomassa. Montagem de estruturas metálicas com grua até 500 toneladas.',
    specs: [
      { label: 'Presença', value: '9 países' },
      { label: 'Grua máx.', value: '500 ton' },
      { label: 'Equipas', value: 'Deslocadas' },
    ],
    code: 'SRV.MNT_02',
    image: '/uploads/destaques/central-asfalto.jpg',
  },
  {
    title: 'Manutenção Industrial',
    subtitle: 'Preventiva, Corretiva & Paragens',
    description: 'Equipas especializadas disponíveis 24/7 para manutenção em contínuo ou paragens programadas nos sectores de celuloses, cimenteiras, siderurgias, minas e pedreiras.',
    specs: [
      { label: 'Disponibilidade', value: '24/7' },
      { label: 'Modalidade', value: 'Residente' },
      { label: 'Sectores', value: '6+' },
    ],
    code: 'SRV.MAN_03',
    image: '/uploads/destaques/evaporador-quench.jpg',
  },
  {
    title: 'Soldadura Especializada',
    subtitle: 'Certificação EN ISO 3834',
    description: 'A soldadura é o coração da nossa atividade. Dispomos de processos MIG/MAG robotizada, TIG de precisão em inox e alumínio, e arco submerso para grandes espessuras. Soldadores certificados EN ISO 9606-1.',
    specs: [
      { label: 'Certificação', value: 'ISO 3834-2' },
      { label: 'Robots', value: '2 MIG/MAG' },
      { label: 'Processos', value: '135/141/121' },
    ],
    code: 'SRV.WLD_04',
    image: '/uploads/destaques/soldadura-mig-mag.jpg',
  },
  {
    title: 'Inox — Vicoinox',
    subtitle: 'Aço Inoxidável Especializado',
    description: 'Através da Vicoinox, S.A., oferecemos fabrico especializado em aço inoxidável AISI 304/316L para os sectores alimentar, farmacêutico, químico e de águas, com acabamentos sanitários e polimento eletrolítico.',
    specs: [
      { label: 'Material', value: 'AISI 304/316L' },
      { label: 'Acabamento', value: 'Eletrolítico' },
      { label: 'Norm.', value: 'PED 2014/68' },
    ],
    code: 'SRV.INX_05',
    image: '/uploads/destaques/transportadores-galeria.jpg',
  },
  {
    title: 'Soluções Chave-na-Mão',
    subtitle: 'EPC — Do Design à Entrega',
    description: 'Para projetos que exigem um parceiro único, oferecemos soluções integradas: engenharia, procurement, fabrico, transporte, montagem e comissionamento de instalações completas.',
    specs: [
      { label: 'Modelo', value: 'EPC' },
      { label: 'Fases', value: '6 integradas' },
      { label: 'Escala', value: 'Internacional' },
    ],
    code: 'SRV.TKY_06',
    image: '/uploads/destaques/central-asfalto.jpg',
  },
]

export default function ServicesPage() {
  return (
    <div className="pt-32 pb-24">
      {/* Hero */}
      <section className="max-w-[1440px] mx-auto px-6 md:px-margin mb-32">
        <ScrollReveal>
          <div className="flex items-center gap-4 mb-4">
            <div className="w-16 h-[1px] bg-blueprint-cyan" />
            <span className="font-mono text-label-caps text-blueprint-cyan uppercase tracking-widest">
              Soluções
            </span>
          </div>
        </ScrollReveal>
        <ScrollReveal delay={0.1}>
          <h1 className="font-display text-[clamp(48px,7vw,80px)] leading-[1.1] tracking-[-0.04em] font-bold text-on-surface uppercase mb-6">
            Serviços
          </h1>
        </ScrollReveal>
        <ScrollReveal delay={0.2}>
          <p className="font-body text-body-lg text-on-surface-variant max-w-2xl">
            Soluções integradas de metalomecânica — do projeto à entrega final.
            Fabrico, montagem, manutenção e soluções chave-na-mão para a indústria pesada.
          </p>
        </ScrollReveal>
      </section>

      {/* Services detail */}
      <section className="max-w-[1440px] mx-auto px-6 md:px-margin space-y-32">
        {services.map((service, index) => (
          <ServiceBlock key={service.title} service={service} index={index} />
        ))}
      </section>

      {/* Quote CTA */}
      <section className="max-w-3xl mx-auto px-6 md:px-margin mt-32">
        <QuoteForm />
      </section>
    </div>
  )
}

function ServiceBlock({ service, index }: { service: typeof services[0]; index: number }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const isReversed = index % 2 !== 0

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 60 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
      className={`grid grid-cols-1 lg:grid-cols-2 gap-16 items-center ${isReversed ? 'lg:direction-rtl' : ''}`}
    >
      {/* Image */}
      <div className={`relative aspect-[4/3] ${isReversed ? 'lg:order-2' : ''}`}>
        <div className="glass-card overflow-hidden h-full relative group">
          <div
            className="w-full h-full bg-cover bg-center grayscale opacity-60 mix-blend-luminosity group-hover:opacity-80 group-hover:grayscale-0 transition-all duration-700"
            style={{ backgroundImage: `url('${service.image}')` }}
          />
          {/* Tech overlay */}
          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
            <div className="absolute top-1/2 left-0 w-full h-[1px] bg-blueprint-cyan/30" />
            <div className="absolute top-0 left-1/2 w-[1px] h-full bg-blueprint-cyan/30" />
            <div className="absolute top-4 right-4 font-mono text-label-caps text-blueprint-cyan">
              {service.code}
            </div>
          </div>
        </div>
        {/* Corner accents */}
        <div className="absolute -top-2 -left-2 w-6 h-6 border-t border-l border-blueprint-cyan/50" />
        <div className="absolute -bottom-2 -right-2 w-6 h-6 border-b border-r border-blueprint-cyan/50" />
      </div>

      {/* Content */}
      <div className={isReversed ? 'lg:order-1' : ''}>
        <span className="font-mono text-label-caps text-blueprint-cyan uppercase tracking-widest block mb-3">
          {service.subtitle}
        </span>
        <h2 className="font-headline text-headline-lg text-on-surface mb-4 uppercase">
          {service.title}
        </h2>
        <p className="font-body text-body-lg text-on-surface-variant mb-8">
          {service.description}
        </p>

        {/* Specs grid */}
        <div className="grid grid-cols-3 gap-4 mb-8">
          {service.specs.map((spec) => (
            <div key={spec.label} className="border border-wireframe-stroke p-4 bg-white/[0.02]">
              <span className="font-mono text-[10px] uppercase text-on-tertiary-container block mb-1">
                {spec.label}
              </span>
              <span className="font-mono text-technical text-on-surface font-medium">
                {spec.value}
              </span>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  )
}

function QuoteForm() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-50px' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
      className="glass-card p-8 md:p-12 relative overflow-hidden"
    >
      {/* Decorative glow */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-blueprint-cyan/[0.03] blur-[80px] rounded-full" />
      <div className="absolute top-0 right-0 w-8 h-8 border-t border-r border-wireframe-stroke m-4" />
      <div className="absolute bottom-0 left-0 w-8 h-8 border-b border-l border-wireframe-stroke m-4" />

      <div className="mb-10 text-center relative z-10">
        <span className="font-mono text-label-caps text-blueprint-cyan block mb-4 tracking-[0.2em] uppercase">
          Iniciar Sequência
        </span>
        <h2 className="font-headline text-headline-lg text-on-surface uppercase tracking-tighter">
          Solicitar Orçamento
        </h2>
      </div>

      <form className="space-y-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <label className="font-mono text-label-caps text-on-surface-variant mb-2 block uppercase">
              Entidade / Nome
            </label>
            <input
              type="text"
              className="w-full bg-transparent border-0 border-b border-wireframe-stroke text-on-surface font-body py-3 px-0 focus:outline-none focus:border-blueprint-cyan focus:shadow-[0_1px_0_0_#00F0FF] transition-all placeholder:text-on-tertiary-container"
              placeholder="ex. Escritório de Arquitectura"
            />
          </div>
          <div>
            <label className="font-mono text-label-caps text-on-surface-variant mb-2 block uppercase">
              Email
            </label>
            <input
              type="email"
              className="w-full bg-transparent border-0 border-b border-wireframe-stroke text-on-surface font-body py-3 px-0 focus:outline-none focus:border-blueprint-cyan focus:shadow-[0_1px_0_0_#00F0FF] transition-all placeholder:text-on-tertiary-container"
              placeholder="contacto@empresa.com"
            />
          </div>
        </div>

        <div>
          <label className="font-mono text-label-caps text-on-surface-variant mb-2 block uppercase">
            Serviço Pretendido
          </label>
          <select className="w-full bg-transparent border-0 border-b border-wireframe-stroke text-on-surface font-body py-3 px-0 focus:outline-none focus:border-blueprint-cyan transition-all appearance-none">
            <option value="" className="bg-surface">Selecionar Serviço...</option>
            <option value="laser" className="bg-surface">Corte Laser</option>
            <option value="quinagem" className="bg-surface">Quinagem</option>
            <option value="soldadura" className="bg-surface">Soldadura</option>
            <option value="multiple" className="bg-surface">Múltiplos / Montagem Integrada</option>
          </select>
        </div>

        <div>
          <label className="font-mono text-label-caps text-on-surface-variant mb-2 block uppercase">
            Especificações Técnicas
          </label>
          <textarea
            rows={4}
            className="w-full bg-white/[0.02] border border-wireframe-stroke text-on-surface font-body p-4 focus:outline-none focus:border-blueprint-cyan focus:shadow-[0_0_0_1px_rgba(0,240,255,0.3)] transition-all resize-none placeholder:text-on-tertiary-container"
            placeholder="Indique tipos de material, tolerâncias e volume estimado..."
          />
        </div>

        <div className="pt-4 flex justify-end">
          <motion.button
            type="submit"
            className="btn-primary group"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <span className="relative z-10 flex items-center gap-2">
              Enviar Dados
              <span className="text-sm">→</span>
            </span>
          </motion.button>
        </div>
      </form>
    </motion.div>
  )
}
