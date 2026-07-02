'use client';

/**
 * index.tsx (AboutSection entry point)
 * ────────────────────────────────────
 * Replaces the old IntroSection text block.
 * Uses a central visual card surrounded by floating tech badges
 * to show the agency builds Apps, Web, and Automation.
 */

import { motion } from 'framer-motion';
import { CenterCard } from './CenterCard';
import { FloatingBadge } from './FloatingBadge';
import { FLOATING_BADGES } from './aboutData';

export function AboutSection() {
  return (
    <section id="about" className="py-16 md:py-28 lg:py-32 relative overflow-hidden bg-[#0A0A0A]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Top Titles */}
        <div className="text-center mb-16 relative z-30">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[#4FFFB0] font-bold text-base mb-3"
          >
            عن الوكالة
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-white tracking-tight"
          >
            حلول رقمية شاملة
          </motion.h2>
        </div>

        {/* Center Visual Area */}
        <div className="relative min-h-screen flex items-center justify-center w-full">


          {/* Floating Badges */}
          {FLOATING_BADGES.map((badge) => (
            <FloatingBadge key={badge.id} badge={badge} />
          ))}

          {/* Central Card */}
          <CenterCard />
        </div>
      </div>
    </section>
  );
}
