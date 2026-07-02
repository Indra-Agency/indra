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

import { AnimatePresence, motion } from 'framer-motion';
import { FlagIcon } from './FlagIcon';
import { NAV_LINKS } from './navLinks';

interface Props {
  mobileOpen: boolean;
  setMobileOpen: (v: boolean) => void;
}

export function MobileNav({ mobileOpen, setMobileOpen }: Props) {
  return (
    <>
      {/* ── Top bar ── */}
      <div className="flex items-center justify-between px-5 py-4 bg-[#09090b]/85 backdrop-blur-xl border-b border-white/5">
        <a
          href="#"
          className="text-xl select-none text-white flex items-center gap-1.5"
        >
          <svg
            className="w-5.5 h-5.5 shrink-0"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <path d="M18 6L19.5 9L22.5 10.5L19.5 12L18 15L16.5 12L13.5 10.5L16.5 9L18 6Z" fill="#4FFFB0" />
            <path d="M9 13L10 15L12 16L10 17L9 19L8 17L6 16L8 15L9 13Z" fill="#4FFFB0" />
            <path d="M7 3L7.6 4.2L8.8 4.8L7.6 5.4L7 6.6L6.4 5.4L5.2 4.8L6.4 4.2L7 3Z" fill="#4FFFB0" />
          </svg>
          <span className="font-satoshi font-extrabold tracking-tight">Indra</span>
        </a>

        <div className="flex items-center gap-2">
          {/* Language button */}
          <a
            href="/"
            style={{ background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.1)' }}
            className="inline-flex items-center gap-1.5 h-8 px-3 rounded-full text-[12px] font-bold text-white"
            aria-label="Switch to English"
          >
            <FlagIcon size={16} />
            EN
          </a>

          {/* Hamburger */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            style={{ background: 'rgba(255,255,255,0.15)' }}
            className="w-9 h-9 rounded-full flex flex-col items-center justify-center gap-[5px] cursor-pointer"
            aria-label="القائمة"
          >
            <span className="block h-[2px] rounded-full bg-white transition-all duration-300 origin-center"
              style={{ width: 18, transform: mobileOpen ? 'translateY(7px) rotate(-45deg)' : 'none' }} />
            <span className="block h-[2px] rounded-full bg-white transition-all duration-300"
              style={{ width: 12, opacity: mobileOpen ? 0 : 1 }} />
            <span className="block h-[2px] rounded-full bg-white transition-all duration-300 origin-center"
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
            className="fixed inset-0 z-[90] bg-[#09090b]/96 backdrop-blur-2xl flex flex-col items-center justify-center md:hidden"
          >
            <nav className="flex flex-col items-center gap-8">
              {NAV_LINKS.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.06 }}
                  style={{ color: 'rgba(255,255,255,0.8)' }}
                  className="text-2xl font-bold hover:text-white transition-colors"
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
                style={{ background: '#4FFFB0', color: '#0A0A0A', border: '2px solid #0A0A0A', boxShadow: '3px 3px 0px 0px #0A0A0A' }}
                className="mt-4 inline-flex items-center gap-2 h-12 px-8 rounded-full text-base font-bold"
                onClick={() => setMobileOpen(false)}
              >
                لنتحدث 👋
              </motion.a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
