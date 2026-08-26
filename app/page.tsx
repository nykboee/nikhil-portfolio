import { SiteNav } from '@/components/site-nav'
import { SiteFooter } from '@/components/site-footer'
import { Hero } from '@/components/sections/hero'
import { About } from '@/components/sections/about'
import { Expertise } from '@/components/sections/expertise'
import { Projects } from '@/components/sections/projects'
import { DesignProcess } from '@/components/sections/design-process'
import { AiInnovation } from '@/components/sections/ai-innovation'
import { ThoughtLeadership } from '@/components/sections/thought-leadership'
import { SomeAppreciations} from '@/components/sections/testimonials'
import { Resume } from '@/components/sections/resume'
import { Contact } from '@/components/sections/contact'

export default function Page() {
  return (
    <>
      <SiteNav />
      <main>
        <Hero />
        <About />
        <Expertise />
        <Projects />
        <DesignProcess />
        <AiInnovation />
        <ThoughtLeadership />
        <Testimonials />
        <Resume />
        <Contact />
      </main>
      <SiteFooter />
    </>
  )
}
