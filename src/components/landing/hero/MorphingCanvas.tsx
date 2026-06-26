'use client';

/**
 * MorphingCanvas.tsx
 * ──────────────────
 * Interactive HTML5 Canvas — 90 white particles that float slowly upward.
 * When mouse is within 140px of a particle, it:
 *   1. Swells in size (baseSize → +5px)
 *   2. Shifts colour to #4FFFB0 (mint green)
 *   3. Grows a radial-gradient glow halo
 *   4. Oscillates via Math.sin/cos (wavy sphere effect)
 * On mouse leave: particle eases back to white (ease-out).
 */

import { useRef, useEffect, useCallback } from 'react';

interface Particle {
  x: number;
  y: number;
  size: number;
  baseSize: number;
  speedX: number;
  speedY: number;
  opacity: number;
  baseOpacity: number;
  phase: number;
  morphT: number; // 0 = white/normal, 1 = green/morphed
}

export function MorphingCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef  = useRef({ x: -9999, y: -9999 });
  const pRef      = useRef<Particle[]>([]);
  const rafRef    = useRef<number>(0);
  const timeRef   = useRef<number>(0);

  const initParticles = useCallback((w: number, h: number) => {
    pRef.current = Array.from({ length: 90 }, () => {
      const x    = Math.random() * w;
      const y    = Math.random() * h;
      const base = Math.random() * 1.6 + 0.5;
      const op   = Math.random() * 0.35 + 0.08;
      return {
        x, y,
        size: base, baseSize: base,
        speedX: (Math.random() - 0.5) * 0.25,
        speedY: -(Math.random() * 0.35 + 0.06),
        opacity: op, baseOpacity: op,
        phase: Math.random() * Math.PI * 2,
        morphT: 0,
      };
    });
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let cw = canvas.offsetWidth;
    let ch = canvas.offsetHeight;
    let rect = canvas.getBoundingClientRect();

    const dpr = window.devicePixelRatio || 1;
    canvas.width  = cw * dpr;
    canvas.height = ch * dpr;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    if (pRef.current.length === 0) initParticles(cw, ch);

    const ro = new ResizeObserver((entries) => {
      if (!entries[0]) return;
      cw = entries[0].contentRect.width;
      ch = entries[0].contentRect.height;
      canvas.width = cw * dpr;
      canvas.height = ch * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      rect = canvas.getBoundingClientRect();
    });
    ro.observe(canvas);

    const onScroll = () => {
      rect = canvas.getBoundingClientRect();
    };
    window.addEventListener('scroll', onScroll, { passive: true });

    // Handle mouse move with cached rect to avoid forced layout
    const onMouseMove = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX - rect.left, y: e.clientY - rect.top };
    };
    const onMouseLeave = () => {
      mouseRef.current = { x: -9999, y: -9999 };
    };
    canvas.addEventListener('mousemove', onMouseMove, { passive: true });
    canvas.addEventListener('mouseleave', onMouseLeave, { passive: true });

    const loop = (timestamp: number) => {
      timeRef.current = timestamp * 0.001;
      const t  = timeRef.current;
      const mx = mouseRef.current.x;
      const my = mouseRef.current.y;

      ctx.clearRect(0, 0, cw, ch);

      for (const p of pRef.current) {
        const dx   = p.x - mx;
        const dy   = p.y - my;
        const dist = Math.sqrt(dx * dx + dy * dy);
        const RADIUS = 140;

        const targetMorphT = dist < RADIUS ? 1 - dist / RADIUS : 0;
        const speed = targetMorphT > p.morphT ? 0.08 : 0.03;
        p.morphT += (targetMorphT - p.morphT) * speed;

        const waveSin    = Math.sin(t * 1.5 + p.phase) * 0.3;
        const swellTarget = p.baseSize + p.morphT * 5 + waveSin;
        p.size += (swellTarget - p.size) * 0.1;

        const opTarget = p.baseOpacity + p.morphT * 0.5;
        p.opacity += (opTarget - p.opacity) * 0.06;

        p.x += p.speedX + Math.sin(t * 0.4 + p.phase) * 0.15;
        p.y += p.speedY + Math.cos(t * 0.3 + p.phase) * 0.1;

        if (p.y < -10) { p.y = ch + 10; p.x = Math.random() * cw; }
        if (p.x < -10)    p.x = cw + 10;
        if (p.x > cw + 10) p.x = -10;

        ctx.save();

        if (p.morphT > 0.02) {
          const glowR = p.size * (2.5 + Math.sin(t * 2 + p.phase) * 0.5);
          const grd   = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, glowR);
          grd.addColorStop(0,   `rgba(79, 255, 176, ${p.opacity})`);
          grd.addColorStop(0.4, `rgba(79, 255, 176, ${p.opacity * 0.4})`);
          grd.addColorStop(1,   'rgba(79, 255, 176, 0)');
          ctx.beginPath();
          ctx.arc(p.x, p.y, glowR, 0, Math.PI * 2);
          ctx.fillStyle = grd;
          ctx.fill();

          ctx.beginPath();
          ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
          ctx.fillStyle  = `rgba(79, 255, 176, ${Math.min(1, p.opacity * 1.8)})`;
          ctx.shadowColor = '#4FFFB0';
          ctx.shadowBlur  = 12 * p.morphT;
          ctx.fill();
        } else {
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(255, 255, 255, ${p.opacity})`;
          ctx.fill();
        }

        ctx.restore();
      }

      rafRef.current = requestAnimationFrame(loop);
    };

    rafRef.current = requestAnimationFrame(loop);
    return () => {
      ro.disconnect();
      window.removeEventListener('scroll', onScroll);
      canvas.removeEventListener('mousemove', onMouseMove);
      canvas.removeEventListener('mouseleave', onMouseLeave);
      cancelAnimationFrame(rafRef.current);
    };
  }, [initParticles]);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full"
      style={{ pointerEvents: 'auto', zIndex: 1 }}
    />
  );
}
