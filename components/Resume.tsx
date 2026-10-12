'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Button from './Button'

const disciplines = [
  'Product Marketing',
  'Solutions Marketing',
  'Consumer Marketing',
  'AI',
  'Semiconductors',
  'PC & Gaming Hardware',
  'PR & Communications',
  'Creator Programs',
  'Events & Speaking',
  'Business Development',
  'Demand Generation',
  'Product Management',
  'Program Management',
  'Software Engineering',
  'Team Leadership',
] as const

type Discipline = (typeof disciplines)[number]

interface Role {
  title: string
  company: string
  location: string
  years: string
  context: string
  scope?: string
  tags: Discipline[]
  bullets: string[]
}

const roles: Role[] = [
  {
    title: 'Senior Product Marketing Manager',
    company: 'Phison Technologies',
    location: 'San Jose, CA',
    years: '2025 — Present',
    context:
      'US arm of Phison, a NAND flash controller and storage solutions company expanding into AI infrastructure and local AI.',
    scope:
      'Product marketing for AI memory and private AI products, sold to PC OEMs, system integrators, and enterprises.',
    tags: [
      'Product Marketing',
      'Solutions Marketing',
      'AI',
      'Semiconductors',
      'Business Development',
      'Events & Speaking',
      'PR & Communications',
    ],
    bullets: [
      'Lead product marketing for Pascari aiDAPTIV, which extends AI memory across GPU memory, system DRAM, and flash so local systems and servers can run larger AI models.',
      'Wrote the product brief, ideal customer profile, and GTM brief for a new private enterprise AI platform, and defined target customers and positioning for its GenAI business intelligence offering.',
      'Translate engineering work on LLM inference (vLLM, llama.cpp, Ollama, MoE expert offload, KV cache reuse, fine-tuning) into sales decks, whitepapers, and web content.',
      'Delivered MoE and fine-tuning whitepapers, published and promoted on social, and lead content for a KV cache whitepaper.',
      'Help steer ISV work for the Intel AI PC collaboration with local AI software partners.',
      'Market to PC OEMs and system integrators, and to their end customers.',
      'Plan and run trade show programs for Computex, GTC, and FMS, including demo scripts, demo signage, and banners. Build sales decks and a Sales/BD training deck.',
      'Run partner marketing (messaging, social, PR) for an AI platform partner.',
    ],
  },
  {
    title: 'GTM & Product Advisor (advisory engagement)',
    company: 'Solver AI',
    location: 'Sunnyvale, CA',
    years: '2024',
    context: 'AI-powered marketing automation platform for e-commerce.',
    tags: ['Product Management', 'Product Marketing', 'AI'],
    bullets: [
      'Led repositioning from a chat-based shopping assistant to an AI-native marketing automation platform, based on competitive analysis of leading AI marketing platforms.',
      'Identified an underserved direct-to-merchant segment through market research.',
      'Wrote the PRD, functional specs, and an 18-month roadmap that moved engineering focus to the core GenAI features needed for investor demos, including multi-channel campaign creation and automated optimization.',
      'Defined LLM-powered workflows for automated ad generation and prompt orchestration with ML engineers. Sourced training data and refined AI outputs through iterative prompt testing.',
      'Developed the investor pitch deck and coached the CEO on positioning and delivery.',
      'Set PM and designer responsibilities, and oversaw web copy, onboarding UX, and investor messaging for the repositioning.',
    ],
  },
  {
    title: 'Director of Marketing, AI Infrastructure',
    company: 'Lambda Labs',
    location: 'San Francisco, CA',
    years: '2021 — 2022',
    context: 'GPU cloud and AI/ML computing infrastructure provider.',
    scope:
      "$3M annual marketing budget. Hired and managed Lambda's first product marketing manager.",
    tags: [
      'Product Marketing',
      'Solutions Marketing',
      'AI',
      'Demand Generation',
      'PR & Communications',
      'Creator Programs',
      'Events & Speaking',
      'Team Leadership',
    ],
    bullets: [
      "Built Lambda's first GTM strategy and framework across product-led growth and enterprise segments.",
      'Interviewed 10+ ML engineers and students, found setup friction was the main pain point, and repositioned Tensorbook against Google Colab around pre-configured systems.',
      'Led the Tensorbook launch with PR teams and design agencies, growing web traffic 20% and earning coverage in Digital Trends, TechRepublic, NotebookCheck, and AI/ML media.',
      'Managed a $3M annual marketing budget across Google Ads, LinkedIn, content, and influencer partnerships, running campaigns hands-on and building a lead pipeline larger than hardware production capacity.',
      "Started Lambda's first creator program, including a Lex Fridman podcast sponsorship and Jeff Geerling video collaborations.",
      "Mentored Lambda's first PMM, who was leading projects independently within three months.",
      'Created datasheets, case studies, whitepapers, and sales enablement for enterprise customers with solutions engineering and ML teams, coordinating across 8+ departments.',
      'Adapted event strategy for SuperComputing and DoDIIS to virtual and hybrid formats during COVID-19.',
    ],
  },
  {
    title: 'Mobile Software Engineer, iOS/Android',
    company: 'Revery Labs',
    location: 'San Francisco, CA',
    years: '2021',
    context: 'VC-funded mobile wellness app startup backed by August Capital.',
    tags: ['Software Engineering'],
    bullets: [
      'Developed an iOS/Android wellness app with Flutter/Dart and Firebase, including Rive animations and refactored navigation, through beta testing.',
      'Integrated the Rive animation library through a major version migration, working directly with the Rive team.',
      'Built back-end services with Firebase authentication and Cloud Firestore.',
    ],
  },
  {
    title: 'Head of Product Marketing, HALO Autonomous Vehicle SDK',
    company: 'Tensyr',
    location: 'Palo Alto, CA',
    years: '2018 — 2019',
    context: 'Startup building a software framework and runtime for AI/ML workloads and autonomous vehicles.',
    tags: ['Product Marketing', 'Solutions Marketing', 'AI', 'Business Development'],
    bullets: [
      'Developed and launched an SDK with API documentation and runtime tools, supporting OEM pilots with partners including Mercedes and Bosch.',
      'Supported business development with automotive partners on technical requirements and platform positioning.',
      'Created product messaging, license agreements, proposals, and technical presentations for enterprise customers.',
      'Partnered with engineering and business development on technical integration and customer success.',
    ],
  },
  {
    title: 'Product and Marketing Strategy Consultant',
    company: 'Independent Consulting',
    location: 'San Francisco Bay Area',
    years: '2015 — 2018',
    context: 'Product marketing and business development consulting for PC hardware companies.',
    tags: [
      'Product Marketing',
      'Consumer Marketing',
      'PC & Gaming Hardware',
      'PR & Communications',
      'Creator Programs',
      'Events & Speaking',
      'Business Development',
    ],
    bullets: [
      'Managed 33 product SKUs across 6 categories (cases, power supplies, keyboards, mice, headsets, fans) using competitive matrices and messaging templates.',
      'Generated 120+ articles and 30+ product reviews through PR and creator outreach.',
      'Developed manufacturing partnerships in China and coordinated Computex participation, reducing production costs by 20%+.',
      'Repaired pre-production RGB lighting demos overnight at Computex, saving 30+ press meetings.',
      'Set up standard messaging frameworks and content processes across product lines, and guided software contractors on UI/UX improvements for peripheral software.',
    ],
  },
  {
    title: 'Director of Marketing, PR, Influencer Marketing, and Demand Generation',
    company: 'Corsair',
    location: 'Fremont, CA',
    years: '2012 — 2015',
    context: 'Maker of high-end PC gaming hardware, components, and peripherals.',
    scope: 'Led 5 direct reports and 9 regional coordinators. Managed PR and advertising agencies.',
    tags: [
      'Consumer Marketing',
      'Product Marketing',
      'PC & Gaming Hardware',
      'PR & Communications',
      'Creator Programs',
      'Demand Generation',
      'Events & Speaking',
      'Program Management',
      'Team Leadership',
    ],
    bullets: [
      'Moved review samples from traditional PC media to YouTube creators through a data-driven pilot, making YouTube the main demand driver.',
      'Started creator programs with Linus Tech Tips and Hardware Canucks, growing per-video views from 50K to 600K+ within 18 months and contributing to double-digit annual revenue growth.',
      'Ran a review program that sent 1,700+ samples worldwide, winning 547 awards with 91% positive ratings in 2013.',
      'Built marketing programs that contributed to Corsair outselling competing PC enthusiast power supply and case brands, and gaining share in keyboards.',
      'Built GTM frameworks and a launch tracker that became the single source of truth for 70+ launches, with weekly cross-functional launch meetings across PM, sales, operations, engineering, PR, and marketing.',
      'Managed a $623K+ online ad budget across 40+ tech publications, plus influencer and print advertising.',
      "Won multiple Best of Computex awards, including Tom's Hardware for Neutron SSDs and AX1200i power supplies (2012) and Vengeance K70/K95 RGB keyboards (2014).",
    ],
  },
  {
    title: 'Product PR Manager, Strategic Partners and Graphics/Video',
    company: 'NVIDIA',
    location: 'Santa Clara, CA',
    years: '2006 — 2008',
    context: 'Graphics processing and AI computing company.',
    tags: [
      'PR & Communications',
      'Business Development',
      'Semiconductors',
      'Consumer Marketing',
      'Product Marketing',
    ],
    bullets: [
      'Created a partner value-exchange program (benchmark labs, reviewer guides, and support in return for branding compliance and samples). Won quick buy-in from Dell and HP, then extended it to Toshiba, Sony, and Gateway.',
      'Managed product PR for notebook GPUs, HD video, and software partners.',
      'Coordinated PR across Europe and Latin America, with materials in 5+ languages.',
      'Created product messaging and presentations with GMs, and managed press and analyst relationships for press tours.',
      'Coordinated positioning and launch assets for major OEM design wins, marketing to PC OEMs and their consumers.',
    ],
  },
  {
    title: 'Marketing Director, Consumer PC Hardware',
    company: 'ASUS',
    location: 'Fremont, CA',
    years: '2003 — 2006',
    context: 'Global computer hardware and electronics maker.',
    scope: 'Led a team of 4 marketing managers and a designer. Main partner contact for Intel, AMD, and NVIDIA.',
    tags: [
      'Consumer Marketing',
      'PC & Gaming Hardware',
      'Business Development',
      'Events & Speaking',
      'PR & Communications',
      'Team Leadership',
    ],
    bullets: [
      'Paired Intel, NVIDIA, and AMD market development funds for co-funded campaigns, with each covering 50%.',
      'Created and ran the LEAP channel partner program, including multi-day partner summits for resellers and system integrators.',
      'Launched a white-box notebook program for the system integrator channel, including a dedicated website and marketing materials.',
      'Spoke at PAX, MML, AMD graphics launches, and Intel channel events.',
      'Coordinated North America web content with ASUS HQ in Taiwan, and led crisis communications.',
    ],
  },
  {
    title: 'Director of Product Management, Online Music',
    company: 'Uplister',
    location: 'Oakland, CA',
    years: '2000 — 2002',
    context: 'Internet music platform and recommendation startup.',
    tags: ['Product Management', 'Business Development'],
    bullets: [
      'Built a playlist-based music discovery platform with a 3-panel browsing interface and early AJAX features.',
      'Supported business development with major music labels on technical requirements and platform positioning.',
      'Managed a UI designer and customer support staff.',
    ],
  },
  {
    title: 'Senior Product Marketing Manager, 3D Audio',
    company: 'Aureal',
    location: 'Fremont, CA',
    years: '1998 — 1999',
    context: 'Audio semiconductors and add-in boards for PC gaming.',
    tags: ['Product Marketing', 'Semiconductors', 'Consumer Marketing', 'Business Development'],
    bullets: [
      'Launched $10M in audio and software products for integrator, OEM, and retail markets.',
      'Repositioned the product line after competitive research, driving a 10% revenue increase.',
      'Negotiated licenses for third-party software and audio technology, cutting software BOM cost by 25%.',
      'Reached #1 in the system builder channel with a new audio card line.',
    ],
  },
  {
    title: 'Senior Product Marketing Manager, 3D Graphics and Video',
    company: 'S3 Graphics',
    location: 'Santa Clara, CA',
    years: '1996 — 1997',
    context: '3D/2D graphics accelerator semiconductors.',
    tags: ['Product Marketing', 'Semiconductors', 'Business Development', 'Program Management'],
    bullets: [
      'Led the crisis response for the $25M ViRGE GX2 program. A risk-production decision resolved a yield crisis and kept customer samples on schedule for PC OEM vendor selection.',
      "Led S3's joint validation of the new AGP graphics interface standard with Intel.",
      'Led a multi-company task force to design a common chip pinout across three business units, easing customer migration.',
      'Built a multi-product roadshow for top PC OEM customers, including Dell, HP, Intel, and Toshiba.',
      'Balanced shared engineering resources between two business units with competing timelines, escalating trade-offs to GMs.',
      'Ran the program within an ISO 9001 quality system.',
    ],
  },
  {
    title: 'Senior Product Marketing Manager, Graphics and Video',
    company: 'Trident Microsystems',
    location: 'Mountain View, CA',
    years: '1994 — 1996',
    context: '2D and video accelerator semiconductors for graphics cards.',
    scope: 'Led marketing for the new 3D graphics team. Managed two FAEs and an associate PMM.',
    tags: [
      'Product Marketing',
      'Semiconductors',
      'Business Development',
      'Events & Speaking',
      'Program Management',
      'Team Leadership',
    ],
    bullets: [
      "Led research and development of Trident's first 3D graphics processors.",
      'Led product teams across marketing, sales, operations, and engineering that delivered over $50M of products per year.',
      'Supported design wins with PC OEMs: built technical presentations, met OEM engineering and product teams, gathered integration feedback, and managed design-in phases.',
      'Implemented a six-phase stage-gate development process for $50M/year semiconductor programs. It kept programs on requirements and schedule, and laid the foundation for the ISO certification PC OEMs were starting to require.',
      'Built relationships with Microsoft, Intel, software vendors, and standards groups to shape emerging 3D software standards.',
      "Spoke on the 3D graphics panel at Microprocessor Report's PC Tech Forum, and served on the 3D Game Consortium committee.",
    ],
  },
  {
    title: 'Product Marketing Manager, PC/Mac Audio and Graphics',
    company: 'Media Vision',
    location: 'Fremont, CA',
    years: '1993 — 1994',
    context: 'Multimedia PC/Mac hardware company.',
    tags: ['Product Marketing', 'PC & Gaming Hardware', 'Events & Speaking', 'Business Development'],
    bullets: [
      'Chaired the VESA VBE/AI workgroup on a software audio standard.',
      'Spoke at technology panels, user groups, industry analyst conferences, and sales training seminars.',
      'Renegotiated bundled software and driver licenses, cutting software license costs by 70%+.',
    ],
  },
]

