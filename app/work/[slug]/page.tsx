import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { ArrowLeft, ArrowRight, ArrowUpRight } from 'lucide-react'
import { SiteNav } from '@/components/site-nav'
import { SiteFooter } from '@/components/site-footer'
import { Reveal } from '@/components/reveal'
import { projects } from '@/lib/data'

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const project = projects.find((p) => p.slug === slug)
  if (!project) return { title: 'Case Study Not Found' }
  return {
    title: `${project.title} — ${project.category}`,
    description: project.summary,
    openGraph: {
      title: `${project.title} — ${project.category}`,
      description: project.summary,
      images: [{ url: project.hero }],
    },
  }
}

export default async function CaseStudyPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const project = projects.find((p) => p.slug === slug)
  if (!project) notFound()

  const index = projects.findIndex((p) => p.slug === slug)
  const next = projects[(index + 1) % projects.length]

  return (
    <>
      <SiteNav />
      <main className="pt-28">
        {/* Hero */}
        <header className="mx-auto max-w-7xl px-5 md:px-8">
          <Link
            href="/#work"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            <ArrowLeft className="h-4 w-4" /> All work
          </Link>

          <div className="mt-8 flex flex-wrap items-center gap-2">
            <span className="rounded-full bg-primary/10 px-3 py-1 font-mono text-xs text-primary">
              {project.category}
            </span>
            <span className="rounded-full border border-border px-3 py-1 font-mono text-xs text-muted-foreground">
              {project.year}
            </span>
          </div>

          <h1 className="mt-6 max-w-4xl font-display text-4xl font-bold leading-[1.02] tracking-tight text-balance sm:text-6xl">
            {project.title}
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-muted-foreground">
            {project.summary}
          </p>

          <div className="mt-8 flex flex-wrap gap-2">
            {project.tags.map((t) => (
              <span key={t} className="rounded-md bg-secondary px-2.5 py-1 text-xs text-muted-foreground">
                {t}
              </span>
            ))}
          </div>
        </header>

        <div className="mx-auto mt-12 max-w-7xl px-5 md:px-8">
          <div className="relative aspect-[16/9] overflow-hidden rounded-3xl border border-border">
            <Image
              src={project.hero || '/placeholder.svg'}
              alt={`${project.title} hero`}
              fill
              priority
              sizes="(max-width: 1280px) 100vw, 1280px"
              className="object-cover"
            />
          </div>
        </div>

        {/* Metrics */}
        <section className="mx-auto mt-16 max-w-7xl px-5 md:px-8">
          <div className="grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-3">
            {project.metrics.map((m) => (
              <div key={m.label} className="bg-card p-7">
                <div className="font-display text-3xl font-bold tracking-tight text-primary sm:text-4xl">
                  {m.value}
                </div>
                <div className="mt-2 text-sm text-muted-foreground">{m.label}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Body */}
        <div className="mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-24">
          <div className="grid gap-12 lg:grid-cols-[220px_minmax(0,1fr)]">
            {/* sticky index */}
            <aside className="hidden lg:block">
              <nav className="sticky top-28 space-y-2 text-sm" aria-label="Case study sections">
                {[
                  'Overview',
                  'Challenge',
                  'Research',
                  'Benchmarking',
                  'Personas',
                  'Journey',
                  'Architecture',
                  'Wireframes',
                  'UI Design',
                  'Design System',
                  'Accessibility',
                  'Handover',
                  'Results',
                  'Reflection',
                ].map((s) => (
                  <a
                    key={s}
                    href={`#${s.toLowerCase().replace(/\s/g, '-')}`}
                    className="block text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {s}
                  </a>
                ))}
              </nav>
            </aside>

            <div className="max-w-3xl space-y-16">
              <Block id="overview" title="Overview" body={project.overview} />
              <Block id="challenge" title="Business Challenge" body={project.challenge} />

              <Section id="research" title={project.research.heading}>
                <p className="lead">{project.research.body}</p>
                {project.research.list && <BulletList items={project.research.list} />}
              </Section>

              <Section id="benchmarking" title={project.benchmarking.heading}>
                <p className="lead">{project.benchmarking.body}</p>
                {project.benchmarking.list && <BulletList items={project.benchmarking.list} />}
              </Section>

              <Section id="personas" title="Personas">
                <div className="grid gap-4 sm:grid-cols-2">
                  {project.personas.map((p) => (
                    <div key={p.name} className="rounded-2xl border border-border bg-card p-5">
                      <div className="font-display text-lg font-semibold tracking-tight">{p.name}</div>
                      <div className="mt-0.5 text-sm text-primary">{p.role}</div>
                      <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{p.need}</p>
                    </div>
                  ))}
                </div>
              </Section>

              <Block id="journey" title="User Journey" body={project.journey} />
              <Block id="architecture" title="Information Architecture" body={project.ia} />
              <Block id="architecture-flow" title="Task Flow" body={project.taskflow} />

              <Section id="wireframes" title="Wireframes">
                <MockGrid items={project.wireframes} variant="wire" />
              </Section>

              <Section id="ui-design" title="High-Fidelity Designs">
                <MockGrid items={project.ui} variant="ui" />
              </Section>

              <Section id="design-system" title={project.designSystem.heading}>
                <p className="lead">{project.designSystem.body}</p>
                {project.designSystem.list && <BulletList items={project.designSystem.list} />}
              </Section>

              <Block id="accessibility" title={project.accessibility.heading} body={project.accessibility.body} />
              <Block id="handover" title={project.handover.heading} body={project.handover.body} />

              <Section id="results" title="Results">
                <BulletList items={project.results} accent />
              </Section>

              <Section id="reflection" title="Reflection">
                <blockquote className="border-l-2 border-primary pl-6 font-display text-xl font-medium leading-relaxed text-balance">
                  {project.reflection}
                </blockquote>
              </Section>
            </div>
          </div>
        </div>

        {/* Next project */}
        <section className="border-t border-border">
          <Link
            href={`/work/${next.slug}`}
            className="group mx-auto flex max-w-7xl flex-col gap-4 px-5 py-16 md:flex-row md:items-center md:justify-between md:px-8 md:py-20"
          >
            <div>
              <span className="text-xs font-medium uppercase tracking-[0.2em] text-primary">
                Next case study
              </span>
              <h2 className="mt-3 font-display text-3xl font-bold tracking-tight sm:text-5xl">
                {next.title}
              </h2>
              <p className="mt-2 text-muted-foreground">{next.category}</p>
            </div>
            <span className="flex h-14 w-14 items-center justify-center rounded-full border border-border transition-all group-hover:bg-primary group-hover:text-primary-foreground">
              <ArrowUpRight className="h-6 w-6" />
            </span>
          </Link>
        </section>
      </main>
      <SiteFooter />
    </>
  )
}

function Block({ id, title, body }: { id: string; title: string; body: string }) {
  return (
    <Reveal as="section">
      <div id={id} className="scroll-mt-28">
        <SectionTitle>{title}</SectionTitle>
        <p className="mt-4 text-lg leading-relaxed text-muted-foreground">{body}</p>
      </div>
    </Reveal>
  )
}

function Section({ id, title, children }: { id: string; title: string; children: React.ReactNode }) {
  return (
    <Reveal as="section">
      <div id={id} className="scroll-mt-28">
        <SectionTitle>{title}</SectionTitle>
        <div className="mt-4 [&_.lead]:text-lg [&_.lead]:leading-relaxed [&_.lead]:text-muted-foreground">
          {children}
        </div>
      </div>
    </Reveal>
  )
}

function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="font-display text-2xl font-bold tracking-tight sm:text-3xl">
      <span className="mr-3 text-primary">/</span>
      {children}
    </h2>
  )
}

