'use client'

import { motion } from 'framer-motion'
import Button from './Button'

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
    title: 'Senior Product Marketing Manager',
    description:
      'Leading messaging and go-to-market strategy for the aiDAPTIV+ AI memory elasticity platform. Driving a 2026 GTM refresh focused on clearer problem framing, use-case articulation, and competitive differentiation. Working cross-functionally with technical marketing, engineering, and partner teams to improve demo narratives, benchmark interpretation, and proof-point clarity, ensuring external messaging aligns with actual product behavior and market expectations.',
    company: 'Phison Technologies',
  },
  {
    years: 'Jan 2024 — Jan 2025',
    title: 'GTM & Product Advisor (advisory engagement)',
    description:
      'Advised on product definition and go-to-market strategy for an early generative AI marketing MVP. Worked with founders, ML, and engineering teams to clarify target use cases, define product requirements, and shape LLM-powered workflow concepts. Contributed messaging and positioning guidance for AI-assisted campaign planning and automation ahead of a planned launch.',
    company: 'Solver AI',
  },
  {
    years: 'Jun 2021 — Jun 2022',
    title: 'Director of Marketing, AI Infrastructure',
    description:
      'Led go-to-market and demand generation for GPU cloud services and AI infrastructure, managing a $3M annual marketing budget. Mentored and supported the PMM who owned the Tensorbook AI workstation launch, contributing GTM guidance, messaging review, and launch strategy input. Established technical influencer partnerships to build awareness and credibility with developers, researchers, and AI practitioners.',
    company: 'Lambda Labs',
  },
  {
    years: 'Jan 2021 — Jul 2021',
    title: 'Mobile Software Engineer, iOS/Android',
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
    title: 'Product and Marketing Strategy Consultant',
    description:
      'Provided product marketing and go-to-market consulting for hardware and technology companies. Developed competitive positioning frameworks, messaging architectures, and launch strategies. Generated substantial earned media coverage through PR and influencer outreach, supporting product introductions across multiple hardware categories.',
    company: 'Independent Consulting',
  },
  {
    years: '2012 — 2015',
    title: 'Director of Marketing, PR, Influencer Marketing, and Demand Generation',
    description:
      'Led marketing, PR, and creator programs for PC gaming hardware, with 5 direct reports and 9 regional coordinators. Moved review samples to YouTube creators such as Linus Tech Tips, growing per-video views from 50K to 600K+, and ran a review program that won 547 awards in 2013.',
    company: 'Corsair',
  },
  {
    years: '1994 — 2008',
    title: 'Leadership — GPU, PC Hardware & Semiconductors',
    company: 'Legacy',
    subRoles: [
      {
        company: 'NVIDIA',
        description:
          'Product PR and partner marketing for notebook GPUs and HD video. Created a partner program adopted by Dell, HP, Toshiba, Sony, and Gateway.',
      },
      {
        company: 'ASUS',
        description:
          'Led North American marketing and channel partner programs for PC hardware, including co-funded campaigns with Intel, NVIDIA, and AMD.',
      },
      {
        company: 'TRIDENT MICROSYSTEMS',
        description:
          "Led marketing for Trident's first 3D graphics processors, and product teams delivering over $50M of products a year.",
      },
      {
        company: 'S3, INC.',
        description:
          'Managed the $25M ViRGE/GX2 graphics chip program through a yield crisis, and led AGP validation with Intel.',
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
      <div className="mt-12 flex flex-col items-center gap-6 text-center">
        <p className="max-w-[640px] text-[14px] font-light text-text-mid leading-relaxed">
          My background is diverse: product marketing, solutions marketing, PR and communications,
          events, BD, and software engineering, across semiconductors, PC hardware, consumer
          electronics, and AI infrastructure. For the full picture, see the long resume.
        </p>
        <Button href="/resume" variant="primary">
          Long resume →
        </Button>
      </div>
    </section>
  )
}
