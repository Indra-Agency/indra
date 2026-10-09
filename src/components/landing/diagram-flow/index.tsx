'use client';

import React from 'react';
import { motion, Variants } from 'framer-motion';
import { FaDatabase, FaBolt, FaFileAlt, FaChartBar, FaBell, FaMicrochip } from 'react-icons/fa';
import { useLanguage } from '@/i18n/LanguageContext';

interface NodeProps {
  icon: React.ReactNode;
  label: string;
  sub: string;
  delay?: number;
  x: string;
  y: string;
  glowColor?: string;
  isCenter?: boolean;
  dir?: 'rtl' | 'ltr';
}

const AnimatedNode = ({ icon, label, sub, delay = 0, x, y, glowColor = 'var(--color-primary)', isCenter = false, dir = 'rtl' }: NodeProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay, type: 'spring' }}
      // Use percentages for width, responsive padding
      className={`absolute flex items-center gap-1.5 md:gap-3 p-1.5 sm:p-2 md:p-4 rounded-xl md:rounded-2xl border border-white/10 bg-abyssal-blue transform -translate-x-1/2 -translate-y-1/2 shadow-2xl ${
        isCenter 
          ? 'z-20 w-[26%] flex-col justify-center text-center py-2 sm:py-4 md:py-8' 
          : 'z-10 w-[29%]'
      }`}
      style={{ left: x, top: y }}
      dir={dir}
    >
      {isCenter && (
        <motion.div 
          className="absolute inset-0 rounded-xl md:rounded-2xl blur-xl md:blur-2xl pointer-events-none" 
          style={{ backgroundColor: glowColor }} 
          animate={{ opacity: [0.15, 0.4, 0.15] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
        />
      )}
      <div className={`flex items-center justify-center rounded-lg md:rounded-xl bg-white/5 text-burning-flame ${
        isCenter ? 'w-8 h-8 sm:w-10 sm:h-10 md:w-14 md:h-14 text-xl md:text-3xl mb-1 md:mb-2' : 'w-6 h-6 sm:w-8 sm:h-8 md:w-12 md:h-12 text-sm sm:text-base md:text-xl flex-shrink-0'
      }`}>
        {icon}
      </div>
      <div className={isCenter ? '' : `${dir === 'rtl' ? 'text-right' : 'text-left'} overflow-hidden flex-1`}>
        <h3 className="text-[10px] sm:text-xs md:text-base font-bold text-white leading-tight truncate">{label}</h3>
        <p className="text-[8px] sm:text-[10px] md:text-xs text-zinc-400 font-sans leading-tight mt-0.5 md:mt-1 truncate" dir={dir}>{sub}</p>
      </div>
    </motion.div>
  );
};

export function DiagramFlowSection() {
  const { t, dir } = useLanguage();

  const lineVariants: Variants = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: { 
      pathLength: 1, 
      opacity: 0.3,
      transition: { duration: 2, ease: "easeInOut" }
    }
  };

  // SVG Bezier Paths connecting edges of the boxes
  // Left nodes (x=15%) to Center (x=50%)
  const pathLT = "M 250 100 C 320 100, 330 250, 400 250";
  const pathLM = "M 250 250 L 400 250";
  const pathLB = "M 250 400 C 320 400, 330 250, 400 250";
  // Center (x=50%) to Right nodes (x=85%)
  const pathRT = "M 600 250 C 670 250, 680 100, 750 100";
  const pathRB = "M 600 250 C 670 250, 680 400, 750 400";

  return (
    <section className="py-24 relative bg-transparent overflow-hidden" dir="ltr">
      <div className="max-w-6xl mx-auto px-2 md:px-8 relative z-10">
        <div className="text-center mb-16 max-w-3xl mx-auto" dir={dir}>
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-burning-flame font-bold mb-2 tracking-wide text-sm block"
          >
            {t.diagram.subtitle}
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-5xl font-extrabold text-white mb-4"
          >
            {t.diagram.title}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-zinc-400 text-sm md:text-base leading-relaxed px-4"
          >
            {t.diagram.description}
          </motion.p>
        </div>

        {/* Diagram Container */}
        {/* We use a fixed aspect ratio so the SVG and absolute % positioning scale perfectly together on all screens */}
        <div className="relative w-full max-w-5xl mx-auto aspect-[2/1] mt-8 bg-transparent">
          
          {/* Animated SVG Connections */}
          <svg 
            className="absolute inset-0 w-full h-full pointer-events-none" 
            style={{ zIndex: 1 }}
            viewBox="0 0 1000 500"
            preserveAspectRatio="xMidYMid meet"
          >
            <defs>
              <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
                <feGaussianBlur stdDeviation="4" result="blur" />
                <feComposite in="SourceGraphic" in2="blur" operator="over" />
              </filter>
            </defs>

            {/* Render Lines */}
            {[pathLT, pathLM, pathLB, pathRT, pathRB].map((d, i) => (
              <motion.path
                key={i}
                d={d}
                fill="none" 
                stroke="var(--color-primary)" 
                strokeWidth="1.5"
                variants={lineVariants} 
                initial="hidden" 
                whileInView="visible" 
                viewport={{ once: true }}
              />
            ))}

            {/* Flowing animated dots over curves (Pill shapes that rotate along path) */}
            {[
              { path: pathLT, dur: "2.5s", delay: "0s" },
              { path: pathLM, dur: "2.5s", delay: "0.5s" },
              { path: pathLB, dur: "2.5s", delay: "1s" },
              { path: pathRT, dur: "2.5s", delay: "0.2s" },
              { path: pathRB, dur: "2.5s", delay: "0.7s" },
            ].map((anim, i) => (
              <motion.path 
                key={`dot-${i}`}
                d="M -6,-2 a 2,2 0 0,0 0,4 l 12,0 a 2,2 0 0,0 0,-4 z" 
                fill="var(--color-primary)" 
                filter="url(#glow)"
              >
                <animateMotion 
                  dur={anim.dur} 
                  begin={anim.delay}
                  repeatCount="indefinite" 
                  rotate="auto" 
                  path={anim.path} 
                />
              </motion.path>
            ))}
          </svg>

          {/* Nodes */}
          {/* Left Side (x=15%) */}
          <AnimatedNode icon={<FaDatabase />} label={t.diagram.node1.label} sub={t.diagram.node1.sub} x="15%" y="20%" delay={0.2} dir={dir} />
          <AnimatedNode icon={<FaBolt />} label={t.diagram.node2.label} sub={t.diagram.node2.sub} x="15%" y="50%" delay={0.3} dir={dir} />
          <AnimatedNode icon={<FaFileAlt />} label={t.diagram.node3.label} sub={t.diagram.node3.sub} x="15%" y="80%" delay={0.4} dir={dir} />

          {/* Center (x=50%) */}
          <AnimatedNode icon={<FaMicrochip />} label={t.diagram.center.label} sub={t.diagram.center.sub} x="50%" y="50%" delay={0.5} isCenter glowColor="var(--color-primary)" dir={dir} />

          {/* Right Side (x=85%) */}
          <AnimatedNode icon={<FaChartBar />} label={t.diagram.node4.label} sub={t.diagram.node4.sub} x="85%" y="20%" delay={0.6} dir={dir} />
          <AnimatedNode icon={<FaBell />} label={t.diagram.node5.label} sub={t.diagram.node5.sub} x="85%" y="80%" delay={0.7} dir={dir} />

        </div>
      </div>
    </section>
  );
}
