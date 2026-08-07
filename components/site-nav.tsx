'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'
import { ThemeToggle } from '@/components/theme-toggle'
import { profile } from '@/lib/data'

const links = [
  { href: '/#work', label: 'Work' },
  { href: '/#about', label: 'About' },
  { href: '/#expertise', label: 'Expertise' },
  { href: '/#process', label: 'Process' },
  { href: '/#ai', label: 'AI' },
  { href: '/#contact', label: 'Contact' },
]

export function SiteNav() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div
        className={`mx-auto flex max-w-7xl items-center justify-between px-5 transition-all duration-300 md:px-8 ${
          scrolled ? 'my-3' : 'my-4'
        }`}
      >
        <div
          className={`flex w-full items-center justify-between rounded-full border px-4 py-2.5 transition-all duration-300 ${
            scrolled ? 'glass border-border shadow-lg shadow-black/20' : 'border-transparent'
          }`}
        >
          <Link
            href="/"
            className="flex items-center gap-2.5 font-display text-sm font-semibold tracking-tight"
          >
            <span className="flex h-7 w-7 items-center justify-center rounded-full bg-primary text-[11px] font-bold text-primary-foreground">
              {profile.initials}
            </span>
            <span className="hidden sm:inline">{profile.name}</span>
          </Link>

          <nav className="hidden items-center gap-1 md:flex" aria-label="Primary">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="rounded-full px-3.5 py-1.5 text-sm text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
              >
                {l.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <ThemeToggle />
            <a
              href={profile.resumeUrl}
              className="hidden rounded-full bg-foreground px-4 py-2 text-sm font-medium text-background transition-opacity hover:opacity-90 sm:inline-flex"
            >
              Resume
            </a>
            <button
              type="button"
              className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-border text-foreground md:hidden"
              onClick={() => setOpen((v) => !v)}
              aria-label={open ? 'Close menu' : 'Open menu'}
              aria-expanded={open}
            >
              {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
            </button>
          </div>
        </div>
      </div>

      {open && (
        <div className="mx-5 md:hidden">
          <div className="glass flex flex-col gap-1 rounded-2xl border border-border p-3">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="rounded-xl px-4 py-3 text-sm text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
              >
                {l.label}
              </Link>
            ))}
            <a
              href={profile.resumeUrl}
              className="mt-1 rounded-xl bg-foreground px-4 py-3 text-center text-sm font-medium text-background"
            >
              Download Resume
            </a>
          </div>
        </div>
      )}
    </header>
  )
}
