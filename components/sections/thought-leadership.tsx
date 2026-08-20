import Link from 'next/link'
import { Award, Mic, FileText, PenLine, type LucideIcon } from 'lucide-react'
import { SectionHeader } from '@/components/section-header'
import { Reveal } from '@/components/reveal'
import { thoughtLeadership } from '@/lib/data'

const typeIcon: Record<string, LucideIcon> = {
  Award: Award,
  Talk: Mic,
  Whitepaper: FileText,
  Article: PenLine,
}

export function ThoughtLeadership() {
  return (
    <section
      id="thought"
      className="relative mx-auto max-w-7xl px-5 py-24 md:px-8 md:py-32"
    >
      <SectionHeader
        eyebrow="Thought Leadership"
        title="Talks, awards & writing"
        description="Recognition and perspectives shared across automotive design, DesignOps and the future of the cockpit."
      />

      <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {thoughtLeadership.map((item, i) => {
          const Icon = typeIcon[item.type] ?? FileText

          const cardContent = (
            <div
              className={`flex h-full flex-col rounded-2xl border border-border bg-card p-6 transition-all duration-300 ${
                item.link
                  ? 'cursor-pointer hover:-translate-y-1 hover:border-primary/40 hover:shadow-lg'
                  : ''
              }`}
            >
              <div className="flex items-center justify-between">
                <span className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                  <Icon className="h-3.5 w-3.5" />
                  {item.type}
                </span>

                <span className="font-mono text-xs text-muted-foreground">
                  {item.year}
                </span>
              </div>

              <h3 className="mt-4 font-display text-lg font-semibold leading-snug tracking-tight">
                {item.title}
              </h3>

              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {item.detail}
              </p>

              {item.link && (
                <div className="mt-auto pt-5 text-sm font-medium text-primary">
                  Read article →
                </div>
              )}
            </div>
          )

          return (
            <Reveal as="article" key={item.title} delay={(i % 3) * 0.05}>
              {item.link ? (
                <Link
                  href={item.link}
                  className="group block h-full"
                  aria-label={`Read ${item.title}`}
                >
                  {cardContent}
                </Link>
              ) : (
                cardContent
              )}
            </Reveal>
          )
        })}
      </div>
    </section>
  )
}
