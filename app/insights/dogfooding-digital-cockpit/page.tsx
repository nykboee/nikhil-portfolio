import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'

export default function DogfoodingDigitalCockpitPage() {
  const checklist = [
    ['Glanceability', 'Can I understand the screen quickly?'],
    ['Reachability', 'Can I comfortably reach the control?'],
    ['Touch', 'Can I hit it without precision?'],
    ['Hierarchy', 'Is the primary action obvious?'],
    ['Feedback', 'Do I immediately understand what happened?'],
    ['Flow', 'Does the sequence feel natural?'],
    ['Consistency', 'Does it behave as expected?'],
    ['Cognitive Load', 'Am I thinking too much?'],
    ['Context', 'Does it still work from the driver’s seat?'],
    ['Trust', 'Does the interface give me confidence?'],
  ]

  return (
    <main className="min-h-screen bg-background">
      <article className="mx-auto max-w-3xl px-5 py-16 md:px-8 md:py-24">

        {/* Back button */}
        <Link
          href="/#thought"
          className="mb-10 inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-primary"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to portfolio
        </Link>

        {/* Category */}
        <div className="mb-5">
          <span className="inline-flex rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-primary">
            Automotive UX
          </span>
        </div>

        {/* Author + Meta */}
        <div className="mb-8 flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-sm font-semibold text-primary-foreground">
            NJ
          </div>

          <div>
            <p className="text-sm font-semibold">Nikhil Jadhav</p>
            <p className="text-xs text-muted-foreground">
              Feb 24, 2026 · 8 min read
            </p>
          </div>
        </div>

        {/* Article Title */}
        <header>
          <h1 className="font-display text-4xl font-bold leading-[1.08] tracking-tight md:text-6xl">
            Dogfooding the Cockpit: Why I Test My Own HMI Designs in My Car
          </h1>
        </header>

        {/* Hero Image */}
        <figure className="mt-10">
          <div className="overflow-hidden rounded-2xl border border-border">
            <img
              src="/insights/dogfooding-car-testing.jpg"
              alt="Testing an automotive HMI prototype inside a vehicle cockpit"
              className="h-auto w-full object-cover"
            />
          </div>

          <figcaption className="mt-3 text-xs leading-relaxed text-muted-foreground">
            Testing the prototype mounted directly in the physical vehicle cockpit
            captures crucial lighting and environmental details missed in the
            studio.
          </figcaption>
        </figure>

        {/* Introduction */}
        <section className="mt-12">
          <p className="text-lg leading-8 text-foreground md:text-xl md:leading-9">
            A prototype can look perfect on a Figma canvas and still feel
            completely wrong behind the wheel.
          </p>

          <p className="mt-6 text-base leading-8 text-muted-foreground">
            One of the practices I have found particularly valuable while
            designing automotive HMIs is surprisingly simple: I test my own
            designs in my own car. Not on a laptop. Not with a mouse. Not
            sitting comfortably at a desk.
          </p>

          <p className="mt-5 text-base leading-8 text-muted-foreground">
            I take the prototype, load it onto a tablet, place it where the
            infotainment screen actually sits, and interact with it from the
            driver&apos;s seat. I call this <strong>dogfooding the cockpit</strong>.
            And it has changed the way I think about automotive UX.
          </p>
        </section>

        {/* Divider */}
        <div className="my-14 flex items-center justify-center">
          <span className="h-1.5 w-1.5 rounded-full bg-primary/50" />
        </div>

        {/* Why test */}
        <section>
          <h2 className="font-display text-3xl font-bold tracking-tight">
            Why test your own design?
          </h2>

          <p className="mt-5 text-base leading-8 text-muted-foreground">
            Automotive interfaces have a problem that many digital products
            don&apos;t: the interface exists inside a physical environment.
            When designing a mobile app, I can sit at my desk and evaluate
            whether a button is easy to find and tap. Inside a car, the equation
            changes.
          </p>

          <p className="mt-5 text-base leading-8 text-muted-foreground">
            The driver is:
          </p>

          <ul className="mt-5 space-y-3 pl-5 text-base leading-7 text-muted-foreground marker:text-primary">
            <li>Sitting at a fixed distance from the display</li>
            <li>Moving through a constantly changing environment</li>
            <li>Dividing attention between the road and the interface</li>
            <li>Potentially dealing with sunlight, glare or reflections</li>
            <li>Interacting without always looking directly at the screen</li>
            <li>Using touch while the vehicle is moving</li>
            <li>Operating controls based partly on muscle memory</li>
          </ul>

          <p className="mt-6 text-base leading-8 text-muted-foreground">
            A design that feels intuitive on a 27-inch monitor can feel
            completely different when experienced from the driver&apos;s seat.
            That&apos;s why I believe <strong>context is part of the interface.</strong>
          </p>
        </section>

        {/* Prototype to context */}
        <section className="mt-14">
          <h2 className="font-display text-3xl font-bold tracking-tight">
            From Prototype to Physical Context
          </h2>

          <p className="mt-5 text-base leading-8 text-muted-foreground">
            My setup is deliberately simple. I take the HMI prototype and run it
            on a tablet. Then I position the tablet approximately where the
            vehicle&apos;s actual infotainment display would be.
          </p>

          <p className="mt-5 text-base leading-8 text-muted-foreground">
            The goal isn&apos;t to pretend that a tablet is the final production
            system. The goal is to introduce physical context as early as
            possible.
          </p>

          <p className="mt-5 text-base leading-8 text-muted-foreground">
            I can now evaluate things that are difficult to understand from a
            Figma canvas:
          </p>

          <ul className="mt-5 space-y-3 pl-5 text-base leading-7 text-muted-foreground marker:text-primary">
            <li>Can I comfortably reach the control?</li>
            <li>Is the hierarchy obvious when I only glance at the screen?</li>
            <li>Are the touch targets large enough?</li>
            <li>Does the interaction require too much precision?</li>
            <li>Does the next action feel obvious?</li>
          </ul>

          <p className="mt-6 text-base leading-8 text-muted-foreground">
            And perhaps most importantly: <strong>Does this interaction still
            make sense when I&apos;m sitting in the driver&apos;s seat?</strong>
          </p>
        </section>

        {/* More than testing */}
        <section className="mt-14">
          <h2 className="font-display text-3xl font-bold tracking-tight">
            This Is More Than Just Testing
          </h2>

          <p className="mt-5 text-base leading-8 text-muted-foreground">
            There are several UX methodologies that come together in this
            exercise.
          </p>

          {/* Cognitive Walkthrough */}
          <div className="mt-10">
            <h3 className="font-display text-xl font-bold">
              1. Cognitive Walkthrough
            </h3>

            <p className="mt-4 text-base leading-8 text-muted-foreground">
              I start with a specific task. For example: “Adjust the ambient
              lighting” or “Change a vehicle setting.” I then walk through the
              flow step by step.
            </p>

            <p className="mt-4 text-base leading-8 text-muted-foreground">
              At each point, I ask:
            </p>

            <ul className="mt-4 space-y-2 pl-5 text-base leading-7 text-muted-foreground marker:text-primary">
              <li>Would the driver know what to do next?</li>
              <li>Is the action discoverable?</li>
              <li>Is the system feedback clear?</li>
              <li>Is the sequence logical?</li>
              <li>Does the interaction create unnecessary cognitive load?</li>
            </ul>

            <p className="mt-5 text-base leading-8 text-muted-foreground">
              I&apos;m effectively becoming the user and walking through the
              mental model the interface expects.
            </p>
          </div>

          {/* Heuristic Evaluation */}
          <div className="mt-10">
            <h3 className="font-display text-xl font-bold">
              2. Heuristic Evaluation
            </h3>

            <p className="mt-4 text-base leading-8 text-muted-foreground">
              The next layer is evaluating the interface against usability
              principles. But automotive HMI requires more than simply applying
              traditional interface heuristics.
            </p>

            <p className="mt-4 text-base leading-8 text-muted-foreground">
              I specifically look at:
            </p>

            <div className="mt-5 space-y-4">
              <p className="text-base leading-8 text-muted-foreground">
                <strong className="text-foreground">Glanceability — </strong>
                Can I understand the screen hierarchy quickly without reading
                everything?
              </p>

              <p className="text-base leading-8 text-muted-foreground">
                <strong className="text-foreground">Touch Target Size — </strong>
                Can I accurately hit the control without needing pinpoint
                precision?
              </p>

              <p className="text-base leading-8 text-muted-foreground">
                <strong className="text-foreground">Reachability — </strong>
                Where is the control positioned relative to the driver&apos;s
                natural reach?
              </p>

              <p className="text-base leading-8 text-muted-foreground">
                <strong className="text-foreground">Feedback — </strong>
                Does the interface clearly communicate that my action was
                successful?
              </p>

              <p className="text-base leading-8 text-muted-foreground">
                <strong className="text-foreground">Consistency — </strong>
                Would this interaction behave the way I expect based on other
                parts of the vehicle?
              </p>
            </div>
          </div>

          {/* Dogfooding */}
          <div className="mt-10">
            <h3 className="font-display text-xl font-bold">
              3. Dogfooding — Eating My Own Dog Food
            </h3>

            <p className="mt-4 text-base leading-8 text-muted-foreground">
              This is the part I particularly enjoy. Dogfooding is essentially
              using what you have created yourself. In product development,
              that often means employees using their own product before
              customers do.
            </p>

            <p className="mt-5 text-base leading-8 text-muted-foreground">
              For automotive UX, I see an additional opportunity. Instead of
              asking, <strong>“Does this design look good?”</strong> I ask,
              <strong> “Can I actually live with this interaction?”</strong>
            </p>

            <p className="mt-5 text-base leading-8 text-muted-foreground">
              I use the prototype myself. I touch it. I repeat the task. I make
              mistakes. I try it from different positions. And sometimes I
              discover something that wasn&apos;t obvious during design.
            </p>

            <p className="mt-5 text-base leading-8 text-muted-foreground">
              A button that looked perfectly positioned suddenly feels too far
              away. A hierarchy that looked obvious on the design canvas
              suddenly takes longer to interpret. A touch interaction that felt
              effortless with a mouse becomes unnecessarily precise with a
              finger.
            </p>

            <p className="mt-5 text-base leading-8 text-muted-foreground">
              That&apos;s the value of dogfooding. <strong>You stop designing
              for the screen and start designing for the situation.</strong>
            </p>
          </div>

          {/* Tablet Simulation */}
          <div className="mt-10">
            <h3 className="font-display text-xl font-bold">
              4. Tablet Simulation — Bringing the Interface Into the Car
            </h3>

            <p className="mt-4 text-base leading-8 text-muted-foreground">
              The physical setup is just as important as the interaction.
              Mounting the tablet approximately where the infotainment screen
              sits creates a basic in-vehicle simulation.
            </p>

            <p className="mt-4 text-base leading-8 text-muted-foreground">
              It introduces:
            </p>

            <ul className="mt-5 space-y-3 pl-5 text-base leading-7 text-muted-foreground marker:text-primary">
              <li>Physical viewing distance</li>
              <li>Reach distance</li>
              <li>Screen angle</li>
              <li>Driver position</li>
              <li>Ambient lighting</li>
              <li>Reflections</li>
              <li>Real-world distractions</li>
              <li>Actual finger interaction</li>
            </ul>

            <p className="mt-6 text-base leading-8 text-muted-foreground">
              It&apos;s obviously not a replacement for a proper usability study
              or vehicle validation. But it is a powerful early design
              validation technique. And it costs almost nothing.
            </p>
          </div>
        </section>

        {/* Biggest Learning */}
        <section className="mt-14">
          <h2 className="font-display text-3xl font-bold tracking-tight">
            The Biggest Learning: Context Changes Design
          </h2>

          <p className="mt-5 text-base leading-8 text-muted-foreground">
            One of the biggest lessons from doing this is that screens don&apos;t
            exist in isolation.
          </p>

          <p className="mt-5 text-base leading-8 text-muted-foreground">
            When I&apos;m designing at my desk, I tend to think in terms of:
          </p>

          <p className="mt-4 font-medium text-foreground">
            Screen → Component → Interaction → Flow
          </p>

          <p className="mt-5 text-base leading-8 text-muted-foreground">
            Inside a vehicle, I have to think more like:
          </p>

          <p className="mt-4 font-medium text-primary">
            Driver → Context → Attention → Reach → Interaction → Feedback
          </p>

          <p className="mt-6 text-base leading-8 text-muted-foreground">
            That shift changes design decisions. A control might be visually
            beautiful but poorly positioned. A screen might contain all the
            required information but be too dense. A navigation pattern might
            technically work but require one glance too many.
          </p>

          <p className="mt-5 text-base leading-8 text-muted-foreground">
            A touch target might meet a design system specification but still
            feel uncomfortable in the physical environment. This is where
            automotive UX becomes fundamentally different from designing a
            conventional digital product.
          </p>
        </section>

        {/* Prototype is not product */}
        <section className="mt-14">
          <h2 className="font-display text-3xl font-bold tracking-tight">
            The Prototype Is Not the Product
          </h2>

          <p className="mt-5 text-base leading-8 text-muted-foreground">
            This exercise has also reinforced an important principle for me:
            A prototype demonstrates an interaction. The physical context
            reveals whether that interaction actually works.
          </p>

          <p className="mt-5 text-base leading-8 text-muted-foreground">
            Figma can tell me whether the flow is logically connected. A
            prototype can tell me whether the interaction behaves correctly.
            But placing that prototype inside the car can tell me whether the
            experience feels appropriate for the environment.
          </p>

          <p className="mt-5 text-base leading-8 text-muted-foreground">
            That&apos;s a very different level of validation.
          </p>
        </section>

        {/* Checklist */}
        <section className="mt-14">
          <h2 className="font-display text-3xl font-bold tracking-tight">
            What I Look For During a Dogfooding Session
          </h2>

          <p className="mt-5 text-base leading-8 text-muted-foreground">
            My informal checklist is becoming something like this:
          </p>

          <div className="mt-7 overflow-hidden rounded-xl border border-border">
            <div className="grid grid-cols-[0.8fr_2fr] bg-muted px-5 py-3 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
              <span>Area</span>
              <span>Question</span>
            </div>

            {checklist.map(([area, question]) => (
              <div
                key={area}
                className="grid grid-cols-[0.8fr_2fr] border-t border-border px-5 py-3 text-sm"
              >
                <span className="font-medium text-foreground">{area}</span>
                <span className="text-muted-foreground">{question}</span>
              </div>
            ))}
          </div>

          <p className="mt-6 text-base leading-8 text-muted-foreground">
            This isn&apos;t a substitute for formal research. It&apos;s a way to
            catch obvious problems before formal research.
          </p>
        </section>

        {/* More designers */}
        <section className="mt-14">
          <h2 className="font-display text-3xl font-bold tracking-tight">
            Why I Think More Designers Should Do This
          </h2>

          <p className="mt-5 text-base leading-8 text-muted-foreground">
            We often talk about being user-centered. But sometimes the first
            step is simply becoming more critical of our own work.
          </p>

          <p className="mt-5 text-base leading-8 text-muted-foreground">
            Before putting a prototype in front of 10 users, 100 users or an
            entire vehicle program, I want to know: Have I actually experienced
            what I&apos;m asking the user to experience?
          </p>

          <p className="mt-5 text-base leading-8 text-muted-foreground">
            For automotive UX, that means getting out of the design tool and
            getting into the car.
          </p>

          <p className="mt-5 text-base leading-8 text-muted-foreground">
            Because the best place to test a cockpit isn&apos;t always the design
            studio. <strong>Sometimes, it&apos;s the cockpit itself.</strong>
          </p>
        </section>

        {/* Final Thought */}
        <section className="mt-14">
          <h2 className="font-display text-3xl font-bold tracking-tight">
            Final Thought
          </h2>

          <p className="mt-5 text-base leading-8 text-muted-foreground">
            Dogfooding isn&apos;t about proving that my design is right. It&apos;s
            about finding out where it is wrong while there is still time to
            change it.
          </p>

          <p className="mt-5 text-base leading-8 text-muted-foreground">
            And that&apos;s perhaps the most valuable form of self-critique a
            designer can practice.
          </p>

          {/* Final Quote */}
          <blockquote className="mt-8 rounded-r-xl border-l-4 border-primary bg-muted/60 px-7 py-7">
            <p className="font-display text-xl leading-8 text-foreground md:text-2xl">
              “Design it. Put it in context. Use it yourself. Break it. Learn
              from it. Then improve it.”
            </p>

            <p className="mt-5 text-base text-muted-foreground">
              That&apos;s how I like to dogfood the cockpit.
            </p>
          </blockquote>
        </section>

      </article>
    </main>
  )
}
