export const profile = {
  name: 'Nikhil Jadhav',
  initials: 'NJ',
  roles: ['UX Architect', 'Automotive HMI Design Leader', 'AI-enabled Product Designer'],
  location: 'Pune, India',
  email: 'nykboee@gmail.com',
  phone: '+91 98604 68212',
  website: 'nikhiljadhav.com',
  linkedin: 'https://www.linkedin.com/',
  resumeUrl: "/Nikhil_Jadhav_Resume.pdf",
  yearsExperience: '17+',
  summary:
    'UX Architect and Usability expert with 17+ years shaping automotive HMIs, mobile and web products. Currently an Associate Solution Architect at a European automotive software company, leading global UX programs that consolidate 8+ vehicle brands across 6+ markets — delivering wireframes, specifications and design systems for Software Defined Vehicles.',
  stats: [
    { value: '17+', label: 'Years of experience' },
    { value: '8+', label: 'Vehicle brands unified' },
    { value: '6+', label: 'Global markets' },
    { value: '15', label: 'Awards & recognitions' },
  ],
}

export const highlights = [
  'Automotive UX',
  'Product Strategy',
  'Design Systems',
  'Leadership',
  'Innovation',
]

export type TimelineItem = {
  company: string
  role: string
  period: string
  location?: string
  award?: string
  points: string[]
}

export const timeline: TimelineItem[] = [
  {
    company: 'KPIT Technologies',
    role: 'Associate Solution Architect — UX',
    period: 'Jun 2023 — Present',
    award: '7 KROWN Awards',
    points: [
      'Lead global UX programs for a European automotive software company, consolidating 8+ vehicle brands across 6+ markets.',
      'Own end-to-end UX: research, interaction design and visual design across the HMI layer.',
      'Ensure design-system compliance and release-library integration for every delivered file.',
      'Drive requirement analysis, RFP/RFQ documentation, concept ideation and rapid prototyping.',
    ],
  },
  {
    company: 'Tata Consultancy Services',
    role: 'UX Domain Expert & Team Lead',
    period: 'Jan 2013 — Jun 2023',
    award: '6× Project Champion',
    points: [
      'Designed embedded IVI media systems, digital clusters and HUD for a Japanese OEM cockpit platform.',
      'Built and managed a UX team from scratch across cross-department automotive functions.',
      'Established rapid prototyping practices to test hypotheses and pivot quickly.',
      'Provided day-to-day direction and design critique for product designers.',
    ],
  },
  {
    company: 'COMOPS Ltd',
    role: 'Digital & UI Designer',
    period: 'Sep 2012 — Dec 2012',
    location: 'Pune',
    points: [
      'Owned the sales portal and day-to-day marketing, sales and presentation collateral.',
      'Designed and maintained website UI for a consistent user experience.',
      'Produced brochures, flyers, case studies and B2B whitepapers to support outreach.',
    ],
  },
  {
    company: 'Bajaj Allianz Life Insurance',
    role: 'Creative & Digital Designer',
    period: 'Mar 2011 — Aug 2012',
    award: '2× Best Employee Award',
    points: [
      'Delivered end-to-end print design for national and international agent conventions.',
      'Created collateral and customized sales materials for teams across PAN India.',
      'Managed vendors and tenders for event supplies.',
    ],
  },
  {
    company: 'i2i — Information to Innovations',
    role: '3D Visualizer & Project Lead',
    period: 'Jan 2008 — Feb 2010',
    points: [
      'Created 3D architectural interior visualizations with texturing, lighting and rendering.',
      'Led "The Design Express" tabloid for architects and interior designers.',
      'Managed corporate events and exhibitions for the design community.',
    ],
  },
]

export type Expertise = {
  title: string
  description: string
  icon: string
}

