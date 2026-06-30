'use client'

import { motion, useInView } from 'framer-motion'
import { useRef, useState, useCallback } from 'react'
import ScrollReveal from '@/components/ScrollReveal'

interface MapPin {
  id: string
  country: string
  cx: number
  cy: number
  project: string
  detail: string
  year: string
  tonnage: string
  isHQ?: boolean
}

const pins: MapPin[] = [
  { id: 'pt', country: 'Portugal', cx: 468, cy: 192, project: 'Sede — Vieira Cordeiro, S.A.', detail: 'Fabrico, Montagem & Manutenção', year: '2001', tonnage: '3.000 ton/mês', isHQ: true },
  { id: 'es', country: 'Espanha', cx: 474, cy: 198, project: 'Evaporador Quench · Vicometal Montajes', detail: 'Equipamentos Industriais', year: '2024', tonnage: '26 ton' },
  { id: 'fr', country: 'França', cx: 488, cy: 175, project: 'Central de Fabrico de Asfalto', detail: 'Montagem Chave-na-Mão', year: '2024', tonnage: '120 ton' },
  { id: 'de', country: 'Alemanha', cx: 504, cy: 163, project: 'Ciclones Industriais', detail: 'Caldeiraria Pesada', year: '2023', tonnage: '85 ton' },
  { id: 'fi', country: 'Finlândia', cx: 530, cy: 115, project: 'Disc Screen para Biomassa', detail: 'Equipamentos Industriais', year: '2022', tonnage: '32 ton' },
  { id: 'no', country: 'Noruega', cx: 500, cy: 125, project: 'Plataforma Offshore', detail: 'Estruturas Offshore', year: '2022', tonnage: '45 ton' },
  { id: 'ma', country: 'Marrocos', cx: 470, cy: 225, project: 'Central de Britagem · Cimenteiras', detail: 'Montagem & Manutenção', year: '2023', tonnage: '200+ ton' },
  { id: 'ao', country: 'Angola', cx: 500, cy: 355, project: 'Subestação Elétrica · Manutenção', detail: 'Estruturas & Manutenção', year: '2021', tonnage: '150+ ton' },
  { id: 'br', country: 'Brasil', cx: 310, cy: 330, project: 'Estruturas Industriais', detail: 'Estruturas Metálicas', year: '2020', tonnage: '300+ ton' },
]