const speaking = [
  'Speaker at PAX, MML, AMD graphics launches, and Intel channel events (ASUS)',
  "Panelist, 3D graphics panel at Microprocessor Report's PC Tech Forum (Trident)",
  'Committee member, 3D Game Consortium (Trident)',
  'Speaker at technology panels, user groups, industry analyst conferences, and sales training seminars (Media Vision)',
  'Chair, VESA VBE/AI workgroup (Media Vision)',
  'Press tours with NVIDIA GMs, plus press and analyst relations (NVIDIA)',
  "Multiple Best of Computex awards, including Tom's Hardware (Corsair, 2012 and 2014)",
  'Trade show programs at Computex, GTC, FMS, SuperComputing, and DoDIIS',
]

const projects = [
  {
    name: 'ShadowForge — AI-Powered RPG Content Converter',
    meta: 'Next.js, TypeScript, LLM APIs',
    bullets: [
      'Built a Next.js app that converts D&D 5e adventures to Shadowdark format, using hybrid rule-based and LLM classification.',
      'Built a document pipeline for PDF, DOCX, and text, with chunking, per-request token counts, and cost estimates before processing.',
    ],
    href: 'https://github.com/rickboot/ShadowForge',
  },
  {
    name: 'Hack Reactor — Database Performance Project',
    meta: 'PostgreSQL, Cassandra, AWS EC2, NGINX',
    bullets: [
      'Evaluated PostgreSQL and Cassandra for a 1.2-billion-record retail system in a 4-day sprint, achieving 5x faster imports.',
      'Deployed to AWS EC2 with horizontal scaling and NGINX load balancing, reaching 2,000+ requests per second under 1,000 ms (goal: 1,000).',
    ],
  },
  {
    name: 'AI-Assisted Development',
    meta: 'Cursor, Claude Code, Google Antigravity, GitHub Copilot',
    bullets: ['Build with AI coding tools, and read and review the code they generate.'],
  },
]

