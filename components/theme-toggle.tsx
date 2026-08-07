'use client'

import { Moon, Sun } from 'lucide-react'
import { useEffect, useState } from 'react'

export function ThemeToggle() {
  const [light, setLight] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const stored = localStorage.getItem('nj-theme')
    const isLight = stored === 'light'
    setLight(isLight)
    document.documentElement.classList.toggle('light', isLight)
  }, [])

  function toggle() {
    const next = !light
    setLight(next)
    document.documentElement.classList.toggle('light', next)
    localStorage.setItem('nj-theme', next ? 'light' : 'dark')
  }

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={light ? 'Switch to dark mode' : 'Switch to light mode'}
      className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-border text-foreground/80 transition-colors hover:bg-secondary hover:text-foreground"
    >
      {mounted && light ? <Moon className="h-4 w-4" /> : <Sun className="h-4 w-4" />}
    </button>
  )
}
