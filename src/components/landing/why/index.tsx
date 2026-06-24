'use client';

/**
 * index.tsx  (WhySection entry point)
 * ────────────────────────────────────
 * "لماذا نحن؟" section — placed after AboutSection.
 *
 * Layout:
 *   1. GlowTitle  — large glowing metallic Arabic heading + sparkle icon
 *   2. Grid        — 3×2 glassmorphic feature cards
 */

import { WhyCard }   from './WhyCard';
import { WHY_CARDS } from './whyData';

export function WhySection() {
  return (
    <section
      id="why"
      className="relative py-12 px-6 md:px-12 lg:px-20 overflow-hidden"
      style={{ background: '#0A0A0A' }}
    >
      {/* Subtle background glow */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse, rgba(79,255,176,0.04) 0%, transparent 70%)',
          filter: 'blur(60px)',
        }}
      />

      <div className="relative max-w-6xl mx-auto">

        {/* ── Cards Grid ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {WHY_CARDS.map((card, i) => (
            <WhyCard key={card.id} card={card} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
