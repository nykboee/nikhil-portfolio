import Link from 'next/link'
import { profile } from '@/lib/data'

const links = [
  { href: '/#work', label: 'Work' },
  { href: '/#about', label: 'About' },
  { href: '/#expertise', label: 'Expertise' },
  { href: '/#process', label: 'Process' },
  { href: '/#ai', label: 'AI Innovation' },
  { href: '/#resume', label: 'Resume' },
  { href: '/#contact', label: 'Contact' },
]

export function SiteFooter() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto max-w-7xl px-5 py-14 md:px-8">
        <div className="flex flex-col justify-between gap-10 md:flex-row">
          <div className="max-w-sm">
            <Link href="/" className="flex items-center gap-2.5 font-display text-lg font-semibold tracking-tight">
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-xs font-bold text-primary-foreground">
                {profile.initials}
              </span>
              {profile.name}
            </Link>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              UX Architect &amp; Automotive HMI Design Leader. Designing digital cockpits for a
              Software Defined future.
            </p>
          </div>

          <div className="flex flex-col gap-8 sm:flex-row sm:gap-16">
            <nav className="flex flex-col gap-2" aria-label="Footer">
              <span className="mb-1 text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
                Navigate
              </span>
              {links.map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  {l.label}
                </Link>
              ))}
            </nav>
            <div className="flex flex-col gap-2">
              <span className="mb-1 text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
                Connect
              </span>
              <a href={`mailto:${profile.email}`} className="text-sm text-muted-foreground transition-colors hover:text-foreground">
                {profile.email}
              </a>
              <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
                LinkedIn
              </a>
              <span className="text-sm text-muted-foreground">{profile.website}</span>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-3 border-t border-border pt-6 text-xs text-muted-foreground sm:flex-row sm:items-center">
          <span>© {new Date().getFullYear()} {profile.name}. All rights reserved.</span>
          <span>Designed &amp; built as a Software Defined Vehicle portfolio.</span>
        </div>
      </div>
    </footer>
  )
}