export const expertise: Expertise[] = [
  { title: 'Automotive UX', description: 'Human-centered design for the modern digital cockpit and connected vehicle.', icon: 'Car' },
  { title: 'Android Automotive', description: 'Native AAOS experiences — apps, media, and system integration.', icon: 'Smartphone' },
  { title: 'Instrument Cluster', description: 'Safety-critical cluster design balancing glanceability and delight.', icon: 'Gauge' },
  { title: 'Head-Up Display', description: 'AR-ready HUD concepts that keep drivers eyes on the road.', icon: 'Navigation' },
  { title: 'In-Vehicle Infotainment', description: 'IVI media, navigation and comfort flows across brands.', icon: 'MonitorPlay' },
  { title: 'Connected Mobility', description: 'Companion apps and services bridging phone and vehicle.', icon: 'Radio' },
  { title: 'AI in Design', description: 'Agentic DesignOps — from requirements to production-ready UI.', icon: 'Sparkles' },
  { title: 'Design Systems', description: 'Multi-brand systems integrated with release libraries.', icon: 'Component' },
  { title: 'Accessibility', description: 'WCAG-aligned, inclusive experiences for every driver.', icon: 'Accessibility' },
  { title: 'User Research', description: 'Interviews, empathy maps, usability testing and synthesis.', icon: 'Search' },
  { title: 'Interaction Design', description: 'Micro-interactions and motion that communicate state.', icon: 'MousePointerClick' },
  { title: 'Design Strategy', description: 'Aligning UX vision with business and product roadmaps.', icon: 'Target' },
]

export const tools = [
  'Figma',
  'FigJam',
  'Adobe XD',
  'Axure RP',
  'ProtoPie',
  'Qt Design Studio',
  'Spline',
  'After Effects',
  'Blender',
  'Cinema 4D',
  'JIRA',
  'Confluence',
  'Notion',
]

export type ProcessStep = {
  title: string
  description: string
  expandedDescription?: string
}

export const designProcess: ProcessStep[] = [
  { title: 'Requirements', description: 'Gather business needs, constraints and success metrics.' },
  { title: 'Research', description: 'Users, competitors, context of use and benchmarking.' },
  { title: 'User Journey', description: 'Map moments, emotions and opportunities end-to-end.' },
  { title: 'Information Architecture', description: 'Structure content, flows and screen hierarchy.' },
  { title: 'Wireframes', description: 'Low-fidelity layouts to validate interaction models.' },
  { title: 'Design System', description: 'Tokens, components and multi-brand theming.' },
  { title: 'UI Design', description: 'High-fidelity, production-ready visual design.' },
  { title: 'Specification', description: 'Detailed specs, states and edge cases documented.' },
  { title: 'Developer Handover', description: 'Release-library integration and engineering support.' },
  { title: 'Testing', description: 'Usability validation, iteration and QA sign-off.' },
]

export const aiWorkflow: ProcessStep[] = [
  {
    title: 'PDF Requirements',
    description: 'Raw specs, RFPs and stakeholder documents ingested.',
    expandedDescription:
      'The process starts with unstructured automotive requirements, RFPs, feature specifications and stakeholder inputs. AI reads and structures the source material while preserving the original context and traceability.',
  },
  {
    title: 'Requirement Analysis Agent',
    description: 'Extracts goals, constraints and acceptance criteria.',
    expandedDescription:
      'The agent identifies functional requirements, user goals, system constraints, dependencies and acceptance criteria. The output transforms a large specification into structured inputs that can be reviewed and acted upon by the UX team.',
  },
  {
    title: 'User Journey Generator',
    description: 'Drafts personas and journeys from structured intent.',
    expandedDescription:
      'Structured requirements are translated into user scenarios, personas, journeys and task flows. This creates an initial UX model that designers can validate, challenge and refine before moving into interface design.',
  },
  {
    title: 'Wireframe Generator',
    description: 'Produces low-fidelity flows for rapid review.',
    expandedDescription:
      'The system converts validated journeys into low-fidelity wireframes and interaction flows. This allows teams to evaluate information architecture and task efficiency before investing time in visual design.',
  },
  {
    title: 'Figma Design System',
    description: 'Maps output to tokens and multi-brand components.',
    expandedDescription:
      'Generated structures are mapped to the approved Figma design system, including components, variables, tokens and interaction patterns. This keeps AI-generated concepts aligned with established UX standards and multi-brand requirements.',
  },
  {
    title: 'Developer Specifications',
    description: 'Generates specs, states and handover-ready notes.',
    expandedDescription:
      'Once the design direction is validated, the system prepares detailed specifications covering component behaviour, interaction states, annotations, edge cases and implementation guidance for development teams.',
  },
  {
    title: 'QA Test Cases',
    description: 'Derives test scenarios from requirements automatically.',
    expandedDescription:
      'Requirements and interaction states are converted into structured QA scenarios. This creates a traceable connection between the original requirement, the UX design and the validation criteria used during implementation and testing.',
  },
  {
    title: 'Production Ready Design',
    description: 'Human-reviewed, compliant, shippable HMI.',
    expandedDescription:
      'The final output is not generated and shipped blindly. Designers and product teams review the complete journey, validate usability and compliance, and apply human judgment before the experience moves toward production.',
  },
]

