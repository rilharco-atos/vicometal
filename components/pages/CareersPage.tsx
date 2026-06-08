'use client'

import ScrollReveal from '@/components/ScrollReveal'

const benefits = [
  { icon: '🏭', title: 'Projetos Internacionais', description: 'Trabalhe em projetos para mais de 15 países — França, Alemanha, Noruega, Brasil, Angola e muito mais.' },
  { icon: '🎓', title: 'Formação Contínua', description: '4.200 horas/ano de formação. Certificação de soldadores, operadores CNC e técnicos de qualidade.' },
  { icon: '📈', title: 'Progressão de Carreira', description: '40% das chefias atuais começaram na produção. Valorizamos o mérito e o crescimento interno.' },
  { icon: '🛡️', title: 'Segurança & Bem-Estar', description: 'Seguro de saúde, refeitório subsidiado, EPIs de qualidade e ambiente de trabalho seguro.' },
]

const openings = [
  { title: 'Soldador MIG/MAG', location: 'Soure', type: 'Tempo Inteiro' },
  { title: 'Serralheiro Mecânico', location: 'Soure', type: 'Tempo Inteiro' },
  { title: 'Técnico de Qualidade', location: 'Soure', type: 'Tempo Inteiro' },
  { title: 'Engenheiro de Produção', location: 'Soure', type: 'Tempo Inteiro' },
  { title: 'Montador Industrial', location: 'Internacional', type: 'Destacamento' },
]

export default function CareersPage() {
  return (
    <div className="pt-32 pb-24">
      {/* Hero */}
      <section className="max-w-[1440px] mx-auto px-6 md:px-margin mb-32">
        <ScrollReveal>
          <div className="flex items-center gap-4 mb-4">
            <div className="w-16 h-[1px] bg-blueprint-cyan" />
            <span className="font-mono text-label-caps text-blueprint-cyan uppercase tracking-widest">
              Trabalhe Connosco
            </span>
          </div>
        </ScrollReveal>
        <ScrollReveal delay={0.1}>
          <h1 className="font-display text-[clamp(48px,7vw,72px)] leading-[1.1] tracking-[-0.04em] font-bold text-on-surface uppercase mb-6">
            Carreiras
          </h1>
        </ScrollReveal>
        <ScrollReveal delay={0.2}>
          <p className="font-body text-body-lg text-on-surface-variant max-w-2xl">
            Junte-se a uma equipa de mais de 200 profissionais que constrói o futuro
            da indústria pesada em 4 continentes.
          </p>
        </ScrollReveal>
      </section>

      {/* Benefits */}
      <section className="max-w-[1440px] mx-auto px-6 md:px-margin mb-32">
        <ScrollReveal className="mb-16">
          <h2 className="font-headline text-headline-lg text-on-surface uppercase">
            O Que Oferecemos
          </h2>
        </ScrollReveal>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {benefits.map((benefit, i) => (
            <ScrollReveal key={benefit.title} delay={i * 0.1}>
              <div className="glass-card-hover p-8 h-full">
                <div className="text-2xl mb-4">{benefit.icon}</div>
                <h3 className="font-headline text-headline-md text-on-surface mb-2">{benefit.title}</h3>
                <p className="font-body text-body-md text-on-surface-variant">{benefit.description}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* Open positions */}
      <section className="max-w-[1440px] mx-auto px-6 md:px-margin">
        <ScrollReveal className="mb-16">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-12 h-[1px] bg-blueprint-cyan" />
            <span className="font-mono text-label-caps text-blueprint-cyan uppercase tracking-widest">
              Vagas Abertas
            </span>
          </div>
          <h2 className="font-headline text-headline-lg text-on-surface uppercase">
            Posições Disponíveis
          </h2>
        </ScrollReveal>
        <div className="space-y-4">
          {openings.map((job, i) => (
            <ScrollReveal key={job.title} delay={i * 0.08}>
              <div className="border border-wireframe-stroke p-6 flex flex-col md:flex-row md:items-center justify-between gap-4 hover:border-blueprint-cyan/30 transition-colors">
                <div>
                  <h3 className="font-headline text-headline-md text-on-surface">{job.title}</h3>
                  <div className="flex items-center gap-4 mt-1">
                    <span className="font-mono text-technical text-on-surface-variant">{job.location}</span>
                    <span className="font-mono text-technical text-blueprint-cyan">{job.type}</span>
                  </div>
                </div>
                <a href="mailto:vicometal@vicometal.pt" className="btn-ghost text-center shrink-0">
                  Candidatar
                </a>
              </div>
            </ScrollReveal>
          ))}
        </div>
        <ScrollReveal delay={0.5} className="mt-12">
          <p className="font-body text-body-md text-on-surface-variant">
            Não encontra a vaga ideal? Envie a sua candidatura espontânea para{' '}
            <a href="mailto:vicometal@vicometal.pt" className="text-blueprint-cyan hover:underline">
              vicometal@vicometal.pt
            </a>
          </p>
        </ScrollReveal>
      </section>
    </div>
  )
}
