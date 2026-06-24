'use client';

/**
 * AuroraBackground.tsx — Pixel-perfect match to ahmedali.online hero
 * ──────────────────────────────────────────────────────────────────────
 * From the reference site HTML inspection:
 *   - Base bg: #0A0A0A
 *   - Mobile glow (CSS only): radial-gradient(ellipse at 50% 30%, rgba(79,255,176,0.12) 0%, transparent 60%)
 *   - Desktop Layer 1 (z-0, opacity-0.40): Aurora orb canvas (MorphingCanvas)
 *   - Desktop Layer 2 (z-2, opacity-0.25): Interactive mouse canvas
 *
 * From screenshot analysis:
 *   - CENTER: Large soft mint-green glow (50% x, ~30-35% y from top)
 *   - LEFT EDGE: Blue-violet glow bleeding in from left
 *   - RIGHT EDGE: Blue-violet glow bleeding in from right
 *   - PARTICLES: Small white diagonal dashes (~45°), very subtle
 *
 * Implementation — two CSS blobs + one canvas for dashes:
 */

import { useRef, useEffect } from 'react';

interface Dash {
  x: number; y: number;
  vx: number; vy: number;
  dvx: number; dvy: number;
  len: number;
  angle: number;
  baseAlpha: number;
  alpha: number;
}

const DASH_COUNT  = 75;
const DRIFT_VX    = -0.10;
const DRIFT_VY    = -0.18;
const REPEL_R     = 110;
const RETURN_EASE = 0.055;

