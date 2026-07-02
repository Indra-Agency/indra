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
 *   CTA shadow : 3px 3px 0px 0px #0A0A0A  (neo-brutalism)
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
        background: isScrolled ? 'rgba(255, 255, 255, 0.95)' : 'rgba(255,255,255,0.08)',
        backdropFilter: 'blur(20px)',
        WebkitBackdropFilter: 'blur(20px)',
        border: isScrolled ? '1px solid rgba(0,0,0,0.05)' : '1px solid rgba(255,255,255,0.1)',
        borderRadius: '9999px',
        padding: '6px 6px 6px 20px',
        transition: 'background 0.3s ease, border 0.3s ease, box-shadow 0.3s ease',
        boxShadow: isScrolled ? '0 10px 30px -10px rgba(0,0,0,0.2)' : 'none',
      }}
      className="pointer-events-auto flex items-center gap-1 w-auto"
    >
      {/* Logo */}
      <a
        href="#"
        className={`text-[18px] select-none whitespace-nowrap ps-2 pe-4 transition-colors duration-300 flex items-center gap-1.5 ${isScrolled ? 'text-[#0A0A0A]' : 'text-white'}`}
      >
        <svg
          className="w-5 h-5 shrink-0"
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

      {/* Nav Links */}
      <div className="flex items-center gap-0.5">
        {NAV_LINKS.map((link) => {
          const sectionId = link.href.substring(1);
          const isActive = activeSection === sectionId;

          let linkStyle = '';
          if (isActive) {
            // Neo-brutalism style for active link
            linkStyle = 'bg-[#4FFFB0] text-black border-2 border-[#0A0A0A] shadow-[3px_3px_0px_#0A0A0A] px-4 py-[6px]';
          } else if (isScrolled) {
            // Inactive state on white bar (transparent border to prevent layout shift)
            linkStyle = 'text-[#0A0A0A]/60 hover:text-[#0A0A0A] hover:bg-black/5 px-4 py-[6px] border-2 border-transparent shadow-[0px_0px_0px_transparent]';
          } else {
            // Inactive state on dark bar (transparent border to prevent layout shift)
            linkStyle = 'text-white/60 hover:text-white hover:bg-white/5 px-4 py-[6px] border-2 border-transparent shadow-[0px_0px_0px_transparent]';
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
          background: isScrolled ? 'rgba(0,0,0,0.05)' : 'rgba(255,255,255,0.08)',
          border: isScrolled ? '1px solid rgba(0,0,0,0.1)' : '1px solid rgba(255,255,255,0.1)'
        }}
        className={`inline-flex items-center gap-1.5 h-9 px-3.5 ms-1 rounded-full text-[12px] font-bold transition-all duration-300 hover:-translate-y-0.5 whitespace-nowrap ${isScrolled ? 'text-[#0A0A0A]' : 'text-white'}`}
        aria-label="Switch to English"
      >
        <FlagIcon size={18} />
        <span>EN</span>
      </a>

      {/* CTA Button */}
      <a
        href="#contact"
        style={{
          background: '#4FFFB0',
          color: '#0A0A0A',
          border: '2px solid #0A0A0A',
          boxShadow: '3px 3px 0px 0px #0A0A0A'
        }}
        className="inline-flex items-center gap-2 h-9 px-5 ms-1 rounded-full text-[13px] font-bold transition-all duration-200 hover:-translate-y-0.5 active:translate-x-[3px] active:translate-y-[3px] active:shadow-none whitespace-nowrap"
        onClick={(e) => { e.currentTarget.style.boxShadow = 'none'; }}
        onMouseLeave={(e) => { e.currentTarget.style.boxShadow = '3px 3px 0px 0px #0A0A0A'; }}
      >
        لنتحدث 👋
      </a>
    </nav>
  );
}
