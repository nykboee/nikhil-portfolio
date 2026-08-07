'use client'

import { useState, type FormEvent } from 'react'
import { Mail, MapPin, Linkedin, Check, ArrowRight } from 'lucide-react'
import { SectionHeader } from '@/components/section-header'
import { Reveal } from '@/components/reveal'
import { profile } from '@/lib/data'

export function Contact() {
  const [sent, setSent] = useState(false)

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const data = new FormData(e.currentTarget)
    const subject = encodeURIComponent(`Portfolio enquiry from ${data.get('name') ?? ''}`)
    const body = encodeURIComponent(
      `${data.get('message') ?? ''}\n\nFrom: ${data.get('name') ?? ''} (${data.get('email') ?? ''})`,
    )
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`
    setSent(true)
  }

  return (
    <section id="contact" className="relative mx-auto max-w-7xl px-5 py-24 md:px-8 md:py-32">
      <div className="grid gap-12 lg:grid-cols-[1fr_1.1fr]">
        <div>
          <SectionHeader
            eyebrow="Contact"
            title="Let's design the next cockpit"
            description="Open to design leadership, automotive HMI programs, AI DesignOps and speaking engagements."
          />

          <div className="mt-10 space-y-3">
            <a
              href={`mailto:${profile.email}`}
              className="group flex items-center gap-4 rounded-2xl border border-border bg-card p-4 transition-colors hover:border-primary/40"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <Mail className="h-5 w-5" />
              </span>
              <span>
                <span className="block text-xs text-muted-foreground">Email</span>
                <span className="font-medium">{profile.email}</span>
              </span>
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-4 rounded-2xl border border-border bg-card p-4 transition-colors hover:border-primary/40"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <Linkedin className="h-5 w-5" />
              </span>
              <span>
                <span className="block text-xs text-muted-foreground">LinkedIn</span>
                <span className="font-medium">Connect professionally</span>
              </span>
            </a>
            <div className="flex items-center gap-4 rounded-2xl border border-border bg-card p-4">
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <MapPin className="h-5 w-5" />
              </span>
              <span>
                <span className="block text-xs text-muted-foreground">Location</span>
                <span className="font-medium">{profile.location}</span>
              </span>
            </div>
          </div>
        </div>

        <Reveal>
          <form
            onSubmit={onSubmit}
            className="rounded-3xl border border-border bg-card p-6 md:p-8"
          >
            <div className="grid gap-5 sm:grid-cols-2">
              <Field label="Name" name="name" placeholder="Your name" required />
              <Field label="Email" name="email" type="email" placeholder="you@company.com" required />
            </div>
            <div className="mt-5">
              <Field label="Company" name="company" placeholder="Optional" />
            </div>
            <div className="mt-5">
              <label htmlFor="message" className="mb-2 block text-sm font-medium">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={5}
                placeholder="Tell me about your project or program…"
                className="w-full resize-none rounded-xl border border-border bg-background px-4 py-3 text-sm outline-none transition-colors placeholder:text-muted-foreground/70 focus:border-primary"
              />
            </div>
            <button
              type="submit"
              className="group mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary px-6 py-3.5 text-sm font-medium text-primary-foreground transition-transform hover:-translate-y-0.5 sm:w-auto"
            >
              {sent ? (
                <>
                  <Check className="h-4 w-4" /> Opening your mail app
                </>
              ) : (
                <>
                  Send message
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                </>
              )}
            </button>
          </form>
        </Reveal>
      </div>
    </section>
  )
}

function Field({
  label,
  name,
  type = 'text',
  placeholder,
  required,
}: {
  label: string
  name: string
  type?: string
  placeholder?: string
  required?: boolean
}) {
  return (
    <div>
      <label htmlFor={name} className="mb-2 block text-sm font-medium">
        {label}
        {!required && <span className="ml-1 text-xs text-muted-foreground">(optional)</span>}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm outline-none transition-colors placeholder:text-muted-foreground/70 focus:border-primary"
      />
    </div>
  )
}