export function AuroraBackground() {
  const canvasRef  = useRef<HTMLCanvasElement>(null);
  const glowRef    = useRef<HTMLDivElement>(null);
  const rafRef     = useRef<number>(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d', { alpha: true });
    if (!ctx) return;

    let W = 0, H = 0;
    const resize = () => {
      W = canvas.width  = canvas.offsetWidth;
      H = canvas.height = canvas.offsetHeight;
    };
    resize();
    const ro = new ResizeObserver(resize);
    ro.observe(canvas);

    /* Mouse tracking */
    const raw   = { x: 0.5, y: 0.30 };
    const lerp  = { x: 0.5, y: 0.30 };
    const mpx   = { x: -9999, y: -9999 };

    const onMouse = (e: MouseEvent) => {
      const r = canvas.getBoundingClientRect();
      raw.x  = (e.clientX - r.left) / (r.width  || 1);
      raw.y  = (e.clientY - r.top)  / (r.height || 1);
      mpx.x  = e.clientX - r.left;
      mpx.y  = e.clientY - r.top;
    };
    window.addEventListener('mousemove', onMouse, { passive: true });

    /* Particles */
    const mkDash = (): Dash => {
      const sign  = Math.random() > 0.5 ? 1 : -1;
      const angle = sign * (Math.PI / 4) + (Math.random() - 0.5) * 0.3;
      const a     = 0.08 + Math.random() * 0.28;
      return {
        x: Math.random() * (W || 1440),
        y: Math.random() * (H || 900),
        vx: DRIFT_VX * (0.5 + Math.random()),
        vy: DRIFT_VY * (0.5 + Math.random()),
        dvx: 0, dvy: 0,
        len: 8 + Math.random() * 10,
        angle,
        baseAlpha: a,
        alpha: a,
      };
    };
    const dashes: Dash[] = Array.from({ length: DASH_COUNT }, mkDash);

    const tick = () => {
      /* Lerp glow */
      lerp.x += (raw.x - lerp.x) * 0.05;
      lerp.y += (raw.y - lerp.y) * 0.05;
      if (glowRef.current) {
        glowRef.current.style.left = `${lerp.x * 100}%`;
        glowRef.current.style.top  = `${lerp.y * 100}%`;
      }

      ctx.clearRect(0, 0, W, H);

      dashes.forEach(d => {
        const dx   = d.x - mpx.x;
        const dy   = d.y - mpx.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        const near = dist < REPEL_R && mpx.x > 0;
        if (near) {
          const n = Math.max(dist, 1);
          const f = ((REPEL_R - dist) / REPEL_R) * 2.0;
          d.dvx += (dx / n) * f * 0.04;
          d.dvy += (dy / n) * f * 0.04;
          d.alpha = Math.min(0.65, d.baseAlpha + (1 - dist / REPEL_R) * 0.35);
        } else {
          d.alpha += (d.baseAlpha - d.alpha) * 0.04;
        }
        d.dvx *= (1 - RETURN_EASE);
        d.dvy *= (1 - RETURN_EASE);
        d.x   += d.vx + d.dvx;
        d.y   += d.vy + d.dvy;
        if (d.x < -20)    d.x = W + 15;
        if (d.x > W + 20) d.x = -15;
        if (d.y < -20)    { const nd = mkDash(); d.x = Math.random() * W; d.y = H + 10; d.vx = nd.vx; d.vy = nd.vy; d.angle = nd.angle; d.len = nd.len; d.baseAlpha = nd.baseAlpha; d.alpha = 0; }
        if (d.y > H + 20) d.y = -15;

        const ex = d.x + Math.cos(d.angle) * d.len;
        const ey = d.y + Math.sin(d.angle) * d.len;
        const g  = ctx.createLinearGradient(d.x, d.y, ex, ey);
        g.addColorStop(0,   'rgba(255,255,255,0)');
        g.addColorStop(0.5, `rgba(255,255,255,${d.alpha.toFixed(3)})`);
        g.addColorStop(1,   'rgba(255,255,255,0)');
        ctx.save();
        ctx.strokeStyle = g;
        ctx.lineWidth = 1.3;
        ctx.lineCap = 'round';
        ctx.beginPath();
        ctx.moveTo(d.x, d.y);
        ctx.lineTo(ex, ey);
        ctx.stroke();
        ctx.restore();
      });

      /* Bottom fade */
      const bf = ctx.createLinearGradient(0, H * 0.68, 0, H);
      bf.addColorStop(0, 'rgba(10,10,10,0)');
      bf.addColorStop(1, 'rgba(10,10,10,1)');
      ctx.fillStyle = bf;
      ctx.fillRect(0, H * 0.68, W, H * 0.32);

      rafRef.current = requestAnimationFrame(tick);
    };
    rafRef.current = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(rafRef.current);
      window.removeEventListener('mousemove', onMouse);
      ro.disconnect();
    };
  }, []);

  return (
    <>
      {/* ── STATIC GLOW LAYER (CSS divs — pixel-perfect match to reference) ── */}
      <div
        className="absolute inset-0 overflow-hidden"
        style={{ zIndex: 0, background: '#0A0A0A' }}
      >
        {/*
          From screenshot analysis of ahmedali.online:
          1. Centre mint-green glow at 50% x, ~30% y from top
          2. Left-edge blue-violet bleeding from outside left
          3. Right-edge blue-violet bleeding from outside right
        */}

        {/* ① Central mint-green glow — matches "radial-gradient(ellipse at 50% 30%, rgba(79,255,176,0.12))" */}
        <div
          className="absolute rounded-full"
          style={{
            width: '80vw', maxWidth: 900,
            height: '70vh', maxHeight: 700,
            top: '50%', left: '50%',
            transform: 'translate(-50%, -60%)',
            background: 'radial-gradient(ellipse, rgba(79,255,176,0.18) 0%, rgba(79,255,176,0.07) 40%, transparent 70%)',
            filter: 'blur(80px)',
            animation: 'breathe 7s ease-in-out infinite',
          }}
        />

        {/* ② Left-edge blue-violet glow (visible in screenshot as blue haze on left) */}
        <div
          className="absolute"
          style={{
            width: '45vw', maxWidth: 550,
            height: '100%',
            top: 0, left: '-18%',
            background: 'radial-gradient(ellipse at 0% 40%, rgba(79,70,229,0.28) 0%, rgba(79,70,229,0.10) 40%, transparent 70%)',
            filter: 'blur(70px)',
            animation: 'breathe 9s ease-in-out infinite reverse',
          }}
        />

        {/* ③ Right-edge blue-violet glow (mirror of left) */}
        <div
          className="absolute"
          style={{
            width: '45vw', maxWidth: 550,
            height: '100%',
            top: 0, right: '-18%',
            background: 'radial-gradient(ellipse at 100% 40%, rgba(79,70,229,0.28) 0%, rgba(79,70,229,0.10) 40%, transparent 70%)',
            filter: 'blur(70px)',
            animation: 'breathe 9s ease-in-out infinite',
            animationDelay: '-4s',
          }}
        />

        {/* ④ Subtle deep violet secondary blob upper-left (adds depth) */}
        <div
          className="absolute rounded-full"
          style={{
            width: '40vw', maxWidth: 500,
            height: '50vh', maxHeight: 450,
            top: '-5%', left: '5%',
            background: 'radial-gradient(ellipse, rgba(100,30,200,0.14) 0%, transparent 65%)',
            filter: 'blur(90px)',
            animation: 'breathe 11s ease-in-out infinite',
            animationDelay: '-6s',
          }}
        />

        {/* ⑤ Mouse-tracking glow (Lerp-smoothed) */}
        <div
          ref={glowRef}
          className="absolute rounded-full pointer-events-none"
          style={{
            width: 450, height: 450,
            transform: 'translate(-50%, -50%)',
            background: 'radial-gradient(circle, rgba(79,255,176,0.09) 0%, rgba(79,255,176,0.03) 50%, transparent 70%)',
            filter: 'blur(70px)',
          }}
        />

        {/* ⑥ Bottom fade — seamless transition to next section */}
        <div
          className="absolute bottom-0 left-0 right-0 pointer-events-none"
          style={{
            height: '32%',
            background: 'linear-gradient(to bottom, transparent 0%, #0A0A0A 100%)',
            zIndex: 5,
          }}
        />
      </div>

      {/* ── CANVAS — white diagonal particle dashes only ── */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full pointer-events-none"
        style={{ zIndex: 1 }}
      />
    </>
  );
}
