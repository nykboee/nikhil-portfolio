import {
  Car,
  Smartphone,
  Gauge,
  Navigation,
  MonitorPlay,
  Radio,
  Sparkles,
  Component,
  Accessibility,
  Search,
  MousePointerClick,
  Target,
  type LucideIcon,
} from 'lucide-react'
import { SectionHeader } from '@/components/section-header'
import { Reveal } from '@/components/reveal'
import { expertise, tools } from '@/lib/data'

const icons: Record<string, LucideIcon> = {
  Car,
  Smartphone,
  Gauge,
  Navigation,
  MonitorPlay,
  Radio,
  Sparkles,
  Component,
  Accessibility,
  Search,
  MousePointerClick,
  Target,
}

export function Expertise() {
  return (
    <section id="expertise" className="relative border-y border-border bg-card/30">
      <div className="mx-auto max-w-7xl px-5 py-24 md:px-8 md:py-32">
        <SectionHeader
          eyebrow="Expertise"
          title="Capabilities across the connected cockpit"
          description="From safety-critical clusters to AI-assisted DesignOps — a full-stack design practice for Software Defined Vehicles."
        />

        <div className="mt-14 grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
          {expertise.map((item, i) => {
            const Icon = icons[item.icon] ?? Sparkles
            return (
              <Reveal as="article" key={item.title} delay={(i % 3) * 0.05}>
                <div className="group h-full bg-card p-7 transition-colors hover:bg-secondary">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-5 font-display text-lg font-semibold tracking-tight">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {item.description}
                  </p>
                </div>
              </Reveal>
            )
          })}
        </div>

        <Reveal className="mt-12">
          <div className="flex flex-wrap items-center gap-x-3 gap-y-3">
            <span className="text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
              Tools
            </span>
            {tools.map((t) => (
              <span
                key={t}
                className="rounded-lg border border-border bg-background px-3 py-1.5 font-mono text-xs text-muted-foreground"
              >
                {t}
              </span>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  )
}
