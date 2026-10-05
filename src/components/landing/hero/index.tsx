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

import { useState, useEffect } from 'react';
import { HeroContent } from './HeroContent';
import dynamic from 'next/dynamic';

const FloatingAnimation = dynamic(() => import('./FloatingAnimation'), {
  ssr: false,
});

export function HeroSection({ logos = [] }: { logos?: string[] }) {
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    // Only mount WebGL floating animation on desktop screens to save mobile CPU/GPU
    if (typeof window !== 'undefined' && window.innerWidth >= 768) {
      setIsDesktop(true);
    }
  }, []);

  return (
    <section
      className="relative overflow-hidden flex flex-col min-h-screen w-full bg-abyssal-blue"
    >
      {/* Mobile Ambient Glow Fallback (0% CPU, 0KB WebGL overhead) */}
      <div 
        className="absolute inset-0 z-0 pointer-events-none md:hidden bg-[radial-gradient(ellipse_80%_60%_at_50%_15%,rgba(255,153,51,0.18),transparent_70%)]" 
      />

      {/* Desktop WebGL Floating Animation (z-index: 0) */}
      {isDesktop && (
        <FloatingAnimation 
          className="absolute inset-0 z-0 pointer-events-none hidden md:block" 
          colorStops={['#ff9933', '#c9c1b1', '#4285F4']} 
          amplitude={1}
          blend={0.5}
          speed={0.8}
        />
      )}

      {/* Content wrapper sitting clearly above the animated background */}
      <div
        className="relative z-10 flex-1 flex items-center w-full px-6 md:px-12 lg:px-20 pointer-events-none"
      >
        <HeroContent logos={logos} />
      </div>
    </section>
  );
}
