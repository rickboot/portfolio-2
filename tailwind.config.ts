import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        bg: {
          DEFAULT: '#040608',
          light: '#f8f9fa',
        },
        cyan: {
          DEFAULT: '#00e5ff',
          dim: 'rgba(0,229,255,0.15)',
          glow: 'rgba(0,229,255,0.08)',
        },
        text: {
          DEFAULT: '#e8edf2',
          dim: 'rgba(232,237,242,0.42)',
          mid: 'rgba(232,237,242,0.68)',
        },
        textLight: {
          DEFAULT: '#1a1a1a',
          dim: 'rgba(26,26,26,0.6)',
          mid: 'rgba(26,26,26,0.8)',
        },
      },
      fontFamily: {
        mono: ['var(--font-mono)', 'monospace'],
        display: ['var(--font-display)', 'sans-serif'],
        body: ['var(--font-body)', 'sans-serif'],
      },
      keyframes: {
        scrollPulse: {
          '0%, 100%': { opacity: '0.3', transform: 'scaleY(0.6)' },
          '50%': { opacity: '1', transform: 'scaleY(1)' },
        },
      },
      animation: {
        scrollPulse: 'scrollPulse 2s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}
export default config
