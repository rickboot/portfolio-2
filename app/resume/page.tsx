import type { Metadata } from 'next'
import ResumePage from './ResumePage'

export const metadata: Metadata = {
  title: 'Resume — Rick Allen',
  description:
    'Full resume: product, solutions, and partner marketing, PR and communications, events, semiconductors, PC hardware, AI infrastructure, and software engineering.',
}

export default function Page() {
  return <ResumePage />
}
