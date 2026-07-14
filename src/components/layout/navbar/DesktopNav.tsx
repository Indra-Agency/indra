'use client';

/**
 * DesktopNav.tsx
 * ───────────────
 * The floating pill navbar shown on md+ screens.
 * Layout (RTL):  Logo → Nav Links → Language Toggle → CTA Button
 *
 * Styling values (extracted from reference site):
 *   background : rgba(255,255,255,0.08)
 *   blur       : 20px
 *   border     : 1px solid rgba(255,255,255,0.1)
 *   CTA shadow : 3px 3px 0px 0px var(--color-abyssal-blue)  (neo-brutalism)
 */

import { useState, useEffect } from 'react';
import { FlagIcon } from './FlagIcon';
import { NAV_LINKS } from './navLinks';

export function DesktopNav() {
  const [activeSection, setActiveSection] = useState('');
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // 1. Check if scrolled down
      setIsScrolled(window.scrollY > 60);

      // 2. Track active section
      let current = '';
      const sections = NAV_LINKS.map(l => l.href.substring(1));

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 250 && rect.bottom >= 200) {
            current = section;
          }
        }
      }
      setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    setTimeout(handleScroll, 100);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      style={{
        background: isScrolled ? 'rgba(238, 233, 223, 0.95)' : 'rgba(44, 59, 77, 0.08)',
        backdropFilter: 'blur(20px)',
        WebkitBackdropFilter: 'blur(20px)',
        border: isScrolled ? '1px solid rgba(27, 38, 50, 0.05)' : '1px solid rgba(201, 193, 177, 0.1)',
        borderRadius: '9999px',
        padding: '6px 6px 6px 20px',
        transition: 'background 0.3s ease, border 0.3s ease, box-shadow 0.3s ease',
        boxShadow: isScrolled ? '0 10px 30px -10px rgba(27, 38, 50, 0.2)' : 'none',
      }}
      className="pointer-events-auto flex items-center gap-1 w-auto"
    >
      {/* Logo */}
      <a
        href="#"
        className={`text-[18px] select-none whitespace-nowrap ps-2 pe-4 transition-colors duration-300 flex items-center gap-1.5 ${isScrolled ? 'text-abyssal-blue' : 'text-palladian'}`}
      >
        <svg
          className="w-5 h-5 shrink-0"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <path d="M 12 3.5 Q 12 7.5 16 7.5 Q 12 7.5 12 11.5 Q 12 7.5 8 7.5 Q 12 7.5 12 3.5 Z" fill="var(--color-burning-flame)" />
          <path d="M 18.5 10 Q 18.5 15.5 24 15.5 Q 18.5 15.5 18.5 21 Q 18.5 15.5 13 15.5 Q 18.5 15.5 18.5 10 Z" fill="var(--color-burning-flame)" />
          <path d="M 8 16.5 Q 8 19.5 11 19.5 Q 8 19.5 8 22.5 Q 8 19.5 5 19.5 Q 8 19.5 8 16.5 Z" fill="var(--color-burning-flame)" />
        </svg>
        <span className="font-satoshi font-extrabold tracking-tight">Indra</span>
      </a>

      {/* Nav Links */}
      <div className="flex items-center gap-0.5">
        {NAV_LINKS.map((link) => {
          const sectionId = link.href.substring(1);
          const isActive = activeSection === sectionId;

          let linkStyle = '';
          if (isActive) {
            // Neo-brutalism style for active link
            linkStyle = 'bg-burning-flame text-abyssal-blue border-2 border-abyssal-blue shadow-[3px_3px_0px_var(--color-abyssal-blue)] px-4 py-[6px]';
          } else if (isScrolled) {
            // Inactive state on white bar (transparent border to prevent layout shift)
            linkStyle = 'text-abyssal-blue/60 hover:text-abyssal-blue hover:bg-abyssal-blue/5 px-4 py-[6px] border-2 border-transparent shadow-[0px_0px_0px_transparent]';
          } else {
            // Inactive state on dark bar (transparent border to prevent layout shift)
            linkStyle = 'text-palladian/60 hover:text-palladian hover:bg-palladian/5 px-4 py-[6px] border-2 border-transparent shadow-[0px_0px_0px_transparent]';
          }

          return (
            <a
              key={link.href}
              href={link.href}
              className={`relative rounded-full text-[13px] font-bold transition-all duration-300 whitespace-nowrap flex items-center ${linkStyle}`}
            >
              {link.label}
            </a>
          );
        })}
      </div>

      {/* Language Toggle */}
      <a
        href="/"
        style={{
          background: isScrolled ? 'rgba(27, 38, 50, 0.05)' : 'rgba(201, 193, 177, 0.08)',
          border: isScrolled ? '1px solid rgba(27, 38, 50, 0.1)' : '1px solid rgba(201, 193, 177, 0.1)'
        }}
        className={`inline-flex items-center gap-1.5 h-9 px-3.5 ms-1 rounded-full text-[12px] font-bold transition-all duration-300 hover:-translate-y-0.5 whitespace-nowrap ${isScrolled ? 'text-abyssal-blue' : 'text-palladian'}`}
        aria-label="Switch to English"
      >
        <FlagIcon size={18} />
        <span>EN</span>
      </a>

      {/* CTA Button */}
      <a
        href="#contact"
        style={{
          background: 'var(--color-burning-flame)',
          color: 'var(--color-abyssal-blue)',
          border: '2px solid var(--color-abyssal-blue)',
          boxShadow: '3px 3px 0px 0px var(--color-abyssal-blue)'
        }}
        className="inline-flex items-center gap-2 h-9 px-5 ms-1 rounded-full text-[13px] font-bold transition-all duration-200 hover:-translate-y-0.5 active:translate-x-[3px] active:translate-y-[3px] active:shadow-none whitespace-nowrap"
        onClick={(e) => { e.currentTarget.style.boxShadow = 'none'; }}
        onMouseLeave={(e) => { e.currentTarget.style.boxShadow = '3px 3px 0px 0px var(--color-abyssal-blue)'; }}
      >
        لنتحدث 👋
      </a>
    </nav>
  );
}
