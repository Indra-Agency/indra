'use client';

/**
 * index.tsx  (HeroSection entry point)
 * ──────────────────────────────────────
 * Assembles all sub-components into the final Hero section.
 *
 * Layer stack (bottom → top, z-index):
 *   z-0  AuroraBackground  — CSS-keyframe + mouse-reactive colour orbs
 *   z-1  MorphingCanvas    — interactive particle field (desktop only)
 *   z-2  mobile glow       — simple radial gradient fallback
 *   z-10 HeroContent       — badge, heading, CTAs, trusted-by
 *
 * Sub-components:
 *   ./AuroraBackground  — colour orbs & gradient overlays
 *   ./MorphingCanvas    — Canvas particle engine
 *   ./HeroContent       — text, buttons, Framer Motion animations
 *     └─ ./HeroBadge    — "نقبل مشاريع جديدة" pill
 *     └─ ./TrustedBy    — logo strip
 */

import { AuroraBackground } from './AuroraBackground';
import { MorphingCanvas }   from './MorphingCanvas';
import { HeroContent }      from './HeroContent';

export function HeroSection({ logos = [] }: { logos?: string[] }) {
  return (
    <section
      className="relative overflow-hidden flex flex-col"
      style={{ background: '#0A0A0A', minHeight: '100svh' }}
    >
      {/* ── Layer 0: Autonomous + mouse-reactive Aurora ── */}
      <AuroraBackground />

      {/* ── Layer 1: Morphing Canvas particles (desktop) ── */}
      <div className="absolute inset-0 hidden md:block" style={{ zIndex: 2 }}>
        <MorphingCanvas />
      </div>

      {/* ── Layer 2: Mobile fallback glow (no canvas) ── */}
      <div
        className="absolute inset-0 md:hidden"
        style={{
          zIndex: 2,
          background: 'radial-gradient(ellipse at 50% 30%, rgba(79,255,176,0.10) 0%, transparent 60%)',
        }}
      />

      {/* ── Layer 3: Hero text, buttons, badges ── */}
      <div
        className="relative flex-1 flex items-center w-full px-6 md:px-12 lg:px-20"
        style={{ zIndex: 10, pointerEvents: 'none' }}
      >
        <HeroContent logos={logos} />
      </div>
    </section>
  );
}
