'use client';

import Image from 'next/image';
import { NeoButton } from '@/components/ui/NeoButton';
import { motion } from 'framer-motion';
import { FaApple, FaGooglePlay } from 'react-icons/fa';

import { PROJECTS_DATA } from '@/data/projects';

export function ProjectsSection() {
  return (
    <section id="work" className="py-16 md:py-24 relative" dir="rtl">
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
            className="text-3xl md:text-4xl lg:text-5xl text-white font-bold tracking-tight"
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
                    <div className="-mb-3 md:-mb-4 relative h-20 md:h-24 w-[200px]">
                      <Image src={project.logo} alt="Logo" fill sizes="200px" className="object-contain object-right brightness-0 opacity-90" />
                    </div>
                  )}

                  <h3 className="text-xl md:text-2xl lg:text-3xl font-extrabold mb-4 tracking-tight leading-tight">
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
                        <div className="w-8 h-8 md:w-10 md:h-10 bg-white rounded-xl shadow-sm flex items-center justify-center transition-transform hover:-translate-y-1 relative">
                          <Image
                            src={tech.img}
                            alt={tech.name}
                            fill
                            sizes="40px"
                            className="p-[6px] object-contain"
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
                          <div className="relative w-6 h-6"><Image src="https://api.iconify.design/logos:google-play-icon.svg" alt="Google Play" fill sizes="24px" className="object-contain" /></div>
                          <div className="flex flex-col items-start leading-tight">
                            <span className="text-[9px] text-white/80 mb-0.5">حمّله من</span>
                            <span className="text-[14px] md:text-[15px] font-bold tracking-wide">جوجل بلاي</span>
                          </div>
                        </button>
                      </>
                    ) : (
                      <NeoButton variant="green" className="text-[15px]">
                        زيارة الموقع
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                          <polyline points="15 3 21 3 21 9"></polyline>
                          <line x1="10" y1="14" x2="21" y2="3"></line>
                        </svg>
                      </NeoButton>
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
                  <Image
                    src={project.image}
                    alt="Project Showcase"
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover"
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
