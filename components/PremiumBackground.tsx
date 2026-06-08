'use client'

import { useScroll, useTransform, motion } from 'framer-motion'

export default function PremiumBackground() {
  const { scrollY } = useScroll()
  const glowY1 = useTransform(scrollY, [0, 2000], [0, -300])
  const glowY2 = useTransform(scrollY, [0, 2000], [0, -150])

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      {/* Base dark */}
      <div className="absolute inset-0 bg-background" />

      {/* Blueprint grid */}
      <div className="absolute inset-0 blueprint-grid opacity-60" />

      {/* Primary glow - top center */}
      <motion.div
        style={{ y: glowY1 }}
        className="premium-glow w-[800px] h-[600px] bg-blueprint-cyan/[0.04] top-[-200px] left-1/2 -translate-x-1/2"
      />

      {/* Secondary glow - right */}
      <motion.div
        style={{ y: glowY2 }}
        className="premium-glow w-[600px] h-[600px] bg-blueprint-cyan/[0.02] top-[40%] right-[-200px]"
      />

      {/* Tertiary glow - bottom left */}
      <motion.div
        style={{ y: glowY2 }}
        className="premium-glow w-[500px] h-[500px] bg-indigo-500/[0.02] bottom-[10%] left-[-150px]"
      />

      {/* Radial mask overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse at 50% 30%, transparent 40%, #111415 100%)',
        }}
      />

      {/* Scan line */}
      <div className="absolute left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-blueprint-cyan/40 to-transparent animate-scan-line pointer-events-none" />
    </div>
  )
}
