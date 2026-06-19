'use client';

import { motion } from 'framer-motion';

interface SectorCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  index: number;
}

const SectorCard = ({ icon, title, description, index }: SectorCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5, delay: index * 0.15, ease: 'easeOut' }}
      whileHover={{ y: -8, transition: { duration: 0.3 } }}
      className="group relative bg-background border border-border p-8 rounded-2xl transition-colors duration-300 hover:border-emerald-400/30"
    >
      {/* وهج خفيف عند التمرير */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-b from-emerald-400/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

      <div className="relative z-10">
        {/* الأيقونة */}
        <div className="w-14 h-14 bg-emerald-400/10 rounded-xl flex items-center justify-center mb-6">
          {icon}
        </div>

        {/* العنوان */}
        <h3 className="text-xl font-bold mb-3 group-hover:text-emerald-400 transition-colors duration-300">
          {title}
        </h3>

        {/* الوصف */}
        <p className="text-gray-400 text-sm leading-relaxed">{description}</p>

        {/* سهم التفاصيل */}
        <div className="mt-6 flex items-center gap-2 text-emerald-400 text-sm opacity-0 group-hover:opacity-100 transition-all duration-300 translate-x-2 group-hover:translate-x-0">
          <span>اكتشف المزيد</span>
          <span>←</span>
        </div>
      </div>
    </motion.div>
  );
};

/* ──────────────── أيقونات SVG حديثة ──────────────── */
const ServicesIcon = () => (
  <svg
    className="w-8 h-8 text-emerald-400"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
    />
  </svg>
);

const EcommerceIcon = () => (
  <svg
    className="w-8 h-8 text-emerald-400"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
    />
  </svg>
);

const CustomSolutionsIcon = () => (
  <svg
    className="w-8 h-8 text-emerald-400"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
    />
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
    />
  </svg>
);

const sectors = [
  {
    icon: <ServicesIcon />,
    title: 'الخدمات والمؤسسات',
    description:
      'أتمتة كاملة لجدولة المواعيد، إدارة علاقات العملاء (CRM)، تأهيل العملاء المحتملين، وتوفير دعم فني ذكي على مدار الساعة.',
  },
  {
    icon: <EcommerceIcon />,
    title: 'التجارة الإلكترونية والتجزئة',
    description:
      'روبوتات دردشة لزيادة المبيعات، تتبع آلي للشحنات، استرجاع السلات المتروكة، وأتمتة حملات إعادة الاستهداف.',
  },
  {
    icon: <CustomSolutionsIcon />,
    title: 'الأنظمة المخصصة (Custom Solutions)',
    description:
      'لديك تحدٍ فريد؟ نقوم بهندسة وبناء سير عمل (Workflows) مخصص من الصفر يربط جميع أدواتك الحالية ليناسب تعقيدات نشاطك بدقة.',
  },
];

export const SectorsSection = () => {
  return (
    <section id="sectors" className="relative py-24 md:py-32">
      {/* فاصل علوي مزخرف */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-l from-transparent via-emerald-400/20 to-transparent" />

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
            مجالات الأتمتة
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            حلول أتمتة مرنة تناسب كافة الأنشطة التجارية
          </h2>
          <p className="text-gray-400 leading-relaxed">
            نصمم ونبني أنظمة ذكاء اصطناعي تتكيف مع طبيعة وحجم عملك، لضمان أعلى كفاءة تشغيلية مهما كان مجالك.
          </p>
        </motion.div>

        {/* شبكة البطاقات */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {sectors.map((sector, index) => (
            <SectorCard
              key={sector.title}
              icon={sector.icon}
              title={sector.title}
              description={sector.description}
              index={index}
            />
          ))}
        </div>
      </div>

      {/* فاصل سفلي مزخرف */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-l from-transparent via-emerald-400/20 to-transparent" />
    </section>
  );
};
