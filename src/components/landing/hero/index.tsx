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

import { HeroContent }      from './HeroContent';
import dynamic from 'next/dynamic';

const FloatingAnimation = dynamic(() => import('./FloatingAnimation'), {
  ssr: false,
});

export function HeroSection({ logos = [] }: { logos?: string[] }) {
  return (
    <section
      className="relative overflow-hidden flex flex-col min-h-screen w-full bg-abyssal-blue"
    >
      {/* Background Floating Animation (z-index: 0) */}
      <FloatingAnimation 
        className="absolute inset-0 z-0 pointer-events-none" 
        // We use Azr branding colors but keep it vibrant for the wave
        colorStops={['#ff9933', '#c9c1b1', '#4285F4']} 
        amplitude={1}
        blend={0.5}
        speed={0.8}
      />

      {/* Content wrapper sitting clearly above the animated background */}
      <div
        className="relative z-10 flex-1 flex items-center w-full px-6 md:px-12 lg:px-20 pointer-events-none"
      >
        <HeroContent logos={logos} />
      </div>
    </section>
  );
}
