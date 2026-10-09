'use client';

import Image from 'next/image';
import { FiArrowLeft, FiArrowUp, FiMail } from 'react-icons/fi';
import { FaWhatsapp } from 'react-icons/fa';
import { NeoButton } from '@/components/ui/NeoButton';
import { useLanguage } from '@/i18n/LanguageContext';

export function Footer() {
  const { t, dir, isRTL } = useLanguage();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const authorName = isRTL ? 'أحمد عصام الاغبري' : 'Ahmed Essam Al-Aghbari';

  return (
    <footer className="bg-burning-flame text-abyssal-blue w-full overflow-hidden mt-20" dir={dir}>
      <div className="max-w-7xl mx-auto px-6 md:px-12">

        {/* ── CTA Area ── */}
        <div className="py-24 md:py-32 flex flex-col items-center justify-center text-center">
          <span className="font-bold text-lg md:text-xl mb-4 text-abyssal-blue/80">{t.footer.ctaReady}</span>
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-extrabold mb-8 tracking-tighter" style={{ lineHeight: 1.2 }}>
            {t.footer.ctaTitle}
          </h2>
          <p className="text-base md:text-lg opacity-80 mb-12 max-w-md font-medium">
            {t.footer.ctaDesc}
          </p>
          <div className="flex flex-col sm:flex-row items-center gap-5 w-full sm:w-auto px-4">
            <NeoButton href="#contact" variant="white" className="w-full sm:w-auto text-[15px] px-8 py-4">
              {t.footer.ctaStart}
              <FiArrowLeft className={`text-xl ${isRTL ? '' : 'rotate-180'}`} />
            </NeoButton>
            <NeoButton href="mailto:indraagency.dev@gmail.com" variant="white" className="w-full sm:w-auto text-[15px] px-8 py-4">
              {t.footer.ctaSayHello}
            </NeoButton>
          </div>
        </div>

        {/* ── Footer Info Area ── */}
        <div className="border-t border-abyssal-blue/10 py-16 grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 items-start">

          {/* Agency & Socials */}
          <div className="flex flex-col items-center md:items-start text-center md:text-start">
            <div className="mb-4 flex items-center justify-center md:justify-start" dir="ltr">
              <Image
                src="/images/12111.png"
                alt="Indra"
                width={160}
                height={82}
                className="h-14 w-auto object-contain select-none"
              />
            </div>
            <p className="text-[13px] font-semibold opacity-70 max-w-xs mb-8 leading-relaxed">
              {t.footer.agencyBio}
            </p>
            <div className="flex items-center gap-3">
              <a href="mailto:indraagency.dev@gmail.com" aria-label={t.contact.infoEmail} className="w-11 h-11 bg-palladian rounded-full border-[1.5px] border-abyssal-blue flex items-center justify-center text-lg text-abyssal-blue hover:bg-abyssal-blue hover:text-burning-flame transition-colors shadow-sm">
                <FiMail />
              </a>
              <a href="https://wa.me/967738688812" target="_blank" rel="noopener noreferrer" aria-label={t.contact.infoWhatsapp} className="w-11 h-11 bg-palladian rounded-full border-[1.5px] border-abyssal-blue flex items-center justify-center text-lg text-abyssal-blue hover:bg-abyssal-blue hover:text-burning-flame transition-colors shadow-sm">
                <FaWhatsapp />
              </a>
            </div>
          </div>

          {/* Middle Side (Navigation Links) */}
          <div className="flex flex-col items-center text-center mt-4 md:mt-0">
            <h4 className="font-extrabold text-[15px] mb-6">{t.footer.navTitle}</h4>
            <ul className="space-y-4 font-semibold text-[14px] opacity-80">
              {t.footer.navLinks.map((link, idx) => (
                <li key={idx}>
                  <a href={link.href} className="hover:opacity-100 hover:scale-105 transition-transform block">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details & Scroll to Top */}
          <div className="flex flex-col items-center md:items-start text-center md:text-start mt-4 md:mt-0">
            <h4 className="font-extrabold text-[15px] mb-6">{t.footer.contactTitle}</h4>
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
              <li>{t.footer.basedIn}</li>
            </ul>

            <button
              onClick={scrollToTop}
              aria-label={t.footer.scrollToTop}
              className="bg-abyssal-blue text-burning-flame font-bold text-[13px] px-6 py-2.5 rounded-full flex items-center justify-center gap-2.5 hover:-translate-y-1 transition-transform shadow-[2px_2px_0_0_rgba(27,38,50,0.3)]"
              dir="ltr"
            >
              <span>{t.footer.scrollToTop}</span>
              <FiArrowUp className="text-base" />
            </button>
          </div>

        </div>
      </div>

      {/* ── Bottom Bar ── */}
      <div className="bg-abyssal-blue text-oatmeal py-6 px-6 md:px-12 w-full text-[13px] font-medium flex flex-col md:flex-row items-center justify-between gap-4 text-center">
        <div>
          © {new Date().getFullYear()} {authorName}. {t.footer.rights}
        </div>
        <div>
          {t.footer.designCredit}{' '}
          <a
            href="https://www.linkedin.com/in/ahmed-essam-79a120397"
            target="_blank"
            rel="noopener noreferrer"
            className="text-palladian hover:text-burning-flame transition-colors underline decoration-oatmeal/30 underline-offset-4"
          >
            {authorName}
          </a>
        </div>
      </div>
    </footer>
  );
}
