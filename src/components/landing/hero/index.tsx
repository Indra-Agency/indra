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
import { HeroContent }      from './HeroContent';

export function HeroSection({ logos = [] }: { logos?: string[] }) {
  return (
    <section
      className="relative overflow-hidden flex flex-col min-h-screen w-full"
      style={{ backgroundColor: 'hsl(260, 87%, 3%)' }}
    >
      {/* Fluid Gradient Background (CSS Only) */}
      <AuroraBackground />

      {/* Content wrapper sitting clearly above the animated background */}
      <div
        className="relative z-10 flex-1 flex items-center w-full px-6 md:px-12 lg:px-20"
        style={{ pointerEvents: 'none' }}
      >
        <HeroContent logos={logos} />
      </div>
    </section>
  );
}
