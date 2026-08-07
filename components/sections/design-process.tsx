import { SectionHeader } from '@/components/section-header'
import { Reveal } from '@/components/reveal'
import { designProcess } from '@/lib/data'

export function DesignProcess() {
  return (
    <section id="process" className="relative mx-auto max-w-7xl px-5 py-24 md:px-8 md:py-32">
      <SectionHeader
        eyebrow="Design Process"
        title="An end-to-end UX methodology"
        description="A repeatable path from ambiguous requirements to tested, production-ready HMI — the backbone of every program I lead."
      />

      <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
        {designProcess.map((step, i) => (
          <Reveal as="article" key={step.title} delay={(i % 5) * 0.05}>
            <div className="group relative h-full rounded-2xl border border-border bg-card p-5 transition-colors hover:border-primary/40">
              <span className="font-mono text-xs text-primary">
                {String(i + 1).padStart(2, '0')}
              </span>
              <h3 className="mt-2 font-display text-base font-semibold leading-snug tracking-tight">
                {step.title}
              </h3>
              <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                {step.description}
              </p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