const education = [
  { name: 'Bachelor of Business Administration', school: "Saint Mary's College of California" },
  {
    name: 'Advanced Software Engineering Immersive',
    school: 'Hack Reactor — 1,000+ hour full-stack program',
  },
  { name: 'Electronics Technician A School', school: 'United States Navy' },
]

const skills = [
  {
    name: 'Product Marketing & GTM',
    items: [
      'Positioning & messaging',
      'Segmentation',
      'Launch planning',
      'Competitive analysis',
      'Sales enablement',
      'Partner & ISV marketing',
      'OEM & enterprise marketing',
      'Content strategy',
      'PR',
      'Creator programs',
      'Demand generation',
      'Customer research',
    ],
  },
  {
    name: 'Channels',
    items: ['Google Ads', 'LinkedIn Ads', 'SEO web content', 'Social', 'Trade shows', 'Agency management'],
  },
  {
    name: 'AI & LLM',
    items: ['vLLM', 'llama.cpp', 'Ollama', 'KV cache', 'MoE', 'Fine-tuning (QLoRA)', 'RAG', 'Agentic workflows', 'OpenAI APIs'],
  },
  {
    name: 'Development',
    items: ['TypeScript', 'JavaScript', 'Python', 'React', 'Next.js', 'Node.js', 'Flutter', 'PostgreSQL', 'MongoDB', 'Firebase', 'Docker', 'AWS'],
  },
  {
    name: 'Product & Program Management',
    items: ['Roadmaps', 'PRDs', 'MVP planning', 'Stage-gate', 'ISO 9001', 'Agile/Scrum', 'Jira', 'Budget & risk management'],
  },
]

