'use client'
 
import { motion } from 'framer-motion'
import Image from 'next/image'
import Button from './Button'
 
interface ProjectLink {
  href: string
  label: string
  icon: 'github' | 'external'
}
 
interface Project {
  title: string
  description: string
  tags: string[]
  links: ProjectLink[]
  stack: string[]
  featured?: boolean
  wip?: boolean
  image?: string
}
 
const projects: Project[] = [
  {
    title: 'Marketing Intelligence Platform',
    description:
      "Built to solve a real problem: how do you validate that AI workloads actually create memory pressure under production conditions? This isn't a mock or a simulation — it ingests real competitive data (CES 2026 corpus, 87 documents), swaps live between Llama 3.1 and LLaVA on demand, and streams telemetry as the memory pressure builds in real time. The engineering was the means, not the point. The point was proving that multi-model AI workloads genuinely stress GPU memory in ways the market hasn't fully reckoned with yet. FastAPI backend, WebSocket streaming, RAG with context pruning, crash detection tied to real swap deltas.",
    tags: ['AI', 'RAG', 'Multi-Model'],
    links: [
      { href: 'https://github.com/rickboot/mktg-rag', label: 'GitHub', icon: 'github' },
    ],
    stack: [
      'Python',
      'FastAPI',
      'React 19',
      'TypeScript',
      'Ollama',
      'ChromaDB',
      'RAG',
      'WebSocket',
      'Llama 3.1',
      'LLaVA',
      'psutil',
      'Vite',
    ],
    featured: true,
  },
  {
    title: 'AI Resource Estimator',
    description:
      'A VRAM and performance calculator for LLM inference pipelines. Not a toy — it models KV cache scaling, multi-GPU topology, CPU offload penalties, quantization tradeoffs, and multi-stage pipeline orchestration (RAG, vision, agentic workflows). Built because I needed to understand memory pressure before I could demo it. Live on Vercel, roadmap in the repo.',
    tags: ['AI', 'Infrastructure'],
    links: [
      { href: 'https://github.com/rickboot/ai-calc', label: 'GitHub', icon: 'github' },
      { href: 'https://ai-calc-flame.vercel.app', label: 'Live', icon: 'external' },
    ],
    stack: ['TypeScript', 'React', 'Vite', 'VRAM Modeling', 'KV Cache'],
    wip: true,
    image: '/images/ai-calc.png',
  },
  {
    title: 'ShadowForge',
    description:
      'Converts D&D 5e adventures into Shadowdark RPG format using OpenAI. Real users, real use case — the tabletop RPG community needed this and nobody had built it. Token-aware chunking, markdown output, client-side token tracking. The project where I closed the full loop: identified the gap, scoped the product, built it, shipped it, people use it.',
    tags: ['AI', 'RPG', 'Consumer'],
    links: [
      { href: 'https://github.com/rickboot/ShadowForge', label: 'GitHub', icon: 'github' },
      { href: 'https://shadow-forge.vercel.app', label: 'Live', icon: 'external' },
    ],
    stack: ['Next.js', 'TypeScript', 'Tailwind v4', 'OpenAI', 'LLM'],
    image: '/images/shadowforge.png',
  },
]
 