function BulletList({ items, accent }: { items: string[]; accent?: boolean }) {
  return (
    <ul className="mt-5 space-y-3">
      {items.map((item) => (
        <li key={item} className="flex gap-3 text-base leading-relaxed text-muted-foreground">
          <span
            className={`mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full ${accent ? 'bg-primary' : 'bg-muted-foreground/60'}`}
          />
          {item}
        </li>
      ))}
    </ul>
  )
}

function MockGrid({
  items,
  variant,
}: {
  items: { image: string; caption: string }[]
  variant: 'wire' | 'ui'
}) {
  return (
    <div className="grid gap-5 sm:grid-cols-2">
      {items.map((it, i) => (
        <figure key={it.caption}>
          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-border bg-card">
            {variant === 'wire' ? <WireMock seed={i} /> : <UiMock seed={i} />}
          </div>
          <figcaption className="mt-3 text-sm text-muted-foreground">{it.caption}</figcaption>
        </figure>
      ))}
    </div>
  )
}

function WireMock({ seed }: { seed: number }) {
  return (
    <div className="flex h-full w-full flex-col gap-3 p-5">
      <div className="flex items-center justify-between">
        <div className="h-3 w-24 rounded-full bg-muted-foreground/25" />
        <div className="h-6 w-6 rounded-full border border-border" />
      </div>
      <div className="h-px w-full bg-border" />
      {seed % 2 === 0 ? (
        <div className="grid flex-1 grid-cols-3 gap-3">
          <div className="col-span-2 rounded-xl border border-dashed border-border" />
          <div className="flex flex-col gap-3">
            <div className="flex-1 rounded-xl border border-dashed border-border" />
            <div className="flex-1 rounded-xl border border-dashed border-border" />
          </div>
        </div>
      ) : (
        <div className="flex flex-1 flex-col gap-3">
          {[0, 1, 2].map((r) => (
            <div key={r} className="flex items-center gap-3 rounded-xl border border-dashed border-border p-3">
              <div className="h-8 w-8 rounded-lg bg-muted-foreground/15" />
              <div className="flex flex-1 flex-col gap-1.5">
                <div className="h-2.5 w-1/2 rounded-full bg-muted-foreground/25" />
                <div className="h-2 w-3/4 rounded-full bg-muted-foreground/15" />
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

function UiMock({ seed }: { seed: number }) {
  return (
    <div className="relative flex h-full w-full flex-col gap-3 bg-gradient-to-br from-secondary to-card p-5">
      <div className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-primary/20 blur-2xl" />
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="h-6 w-6 rounded-lg bg-primary" />
          <div className="h-2.5 w-20 rounded-full bg-foreground/30" />
        </div>
        <div className="h-2.5 w-10 rounded-full bg-foreground/15" />
      </div>
      {seed % 2 === 0 ? (
        <div className="relative flex flex-1 items-center justify-center rounded-2xl border border-border bg-background/40">
          <div className="h-16 w-16 rounded-2xl bg-primary/80 shadow-[0_0_40px_-8px_hsl(var(--primary))]" />
        </div>
      ) : (
        <div className="grid flex-1 grid-cols-2 gap-3">
          {[0, 1, 2, 3].map((c) => (
            <div key={c} className="rounded-xl border border-border bg-background/40 p-3">
              <div className="h-6 w-6 rounded-lg bg-primary/70" />
              <div className="mt-3 h-2 w-3/4 rounded-full bg-foreground/25" />
              <div className="mt-1.5 h-2 w-1/2 rounded-full bg-foreground/12" />
            </div>
          ))}
        </div>
      )}
      <div className="flex items-center gap-2">
        <div className="h-8 flex-1 rounded-full bg-primary" />
        <div className="h-8 w-8 rounded-full border border-border" />
      </div>
    </div>
  )
}
