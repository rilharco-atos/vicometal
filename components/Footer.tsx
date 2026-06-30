'use client'

import { motion, useInView } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import { useRef } from 'react'

const staticLoader = ({ src }: { src: string }) => src

const navLinks = [
  { href: '/quem-somos', label: 'Quem Somos' },
  { href: '/capacidades', label: 'Capacidades' },
  { href: '/portfolio', label: 'Portfólio' },
  { href: '/servicos', label: 'Serviços' },
  { href: '/qualidade', label: 'Qualidade' },
  { href: '/contactos', label: 'Contactos' },
  { href: '/engenharia-digital', label: 'Engenharia Digital' },
  { href: '/sustentabilidade', label: 'Sustentabilidade' },
  { href: '/carreiras', label: 'Carreiras' },
  { href: '/casos-estudo', label: 'Casos de Estudo' },
  { href: '/portal-cliente', label: 'Portal Cliente' },
  { href: '/tour-virtual', label: 'Tour Virtual' },
]

const serviceLinks = [
  { href: '/servicos#fabrico', label: 'Fabrico' },
  { href: '/servicos#montagem', label: 'Montagem' },
  { href: '/servicos#manutencao', label: 'Manutenção Industrial' },
  { href: '/servicos#soldadura', label: 'Soldadura' },
  { href: '/servicos#inox', label: 'Inox & Vicoinox' },
  { href: '/servicos#chave-na-mao', label: 'Chave-na-Mão' },
]

export default function Footer() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <footer ref={ref} className="relative mt-32 border-t border-wireframe-stroke bg-surface-container-lowest">
      {/* Animated border */}
      <motion.div
        className="absolute top-0 left-0 h-[1px] bg-gradient-to-r from-transparent via-blueprint-cyan/50 to-transparent"
        initial={{ width: '0%' }}
        animate={isInView ? { width: '100%' } : {}}
        transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
      />

      <div className="max-w-[1440px] mx-auto px-6 md:px-margin py-16 md:py-margin">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          {/* Brand */}
          <div className="md:col-span-4">
            <Link href="/" className="inline-block mb-5">
              <Image loader={staticLoader} src="/vicometal/assets/vicometal_logo_final.png" alt="Grupo Vicometal" width={220} height={56} className="h-[52px] w-auto object-contain invert hue-rotate-180 opacity-90" />
            </Link>
            <p className="font-body text-body-md text-on-surface-variant max-w-sm mb-6">
              Desde 2001 a fornecer soluções de engenharia e metalomecânica para os mais exigentes projetos industriais em 4 continentes.
            </p>
            <div className="flex gap-4">
              <a href="https://www.facebook.com/grupovicometal/?locale=pt_PT" target="_blank" rel="noopener" aria-label="Facebook" className="w-9 h-9 border border-wireframe-stroke flex items-center justify-center text-on-surface-variant hover:text-blueprint-cyan hover:border-blueprint-cyan/50 transition-colors">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/></svg>
              </a>
              <a href="https://www.linkedin.com/in/grupo-vicometal-bb8061235" target="_blank" rel="noopener" aria-label="LinkedIn" className="w-9 h-9 border border-wireframe-stroke flex items-center justify-center text-on-surface-variant hover:text-blueprint-cyan hover:border-blueprint-cyan/50 transition-colors">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2zM4 6a2 2 0 100-4 2 2 0 000 4z"/></svg>
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div className="md:col-span-2">
            <h4 className="font-mono text-label-caps uppercase text-on-surface mb-4 tracking-widest">Navegação</h4>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="font-mono text-technical text-on-tertiary-container hover:text-on-surface transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="md:col-span-3">
            <h4 className="font-mono text-label-caps uppercase text-on-surface mb-4 tracking-widest">Serviços</h4>
            <ul className="space-y-3">
              {serviceLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="font-mono text-technical text-on-tertiary-container hover:text-on-surface transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="md:col-span-3">
            <h4 className="font-mono text-label-caps uppercase text-on-surface mb-4 tracking-widest">Contactos</h4>
            <ul className="space-y-3 font-mono text-technical text-on-tertiary-container">
              <li className="flex items-start gap-2">
                <span className="text-blueprint-cyan mt-0.5">📍</span>
                <span>Barroco, 3130-400<br/>Vila Nova de Anços · Soure</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-blueprint-cyan">📞</span>
                <a href="tel:+351239644616" className="hover:text-on-surface transition-colors">(+351) 239 644 616</a>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-blueprint-cyan">✉️</span>
                <a href="mailto:vicometal@vicometal.pt" className="hover:text-on-surface transition-colors">vicometal@vicometal.pt</a>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-blueprint-cyan">🌐</span>
                <span>N 40° 07&apos; 19.68&quot; W 8° 35&apos; 52.50&quot;</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-wireframe-stroke mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="font-mono text-technical text-on-tertiary-container">
            © 2026 Vicometal — Vieira Cordeiro, S.A. · Todos os direitos reservados.
          </p>
          <div className="flex items-center gap-6">
            <a href="https://www.livroreclamacoes.pt" target="_blank" rel="noopener" className="font-mono text-[11px] text-on-tertiary-container hover:text-on-surface transition-colors">
              Livro de Reclamações
            </a>
            <Link href="#" className="font-mono text-[11px] text-on-tertiary-container hover:text-on-surface transition-colors">
              Política de Privacidade
            </Link>
            <a href="https://atos.net" target="_blank" rel="noopener" className="flex items-center gap-2 font-mono text-[10px] text-on-tertiary-container opacity-60 hover:opacity-100 transition-opacity">
              <span>Dev by</span>
              <Image loader={staticLoader} src="/vicometal/assets/atos-logo.png" alt="Atos" width={40} height={16} className="brightness-0 invert opacity-60" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
