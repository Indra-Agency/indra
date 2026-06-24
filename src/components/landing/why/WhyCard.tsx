'use client';

/**
 * WhyCard.tsx
 * ───────────
 * Single feature card with glassmorphism style,
 * icon glow, and hover lift animation.
 */

import { motion } from 'framer-motion';
import { WhyCard as WhyCardType } from './whyData';

interface Props {
  card: WhyCardType;
  index: number;
}

export function WhyCard({ card, index }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.08 }}
      whileHover={{ y: -6, scale: 1.02 }}
      className="group relative flex flex-col gap-4 p-6 rounded-2xl cursor-default"
      style={{
        background: 'linear-gradient(135deg, rgba(255,255,255,0.04) 0%, rgba(255,255,255,0.01) 100%)',
        border: '1px solid rgba(255,255,255,0.08)',
        boxShadow: '0 4px 24px rgba(0,0,0,0.3)',
        transition: 'all 0.3s ease',
      }}
    >
      {/* Subtle inner glow on hover */}
      <div
        className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse at 50% 0%, rgba(79,255,176,0.06) 0%, transparent 70%)',
        }}
      />

      {/* Icon */}
      <div
        className="text-3xl w-12 h-12 flex items-center justify-center rounded-xl shrink-0"
        style={{
          background: 'rgba(255,255,255,0.05)',
          border: '1px solid rgba(255,255,255,0.08)',
          filter: 'drop-shadow(0 0 8px rgba(79,255,176,0.25))',
        }}
      >
        {card.icon}
      </div>

      {/* Text */}
      <div>
        <h3 className="ar-heading text-lg font-bold text-white mb-2">{card.title}</h3>
        <p className="ar-body text-sm leading-relaxed" style={{ color: 'rgba(255,255,255,0.55)' }}>
          {card.description}
        </p>
      </div>

      {/* Bottom accent line */}
      <div
        className="absolute bottom-0 left-6 right-6 h-px opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{ background: 'linear-gradient(90deg, transparent, rgba(79,255,176,0.4), transparent)' }}
      />
    </motion.div>
  );
}
