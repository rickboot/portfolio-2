'use client'

import { useEffect, useRef } from 'react'
import { useTheme } from './ThemeProvider'
import { createMulberry32, gaussian } from '@/utils/math'

export default function WaveCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const { theme } = useTheme()

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let W = 0
    let H = 0

    const rng = createMulberry32(7)

    const NUM_ROWS = 40;
    const NUM_SAMPLES = 160

    interface Row {
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

    let shockwaves: Array<{ pos: number; age: number }> = []
    let lastShock = 0
    let surges: Array<{ row: number; progress: number }> = []
    let t = 0

    function getRowScale(
      row: number,
      now: number
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

    function draw(now: number) {
      if (!ctx || !canvas) return
      // Clear with slight transparency for trail effect if desired, or just clear
      ctx.clearRect(0, 0, W, H)

      ctx.save()
      ctx.translate(W * 0.5, H * 0.5)
      ctx.rotate(-0.22)
      ctx.translate(-W * 0.5, -H * 0.5)

      const gridW = W * 1.3
      const gridH = H * 1.1
      const startX = (W - gridW) / 2
      const rowH = gridH / NUM_ROWS
      const peakH = rowH * 3.8
      const startY = (H - gridH) / 2

      // Theme-based colors
      const strokeColor = theme === 'dark' ? 'rgba(0,229,255,' : 'rgba(0,150,200,'
      const fillColor = theme === 'dark' ? 'rgba(4,6,8,1)' : 'rgba(248,249,250,1)'

      // 3. Draw Back-to-Front (Top-to-Bottom) so lower rows occlude higher rows
      for (let row = 0; row < NUM_ROWS; row++) {
        const baseY = startY + row * rowH
        const r = rows[row]
        const { breathL, breathC, breathT, shockBoost, surgeBoost } =
          getRowScale(row, now)

        const totalScale = 1 + shockBoost + surgeBoost
        const persp = row / (NUM_ROWS - 1)
        const perspWidth = 0.3 + persp * 0.8
        const perspAlpha = 0.1 + persp * 0.3

        const points: Array<{ x: number; y: number }> = []
        for (let i = 0; i <= NUM_SAMPLES; i++) {
          const nx = i / NUM_SAMPLES
          const edge = Math.min(nx / 0.04, (1 - nx) / 0.04, 1)
          let signal = 0
          signal += r.lAmp * breathL * totalScale * gaussian(nx, r.lMu, r.lSig)
          signal += r.cAmp * breathC * totalScale * gaussian(nx, r.cMu, r.cSig)
          signal += r.tAmp * breathT * totalScale * gaussian(nx, r.tMu, r.tSig)
          signal = Math.max(signal, 0)
          let noise = 0
          for (const n of r.noiseFreqs)
            noise += n.amp * Math.sin(nx * Math.PI * n.freq + n.phase)
          noise = Math.abs(noise) * 0.6
          const val = (signal + noise) * edge
          points.push({ x: startX + nx * gridW, y: baseY - val * peakH })
        }

        // Opaque fill: fills from the line down to the bottom of the screen
        ctx.beginPath()
        ctx.moveTo(points[0].x, points[0].y)
        for (let i = 1; i < points.length; i++) {
          ctx.lineTo(points[i].x, points[i].y)
        }
        // Extend down WAY below the bottom of the canvas to create a solid "wall"
        ctx.lineTo(points[points.length - 1].x, H + 500)
        ctx.lineTo(points[0].x, H + 500)
        ctx.closePath()
        ctx.fillStyle = fillColor
        ctx.fill()

        const bright = Math.min(
          0.6,
          perspAlpha + shockBoost * 0.5 + surgeBoost * 0.4
        )
        ctx.lineWidth = perspWidth
        ctx.strokeStyle = `${strokeColor}${bright})`
        ctx.beginPath()
        ctx.moveTo(points[0].x, points[0].y)
        for (let i = 1; i < points.length; i++)
          ctx.lineTo(points[i].x, points[i].y)
        ctx.stroke()
      }

      ctx.restore()
    }

    let lastTime = performance.now()
    function loop(now: number) {
      const dt = (now - lastTime) / 1000
      lastTime = now
      t += dt
      const sec = now / 1000

      if (sec - lastShock > 5.0 + Math.sin(t * 0.7) * 0.75) {
        shockwaves.push({ pos: 0, age: 0 })
        lastShock = sec
      }
      for (let i = shockwaves.length - 1; i >= 0; i--) {
        shockwaves[i].pos += dt * 0.18
        shockwaves[i].age += dt * 0.25
        if (shockwaves[i].pos > 1.2) shockwaves.splice(i, 1)
      }

      if (rng() < dt * 2.2) {
        const row = Math.floor(rng() * NUM_ROWS)
        surges.push({ row, progress: 0 })
      }
      for (let i = surges.length - 1; i >= 0; i--) {
        surges[i].progress += dt * 1.4
        if (surges[i].progress >= 1) surges.splice(i, 1)
      }

      draw(sec)
      requestAnimationFrame(loop)
    }

    const animationFrame = requestAnimationFrame(loop)

    const handleResize = () => {
      if (!canvas) return
      W = canvas.width = window.innerWidth
      H = canvas.height = window.innerHeight
    }

    // Initial resize
    handleResize()

    window.addEventListener('resize', handleResize)

    return () => {
      cancelAnimationFrame(animationFrame)
      window.removeEventListener('resize', handleResize)
    }
  }, [theme])

  return (
    <canvas
      ref={canvasRef}
      id="waveCanvas"
      className="fixed top-0 left-0 w-full h-full z-0 pointer-events-none"
    />
  )
}
