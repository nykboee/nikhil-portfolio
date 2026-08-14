'use client'

import { useState } from 'react'
import { ArrowDown, ArrowRight, ChevronDown } from 'lucide-react'
import { SectionHeader } from '@/components/section-header'
import { Reveal } from '@/components/reveal'
import { aiWorkflow } from '@/lib/data'

export function AiInnovation() {
  const [openCard, setOpenCard] = useState<number | null>(null)

  const handleCardClick = (index: number) => {
    setOpenCard(openCard === index ? null : index)
  }

  return (
    <section
      id="ai"
      className="relative overflow-visible border-y border-border bg-card/30"
    >
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
            {aiWorkflow.map((step, i) => {
              const isOpen = openCard === i

              return (
                <Reveal
                  as="li"
                  key={step.title}
                  delay={(i % 4) * 0.06}
                  className="relative"
                >
                  <div
                    className={`
                      group relative
                      ${isOpen ? 'z-50' : 'z-10'}
                    `}
                  >
                    {/* Main card */}
                    <button
                      type="button"
                      onClick={() => handleCardClick(i)}
                      aria-expanded={isOpen}
                      className={`
                        glass
                        relative
                        w-full
                        overflow-hidden
                        rounded-2xl
                        border
                        border-border
                        p-6
                        text-left
                        transition-all
                        duration-500
                        ease-out
                        focus:outline-none
                        focus:ring-2
                        focus:ring-primary/50

                        ${
                          isOpen
                            ? 'min-h-[350px] scale-[1.03] border-primary/50 shadow-2xl'
                            : 'min-h-[190px] hover:min-h-[350px] hover:scale-[1.03] hover:border-primary/50 hover:shadow-2xl'
                        }
                      `}
                    >
                      {/* Number + navigation */}
                      <div className="flex items-center justify-between">
                        <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-xs font-bold text-primary-foreground">
                          {i + 1}
                        </span>

                        <div className="flex items-center gap-3">
                          {/* Workflow connector */}
                          {i < aiWorkflow.length - 1 && (
                            <>
                              <ArrowRight className="hidden h-4 w-4 text-primary/60 lg:block" />
                              <ArrowDown className="h-4 w-4 text-primary/60 lg:hidden" />
                            </>
                          )}

                          {/* Expand indicator */}
                          <ChevronDown
                            className={`
                              h-4 w-4 text-muted-foreground
                              transition-transform duration-500
                              ${isOpen ? 'rotate-180 text-primary' : ''}
                            `}
                          />
                        </div>
                      </div>

                      {/* Title */}
                      <h3 className="mt-4 font-display text-base font-semibold leading-snug tracking-tight">
                        {step.title}
                      </h3>

                      {/* Short description */}
                      <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                        {step.description}
                      </p>

                      {/* Expanded content */}
                      <div
                        className={`
                          mt-5
                          border-t
                          border-border/60
                          pt-5
                          transition-all
                          duration-500
                          ease-out

                          ${
                            isOpen
                              ? 'translate-y-0 opacity-100'
                              : 'translate-y-3 opacity-0'
                          }
                        `}
                      >
                        <p className="text-xs leading-relaxed text-muted-foreground">
                          {step.expandedDescription}
                        </p>

                        <div className="mt-4 flex items-center gap-2 text-[10px] font-semibold uppercase tracking-widest text-primary">
                          <span>
                            {isOpen ? 'Click to collapse' : 'Explore'}
                          </span>
                          <ChevronDown
                            className={`
                              h-3 w-3 transition-transform duration-300
                              ${isOpen ? 'rotate-180' : ''}
                            `}
                          />
                        </div>
                      </div>
                    </button>
                  </div>
                </Reveal>
              )
            })}
          </ol>
        </div>
      </div>
    </section>
  )
}

