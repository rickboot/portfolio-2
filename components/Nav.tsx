import { useState, useEffect } from 'react'
import ThemeToggle from './ThemeToggle'

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false)

  // Prevent scrolling when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isOpen])

  const links = [
    { href: '#about', label: 'About' },
    { href: '#projects', label: 'Projects' },
    { href: '#skills', label: 'Skills' },
    { href: '#experience', label: 'Experience' },
    { href: '#contact', label: 'Contact' },
  ]

  return (
    <nav className="fixed top-0 left-0 w-full z-[100] px-12 py-7 flex items-center justify-between max-md:px-6 max-md:py-5">
      <div className="font-mono text-[13px] font-normal text-text uppercase tracking-[0.08em] relative z-[102]">
        Rick<span className="text-cyan">.</span>Allen
      </div>

      {/* Desktop Navigation */}
      <div className="flex items-center gap-8 max-md:hidden">
        <div className="flex gap-8">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="font-mono text-[11px] font-normal text-text-dim hover:text-cyan no-underline tracking-[0.12em] uppercase transition-colors duration-300"
            >
              {link.label}
            </a>
          ))}
        </div>
        <ThemeToggle />
      </div>

      {/* Mobile Toggle & Theme */}
      <div className="hidden max-md:flex items-center gap-5 z-[102]">
        <ThemeToggle />
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex flex-col gap-1.5 w-8 items-end group"
          aria-label="Toggle Menu"
        >
          <span
            className={`h-[1px] bg-text w-full transition-all duration-300 ${
              isOpen ? 'rotate-45 translate-y-[7px]' : ''
            }`}
          />
          <span
            className={`h-[1px] bg-text w-2/3 transition-all duration-300 ${
              isOpen ? 'opacity-0' : 'group-hover:w-full'
            }`}
          />
          <span
            className={`h-[1px] bg-text w-full transition-all duration-300 ${
              isOpen ? '-rotate-45 -translate-y-[7px]' : ''
            }`}
          />
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 bg-bg z-[101] flex flex-col items-center justify-center gap-8 transition-all duration-500 max-md:flex ${
          isOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'
        } md:hidden`}
      >
        {links.map((link) => (
          <a
            key={link.label}
            href={link.href}
            onClick={() => setIsOpen(false)}
            className="font-display text-4xl text-text hover:text-cyan transition-colors duration-300"
          >
            {link.label}
          </a>
        ))}
      </div>
    </nav>
  )
}
