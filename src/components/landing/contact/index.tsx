'use client';

import { ContactInfo } from './ContactInfo';
import { ContactForm } from './ContactForm';
import { useLanguage } from '@/i18n/LanguageContext';

export function ContactSection() {
  const { t, dir } = useLanguage();

  return (
    <section id="contact" className="py-16 md:py-24 relative bg-transparent" dir={dir}>
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-2xl md:text-4xl font-extrabold flex flex-col items-center justify-center gap-2 mb-4">
            <span className="text-burning-flame">{t.contact.title1}</span>
            <span className="text-palladian">{t.contact.title2}</span>
          </h2>
          <p className="text-zinc-400 text-sm md:text-base">
            {t.contact.description}
          </p>
        </div>

        {/* Grid */}
        <div className="grid lg:grid-cols-12 gap-6 md:gap-8 lg:gap-10">
          {/* Info cards (Narrower) */}
          <div className="lg:col-span-5 h-full">
            <ContactInfo />
          </div>
          
          {/* Form (Wider) */}
          <div className="lg:col-span-7 h-full">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}
