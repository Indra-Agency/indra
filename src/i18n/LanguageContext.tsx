'use client';

import React, { createContext, useContext, useState, useEffect, useMemo, ReactNode } from 'react';
import { Language, Translations, translations } from './translations';

interface LanguageContextType {
  language: Language;
  dir: 'rtl' | 'ltr';
  isRTL: boolean;
  t: Translations;
  setLanguage: (lang: Language) => void;
  toggleLanguage: () => void;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const STORAGE_KEY = 'indra_selected_lang';

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>('ar');
  const [mounted, setMounted] = useState(false);

  // Load initial language from localStorage on client mount
  useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY) as Language | null;
      if (saved === 'ar' || saved === 'en') {
        setLanguageState(saved);
      }
    } catch {
      // localStorage may fail in private mode or SSR
    }
    setMounted(true);
  }, []);

  // Sync document attributes whenever language changes
  useEffect(() => {
    if (typeof document !== 'undefined') {
      const dir = language === 'ar' ? 'rtl' : 'ltr';
      document.documentElement.lang = language;
      document.documentElement.dir = dir;
      document.body.style.direction = dir;
      
      try {
        localStorage.setItem(STORAGE_KEY, language);
      } catch {
        // ignore
      }
    }
  }, [language]);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
  };

  const toggleLanguage = () => {
    setLanguageState((prev) => (prev === 'ar' ? 'en' : 'ar'));
  };

  const dir: 'rtl' | 'ltr' = language === 'ar' ? 'rtl' : 'ltr';
  const isRTL = language === 'ar';
  const t = useMemo(() => translations[language], [language]);

  const value = useMemo(
    () => ({
      language,
      dir,
      isRTL,
      t,
      setLanguage,
      toggleLanguage,
    }),
    [language, dir, isRTL, t]
  );

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage(): LanguageContextType {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
