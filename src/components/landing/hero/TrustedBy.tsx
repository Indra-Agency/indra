'use client';

/**
 * TrustedBy.tsx
 * ──────────────
 * "Trusted by" pill + brand names as styled text (no broken images).
 */

const BRANDS = ['Ooredoo', 'QNB', 'Amazon', 'Remal'];

export function TrustedBy({ logos = [] }: { logos?: string[] }) {
  // Take only the first 5 logos
  const displayLogos = logos.slice(0, 5);

  return (
    <div className="flex flex-col items-center">
      {/* Label pill */}
      <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full mb-6 border border-white/10 bg-white/5">
        <svg width="13" height="13" viewBox="0 0 24 24" fill="none">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87L18.18 22 12 18.27 5.82 22 7 14.14l-5-4.87 6.91-1.01L12 2z" fill="#4FFFB0" />
        </svg>
        <span className="text-xs font-semibold tracking-wide text-white/60">موثوق من قبل</span>
        <svg width="13" height="13" viewBox="0 0 24 24" fill="none">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87L18.18 22 12 18.27 5.82 22 7 14.14l-5-4.87 6.91-1.01L12 2z" fill="#4FFFB0" />
        </svg>
      </div>

      {/* Brand Logos */}
      <div className="flex flex-wrap justify-center items-center gap-x-3 md:gap-x-5 lg:gap-x-6 gap-y-3">
        {displayLogos.length > 0 ? (
          displayLogos.map((url, i) => (
            <img
              key={i}
              src={url}
              alt={`Partner ${i + 1}`}
              className="h-14 md:h-16 lg:h-20 max-w-[140px] md:max-w-[180px] lg:max-w-[200px] object-contain brightness-0 invert opacity-50 hover:opacity-100 transition-opacity duration-300 pointer-events-auto"
            />
          ))
        ) : (
          <div className="text-sm font-semibold tracking-widest uppercase text-zinc-500">
            جاري تحميل شركاء النجاح...
          </div>
        )}
      </div>
    </div>
  );
}
