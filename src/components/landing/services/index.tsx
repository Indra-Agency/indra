'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { SERVICES_DATA } from '@/data/services';

export function ServicesSection() {
  return (
    <section id="services" className="py-24 relative bg-[#0A0A0A]" dir="rtl">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Header */}
        <div className="text-center mb-24">
          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-emerald-400 font-bold mb-4 text-xl tracking-wide"
          >
            الخدمات
          </motion.h3>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-b from-white to-zinc-400 pb-4 leading-normal"
          >
            خبرات تصنع الفارق
          </motion.h2>
        </div>

        {/* Stacking Cards Container */}
        <div className="relative flex flex-col gap-6 pb-24">
          {SERVICES_DATA.map((service, index) => (
            <div
              key={service.id}
              className={`sticky shadow-[0_-10px_40px_rgba(0,0,0,0.3)] rounded-[2rem] md:rounded-[3rem] p-8 md:p-16 overflow-hidden ${service.bgColor} ${service.textColor}`}
              style={{
                top: `calc(7rem + ${index * 2.5}rem)`, // Stacking logic
              }}
            >
              {/* Giant Watermark Number */}
              <div 
                className={`absolute top-4 left-8 md:top-8 md:left-16 text-[8rem] md:text-[18rem] font-extrabold leading-none pointer-events-none select-none ${service.watermark}`}
              >
                {service.id}
              </div>

              {/* Card Content Grid */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 relative z-10 min-h-[350px]">
                
                {/* Right side: Text Content */}
                <div className="flex flex-col justify-center">
                  <div className="flex justify-start mb-6">
                    <div className={`flex items-center gap-3 px-4 py-2 rounded-full border border-black/5 ${service.iconBg}`}>
                      <span className="text-base md:text-lg font-bold opacity-80">{service.id}</span>
                      <div className="w-8 h-8 flex items-center justify-center">
                        {service.icon}
                      </div>
                    </div>
                  </div>
                  
                  <h3 className="text-2xl md:text-3xl lg:text-[2.4rem] xl:text-5xl font-extrabold mb-4 leading-tight tracking-tight lg:whitespace-nowrap">
                    {service.title}
                  </h3>
                  
                  <p className={`text-base md:text-lg leading-[1.8] mb-5 max-w-xl font-serif ${service.descColor}`}>
                    {service.description}
                  </p>
                  
                  {/* Tags */}
                  <div className="flex flex-nowrap gap-2 overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
                    {service.tags.map((tag, i) => (
                      <span 
                        key={i}
                        className={`whitespace-nowrap px-3 py-1.5 md:px-4 md:py-2 rounded-full text-xs md:text-sm font-bold transition-all hover:-translate-y-0.5 cursor-default ${service.tagsBg} ${service.tagsText}`}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Left side: Illustration */}
                <div className="hidden lg:flex flex-col items-center justify-center relative min-h-[300px]">
                   <Image 
                     src={service.image} 
                     alt={service.title} 
                     fill 
                     sizes="(max-width: 1024px) 100vw, 50vw"
                     className="object-contain mix-blend-multiply"
                   />
                </div>

              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
