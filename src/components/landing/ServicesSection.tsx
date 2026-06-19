'use client';

import { motion } from 'framer-motion';

/* ──────────────── بيانات الخدمات ──────────────── */
const services = [
  {
    title: 'أتمتة نظام الـ CRM',
    description:
      'ندمج أنظمة إدارة علاقات العملاء مع أدوات الأتمتة لتوحيد البيانات، تسريع المتابعة، وضمان عدم فقدان أي عميل محتمل في خط الأنابيب.',
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75m16.5 0c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125" />
      </svg>
    ),
  },
  {
    title: 'روبوتات الدردشة الذكية',
    description:
      'روبوتات محادثة مدعومة بالذكاء الاصطناعي تتحدث بلغة عملائك، تجيب على استفساراتهم فوراً، وتُحوّل المحادثات إلى صفقات مُغلقة على مدار الساعة.',
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 01.865-.501 48.172 48.172 0 003.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z" />
      </svg>
    ),
  },
  {
    title: 'جدولة المواعيد التلقائية',
    description:
      'نظام حجز ذكي يعمل تلقائياً: يستقبل طلبات المواعيد، يتحقق من التوافر، يُرسل تأكيدات وتذكيرات، ويقلّل حالات الغياب بنسبة تصل إلى 60%.',
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
      </svg>
    ),
  },
  {
    title: 'أتمتة التسويق',
    description:
      'حملات تسويقية آلية متعددة القنوات: بريد إلكتروني، رسائل SMS، واتساب، ووسائل التواصل الاجتماعي — مع تخصيص ذكي بناءً على سلوك كل عميل.',
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5m.75-9l3-3 2.148 2.148A12.061 12.061 0 0116.5 7.605" />
      </svg>
    ),
  },
  {
    title: 'تأهيل العملاء المحتملين',
    description:
      'نظام تصفية وتأهيل تلقائي للعملاء المحتملين يُصنّفهم بحسب جاهزيتهم للشراء، ويُوجّه الفريق مباشرة نحو الفرص الأعلى قيمة.',
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
      </svg>
    ),
  },
];

/* ──────────────── مكون بطاقة الخدمة ──────────────── */
interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  index: number;
}

const ServiceCard = ({ title, description, icon, index }: ServiceCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.5, delay: index * 0.1, ease: 'easeOut' as const }}
      className="group relative bg-surface border border-border rounded-2xl p-8 transition-all duration-500 hover:border-emerald-400/30"
    >
      {/* وهج خلفي عند التحويم */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-b from-emerald-400/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

      <div className="relative z-10">
        {/* الأيقونة */}
        <div className="w-12 h-12 bg-emerald-400/10 text-emerald-400 rounded-xl flex items-center justify-center mb-5 group-hover:bg-emerald-400/20 transition-colors duration-300">
          {icon}
        </div>

        {/* العنوان */}
        <h3 className="text-lg font-bold mb-3 group-hover:text-emerald-400 transition-colors duration-300">
          {title}
        </h3>

        {/* الوصف */}
        <p className="text-gray-400 text-sm leading-relaxed">{description}</p>
      </div>
    </motion.div>
  );
};

/* ──────────────── القسم الرئيسي ──────────────── */
export const ServicesSection = () => {
  return (
    <section id="services" className="relative py-24 md:py-32 bg-surface/50">
      {/* فاصل علوي */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-l from-transparent via-border to-transparent" />

      <div className="container mx-auto px-6">
        {/* عنوان القسم */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16 max-w-2xl mx-auto"
        >
          <span className="text-emerald-400 text-sm font-medium tracking-wider mb-4 block">
            خدماتنا
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            أدوات أتمتة متكاملة لكل جانب من أعمالك
          </h2>
          <p className="text-gray-400 leading-relaxed">
            من إدارة العملاء إلى التسويق الآلي، نوفّر لك منظومة متكاملة تعمل
            بتناغم لتحقيق أقصى كفاءة تشغيلية ممكنة.
          </p>
        </motion.div>

        {/* شبكة الخدمات */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <ServiceCard
              key={service.title}
              title={service.title}
              description={service.description}
              icon={service.icon}
              index={index}
            />
          ))}
        </div>
      </div>

      {/* فاصل سفلي */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-l from-transparent via-border to-transparent" />
    </section>
  );
};
