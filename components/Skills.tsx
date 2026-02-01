'use client'

import { motion } from 'framer-motion'

const skills = [
  'React',
  'Next.js',
  'TypeScript',
  'Node.js',
  'Python',
  'FastAPI',
  'HTML / CSS',
  'JavaScript',
  'Tailwind CSS',
  'Git',
  'MongoDB',
  'PostgreSQL',
  'Redux',
  'Express',
  'Docker',
  'AWS',
  'Prisma',
  'Framer Motion',
  'OpenAI API',
  'Ollama',
  'ChromaDB',
  'RAG',
  'WebSocket',
  'Vite',
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
      delayChildren: 0.1,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 15 },
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
      className="skills relative z-[1] px-12 py-20 pb-[100px] max-w-[1000px] mx-auto max-md:px-6 max-md:py-15 max-md:pb-20"
    >
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="font-mono text-[10px] text-cyan tracking-[0.22em] uppercase mb-8 flex items-center gap-2.5"
      >
        <div className="w-4 h-px bg-cyan" />
        Skills
      </motion.div>
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-50px' }}
        className="skills-grid grid grid-cols-[repeat(auto-fill,minmax(140px,1fr))] gap-2.5 mt-0 max-md:grid-cols-[repeat(auto-fill,minmax(120px,1fr))]"
      >
        {skills.map((skill, idx) => (
          <motion.div
            key={idx}
            variants={itemVariants}
            className="skill-item font-mono text-[11px] text-text-mid tracking-[0.04em] border border-[rgba(232,237,242,0.08)] px-3.5 py-2.5 rounded-md bg-[rgba(232,237,242,0.02)] backdrop-blur-sm hover:border-cyan-dim hover:text-cyan hover:bg-cyan-glow transition-colors duration-300 cursor-default"
          >
            {skill}
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}
