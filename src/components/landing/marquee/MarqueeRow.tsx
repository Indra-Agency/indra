/**
 * MarqueeRow.tsx
 * ───────────────
 * A single infinite-scroll row of pill badges.
 * Content is triplicated to prevent gaps on ultra-wide screens.
 *
 * Props:
 *   items     — array of skill strings
 *   direction — 'left' uses @keyframes ml / 'right' uses @keyframes mr
 *               (both defined in globals.css)
 */

interface Props {
  items: string[];
  direction: 'left' | 'right';
}

function PillUnit({ label }: { label: string }) {
  return (
    <>
      <span
        className="ar-heading shrink-0 text-base md:text-lg px-6 md:px-8 py-2.5 md:py-3 rounded-full whitespace-nowrap shadow-sm font-bold"
        style={{ background: 'var(--color-burning-flame)', color: 'var(--color-abyssal-blue)' }}
      >
        {label}
      </span>
      <span
        className="flex items-center text-xl md:text-2xl shrink-0"
        style={{ color: 'white' }}
        aria-hidden="true"
      >
        ✳
      </span>
    </>
  );
}

export function MarqueeRow({ items, direction }: Props) {
  const animName = direction === 'left' ? 'ml' : 'mr';

  return (
    <div className="flex overflow-hidden">
      <div
        className="flex gap-5 shrink-0"
        style={{ animation: `${animName} 60s linear infinite`, willChange: 'transform' }}
      >
        {/* Triplicate for seamless loop on all screen sizes */}
        {[...items, ...items, ...items].map((label, i) => (
          <PillUnit key={i} label={label} />
        ))}
      </div>
    </div>
  );
}
