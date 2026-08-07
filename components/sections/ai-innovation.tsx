import { ArrowDown, ArrowRight } from 'lucide-react'
import { SectionHeader } from '@/components/section-header'
import { Reveal } from '@/components/reveal'
import { aiWorkflow } from '@/lib/data'

export function AiInnovation() {
  return (
    <section id="ai" className="relative overflow-hidden border-y border-border bg-card/30">
      <div
        aria-hidden
        className="pointer-events-none absolute right-0 top-0 h-[40rem] w-[40rem] rounded-full bg-primary/10 blur-[140px]"
      />
      <div className="relative mx-auto max-w-7xl px-5 py-24 md:px-8 md:py-32">
        <SectionHeader
          eyebrow="AI Innovation"
          title="AI DesignOps — from PDF to production"
          description="An agentic pipeline where specialized AI agents move work from raw requirements to shippable HMI, with human judgment steering quality at every gate."
        />

        <div className="mt-16">
          <ol className="grid gap-x-6 gap-y-8 md:grid-cols-2 lg:grid-cols-4">
            {aiWorkflow.map((step, i) => (
              <Reveal as="li" key={step.title} delay={(i % 4) * 0.06} className="relative">
                <div className="glass h-full rounded-2xl border border-border p-6">
                  <div className="flex items-center justify-between">
                    <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-xs font-bold text-primary-foreground">
                      {i + 1}
                    </span>
                    {i < aiWorkflow.length - 1 && (
                      <>
                        <ArrowRight className="hidden h-4 w-4 text-primary/60 lg:block" />
                        <ArrowDown className="h-4 w-4 text-primary/60 lg:hidden" />
                      </>
                    )}
                  </div>
                  <h3 className="mt-4 font-display text-base font-semibold leading-snug tracking-tight">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                    {step.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </ol>
        </div>
      </div>
    </section>
  )
}
