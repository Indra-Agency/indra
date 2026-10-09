/**
 * FlagIcon.tsx
 * ─────────────
 * Inline SVG of the flags used in the language toggle.
 * Supports 'uk' (for switching to English) and 'sa' (for switching to Arabic).
 */

export function FlagIcon({ size = 18, country = 'uk' }: { size?: number; country?: 'uk' | 'sa' }) {
  if (country === 'sa') {
    return (
      <svg
        width={size}
        height={size}
        viewBox="0 0 20 20"
        style={{ borderRadius: '50%', flexShrink: 0 }}
        aria-hidden="true"
      >
        <rect width="20" height="20" fill="#006C35" rx="10" />
        {/* Simplified Saudi emblem / sword & palm */}
        <path d="M10 4 C9 6 8 8 10 9 C12 8 11 6 10 4 Z" fill="#ffffff" />
        <path d="M5 13 L15 13 M6 11.5 L6 14.5" stroke="#ffffff" strokeWidth="1.4" strokeLinecap="round" />
      </svg>
    );
  }

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