export type CaseSection = { heading: string; body: string; list?: string[] }

export type Project = {
  slug: string
  title: string
  category: string
  year: string
  summary: string
  cover: string
  hero: string
  tags: string[]
  metrics: { value: string; label: string }[]
  overview: string
  challenge: string
  research: CaseSection
  benchmarking: CaseSection
  personas: { name: string; role: string; need: string }[]
  journey: string
  ia: string
  taskflow: string
  wireframes: { image: string; caption: string }[]
  ui: { image: string; caption: string }[]
  designSystem: CaseSection
  accessibility: CaseSection
  handover: CaseSection
  results: string[]
  reflection: string
}

export const projects: Project[] = [
  {
    slug: 'GreenCharge',
    title: 'GreenCharge',
    category: 'EV Charging',
    year: '2024',
    summary:
      'A unified EV charging experience spanning in-vehicle HMI and companion app — route with confidence, charge without friction.',
    cover: '/projects/GreenCharge-cover.png',
    hero: '/projects/GreenCharge-hero.png',
    tags: ['Android Automotive', 'EV Charging', 'Companion App', 'Design System'],
    metrics: [
      { value: '-38%', label: 'Charging session drop-off' },
      { value: '4.7★', label: 'App store rating' },
      { value: '2.1s', label: 'Time to nearest charger' },
    ],
    overview:
      'GreenCharge reimagines the electric charging journey as one continuous flow from planning to plugging in. The in-vehicle HMI and mobile companion share a single design language so drivers never lose context.',
    challenge:
      'Range anxiety and fragmented charging networks made EV road trips stressful. Drivers juggled multiple apps, inconsistent pricing and unreliable availability data.',
    research: {
      heading: 'Research',
      body: 'We interviewed 24 EV owners and shadowed 6 real charging sessions across urban and highway contexts.',
      list: [
        'Availability uncertainty was the #1 anxiety driver.',
        'Drivers wanted charging planned into the route, not bolted on.',
        'Payment and authentication friction caused mid-session abandonment.',
      ],
    },
    benchmarking: {
      heading: 'Competitive Benchmarking',
      body: 'We benchmarked six leading charging and navigation products against discoverability, trust and speed-to-charge.',
      list: ['Native OEM navigation', 'Third-party charging networks', 'Consumer map apps'],
    },
    personas: [
      { name: 'Aditi', role: 'Daily commuter', need: 'Predictable, fast top-ups near work and home.' },
      { name: 'Marcus', role: 'Long-distance traveler', need: 'Confidence that chargers en route will be free and working.' },
    ],
    journey:
      'From "will I make it?" during planning, through "is this charger free?" en route, to "am I done yet?" at the stall — we designed reassurance into every moment.',
    ia: 'A three-pillar structure — Plan, Navigate, Charge — keeps the mental model consistent across vehicle and phone.',
    taskflow:
      'The critical path from destination entry to confirmed charging stop was reduced from 9 steps to 4, with smart defaults for preferred networks.',
    wireframes: [
      { image: '/projects/GreenCharge-wire-1.png', caption: 'Route planner with charging stops' },
      { image: '/projects/GreenCharge-wire-2.png', caption: 'Live charger availability list' },
    ],
    ui: [
      { image: '/projects/GreenCharge-ui-1.png', caption: 'In-vehicle charging map' },
      { image: '/projects/GreenCharge-ui-2.png', caption: 'Companion app session tracking' },
    ],
    designSystem: {
      heading: 'Design System',
      body: 'A token-based system with energy-state color semantics, shared across AAOS and mobile, integrated with the release library.',
      list: ['Energy state color tokens', 'Adaptive map components', 'Cross-platform typography scale'],
    },
    accessibility: {
      heading: 'Accessibility',
      body: 'High-contrast charging states, large touch targets for gloved hands and voice-first flows for eyes-on-road interaction.',
    },
    handover: {
      heading: 'Developer Handover',
      body: 'Specs delivered with component states, motion timing and edge cases; paired with engineering during AAOS integration.',
    },
    results: [
      '38% reduction in charging session drop-off.',
      '4.7★ average rating for the companion app.',
      'Adopted as reference pattern across two additional brands.',
    ],
    reflection:
      'Designing for a moving, energy-constrained context taught us that reassurance beats information density — say less, but say it exactly when it matters.',
  },
  {
    slug: 'personalization-platform',
    title: 'Personalization Platform',
    category: 'Software Defined Vehicle',
    year: '2024',
    summary:
      'A profile-driven personalization layer that adapts the entire cockpit — seat, climate, ambient, media — to every driver.',
    cover: '/projects/personalization-cover.png',
    hero: '/projects/personalization-hero.png',
    tags: ['SDV', 'Personalization', 'Multi-brand', 'Design System'],
    metrics: [
      { value: '8', label: 'Brands supported' },
      { value: '+22%', label: 'Feature engagement' },
      { value: '1', label: 'Unified profile model' },
    ],
    overview:
      'The platform lets a single driver identity carry preferences across brands and vehicles, making any car feel instantly personal.',
    challenge:
      'Eight brands each had bespoke personalization flows. There was no shared model, creating duplicate effort and inconsistent quality.',
    research: {
      heading: 'Research',
      body: 'Cross-brand workshops and preference audits revealed 70% of settings were conceptually identical under different names.',
      list: ['Naming and IA diverged wildly', 'Users expected settings to follow them', 'Brand identity had to survive shared foundations'],
    },
    benchmarking: {
      heading: 'Competitive Benchmarking',
      body: 'Studied consumer OS profile systems and premium OEM personalization to define a scalable baseline.',
    },
    personas: [
      { name: 'Lena', role: 'Multi-car household', need: 'Consistent settings whichever car she drives.' },
      { name: 'Product Owner', role: 'Brand stakeholder', need: 'Shared foundation without losing brand character.' },
    ],
    journey:
      'Onboarding, daily recall and guest handoff were mapped to ensure personalization felt effortless and private.',
    ia: 'A layered model separates universal preferences from brand-specific extensions, enabling reuse without lock-step releases.',
    taskflow: 'Profile creation and vehicle recognition were streamlined into a single guided flow with sensible defaults.',
    wireframes: [
      { image: '/projects/personalization-wire-1.png', caption: 'Profile onboarding flow' },
      { image: '/projects/personalization-wire-2.png', caption: 'Preference hierarchy' },
    ],
    ui: [
      { image: '/projects/personalization-ui-1.png', caption: 'Driver profile switcher' },
      { image: '/projects/personalization-ui-2.png', caption: 'Adaptive ambient settings' },
    ],
    designSystem: {
      heading: 'Design System',
      body: 'A theming architecture where brand skins ride on shared components and tokens, all governed through the release library.',
      list: ['Brand theming tokens', 'Shared settings components', 'Governance and compliance model'],
    },
    accessibility: {
      heading: 'Accessibility',
      body: 'Profiles carry accessibility preferences — text size, contrast and audio cues — automatically across vehicles.',
    },
    handover: {
      heading: 'Developer Handover',
      body: 'Delivered a theming spec and component contract enabling brands to extend without forking the core.',
    },
    results: [
      'One profile model adopted across 8 brands.',
      '22% lift in personalization feature engagement.',
      'Reduced duplicate design effort across brand teams.',
    ],
    reflection:
      'The hardest part was politics, not pixels — a shared system only works when every brand sees itself reflected in it.',
  },
  {
    slug: 'music-experience',
    title: 'Music Experience',
    category: 'In-Vehicle Infotainment',
    year: '2023',
    summary:
      'A glanceable, voice-friendly media experience that keeps the joy of music without pulling eyes from the road.',
    cover: '/projects/music-cover.png',
    hero: '/projects/music-hero.png',
    tags: ['IVI', 'Media', 'Voice', 'Interaction Design'],
    metrics: [
      { value: '-45%', label: 'Glance time to control' },
      { value: '3', label: 'Providers unified' },
      { value: '+31%', label: 'Voice usage' },
    ],
    overview:
      'A unified media surface across streaming providers with large, glanceable controls and a confident voice-first path.',
    challenge:
      'Media apps competed for attention with dense UIs unsafe for driving. Switching providers meant relearning the interface.',
    research: {
      heading: 'Research',
      body: 'Drive-along studies measured glance duration and error rates across common media tasks.',
      list: ['Skip and volume were the top in-drive actions', 'Provider switching was jarring', 'Album art aided recognition and reduced reading'],
    },
    benchmarking: {
      heading: 'Competitive Benchmarking',
      body: 'Compared native and projected media UIs for safety, consistency and delight.',
    },
    personas: [
      { name: 'Rohan', role: 'Podcast commuter', need: 'Resume and skip without looking down.' },
      { name: 'Sara', role: 'Playlist driver', need: 'Discover and control music safely.' },
    ],
    journey: 'From "play something" to "not this — skip", every core action was tuned for a single glance.',
    ia: 'A now-playing-first architecture surfaces controls immediately, with browse tucked one layer deeper.',
    taskflow: 'Provider-agnostic controls mean skip, like and volume behave identically regardless of source.',
    wireframes: [
      { image: '/projects/music-wire-1.png', caption: 'Now playing layout' },
      { image: '/projects/music-wire-2.png', caption: 'Provider-agnostic browse' },
    ],
    ui: [
      { image: '/projects/music-ui-1.png', caption: 'Glanceable now-playing screen' },
      { image: '/projects/music-ui-2.png', caption: 'Voice interaction feedback' },
    ],
    designSystem: {
      heading: 'Design System',
      body: 'Media components with generous targets, consistent motion and provider theming under a shared shell.',
    },
    accessibility: {
      heading: 'Accessibility',
      body: 'Voice-first flows, high-contrast controls and haptic confirmation reduce visual load.',
    },
    handover: {
      heading: 'Developer Handover',
      body: 'Detailed control states and motion specs ensured consistent behavior across providers.',
    },
    results: [
      '45% reduction in glance time to reach a control.',
      '31% increase in voice control usage.',
      'Three streaming providers unified under one shell.',
    ],
    reflection:
      'Safety and delight are not opposites — the calmest interface was also the one people enjoyed most.',
  },
  {
    slug: 'hud-mini-map',
    title: 'HUD Mini Map',
    category: 'Head-Up Display',
    year: '2023',
    summary:
      'An AR-ready head-up mini map that layers turn guidance onto the road without overwhelming the driver.',
    cover: '/projects/hud-cover.png',
    hero: '/projects/hud-hero.png',
    tags: ['HUD', 'Navigation', 'AR', 'Safety'],
    metrics: [
      { value: '-27%', label: 'Missed turns' },
      { value: '2', label: 'Fidelity modes' },
      { value: '60fps', label: 'Motion target' },
    ],
    overview:
      'A minimal head-up mini map that shows just enough — next maneuver, distance and lane — projected into the driver eyeline.',
    challenge:
      'HUD real estate is tiny and safety-critical. Too much detail distracts; too little erodes trust in guidance.',
    research: {
      heading: 'Research',
      body: 'Simulator studies tested how much map detail drivers could process at speed.',
      list: ['Maneuver + distance was the essential minimum', 'Motion had to be smooth to avoid distraction', 'Color coding aided instant comprehension'],
    },
    benchmarking: {
      heading: 'Competitive Benchmarking',
      body: 'Reviewed premium HUD systems for legibility, layering and AR integration.',
    },
    personas: [
      { name: 'Highway driver', role: 'Frequent traveler', need: 'Confidence at speed without looking away.' },
      { name: 'City driver', role: 'Urban navigator', need: 'Clear lane and turn cues in dense traffic.' },
    ],
    journey: 'Approaching a maneuver, the mini map escalates detail progressively, then recedes once the turn is complete.',
    ia: 'A layered rendering model keeps essential guidance in the near field and context in the far field.',
    taskflow: 'Guidance states transition through calm, prepare and act phases synced to distance-to-maneuver.',
    wireframes: [
      { image: '/projects/hud-wire-1.png', caption: 'Guidance state escalation' },
      { image: '/projects/hud-wire-2.png', caption: 'Lane guidance layering' },
    ],
    ui: [
      { image: '/projects/hud-ui-1.png', caption: 'HUD mini map in daylight' },
      { image: '/projects/hud-ui-2.png', caption: 'Night mode contrast' },
    ],
    designSystem: {
      heading: 'Design System',
      body: 'HUD-specific tokens for luminance, contrast and safe motion timing.',
    },
    accessibility: {
      heading: 'Accessibility',
      body: 'Luminance-adaptive contrast and colorblind-safe maneuver cues.',
    },
    handover: {
      heading: 'Developer Handover',
      body: 'Motion timing curves and rendering constraints documented for the HUD engine team.',
    },
    results: [
      '27% fewer missed turns in simulator testing.',
      'Smooth 60fps guidance motion target met.',
      'Adopted as the baseline HUD navigation pattern.',
    ],
    reflection:
      'On a HUD, restraint is the feature — the best moments were the ones we chose to leave blank.',
  },
  {
    slug: 'driver-recognition',
    title: 'Driver Recognition',
    category: 'Connected Mobility',
    year: '2022',
    summary:
      'Seamless, privacy-first driver recognition that greets each driver and restores their world in seconds.',
    cover: '/projects/driver-cover.png',
    hero: '/projects/driver-hero.png',
    tags: ['Connected', 'Identity', 'Privacy', 'Onboarding'],
    metrics: [
      { value: '<3s', label: 'Recognition to ready' },
      { value: '100%', label: 'On-device by default' },
      { value: '+18%', label: 'Profile adoption' },
    ],
    overview:
      'A recognition flow that identifies the driver and instantly restores seat, mirrors, media and layout — with privacy front and center.',
    challenge:
      'Recognition can feel invasive. We needed trust and speed simultaneously, with graceful fallback for guests.',
    research: {
      heading: 'Research',
      body: 'Trust interviews explored comfort with biometric and key-based recognition.',
      list: ['Transparency built trust', 'Guest mode was essential', 'Speed mattered as much as accuracy'],
    },
    benchmarking: {
      heading: 'Competitive Benchmarking',
      body: 'Assessed identity flows across automotive and consumer devices for trust cues.',
    },
    personas: [
      { name: 'Owner', role: 'Primary driver', need: 'Instant, private recall of my setup.' },
      { name: 'Guest', role: 'Occasional driver', need: 'Use the car without creating an account.' },
    ],
    journey: 'From approach to seated-and-ready, the flow reassures with clear, honest feedback about what is happening.',
    ia: 'A trust-first architecture surfaces controls and consent before capability.',
    taskflow: 'Recognition, confirmation and profile restore complete in under three seconds with a visible guest exit.',
    wireframes: [
      { image: '/projects/driver-wire-1.png', caption: 'Recognition and consent' },
      { image: '/projects/driver-wire-2.png', caption: 'Guest fallback flow' },
    ],
    ui: [
      { image: '/projects/driver-ui-1.png', caption: 'Welcome and profile restore' },
      { image: '/projects/driver-ui-2.png', caption: 'Privacy controls' },
    ],
    designSystem: {
      heading: 'Design System',
      body: 'Identity and consent components with clear status semantics.',
    },
    accessibility: {
      heading: 'Accessibility',
      body: 'Multi-modal confirmation and readable consent language for all drivers.',
    },
    handover: {
      heading: 'Developer Handover',
      body: 'State machine and privacy requirements documented for the platform team.',
    },
    results: [
      'Recognition-to-ready under three seconds.',
      'On-device processing by default for privacy.',
      '18% increase in driver profile adoption.',
    ],
    reflection:
      'Trust is a design material — every honest micro-message earned the driver a little more confidence.',
  },
  {
    slug: 'ai-design-automation',
    title: 'AI Design Automation',
    category: 'AI DesignOps',
    year: '2024',
    summary:
      'An agentic pipeline turning raw requirement PDFs into research, wireframes, design-system-ready UI and QA cases.',
    cover: '/projects/ai-cover.png',
    hero: '/projects/ai-hero.png',
    tags: ['AI', 'DesignOps', 'Automation', 'Design System'],
    metrics: [
      { value: '5×', label: 'Faster first draft' },
      { value: '8', label: 'Pipeline stages' },
      { value: '100%', label: 'Human-reviewed' },
    ],
    overview:
      'A DesignOps system where specialized agents move work from PDF requirements to production-ready HMI, with humans steering quality at every gate.',
    challenge:
      'Requirement-to-design cycles were slow and repetitive. Early-stage artifacts consumed disproportionate effort.',
    research: {
      heading: 'Research',
      body: 'Mapped the real requirement-to-handover pipeline to find automatable, low-judgment steps.',
      list: ['Requirement parsing was highly repetitive', 'Journeys and wireframes followed patterns', 'QA cases derived predictably from specs'],
    },
    benchmarking: {
      heading: 'Competitive Benchmarking',
      body: 'Evaluated emerging AI design tooling against a governed, design-system-first pipeline.',
    },
    personas: [
      { name: 'Designer', role: 'HMI designer', need: 'Skip the busywork, focus on judgment.' },
      { name: 'Product Owner', role: 'Stakeholder', need: 'Faster, traceable requirement-to-design flow.' },
    ],
    journey: 'A requirement enters as a PDF and moves through agents, with human review gates before anything ships.',
    ia: 'A staged pipeline with clear inputs, outputs and review checkpoints at each transition.',
    taskflow: 'Each agent hands a structured artifact to the next, keeping traceability from requirement to test case.',
    wireframes: [
      { image: '/projects/ai-wire-1.png', caption: 'Pipeline overview' },
      { image: '/projects/ai-wire-2.png', caption: 'Agent handoff structure' },
    ],
    ui: [
      { image: '/projects/ai-ui-1.png', caption: 'DesignOps control room' },
      { image: '/projects/ai-ui-2.png', caption: 'Review and approval gate' },
    ],
    designSystem: {
      heading: 'Design System',
      body: 'Agent outputs map directly to design tokens and components, keeping generated UI on-system.',
      list: ['Token-aware generation', 'Component contract validation', 'Governed output review'],
    },
    accessibility: {
      heading: 'Accessibility',
      body: 'Accessibility checks embedded as an automated gate before human review.',
    },
    handover: {
      heading: 'Developer Handover',
      body: 'Generated specs and QA cases feed directly into engineering workflows.',
    },
    results: [
      '5× faster first-draft turnaround.',
      'Eight-stage pipeline from PDF to production-ready design.',
      'Every output human-reviewed for quality and compliance.',
    ],
    reflection:
      'AI removed the busywork so judgment could scale — the designer became the editor-in-chief of the pipeline.',
  },
]

