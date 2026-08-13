import { ArrowDown, ArrowRight } from 'lucide-react'
import { SectionHeader } from '@/components/section-header'
import { Reveal } from '@/components/reveal'
import { aiWorkflow } from '@/lib/data'

export function AiInnovation() {
  return (
    <section id="ai" className="relative overflow-visible border-y border-border bg-card/30">
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
              <Reveal
                as="li"
                key={step.title}
                delay={(i % 4) * 0.06}
                className="relative"
              >
                <div className="group relative h-[190px]">
                  
                  {/* Main card */}
                  <div
                    className="
                      glass
                      absolute
                      inset-x-0
                      top-0
                      z-10
                      min-h-[190px]
                      overflow-hidden
                      rounded-2xl
                      border
                      border-border
                      p-6
                      transition-all
                      duration-500
                      ease-out
                      
                      group-hover:z-50
                      group-hover:min-h-[350px]
                      group-hover:scale-[1.03]
                      group-hover:border-primary/50
                      group-hover:shadow-2xl
                    "
                  >
                    {/* Number + arrow */}
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

                    {/* Title */}
                    <h3 className="mt-4 font-display text-base font-semibold leading-snug tracking-tight">
                      {step.title}
                    </h3>

                    {/* Description */}
                    <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                      {step.description}
                    </p>

                    {/* Expandable content */}
                    <div
                      className="
                        mt-5
                        border-t
                        border-border/60
                        pt-5
                        opacity-0
                        translate-y-3
                        transition-all
                        duration-500
                        ease-out
                        group-hover:translate-y-0
                        group-hover:opacity-100
                      "
                    >
                      <p className="text-xs leading-relaxed text-muted-foreground">
                      {step.expandedDescription}
                    </p>
                    </div>

                   {/* Expandable content */}
                  <div
                    className="
                      mt-5
                      border-t
                      border-border/60
                      pt-5
                      opacity-0
                      translate-y-3
                      transition-all
                      duration-500
                      ease-out
                      group-hover:translate-y-0
                      group-hover:opacity-100
                    "
                >
                    <p className="text-xs leading-relaxed text-muted-foreground">
                      {step.expandedDescription}
                    </p>
                  </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </ol>
        </div>
      </div>
    </section>
  )
}
