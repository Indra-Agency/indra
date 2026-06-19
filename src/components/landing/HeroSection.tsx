'use client';

import { Suspense } from 'react';
import dynamic from 'next/dynamic';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/Button';

// تحميل مؤجّل (Lazy load) لمكون الـ 3D لتجنب مشاكل SSR
const Hero3DScene = dynamic(
  () =>
    import('@/components/landing/Hero3DScene').then((mod) => ({
      default: mod.Hero3DScene,
    })),
  { ssr: false }
);

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.3,
    },
  },
} as const;

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' as const },
  },
} as const;

// مكون تحميل بديل أثناء تحميل مشهد الـ 3D
const Hero3DSceneFallback = () => (
  <div className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none">
    <div className="w-12 h-12 rounded-full border-2 border-emerald-500/20 border-t-emerald-400 animate-spin" />
  </div>
);

export const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* ──── الخلفيات ──── */}

      {/* ① الشبكة المتحركة */}
      <div className="absolute inset-0 animate-grid-move" />

      {/* ② وهج أخضر خلفي */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-emerald-500/10 rounded-full blur-3xl animate-glow-pulse pointer-events-none" />

      {/* ③ المشهد ثلاثي الأبعاد */}
      <Suspense fallback={<Hero3DSceneFallback />}>
        <Hero3DScene />
      </Suspense>

      {/* ④ طبقة تعتيم متدرجة فوق الـ 3D لضمان وضوح النصوص */}
      <div className="absolute inset-0 z-[1] bg-gradient-to-b from-background/60 via-background/30 to-background/80 pointer-events-none" />

      {/* ──── المحتوى الرئيسي ──── */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 container mx-auto px-6 text-center max-w-4xl"
      >
        {/* شارة صغيرة */}
        <motion.div variants={itemVariants} className="mb-8">
          <span className="inline-flex items-center gap-2 bg-surface/80 backdrop-blur-sm border border-border px-5 py-2 rounded-full text-sm text-gray-400">
            <span className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
            الجيل القادم من أتمتة الأعمال
          </span>
        </motion.div>

        {/* العنوان الرئيسي */}
        <motion.h1
          variants={itemVariants}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6"
        >
          نُحوّل عملياتك إلى{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-l from-emerald-300 to-emerald-500">
            أنظمة ذكية
          </span>
          <br />
          تعمل بلا توقّف
        </motion.h1>

        {/* الوصف */}
        <motion.p
          variants={itemVariants}
          className="text-base sm:text-lg text-gray-400 leading-relaxed max-w-2xl mx-auto mb-10"
        >
          نُنفّذ في Indra أنظمة أتمتة متكاملة مدعومة بالذكاء الاصطناعي ترفع
          الكفاءة، تقلّل التكاليف التشغيلية، وتزيد المبيعات مع دمج سلس في أنظمة
          الـ CRM الخاصة بك.
        </motion.p>

        {/* أزرار الإجراء */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row justify-center gap-4"
        >
          <Button variant="primary" size="lg">
            ابدأ التحول الرقمي
          </Button>
          <Button variant="ghost" size="lg">
            استكشف خدماتنا ←
          </Button>
        </motion.div>

        {/* إحصائيات سريعة */}
        <motion.div
          variants={itemVariants}
          className="mt-16 pt-8 border-t border-border flex flex-col sm:flex-row justify-center gap-8 sm:gap-16"
        >
          <div>
            <div className="text-3xl font-bold text-emerald-400">+150</div>
            <div className="text-sm text-gray-500 mt-1">عميل نشط</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-emerald-400">97%</div>
            <div className="text-sm text-gray-500 mt-1">نسبة رضا العملاء</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-emerald-400">3x</div>
            <div className="text-sm text-gray-500 mt-1">زيادة في الكفاءة</div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};
