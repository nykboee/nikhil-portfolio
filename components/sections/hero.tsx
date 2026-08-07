'use client'

import Link from 'next/link'
import { motion } from 'motion/react'
import { ArrowRight, Download, Linkedin, Mail } from 'lucide-react'
import { CockpitBg } from '@/components/cockpit-bg'
import { profile } from '@/lib/data'

export function Hero() {
  return (
    <section id="top" className="relative flex min-h-[100svh] items-center overflow-hidden pt-28">
      <CockpitBg />

      <div className="relative mx-auto w-full max-w-7xl px-5 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.21, 0.47, 0.32, 0.98] }}
          className="max-w-4xl"
        >
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-card/40 px-3.5 py-1.5 text-xs font-medium text-muted-foreground backdrop-blur">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-primary" />
            {profile.yearsExperience} years · Software Defined Vehicles · {profile.location}
          </div>

          <h1 className="font-display text-5xl font-bold leading-[0.95] tracking-tight text-balance sm:text-7xl lg:text-8xl">
            {profile.name}
          </h1>

          <div className="mt-6 flex flex-wrap items-center gap-x-3 gap-y-2 font-display text-xl font-medium text-muted-foreground sm:text-2xl lg:text-3xl">
            {profile.roles.map((role, i) => (
              <span key={role} className="flex items-center gap-3">
                {i > 0 && <span className="h-1.5 w-1.5 rounded-full bg-primary" />}
                <span className={i === 0 ? 'text-foreground' : undefined}>{role}</span>
              </span>
            ))}
          </div>

          <p className="mt-8 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            Leading global UX programs that consolidate 8+ vehicle brands across 6+ markets —
            from digital clusters and HUD to Android Automotive OS and AI-assisted design systems.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-3">
            <Link
              href="/#work"
              className="group inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-transform hover:-translate-y-0.5"
            >
              View Portfolio
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </Link>
            <a
              href={profile.resumeUrl}
              className="inline-flex items-center gap-2 rounded-full border border-border bg-card/40 px-6 py-3 text-sm font-medium backdrop-blur transition-colors hover:bg-secondary"
            >
              <Download className="h-4 w-4" />
              Download Resume
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-border bg-card/40 backdrop-blur transition-colors hover:bg-secondary"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-4 w-4" />
            </a>
            <a
              href={`mailto:${profile.email}`}
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-border bg-card/40 backdrop-blur transition-colors hover:bg-secondary"
              aria-label="Email"
            >
              <Mail className="h-4 w-4" />
            </a>
          </div>

          <dl className="mt-16 grid max-w-2xl grid-cols-2 gap-x-8 gap-y-6 border-t border-border pt-8 sm:grid-cols-4">
            {profile.stats.map((s) => (
              <div key={s.label}>
                <dt className="font-display text-3xl font-bold tracking-tight sm:text-4xl">
                  {s.value}
                </dt>
                <dd className="mt-1 text-xs leading-snug text-muted-foreground">{s.label}</dd>
              </div>
            ))}
          </dl>
        </motion.div>
      </div>
    </section>
  )
}
