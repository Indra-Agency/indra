'use client';

import { useLanguage } from '@/i18n/LanguageContext';

export function HeroBadge() {
  const { t } = useLanguage();

  return (
    <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-palladian/15 bg-palladian text-abyssal-blue">
      <span className="w-2 h-2 rounded-full bg-burning-flame shadow-[0_0_8px_var(--color-burning-flame)]" />
      <span className="text-xs font-semibold">{t.hero.badge}</span>
    </div>
  );
}
