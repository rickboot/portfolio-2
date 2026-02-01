import { createMulberry32, gaussian } from './math'

export interface Row {
  lMu: number
  cMu: number
  tMu: number
  lSig: number
  cSig: number
  tSig: number
  lAmp: number
  cAmp: number
  tAmp: number
  freq1: number
  phase1: number
  freq2: number
  phase2: number
  freq3: number
  phase3: number
  noiseFreqs: Array<{ freq: number; phase: number; amp: number }>
}

export interface Shockwave {
  pos: number
  age: number
}

export interface Surge {
  row: number
  progress: number
}

export const NUM_ROWS = 80
export const NUM_SAMPLES = 160

/**
 * Initialize rows with random parameters for wave animation
 */
export function initializeRows(seed: number = 7): Row[] {
  const rng = createMulberry32(seed)
  const rows: Row[] = []

  for (let i = 0; i < NUM_ROWS; i++) {
    rows.push({
      lMu: 0.33 + rng() * 0.06,
      cMu: 0.48 + rng() * 0.04,
      tMu: 0.62 + rng() * 0.06,
      lSig: 0.03 + rng() * 0.014,
      cSig: 0.026 + rng() * 0.012,
      tSig: 0.032 + rng() * 0.016,
      lAmp: 0.25 + rng() * 0.25,
      cAmp: 0.55 + rng() * 0.4,
      tAmp: 0.3 + rng() * 0.3,
      freq1: 0.4 + rng() * 1.2,
      phase1: rng() * Math.PI * 2,
      freq2: 0.3 + rng() * 0.8,
      phase2: rng() * Math.PI * 2,
      freq3: 0.5 + rng() * 1.0,
      phase3: rng() * Math.PI * 2,
      noiseFreqs: [
        {
          freq: 2.1 + rng() * 3.0,
          phase: rng() * Math.PI * 2,
          amp: 0.008 + rng() * 0.01,
        },
        {
          freq: 4.5 + rng() * 5.0,
          phase: rng() * Math.PI * 2,
          amp: 0.004 + rng() * 0.006,
        },
        {
          freq: 7.0 + rng() * 6.0,
          phase: rng() * Math.PI * 2,
          amp: 0.002 + rng() * 0.004,
        },
      ],
    })
  }

  return rows
}

/**
 * Calculate row scale factors for animation
 */
export function getRowScale(
  row: number,
  rows: Row[],
  now: number,
  shockwaves: Shockwave[],
  surges: Surge[]
): {
  breathL: number
  breathC: number
  breathT: number
  shockBoost: number
  surgeBoost: number
} {
  const r = rows[row]
  const breathL = 0.7 + 0.3 * Math.sin(now * r.freq1 + r.phase1)
  const breathC = 0.7 + 0.3 * Math.sin(now * r.freq2 + r.phase2)
  const breathT = 0.7 + 0.3 * Math.sin(now * r.freq3 + r.phase3)

  let shockBoost = 0
  for (const sw of shockwaves) {
    const dist = row / NUM_ROWS - sw.pos
    shockBoost += 1.8 * Math.exp(-(dist * dist) / 0.012) * (1 - sw.age)
  }

  let surgeBoost = 0
  for (const s of surges) {
    if (s.row === row) {
      surgeBoost = 2.2 * Math.pow(1 - s.progress, 1.5)
    }
  }

  return { breathL, breathC, breathT, shockBoost, surgeBoost }
}

/**
 * Update shockwaves and surges for animation loop
 */
export function updateAnimationEffects(
  dt: number,
  t: number,
  shockwaves: Shockwave[],
  surges: Surge[],
  lastShock: number,
  rng: () => number
): {
  newShockwaves: Shockwave[]
  newSurges: Surge[]
  newLastShock: number
} {
  const sec = performance.now() / 1000
  const newShockwaves = [...shockwaves]
  const newSurges = [...surges]
  let newLastShock = lastShock

  // Spawn shockwaves every 2.5–4s
  if (sec - newLastShock > 2.5 + Math.sin(t * 0.7) * 0.75) {
    newShockwaves.push({ pos: 0, age: 0 })
    newLastShock = sec
  }

  // Advance and cull shockwaves
  for (let i = newShockwaves.length - 1; i >= 0; i--) {
    newShockwaves[i].pos += dt * 0.18
    newShockwaves[i].age += dt * 0.25
    if (newShockwaves[i].pos > 1.2) {
      newShockwaves.splice(i, 1)
    }
  }

  // Random surges: ~2 per second on average
  if (rng() < dt * 2.2) {
    const row = Math.floor(rng() * NUM_ROWS)
    newSurges.push({ row, progress: 0 })
  }

  // Advance and cull surges
  for (let i = newSurges.length - 1; i >= 0; i--) {
    newSurges[i].progress += dt * 1.4
    if (newSurges[i].progress >= 1) {
      newSurges.splice(i, 1)
    }
  }

  return {
    newShockwaves,
    newSurges,
    newLastShock,
  }
}
