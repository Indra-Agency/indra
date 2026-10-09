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

function EightSpokedAsterisk({ className = "w-5 h-5 md:w-6 md:h-6 text-white shrink-0" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      fill="currentColor"
      stroke="currentColor"
      aria-hidden="true"
    >
      <circle cx="12" cy="12" r="1.3" />
      {/* 4 radiating axes */}
      <line x1="12" y1="3.5" x2="12" y2="20.5" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="3.5" y1="12" x2="20.5" y2="12" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="6" y1="6" x2="18" y2="18" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="6" y1="18" x2="18" y2="6" strokeWidth="1.5" strokeLinecap="round" />
      {/* Dots at the tips */}
      <circle cx="12" cy="3.5" r="1.3" />
      <circle cx="12" cy="20.5" r="1.3" />
      <circle cx="3.5" cy="12" r="1.3" />
      <circle cx="20.5" cy="12" r="1.3" />
      <circle cx="6" cy="6" r="1.3" />
      <circle cx="18" cy="18" r="1.3" />
      <circle cx="6" cy="18" r="1.3" />
      <circle cx="18" cy="6" r="1.3" />
    </svg>
  );
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
        className="flex items-center shrink-0 text-white"
        aria-hidden="true"
      >
        <EightSpokedAsterisk />
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
