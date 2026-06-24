'use client';

/**
 * GlowTitle.tsx
 * ─────────────
 * Large Arabic display text + sparkle icon.
 *
 * Effect: A light beam sweeps from right (text start in RTL) to left
 * (the ✦ icon), as if a beam of light is traveling through the letters
 * and exiting at the icon. Loops infinitely.
 *
 * Technique: animated `background-position` on a metallic gradient
 * that has a bright white hot-spot. The spot slides from 200% → -50%
 * across the background-size:300%, creating the sweep illusion.
 * NO external glow — the light lives entirely inside the text + icon.
 */

export function GlowTitle({ title }: { title: string }) {
  return (
    <>
      {/* Inject the keyframe animation in a style tag */}
      <style>{`
        @keyframes shine-sweep {
          0%   { background-position: 200% center; }
          100% { background-position: -50% center; }
        }
        @keyframes icon-flash {
          0%, 55%, 100% { opacity: 0.45; filter: brightness(0.7); }
          70%, 85%      { opacity: 1;    filter: brightness(1.6);  }
        }
        .shine-text {
          background: linear-gradient(
            105deg,
            #555  0%,
            #aaa  15%,
            #fff  28%,   /* bright hot-spot */
            #ddd  38%,
            #888  50%,
            #bbb  65%,
            #666  80%,
            #999  100%
          );
          background-size: 300% 100%;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          animation: shine-sweep 3.2s linear infinite;
        }
        .shine-icon {
          color: #ccc;
          animation: icon-flash 3.2s linear infinite;
          /* delayed so the flash aligns with the beam reaching the icon */
          animation-delay: 2.4s;
        }
      `}</style>

      <div className="flex items-center justify-center gap-5 mb-16" dir="rtl">

        {/* ── Main text — light sweeps right → left ── */}
        <h2
          className="shine-text ar-heading font-bold leading-none
                     text-[clamp(3rem,10vw,6.5rem)]"
        >
          {title}
        </h2>

        {/* ── Icon — flashes when beam arrives ── */}
        <span
          className="shine-icon select-none shrink-0
                     text-[clamp(2.4rem,7vw,5rem)]"
          aria-hidden="true"
        >
          ✦
        </span>

      </div>
    </>
  );
}
