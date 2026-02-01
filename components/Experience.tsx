'use client'

import { motion } from 'framer-motion'

interface ExperienceItem {
  years: string
  title: string
  description: string
  company: string
  engineering?: boolean
}

const experiences: ExperienceItem[] = [
  {
    years: 'Dec 2025 — Present',
    title: 'Product Marketing Leader, AI Infrastructure',
    description:
      'Go-to-market for aiDAPTIV+ memory elasticity platform. Technical demos, benchmark tooling, and ISV partnership proof materials. GTC 2026 launch planning, competitive intelligence from CES keynotes.',
    company: 'Phison',
  },
  {
    years: 'Jan 2024 — Jan 2025',
    title: 'Product & Go-to-Market Advisor',
    description:
      'Repositioned MVP into a generative AI marketing platform for small businesses, driving company pivot and renewed investor interest. Defined PRDs, roadmap, and LLM-powered workflows with ML and engineering teams. Messaging and positioning for AI campaign automation — A/B testing, budget allocation, channel mix. Supported alpha delivery used by pilot merchants generating live campaigns across Meta.',
    company: 'Solver AI',
  },
  {
    years: 'Jun 2021 — Jun 2022',
    title: 'Director of Marketing, Deep Learning Infrastructure',
    description:
      'Go-to-market and demand generation for GPU cloud and AI infrastructure, managing a $3M annual marketing budget. Launched Tensorbook AI workstation with coordinated PR across Digital Trends, TechRepublic, NotebookCheck. Initiated technical influencer partnerships with Lex Fridman and Jeff Geerling to build developer and researcher demand.',
    company: 'Lambda Labs',
  },
  {
    years: 'Jan 2021 — Jul 2021',
    title: 'Mobile Software Engineer',
    description:
      'Cross-platform iOS/Android application — Flutter and Firebase in an early-stage startup environment.',
    company: 'Revery Labs',
    engineering: true,
  },
  {
    years: 'Jan 2018 — Dec 2019',
    title: 'Head of Product Marketing, HALO Autonomous Vehicle SDK',
    description:
      'Launched SDK with API documentation and runtime tools supporting OEM autonomous vehicle pilots. Defined technical messaging and platform positioning for enterprise automotive customers.',
    company: 'Tensyr',
  },
  {
    years: 'Dec 2015 — Jan 2018',
    title: 'Product & Marketing Strategy Consultant',
    description:
      'Generated 120+ media articles and 30+ product reviews through PR and influencer outreach. Built competitive positioning frameworks, messaging architectures, and GTM strategies for hardware companies.',
    company: 'Independent',
  },
  {
    years: '1994 — 2008',
    title: 'Leadership — GPU, PC Hardware & Semiconductors',
    description:
      'Product marketing and GTM across NVIDIA, ASUS, Corsair, Trident Microsystems, and S3 Graphics. OEM partnership management, large-scale hardware launches, and semiconductor platform positioning across 14 years.',
    company: 'NVIDIA · ASUS · Corsair · Trident · S3',
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
        <p className="text-[14px] font-light text-text-mid leading-relaxed">
          {exp.description}
        </p>
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
