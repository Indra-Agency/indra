'use client';

import { motion } from 'framer-motion';
import { FiSend, FiCheck, FiX } from 'react-icons/fi';
import { useState } from 'react';
import { NeoButton } from '@/components/ui/NeoButton';
import { submitContactForm } from '@/actions/contact';

export function ContactForm() {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('loading');
    const form = e.currentTarget as HTMLFormElement;
    const formData = new FormData(form);
    
    // Explicit client-side validation to catch what HTML5 validation might miss programmatically
    const name = formData.get('name') as string;
    const email = formData.get('email') as string;
    const subject = formData.get('_subject') as string;
    const message = formData.get('message') as string;
    
    if (!name || !email || !subject || !message || !email.includes('@')) {
      setStatus('error');
      setTimeout(() => setStatus('idle'), 3000);
      return;
    }

    try {
      const result = await submitContactForm(formData);

      if (result.success) {
        setStatus('success');
        form.reset();
        setTimeout(() => setStatus('idle'), 5000);
      } else {
        setStatus('error');
        setTimeout(() => setStatus('idle'), 5000);
      }
    } catch (error) {
      setStatus('error');
      setTimeout(() => setStatus('idle'), 5000);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.2 }}
      viewport={{ once: true, margin: "-100px" }}
      className="h-full"
    >
      <form onSubmit={handleSubmit} className="bg-white p-8 md:p-10 rounded-[2rem] shadow-sm text-black flex flex-col h-full relative">
        
        {/* Title area */}
        <div className="text-start mb-8 flex flex-col items-start w-full">
          <h3 className="text-2xl md:text-3xl font-extrabold mb-2 tracking-tight">أرسل رسالة</h3>
          <p className="text-zinc-500 font-medium text-[14px]">سأعود إليك خلال 24 ساعة.</p>
        </div>

        {/* Spam Protection & Config */}
        <input type="hidden" name="_template" value="table" />

        <div className="flex-1 space-y-5">
          {/* Row 1 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div className="flex flex-col gap-2 items-start">
              <label className="text-[12px] font-bold text-zinc-700 pr-1 w-full text-start">الاسم</label>
              <input 
                type="text" 
                name="name"
                required
                className="w-full bg-[#fcfcfc] border border-zinc-200 rounded-2xl px-5 py-3.5 text-black text-start focus:outline-none focus:border-zinc-400 focus:ring-1 focus:ring-zinc-400 transition-all font-medium text-[14px]"
                placeholder="اسمك"
                dir="rtl"
              />
            </div>
            <div className="flex flex-col gap-2 items-start">
              <label className="text-[12px] font-bold text-zinc-700 pr-1 w-full text-start">البريد الإلكتروني</label>
              <input 
                type="email" 
                name="email"
                required
                className="w-full bg-[#fcfcfc] border border-zinc-200 rounded-2xl px-5 py-3.5 text-black text-start focus:outline-none focus:border-zinc-400 focus:ring-1 focus:ring-zinc-400 transition-all font-medium text-[14px]"
                placeholder="your@email.com"
                dir="rtl"
              />
            </div>
          </div>

          {/* Row 2 */}
          <div className="flex flex-col gap-2 items-start">
            <label className="text-[12px] font-bold text-zinc-700 pr-1 w-full text-start">الموضوع</label>
            <input 
              type="text" 
              name="_subject"
              required
              className="w-full bg-[#fcfcfc] border border-zinc-200 rounded-2xl px-5 py-3.5 text-black text-start focus:outline-none focus:border-zinc-400 focus:ring-1 focus:ring-zinc-400 transition-all font-medium text-[14px]"
              placeholder="ما موضوع رسالتك؟"
              dir="rtl"
            />
          </div>

          {/* Row 3 */}
          <div className="flex flex-col gap-2 items-start">
            <label className="text-[12px] font-bold text-zinc-700 pr-1 w-full text-start">الرسالة</label>
            <textarea 
              name="message"
              required
              rows={4}
              className="w-full bg-[#fcfcfc] border border-zinc-200 rounded-2xl px-5 py-4 text-black text-start focus:outline-none focus:border-zinc-400 focus:ring-1 focus:ring-zinc-400 transition-all font-medium text-[14px] resize-none"
              placeholder="أخبرني عن مشروعك وأهدافك والجدول الزمني..."
              dir="rtl"
            />
          </div>
        </div>

        {/* Submit Button */}
        <NeoButton 
          type="submit" 
          variant="green"
          disabled={status === 'loading'}
          className="mt-8 w-full text-[16px] py-4 disabled:opacity-70 disabled:pointer-events-none"
        >
          {status === 'loading' ? (
            'جاري الإرسال...'
          ) : status === 'success' ? (
            <>تم الإرسال بنجاح <FiCheck className="text-xl" /></>
          ) : status === 'error' ? (
            <>حدث خطأ، حاول مجدداً <FiX className="text-xl" /></>
          ) : (
            <>إرسال الرسالة <FiSend className="text-lg -rotate-45 mb-1" /></>
          )}
        </NeoButton>
      </form>
    </motion.div>
  );
}
