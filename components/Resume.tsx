'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Button from './Button'

const disciplines = [
  'Product Marketing',
  'Solutions Marketing',
  'AI Infrastructure',
  'Semiconductors',
  'PC Hardware',
  'PR & Communications',
  'Creator Programs',
  'Events & Trade Shows',
  'Demand Generation',
  'Partner & Channel',
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
    tags: [
      'Product Marketing',
      'Solutions Marketing',
      'AI Infrastructure',
      'Semiconductors',
      'Partner & Channel',
      'Events & Trade Shows',
      'PR & Communications',
      'Team Leadership',
    ],
    bullets: [
      'Lead product marketing for Pascari aiDAPTIV, which extends AI memory across GPU memory, system DRAM, and flash so local systems and servers can run larger AI models.',
      'Wrote the product brief, ideal customer profile, and GTM working brief for the Phison AI Data Platform, a new private AI platform.',
      "Defined target customers and positioning for the platform's private GenAI business intelligence offering, which lets enterprise business users get insights from company data.",
      'Market to PC OEMs and system integrators, and to their end customers.',
      'Reviewed product claims against engineering test data, and identified which published claims needed documented test conditions before external use.',
      'Work daily with engineers on LLM inference topics (vLLM, llama.cpp, Ollama, MoE expert offload, KV cache reuse, fine-tuning), and turn them into sales decks, whitepapers, and web content.',
      'Help steer ISV work for the Intel AI PC collaboration, with software partners including Ollama, LLMWare, and TurinTech.',
      'Delivered MoE and fine-tuning whitepapers (published and promoted on social), and lead content for a KV cache whitepaper.',
      'Create sales decks and a Sales/BD training deck. Plan and run trade show programs, including banners, demo scripts, and demo signage, for Computex, GTC, and FMS.',
      'Attended AI4 and turned dozens of ISV meetings into a partner report and target list for BD.',
      'Run partner marketing (messaging, social, PR) for Zeblok, an AI platform partner.',
      'Mentor a PMM intern on technical competitive research.',
    ],
  },
  {
    title: 'GTM & Product Advisor',
    company: 'Solver AI',
    location: 'Sunnyvale, CA',
    years: '2024',
    context: 'AI-powered marketing automation platform for e-commerce. Advisory engagement.',
    tags: ['Product Management', 'Product Marketing', 'AI Infrastructure'],
    bullets: [
      'Wrote the PRD and roadmap that moved engineering focus to the core GenAI features needed for investor demos.',
      'Defined PM and designer responsibilities to align engineering and design for on-time investor demos.',
      'Led repositioning from a chat-based shopping assistant to an AI-native marketing automation platform, based on competitive analysis of leading AI marketing platforms.',
      'Identified an underserved direct-to-merchant segment through market research.',
      'Defined LLM-powered workflows for automated ad generation and prompt orchestration with ML engineers.',
      'Built an 18-month roadmap including multi-channel campaign creation and automated optimization (A/B testing, budget allocation, channel mix).',
      'Developed the investor pitch deck and coached the CEO on positioning and delivery.',
      'Sourced and structured training data for the ML team, and refined AI outputs through iterative prompt testing.',
      'Wrote functional specs and backlog, and coordinated engineering, ML, and early users.',
      'Oversaw web copy, onboarding UX, and investor messaging for the repositioning.',
    ],
  },
  {
    title: 'Director of Marketing, AI Infrastructure',
    company: 'Lambda Labs',
    location: 'San Francisco, CA',
    years: '2021 — 2022',
    context: 'GPU cloud and AI/ML computing infrastructure provider.',
    tags: [
      'Product Marketing',
      'Solutions Marketing',
      'AI Infrastructure',
      'Demand Generation',
      'PR & Communications',
      'Creator Programs',
      'Events & Trade Shows',
      'Team Leadership',
    ],
    bullets: [
      'Led customer discovery through 10+ interviews with ML engineers and students, and found setup friction was the main pain point. Repositioned Tensorbook against Google Colab around pre-configured systems.',
      "Built Lambda's first GTM strategy and framework across product-led growth and enterprise segments.",
      "Hired and mentored Lambda's first product marketing manager, who was leading projects independently within three months.",
      'Grew web traffic 20% with the Tensorbook launch.',
      'Ran Google Ads and LinkedIn campaigns hands-on with platform account managers.',
      'Managed a $3M annual marketing budget (Google Ads, LinkedIn, content, influencer partnerships), which built a lead pipeline larger than hardware production capacity.',
      'Led the Tensorbook launch with PR teams and design agencies, earning coverage in Digital Trends, TechRepublic, NotebookCheck, and AI/ML media.',
      "Started Lambda's first creator program, including a Lex Fridman podcast sponsorship and Jeff Geerling video collaborations.",
      'Built marketing programs with solutions engineering and ML teams, coordinating across 8+ departments.',
      'Adapted event strategy (SuperComputing, DoDIIS) to virtual and hybrid formats during COVID-19.',
      'Created datasheets, case studies, sales enablement materials, and whitepapers for enterprise customers.',
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
      'Developed an iOS/Android wellness app with Flutter/Dart and Firebase, including Rive animations and refactored navigation, for beta testing with 10+ users.',
      'Integrated the Rive animation library through a major version migration, working directly with the Rive team.',
      'Built back-end services with Firebase authentication and Cloud Firestore.',
      'Fixed time-zone and time-of-day logic errors in the sleep features based on beta feedback.',
    ],
  },
  {
    title: 'Head of Product Marketing, HALO Autonomous Vehicle SDK',
    company: 'Tensyr',
    location: 'Palo Alto, CA',
    years: '2018 — 2019',
    context: 'Startup building a software framework and runtime for AI/ML workloads and autonomous vehicles.',
    tags: ['Product Marketing', 'Solutions Marketing', 'AI Infrastructure', 'Partner & Channel'],
    bullets: [
      'Developed and launched an SDK with API documentation and runtime tools, supporting OEM pilots with partners including Mercedes and Bosch.',
      'Supported technical integration and customer success with engineering and business development.',
      'Created product messaging, license agreements, proposals, and technical presentations for enterprise customers.',
      'Supported business development with automotive partners on technical requirements and platform positioning.',
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
      'PC Hardware',
      'PR & Communications',
      'Creator Programs',
      'Events & Trade Shows',
      'Program Management',
    ],
    bullets: [
      'Repaired pre-production RGB lighting demos overnight at Computex, saving 30+ press meetings.',
      'Generated 120+ articles and 30+ product reviews through PR and creator outreach.',
      'Managed 33 product SKUs across 6 categories (cases, power supplies, keyboards, mice, headsets, fans) using competitive matrices and messaging templates.',
      'Developed manufacturing partnerships in China and coordinated Computex participation, reducing production costs by 20%+.',
      'Set up standard messaging frameworks and content processes across product lines.',
      'Managed software contractors and guided UI/UX improvements for peripheral software.',
    ],
  },
  {
    title: 'Director of Marketing, PR, Influencer Marketing, and Demand Generation',
    company: 'Corsair',
    location: 'Fremont, CA',
    years: '2012 — 2015',
    context: 'Maker of high-end PC gaming hardware, components, and peripherals.',
    tags: [
      'Product Marketing',
      'PC Hardware',
      'PR & Communications',
      'Creator Programs',
      'Demand Generation',
      'Events & Trade Shows',
      'Program Management',
      'Team Leadership',
    ],
    bullets: [
      'Moved review samples from traditional PC media to YouTube creators through a data-driven pilot. YouTube became the main demand driver.',
      'Started creator programs with Linus Tech Tips and Hardware Canucks. Per-video views grew from 50K to 600K+ within 18 months.',
      'Built GTM frameworks and a launch tracker that became the single source of truth for 70+ launches.',
      'Ran a review program that sent 1,700+ samples worldwide, winning 547 awards with 91% positive ratings in 2013.',
      'Built marketing programs that contributed to Corsair outselling competing PC enthusiast power supply and case brands, and gaining share in keyboards.',
      'Built creator and review programs that contributed to double-digit annual revenue growth.',
      'Managed a $623K+ online ad budget across 40+ tech publications, plus influencer and print advertising.',
      'Led and mentored 5 direct reports and 9 regional coordinators.',
      'Managed PR and advertising agencies while running programs hands-on.',
      "Won multiple Best of Computex awards, including Tom's Hardware for Neutron SSDs and AX1200i power supplies (2012) and Vengeance K70/K95 RGB keyboards (2014).",
      'Ran weekly cross-functional launch meetings across PM, sales, operations, engineering, PR, and marketing.',
    ],
  },
  {
    title: 'Product PR Manager, Strategic Partners and Graphics/Video',
    company: 'NVIDIA',
    location: 'Santa Clara, CA',
    years: '2006 — 2008',
    context: 'Graphics processing and AI computing company.',
    tags: ['PR & Communications', 'Partner & Channel', 'Semiconductors', 'Product Marketing'],
    bullets: [
      'Created a partner value-exchange program (benchmark labs, reviewer guides, support in return for branding compliance and samples). Won quick buy-in from Dell and HP, then extended it to Toshiba, Sony, and Gateway.',
      'Marketed to PC OEMs (Dell, HP) and their consumers.',
      'Managed product PR for notebook GPUs, HD video, and software partners.',
      'Coordinated PR across Europe and Latin America, with materials in 5+ languages.',
      'Created product messaging and presentations with GMs, and managed press and analyst relationships for press tours.',
      'Coordinated positioning and launch assets for major OEM design wins.',
    ],
  },
  {
    title: 'Marketing Director, Consumer PC Hardware',
    company: 'ASUS',
    location: 'Fremont, CA',
    years: '2003 — 2006',
    context: 'Global computer hardware and electronics maker.',
    tags: [
      'Partner & Channel',
      'PC Hardware',
      'Events & Trade Shows',
      'PR & Communications',
      'Team Leadership',
    ],
    bullets: [
      'Paired Intel, NVIDIA, and AMD market development funds for co-funded campaigns, with each covering 50%.',
      'Created and ran the LEAP channel partner program, including multi-day partner summits.',
      'Led a team of 4 marketing managers and a designer. Was the main partner contact for Intel, AMD, and NVIDIA.',
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
    tags: ['Product Management'],
    bullets: [
      'Built a playlist-based music discovery platform with a 3-panel browsing interface and early AJAX features.',
    ],
  },
  {
    title: 'Senior Product Marketing Manager, 3D Audio',
    company: 'Aureal',
    location: 'Fremont, CA',
    years: '1998 — 1999',
    context: 'Audio semiconductors and add-in boards for PC gaming.',
    tags: ['Product Marketing', 'Semiconductors', 'Partner & Channel'],
    bullets: [
      'Launched $10M in audio and software products.',
      'Repositioning drove a 10% revenue increase.',
      'Cut software BOM cost by 25%.',
      'Reached #1 in the system builder channel.',
    ],
  },
  {
    title: 'Senior Product Marketing Manager, 3D Graphics and Video',
    company: 'S3 Graphics',
    location: 'Santa Clara, CA',
    years: '1996 — 1997',
    context: '3D/2D graphics accelerator semiconductors.',
    tags: ['Product Marketing', 'Semiconductors', 'Program Management'],
    bullets: [
      'Led the crisis response for the $25M ViRGE GX2 program. A risk-production decision resolved a yield crisis and kept customer samples on schedule.',
      'Worked within ISO 9001.',
    ],
  },
  {
    title: 'Senior Product Marketing Manager, Graphics and Video',
    company: 'Trident Microsystems',
    location: 'Mountain View, CA',
    years: '1994 — 1996',
    context: '2D and video accelerator semiconductors for graphics cards.',
    tags: ['Product Marketing', 'Semiconductors', 'Program Management', 'Team Leadership'],
    bullets: [
      'Implemented a stage-gate development process for $50M/year semiconductor programs.',
      'Managed two FAEs and an associate PMM.',
    ],
  },
  {
    title: 'Product Marketing Manager, PC/Mac Audio and Graphics',
    company: 'Media Vision',
    location: 'Fremont, CA',
    years: '1993 — 1994',
    context: 'Multimedia PC/Mac hardware company.',
    tags: ['Product Marketing', 'PC Hardware'],
    bullets: [
      'Chaired the VESA VBE/AI workgroup.',
      'Cut software license costs by 70%+.',
    ],
  },
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
  'Instructor, Mouse Squad of California — Bertha Taylor Elementary, San Jose (2012)',
  'Fundraiser Chair and Website Manager, Taylor PTA (2011–2013) — raised donations 97% over the prior year',
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
        <SectionLabel>Full Resume</SectionLabel>
        <h1 className="font-display text-[clamp(48px,7vw,88px)] leading-[0.95] text-text mb-6">
          Rick L Allen
        </h1>
        <p className="font-mono text-[11px] text-text-mid tracking-[0.08em] uppercase mb-8">
          San Jose, CA · rickallen@gmail.com · linkedin.com/in/rickallen7 · rickallen.dev
        </p>
        <p className="max-w-[680px] text-[15px] font-light leading-[1.75] text-text-mid">
          Every role, start to finish. Thirty years across semiconductors, PC hardware, and AI
          infrastructure, covering product, solutions, and partner marketing; PR, communications,
          and creator programs; events, demand generation, product and program management; and
          hands-on software engineering.
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
