'use client';

import { motion } from 'framer-motion';

export default function Loading() {
  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-background">
      {/* وهج خلفي خفيف */}
      <div className="absolute w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl animate-pulse" />

      <div className="relative flex flex-col items-center gap-6">
        {/* شعار Indra */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold tracking-wider text-white"
        >
          Indra<span className="text-emerald-400 animate-pulse">.</span>
        </motion.div>

        {/* مؤشر التحميل المتوهج */}
        <div className="w-10 h-10 rounded-full border-2 border-emerald-500/20 border-t-emerald-400 animate-spin" />
      </div>
    </div>
  );
}
