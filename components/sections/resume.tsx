import { Download, GraduationCap } from 'lucide-react'
import { SectionHeader } from '@/components/section-header'
import { Reveal } from '@/components/reveal'
import { timeline, education, projectStats, profile } from '@/lib/data'

export function Resume() {
  return (
    <section id="resume" className="relative mx-auto max-w-7xl px-5 py-24 md:px-8 md:py-32">
      <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
        <SectionHeader
          eyebrow="Resume"
          title="Experience at a glance"
          description="A condensed timeline of roles, education and project footprint. Download the full CV for details."
        />
        <Reveal>
          <a
            href={profile.resumeUrl}
            download="https://github.com/nykboee/nikhil-portfolio/blob/main/public/NikhiJadhav_UX_Architect_2026.pdf" //
            className="inline-flex items-center gap-2 rounded-full bg-foreground px-6 py-3 text-sm font-medium text-background transition-opacity hover:opacity-90"
          >
            <Download className="h-4 w-4" />
            Download PDF
          </a>
        </Reveal>
      </div>

      <div className="mt-14 grid gap-10 lg:grid-cols-[1.6fr_1fr]">
        <div>
          <h3 className="font-display text-lg font-semibold tracking-tight">Experience</h3>
          <ol className="mt-6 space-y-6">
            {timeline.map((item, i) => (
              <Reveal as="li" key={item.company} delay={i * 0.04}>
                <div className="flex flex-col gap-1 rounded-2xl border border-border bg-card p-5 sm:flex-row sm:items-baseline sm:justify-between">
                  <div>
                    <div className="font-display text-base font-semibold tracking-tight">
                      {item.company}
                    </div>
                    <div className="mt-0.5 text-sm text-primary">{item.role}</div>
                  </div>
                  <div className="font-mono text-xs text-muted-foreground">{item.period}</div>
                </div>
              </Reveal>
            ))}
          </ol>
        </div>

        <div className="space-y-10">
          <div>
            <h3 className="flex items-center gap-2 font-display text-lg font-semibold tracking-tight">
              <GraduationCap className="h-5 w-5 text-primary" />
              Education
            </h3>
            <ul className="mt-6 space-y-3">
              {education.map((e, i) => (
                <Reveal as="li" key={e.degree} delay={i * 0.05}>
                  <div className="rounded-2xl border border-border bg-card p-4">
                    <div className="font-display text-sm font-semibold tracking-tight">
                      {e.degree}
                    </div>
                    <div className="mt-0.5 flex items-center justify-between text-xs text-muted-foreground">
                      <span>{e.school}</span>
                      <span className="font-mono">{e.year}</span>
                    </div>
                  </div>
                </Reveal>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-display text-lg font-semibold tracking-tight">Project footprint</h3>
            <div className="mt-6 grid grid-cols-2 gap-3">
              {projectStats.map((s, i) => (
                <Reveal key={s.label} delay={i * 0.04}>
                  <div className="rounded-2xl border border-border bg-card p-4">
                    <div className="font-display text-2xl font-bold tracking-tight text-primary">
                      {s.value}
                    </div>
                    <div className="mt-1 text-xs leading-snug text-muted-foreground">{s.label}</div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
