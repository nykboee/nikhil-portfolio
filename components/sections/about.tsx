import { SectionHeader } from '@/components/section-header'
import { Reveal } from '@/components/reveal'
import { profile, highlights, timeline } from '@/lib/data'

export function About() {
  return (
    <section id="about" className="relative mx-auto max-w-7xl px-5 py-24 md:px-8 md:py-32">
      <SectionHeader
        eyebrow="About"
        title="Designing the digital cockpit for a multi-brand world"
        description={profile.summary}
      />

      <div className="mt-10 flex flex-wrap gap-2">
        {highlights.map((h, i) => (
          <Reveal as="span" key={h} delay={i * 0.04}>
            <span className="inline-flex rounded-full border border-border bg-card px-4 py-1.5 text-sm text-muted-foreground">
              {h}
            </span>
          </Reveal>
        ))}
      </div>

      <div className="mt-20 grid gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.4fr)]">
        <Reveal>
          <h3 className="font-display text-2xl font-semibold tracking-tight">
            Career progression
          </h3>
          <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
            Seventeen years across automotive HMI, product design and creative direction —
            from 3D visualization to leading global UX architecture.
          </p>
        </Reveal>

        <ol className="relative border-l border-border">
          {timeline.map((item, i) => (
            <Reveal as="li" key={item.company} delay={i * 0.05} className="relative pl-8 pb-10 last:pb-0">
              <span className="absolute -left-[7px] top-1.5 h-3.5 w-3.5 rounded-full border-2 border-primary bg-background" />
              <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                <h4 className="font-display text-lg font-semibold tracking-tight">
                  {item.company}
                </h4>
                <span className="font-mono text-xs text-muted-foreground">{item.period}</span>
              </div>
              <p className="mt-0.5 text-sm font-medium text-primary">{item.role}</p>
              {item.award && (
                <span className="mt-2 inline-flex rounded-full bg-primary/10 px-2.5 py-1 text-xs font-medium text-primary">
                  {item.award}
                </span>
              )}
              <ul className="mt-3 space-y-1.5">
                {item.points.map((p) => (
                  <li key={p} className="flex gap-2 text-sm leading-relaxed text-muted-foreground">
                    <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-muted-foreground/60" />
                    {p}
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  )
}
