'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { FaDatabase, FaBolt, FaFileAlt, FaChartBar, FaBell, FaMicrochip } from 'react-icons/fa';

interface NodeProps {
  icon: React.ReactNode;
  label: string;
  sub: string;
  delay?: number;
  x: string;
  y: string;
  glowColor?: string;
  isCenter?: boolean;
}

const AnimatedNode = ({ icon, label, sub, delay = 0, x, y, glowColor = '#ff9933', isCenter = false }: NodeProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay, type: 'spring' }}
      className={`absolute flex items-center gap-3 p-3 md:p-4 rounded-2xl border border-white/10 bg-abyssal-blue transform -translate-x-1/2 -translate-y-1/2 shadow-2xl ${isCenter ? 'z-20 w-44 md:w-52 flex-col justify-center text-center py-6 md:py-8' : 'z-10 w-44 md:w-56'}`}
      style={{ left: x, top: y }}
      dir="rtl"
    >
      {isCenter && (
        <motion.div 
          className="absolute inset-0 rounded-2xl blur-2xl pointer-events-none" 
          style={{ backgroundColor: glowColor }} 
          animate={{ opacity: [0.15, 0.4, 0.15] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
        />
      )}
      <div className={`flex items-center justify-center rounded-xl bg-white/5 text-burning-flame ${isCenter ? 'w-14 h-14 text-3xl mb-2' : 'w-12 h-12 text-xl flex-shrink-0'}`}>
        {icon}
      </div>
      <div className={`${isCenter ? '' : 'text-right overflow-hidden flex-1'}`}>
        <h4 className="text-sm md:text-base font-bold text-white leading-tight truncate">{label}</h4>
        <p className="text-xs text-zinc-400 font-sans leading-tight mt-1 truncate" dir="ltr">{sub}</p>
      </div>
    </motion.div>
  );
};

export function DiagramFlowSection() {
  const lineVariants = {
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
      <div className="max-w-6xl mx-auto px-4 md:px-8 relative z-10">
        <div className="text-center mb-16 max-w-3xl mx-auto" dir="rtl">
          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-burning-flame font-bold mb-2 tracking-wide text-sm"
          >
            بنية تحتية متطورة
          </motion.h3>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-5xl font-extrabold text-white mb-4"
          >
            ندير عملياتك المعقدة بكفاءة وأمان
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-zinc-400 text-sm md:text-base leading-relaxed"
          >
            نحن لا نكتفي بكتابة الأكواد، بل نصمم لك أنظمة مؤتمتة متكاملة. تستقبل أعمالك، وتعالج بياناتك بذكاء فائق، لتتحول في النهاية إلى نتائج ورؤى تساعدك على مضاعفة أرباحك وتوسيع نطاق عملك براحة تامة.
          </motion.p>
        </div>

        {/* Diagram Container */}
        {/* We use a fixed aspect ratio so the SVG and absolute % positioning scale perfectly together */}
        <div className="relative w-full max-w-5xl mx-auto aspect-[1/1] md:aspect-[2/1] mt-8 bg-transparent">
          
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
                stroke="#ff9933" 
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
                fill="#ff9933" 
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
          <AnimatedNode icon={<FaDatabase />} label="بيانات عملائك" sub="تخزين سحابي مشفر وآمن" x="15%" y="20%" delay={0.2} />
          <AnimatedNode icon={<FaBolt />} label="تكامل الأنظمة" sub="ربط سلس واستجابة لحظية" x="15%" y="50%" delay={0.3} />
          <AnimatedNode icon={<FaFileAlt />} label="إدارة الأصول" sub="مزامنة وتخزين عالي الأداء" x="15%" y="80%" delay={0.4} />

          {/* Center (x=50%) */}
          <AnimatedNode icon={<FaMicrochip />} label="النواة الذكية" sub="معالجة فائقة السرعة للعمليات" x="50%" y="50%" delay={0.5} isCenter glowColor="#ff9933" />

          {/* Right Side (x=85%) */}
          <AnimatedNode icon={<FaChartBar />} label="لوحات تحكم تفاعلية" sub="رؤى وتحليلات لدعم قراراتك" x="85%" y="20%" delay={0.6} />
          <AnimatedNode icon={<FaBell />} label="متابعة مستمرة" sub="إشعارات وتقارير لحظية" x="85%" y="80%" delay={0.7} />

        </div>
      </div>
    </section>
  );
}
