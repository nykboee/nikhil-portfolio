import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'

export default function DogfoodingDigitalCockpitPage() {
  return (
    <main className="min-h-screen">
      <article className="mx-auto max-w-4xl px-5 py-24 md:px-8 md:py-32">
        
        <Link
          href="/#thought"
          className="mb-10 inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-primary"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to portfolio
        </Link>

        <div className="mb-8">
          <span className="text-sm font-medium text-primary">
            Automotive UX · Usability Testing ·  🥅 Design Testing
          </span>

          <h1 className="mt-4 font-display text-4xl font-bold tracking-tight md:text-6xl">
            Dogfooding the Digital Cockpit
          </h1>

          <p className="mt-6 text-xl leading-relaxed text-muted-foreground">
            Why I put my own automotive HMI prototypes inside my own car before
            putting them in front of users.
          </p>
        </div>

        {/* Hero Image */}
        <div className="mb-12 overflow-hidden rounded-2xl border border-border">
          <img
            src="/insights/dogfooding-car-testing.jpg"
            alt="Testing an automotive HMI prototype inside a vehicle"
            className="h-auto w-full object-cover"
          />
        </div>
        <div className="mb-8">
          
          <p></p> className="mt-7 font-display text- xl font-bold tracking-tight md:text- xl">
            A prototype can look perfect on a Figma canvas and still feel completely wrong behind the wheel.
          </p>

          <p className="mt-6 text-xl leading-relaxed text-muted-foreground">
            Why I put my own automotive HMI prototypes inside my own car before
            putting them in front of users.
          </p>
        </div>
        
        <div className="prose prose-lg max-w-none dark:prose-invert">
          <p>
            Designing an automotive interface on a desktop screen is one thing.
            Experiencing that same interface in the physical environment where it
            will actually be used is something completely different.
          </p>

          <h2>What happens when you test your own design?</h2>

          <p>
            I call this part of my process Dogfooding the Digital Cockpit —
            taking the prototype out of the comfortable design environment and
            placing it directly into a real vehicle context.
          </p>

          <h2>Testing more than pixels</h2>

          <p>
            The objective is not to replace formal usability testing. Instead,
            this setup helps me identify early issues related to reach,
            touch-target capacity, viewing angle, ergonomics and interaction
            flow before the design reaches a wider audience.
          </p>

          <h2>From desktop prototype to vehicle context</h2>

          <p>
            By mounting the prototype at approximately the same position as the
            vehicle infotainment display, I can perform a cognitive walkthrough
            while experiencing the physical constraints of the cockpit.
          </p>

          <h2>The value of Dogfooding</h2>

          <p>
            Sometimes the quickest way to discover that a design does not feel
            right is to stop looking at it as a designer and start using it in
            the environment it was designed for.
          </p>
        </div>
      </article>
    </main>
  )
}
