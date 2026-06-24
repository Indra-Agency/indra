'use client';

import { motion } from 'framer-motion';
import { FiCalendar, FiMapPin, FiArrowLeft } from 'react-icons/fi';

const EXPERIENCE_DATA = [
  {
    company: 'متجر عُدّتي',
    badge: 'عمل عن بُعد',
    title: 'مهندس برمجيات ومطور أول',
    date: '2026',
    location: 'السعودية (عن بُعد)',
    pillClass: 'bg-red-50 text-[#d96a5b]', 
    bgColor: 'bg-white',
    textColor: 'text-black',
    shortDesc: 'قيادة التطوير التقني الشامل لمتجر "عُدّتي" الإلكتروني، وتأسيس بنية تحتية قابلة للتوسع السريع لخدمة السوق السعودي.',
    achievements: [
      'بناء تطبيق Flutter متكامل يربط بين تجربة المستخدم المريحة والأداء السريع.',
      'دمج شات بوت ذكي يعمل بالذكاء الاصطناعي لتحسين خدمة العملاء والرد الآلي.',
      'تأسيس نظام ولاء عملاء متطور لزيادة الاحتفاظ بالعملاء والمبيعات المتكررة.',
      'ربط وتطوير لوحات أداء (Dashboards) لحظية لمراقبة العمليات والمبيعات بدقة.',
      'دمج بوابات دفع متكاملة وآمنة لضمان موثوقية العمليات المالية.',
      'إنجاز التطوير والتصميم والإطلاق الكامل على المتاجر في أقل من شهر واحد.'
    ],
    tech: [
      { name: 'Flutter', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/flutter/flutter-original.svg' },
      { name: 'AI', img: 'https://upload.wikimedia.org/wikipedia/commons/0/04/ChatGPT_logo.svg' },
      { name: 'Payment', img: 'https://api.iconify.design/logos:visa.svg' },
      { name: 'Firebase', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/firebase/firebase-plain.svg' },
      { name: 'Supabase', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/supabase/supabase-original.svg' }
    ],
    btnClass: 'bg-[#4FFFB0] text-black border-2 border-black shadow-[3px_3px_0_0_#000]'
  },
  {
    company: 'Play Game',
    badge: 'عمل عن بُعد',
    title: 'مطور واجهات وتحسين محركات البحث',
    date: '2026',
    location: 'دول الخليج (عن بُعد)',
    pillClass: 'bg-white text-black shadow-sm',
    bgColor: 'bg-[#4FFFB0]',
    textColor: 'text-black',
    shortDesc: 'تطوير منصة ترفيهية شاملة لبيع بطاقات الألعاب والمسلسلات، مع التركيز المكثف على سرعة الأداء واكتساب العملاء عضوياً.',
    achievements: [
      'بناء الموقع من الصفر ليوفر جميع بطاقات الترفيه الرقمية بأسلوب عرض جذاب ومبسط.',
      'تطوير تجربة المستخدم (UI/UX) وهندسة الواجهات لضمان تصفح سلس وسريع.',
      'تنفيذ استراتيجيات تحسين محركات البحث (SEO) المتقدمة لرفع ترتيب الموقع في نتائج البحث.',
      'إنجاز المشروع بالكامل واكتساب ثقة محركات البحث في وقت قياسي جداً (شهر واحد).'
    ],
    tech: [
      { name: 'WordPress', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/wordpress/wordpress-plain.svg' },
      { name: 'SEO', img: 'https://api.iconify.design/flat-color-icons:search.svg' },
      { name: 'GA4', img: 'https://api.iconify.design/logos:google-analytics.svg' },
      { name: 'Optimization', img: 'https://api.iconify.design/flat-color-icons:positive-dynamic.svg' }
    ],
    btnClass: 'bg-white text-black border-2 border-black shadow-[3px_3px_0_0_#000]'
  },
  {
    company: 'منظومة Delivery App',
    badge: 'دوام كامل',
    title: 'مؤسس تقني ومهندس أنظمة',
    date: '2023',
    location: 'اليمن',
    pillClass: 'bg-red-50 text-[#d96a5b]', 
    bgColor: 'bg-white',
    textColor: 'text-black',
    shortDesc: 'هندسة وتطوير منظومة توصيل ونقل بضائع متكاملة مصممة خصيصاً لتلبية احتياجات السوق اليمني، وربط كافة الأطراف في بيئة موحدة.',
    achievements: [
      'بناء 3 تطبيقات مدمجة ومترابطة (تطبيق للعميل، تطبيق للمشرفين، وتطبيق للسائقين).',
      'تطوير نظام تتبع جغرافي لحظي (Real-time Tracking) باستخدام خرائط جوجل لضمان دقة التوصيل.',
      'تصميم قواعد بيانات ضخمة وآمنة للتعامل مع آلاف الطلبات اليومية بكفاءة عالية.',
      'أتمتة العمليات الإدارية للمشرفين، وتوفير أدوات دقيقة لتحليل أداء السائقين.',
      'الانتهاء من التطوير والربط المتبادل وإطلاق المنظومة بالكامل في شهرين فقط.'
    ],
    tech: [
      { name: 'Flutter', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/flutter/flutter-original.svg' },
      { name: 'AI', img: 'https://upload.wikimedia.org/wikipedia/commons/0/04/ChatGPT_logo.svg' },
      { name: 'Firebase', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/firebase/firebase-plain.svg' },
      { name: 'Google Maps', img: 'https://upload.wikimedia.org/wikipedia/commons/a/aa/Google_Maps_icon_%282020%29.svg' }
    ],
    btnClass: 'bg-[#4FFFB0] text-black border-2 border-black shadow-[3px_3px_0_0_#000]'
  }
];

export function ExperienceSection() {
  return (
    <section id="experience" className="py-24 relative" dir="rtl">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Section Header */}
        <div className="mb-20 flex flex-col items-center text-center">
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-emerald-400 font-semibold tracking-wider text-sm mb-3 uppercase"
          >
            المسيرة المهنية
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-white font-black text-4xl md:text-5xl lg:text-6xl tracking-tight"
          >
            أين صنعت الأثر
          </motion.h2>
        </div>

        {/* Timeline Container */}
        <div className="relative w-full">
          
          {/* Vertical Center Line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-[2px] bg-emerald-400/50 transform -translate-x-1/2 hidden lg:block"></div>

          <div className="space-y-12 lg:space-y-20">
            {EXPERIENCE_DATA.map((exp, i) => {
              const isEven = i % 2 === 0;
              const flexDir = isEven ? 'lg:flex-row' : 'lg:flex-row-reverse';

              return (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: 0.1 }}
                  viewport={{ once: true, margin: "-100px" }}
                  className={`relative flex flex-col ${flexDir} items-center justify-between w-full gap-8 lg:gap-0`}
                >
                  
                  {/* Center Dot */}
                  <div className="hidden lg:flex absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[18px] h-[18px] rounded-full border-[3px] border-[#A7F3D0] bg-[#0A0A0A] z-10"></div>
                  
                  {/* Card (Wider and less padding) */}
                  <div className={`w-full lg:w-[calc(50%-2.5rem)] p-6 md:p-8 rounded-[1.5rem] shadow-2xl ${exp.bgColor} ${exp.textColor}`}>
                    
                    {/* Top Row: Company & Badge */}
                    <div className="flex flex-wrap items-center justify-between gap-3 mb-3">
                      <span className="font-extrabold text-lg md:text-xl">{exp.company}</span>
                      <span className="bg-black/5 px-3 py-1 rounded-full text-[11px] font-bold border border-black/5">
                        {exp.badge}
                      </span>
                    </div>

                    {/* Job Title */}
                    <h3 className="text-2xl md:text-3xl font-black mb-4 tracking-tight leading-tight">
                      {exp.title}
                    </h3>
                    
                    {/* Date & Location Pills */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      <div className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md text-[12px] md:text-[13px] font-bold ${exp.pillClass}`}>
                        <FiMapPin className="text-sm" /> {exp.location}
                      </div>
                      <div className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md text-[12px] md:text-[13px] font-bold ${exp.pillClass}`}>
                        <FiCalendar className="text-sm" /> {exp.date}
                      </div>
                    </div>

                    {/* Short Description */}
                    <p className="text-[13.5px] md:text-[14px] font-medium leading-[1.7] opacity-90 mb-5">
                      {exp.shortDesc}
                    </p>

                    {/* Achievements */}
                    <ul className="space-y-2 mb-6 w-full">
                      {exp.achievements.map((ach, idx) => (
                        <li key={idx} className="flex items-start gap-2.5 text-[13px] md:text-[13.5px] font-bold opacity-90 leading-[1.6]">
                          <svg xmlns="http://www.w3.org/2000/svg" className="w-[16px] h-[16px] shrink-0 mt-0.5 opacity-70" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M9 14 4 9l5-5" />
                            <path d="M4 9h10.5a5.5 5.5 0 0 1 5.5 5.5v.5" />
                          </svg>
                          <span>{ach}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Tech Stack Row */}
                    <div className="flex flex-wrap justify-start items-center gap-2.5 md:gap-3 mt-auto mb-5">
                      {exp.tech.map((tech, idx) => (
                        <div key={idx} className="flex flex-col items-center gap-1 shrink-0">
                          <div className="w-10 h-10 bg-white rounded-xl border border-black/5 shadow-sm flex items-center justify-center transition-transform hover:-translate-y-1">
                            <img 
                              src={tech.img} 
                              alt={tech.name} 
                              className="w-[20px] h-[20px] object-contain"
                            />
                          </div>
                          <span className="text-[8.5px] font-bold opacity-80 text-center whitespace-nowrap">
                            {tech.name}
                          </span>
                        </div>
                      ))}
                    </div>

                    {/* CTA Button */}
                    <div className="flex justify-end mt-2">
                      <a href="#contact" className={`inline-flex items-center justify-center gap-2 px-5 py-2 rounded-full text-[13px] font-bold hover:-translate-y-[2px] hover:translate-x-[2px] transition-transform ${exp.btnClass}`}>
                        للتحدث
                        <FiArrowLeft className="text-base" />
                      </a>
                    </div>

                  </div>

                  {/* Empty Spacer for Timeline balance */}
                  <div className="hidden lg:block lg:w-[calc(50%-2.5rem)]"></div>

                </motion.div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}
