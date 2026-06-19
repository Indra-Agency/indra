'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/Button';

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-background/80 border-b border-border"
    >
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        {/* شعار Indra */}
        <div className="text-2xl font-bold tracking-wider">
          Indra<span className="text-emerald-400 animate-dot-blink">.</span>
        </div>

        {/* روابط التصفح (شاشات متوسطة وأكبر) */}
        <div className="hidden md:flex items-center gap-8 text-sm text-gray-400">
          <a
            href="#sectors"
            className="hover:text-foreground transition-colors duration-300"
          >
            القطاعات
          </a>
          <a
            href="#services"
            className="hover:text-foreground transition-colors duration-300"
          >
            خدماتنا
          </a>
          <a
            href="#contact"
            className="hover:text-foreground transition-colors duration-300"
          >
            تواصل معنا
          </a>
        </div>

        {/* زر الإجراء (شاشات متوسطة وأكبر) */}
        <Button
          variant="ghost"
          size="sm"
          className="hidden md:inline-flex border-emerald-400/30 text-emerald-400 hover:bg-emerald-400/10"
        >
          احجز استشارة
        </Button>

        {/* زر الهامبرغر للموبايل */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 text-gray-400 hover:text-foreground focus:outline-none cursor-pointer"
          aria-label="Toggle Menu"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            {isOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* قائمة الموبايل المنزلقة */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="md:hidden border-t border-border bg-background/95 backdrop-blur-md overflow-hidden"
          >
            <div className="flex flex-col px-6 py-4 gap-4 text-sm text-gray-400">
              <a
                href="#sectors"
                onClick={() => setIsOpen(false)}
                className="hover:text-foreground py-2 transition-colors duration-300 border-b border-border/50"
              >
                القطاعات
              </a>
              <a
                href="#services"
                onClick={() => setIsOpen(false)}
                className="hover:text-foreground py-2 transition-colors duration-300 border-b border-border/50"
              >
                خدماتنا
              </a>
              <a
                href="#contact"
                onClick={() => setIsOpen(false)}
                className="hover:text-foreground py-2 transition-colors duration-300 border-b border-border/50"
              >
                تواصل معنا
              </a>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsOpen(false)}
                className="w-full mt-2 border-emerald-400/30 text-emerald-400 hover:bg-emerald-400/10"
              >
                احجز استشارة
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

