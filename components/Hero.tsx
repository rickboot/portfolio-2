'use client'

import { motion } from 'framer-motion'
import Button from './Button'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1] as const, // Custom easing from original design
    },
  },
}

export default function Hero() {
  return (
    <section className="hero relative z-[1] min-h-screen flex flex-col justify-end px-12 pb-[100px] max-md:px-6 max-md:pb-20 overflow-hidden">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="flex flex-col items-start"
      >
        {/* Label */}
        <motion.div
          variants={itemVariants}
          className="font-mono text-[11px] text-cyan tracking-[0.2em] uppercase mb-6 flex items-center gap-3"
        >
          <div className="w-6 h-px bg-cyan" />
          SW Engineering · Product Marketing · AI Infrastructure
        </motion.div>

        {/* Title */}
        <motion.h1
          variants={itemVariants}
          className="font-display text-[clamp(56px,8vw,112px)] leading-[0.9] tracking-[-0.02em] text-text max-w-[900px]"
        >
          I build the thing<br />
          and tell its <em className="not-italic text-cyan">story</em>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          variants={itemVariants}
          className="mt-9 max-w-[440px] text-base font-light leading-relaxed text-text-mid tracking-[0.01em]"
        >
          20+ years at the intersection of engineering and product strategy. I write the code, understand the architecture, and translate it into something the market can act on.
        </motion.p>

        {/* CTA */}
        <motion.div variants={itemVariants} className="mt-12 flex gap-4 items-center">
          <Button href="mailto:rickallen@gmail.com">
            Email
          </Button>
          <Button
            href="https://www.linkedin.com/in/rickallen7/"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </Button>
          <Button
            href="https://github.com/rickboot"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </Button>
        </motion.div>
      </motion.div>

      {/* Scroll Hint */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 1 }}
        className="absolute bottom-10 right-12 max-md:right-6 max-md:bottom-8 font-mono text-[10px] text-text-dim tracking-[0.15em] uppercase [writing-mode:vertical-rl] flex items-center gap-2.5"
      >
        Scroll
        <div className="w-px h-10 bg-gradient-to-b from-cyan to-transparent animate-scrollPulse" />
      </motion.div>
    </section>
  )
}
