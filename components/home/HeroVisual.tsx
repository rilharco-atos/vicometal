'use client'

import { motion } from 'framer-motion'

/**
 * Animated SVG wireframe of an industrial pressure vessel / evaporator,
 * based on Vicometal's real portfolio (evaporador-quench project).
 * Represents caldeiraria pesada — the company's core competency.
 */
export default function HeroVisual() {
  const draw = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: (delay: number) => ({
      pathLength: 1,
      opacity: 1,
      transition: { pathLength: { duration: 2, delay, ease: 'easeInOut' }, opacity: { duration: 0.5, delay } },
    }),
  }

  return (
    <div className="relative w-full aspect-[4/5] max-w-[440px]">
      {/* Ambient glow */}
      <div className="absolute inset-[20%] bg-blueprint-cyan/[0.06] blur-[80px] rounded-full" />

      <motion.svg
        viewBox="0 0 400 520"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full"
        initial="hidden"
        animate="visible"
      >
        <defs>
          <linearGradient id="vesselGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#E5560E" stopOpacity="0.3" />
            <stop offset="50%" stopColor="#E5560E" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#E5560E" stopOpacity="0.3" />
          </linearGradient>
          <linearGradient id="vesselVert" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#E5560E" stopOpacity="0.6" />
            <stop offset="50%" stopColor="#E5560E" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#E5560E" stopOpacity="0.4" />
          </linearGradient>
          <filter id="glow">
            <feGaussianBlur stdDeviation="2" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
          <filter id="weldGlow">
            <feGaussianBlur stdDeviation="3" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Faint grid */}
        <motion.g variants={{ hidden: { opacity: 0 }, visible: { opacity: 1, transition: { duration: 1.5 } } }}>
          {Array.from({ length: 9 }).map((_, i) => (
            <line key={`vg${i}`} x1={50 + i * 40} y1="20" x2={50 + i * 40} y2="500" stroke="#E5560E" strokeOpacity="0.03" strokeWidth="0.5" />
          ))}
          {Array.from({ length: 13 }).map((_, i) => (
            <line key={`hg${i}`} x1="30" y1={20 + i * 40} x2="370" y2={20 + i * 40} stroke="#E5560E" strokeOpacity="0.03" strokeWidth="0.5" />
          ))}
        </motion.g>

        {/* === MAIN VESSEL BODY (cylindrical shell) === */}
        {/* Left wall */}
        <motion.path
          d="M 130 90 L 130 420"
          stroke="url(#vesselVert)"
          strokeWidth="1.8"
          variants={draw}
          custom={0.3}
        />
        {/* Right wall */}
        <motion.path
          d="M 270 90 L 270 420"
          stroke="url(#vesselVert)"
          strokeWidth="1.8"
          variants={draw}
          custom={0.3}
        />

        {/* Top dished head (elliptical) */}
        <motion.path
          d="M 130 90 Q 130 50 200 50 Q 270 50 270 90"
          stroke="url(#vesselGrad)"
          strokeWidth="1.5"
          variants={draw}
          custom={0.5}
        />
        {/* Inner line of top head */}
        <motion.path
          d="M 138 90 Q 138 58 200 58 Q 262 58 262 90"
          stroke="#E5560E"
          strokeWidth="0.5"
          strokeOpacity="0.3"
          variants={draw}
          custom={0.7}
        />

        {/* Bottom cone (conical discharge) */}
        <motion.path
          d="M 130 420 L 175 480 M 270 420 L 225 480 M 175 480 L 225 480"
          stroke="url(#vesselGrad)"
          strokeWidth="1.5"
          variants={draw}
          custom={0.6}
        />
        {/* Discharge nozzle */}
        <motion.path
          d="M 185 480 L 185 500 M 215 480 L 215 500 M 185 500 L 215 500"
          stroke="#E5560E"
          strokeWidth="1.2"
          strokeOpacity="0.7"
          variants={draw}
          custom={1}
        />

        {/* === REINFORCEMENT RINGS (circumferential stiffeners) === */}
        {[130, 190, 250, 310, 370].map((y, i) => (
          <motion.ellipse
            key={`ring-${i}`}
            cx="200"
            cy={y}
            rx="72"
            ry="8"
            stroke="#E5560E"
            strokeWidth="0.8"
            strokeOpacity={0.4 + i * 0.05}
            fill="none"
            variants={draw}
            custom={0.8 + i * 0.15}
          />
        ))}

        {/* === STRUCTURAL RIBS (longitudinal) === */}
        {[-50, -25, 0, 25, 50].map((offset, i) => (
          <motion.line
            key={`rib-${i}`}
            x1={200 + offset}
            y1="90"
            x2={200 + offset}
            y2="420"
            stroke="#E5560E"
            strokeWidth="0.4"
            strokeOpacity={0.15 + (i === 2 ? 0.1 : 0)}
            strokeDasharray={i === 2 ? 'none' : '4 8'}
            variants={draw}
            custom={1 + i * 0.1}
          />
        ))}

        {/* === NOZZLES / MANWAYS === */}
        {/* Side nozzle left */}
        <motion.g variants={draw} custom={1.5}>
          <motion.path
            d="M 130 200 L 100 200 M 130 215 L 100 215 M 100 195 L 100 220 M 90 195 L 90 220 M 90 195 L 100 195 M 90 220 L 100 220"
            stroke="#E5560E"
            strokeWidth="1"
            strokeOpacity="0.7"
            variants={draw}
            custom={1.5}
          />
        </motion.g>
        {/* Side nozzle right */}
        <motion.g variants={draw} custom={1.7}>
          <motion.path
            d="M 270 300 L 300 300 M 270 315 L 300 315 M 300 295 L 300 320 M 310 295 L 310 320 M 300 295 L 310 295 M 300 320 L 310 320"
            stroke="#E5560E"
            strokeWidth="1"
            strokeOpacity="0.7"
            variants={draw}
            custom={1.7}
          />
        </motion.g>
        {/* Top nozzle (center) */}
        <motion.path
          d="M 192 50 L 192 30 M 208 50 L 208 30 M 188 30 L 212 30 M 188 25 L 212 25"
          stroke="#E5560E"
          strokeWidth="1"
          strokeOpacity="0.6"
          variants={draw}
          custom={1.3}
        />

        {/* === DIMENSION ANNOTATIONS === */}
        <motion.g
          variants={{ hidden: { opacity: 0 }, visible: { opacity: 1, transition: { duration: 1, delay: 2.5 } } }}
        >
          {/* Diameter dimension */}
          <line x1="130" y1="455" x2="270" y2="455" stroke="#E5560E" strokeWidth="0.5" strokeOpacity="0.4" />
          <line x1="130" y1="451" x2="130" y2="459" stroke="#E5560E" strokeWidth="0.5" strokeOpacity="0.4" />
          <line x1="270" y1="451" x2="270" y2="459" stroke="#E5560E" strokeWidth="0.5" strokeOpacity="0.4" />
          <text x="200" y="468" textAnchor="middle" fill="#E5560E" fillOpacity="0.55" fontSize="9" fontFamily="monospace">
            Ø 3200mm
          </text>

          {/* Height dimension */}
          <line x1="30" y1="50" x2="30" y2="500" stroke="#E5560E" strokeWidth="0.4" strokeOpacity="0.3" />
          <line x1="26" y1="50" x2="34" y2="50" stroke="#E5560E" strokeWidth="0.5" strokeOpacity="0.3" />
          <line x1="26" y1="500" x2="34" y2="500" stroke="#E5560E" strokeWidth="0.5" strokeOpacity="0.3" />
          <text x="24" y="280" textAnchor="middle" fill="#E5560E" fillOpacity="0.45" fontSize="8" fontFamily="monospace" transform="rotate(-90, 24, 280)">
            12.500mm
          </text>
        </motion.g>

        {/* === SPECIFICATION CALLOUTS === */}
        <motion.g
          variants={{ hidden: { opacity: 0, x: 20 }, visible: { opacity: 1, x: 0, transition: { duration: 1, delay: 2.8 } } }}
        >
          {/* Material */}
          <line x1="270" y1="150" x2="330" y2="120" stroke="#E5560E" strokeWidth="0.5" strokeOpacity="0.3" strokeDasharray="2 3" />
          <circle cx="270" cy="150" r="2" fill="#E5560E" fillOpacity="0.5" />
          <text x="335" y="116" fill="#E5560E" fillOpacity="0.6" fontSize="8" fontFamily="monospace">P355NL1</text>
          <text x="335" y="128" fill="#E5560E" fillOpacity="0.35" fontSize="7" fontFamily="monospace">t = 25mm</text>

          {/* Certification */}
          <line x1="310" y1="307" x2="340" y2="350" stroke="#E5560E" strokeWidth="0.5" strokeOpacity="0.3" strokeDasharray="2 3" />
          <circle cx="310" cy="307" r="2" fill="#E5560E" fillOpacity="0.5" />
          <text x="345" y="348" fill="#E5560E" fillOpacity="0.6" fontSize="8" fontFamily="monospace">ISO 3834-2</text>
          <text x="345" y="360" fill="#E5560E" fillOpacity="0.35" fontSize="7" fontFamily="monospace">PED 2014/68/EU</text>
        </motion.g>

        {/* === WELD SEAM INDICATORS === */}
        <motion.g
          variants={{ hidden: { opacity: 0 }, visible: { opacity: 1, transition: { duration: 0.8, delay: 2 } } }}
          filter="url(#glow)"
        >
          {/* Circumferential welds */}
          {[130, 250, 370, 420].map((y, i) => (
            <ellipse
              key={`weld-${i}`}
              cx="200"
              cy={y}
              rx="70"
              ry="7"
              stroke="#E5560E"
              strokeWidth="1.5"
              strokeOpacity="0.15"
              strokeDasharray="2 6"
              fill="none"
            />
          ))}
        </motion.g>

        {/* === ANIMATED WELD SPARK === */}
        <motion.g
          filter="url(#weldGlow)"
          animate={{ opacity: [0, 1, 1, 0] }}
          transition={{ duration: 3, repeat: Infinity, repeatDelay: 2 }}
        >
          <motion.circle
            cx="130"
            cy="250"
            r="3"
            fill="#FFD700"
            animate={{ cy: [190, 370] }}
            transition={{ duration: 3, repeat: Infinity, repeatDelay: 2, ease: 'linear' }}
          />
          {/* Sparks */}
          <motion.g
            animate={{ opacity: [0, 1, 0] }}
            transition={{ duration: 0.3, repeat: Infinity, repeatDelay: 0.1 }}
          >
            <motion.line
              x1="128" y1="248" x2="120" y2="242"
              stroke="#FFD700" strokeWidth="0.8" strokeOpacity="0.8"
              animate={{ y1: [188, 368], y2: [182, 362] }}
              transition={{ duration: 3, repeat: Infinity, repeatDelay: 2, ease: 'linear' }}
            />
            <motion.line
              x1="126" y1="252" x2="118" y2="256"
              stroke="#FFA500" strokeWidth="0.6" strokeOpacity="0.6"
              animate={{ y1: [192, 372], y2: [196, 376] }}
              transition={{ duration: 3, repeat: Infinity, repeatDelay: 2, ease: 'linear' }}
            />
            <motion.line
              x1="132" y1="246" x2="138" y2="240"
              stroke="#FFD700" strokeWidth="0.5" strokeOpacity="0.7"
              animate={{ y1: [186, 366], y2: [180, 360] }}
              transition={{ duration: 3, repeat: Infinity, repeatDelay: 2, ease: 'linear' }}
            />
          </motion.g>
        </motion.g>

        {/* === CORNER BRACKETS === */}
        <g stroke="#E5560E" strokeWidth="1" strokeOpacity="0.25">
          <path d="M 50 30 L 50 55 M 50 30 L 75 30" />
          <path d="M 350 30 L 350 55 M 350 30 L 325 30" />
          <path d="M 50 505 L 50 480 M 50 505 L 75 505" />
          <path d="M 350 505 L 350 480 M 350 505 L 325 505" />
        </g>

        {/* === SCANNING LINE === */}
        <motion.line
          x1="50"
          y1="30"
          x2="350"
          y2="30"
          stroke="#E5560E"
          strokeWidth="0.4"
          strokeOpacity="0.2"
          animate={{ y1: [30, 505, 30], y2: [30, 505, 30] }}
          transition={{ duration: 10, repeat: Infinity, ease: 'linear' }}
        />
      </motion.svg>

      {/* Technical label */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 3.5 }}
        className="absolute bottom-3 right-3 font-mono text-[9px] text-blueprint-cyan/40 text-right leading-relaxed"
      >
        <div>VICOMETAL // PRESSURE VESSEL</div>
        <div>PROJ: VCM-EVP-DE-2024</div>
        <div>SCALE 1:50 // EXC3</div>
      </motion.div>
    </div>
  )
}
