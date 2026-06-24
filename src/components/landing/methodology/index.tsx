'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const METHODOLOGY_DATA = [
  {
    id: '01',
    title: 'الاستكشاف والتحليل',
    subtitle: 'بيانات، لا افتراضات',
    description: 'نبني فهمنا على دراسة دقيقة لعملياتك الحالية. نحلل نقاط الاختناق (Bottlenecks) ونحدد الفرص التقنية التي ستحقق أعلى عائد على الاستثمار قبل كتابة أي سطر كود.',
    tags: ['تدقيق العمليات', 'تحليل البيانات', 'دراسة الجدوى'],
  },
  {
    id: '02',
    title: 'تصميم المنظومة',
    subtitle: 'هندسة معمارية متكاملة',
    description: 'لا نعمل في جزر منعزلة. نصمم بنية تحتية برمجية تربط أدواتك، وقواعد بياناتك، وواجهات العمل في نظام بيئي واحد يعمل بتناغم تام.',
    tags: ['تصميم واجهات', 'هندسة قواعد البيانات', 'تخطيط الأنظمة'],
  },
  {
    id: '03',
    title: 'التطوير والأتمتة',
    subtitle: 'تنفيذ دقيق وسريع',
    description: 'نبدأ بتحويل التصاميم إلى واقع باستخدام أحدث تقنيات الذكاء الاصطناعي والأتمتة. نختبر كل مكون لضمان الأداء الفائق والأمان التام.',
    tags: ['برمجة مخصصة', 'ربط API', 'دمج الذكاء الاصطناعي'],
  },
  {
    id: '04',
    title: 'الإطلاق والقياس',
    subtitle: 'قرارات مبنية على الأداء',
    description: 'الإطلاق هو البداية. نبني لوحات تحكم (Dashboards) لمراقبة الأداء لحظة بلحظة، ونستخدم البيانات لتحسين وتوسيع الأنظمة باستمرار.',
    tags: ['إطلاق تدريجي', 'تقارير ذكية', 'صيانة مستمرة'],
  },
];

export function MethodologySection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"],
  });

  return (
    <section id="methodology" className="py-24 relative bg-[#0A0A0A]" dir="rtl">
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        {/* Header */}
        <div className="text-center mb-32">
          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-emerald-400 font-bold mb-4 text-xl tracking-wide"
          >
            المنهجية
          </motion.h3>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-b from-white to-zinc-400 pb-4 leading-normal"
          >
            كيف نعمل
          </motion.h2>
        </div>

        {/* Timeline Layout */}
        <div ref={containerRef} className="relative">
          {/* Main Vertical Line (background faint) */}
          <div className="absolute top-0 bottom-0 right-[80px] md:right-[120px] lg:right-[180px] w-[2px] bg-emerald-500/20 translate-x-1/2" />
          
          {/* Main Vertical Line (filled glowing animated) */}
          <motion.div 
            className="absolute top-0 bottom-0 right-[80px] md:right-[120px] lg:right-[180px] w-[2px] bg-emerald-400 shadow-[0_0_15px_#34d399] translate-x-1/2 origin-top z-0"
            style={{ scaleY: scrollYProgress }}
          />

          <div className="flex flex-col gap-24 md:gap-32">
            {METHODOLOGY_DATA.map((step, index) => (
              <motion.div 
                key={step.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="relative grid grid-cols-[80px_1fr] md:grid-cols-[120px_1fr] lg:grid-cols-[180px_1fr] gap-8 md:gap-12 lg:gap-20 items-center"
              >
                
                {/* Huge Number (Right side of the line) */}
                <div className="flex items-center justify-center">
                  <span className="text-[4rem] md:text-[5rem] lg:text-[6.5rem] font-serif font-extrabold bg-gradient-to-b from-emerald-200 to-emerald-800 text-transparent bg-clip-text leading-none select-none">
                    {step.id}
                  </span>
                </div>

                {/* Node (Middle on the line) */}
                <div className="absolute right-[80px] md:right-[120px] lg:right-[180px] top-1/2 -translate-y-1/2 translate-x-1/2 w-4 h-4 rounded-full bg-emerald-400 shadow-[0_0_15px_#34d399] z-10" />

                {/* Content Box (Left side of the line) */}
                <div className="flex flex-col items-start text-right py-4 z-10">
                  <h3 className="text-white font-extrabold text-2xl md:text-3xl lg:text-[2.5rem] mb-3 tracking-tight">{step.title}</h3>
                  <p className="text-emerald-400/90 text-sm md:text-base font-medium mb-4">{step.subtitle}</p>
                  <p className="text-zinc-300 leading-[1.8] mb-6 text-sm md:text-base max-w-xl font-serif">{step.description}</p>
                  
                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 justify-start mt-auto">
                    {step.tags.map((tag, i) => (
                      <span 
                        key={i}
                        className="bg-emerald-900/10 border border-emerald-500/20 text-emerald-300 text-xs md:text-sm font-bold px-3 py-1.5 md:px-4 md:py-2 rounded-full cursor-default hover:bg-emerald-900/20 transition-colors"
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
