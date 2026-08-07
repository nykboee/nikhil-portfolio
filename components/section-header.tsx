import { Reveal } from '@/components/reveal'

type Props = {
  eyebrow: string
  title: string
  description?: string
  className?: string
}

export function SectionHeader({ eyebrow, title, description, className }: Props) {
  return (
    <div className={className}>
      <Reveal>
        <div className="flex items-center gap-3 text-xs font-medium uppercase tracking-[0.2em] text-primary">
          <span className="h-px w-8 bg-primary" />
          {eyebrow}
        </div>
      </Reveal>
      <Reveal delay={0.05}>
        <h2 className="mt-4 max-w-2xl font-display text-3xl font-bold tracking-tight text-balance sm:text-4xl lg:text-5xl">
          {title}
        </h2>
      </Reveal>
      {description && (
        <Reveal delay={0.1}>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground">
            {description}
          </p>
        </Reveal>
      )}
    </div>
  )
}
