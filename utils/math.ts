/**
 * Mulberry32 PRNG - fast, deterministic random number generator
 */
export function createMulberry32(seed: number) {
  let a = seed
  return function () {
    a |= 0
    a = (a + 0x6d2b79f5) | 0
    let t = Math.imul(a ^ (a >>> 15), 1 | a)
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t
    return ((t ^ (t >>> 17)) >>> 0) / 4294967296
  }
}

/**
 * Gaussian function for wave calculations
 */
export function gaussian(x: number, mu: number, sigma: number): number {
  return Math.exp(-0.5 * ((x - mu) / sigma) ** 2)
}
