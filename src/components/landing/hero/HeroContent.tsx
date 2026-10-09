'use client';

/**
 * HeroContent.tsx
 * ────────────────
 * The main text + CTA block inside the Hero section.
 * Contains (top → bottom):
 *   1. HeroBadge    — "نقبل مشاريع جديدة"
 *   2. h1 heading   — main headline (green accent word)
 *   3. Sub-headline — agency description
 *   4. CTA buttons  — Neo-brutalism (green + white)
 *   5. TrustedBy    — logo strip
 *
 * Animations: Framer Motion staggered fade-in (0.15s per item, 0.5s delay).
 * To change the headline/copy — edit COPY object below.
 */

import { HeroBadge } from './HeroBadge';
import { TrustedBy } from './TrustedBy';
import { NeoButton } from '@/components/ui/NeoButton';
import { useLanguage } from '@/i18n/LanguageContext';

export function HeroContent({ logos = [] }: { logos?: string[] }) {
  const { t, isRTL } = useLanguage();

  return (
    <div className="max-w-6xl mx-auto text-center pt-32 pb-0">
      {/* Badge */}
      <div className="mb-7">
        <HeroBadge />
      </div>

      {/* Main Heading (LCP element) */}
      <div className="mb-7">
        <h1
          className="ar-heading text-2xl sm:text-3xl md:text-4xl lg:text-5xl"
          style={{ color: 'var(--color-palladian)', lineHeight: 1.35, fontWeight: 700, letterSpacing: '-0.01em' }}
        >
          {t.hero.headingLine1}
          <br />
          <span style={{ color: 'var(--color-burning-flame)' }}>{t.hero.headingAccent}</span>{' '}
          {t.hero.headingLine2}
        </h1>
      </div>

      {/* Sub-headline */}
      <p
        className="text-sm sm:text-base md:text-base leading-relaxed max-w-3xl mx-auto mb-10"
        style={{ color: 'rgba(238, 233, 223, 0.75)', fontWeight: 400 }}
      >
        {t.hero.subtext1}
        <br className="hidden sm:block" />
        {t.hero.subtext2}
      </p>

      {/* CTA Buttons */}
      <div
        className="flex flex-wrap justify-center gap-5 mb-10"
        style={{ pointerEvents: 'auto' }}
      >
        {/* Primary — Green */}
        <NeoButton href="#work" variant="green">
          <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17"
            viewBox="0 0 24 24" fill="none" stroke="currentColor"
            strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"
            className={isRTL ? '' : 'rotate-180'}
          >
            <path d="m12 19-7-7 7-7" /><path d="M19 12H5" />
          </svg>
          {t.hero.ctaPrimary}
        </NeoButton>

        {/* Secondary — White */}
        <NeoButton href="#contact" variant="white">
          <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17"
            viewBox="0 0 24 24" fill="none" stroke="currentColor"
            strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
          </svg>
          {t.hero.ctaSecondary}
        </NeoButton>
      </div>

      {/* Trusted-By */}
      <div className="mb-12">
        <TrustedBy logos={logos} />
      </div>
    </div>
  );
}
