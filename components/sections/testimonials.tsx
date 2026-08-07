import { Quote } from 'lucide-react'
import { SectionHeader } from '@/components/section-header'
import { Reveal } from '@/components/reveal'
import { testimonials } from '@/lib/data'

export function Testimonials() {
  return (
    <section id="testimonials" className="relative border-y border-border bg-card/30">
      <div className="mx-auto max-w-7xl px-5 py-24 md:px-8 md:py-32">
        <SectionHeader
          eyebrow="Testimonials"
          title="What collaborators say"
          description="Recommendations from product, engineering and design partners across global automotive programs."
        />

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {testimonials.map((t, i) => (
            <Reveal as="figure" key={t.name} delay={i * 0.06}>
              <blockquote className="flex h-full flex-col rounded-3xl border border-border bg-card p-7">
                <Quote className="h-7 w-7 text-primary/50" />
                <p className="mt-5 flex-1 text-base leading-relaxed text-foreground/90">
                  {t.quote}
                </p>
                <figcaption className="mt-6 border-t border-border pt-5">
                  <div className="font-display text-sm font-semibold tracking-tight">{t.name}</div>
                  <div className="mt-0.5 text-xs text-muted-foreground">{t.role}</div>
                </figcaption>
              </blockquote>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
