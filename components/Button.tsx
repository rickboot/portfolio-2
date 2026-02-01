'use client'

import React from 'react'

interface ButtonProps {
  href: string
  children: React.ReactNode
  variant?: 'primary' | 'secondary'
  className?: string
  target?: string
  rel?: string
}

export default function Button({
  href,
  children,
  variant = 'secondary',
  className = '',
  target,
  rel,
}: ButtonProps) {
  const baseStyles =
    'font-mono text-[11px] font-normal no-underline tracking-[0.1em] uppercase px-6 py-3 rounded-md transition-all duration-300 backdrop-blur-[2px]'

  const variants = {
    primary:
      'text-cyan border btn-border-primary hover:border-cyan hover:text-cyan hover:bg-cyan-glow bg-[rgba(232,237,242,0.01)] [html.light_&]:text-[#0096c8] [html.light_&]:border-[#0096c8] [html.light_&]:hover:border-[#0096c8] [html.light_&]:hover:text-[#0096c8] [html.light_&]:bg-[rgba(0,150,200,0.05)]',
    secondary:
      'text-text border btn-border-secondary hover:border-cyan hover:text-cyan hover:bg-cyan-glow bg-[rgba(232,237,242,0.01)] [html.light_&]:hover:text-black/80 [html.light_&]:bg-[rgba(26,26,26,0.01)]',
  }

  return (
    <a
      href={href}
      target={target}
      rel={rel}
      className={`${baseStyles} ${variants[variant]} ${className}`}
    >
      {children}
    </a>
  )
}
