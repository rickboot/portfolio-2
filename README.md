# Rick Allen — Software Engineering Portfolio

A high-performance, interactive portfolio website built with **Next.js 14**, **TypeScript**, and **Tailwind CSS**. Designed to be visually distinct with custom canvas animations, smooth interactions, and a premium "dark mode first" aesthetic.

**Live Site**: [rickallen.dev](https://rickallen.dev)

---

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **UI/Styling**: Tailwind CSS, CSS Variables
- **Language**: TypeScript
- **Animation**: HTML5 Canvas (Custom Wave Implementation), CSS Transforms
- **State**: React Context (Theme), Custom Hooks

---

## Features

- **⚡ Performance First**: Zero heavy animation libraries. All visuals are powered by optimized HTML5 Canvas and native CSS keyframes.
- **� Dynamic Theming**: Robust Dark/Light mode system with smooth CSS variable transitions and persistent state.
- **🌊 Custom Visuals**: Procedural "Wave" background animation using 2D Canvas context, optimized for frame rate and battery life.
- **📱 Fully Responsive**: Adaptive layouts with a dedicated mobile navigation system and touch-friendly interactions.
- **✨ Interaction Design**: Custom `useScrollReveal` hooks for high-performance scroll animations without layout thrashing.

## Getting Started

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Run the development server**:
   ```bash
   npm run dev
   ```

3. **Build for production**:
   ```bash
   npm run build
   ```

## Project Structure

```
portfolio-deux/
├── app/                  # Next.js App Router
├── components/           # React Components
│   ├── WaveCanvas.tsx    # Optimized Background Animation
│   ├── ThemeToggle.tsx   # Light/Dark Mode Switcher
│   └── ...
├── hooks/                # Custom Hooks (useSmoothScroll, useScrollReveal)
└── utils/                # Math helpers for animations
```

## License

Private — All rights reserved.
