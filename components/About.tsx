'use client'


import Image from 'next/image'

export default function About() {
  return (
    <section
      id="about"
      className="about relative z-[1] px-12 py-[140px] pb-[120px] grid grid-cols-2 gap-20 max-w-[1200px] mx-auto max-md:grid-cols-1 max-md:gap-12 max-md:px-6 max-md:py-[100px] max-md:pb-20"
    >
      <div className="about-left flex flex-col">
        <div className="font-mono text-[10px] text-cyan tracking-[0.22em] uppercase mb-8 flex items-center gap-2.5">
          <div className="w-4 h-px bg-cyan" />
          About
        </div>
        <h2 className="font-display text-[clamp(36px,5vw,58px)] leading-[1.05] text-text mb-8">
          <em className="not-italic text-cyan">build</em> meets <em className="not-italic text-cyan">ship</em>
        </h2>
        <div className="relative w-[205px] h-[205px] max-md:w-[182px] max-md:h-[182px] rounded-lg overflow-hidden border border-[rgba(232,237,242,0.12)] [html.light_&]:border-[rgba(26,26,26,0.12)]">
          <Image
            src="/images/rick.png"
            alt="Rick Allen"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 182px, 205px"
          />
        </div>
      </div>
      <div className="about-right flex flex-col justify-center gap-7">
        <p className="text-[15px] font-light leading-[1.75] text-text-mid">
          I&apos;ve spent two decades in roles that don&apos;t usually overlap — someone who can follow the engineering, understand what&apos;s actually being built, and translate that into messaging and strategy that lands. At startups that meant wearing every hat. At larger companies it meant bridging the gap between teams.
        </p>
        <p className="text-[15px] font-light leading-[1.75] text-text-mid">
          I code, I architect, and I use AI tools to move faster. The product decisions, the tradeoffs, the positioning — that&apos;s still where the work is.
        </p>
        <p className="text-[15px] font-light leading-[1.75] text-text-mid">
          Currently working on AI memory elasticity at Phison. Previously at NVIDIA, Lambda Labs, Corsair, and ASUS. Hack Reactor for the engineering foundation.
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
