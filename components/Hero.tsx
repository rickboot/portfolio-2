'use client'

import { motion } from 'framer-motion'

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
          Engineer · Product Marketing · AI Infrastructure
        </motion.div>

        {/* Title */}
        <motion.h1
          variants={itemVariants}
          className="font-display text-[clamp(72px,11vw,148px)] leading-[0.9] tracking-[-0.02em] text-text max-w-[900px]"
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
          <a
            href="mailto:rickallen@gmail.com"
            className="font-mono text-[11px] font-normal text-text no-underline tracking-[0.1em] uppercase border border-[rgba(232,237,242,0.2)] px-6 py-3 rounded-md transition-all duration-300 hover:border-cyan hover:text-cyan hover:bg-cyan-glow"
          >
            Email
          </a>
          <a
            href="https://drive.google.com/file/d/17BbUlqIwkmL7JTemTS8xkmhlOEqedeq0/view?usp=drive_link"
            target="_blank"
            className="font-mono text-[11px] font-normal text-cyan no-underline tracking-[0.1em] uppercase border border-cyan px-6 py-3 rounded-md transition-all duration-300 hover:bg-cyan hover:text-bg shadow-[0_0_10px_rgba(0,229,255,0.1)] hover:shadow-[0_0_20px_rgba(0,229,255,0.4)]"
          >
            Resume
          </a>
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
