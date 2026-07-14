'use client';

import { useRef, useEffect, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { FiGlobe, FiCalendar, FiCheckCircle, FiHeart } from 'react-icons/fi';

const STATS_DATA = [
  {
    id: 4,
    icon: FiCalendar,
    value: '+3',
    title: 'سنوات خبرة',
    subtitle: 'في الحلول التقنية',
  },
  {
    id: 3,
    icon: FiCheckCircle,
    value: '+50',
    title: 'مشاريع تقنية',
    subtitle: 'تم إنجازها بنجاح',
  },
  {
    id: 2,
    icon: FiGlobe,
    value: '2',
    title: 'أسواق نشطة',
    subtitle: 'اليمن - السعودية',
  },
  {
    id: 1,
    icon: FiHeart,
    value: '100%',
    title: 'رضا العملاء',
    subtitle: 'في جميع مشاريعنا',
  },
];

function CountUpValue({ targetStr }: { targetStr: string }) {
  const [current, setCurrent] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  const isPercent = targetStr.includes('%');
  const isPlusAtStart = targetStr.startsWith('+');
  const isPlusAtEnd = targetStr.endsWith('+');
  const cleanNumberStr = targetStr.replace(/[^0-9]/g, '');
  const targetNum = parseInt(cleanNumberStr, 10) || 0;

  useEffect(() => {
    if (!isInView) return;

    let startTimestamp: number | null = null;
    const duration = 1800; // 1.8 seconds

    let animationFrameId: number;

    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);

      // Easing out quadratic
      const easeOutQuad = (x: number): number => {
        return 1 - (1 - x) * (1 - x);
      };

      const currentVal = Math.floor(easeOutQuad(progress) * targetNum);
      setCurrent(currentVal);

      if (progress < 1) {
        animationFrameId = requestAnimationFrame(step);
      }
    };

    animationFrameId = requestAnimationFrame(step);
    return () => cancelAnimationFrame(animationFrameId);
  }, [isInView, targetNum]);

  return (
    <span ref={ref}>
      {isPlusAtStart ? '+' : ''}
      {current}
      {isPlusAtEnd ? '+' : ''}
      {isPercent ? '%' : ''}
    </span>
  );
}

export function StatsSection() {
  return (
    <section className="py-16 md:py-24 relative bg-abyssal-blue" dir="rtl">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="mb-20 flex justify-center text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-2xl md:text-4xl text-palladian font-extrabold tracking-tight"
          >
            أثر يُثبت بالأرقام
          </motion.h2>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {STATS_DATA.map((stat, i) => (
            <motion.div
              key={stat.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="relative p-[1.5px] rounded-3xl overflow-hidden group shadow-[0_0_20px_rgba(255,153,51,0.02)] hover:shadow-[0_0_30px_rgba(255,153,51,0.1)] transition-shadow duration-500"
            >
              
              {/* Spinning Glow Border Layer (2 Angles) */}
              <div className="absolute inset-[-150%] animate-spin [animation-duration:6s] bg-[conic-gradient(from_90deg_at_50%_50%,rgba(255,153,51,0)_0%,rgba(255,153,51,0.8)_25%,rgba(255,153,51,0)_50%,rgba(255,153,51,0.8)_75%,rgba(255,153,51,0)_100%)]"></div>

              {/* Inner Card */}
              <div className="relative bg-abyssal-blue rounded-[calc(1.5rem-1.5px)] p-10 flex flex-col items-center text-center h-full z-10 hover:bg-[#223040] transition-colors duration-500">
                {/* Icon in Circle Arc */}
                <div className="w-16 h-16 rounded-full flex items-center justify-center mb-8 relative">
                  {/* SVG open arc */}
                  <svg 
                    className="absolute inset-0 w-full h-full text-burning-flame/50 -rotate-90 group-hover:rotate-[90deg] transition-transform duration-1000 origin-center" 
                    viewBox="0 0 100 100" 
                    fill="none"
                  >
                    <circle cx="50" cy="50" r="48" stroke="currentColor" strokeWidth="2.5" strokeDasharray="220 100" strokeLinecap="round" />
                  </svg>
                  {/* Icon */}
                  <stat.icon className="text-burning-flame text-2xl relative z-10" />
                </div>

                {/* Value */}
                <h3 className="text-3xl md:text-4xl font-heading font-bold bg-clip-text text-transparent bg-gradient-to-b from-palladian to-burning-flame mb-5 tracking-wide">
                  <CountUpValue targetStr={stat.value} />
                </h3>

                {/* Title & Subtitle */}
                <div className="flex flex-col gap-1.5">
                  <span className="text-palladian font-heading text-lg font-bold">{stat.title}</span>
                  <span className="text-palladian/40 text-[13px] font-medium leading-relaxed">{stat.subtitle}</span>
                </div>
              </div>

            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
