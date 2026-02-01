'use client'

import WaveCanvas from '@/components/WaveCanvas'
import Nav from '@/components/Nav'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Projects from '@/components/Projects'
import Skills from '@/components/Skills'
import Experience from '@/components/Experience'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'
import SignalDivider from '@/components/SignalDivider'
import { useSmoothScroll } from '@/hooks/useSmoothScroll'

export default function Home() {
  // Enable smooth scroll for anchor links globally
  useSmoothScroll()

  return (
    <>
      <WaveCanvas />
      <Nav />
      <Hero />
      <SignalDivider />
      <About />
      <SignalDivider />
      <Projects />
      <SignalDivider />
      <Skills />
      <SignalDivider />
      <Experience />
      <SignalDivider />
      <Contact />
      <Footer />
    </>
  )
}
