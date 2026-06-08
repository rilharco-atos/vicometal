'use client'

import { motion, useInView } from 'framer-motion'
import { useRef, ReactNode, useState, useEffect } from 'react'

interface ScrollRevealProps {
  children: ReactNode
  className?: string
  delay?: number
  direction?: 'up' | 'down' | 'left' | 'right'
  distance?: number
}

export default function ScrollReveal({
  children,
  className = '',
  delay = 0,
  direction = 'up',
  distance = 40,
}: ScrollRevealProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })
  const [mounted, setMounted] = useState(false)

  useEffect(() => { setMounted(true) }, [])

  const directionMap = {
    up: { y: distance, x: 0 },
    down: { y: -distance, x: 0 },
    left: { y: 0, x: distance },
    right: { y: 0, x: -distance },
  }

  const hidden = {
    opacity: 0,
    ...directionMap[direction],
    filter: 'blur(8px)',
  }

  const visible = { opacity: 1, x: 0, y: 0, filter: 'blur(0px)' }

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={false}
      animate={!mounted ? visible : isInView ? visible : hidden}
      transition={{
        duration: 0.9,
        delay,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      {children}
    </motion.div>
  )
}
