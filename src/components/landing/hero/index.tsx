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

import { HeroContent } from './HeroContent';

export function HeroSection({ logos = [] }: { logos?: string[] }) {
  return (
    <section
      className="relative overflow-hidden flex flex-col min-h-screen w-full bg-abyssal-blue"
    >
      {/* High-Performance GPU Ambient Glow (0% CPU, 0KB WebGL overhead) */}
      <div 
        className="absolute inset-0 z-0 pointer-events-none overflow-hidden"
        aria-hidden="true"
      >
        <div className="absolute top-[-5%] left-1/2 -translate-x-1/2 w-[600px] sm:w-[900px] lg:w-[1200px] h-[400px] sm:h-[500px] lg:h-[600px] rounded-full bg-[radial-gradient(ellipse_at_center,color-mix(in_srgb,var(--color-primary)_24%,transparent)_0%,color-mix(in_srgb,var(--color-primary)_8%,transparent)_40%,transparent_70%)] blur-3xl opacity-80" />
        <div className="absolute top-[25%] right-[-10%] w-[350px] sm:w-[500px] h-[350px] sm:h-[500px] rounded-full bg-[radial-gradient(ellipse_at_center,rgba(66,133,244,0.14)_0%,transparent_70%)] blur-3xl" />
        <div className="absolute top-[35%] left-[-10%] w-[350px] sm:w-[500px] h-[350px] sm:h-[500px] rounded-full bg-[radial-gradient(ellipse_at_center,color-mix(in_srgb,var(--color-oatmeal)_12%,transparent)_0%,transparent_70%)] blur-3xl" />
      </div>

      {/* Content wrapper sitting clearly above the animated background */}
      <div
        className="relative z-10 flex-1 flex items-center w-full px-6 md:px-12 lg:px-20 pointer-events-none"
      >
        <HeroContent logos={logos} />
      </div>
    </section>
  );
}
