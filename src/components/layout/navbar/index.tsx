'use client';

/**
 * index.tsx  (Navbar entry point)
 * ─────────────────────────────────
 * Assembles DesktopNav + MobileNav and manages shared state.
 * Only logic here: mobileOpen boolean + resize handler.
 *
 * Sub-components:
 *   ./DesktopNav  — floating pill nav (md+)
 *   ./MobileNav   — top bar + hamburger + overlay (< md)
 *   ./FlagIcon    — reusable UK flag SVG
 *   ./navLinks.ts — navigation link data
 */

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { DesktopNav } from './DesktopNav';
import { MobileNav }  from './MobileNav';

const slideIn = {
  initial:    { y: -80, opacity: 0 },
  animate:    { y: 0,   opacity: 1 },
  transition: { duration: 0.6, delay: 0.1 },
};

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  // Close menu on desktop resize
  useEffect(() => {
    const onResize = () => { if (window.innerWidth >= 768) setMobileOpen(false); };
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  return (
    <>
      {/* Desktop */}
      <motion.div {...slideIn} className="fixed top-4 inset-x-0 z-[100] hidden md:flex justify-center pointer-events-none px-4">
        <DesktopNav />
      </motion.div>

      {/* Mobile */}
      <motion.div {...slideIn} className="fixed top-0 inset-x-0 z-[100] md:hidden">
        <MobileNav mobileOpen={mobileOpen} setMobileOpen={setMobileOpen} />
      </motion.div>
    </>
  );
}
