import Button from './Button'

export default function Contact() {
  return (
    <section
      id="contact"
      className="contact relative z-[1] px-12 py-[120px] pb-[160px] max-w-[800px] mx-auto text-center max-md:px-6 max-md:py-[100px] max-md:pb-[120px]"
    >
      <div className="font-mono text-[10px] text-cyan tracking-[0.22em] uppercase mb-8 flex items-center justify-center gap-2.5">
        <div className="w-4 h-px bg-cyan" />
        Contact
      </div>
      <h2 className="font-display text-[clamp(42px,7vw,80px)] leading-none text-text mb-6">
        Let&apos;s <em className="not-italic text-cyan">talk</em>
      </h2>
      <p className="text-[15px] font-light text-text-mid mb-11 leading-relaxed">
        Happy to talk about AI infrastructure, product marketing strategy, AI/web development, or anything at the intersection of the two. Or trade dad jokes.
      </p>
      <div className="contact-links flex justify-center gap-4 flex-wrap">
        <Button href="mailto:rickallen@gmail.com" variant="primary">
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

      </div>
    </section>
  )
}
