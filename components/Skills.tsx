'use client'

import { motion } from 'framer-motion'

const skillCategories = [
  {
    name: 'AI Systems',
    context: 'Inference runtime orchestration and RAG architectures.',
    items: ['Ollama', 'OpenAI API', 'Llama 3.1 / LLaVA', 'ChromaDB', 'RAG Pipelines'],
  },
  {
    name: 'Frontend',
    context: 'Modern, component-driven interfaces alongside complex state.',
    items: ['React', 'Next.js', 'TypeScript', 'Vite', 'Tailwind CSS', 'Framer Motion'],
  },
  {
    name: 'Backend',
    context: 'High-performance API design and real-time streaming.',
    items: ['Python', 'FastAPI', 'Node.js', 'Express', 'WebSocket'],
  },
  {
    name: 'Data & Infrastructure',
    context: 'Containerized deployment, persistent state, and telemetry.',
    items: ['Docker', 'AWS', 'PostgreSQL', 'MongoDB', 'Prisma', 'System Telemetry'],
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  },
}

export default function Skills() {
  return (
    <section
      id="skills"
      className="skills relative z-[1] px-12 py-[100px] pb-[100px] max-w-[1000px] mx-auto max-md:px-6 max-md:py-20 max-md:pb-[80px]"
    >
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="font-mono text-[10px] text-cyan tracking-[0.22em] uppercase mb-12 flex items-center gap-2.5"
      >
        <div className="w-4 h-px bg-cyan" />
        Tech Stack
      </motion.div>

      <div className="flex flex-col gap-16">
        {skillCategories.map((category, idx) => (
          <motion.div
            key={idx}
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
            className="skill-category"
          >
            <div className="mb-5">
              <h3 className="font-display text-2xl text-text mb-2 text-cyan-dim">{category.name}</h3>
              <p className="font-light text-sm text-text-dim">{category.context}</p>
            </div>
            <div className="flex flex-wrap gap-2.5">
              {category.items.map((skill, sIdx) => (
                <motion.div
                  key={sIdx}
                  variants={itemVariants}
                  className="skill-item font-mono text-[11px] text-text-mid tracking-[0.04em] border border-[rgba(232,237,242,0.08)] px-3.5 py-2 rounded-md bg-[rgba(232,237,242,0.02)] backdrop-blur-sm hover:border-cyan-dim hover:text-cyan hover:bg-cyan-glow transition-colors duration-300 cursor-default"
                >
                  {skill}
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
