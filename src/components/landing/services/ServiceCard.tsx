'use client';

/**
 * ServiceCard.tsx
 * ────────────────
 * Individual service card with:
 *   - Icon in a circular dark badge
 *   - Title (bold white)
 *   - Description (muted zinc)
 *   - Hover: card lifts + border brightens
 *   - Mouse tracking: CSS vars --mouse-x/y for glow effect
 *     (set by the parent ServicesGrid via window mousemove)
 */

import { motion } from 'framer-motion';
import { Service } from './servicesData';

interface Props {
  service: Service;
  index: number;
}

export function ServiceCard({ service, index }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: index * 0.1 }}
      viewport={{ once: true, margin: '-100px' }}
      className="bento-card p-8 flex flex-col"
    >
      <div className="w-12 h-12 flex items-center justify-center rounded-full bg-blue-fantastic text-palladian mb-6">
        {service.icon}
      </div>
      <h3 className="text-lg font-bold text-palladian mb-3">{service.title}</h3>
      <p className="text-zinc-400 text-sm leading-relaxed">{service.desc}</p>
    </motion.div>
  );
}