function ProjectCard({ project }: { project: Project }) {
  if (project.featured) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] as const }}
        whileHover={{ scale: 1.01 }}
        className="proj-featured border border-[rgba(232,237,242,0.08)] rounded-2xl p-12 bg-[rgba(232,237,242,0.02)] mb-6 hover:border-cyan-dim hover:bg-cyan-glow max-md:p-8 max-md:px-6 relative group overflow-hidden"
      >
        <div className="absolute inset-0 bg-cyan-glow opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl pointer-events-none" />
        <div className="proj-featured-top flex justify-between items-start mb-6">
          <div className="proj-featured-left flex items-center gap-3.5">
            {project.tags.map((tag, idx) => (
              <span
                key={idx}
                className="font-mono text-[9px] text-cyan tracking-[0.16em] uppercase bg-cyan-dim px-2.5 py-1 rounded-[20px]"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
        <h3 className="font-display text-[34px] text-text tracking-[0.01em] mb-3">
          {project.title}
        </h3>
        <p className="text-sm font-light text-text-mid leading-[1.7] max-w-[680px]">
          {project.description}
        </p>
        <div className="proj-links flex gap-3 mt-7 flex-wrap relative z-10">
          {project.links.map((link, idx) => (
            <Button
              key={idx}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              variant="secondary"
              className="px-4 py-2 flex items-center gap-1.5 text-[10px]"
            >
              {link.icon === 'github' ? (
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  className="w-3 h-3 opacity-60"
                >
                  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
                </svg>
              ) : (
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  className="w-3 h-3 opacity-60"
                >
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                  <polyline points="15 3 21 3 21 9" />
                  <line x1="10" y1="14" x2="21" y2="3" />
                </svg>
              )}
              {link.label}
            </Button>
          ))}
        </div>
        <div className="proj-stack flex flex-wrap gap-1.5 mt-6 relative z-10">
          {project.stack.map((tech, idx) => (
            <span
              key={idx}
              className="font-mono text-[9px] text-text-dim tracking-[0.06em] border border-[rgba(232,237,242,0.1)] px-2 py-0.5 rounded"
            >
              {tech}
            </span>
          ))}
        </div>
      </motion.div>
    )
  }
 
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] as const }}
      whileHover={{ scale: 1.02 }}
      className="proj-card border border-[rgba(232,237,242,0.08)] rounded-xl p-0 bg-[rgba(232,237,242,0.02)] cursor-pointer hover:border-cyan-dim hover:bg-cyan-glow group max-md:p-0 relative text-left overflow-hidden flex flex-col"
    >
      <div className="absolute inset-0 bg-cyan-glow opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl pointer-events-none" />
      
      {/* Project Image */}
      {project.image && (
        <div className="relative w-full h-48 overflow-hidden rounded-t-xl">
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[rgba(4,6,8,0.6)] via-transparent to-transparent [html.light_&]:from-[rgba(248,249,250,0.6)]" />
        </div>
      )}

      <div className="p-9 max-md:p-7 max-md:px-6 flex-1 flex flex-col">
        <div className="proj-card-top flex justify-between items-start mb-5">
          <div className="flex gap-2 items-center">
            {project.tags.map((tag, idx) => (
              <span
                key={idx}
                className={`font-mono text-[9px] text-cyan tracking-[0.16em] uppercase bg-cyan-dim px-2.5 py-1 rounded-[20px] ${
                  project.wip ? 'bg-[rgba(255,170,0,0.12)] text-[#ffaa00]' : ''
                }`}
              >
                {tag}
              </span>
            ))}
            {project.wip && (
              <span className="font-mono text-[9px] text-[#ffaa00] tracking-[0.16em] uppercase bg-[rgba(255,170,0,0.12)] px-2.5 py-1 rounded-[20px]">
                WIP
              </span>
            )}
          </div>
          <span className="proj-arrow text-text-dim text-lg transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-cyan">
            ↗
          </span>
        </div>
        <h3 className="font-body text-xl font-medium text-text mb-2.5">
          {project.title}
        </h3>
        <p className="text-[13px] font-light text-text-dim leading-relaxed flex-1">
          {project.description}
        </p>
        <div className="proj-links flex gap-3 mt-5 flex-wrap relative z-10">
          {project.links.map((link, idx) => (
            <Button
              key={idx}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              variant="secondary"
              className="px-4 py-2 flex items-center gap-1.5 text-[10px]"
            >
              {link.icon === 'github' ? (
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  className="w-3 h-3 opacity-60"
                >
                  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
                </svg>
              ) : (
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  className="w-3 h-3 opacity-60"
                >
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                  <polyline points="15 3 21 3 21 9" />
                  <line x1="10" y1="14" x2="21" y2="3" />
                </svg>
              )}
              {link.label}
            </Button>
          ))}
        </div>
        <div className="proj-stack flex flex-wrap gap-1.5 mt-6 relative z-10">
          {project.stack.map((tech, idx) => (
            <span
              key={idx}
              className="font-mono text-[9px] text-text-dim tracking-[0.06em] border border-[rgba(232,237,242,0.1)] px-2 py-0.5 rounded"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  )
}
 
export default function Projects() {
  const featuredProject = projects.find((p) => p.featured)
  const regularProjects = projects.filter((p) => !p.featured)
 
  return (
    <section
      id="projects"
      className="projects relative z-[1] px-12 py-[100px] pb-[60px] max-w-[1100px] mx-auto max-md:px-6 max-md:py-20 max-md:pb-10"
    >
      <div className="projects-header mb-4">
        <motion.div
           initial={{ opacity: 0, x: -20 }}
           whileInView={{ opacity: 1, x: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.6 }}
           className="font-mono text-[10px] text-cyan tracking-[0.22em] uppercase mb-8 flex items-center gap-2.5"
        >
          <div className="w-4 h-px bg-cyan" />
          Projects
        </motion.div>
        <motion.h2
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.6, delay: 0.1 }}
           className="font-display text-[clamp(36px,5vw,58px)] leading-[1.05] text-text"
        >
          What I&apos;ve <em className="not-italic text-cyan">built</em>
        </motion.h2>
      </div>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="proj-narrative font-mono text-[10px] text-text-dim tracking-[0.1em] uppercase mb-14 flex items-center gap-2.5"
      >
        The problem · the tool · the product
        <div className="flex-1 h-px bg-gradient-to-r from-cyan-dim to-transparent" />
      </motion.div>
 
      {featuredProject && <ProjectCard project={featuredProject} />}
 
      <div className="proj-row grid grid-cols-2 gap-6 mt-0 max-md:grid-cols-1">
        {regularProjects.map((project, idx) => (
          <ProjectCard key={idx} project={project} />
        ))}
      </div>
    </section>
  )
}
