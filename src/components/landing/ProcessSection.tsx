'use client';

import { motion } from 'framer-motion';

/* ──────────────── بيانات المراحل ──────────────── */
const steps = [
  {
    number: '01',
    title: 'جلسة الاستشارة وفهم الأعمال',
    description:
      'نبدأ بجلسة تحليلية معمّقة لفهم طبيعة عملك، تحدياتك التشغيلية، وأهدافك. نُحدّد نقاط الألم ونرسم خريطة واضحة لفرص الأتمتة المتاحة.',
  },
  {
    number: '02',
    title: 'بناء الاستراتيجية والتطوير',
    description:
      'نُصمّم استراتيجية أتمتة مخصصة بالكامل لاحتياجاتك، ثم نبني الأنظمة والروبوتات الذكية باستخدام أحدث تقنيات الذكاء الاصطناعي مع اختبارات شاملة.',
  },
  {
    number: '03',
    title: 'الإطلاق والدمج مع الأنظمة',
    description:
      'نُطلق النظام بسلاسة تامة مع دمج كامل في أنظمة الـ CRM والأدوات الحالية لديك، مع تدريب فريقك على الاستخدام الأمثل وضمان الانتقال دون أي تعطّل.',
  },
  {
    number: '04',
    title: 'الدعم الفني والتحسين المستمر',
    description:
      'لا نتوقف عند الإطلاق — نُراقب الأداء، نُحلّل البيانات، ونُحسّن الأنظمة باستمرار. فريق الدعم متاح لضمان عمل كل شيء بأعلى كفاءة.',
  },
];

/* ──────────────── مكون خطوة واحدة ──────────────── */
interface StepProps {
  number: string;
  title: string;
  description: string;
  index: number;
  isLast: boolean;
}

const ProcessStep = ({ number, title, description, index, isLast }: StepProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.5, delay: index * 0.15, ease: 'easeOut' as const }}
      className="relative flex gap-6 md:gap-8"
    >
      {/* عمود المؤشر والخط */}
      <div className="flex flex-col items-center shrink-0">
        {/* دائرة رقم الخطوة */}
        <div className="relative w-12 h-12 rounded-full bg-emerald-400/10 border border-emerald-400/30 flex items-center justify-center z-10">
          <span className="text-emerald-400 text-sm font-bold">{number}</span>
          {/* تأثير النبض */}
          <div className="absolute inset-0 rounded-full bg-emerald-400/10 animate-ping opacity-20" />
        </div>
        {/* الخط الرابط */}
        {!isLast && (
          <div className="w-px h-full min-h-[80px] bg-gradient-to-b from-emerald-400/30 to-border" />
        )}
      </div>

      {/* محتوى الخطوة */}
      <div className="pb-12 md:pb-16">
        <h3 className="text-xl font-bold mb-3">{title}</h3>
        <p className="text-gray-400 text-sm leading-relaxed max-w-lg">{description}</p>
      </div>
    </motion.div>
  );
};

/* ──────────────── القسم الرئيسي ──────────────── */
export const ProcessSection = () => {
  return (
    <section id="process" className="relative py-24 md:py-32">
      <div className="container mx-auto px-6">
        {/* عنوان القسم */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16 md:mb-20 max-w-2xl mx-auto"
        >
          <span className="text-emerald-400 text-sm font-medium tracking-wider mb-4 block">
            آلية العمل
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            أربع خطوات نحو التحوّل الرقمي الكامل
          </h2>
          <p className="text-gray-400 leading-relaxed">
            رحلة واضحة ومنظّمة من الاستشارة الأولى وحتى الدعم المستمر، نُرافقك
            في كل مرحلة لضمان نجاح مشروع الأتمتة.
          </p>
        </motion.div>

        {/* المسار الزمني */}
        <div className="max-w-2xl mx-auto">
          {steps.map((step, index) => (
            <ProcessStep
              key={step.number}
              number={step.number}
              title={step.title}
              description={step.description}
              index={index}
              isLast={index === steps.length - 1}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
