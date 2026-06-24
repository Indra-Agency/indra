'use client';

import { ContactInfo } from './ContactInfo';
import { ContactForm } from './ContactForm';

export function ContactSection() {
  return (
    <section id="contact" className="py-24 relative bg-transparent">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-extrabold flex flex-col items-center justify-center gap-2 mb-4">
            <span className="text-[#4FFFB0]">تواصل</span>
            <span className="text-white">لتعمل معاً</span>
          </h2>
          <p className="text-zinc-400 text-base md:text-lg">
            لديك مشروع في ذهنك؟ دعنا نحول رؤيتك إلى واقع.
          </p>
        </div>

        {/* Grid */}
        <div className="grid lg:grid-cols-12 gap-6 md:gap-8 lg:gap-10">
          {/* Right side in RTL: Info cards (Narrower) */}
          <div className="lg:col-span-5 h-full">
            <ContactInfo />
          </div>
          
          {/* Left side in RTL: Form (Wider) */}
          <div className="lg:col-span-7 h-full">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}
