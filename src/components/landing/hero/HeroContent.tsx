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

import { motion } from 'framer-motion';
import { HeroBadge } from './HeroBadge';
import { TrustedBy } from './TrustedBy';

/* ── Edit copy here without touching component markup ── */
const COPY = {
  headingLine1: 'حين تُدار أنظمتك بذكاء',
  headingAccent: 'يصبح النمو',
  headingLine2: 'نتيجة حتمية.',
  subtext1: 'وكالة متخصصة في حلول الأتمتة والذكاء الاصطناعي.',
  subtext2: 'نُحوّل العمليات اليدوية إلى أنظمة ذكية تعمل على مدار الساعة.',
  ctaPrimary:   { label: 'شاهد أعمالنا',  href: '#work' },
  ctaSecondary: { label: 'تواصل معنا',     href: '#contact' },
};

/* ── Animation variants ── */
const container = {
  hidden:  { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15, delayChildren: 0.5 } },
};
const item = {
  hidden:  { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.85 } },
};

export function HeroContent({ logos = [] }: { logos?: string[] }) {
  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="visible"
      className="max-w-6xl mx-auto text-center pt-32 pb-0"
    >
      {/* Badge */}
      <motion.div variants={item} className="mb-7">
        <HeroBadge />
      </motion.div>

      {/* Main Heading */}
      <motion.div variants={item} className="mb-7">
        <h1
          className="ar-heading text-3xl sm:text-4xl md:text-5xl lg:text-[60px]"
          style={{ color: '#fff', lineHeight: 1.35, fontWeight: 700, letterSpacing: '-0.01em' }}
        >
          {COPY.headingLine1}
          <br />
          <span style={{ color: '#4FFFB0' }}>{COPY.headingAccent}</span>{' '}
          {COPY.headingLine2}
        </h1>
      </motion.div>

      {/* Sub-headline */}
      <motion.p
        variants={item}
        className="text-base md:text-lg leading-relaxed max-w-3xl mx-auto mb-10"
        style={{ color: 'rgba(255,255,255,0.75)', fontWeight: 400 }}
      >
        {COPY.subtext1}
        <br className="hidden sm:block" />
        {COPY.subtext2}
      </motion.p>

      {/* CTA Buttons */}
      <motion.div
        variants={item}
        className="flex flex-wrap justify-center gap-5 mb-10"
        style={{ pointerEvents: 'auto' }}
      >
        {/* Primary — Green */}
        <a href={COPY.ctaPrimary.href} className="btn-neo btn-neo-green">
          <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17"
            viewBox="0 0 24 24" fill="none" stroke="currentColor"
            strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="m12 19-7-7 7-7" /><path d="M19 12H5" />
          </svg>
          {COPY.ctaPrimary.label}
        </a>

        {/* Secondary — White */}
        <a href={COPY.ctaSecondary.href} className="btn-neo btn-neo-white">
          <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17"
            viewBox="0 0 24 24" fill="none" stroke="currentColor"
            strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
          </svg>
          {COPY.ctaSecondary.label}
        </a>
      </motion.div>

      {/* Trusted-By */}
      <motion.div variants={item} className="mb-12">
        <TrustedBy logos={logos} />
      </motion.div>
    </motion.div>
  );
}