export default function WorldMap() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })
  const [activePin, setActivePin] = useState<MapPin | null>(null)
  const [tooltipPos, setTooltipPos] = useState({ x: 0, y: 0 })
  const mapRef = useRef<HTMLDivElement>(null)

  const handleMouseMove = useCallback((pin: MapPin, e: React.MouseEvent<SVGElement>) => {
    setActivePin(pin)
    if (mapRef.current) {
      const rect = mapRef.current.getBoundingClientRect()
      setTooltipPos({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      })
    }
  }, [])

  return (
    <section ref={ref} className="py-32 relative overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-6 md:px-margin">
        {/* Section header - centered */}
        <div className="text-center mb-16">
          <ScrollReveal>
            <span className="font-mono text-label-caps text-blueprint-cyan uppercase tracking-[0.2em] block mb-4">
              Presença Global
            </span>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <h2 className="font-display text-[clamp(36px,5vw,56px)] font-bold text-on-surface leading-tight mb-4">
              Projetos em <span className="text-blueprint-cyan">4 continentes</span>
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <p className="font-body text-body-lg text-on-surface-variant max-w-xl mx-auto">
              Da Europa à América do Sul e África, levamos engenharia portuguesa
              aos mais exigentes mercados internacionais.
            </p>
          </ScrollReveal>
        </div>

        {/* Map container */}
        <ScrollReveal delay={0.3}>
          <div
            ref={mapRef}
            className="relative w-full max-w-5xl mx-auto"
            style={{ aspectRatio: '2.1 / 1' }}
          >
            <svg
              viewBox="0 0 1000 480"
              className="w-full h-full"
              preserveAspectRatio="xMidYMid meet"
            >
              <defs>
                <radialGradient id="mapGlow" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stopColor="rgba(229,86,14,0.06)" />
                  <stop offset="100%" stopColor="transparent" />
                </radialGradient>
                <filter id="pinShadow">
                  <feDropShadow dx="0" dy="0" stdDeviation="3" floodColor="#E5560E" floodOpacity="0.4" />
                </filter>
                <filter id="hqShadow">
                  <feDropShadow dx="0" dy="0" stdDeviation="4" floodColor="#c8963e" floodOpacity="0.5" />
                </filter>
              </defs>

              {/* Background glow around Europe */}
              <ellipse cx="500" cy="200" rx="200" ry="150" fill="url(#mapGlow)" />

              {/* World map - dot matrix pattern (professional grid) */}
              <g opacity="0.35">
                {generateWorldDots()}
              </g>

              {/* Connection arcs from Portugal */}
              {pins.filter(p => !p.isHQ).map((pin, i) => {
                const startX = 468, startY = 192
                const midX = (startX + pin.cx) / 2
                const midY = Math.min(startY, pin.cy) - Math.abs(pin.cx - startX) * 0.3 - 20
                return (
                  <motion.path
                    key={`arc-${pin.id}`}
                    d={`M${startX},${startY} Q${midX},${midY} ${pin.cx},${pin.cy}`}
                    fill="none"
                    stroke="rgba(229,86,14,0.08)"
                    strokeWidth="1"
                    strokeDasharray="2 4"
                    initial={{ pathLength: 0 }}
                    animate={isInView ? { pathLength: 1 } : {}}
                    transition={{ duration: 2, delay: 0.8 + i * 0.12, ease: [0.22, 1, 0.36, 1] }}
                  />
                )
              })}

              {/* Pins */}
              {pins.map((pin, i) => (
                <g
                  key={pin.id}
                  onMouseEnter={(e) => handleMouseMove(pin, e)}
                  onMouseMove={(e) => handleMouseMove(pin, e)}
                  onMouseLeave={() => setActivePin(null)}
                  className="cursor-pointer"
                >
                  {/* HQ pulse ring */}
                  {pin.isHQ && isInView && (
                    <>
                      <motion.circle
                        cx={pin.cx} cy={pin.cy} r={6}
                        fill="none" stroke="rgba(200,150,62,0.2)" strokeWidth="1"
                        animate={{ r: [6, 18], opacity: [0.3, 0] }}
                        transition={{ duration: 3, repeat: Infinity, ease: 'easeOut' }}
                      />
                      <motion.circle
                        cx={pin.cx} cy={pin.cy} r={6}
                        fill="none" stroke="rgba(200,150,62,0.15)" strokeWidth="0.5"
                        animate={{ r: [6, 24], opacity: [0.2, 0] }}
                        transition={{ duration: 3, repeat: Infinity, ease: 'easeOut', delay: 1 }}
                      />
                    </>
                  )}
                  {/* Hover ring */}
                  <circle
                    cx={pin.cx} cy={pin.cy}
                    r={activePin?.id === pin.id ? 10 : 0}
                    fill="none"
                    stroke={pin.isHQ ? 'rgba(200,150,62,0.3)' : 'rgba(229,86,14,0.2)'}
                    strokeWidth="1"
                    className="transition-all duration-300"
                  />
                  {/* Pin dot */}
                  <motion.circle
                    cx={pin.cx} cy={pin.cy}
                    r={pin.isHQ ? 4.5 : 3}
                    fill={pin.isHQ ? '#c8963e' : '#E5560E'}
                    filter={pin.isHQ ? 'url(#hqShadow)' : 'url(#pinShadow)'}
                    initial={{ scale: 0, opacity: 0 }}
                    animate={isInView ? { scale: 1, opacity: 1 } : {}}
                    transition={{ duration: 0.5, delay: 1 + i * 0.08, type: 'spring', stiffness: 200 }}
                  />
                </g>
              ))}
            </svg>

            {/* Tooltip */}
            {activePin && (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.1 }}
                className="absolute z-50 pointer-events-none"
                style={{
                  left: tooltipPos.x,
                  top: tooltipPos.y - 16,
                  transform: 'translate(-50%, -100%)',
                }}
              >
                <div className="bg-[#141920]/95 backdrop-blur-md border border-white/[0.08] px-5 py-4 shadow-2xl rounded-md min-w-[220px]">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2">
                      <span className={`w-2 h-2 rounded-full ${activePin.isHQ ? 'bg-[#c8963e]' : 'bg-[#E5560E]'}`} />
                      <span className="text-[13px] font-medium text-white">{activePin.country}</span>
                    </div>
                    <span className="text-[11px] text-white/40 font-mono">{activePin.year}</span>
                  </div>
                  <p className="text-[12px] text-[#E5560E]/90 leading-snug mb-2 font-mono">{activePin.project}</p>
                  <div className="flex items-center justify-between pt-2 border-t border-white/[0.06]">
                    <span className="text-[11px] text-white/50">{activePin.detail}</span>
                    <span className="text-[11px] text-white/70 font-mono font-medium">{activePin.tonnage}</span>
                  </div>
                </div>
              </motion.div>
            )}
          </div>
        </ScrollReveal>

        {/* Stats row below map */}
        <div className="max-w-3xl mx-auto mt-16">
          <ScrollReveal delay={0.5}>
            <div className="grid grid-cols-3 gap-8 text-center">
              {[
                { value: '9', label: 'Países' },
                { value: '4', label: 'Continentes' },
                { value: '1000+', label: 'Ton exportadas/ano' },
              ].map((stat) => (
                <div key={stat.label} className="group">
                  <div className="font-display text-[36px] font-bold text-blueprint-cyan text-glow mb-1 group-hover:scale-105 transition-transform">
                    {stat.value}
                  </div>
                  <div className="font-mono text-[11px] uppercase text-on-surface-variant tracking-widest">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </ScrollReveal>

          {/* Legend */}
          <ScrollReveal delay={0.6}>
            <div className="flex items-center justify-center gap-8 mt-10">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-[#c8963e] shadow-[0_0_8px_rgba(200,150,62,0.5)]" />
                <span className="font-mono text-[11px] text-on-surface-variant">Sede</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-[#E5560E] shadow-[0_0_8px_rgba(229,86,14,0.4)]" />
                <span className="font-mono text-[11px] text-on-surface-variant">Projetos internacionais</span>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}

/**
 * Generates a professional dot-matrix world map
 * Using precise coordinates for recognizable continent shapes
 */
function generateWorldDots() {
  // Each continent defined as a set of row ranges [y, xStart, xEnd]
  // Spaced every 8px for a clean, minimal look
  const S = 8 // spacing
  const R = 1.2 // dot radius

  const continents: { regions: [number, number, number][]; fill: string }[] = [
    {
      // North America
      fill: 'rgba(255,255,255,0.5)',
      regions: [
        [72, 88, 200], [80, 80, 224], [88, 80, 240], [96, 88, 248],
        [104, 96, 256], [112, 104, 260], [120, 112, 256], [128, 120, 248],
        [136, 128, 244], [144, 140, 240], [152, 148, 232], [160, 156, 224],
        [168, 164, 220], [176, 172, 216], [184, 180, 212], [192, 188, 216],
        [200, 196, 220], [208, 204, 224],
      ],
    },
    {
      // South America
      fill: 'rgba(255,255,255,0.5)',
      regions: [
        [248, 268, 312], [256, 264, 320], [264, 260, 328], [272, 260, 336],
        [280, 260, 340], [288, 264, 340], [296, 264, 336], [304, 268, 332],
        [312, 270, 330], [320, 272, 326], [328, 274, 322], [336, 276, 320],
        [344, 278, 316], [352, 280, 312], [360, 282, 308], [368, 284, 304],
        [376, 288, 300], [384, 290, 296],
      ],
    },
    {
      // Europe
      fill: 'rgba(255,255,255,0.6)',
      regions: [
        [112, 448, 536], [120, 444, 544], [128, 440, 548], [136, 444, 552],
        [144, 448, 548], [152, 452, 544], [160, 456, 540], [168, 452, 536],
        [176, 456, 520], [184, 460, 510], [192, 460, 504], [200, 456, 500],
      ],
    },
    {
      // Iberian Peninsula
      fill: 'rgba(255,255,255,0.6)',
      regions: [
        [184, 448, 480], [192, 452, 484], [200, 450, 486],
      ],
    },
    {
      // Scandinavia
      fill: 'rgba(255,255,255,0.5)',
      regions: [
        [88, 488, 520], [96, 484, 528], [104, 488, 524],
      ],
    },
    {
      // Africa
      fill: 'rgba(255,255,255,0.45)',
      regions: [
        [216, 448, 520], [224, 444, 528], [232, 440, 536], [240, 440, 540],
        [248, 444, 544], [256, 448, 544], [264, 452, 540], [272, 456, 540],
        [280, 460, 536], [288, 460, 536], [296, 464, 532], [304, 464, 528],
        [312, 468, 524], [320, 468, 520], [328, 472, 516], [336, 476, 512],
        [344, 480, 508], [352, 484, 504], [360, 488, 500],
      ],
    },
    {
      // Middle East
      fill: 'rgba(255,255,255,0.4)',
      regions: [
        [184, 540, 600], [192, 544, 608], [200, 548, 604], [208, 552, 596],
        [216, 556, 588],
      ],
    },
    {
      // Asia / Russia
      fill: 'rgba(255,255,255,0.4)',
      regions: [
        [72, 560, 760], [80, 552, 776], [88, 548, 784], [96, 544, 788],
        [104, 548, 784], [112, 552, 776], [120, 556, 768], [128, 560, 760],
        [136, 564, 752], [144, 568, 744], [152, 572, 736], [160, 580, 728],
        [168, 588, 720], [176, 596, 712],
      ],
    },
    {
      // India
      fill: 'rgba(255,255,255,0.4)',
      regions: [
        [200, 616, 656], [208, 620, 660], [216, 624, 656], [224, 628, 652],
        [232, 632, 648], [240, 636, 644],
      ],
    },
    {
      // Southeast Asia
      fill: 'rgba(255,255,255,0.35)',
      regions: [
        [184, 700, 740], [192, 696, 748], [200, 700, 744],
      ],
    },
    {
      // Australia
      fill: 'rgba(255,255,255,0.35)',
      regions: [
        [336, 720, 800], [344, 716, 808], [352, 716, 812], [360, 720, 808],
        [368, 724, 804], [376, 728, 800], [384, 736, 796], [392, 744, 788],
      ],
    },
  ]

  const dots: JSX.Element[] = []
  let key = 0

  for (const continent of continents) {
    for (const [y, xStart, xEnd] of continent.regions) {
      for (let x = xStart; x <= xEnd; x += S) {
        dots.push(
          <circle key={key++} cx={x} cy={y} r={R} fill={continent.fill} />
        )
      }
    }
  }

  return dots
}
