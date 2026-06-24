'use client';

/**
 * CenterCard.tsx
 * ──────────────
 * The central digital hub card replacing the person's photo.
 * Shows a glowing tech visualization, stats, and a CTA.
 */

import { motion } from 'framer-motion';

export function CenterCard() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="relative z-20 w-full max-w-sm mx-auto"
    >
      {/* Tight Glow Behind Card */}
      <div className="absolute inset-0 bg-white/[0.03] blur-2xl rounded-[2.5rem] pointer-events-none" />
      
      {/* Actual Card */}
      <div
        className="relative w-full rounded-[2.5rem] p-6 flex flex-col items-center"
        style={{
          background: 'linear-gradient(180deg, #111113 0%, #09090b 100%)',
          border: '1px solid rgba(255,255,255,0.05)',
          boxShadow: '0 25px 50px -12px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.05)',
        }}
      >
      {/* ── Top Bar: Stars & Availability ── */}
      <div className="w-full flex justify-between items-center mb-8 px-2">
        <div className="flex gap-1 text-[#4FFFB0]">
          {[...Array(5)].map((_, i) => (
            <svg key={i} width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87L18.18 22 12 18.27 5.82 22 7 14.14l-5-4.87 6.91-1.01L12 2z" />
            </svg>
          ))}
        </div>
        <div className="flex items-center gap-1.5 text-xs text-zinc-400 font-medium bg-white/5 px-2.5 py-1 rounded-full">
          <span className="w-1.5 h-1.5 rounded-full bg-[#4FFFB0] animate-pulse" />
          متاح
        </div>
      </div>

      {/* ── Visual Centerpiece: Glowing Tech Stack ── */}
      <div className="relative w-48 h-48 mb-8 flex items-center justify-center">
        {/* Glow behind */}
        <div className="absolute inset-0 bg-[#4FFFB0] blur-[80px] opacity-20 rounded-full" />

        {/* Abstract Isometric Layers */}
        <motion.div
          animate={{ y: [-5, 5, -5] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="relative w-full h-full"
        >
          {/* Layer 3 (Bottom) */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 w-32 h-32 rounded-2xl border border-[#4FFFB0]/20 bg-[#4FFFB0]/5 transform rotate-45 scale-y-50 skew-x-12" />
          {/* Layer 2 (Middle) */}
          <div className="absolute bottom-10 left-1/2 -translate-x-1/2 w-32 h-32 rounded-2xl border border-blue-500/30 bg-blue-500/10 transform rotate-45 scale-y-50 skew-x-12" />
          {/* Layer 1 (Top) */}
          <div className="absolute bottom-16 left-1/2 -translate-x-1/2 w-32 h-32 rounded-2xl border border-purple-500/40 bg-purple-500/10 transform rotate-45 scale-y-50 skew-x-12 flex items-center justify-center">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-white -rotate-45 scale-y-200 -skew-x-12">
              <polyline points="16 18 22 12 16 6"></polyline>
              <polyline points="8 6 2 12 8 18"></polyline>
            </svg>
          </div>
        </motion.div>
      </div>

      {/* ── Info ── */}
      <div className="text-center mb-10 w-full">
        <h3 className="text-2xl font-bold text-white mb-2">وكالة Indra</h3>
        <p className="text-sm text-[#4FFFB0] font-medium mb-4">شريكك التقني الشامل</p>
        <p className="text-xs text-zinc-500 flex items-center justify-center gap-1.5">
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
            <circle cx="12" cy="10" r="3"></circle>
          </svg>
          تخدم العملاء عالمياً
        </p>
      </div>

      {/* ── Stats ── */}
      <div className="flex w-full justify-between items-center px-4 mb-8">
        <div className="text-center">
          <p className="text-white font-bold text-xl mb-1">4</p>
          <p className="text-zinc-600 text-[10px] uppercase tracking-wider">دول</p>
        </div>
        <div className="w-px h-8 bg-zinc-800" />
        <div className="text-center">
          <p className="text-white font-bold text-xl mb-1">+50</p>
          <p className="text-zinc-600 text-[10px] uppercase tracking-wider">مشروع</p>
        </div>
        <div className="w-px h-8 bg-zinc-800" />
        <div className="text-center">
          <p className="text-white font-bold text-xl mb-1">+5</p>
          <p className="text-zinc-600 text-[10px] uppercase tracking-wider">سنوات</p>
        </div>
      </div>

      {/* ── CTA Button ── */}
      <a
        href="#contact"
        className="w-full py-4 rounded-full font-bold text-sm text-[#0A0A0A] bg-[#4FFFB0] flex items-center justify-center gap-2 hover:opacity-90 transition-opacity"
      >
        لنبني منتجك
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="rtl:-scale-x-100">
          <line x1="5" y1="12" x2="19" y2="12"></line>
          <polyline points="12 5 19 12 12 19"></polyline>
        </svg>
      </a>
      </div>
    </motion.div>
  );
}
