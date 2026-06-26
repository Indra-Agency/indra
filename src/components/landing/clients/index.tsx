'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

const MarqueeSet = ({ logos }: { logos: string[] }) => (
  <div className="flex shrink-0 items-center w-max">
    {logos.map((logo, i) => (
      <div key={i} className="flex shrink-0 px-4 md:px-6 justify-center">
        <div className="relative h-14 md:h-20 lg:h-24 w-[160px] md:w-[220px]">
          <Image
            src={logo}
            alt="Client Logo"
            fill
            unoptimized={true}
            sizes="(max-width: 768px) 160px, 220px"
            className="object-contain brightness-0 invert opacity-50 hover:opacity-100 transition-opacity duration-300"
          />
        </div>
      </div>
    ))}
  </div>
);

export function ClientsSection({ logos }: { logos: string[] }) {
  if (!logos || logos.length === 0) return null;

  const mid = Math.ceil(logos.length / 2);
  const topLogos = logos.slice(0, mid);
  const bottomLogos = logos.slice(mid);

  return (
    <section id="clients" className="py-24 bg-[#0A0A0A] overflow-hidden" dir="rtl">
      {/* Header */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 mb-10 text-center flex flex-col items-center">
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-emerald-400 font-bold tracking-wider text-xs md:text-sm mb-6"
        >
          موثوق من قبل
        </motion.span>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true }}
          className="text-white font-black text-3xl md:text-4xl -mt-2 md:-mt-3"
        >
          أبرز العملاء
        </motion.h2>
      </div>

      {/* Marquee Container */}
      <div className="relative w-full flex flex-col gap-2 md:gap-4" dir="ltr">

        {/* Top Row - Moving Left */}
        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{ repeat: Infinity, ease: "linear", duration: 50 }}
          className="flex w-max hover:[animation-play-state:paused]"
        >
          <MarqueeSet logos={topLogos} />
          <MarqueeSet logos={topLogos} />
        </motion.div>

        {/* Bottom Row - Moving Right */}
        <motion.div
          animate={{ x: ["-50%", "0%"] }}
          transition={{ repeat: Infinity, ease: "linear", duration: 50 }}
          className="flex w-max hover:[animation-play-state:paused]"
        >
          <MarqueeSet logos={bottomLogos} />
          <MarqueeSet logos={bottomLogos} />
        </motion.div>

        {/* Gradient Overlays for smooth entry/exit */}
        <div className="absolute inset-y-0 right-0 w-24 md:w-48 bg-gradient-to-l from-[#0A0A0A] via-[#0A0A0A]/80 to-transparent z-10 pointer-events-none"></div>
        <div className="absolute inset-y-0 left-0 w-24 md:w-48 bg-gradient-to-r from-[#0A0A0A] via-[#0A0A0A]/80 to-transparent z-10 pointer-events-none"></div>
      </div>
    </section>
  );
}
