'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/Button';

export const FinalCtaSection = () => {
  return (
    <section className="relative py-24 md:py-32 overflow-hidden">
      {/* خلفية متدرجة داكنة */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-emerald-950/20 to-background" />

      {/* وهج أخضر مركزي */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-emerald-500/8 rounded-full blur-3xl pointer-events-none" />

      {/* الشبكة الخلفية */}
      <div className="absolute inset-0 animate-grid-move opacity-50" />

      {/* المحتوى */}
      <div className="relative z-10 container mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: 'easeOut' as const }}
          className="max-w-3xl mx-auto"
        >
          {/* أيقونة زخرفية */}
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-emerald-400/10 border border-emerald-400/20 mb-8">
            <svg className="w-8 h-8 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
            </svg>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mb-6">
            هل أنت مستعد لنقل أعمالك{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-l from-emerald-300 to-emerald-500">
              إلى المستوى التالي؟
            </span>
          </h2>

          <p className="text-gray-400 text-lg leading-relaxed mb-10 max-w-2xl mx-auto">
            احجز استشارة مجانية مع فريقنا واكتشف كيف يمكن للأتمتة الذكية أن
            تُضاعف إنتاجيتك وتُخفّض تكاليفك التشغيلية بشكل ملموس.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button variant="primary" size="lg">
              احجز استشارة مجانية
            </Button>
            <Button variant="ghost" size="lg">
              تعرّف على باقاتنا
            </Button>
          </div>

          {/* ملاحظة صغيرة */}
          <p className="mt-8 text-xs text-gray-500">
            🔒 لا نطلب بيانات دفع — الاستشارة الأولى مجانية بالكامل
          </p>
        </motion.div>
      </div>
    </section>
  );
};
