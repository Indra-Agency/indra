'use client';

/**
 * FloatingBadge.tsx
 * ─────────────────
 * Floating pill badge positioned absolutely around the center card.
 * Uses Framer Motion for a continuous gentle floating animation.
 */

import { motion } from 'framer-motion';
import { BadgeData } from './aboutData';

interface Props {
  badge: BadgeData;
}

export function FloatingBadge({ badge }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: badge.delay }}
      style={{
        position: 'absolute',
        top: badge.top,
        left: badge.left,
        right: badge.right,
        zIndex: 10,
        // Using transform for rotation to keep positioning exact
      }}
      className="hidden lg:block pointer-events-none" // Hide on small screens to avoid clutter
    >
      <div
        className="px-5 py-2.5 rounded-full flex items-center gap-2 cursor-default animate-float"
        style={{
          background: badge.bgColor,
          color: badge.textColor,
          boxShadow: '0 4px 20px rgba(0,0,0,0.3)',
          transform: `rotate(${badge.rotate}deg)`,
        }}
      >
        {badge.iconPosition === 'right' && (
          <span className="flex items-center justify-center">
            {badge.icon}
          </span>
        )}
        <span className="font-bold text-sm tracking-wide whitespace-nowrap">
          {badge.label}
        </span>
        {badge.iconPosition === 'left' && (
          <span className="flex items-center justify-center">
            {badge.icon}
          </span>
        )}
      </div>
    </motion.div>
  );
}
