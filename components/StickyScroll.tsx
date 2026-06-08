'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef, ReactNode } from 'react'

interface StickyScrollProps {
  steps: {
    label: string
    title: string
    description: string
    icon?: ReactNode
  }[]
  className?: string
}

export default function StickyScroll({ steps, className = '' }: StickyScrollProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  })

  return (
    <div ref={containerRef} className={`relative ${className}`} style={{ height: `${steps.length * 100}vh` }}>
      <div className="sticky top-0 h-screen flex items-center overflow-hidden">
        <div className="w-full max-w-[1440px] mx-auto px-6 md:px-margin">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left: Step indicator */}
            <div className="space-y-8">
              {steps.map((step, index) => (
                <StickyStep
                  key={index}
                  step={step}
                  index={index}
                  total={steps.length}
                  scrollYProgress={scrollYProgress}
                />
              ))}
            </div>

            {/* Right: Visual */}
            <div className="hidden lg:block relative">
              <div className="aspect-square relative">
                {steps.map((_, index) => (
                  <StepVisual
                    key={index}
                    index={index}
                    total={steps.length}
                    scrollYProgress={scrollYProgress}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function StickyStep({
  step,
  index,
  total,
  scrollYProgress,
}: {
  step: { label: string; title: string; description: string }
  index: number
  total: number
  scrollYProgress: any
}) {
  const start = index / total
  const end = (index + 1) / total
  const opacity = useTransform(scrollYProgress, [start, start + 0.1, end - 0.1, end], [0.3, 1, 1, 0.3])
  const x = useTransform(scrollYProgress, [start, start + 0.1, end - 0.1, end], [-20, 0, 0, -20])

  return (
    <motion.div style={{ opacity, x }} className="relative pl-8 border-l border-wireframe-stroke">
      <div className="absolute left-0 top-0 -translate-x-1/2 w-3 h-3 border border-blueprint-cyan bg-background rounded-full" />
      <span className="font-mono text-label-caps text-blueprint-cyan uppercase block mb-2">
        {step.label}
      </span>
      <h3 className="font-headline text-headline-md text-on-surface mb-3">
        {step.title}
      </h3>
      <p className="font-body text-body-md text-on-surface-variant">
        {step.description}
      </p>
    </motion.div>
  )
}

function StepVisual({
  index,
  total,
  scrollYProgress,
}: {
  index: number
  total: number
  scrollYProgress: any
}) {
  const start = index / total
  const end = (index + 1) / total
  const opacity = useTransform(scrollYProgress, [start, start + 0.1, end - 0.1, end], [0, 1, 1, 0])
  const scale = useTransform(scrollYProgress, [start, start + 0.15], [0.9, 1])
  const rotate = useTransform(scrollYProgress, [start, end], [index * 30, (index + 1) * 30])

  return (
    <motion.div
      style={{ opacity, scale }}
      className="absolute inset-0 flex items-center justify-center"
    >
      <motion.div
        style={{ rotate }}
        className="w-64 h-64 border border-blueprint-cyan/30 rounded-full flex items-center justify-center"
      >
        <div className="w-48 h-48 border border-blueprint-cyan/20 rounded-full flex items-center justify-center">
          <div className="w-32 h-32 border border-blueprint-cyan/40 rounded-full flex items-center justify-center">
            <span className="font-mono text-headline-lg text-blueprint-cyan text-glow">
              0{index + 1}
            </span>
          </div>
        </div>
      </motion.div>
    </motion.div>
  )
}
