import Image from 'next/image'
import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import { SectionHeader } from '@/components/section-header'
import { Reveal } from '@/components/reveal'
import { projects } from '@/lib/data'

export function Projects() {
  return (
    <section id="work" className="relative mx-auto max-w-7xl px-5 py-24 md:px-8 md:py-32">
      <SectionHeader
        eyebrow="Featured Work"
        title="Selected automotive case studies"
        description="Deep-dive case studies spanning EV charging, personalization, IVI, HUD and AI DesignOps."
      />

      <div className="mt-14 grid gap-6 md:grid-cols-2">
        {projects.map((p, i) => (
          <Reveal as="article" key={p.slug} delay={(i % 2) * 0.08}>
            <Link
              href={`/work/${p.slug}`}
              className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-border bg-card transition-colors hover:border-primary/40"
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                <Image
                  src={p.cover || '/placeholder.svg'}
                  alt={`${p.title} — ${p.category} case study cover`}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-card/10 to-transparent" />
                <div className="absolute left-4 top-4 flex items-center gap-2">
                  <span className="rounded-full bg-background/70 px-3 py-1 font-mono text-[11px] text-foreground backdrop-blur">
                    {p.category}
                  </span>
                  <span className="rounded-full bg-background/70 px-3 py-1 font-mono text-[11px] text-muted-foreground backdrop-blur">
                    {p.year}
                  </span>
                </div>
              </div>

              <div className="flex flex-1 flex-col p-6 md:p-7">
                <div className="flex items-start justify-between gap-4">
                  <h3 className="font-display text-2xl font-semibold tracking-tight">{p.title}</h3>
                  <span className="mt-1 flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-border text-muted-foreground transition-all group-hover:bg-primary group-hover:text-primary-foreground">
                    <ArrowUpRight className="h-4 w-4" />
                  </span>
                </div>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{p.summary}</p>

                <div className="mt-6 flex flex-wrap gap-2">
                  {p.tags.slice(0, 4).map((t) => (
                    <span
                      key={t}
                      className="rounded-md bg-secondary px-2.5 py-1 text-xs text-muted-foreground"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <div className="mt-auto grid grid-cols-3 gap-4 border-t border-border pt-5">
                  {p.metrics.map((m) => (
                    <div key={m.label}>
                      <div className="font-display text-lg font-bold tracking-tight text-primary">
                        {m.value}
                      </div>
                      <div className="mt-0.5 text-[11px] leading-snug text-muted-foreground">
                        {m.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </Link>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
