'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

/* ──────────────── بيانات الأسئلة ──────────────── */
const faqs = [
  {
    question: 'هل حلول الأتمتة تناسب المشاريع الصغيرة والمتوسطة؟',
    answer:
      'بالتأكيد. نُصمّم أنظمتنا لتتناسب مع جميع أحجام الأعمال. في الواقع، المشاريع الصغيرة والمتوسطة هي الأكثر استفادة من الأتمتة لأنها تمكّنها من المنافسة بكفاءة عالية دون الحاجة لتوظيف فرق كبيرة.',
  },
  {
    question: 'كم يستغرق وقت تنفيذ ودمج نظام الأتمتة؟',
    answer:
      'يعتمد ذلك على نطاق المشروع وتعقيده. المشاريع البسيطة تستغرق من 1 إلى 2 أسبوع، بينما الأنظمة المتكاملة قد تحتاج من 4 إلى 8 أسابيع. نُقدّم جدولاً زمنياً واضحاً في مرحلة الاستشارة.',
  },
  {
    question: 'هل تتكامل أنظمتكم مع أنظمة الـ CRM والأدوات الحالية لدينا؟',
    answer:
      'نعم، نتكامل مع أكثر من 50 أداة ونظام شائع مثل HubSpot، Salesforce، Zoho، Google Workspace، وأنظمة ERP المحلية. إذا كان لديك نظام خاص، نبني له واجهة تكامل مخصصة (API).',
  },
  {
    question: 'ما الفرق بين روبوت الدردشة العادي والروبوت المدعوم بالذكاء الاصطناعي؟',
    answer:
      'الروبوت العادي يعتمد على ردود جاهزة ومحدودة. أما روبوتاتنا المدعومة بالذكاء الاصطناعي فهي تفهم السياق، تتعلّم من المحادثات السابقة، وتستطيع التعامل مع استفسارات معقدة وغير متوقعة بلغة طبيعية.',
  },
  {
    question: 'هل تقدمون دعماً فنياً بعد الإطلاق؟',
    answer:
      'نعم، نُقدّم دعماً فنياً مستمراً يشمل مراقبة الأداء، تحسين الأنظمة، وتحديثات دورية. كل باقة تتضمن فترة دعم مجاني، مع إمكانية تمديد عقود الصيانة حسب الحاجة.',
  },
  {
    question: 'كيف أقيس العائد على الاستثمار (ROI) من الأتمتة؟',
    answer:
      'نُقدّم لوحة تحكم تحليلية تُظهر مؤشرات الأداء الرئيسية: توفير الوقت، تقليل التكاليف التشغيلية، زيادة معدلات التحويل، وتحسين رضا العملاء. معظم عملائنا يُحققون عائداً إيجابياً خلال أول 3 أشهر.',
  },
];

/* ──────────────── مكون سؤال واحد ──────────────── */
interface FaqItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
  index: number;
}

const FaqItem = ({ question, answer, isOpen, onToggle, index }: FaqItemProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-30px' }}
      transition={{ duration: 0.4, delay: index * 0.08, ease: 'easeOut' as const }}
      className="border-b border-border last:border-b-0"
    >
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between py-6 text-right cursor-pointer group"
      >
        <h3 className="text-base md:text-lg font-medium pe-4 group-hover:text-emerald-400 transition-colors duration-300">
          {question}
        </h3>
        <motion.div
          animate={{ rotate: isOpen ? 45 : 0 }}
          transition={{ duration: 0.3 }}
          className="shrink-0 w-8 h-8 rounded-full border border-border flex items-center justify-center text-emerald-400 group-hover:border-emerald-400/40 transition-colors duration-300"
        >
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
          </svg>
        </motion.div>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' as const }}
            className="overflow-hidden"
          >
            <p className="pb-6 text-gray-400 text-sm leading-relaxed max-w-3xl">
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

/* ──────────────── القسم الرئيسي ──────────────── */
export const FaqSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const handleToggle = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section id="faq" className="relative py-24 md:py-32 bg-surface/50">
      {/* فاصل علوي */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-l from-transparent via-border to-transparent" />

      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* العمود الأيسر: عنوان القسم */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-4"
          >
            <span className="text-emerald-400 text-sm font-medium tracking-wider mb-4 block">
              أسئلة شائعة
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              كل ما تحتاج معرفته
            </h2>
            <p className="text-gray-400 leading-relaxed">
              إجابات واضحة على أكثر الأسئلة التي يطرحها عملاؤنا حول خدمات
              الأتمتة والذكاء الاصطناعي.
            </p>
          </motion.div>

          {/* العمود الأيمن: الأسئلة */}
          <div className="lg:col-span-8">
            <div className="bg-background border border-border rounded-2xl p-6 md:p-8">
              {faqs.map((faq, index) => (
                <FaqItem
                  key={index}
                  question={faq.question}
                  answer={faq.answer}
                  isOpen={openIndex === index}
                  onToggle={() => handleToggle(index)}
                  index={index}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* فاصل سفلي */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-l from-transparent via-border to-transparent" />
    </section>
  );
};
