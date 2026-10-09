'use client';

import { motion } from 'framer-motion';
import { FiMapPin, FiMail, FiPhone } from 'react-icons/fi';
import { FaWhatsapp } from 'react-icons/fa';
import { useLanguage } from '@/i18n/LanguageContext';

export function ContactInfo() {
  const { t, dir, isRTL } = useLanguage();

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true, margin: "-100px" }}
      className="flex flex-col gap-4 h-full"
      dir={dir}
    >
      {/* Location Card */}
      <div className="bg-white text-abyssal-blue rounded-[2rem] p-6 flex flex-col justify-between flex-1 shadow-sm">
        <div className="flex items-start justify-between w-full mb-3">
          <div className="flex flex-col text-start">
            <span className="text-[12px] font-semibold mb-1 opacity-80">{t.contact.infoLocationTitle}</span>
            <span className="font-extrabold text-xl">{t.contact.infoLocationVal}</span>
          </div>
          <div className="w-10 h-10 bg-burning-flame/10 rounded-xl flex items-center justify-center shadow-sm shrink-0">
            <FiMapPin className="text-lg text-burning-flame" />
          </div>
        </div>
        <span className="text-[12px] font-medium opacity-80 text-start">{t.contact.infoLocationDesc}</span>
      </div>

      {/* Email Card */}
      <div className="bg-white text-abyssal-blue rounded-[2rem] p-6 flex items-center justify-between flex-1 shadow-sm">
        <div className="flex flex-col items-start justify-center text-start">
          <span className="text-[11px] text-zinc-400 font-bold mb-1">{t.contact.infoEmail}</span>
          <a href="mailto:indraagency.dev@gmail.com" className="font-extrabold text-[14px] hover:text-burning-flame transition-colors" dir="ltr">
            indraagency.dev@gmail.com
          </a>
        </div>
        <div className="w-11 h-11 bg-burning-flame/10 rounded-xl flex items-center justify-center shrink-0">
          <FiMail className="text-xl text-burning-flame" />
        </div>
      </div>

      {/* Phone Card */}
      <div className="bg-white text-abyssal-blue rounded-[2rem] p-6 flex items-center justify-between flex-1 shadow-sm">
        <div className="flex flex-col items-start justify-center text-start">
          <span className="text-[11px] text-zinc-400 font-bold mb-1">{t.contact.infoPhone}</span>
          <a href="tel:+967738688812" className="font-extrabold text-[14px] hover:text-burning-flame transition-colors" dir="ltr">
            +967 738 688 812
          </a>
        </div>
        <div className="w-11 h-11 bg-burning-flame/10 rounded-xl flex items-center justify-center shrink-0">
          <FiPhone className="text-xl text-burning-flame" />
        </div>
      </div>

      {/* WhatsApp Card */}
      <div className="bg-white text-abyssal-blue rounded-[2rem] p-6 flex items-center justify-between flex-1 shadow-sm">
        <div className="flex flex-col items-start justify-center text-start">
          <span className="text-[11px] text-zinc-400 font-bold mb-1">{t.contact.infoWhatsapp}</span>
          <a href="https://wa.me/967738688812" target="_blank" rel="noopener noreferrer" className="font-extrabold text-[14px] hover:text-burning-flame transition-colors">
            {isRTL ? 'تواصل الآن' : 'Chat Now'}
          </a>
        </div>
        <div className="w-11 h-11 bg-burning-flame/10 rounded-xl flex items-center justify-center shrink-0">
          <FaWhatsapp className="text-2xl text-burning-flame" />
        </div>
      </div>
    </motion.div>
  );
}
