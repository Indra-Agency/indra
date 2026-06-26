'use client';

import { FiArrowLeft, FiArrowUp, FiMail } from 'react-icons/fi';
import { FaWhatsapp } from 'react-icons/fa';
import { NeoButton } from '@/components/ui/NeoButton';

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#4FFFB0] text-black w-full overflow-hidden mt-20">
      <div className="max-w-7xl mx-auto px-6 md:px-12">

        {/* ── CTA Area ── */}
        <div className="py-24 md:py-32 flex flex-col items-center justify-center text-center">
          <span className="font-bold text-lg md:text-xl mb-4 text-black/80">مستعد للبداية؟</span>
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-extrabold mb-8 tracking-tighter" style={{ lineHeight: 1.2 }}>
            لنبن شيئاً مختلفاً
          </h2>
          <p className="text-base md:text-lg opacity-80 mb-12 max-w-md font-medium">
            لديك مشروع أو فكرة أو تريد أن تقول مرحباً؟ يسعدني التواصل.
          </p>
          <div className="flex flex-col sm:flex-row items-center gap-5 w-full sm:w-auto px-4">
            <NeoButton href="#contact" variant="white" className="w-full sm:w-auto text-[15px] px-8 py-4">
              ابدأ مشروعاً
              <FiArrowLeft className="text-xl" />
            </NeoButton>
            <NeoButton href="mailto:indraagency.dev@gmail.com" variant="white" className="w-full sm:w-auto text-[15px] px-8 py-4">
              قُل مرحباً
            </NeoButton>
          </div>
        </div>

        {/* ── Footer Info Area ── */}
        <div className="border-t border-black/10 py-16 grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 items-start">

          {/* Right Side (Name/Agency & Socials) */}
          <div className="flex flex-col items-center md:items-start text-center md:text-start">
            <div className="flex items-center gap-2 mb-3" dir="ltr">
              <div className="w-3 h-3 bg-white rotate-45 mt-1 rounded-sm shadow-sm"></div>
              <h3 className="text-4xl font-extrabold tracking-tight">Indra</h3>
            </div>
            <p className="text-[13px] font-semibold opacity-70 max-w-xs mb-8 leading-relaxed">
              وكالة رقمية متكاملة متخصصة في حلول الأتمتة والذكاء الاصطناعي، وتطوير المواقع والتطبيقات المبتكرة. نُحوّل رؤيتك إلى أنظمة متطورة تعمل على مدار الساعة لتعزيز نمو أعمالك.
            </p>
            <div className="flex items-center gap-3">
              <a href="mailto:indraagency.dev@gmail.com" className="w-11 h-11 bg-white rounded-full border-[1.5px] border-black flex items-center justify-center text-lg hover:bg-black hover:text-[#4FFFB0] transition-colors shadow-sm">
                <FiMail />
              </a>
              <a href="https://wa.me/967738688812" target="_blank" rel="noopener noreferrer" className="w-11 h-11 bg-white rounded-full border-[1.5px] border-black flex items-center justify-center text-lg hover:bg-black hover:text-[#4FFFB0] transition-colors shadow-sm">
                <FaWhatsapp />
              </a>
            </div>
          </div>

          {/* Middle Side (Navigation Links) */}
          <div className="flex flex-col items-center text-center mt-4 md:mt-0">
            <h4 className="font-extrabold text-[15px] mb-6">التصفح</h4>
            <ul className="space-y-4 font-semibold text-[14px] opacity-80">
              <li><a href="#about" className="hover:opacity-100 hover:scale-105 transition-transform block">نبذة عنا</a></li>
              <li><a href="#services" className="hover:opacity-100 hover:scale-105 transition-transform block">الخدمات</a></li>
              <li><a href="#projects" className="hover:opacity-100 hover:scale-105 transition-transform block">المشاريع</a></li>
              <li><a href="#methodology" className="hover:opacity-100 hover:scale-105 transition-transform block">المنهجية</a></li>
              <li><a href="#contact" className="hover:opacity-100 hover:scale-105 transition-transform block">تواصل</a></li>
            </ul>
          </div>

          {/* Left Side (Contact Details & Scroll to Top) */}
          <div className="flex flex-col items-center md:items-start text-center md:text-start mt-4 md:mt-0">
            <h4 className="font-extrabold text-[15px] mb-6">تواصل معنا</h4>
            <ul className="space-y-4 font-semibold text-[14px] opacity-80 mb-10 flex flex-col items-center md:items-start">
              <li>
                <a href="mailto:indraagency.dev@gmail.com" dir="ltr" className="hover:opacity-100 block">
                  indraagency.dev@gmail.com
                </a>
              </li>
              <li>
                <a href="tel:+967738688812" dir="ltr" className="hover:opacity-100 block">
                  +967 738 688 812
                </a>
              </li>
              <li>مقيم في اليمن</li>
            </ul>

            <button
              onClick={scrollToTop}
              className="bg-black text-[#4FFFB0] font-bold text-[13px] px-6 py-2.5 rounded-full flex items-center justify-center gap-2.5 hover:-translate-y-1 transition-transform shadow-[2px_2px_0_0_rgba(0,0,0,0.15)]"
              dir="ltr"
            >
              <span dir="rtl">الأعلى</span>
              <FiArrowUp className="text-base" />
            </button>
          </div>

        </div>
      </div>

      {/* ── Bottom Bar ── */}
      <div className="bg-[#0f0f0f] text-zinc-400 py-6 px-6 md:px-12 w-full text-[13px] font-medium flex flex-col md:flex-row items-center justify-between gap-4 text-center">
        <div>
          © {new Date().getFullYear()} أحمد عصام الاغبري. جميع الحقوق محفوظة.
        </div>
        <div>
          تصميم وتطوير{' '}
          <a
            href="https://www.linkedin.com/in/ahmed-essam-79a120397"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-[#4FFFB0] transition-colors underline decoration-zinc-700 underline-offset-4"
          >
            أحمد عصام الاغبري
          </a>
        </div>
      </div>
    </footer>
  );
}
