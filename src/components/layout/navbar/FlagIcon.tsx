/**
 * FlagIcon.tsx
 * ─────────────
 * Inline SVG of the British flag used in the language toggle.
 * Isolated here so it can be reused in both desktop + mobile nav.
 */

export function FlagIcon({ size = 18 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 20 20"
      style={{ borderRadius: '50%', flexShrink: 0 }}
      aria-hidden="true"
    >
      <rect width="20" height="20" fill="#012169" rx="10" />
      <path d="M0 0 L20 20 M20 0 L0 20" stroke="#fff" strokeWidth="3" />
      <path d="M0 0 L20 20 M20 0 L0 20" stroke="#C8102E" strokeWidth="1.5" />
      <path d="M10 0 V20 M0 10 H20" stroke="#fff" strokeWidth="5" />
      <path d="M10 0 V20 M0 10 H20" stroke="#C8102E" strokeWidth="3" />
    </svg>
  );
}
