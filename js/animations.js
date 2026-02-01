// ═══ PULSAR GRID ═══
(function() {
  const canvas = document.getElementById('waveCanvas');
  const ctx = canvas.getContext('2d');
  let W, H;

  function mulberry32(a) {
    return function() {
      a |= 0; a = a + 0x6D2B79F5 | 0;
      var t = Math.imul(a ^ a >>> 15, 1 | a);
      t = t + Math.imul(t ^ t >>> 7, 61 | t) ^ t;
      return ((t ^ t >>> 17) >>> 0) / 4294967296;
    };
  }
  const rng = mulberry32(7);

  function gaussian(x, mu, sigma) {
    return Math.exp(-0.5 * ((x - mu) / sigma) ** 2);
  }

  const NUM_ROWS = 40;
  const NUM_SAMPLES = 160;

  // Per-row baked constants: unique frequencies, phases, base amplitudes
  const rows = [];
  for (let i = 0; i < NUM_ROWS; i++) {
    rows.push({
      // 3-component base shape positions (slight per-row variation)
      lMu: 0.33 + rng() * 0.06,  cMu: 0.48 + rng() * 0.04,  tMu: 0.62 + rng() * 0.06,
      lSig: 0.030 + rng() * 0.014, cSig: 0.026 + rng() * 0.012, tSig: 0.032 + rng() * 0.016,
      // Base amplitudes for each component
      lAmp: 0.25 + rng() * 0.25,  cAmp: 0.55 + rng() * 0.40,  tAmp: 0.30 + rng() * 0.30,
      // Unique oscillation params per row — these drive the life
      freq1: 0.4 + rng() * 1.2,   phase1: rng() * Math.PI * 2,
      freq2: 0.3 + rng() * 0.8,   phase2: rng() * Math.PI * 2,
      freq3: 0.5 + rng() * 1.0,   phase3: rng() * Math.PI * 2,
      // Smooth noise texture: a few baked sine waves per row
      noiseFreqs: [
        { freq: 2.1 + rng() * 3.0, phase: rng() * Math.PI * 2, amp: 0.008 + rng() * 0.010 },
        { freq: 4.5 + rng() * 5.0, phase: rng() * Math.PI * 2, amp: 0.004 + rng() * 0.006 },
        { freq: 7.0 + rng() * 6.0, phase: rng() * Math.PI * 2, amp: 0.002 + rng() * 0.004 }
      ]
    });
  }

  // Shockwaves: travel top→bottom, boost amplitude as they pass
  let shockwaves = [];
  let lastShock = 0;

  // Surges: random rows spike hard then decay
  let surges = []; // { row, progress (0→1), startTime }

  let t = 0;

  function getRowScale(row, now) {
    const r = rows[row];
    // Base breathing: each component oscillates at its own frequency
    // This is the primary "alive" motion — continuous, always moving
    const breathL = 0.7 + 0.3 * Math.sin(now * r.freq1 + r.phase1);
    const breathC = 0.7 + 0.3 * Math.sin(now * r.freq2 + r.phase2);
    const breathT = 0.7 + 0.3 * Math.sin(now * r.freq3 + r.phase3);

    // Shockwave contribution: gaussian falloff from wave position
    let shockBoost = 0;
    for (const sw of shockwaves) {
      const dist = row / NUM_ROWS - sw.pos;
      shockBoost += 1.8 * Math.exp(-dist * dist / (0.012)) * (1 - sw.age);
    }

    // Surge contribution
    let surgeBoost = 0;
    for (const s of surges) {
      if (s.row === row) {
        // Sharp attack, slow decay
        surgeBoost = 2.2 * Math.pow(1 - s.progress, 1.5);
      }
    }

    return { breathL, breathC, breathT, shockBoost, surgeBoost };
  }

  function draw(now) {
    W = canvas.width  = window.innerWidth;
    H = canvas.height = window.innerHeight;
    ctx.clearRect(0, 0, W, H);

    // Joy Division tilt
    ctx.save();
    ctx.translate(W * 0.5, H * 0.5);
    ctx.rotate(-0.22);
    ctx.translate(-W * 0.5, -H * 0.5);

    const gridW = W * 1.3;
    const gridH = H * 1.1;
    const startX = (W - gridW) / 2;
    const rowH   = gridH / NUM_ROWS;
    const peakH  = rowH * 3.8; // tall enough to overlap and collide
    const startY = (H - gridH) / 2;


    // Draw Back-to-Front (Top-to-Bottom) so lower rows occlude higher rows
    for (let row = 0; row < NUM_ROWS; row++) {
      const baseY = startY + row * rowH;
      const r = rows[row];
      const { breathL, breathC, breathT, shockBoost, surgeBoost } = getRowScale(row, now);

      const totalScale = 1 + shockBoost + surgeBoost;

      // Perspective: row 0 = top (thin/faint), row NUM_ROWS-1 = bottom (full)
      const persp = row / (NUM_ROWS - 1); // 0 at top, 1 at bottom
      const perspWidth = 0.3 + persp * 0.8;  // 0.3 → 1.1
      const perspAlpha = 0.10 + persp * 0.30; // 0.10 → 0.40 base

      const points = [];
      for (let i = 0; i <= NUM_SAMPLES; i++) {
        const nx = i / NUM_SAMPLES;
        // Edge envelope: fade to 0 at tips
        const edge = Math.min(nx / 0.04, (1 - nx) / 0.04, 1);
        // Signal: the 3 Gaussian peaks
        let signal = 0;
        signal += r.lAmp * breathL * totalScale * gaussian(nx, r.lMu, r.lSig);
        signal += r.cAmp * breathC * totalScale * gaussian(nx, r.cMu, r.cSig);
        signal += r.tAmp * breathT * totalScale * gaussian(nx, r.tMu, r.tSig);
        signal = Math.max(signal, 0);
        // Noise: always positive, added on top
        let noise = 0;
        for (const n of r.noiseFreqs) noise += n.amp * Math.sin(nx * Math.PI * n.freq + n.phase);
        noise = Math.abs(noise) * 0.6; // rectified, scaled down
        const val = (signal + noise) * edge;
        points.push({ x: startX + nx * gridW, y: baseY - val * peakH });
      }

      // Opaque fill: fills from the line down to the bottom of the screen
      // This is the robust "Painter's Algorithm" approach for 3D terrain:
      // drawing Back-to-Front, each new row covers everything behind it.
      ctx.beginPath();
      ctx.moveTo(points[0].x, points[0].y);
      for (let i = 1; i < points.length; i++) {
        ctx.lineTo(points[i].x, points[i].y);
      }
      // Extend down WAY below the bottom of the canvas to create a solid "wall"
      // The previous 'H' limit was occasionally exposing gaps during rotation.
      ctx.lineTo(points[points.length - 1].x, H + 500); 
      ctx.lineTo(points[0].x, H + 500);
      ctx.closePath();
      
      // Use the background color to "erase" what's behind
      ctx.fillStyle = 'rgba(4,6,8,1)';
      ctx.fill();

      // Stroke with perspective + shockwave/surge brightening
      const bright = Math.min(1, perspAlpha + shockBoost * 0.5 + surgeBoost * 0.4);
      ctx.lineWidth = perspWidth;
      ctx.strokeStyle = `rgba(0,229,255,${bright})`;
      ctx.beginPath();
      ctx.moveTo(points[0].x, points[0].y);
      for (let i = 1; i < points.length; i++) ctx.lineTo(points[i].x, points[i].y);
      ctx.stroke();
    }

    ctx.restore();
  }

  let lastTime = performance.now();
  function loop(now) {
    const dt = (now - lastTime) / 1000;
    lastTime = now;
    t += dt;
    const sec = now / 1000;

    // Spawn shockwaves every 2.5–4s
    if (sec - lastShock > 2.5 + Math.sin(t * 0.7) * 0.75) {
      shockwaves.push({ pos: 0, age: 0 });
      lastShock = sec;
    }
    // Advance and cull shockwaves
    for (let i = shockwaves.length - 1; i >= 0; i--) {
      shockwaves[i].pos += dt * 0.18; // sweeps full grid in ~5.5s
      shockwaves[i].age += dt * 0.25;
      if (shockwaves[i].pos > 1.2) shockwaves.splice(i, 1);
    }

    // Random surges: ~2 per second on average
    if (rng() < dt * 2.2) {
      const row = Math.floor(rng() * NUM_ROWS);
      surges.push({ row, progress: 0 });
    }
    // Advance and cull surges
    for (let i = surges.length - 1; i >= 0; i--) {
      surges[i].progress += dt * 1.4; // ~0.7s decay
      if (surges[i].progress >= 1) surges.splice(i, 1);
    }

    draw(sec);
    requestAnimationFrame(loop);
  }
  requestAnimationFrame(loop);

  // Handle window resize
  window.addEventListener('resize', () => {
    W = canvas.width = window.innerWidth;
    H = canvas.height = window.innerHeight;
  });
})();

// ═══ SCROLL REVEAL ═══
(function() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const siblings = Array.from(entry.target.parentElement.children);
        const idx = siblings.indexOf(entry.target);
        const delay = idx * 80;
        setTimeout(() => entry.target.classList.add('visible'), delay);
      }
    });
  }, { threshold: 0.12 });

  // Wait for DOM to be ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initScrollReveal);
  } else {
    initScrollReveal();
  }

  function initScrollReveal() {
    document.querySelectorAll('.exp-item, .proj-card, .proj-featured, .skill-item').forEach(el => observer.observe(el));
  }
})();

// ═══ SMOOTH SCROLL FOR NAV LINKS ═══
(function() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });
})();
