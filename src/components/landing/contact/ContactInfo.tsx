'use client';

import { motion } from 'framer-motion';
import { FiMapPin, FiMail, FiPhone } from 'react-icons/fi';
import { FaWhatsapp } from 'react-icons/fa';

export function ContactInfo() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true, margin: "-100px" }}
      className="flex flex-col gap-4 h-full"
    >
      {/* Location Card */}
      <div className="bg-[#4FFFB0] text-black rounded-[2rem] p-6 relative flex items-start justify-center flex-col min-h-[140px] shadow-sm">
        <div className="absolute left-6 top-6 w-10 h-10 bg-white rounded-xl flex items-center justify-center shadow-sm">
          <FiMapPin className="text-lg text-black" />
        </div>
        <div className="flex flex-col items-start justify-center w-full pl-14 text-start">
          <span className="text-[12px] font-semibold mb-1 opacity-80">مقيم في</span>
          <span className="font-extrabold text-xl mb-3">اليمن</span>
          <span className="text-[12px] font-medium opacity-80">متاح للعمل عن بُعد في الشرق الأوسط والعالم</span>
        </div>
      </div>

      {/* Email Card */}
      <div className="bg-white text-black rounded-[2rem] p-6 relative flex items-center justify-start min-h-[95px] shadow-sm">
        <div className="absolute left-5 w-11 h-11 bg-[#ecfdf5] rounded-xl flex items-center justify-center hidden sm:flex">
          <FiMail className="text-xl text-[#10b981]" />
        </div>
        <div className="flex flex-col items-start justify-center w-full pl-0 sm:pl-14 text-start">
          <span className="text-[11px] text-zinc-400 font-bold mb-1">البريد الإلكتروني</span>
          <a href="mailto:indraagency.dev@gmail.com" className="font-extrabold text-[14px] hover:text-[#10b981] transition-colors" dir="ltr">
            indraagency.dev@gmail.com
          </a>
        </div>
      </div>

      {/* Phone Card */}
      <div className="bg-white text-black rounded-[2rem] p-6 relative flex items-center justify-start min-h-[95px] shadow-sm">
        <div className="absolute left-5 w-11 h-11 bg-[#ecfdf5] rounded-xl flex items-center justify-center hidden sm:flex">
          <FiPhone className="text-xl text-[#10b981]" />
        </div>
        <div className="flex flex-col items-start justify-center w-full pl-0 sm:pl-14 text-start">
          <span className="text-[11px] text-zinc-400 font-bold mb-1">الهاتف</span>
          <a href="tel:+967773799744" className="font-extrabold text-[14px] hover:text-[#10b981] transition-colors" dir="ltr">
            +967 773 799 744
          </a>
        </div>
      </div>

      {/* WhatsApp Card */}
      <div className="bg-white text-black rounded-[2rem] p-6 relative flex items-center justify-start min-h-[95px] shadow-sm">
        <div className="absolute left-5 w-11 h-11 bg-[#ecfdf5] rounded-xl flex items-center justify-center hidden sm:flex">
          <FaWhatsapp className="text-2xl text-[#10b981]" />
        </div>
        <div className="flex flex-col items-start justify-center w-full pl-0 sm:pl-14 text-start">
          <span className="text-[11px] text-zinc-400 font-bold mb-1">واتساب</span>
          <a href="https://wa.me/967773799744" target="_blank" rel="noopener noreferrer" className="font-extrabold text-[14px] hover:text-[#10b981] transition-colors">
            تواصل الآن
          </a>
        </div>
      </div>
    </motion.div>
  );
}
