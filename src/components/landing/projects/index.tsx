'use client';

import { motion } from 'framer-motion';
import { FaApple, FaGooglePlay } from 'react-icons/fa';

const PROJECTS_DATA = [
  {
    title: 'متجر عُدّتي',
    year: '2026',
    country: 'SA السعودية',
    logo: 'https://raw.githubusercontent.com/Indra-Agency/images-web/main/LOGO/12.png',
    bgColor: 'bg-[#4FFFB0]',
    textColor: 'text-black',
    desc: 'بناء تطبيق Flutter متكامل للمتجر مع شات بوت ذكي، نظام ولاء عملاء، لوحات أداء لحظية، وبوابات دفع متكاملة. صُمم وطُور وأُطلق على المتاجر في أقل من شهر.',
    tags: ['أُطلق في < شهر', 'نظام ولاء', 'بوابات دفع'],
    ctaType: 'apps',
    tech: [
      { name: 'Flutter', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/flutter/flutter-original.svg' },
      { name: 'AI', img: 'https://upload.wikimedia.org/wikipedia/commons/0/04/ChatGPT_logo.svg' },
      { name: 'Payment', img: 'https://api.iconify.design/logos:visa.svg' },
      { name: 'Firebase', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/firebase/firebase-plain.svg' },
      { name: 'Analytics', img: 'https://api.iconify.design/logos:google-analytics.svg' },
      { name: 'Supabase', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/supabase/supabase-original.svg' },
      { name: 'Google Maps', img: 'https://upload.wikimedia.org/wikipedia/commons/a/aa/Google_Maps_icon_%282020%29.svg' },
    ],
    image: 'https://raw.githubusercontent.com/Indra-Agency/images-web/main/project/2.png'
  },
  {
    title: 'أبشر',
    year: '2026',
    country: 'السعودية',
    bgColor: 'bg-white',
    textColor: 'text-black',
    desc: 'منصة متكاملة (تطبيق Flutter وموقع إلكتروني) مخصصة لاستئجار المعدات الثقيلة، وتوفير فرص عمل وتوظيف لأصحاب المعدات لربطهم بالعملاء بسهولة وموثوقية.',
    tags: ['تطبيق وموقع', 'استئجار معدات', 'توظيف'],
    ctaType: 'apps',
    tech: [
      { name: 'Flutter', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/flutter/flutter-original.svg' },
      { name: 'React', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg' },
      { name: 'Firebase', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/firebase/firebase-plain.svg' },
      { name: 'Google Maps', img: 'https://upload.wikimedia.org/wikipedia/commons/a/aa/Google_Maps_icon_%282020%29.svg' },
    ],
    image: 'https://raw.githubusercontent.com/Indra-Agency/images-web/main/project/3.jpg'
  },
  {
    title: 'Delivery App',
    year: '2023',
    country: 'اليمن',
    logo: 'https://raw.githubusercontent.com/Indra-Agency/images-web/main/LOGO/11.png',
    bgColor: 'bg-[#4FFFB0]',
    textColor: 'text-black',
    desc: 'منظومة توصيل متكاملة تتكون من 3 تطبيقات (تطبيق للعميل، تطبيق للمشرفين، وتطبيق للسائقين). تم التطوير والربط والإطلاق في وقت قياسي (شهرين).',
    tags: ['3 تطبيقات مدمجة', 'تتبع لحظي', 'أُطلق في شهرين'],
    ctaType: 'apps',
    tech: [
      { name: 'Flutter', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/flutter/flutter-original.svg' },
      { name: 'AI', img: 'https://upload.wikimedia.org/wikipedia/commons/0/04/ChatGPT_logo.svg' },
      { name: 'Payment', img: 'https://api.iconify.design/logos:visa.svg' },
      { name: 'Firebase', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/firebase/firebase-plain.svg' },
      { name: 'Analytics', img: 'https://api.iconify.design/logos:google-analytics.svg' },
      { name: 'Supabase', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/supabase/supabase-original.svg' },
      { name: 'Google Maps', img: 'https://upload.wikimedia.org/wikipedia/commons/a/aa/Google_Maps_icon_%282020%29.svg' },
    ],
    image: 'https://raw.githubusercontent.com/Indra-Agency/images-web/main/project/1.png'
  }
];

export function ProjectsSection() {
  return (
    <section id="work" className="py-24 relative" dir="rtl">
      <div className="max-w-7xl mx-auto px-6 md:px-12">

        {/* Section Header */}
        <div className="mb-16 flex flex-col items-center text-center">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-emerald-400 font-semibold tracking-wider text-sm mb-3 uppercase"
          >
            التأثير
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl lg:text-6xl text-white font-bold tracking-tight"
          >
            المشاريع المميزة
          </motion.h2>
        </div>

        {/* Projects List */}
        <div className="space-y-12">
          {PROJECTS_DATA.map((project, i) => {
            // All cards: Image on Right, Content on Left
            const layoutClass = 'lg:flex-row';

            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.1 }}
                viewport={{ once: true, margin: "-100px" }}
                className={`flex flex-col ${layoutClass} w-full rounded-[2rem] overflow-hidden shadow-2xl items-stretch`}
              >

                {/* Content Side */}
                <div className={`lg:w-1/2 px-8 py-6 md:px-12 md:py-8 lg:px-16 lg:py-10 flex flex-col items-start justify-center text-start ${project.bgColor} ${project.textColor}`}>

                  {/* Optional Logo */}
                  {project.logo && (
                    <div className="-mb-3 md:-mb-4">
                      <img src={project.logo} alt="Logo" className="h-20 md:h-24 max-w-[200px] object-contain brightness-0 opacity-90" />
                    </div>
                  )}

                  <h3 className="text-2xl md:text-3xl lg:text-[2.2rem] font-extrabold mb-4 tracking-tight leading-tight">
                    {project.title}
                  </h3>

                  <p className="text-[15px] md:text-base font-serif leading-[1.8] mb-8 font-medium opacity-80 text-start max-w-[90%]">
                    {project.desc}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap justify-start gap-2.5 mb-8">
                    {project.tags.map((tag, idx) => (
                      <span
                        key={idx}
                        className="inline-flex items-center gap-2 rounded-full border border-black/10 px-3.5 py-1.5 text-[13px] font-bold shadow-[0_1px_2px_rgba(0,0,0,0.05)] bg-black/5 hover:bg-black/10 transition-colors cursor-default"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-black opacity-70"></span>
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Tech Stack */}
                  <div className="flex flex-nowrap justify-start gap-3 md:gap-4 mt-2 mb-8 overflow-x-auto pb-2 scrollbar-hide w-full" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
                    {project.tech.map((tech, idx) => (
                      <div key={idx} className="flex flex-col items-center gap-1.5 shrink-0">
                        <div className="w-8 h-8 md:w-10 md:h-10 bg-white rounded-xl shadow-sm flex items-center justify-center transition-transform hover:-translate-y-1">
                          <img
                            src={tech.img}
                            alt={tech.name}
                            className="w-4 h-4 md:w-5 md:h-5 object-contain"
                          />
                        </div>
                        <span className="text-[9px] md:text-[10px] font-bold opacity-80 text-center whitespace-nowrap">
                          {tech.name}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* CTA Buttons */}
                  <div className="flex flex-wrap justify-start items-center gap-3 mt-auto">
                    {project.ctaType === 'apps' ? (
                      <>
                        <button className="flex items-center justify-center gap-2.5 bg-[#0a0a0a] text-white px-4 py-2.5 md:px-5 rounded-2xl hover:bg-zinc-800 transition-transform hover:-translate-y-1 shadow-md">
                          <FaApple className="text-2xl mb-0.5" />
                          <div className="flex flex-col items-start leading-tight">
                            <span className="text-[9px] text-white/80 mb-0.5">حمّله من</span>
                            <span className="text-[14px] md:text-[15px] font-bold tracking-wide">آب ستور</span>
                          </div>
                        </button>
                        <button className="flex items-center justify-center gap-2.5 bg-[#0a0a0a] text-white px-4 py-2.5 md:px-5 rounded-2xl hover:bg-zinc-800 transition-transform hover:-translate-y-1 shadow-md">
                          <img src="https://api.iconify.design/logos:google-play-icon.svg" alt="Google Play" className="w-6 h-6" />
                          <div className="flex flex-col items-start leading-tight">
                            <span className="text-[9px] text-white/80 mb-0.5">حمّله من</span>
                            <span className="text-[14px] md:text-[15px] font-bold tracking-wide">جوجل بلاي</span>
                          </div>
                        </button>
                      </>
                    ) : (
                      <button className="btn-neo btn-neo-green px-6 py-3 text-[15px] flex items-center justify-center gap-2 border-2 border-black bg-[#4FFFB0] text-black font-bold hover:translate-y-[2px] hover:translate-x-[2px] transition-transform shadow-[4px_4px_0_0_#000]">
                        زيارة الموقع
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                          <polyline points="15 3 21 3 21 9"></polyline>
                          <line x1="10" y1="14" x2="21" y2="3"></line>
                        </svg>
                      </button>
                    )}
                  </div>
                </div>

                {/* Showcase Image Side */}
                <div className="lg:w-1/2 relative bg-zinc-900 min-h-[400px] lg:min-h-full">

                  {/* Floating Badges */}
                  <div className="absolute top-6 right-6 z-10 bg-black/50 text-white rounded-full px-5 py-1.5 text-sm font-bold border border-white/10 backdrop-blur-md">
                    {project.country}
                  </div>

                  <div className="absolute top-6 left-6 z-10 bg-black/50 text-white rounded-full px-5 py-1.5 text-sm font-bold border border-white/10 backdrop-blur-md">
                    {project.year}
                  </div>

                  {/* Fully covering mockup image */}
                  <img
                    src={project.image}
                    alt="Project Showcase"
                    className="w-full h-full object-cover absolute inset-0"
                  />
                  {/* Subtle overlay */}
                  <div className="absolute inset-0 bg-black/10 mix-blend-overlay"></div>
                </div>

              </motion.div>
            );
          })}
        </div>

        {/* Start Project CTA at the end of section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-20 flex justify-center"
        >
          <a
            href="#contact"
            className="inline-flex flex-row items-center justify-center gap-2.5 bg-[#4FFFB0] text-black px-8 py-3 rounded-full text-base font-medium hover:bg-[#3ce59c] hover:scale-105 transition-all shadow-sm"
          >
            ابدأ مشروع
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="17" y1="17" x2="7" y2="7"></line>
              <polyline points="17 7 7 7 7 17"></polyline>
            </svg>
          </a>
        </motion.div>

      </div>
    </section>
  );
}
