'use client'

import { motion, useReducedMotion } from 'motion/react'

/**
 * Decorative digital-cockpit inspired background:
 * concentric gauge arcs, a sweeping needle and a faint grid.
 */
export function CockpitBg() {
  const reduce = useReducedMotion()

  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
      {/* grid */}
      <div className="bg-grid absolute inset-0 opacity-60 [mask-image:radial-gradient(ellipse_60%_60%_at_50%_40%,black,transparent)]" />

      {/* ambient glow */}
      <div className="absolute left-1/2 top-1/2 h-[70vmin] w-[70vmin] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/15 blur-[120px]" />

      {/* gauge cluster, right side */}
      <svg
        className="absolute right-[-10%] top-1/2 h-[120vmin] w-[120vmin] -translate-y-1/2 text-primary md:right-[-2%]"
        viewBox="0 0 400 400"
        fill="none"
      >
        {[190, 150, 110, 70].map((r, i) => (
          <circle
            key={r}
            cx="200"
            cy="200"
            r={r}
            stroke="currentColor"
            strokeOpacity={0.12 - i * 0.015}
            strokeWidth="1"
          />
        ))}

        {/* tick marks */}
        {Array.from({ length: 60 }).map((_, i) => {
          const angle = (i / 60) * Math.PI * 2
          const inner = 178
          const outer = i % 5 === 0 ? 196 : 188
          const x1 = 200 + Math.cos(angle) * inner
          const y1 = 200 + Math.sin(angle) * inner
          const x2 = 200 + Math.cos(angle) * outer
          const y2 = 200 + Math.sin(angle) * outer
          return (
            <line
              key={i}
              x1={x1}
              y1={y1}
              x2={x2}
              y2={y2}
              stroke="currentColor"
              strokeOpacity={i % 5 === 0 ? 0.3 : 0.14}
              strokeWidth={i % 5 === 0 ? 1.4 : 0.8}
            />
          )
        })}

        {/* progress arc */}
        <motion.circle
          cx="200"
          cy="200"
          r="150"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeDasharray="942"
          strokeOpacity="0.8"
          initial={{ strokeDashoffset: 942 }}
          animate={reduce ? { strokeDashoffset: 400 } : { strokeDashoffset: [942, 320, 480, 320] }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
          transform="rotate(-90 200 200)"
        />

        {/* sweeping needle */}
        {!reduce && (
          <motion.line
            x1="200"
            y1="200"
            x2="200"
            y2="55"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeOpacity="0.55"
            style={{ originX: '200px', originY: '200px' }}
            animate={{ rotate: [0, 210, 120, 260, 0] }}
            transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
          />
        )}
        <circle cx="200" cy="200" r="6" fill="currentColor" fillOpacity="0.7" />
      </svg>

      {/* fade to background at edges */}
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-background to-transparent" />
    </div>
  )
}
