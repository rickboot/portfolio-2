'use client'

import { motion } from 'framer-motion'

interface ExperienceItem {
  years: string
  title: string
  description?: string
  company: string
  engineering?: boolean
  subRoles?: { company: string; description: string }[]
}

const experiences: ExperienceItem[] = [
  {
    years: 'Dec 2025 — Present',
    title: 'Product Marketing Leader, AI Infrastructure',
    description:
      'Leading messaging and go-to-market strategy for the aiDAPTIV+ AI memory elasticity platform. Driving a 2026 GTM refresh focused on clearer problem framing, use-case articulation, and competitive differentiation. Working cross-functionally with technical marketing, engineering, and partner teams to improve demo narratives, benchmark interpretation, and proof-point clarity, ensuring external messaging aligns with actual product behavior and market expectations.',
    company: 'Phison',
  },
  {
    years: 'Jan 2024 — Jan 2025',
    title: 'Product & Go-to-Market Advisor',
    description:
      'Advised on product definition and go-to-market strategy for an early generative AI marketing MVP. Worked with founders, ML, and engineering teams to clarify target use cases, define product requirements, and shape LLM-powered workflow concepts. Contributed messaging and positioning guidance for AI-assisted campaign planning and automation ahead of a planned launch.',
    company: 'Solver AI',
  },
  {
    years: 'Jun 2021 — Jun 2022',
    title: 'Director of Marketing, Deep Learning Infrastructure',
    description:
      'Led go-to-market and demand generation for GPU cloud services and AI infrastructure, managing a $3M annual marketing budget. Mentored and supported the PMM who owned the Tensorbook AI workstation launch, contributing GTM guidance, messaging review, and launch strategy input. Established technical influencer partnerships to build awareness and credibility with developers, researchers, and AI practitioners.',
    company: 'Lambda Labs',
  },
  {
    years: 'Jan 2021 — Jul 2021',
    title: 'Mobile Software Engineer',
    description:
      'Worked as a mobile software engineer on a cross-platform iOS and Android application using Flutter and Firebase. Collaborated closely with product and design in an early-stage startup environment to ship production features and stabilize core application workflows.',
    company: 'Revery Labs',
    engineering: true,
  },
  {
    years: 'Jan 2018 — Dec 2019',
    title: 'Head of Product Marketing, HALO Autonomous Vehicle SDK',
    description:
      'Led product marketing for the HALO autonomous vehicle SDK, supporting OEM pilot programs with API documentation and runtime tooling. Defined technical messaging and platform positioning for enterprise automotive customers, working closely with engineering and business development teams.',
    company: 'Tensyr',
  },
  {
    years: 'Dec 2015 — Jan 2018',
    title: 'Product & Marketing Strategy Consultant',
    description:
      'Provided product marketing and go-to-market consulting for hardware and technology companies. Developed competitive positioning frameworks, messaging architectures, and launch strategies. Generated substantial earned media coverage through PR and influencer outreach, supporting product introductions across multiple hardware categories.',
    company: 'Independent',
  },
  {
    years: '1994 — 2008',
    title: 'Leadership — GPU, PC Hardware & Semiconductors',
    company: 'Legacy',
    subRoles: [
      {
        company: 'NVIDIA',
        description:
          'Product marketing for GPU platform launches. Managed OEM relationships and coordinated go-to-market across the graphics ecosystem.',
      },
      {
        company: 'ASUS',
        description:
          'Product strategy for motherboard and graphics card lines. Supported major hardware launches and retail positioning.',
      },
      {
        company: 'CORSAIR',
        description:
          'Product marketing for gaming peripherals. Built competitive positioning frameworks and partner programs.',
      },
      {
        company: 'TRIDENT MICROSYSTEMS',
        description:
          'Semiconductor platform positioning during a period of significant industry consolidation.',
      },
      {
        company: 'S3 GRAPHICS',
        description:
          'Early-career GPU product marketing. Managed multi-million dollar programs and navigated crisis situations.',
      },
    ],
  },
]

function ExpItem({ exp, index }: { exp: ExperienceItem; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{
        duration: 0.6,
        delay: index * 0.1,
        ease: [0.22, 1, 0.36, 1] as const,
      }}
      className={`exp-item grid grid-cols-[140px_1fr_auto] items-start gap-8 py-8 px-6 md:px-8 border-b border-[rgba(232,237,242,0.06)] max-md:grid-cols-1 max-md:gap-3 relative z-10 backdrop-blur-sm ${
        exp.engineering ? 'eng border-l-2 border-l-cyan-dim' : ''
      }`}
    >
      <div className="exp-years font-mono text-[11px] text-text-mid tracking-[0.04em] pt-1 max-md:order-[-1]">
        {exp.years}
      </div>
      <div className="exp-content">
        <h3 className="font-body text-[17px] font-medium text-text mb-1.5">
          {exp.title}
        </h3>
        {exp.subRoles ? (
          <div className="flex flex-col gap-6 mt-4">
            {exp.subRoles.map((role, i) => (
              <div key={i} className="sub-role">
                <div className="font-mono text-[11px] text-cyan tracking-[0.06em] uppercase mb-1">
                  {role.company}
                </div>
                <p className="text-[14px] font-light text-text-mid leading-relaxed">
                  {role.description}
                </p>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-[14px] font-light text-text-mid leading-relaxed">
            {exp.description}
          </p>
        )}
      </div>
      <div className="exp-company font-mono text-[11px] text-cyan tracking-[0.06em] uppercase text-right max-md:order-[-1] max-md:text-left">
        {exp.company.includes('·') ? (
          exp.company.split('·').map((name, i) => (
            <div key={i} className="whitespace-nowrap leading-relaxed my-0.5 first:mt-0 last:mb-0">
              {name.trim()}
            </div>
          ))
        ) : (
          <div className="whitespace-nowrap">{exp.company}</div>
        )}
      </div>
    </motion.div>
  )
}

export default function Experience() {
  return (
    <section
      id="experience"
      className="experience relative z-[1] px-12 py-[100px] pb-[140px] max-w-[1000px] mx-auto max-md:px-6 max-md:py-20 max-md:pb-[100px]"
    >
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="font-mono text-[10px] text-cyan tracking-[0.22em] uppercase mb-8 flex items-center gap-2.5"
      >
        <div className="w-4 h-px bg-cyan" />
        Experience
      </motion.div>
      <div className="exp-grid flex flex-col">
        {experiences.map((exp, idx) => (
          <ExpItem key={idx} exp={exp} index={idx} />
        ))}
      </div>
    </section>
  )
}
