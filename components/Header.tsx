'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'

const staticLoader = ({ src }: { src: string }) => src
import { useEffect, useState } from 'react'

const navLinks = [
  { href: '/', label: 'Início' },
  { href: '/servicos', label: 'Serviços' },
  { href: '/portfolio', label: 'Portfólio' },
  { href: '/quem-somos', label: 'Quem Somos' },
  { href: '/capacidades', label: 'Capacidades' },
  { href: '/qualidade', label: 'Qualidade' },
  { href: '/contactos', label: 'Contactos' },
]

export default function Header() {
  const pathname = usePathname()
  const [mobileOpen, setMobileOpen] = useState(false)
  const { scrollY } = useScroll()
  const headerBg = useTransform(scrollY, [0, 100], ['rgba(17,20,21,0.5)', 'rgba(17,20,21,0.95)'])
  const headerPadding = useTransform(scrollY, [0, 100], ['24px', '12px'])

  useEffect(() => {
    setMobileOpen(false)
  }, [pathname])

  return (
    <motion.header
      style={{ backgroundColor: headerBg, paddingTop: headerPadding, paddingBottom: headerPadding }}
      className="fixed top-0 w-full z-50 backdrop-blur-xl border-b border-wireframe-stroke"
    >
      <div className="flex justify-between items-center px-6 md:px-margin max-w-[1440px] mx-auto">
        <Link href="/" className="flex items-center gap-3 group">
          <Image loader={staticLoader} src="/vicometal/assets/vicometal_logo_final.png" alt="Grupo Vicometal" width={200} height={48} className="h-[46px] w-auto object-contain invert hue-rotate-180 opacity-90 group-hover:opacity-100 transition-opacity duration-300" />
        </Link>

        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`font-mono text-label-caps uppercase transition-all duration-300 relative pb-1
                ${pathname === link.href
                  ? 'text-blueprint-cyan after:absolute after:bottom-0 after:left-0 after:w-full after:h-[1px] after:bg-blueprint-cyan'
                  : 'text-on-surface-variant hover:text-on-surface'
                }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <Link
          href="/orcamento"
          className="hidden lg:inline-flex btn-primary text-[11px]"
        >
          Solicitar Orçamento
        </Link>

        <button
          className="lg:hidden text-on-surface p-2"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Menu"
        >
          <motion.div className="flex flex-col gap-1.5 w-6" animate={mobileOpen ? 'open' : 'closed'}>
            <motion.span
              className="h-[1px] bg-on-surface block"
              variants={{ open: { rotate: 45, y: 5 }, closed: { rotate: 0, y: 0 } }}
            />
            <motion.span
              className="h-[1px] bg-on-surface block"
              variants={{ open: { opacity: 0 }, closed: { opacity: 1 } }}
            />
            <motion.span
              className="h-[1px] bg-on-surface block"
              variants={{ open: { rotate: -45, y: -5 }, closed: { rotate: 0, y: 0 } }}
            />
          </motion.div>
        </button>
      </div>

      {/* Mobile Menu */}
      <motion.div
        className="lg:hidden overflow-hidden"
        initial={false}
        animate={{ height: mobileOpen ? 'auto' : 0, opacity: mobileOpen ? 1 : 0 }}
        transition={{ duration: 0.3, ease: 'easeInOut' }}
      >
        <nav className="flex flex-col gap-4 px-6 py-6 border-t border-wireframe-stroke mt-4">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`font-mono text-label-caps uppercase transition-colors
                ${pathname === link.href ? 'text-blueprint-cyan' : 'text-on-surface-variant'}`}
            >
              {link.label}
            </Link>
          ))}
          <Link href="/orcamento" className="btn-primary text-center mt-4 text-[11px]">
            Solicitar Orçamento
          </Link>
        </nav>
      </motion.div>
    </motion.header>
  )
}
