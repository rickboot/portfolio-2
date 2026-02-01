'use client'

import { useEffect, useRef } from 'react'

export default function About() {
  return (
    <section
      id="about"
      className="about relative z-[1] px-12 py-[140px] pb-[120px] grid grid-cols-2 gap-20 max-w-[1200px] mx-auto max-md:grid-cols-1 max-md:gap-12 max-md:px-6 max-md:py-[100px] max-md:pb-20"
    >
      <div className="about-left">
        <div className="font-mono text-[10px] text-cyan tracking-[0.22em] uppercase mb-8 flex items-center gap-2.5">
          <div className="w-4 h-px bg-cyan" />
          About
        </div>
        <h2 className="font-display text-[clamp(36px,5vw,58px)] leading-[1.05] text-text">
          The rare overlap<br />
          between <em className="not-italic text-cyan">build</em>
          <br />
          and <em className="not-italic text-cyan">ship</em>
        </h2>
      </div>
      <div className="about-right flex flex-col justify-center gap-7">
        <p className="text-[15px] font-light leading-[1.75] text-text-mid">
          Most companies have engineers who build and marketers who position. I do both — and the products are better for it. I can read the engineering specs, ask the right questions, and write the messaging that actually lands. At startups, that means I'm the whole loop. At larger companies, it means I bridge the gap everyone else avoids.
        </p>
        <p className="text-[15px] font-light leading-[1.75] text-text-mid">
          Currently shipping an AI memory elasticity platform. Previously at NVIDIA, Lambda Labs, Corsair, and ASUS. Hack Reactor for the engineering fundamentals.
        </p>
        <div className="stat-row flex gap-12 mt-3 max-md:gap-8">
          <div className="stat flex flex-col gap-1">
            <div className="stat-num font-display text-[32px] text-cyan">20+</div>
            <div className="stat-label font-mono text-[10px] text-text-dim tracking-[0.12em] uppercase">
              Years
            </div>
          </div>
          <div className="stat flex flex-col gap-1">
            <div className="stat-num font-display text-[32px] text-cyan">10+</div>
            <div className="stat-label font-mono text-[10px] text-text-dim tracking-[0.12em] uppercase">
              Companies
            </div>
          </div>
          <div className="stat flex flex-col gap-1">
            <div className="stat-num font-display text-[32px] text-cyan">2</div>
            <div className="stat-label font-mono text-[10px] text-text-dim tracking-[0.12em] uppercase">
              Skill Sets
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