const volunteering = [
  'Instructor, Mouse Squad of California, Bertha Taylor Elementary, San Jose (2012)',
  'Fundraiser Chair and Website Manager, Taylor PTA (2011–2013), raising donations 97% over the prior year',
  'Vision Award for Communication, Oak Grove School District (2011)',
]

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="font-mono text-[10px] text-cyan tracking-[0.22em] uppercase mb-8 flex items-center gap-2.5">
      <div className="w-4 h-px bg-cyan" />
      {children}
    </div>
  )
}

export default function Resume() {
  const [active, setActive] = useState<Discipline | null>(null)

  const countFor = (d: Discipline) => roles.filter((r) => r.tags.includes(d)).length

  return (
    <main className="resume relative z-[1] px-12 pt-[140px] pb-[120px] max-w-[1000px] mx-auto max-md:px-6 max-md:pt-[110px]">
      {/* Header */}
      <motion.header
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] as const }}
        className="mb-20"
      >
        <SectionLabel>Extended Resume</SectionLabel>
        <h1 className="font-display text-[clamp(48px,7vw,88px)] leading-[0.95] text-text mb-6">
          Rick L Allen
        </h1>
        <p className="font-mono text-[11px] text-text-mid tracking-[0.08em] uppercase mb-8">
          San Jose, CA · rickallen@gmail.com · linkedin.com/in/rickallen7 · rickallen.dev
        </p>
        <p className="max-w-[680px] text-[13px] font-light leading-[1.75] text-text-dim mb-5 print:hidden">
          The long version of my experience, with more detail on each role. For the short version,
          see{' '}
          <a href="/#experience" className="text-cyan no-underline hover:underline">
            Experience
          </a>
          .
        </p>
        <p className="max-w-[680px] text-[15px] font-light leading-[1.75] text-text-mid">
          Product marketer across semiconductors, PC hardware, and AI infrastructure since 1993. Has
          run product, partner, and enterprise marketing, PR and creator programs, trade shows, and
          demand generation, plus product management and hands-on software engineering.
        </p>
        <div className="mt-10 flex gap-4 flex-wrap print:hidden">
          <Button href="mailto:rickallen@gmail.com" variant="primary">
            Email
          </Button>
          <Button href="https://www.linkedin.com/in/rickallen7/" target="_blank" rel="noopener noreferrer">
            LinkedIn
          </Button>
          <button
            type="button"
            onClick={() => window.print()}
            className="font-mono text-[11px] font-normal tracking-[0.1em] uppercase px-6 py-3 rounded-md transition-all duration-300 text-text border btn-border-secondary hover:border-cyan hover:text-cyan hover:bg-cyan-glow"
          >
            Print / PDF
          </button>
        </div>
      </motion.header>

      {/* Breadth */}
      <section className="mb-20 print:hidden">
        <SectionLabel>Breadth</SectionLabel>
        <p className="text-[14px] font-light text-text-mid mb-6">
          Select a discipline to highlight the roles where I did that work.
        </p>
        <div className="flex flex-wrap gap-2.5">
          {disciplines.map((d) => {
            const isActive = active === d
            return (
              <button
                key={d}
                type="button"
                aria-pressed={isActive}
                onClick={() => setActive(isActive ? null : d)}
                className={`font-mono text-[11px] tracking-[0.04em] border px-3.5 py-2 rounded-md transition-colors duration-300 ${
                  isActive
                    ? 'border-cyan text-cyan bg-cyan-glow'
                    : 'border-[rgba(128,128,128,0.25)] text-text-mid hover:border-cyan hover:text-cyan'
                }`}
              >
                {d} <span className="text-text-dim">· {countFor(d)}</span>
              </button>
            )
          })}
        </div>
      </section>

      {/* Experience */}
      <section className="mb-20">
        <SectionLabel>Experience</SectionLabel>
        <div className="flex flex-col">
          {roles.map((role) => {
            const dimmed = active !== null && !role.tags.includes(active)
            return (
              <article
                key={`${role.company}-${role.years}`}
                className={`grid grid-cols-[140px_1fr] gap-8 py-10 border-b border-[rgba(128,128,128,0.15)] max-md:grid-cols-1 max-md:gap-3 transition-opacity duration-300 break-inside-avoid ${
                  dimmed ? 'opacity-25' : 'opacity-100'
                }`}
              >
                <div className="font-mono text-[11px] text-text-mid tracking-[0.04em] pt-1">
                  {role.years}
                </div>
                <div>
                  <div className="font-mono text-[11px] text-cyan tracking-[0.06em] uppercase mb-1.5">
                    {role.company} · {role.location}
                  </div>
                  <h2 className="font-body text-[18px] font-medium text-text mb-2">{role.title}</h2>
                  <p className="text-[13px] font-light italic text-text-dim mb-4">{role.context}</p>
                  {role.scope && (
                    <p className="text-[14px] text-text mb-4">{role.scope}</p>
                  )}
                  <ul className="list-disc pl-5 flex flex-col gap-2 marker:text-cyan">
                    {role.bullets.map((b, i) => (
                      <li key={i} className="text-[14px] font-light text-text-mid leading-relaxed">
                        {b}
                      </li>
                    ))}
                  </ul>
                  <div className="flex flex-wrap gap-2 mt-5 print:hidden">
                    {role.tags.map((t) => (
                      <span
                        key={t}
                        className={`font-mono text-[10px] tracking-[0.04em] px-2.5 py-1 rounded border ${
                          active === t
                            ? 'border-cyan text-cyan'
                            : 'border-[rgba(128,128,128,0.2)] text-text-dim'
                        }`}
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            )
          })}
        </div>
      </section>

      {/* Speaking */}
      <section className="mb-20">
        <SectionLabel>Speaking &amp; Industry</SectionLabel>
        <ul className="list-disc pl-5 flex flex-col gap-2 marker:text-cyan">
          {speaking.map((item) => (
            <li key={item} className="text-[14px] font-light text-text-mid leading-relaxed">
              {item}
            </li>
          ))}
        </ul>
      </section>

      {/* Projects */}
      <section className="mb-20">
        <SectionLabel>Projects</SectionLabel>
        <div className="flex flex-col gap-10">
          {projects.map((p) => (
            <div key={p.name} className="break-inside-avoid">
              <h2 className="font-body text-[17px] font-medium text-text mb-1">{p.name}</h2>
              <p className="font-mono text-[11px] text-text-dim tracking-[0.04em] mb-3">{p.meta}</p>
              <ul className="list-disc pl-5 flex flex-col gap-2 marker:text-cyan">
                {p.bullets.map((b, i) => (
                  <li key={i} className="text-[14px] font-light text-text-mid leading-relaxed">
                    {b}
                  </li>
                ))}
              </ul>
              {p.href && (
                <a
                  href={p.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-3 font-mono text-[11px] text-cyan tracking-[0.06em] no-underline hover:underline"
                >
                  {p.href.replace('https://', '')}
                </a>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Skills */}
      <section className="mb-20">
        <SectionLabel>Skills</SectionLabel>
        <div className="flex flex-col gap-8">
          {skills.map((s) => (
            <div key={s.name} className="grid grid-cols-[200px_1fr] gap-6 max-md:grid-cols-1 max-md:gap-3">
              <h3 className="font-body text-[15px] font-medium text-text">{s.name}</h3>
              <p className="text-[14px] font-light text-text-mid leading-relaxed">
                {s.items.join(' · ')}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Education */}
      <section className="mb-20">
        <SectionLabel>Education</SectionLabel>
        <div className="flex flex-col gap-5">
          {education.map((e) => (
            <div key={e.name}>
              <h3 className="font-body text-[15px] font-medium text-text">{e.name}</h3>
              <p className="text-[14px] font-light text-text-mid">{e.school}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Volunteering */}
      <section>
        <SectionLabel>Community</SectionLabel>
        <ul className="list-disc pl-5 flex flex-col gap-2 marker:text-cyan">
          {volunteering.map((v) => (
            <li key={v} className="text-[14px] font-light text-text-mid leading-relaxed">
              {v}
            </li>
          ))}
        </ul>
      </section>
    </main>
  )
}
