# Utilities

This directory contains utility functions and helpers used throughout the application.

## math.ts

Mathematical utility functions:

- `createMulberry32(seed)`: Creates a deterministic PRNG (Pseudo-Random Number Generator) using the Mulberry32 algorithm
- `gaussian(x, mu, sigma)`: Calculates Gaussian function values for wave animations

## waveAnimation.ts

Wave animation utilities and types:

- `initializeRows(seed)`: Initializes rows with random parameters for wave animation
- `getRowScale(row, rows, now, shockwaves, surges)`: Calculates row scale factors for animation
- `updateAnimationEffects(...)`: Updates shockwaves and surges for animation loop

These utilities are used by the `WaveCanvas` component to create the animated background effect.
