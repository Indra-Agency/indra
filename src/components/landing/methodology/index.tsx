'use client';

import { useRef } from 'react';
import { motion, useScroll } from 'framer-motion';
import { useLanguage } from '@/i18n/LanguageContext';

export function MethodologySection() {
  const { t, isRTL } = useLanguage();
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"],
  });

  return (
    <section id="methodology" className="py-16 md:py-24 relative bg-abyssal-blue" dir={isRTL ? "rtl" : "ltr"}>
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        {/* Header */}
        <div className="text-center mb-32">
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-burning-flame font-bold mb-4 text-base tracking-wide block"
          >
            {t.methodology.subtitle}
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-b from-palladian to-zinc-400 pb-4 leading-normal"
          >
            {t.methodology.title}
          </motion.h2>
        </div>

        {/* Timeline Layout */}
        <div ref={containerRef} className="relative">
          {/* Main Vertical Line (background faint) */}
          <div className={`absolute top-0 bottom-0 ${isRTL ? 'right-[80px] md:right-[120px] lg:right-[180px] translate-x-1/2' : 'left-[80px] md:left-[120px] lg:left-[180px] -translate-x-1/2'} w-[2px] bg-burning-flame/20`} />
          
          {/* Main Vertical Line (filled glowing animated) */}
          <motion.div 
            className={`absolute top-0 bottom-0 ${isRTL ? 'right-[80px] md:right-[120px] lg:right-[180px] translate-x-1/2' : 'left-[80px] md:left-[120px] lg:left-[180px] -translate-x-1/2'} w-[2px] bg-burning-flame shadow-[0_0_15px_var(--color-burning-flame)] origin-top z-0`}
            style={{ scaleY: scrollYProgress }}
          />

          <div className="flex flex-col gap-24 md:gap-32">
            {t.methodology.steps.map((step) => (
              <motion.div 
                key={step.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="relative grid grid-cols-[80px_1fr] md:grid-cols-[120px_1fr] lg:grid-cols-[180px_1fr] gap-8 md:gap-12 lg:gap-20 items-center"
              >
                
                {/* Huge Number */}
                <div className="flex items-center justify-center">
                  <span className="text-[3rem] md:text-[4rem] lg:text-[5rem] font-serif font-extrabold bg-gradient-to-b from-burning-flame to-burning-flame text-transparent bg-clip-text leading-none select-none">
                    {step.id}
                  </span>
                </div>

                {/* Node on the line */}
                <div className={`absolute ${isRTL ? 'right-[80px] md:right-[120px] lg:right-[180px] translate-x-1/2' : 'left-[80px] md:left-[120px] lg:left-[180px] -translate-x-1/2'} top-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-burning-flame shadow-[0_0_15px_var(--color-burning-flame)] z-10`} />

                {/* Content Box */}
                <div className={`flex flex-col items-start ${isRTL ? 'text-right' : 'text-left'} py-4 z-10`}>
                  <h3 className="text-palladian font-extrabold text-xl md:text-2xl lg:text-3xl mb-3 tracking-tight">{step.title}</h3>
                  <p className="text-burning-flame/90 text-sm md:text-base font-medium mb-4">{step.subtitle}</p>
                  <p className="text-zinc-300 leading-[1.8] mb-6 text-sm md:text-base max-w-xl font-serif">{step.description}</p>
                  
                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 justify-start mt-auto">
                    {step.tags.map((tag, i) => (
                      <span 
                        key={i}
                        className="bg-burning-flame/10 border border-burning-flame/20 text-burning-flame text-xs md:text-sm font-bold px-3 py-1.5 md:px-4 md:py-2 rounded-full cursor-default hover:bg-burning-flame/20 transition-colors"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
