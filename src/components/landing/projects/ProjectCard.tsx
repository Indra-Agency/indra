'use client';

/**
 * ProjectCard.tsx
 * ───────────────
 * Individual project card component.
 */

import { motion } from 'framer-motion';
import { ProjectData } from './projectsData';

interface Props {
  project: ProjectData;
  index: number;
}

export function ProjectCard({ project, index }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: index * 0.1 }}
      viewport={{ once: true, margin: "-100px" }}
      className="group block rounded-3xl overflow-hidden bg-zinc-900 border border-zinc-800 transition-all duration-500 hover:-translate-y-2 hover:border-zinc-700 hover:shadow-2xl hover:shadow-black/50"
    >
      <div className="grid md:grid-cols-2">
        <div className="p-10 md:p-16 flex flex-col justify-center">
          <span className="text-zinc-500 text-sm font-semibold mb-4">{project.tag}</span>
          <h3 className="text-3xl font-bold text-white mb-6">{project.title}</h3>
          <p className="text-zinc-400 leading-relaxed text-lg font-light mb-8">{project.desc}</p>
          
          <div className="mt-auto flex items-center gap-2 text-white font-medium group-hover:text-zinc-300 transition-colors">
            <span>عرض التفاصيل</span>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="rtl:rotate-180 transform transition-transform group-hover:translate-x-1 rtl:group-hover:-translate-x-1">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </div>
        </div>
        
        {/* Visual Placeholder */}
        <div className="bg-zinc-950 aspect-video md:aspect-auto border-s border-zinc-800 relative overflow-hidden">
            <div className="absolute inset-0 opacity-20 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCI+CjxyZWN0IHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJyZ2JhKDI1NSwyNTUsMjU1LDAuMDUpIiBzdHJva2Utd2lkdGg9IjEiLz4KPC9zdmc+')]"></div>
            <div className="absolute inset-0 flex items-center justify-center text-zinc-700 text-sm font-mono uppercase tracking-widest">
              [Preview Image]
            </div>
        </div>
      </div>
    </motion.div>
  );
}
