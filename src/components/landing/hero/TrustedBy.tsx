'use client';
import Image from 'next/image';

/**
 * TrustedBy.tsx
 * ──────────────
 * "Trusted by" pill + brand names as styled text (no broken images).
 */

import { useLanguage } from '@/i18n/LanguageContext';

const BRANDS = ['Ooredoo', 'QNB', 'Amazon', 'Remal'];

export function TrustedBy({ logos = [] }: { logos?: string[] }) {
  const { t } = useLanguage();
  // Take only the first 5 logos
  const displayLogos = logos.slice(0, 5);

  return (
    <div className="flex flex-col items-center">
      {/* Label pill */}
      <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full mb-6 border border-palladian/10 bg-palladian/5">
        <svg width="13" height="13" viewBox="0 0 24 24" fill="none">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87L18.18 22 12 18.27 5.82 22 7 14.14l-5-4.87 6.91-1.01L12 2z" fill="var(--color-burning-flame)" />
        </svg>
        <span className="text-xs font-semibold tracking-wide text-palladian/80">{t.hero.trustedBy}</span>
        <svg width="13" height="13" viewBox="0 0 24 24" fill="none">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87L18.18 22 12 18.27 5.82 22 7 14.14l-5-4.87 6.91-1.01L12 2z" fill="var(--color-burning-flame)" />
        </svg>
      </div>

      {/* Brand Logos */}
      <div className="flex flex-wrap justify-center items-center gap-x-3 md:gap-x-4 lg:gap-x-5 gap-y-2">
        {displayLogos.length > 0 ? (
          displayLogos.map((url, i) => (
            <div key={i} className="flex justify-center items-center w-[90px] md:w-[110px] lg:w-[130px] aspect-[130/52] shrink-0">
              <Image
                src={url}
                alt={`Partner brand logo ${i + 1}`}
                width={130}
                height={52}
                sizes="(max-width: 768px) 90px, 130px"
                loading="lazy"
                decoding="async"
                className="object-contain w-full h-full brightness-0 invert opacity-50 hover:opacity-100 transition-opacity duration-300 pointer-events-auto"
              />
            </div>
          ))
        ) : (
          <div className="text-sm font-semibold tracking-widest uppercase text-zinc-500">
            {t.hero.loadingPartners}
          </div>
        )}
      </div>
    </div>
  );
}