export const thoughtLeadership = [
  { type: 'Award', title: '7× KROWN Awards', detail: 'Recognized for excellence in automotive UX delivery.', year: '2023—24' },
  { type: 'Talk', title: 'Designing the Software Defined Cockpit', detail: 'Keynote on multi-brand HMI at an internal design summit.', year: '2024' },
  { type: 'Whitepaper', title: 'AI DesignOps for Automotive HMI', detail: 'A framework for agentic requirement-to-design pipelines.', year: '2024' },
  { type: 'Article', title: 'Glanceability by Design', detail: 'Principles for safe, delightful in-vehicle interfaces.', year: '2023' },
  { type: 'Award', title: '6× Project Champion', detail: 'Repeated recognition for project leadership at TCS.', year: '2013—23' },
  { type: 'Talk', title: 'From Cluster to HUD', detail: 'Session on layered guidance across cockpit surfaces.', year: '2023' },
]

export const testimonials = [
  {
    quote:
      'Nikhil brings rare clarity to complex, multi-brand automotive programs. He turns ambiguous requirements into systems teams can actually build.',
    name: 'Product Owner',
    role: 'European Automotive OEM',
  },
  {
    quote:
      'A design leader who balances safety, brand and delight. His HMI work consistently raised our quality bar across markets.',
    name: 'Engineering Lead',
    role: 'Cockpit Platform',
  },
  {
    quote:
      'His AI DesignOps vision changed how our team thinks about the requirement-to-design pipeline. Pragmatic, not hype.',
    name: 'Design Manager',
    role: 'Software Defined Vehicle',
  },
]

export const education = [
  { degree: 'MBA', school: 'SIMS, Pune', year: '2018 — 2020' },
  { degree: 'B.Com', school: 'SPPU, Pune', year: '2005 — 2008' },
  { degree: 'AD3D+', school: 'MAAC, Pune', year: '2008' },
]

export const projectStats = [
  { value: '12', label: 'Android Automotive OS' },
  { value: '4', label: 'Qt Design Studio' },
  { value: '2', label: 'CGI Studio framework' },
  { value: '10', label: 'Proof of Concepts' },
  { value: '2', label: 'UX Mobile Bootcamps' },
  { value: '1', label: 'Cinema 4D Studio' },
]
