/**
 * index.tsx  (MarqueeSection entry point)
 * ─────────────────────────────────────────
 * Two-row infinite scrolling skill ticker.
 * Row 1 scrolls left, Row 2 scrolls right.
 * Edge fades (left/right gradients) applied as absolute overlays.
 *
 * Sub-components:
 *   ./MarqueeRow    — single animated row
 *   ./marqueeData   — ROW1 and ROW2 skill arrays
 */

import { MarqueeRow }    from './MarqueeRow';
import { ROW1, ROW2 }   from './marqueeData';

export function MarqueeSection() {
  return (
    <div
      dir="ltr"
      className="relative overflow-hidden"
      style={{ background: 'var(--color-abyssal-blue)', paddingTop: 56, paddingBottom: 60 }}
    >
      {/* Left edge fade */}
      <div
        className="absolute left-0 top-0 bottom-0 w-24 md:w-40 z-10 pointer-events-none"
        style={{ background: 'linear-gradient(to right, var(--color-abyssal-blue), transparent)' }}
      />
      {/* Right edge fade */}
      <div
        className="absolute right-0 top-0 bottom-0 w-24 md:w-40 z-10 pointer-events-none"
        style={{ background: 'linear-gradient(to left, var(--color-abyssal-blue), transparent)' }}
      />

      <div className="flex flex-col gap-4">
        <MarqueeRow items={ROW1} direction="left"  />
        <MarqueeRow items={ROW2} direction="right" />
      </div>
    </div>
  );
}
