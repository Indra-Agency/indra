'use client';

import Image from 'next/image';
import { NeoButton } from '@/components/ui/NeoButton';
import { motion } from 'framer-motion';
import { FiCalendar, FiMapPin, FiArrowLeft } from 'react-icons/fi';

import { EXPERIENCE_DATA } from '@/data/experience';

export function ExperienceSection() {
  return (
    <section id="experience" className="py-16 md:py-24 relative" dir="rtl">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Section Header */}
        <div className="mb-20 flex flex-col items-center text-center">
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-burning-flame font-semibold tracking-wider text-sm mb-3 uppercase"
          >
            المسيرة المهنية
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl lg:text-5xl tracking-tight"
          >
            أين صنعت الأثر
          </motion.h2>
        </div>

        {/* Timeline Container */}
        <div className="relative w-full">
          
          {/* Vertical Center Line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-[2px] bg-burning-flame/50 transform -translate-x-1/2 hidden lg:block"></div>

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
                  
                  {/* Center Dot Wrapper */}
                  <div className="hidden lg:flex absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 w-[28px] h-[28px] items-center justify-center">
                    <motion.div 
                      className="w-full h-full rounded-full"
                      style={{
                        background: "conic-gradient(from 0deg, var(--color-burning-flame) 0%, #ffffff 50%, var(--color-burning-flame) 100%)",
                        padding: "3.5px", // Thickness of the glowing ring
                        boxShadow: "0 0 20px 2px rgba(255, 153, 51, 0.7)"
                      }}
                      animate={{ rotate: 360 }}
                      transition={{ repeat: Infinity, duration: 3, ease: "linear" }}
                    >
                      <div className="w-full h-full rounded-full bg-abyssal-blue shadow-[inset_0_0_10px_rgba(0,0,0,0.8)]"></div>
                    </motion.div>
                  </div>
                  
                  {/* Card (Wider and less padding) */}
                  <div className={`w-full lg:w-[calc(50%-2.5rem)] p-6 md:p-8 rounded-[1.5rem] shadow-2xl ${exp.bgColor} ${exp.textColor}`}>
                    
                    {/* Top Row: Company & Badge */}
                    <div className="flex flex-wrap items-center justify-between gap-3 mb-3">
                      <span className="font-extrabold text-base md:text-lg">{exp.company}</span>
                      <span className="bg-abyssal-blue/5 px-3 py-1 rounded-full text-[11px] font-bold border border-abyssal-blue/5">
                        {exp.badge}
                      </span>
                    </div>

                    {/* Job Title */}
                    <h3 className="text-xl md:text-2xl font-black mb-4 tracking-tight leading-tight">
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
                          <div className="w-10 h-10 bg-palladian rounded-xl border border-abyssal-blue/5 shadow-sm flex items-center justify-center transition-transform hover:-translate-y-1">
                            <div className="relative w-[20px] h-[20px]">
                              <Image 
                                src={tech.img} 
                                alt={tech.name} 
                                fill
                                className="object-contain"
                              />
                            </div>
                          </div>
                          <span className="text-[8.5px] font-bold opacity-80 text-center whitespace-nowrap">
                            {tech.name}
                          </span>
                        </div>
                      ))}
                    </div>

                    {/* CTA Button */}
                    <div className="flex justify-end mt-2">
                      <NeoButton href="#contact" variant={exp.btnVariant} className="px-5 py-2 text-[13px]">
                        للتحدث
                        <FiArrowLeft className="text-base" />
                      </NeoButton>
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
