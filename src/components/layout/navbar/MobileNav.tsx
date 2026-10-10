'use client';

/**
 * MobileNav.tsx
 * ──────────────
 * Mobile top bar + hamburger button + full-screen overlay menu.
 * Receives `mobileOpen` state and `setMobileOpen` from the parent Navbar.
 *
 * Hamburger animation: three lines morph into ✕ using CSS transforms.
 * Menu overlay: Framer Motion fade-in with staggered link entrance.
 */

import Image from 'next/image';
import { AnimatePresence, motion } from 'framer-motion';
import { FlagIcon } from './FlagIcon';
import { useLanguage } from '@/i18n/LanguageContext';

interface Props {
  mobileOpen: boolean;
  setMobileOpen: (v: boolean) => void;
}

export function MobileNav({ mobileOpen, setMobileOpen }: Props) {
  const { language, toggleLanguage, t, isRTL } = useLanguage();

  const navItems = [
    { href: '#about', label: t.nav.about },
    { href: '#services', label: t.nav.services },
    { href: '#work', label: t.nav.work },
    { href: '#experience', label: t.nav.experience },
    { href: '#contact', label: t.nav.contact },
  ];

  return (
    <>
      {/* ── Top bar ── */}
      <div className="flex items-center justify-between px-5 py-3 bg-abyssal-blue/85 backdrop-blur-xl border-b border-palladian/5">
        <a
          href="#"
          className="flex items-center transition-opacity hover:opacity-85"
          aria-label="Indra"
        >
          <Image
            src="/images/12111.png"
            alt="Indra"
            width={100}
            height={51}
            priority
            className="h-8 w-auto object-contain select-none"
          />
        </a>

        <div className="flex items-center gap-2">
          {/* Language button */}
          <button
            type="button"
            onClick={toggleLanguage}
            style={{ background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.1)' }}
            className="inline-flex items-center gap-1.5 h-8 px-3 rounded-full text-[12px] font-bold text-palladian cursor-pointer"
            aria-label={t.nav.langAria}
          >
            <FlagIcon size={16} country={language === 'ar' ? 'uk' : 'sa'} />
            {t.nav.langToggle}
          </button>

          {/* Hamburger */}
          <button
            type="button"
            onClick={() => setMobileOpen(!mobileOpen)}
            style={{ background: 'rgba(255,255,255,0.15)' }}
            className="w-9 h-9 rounded-full flex flex-col items-center justify-center gap-[5px] cursor-pointer"
            aria-label={isRTL ? "القائمة" : "Menu"}
            aria-expanded={mobileOpen}
          >
            <span className="block h-[2px] rounded-full bg-palladian transition-all duration-300 origin-center"
              style={{ width: 18, transform: mobileOpen ? 'translateY(7px) rotate(-45deg)' : 'none' }} />
            <span className="block h-[2px] rounded-full bg-palladian transition-all duration-300"
              style={{ width: 12, opacity: mobileOpen ? 0 : 1 }} />
            <span className="block h-[2px] rounded-full bg-palladian transition-all duration-300 origin-center"
              style={{ width: 15, transform: mobileOpen ? 'translateY(-7px) rotate(45deg)' : 'none' }} />
          </button>
        </div>
      </div>

      {/* ── Full-screen overlay menu ── */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[90] bg-abyssal-blue/96 backdrop-blur-2xl flex flex-col items-center justify-center md:hidden"
          >
            <nav className="flex flex-col items-center gap-8">
              {navItems.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.06 }}
                  style={{ color: 'rgba(255,255,255,0.8)' }}
                  className="text-2xl font-bold hover:text-palladian transition-colors"
                  onClick={() => setMobileOpen(false)}
                >
                  {link.label}
                </motion.a>
              ))}

              <motion.a
                href="#contact"
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                style={{ background: 'var(--color-burning-flame)', color: 'var(--color-abyssal-blue)', border: '2px solid var(--color-abyssal-blue)', boxShadow: '3px 3px 0px 0px var(--color-abyssal-blue)' }}
                className="mt-4 inline-flex items-center gap-2 h-12 px-8 rounded-full text-base font-bold"
                onClick={() => setMobileOpen(false)}
              >
                {t.nav.cta} 👋
              </motion.a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
