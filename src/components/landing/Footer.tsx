'use client';

import { motion } from 'framer-motion';

/* ──────────────── روابط التذييل ──────────────── */
const quickLinks = [
  { label: 'الرئيسية', href: '#' },
  { label: 'القطاعات', href: '#sectors' },
  { label: 'خدماتنا', href: '#services' },
  { label: 'آلية العمل', href: '#process' },
  { label: 'الأسئلة الشائعة', href: '#faq' },
];

const contactInfo = [
  {
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
      </svg>
    ),
    text: 'info@indra.ai',
    href: 'mailto:info@indra.ai',
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
      </svg>
    ),
    text: '+966 50 000 0000',
    href: 'tel:+966500000000',
  },
];

/* ──────────────── التذييل ──────────────── */
export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative border-t border-border bg-surface/50">
      <div className="container mx-auto px-6">
        {/* القسم العلوي */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="py-16 grid grid-cols-1 md:grid-cols-12 gap-12"
        >
          {/* العمود الأول: الشعار والوصف */}
          <div className="md:col-span-5">
            <div className="text-2xl font-bold tracking-wider mb-4">
              Indra<span className="text-emerald-400">.</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed max-w-sm mb-6">
              وكالة متخصصة في حلول الأتمتة والذكاء الاصطناعي. نُساعد الشركات
              على تحويل عملياتها التشغيلية إلى أنظمة ذكية تعمل بكفاءة عالية
              وبأقل تدخّل بشري.
            </p>
            {/* أيقونات التواصل الاجتماعي */}
            <div className="flex gap-3">
              {['X', 'In', 'Ig'].map((social) => (
                <a
                  key={social}
                  href="#"
                  className="w-9 h-9 rounded-lg bg-background border border-border flex items-center justify-center text-xs text-gray-400 hover:text-emerald-400 hover:border-emerald-400/30 transition-all duration-300"
                >
                  {social}
                </a>
              ))}
            </div>
          </div>

          {/* العمود الثاني: روابط سريعة */}
          <div className="md:col-span-3">
            <h4 className="text-sm font-bold mb-6 text-foreground">روابط سريعة</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-gray-400 text-sm hover:text-emerald-400 transition-colors duration-300"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* العمود الثالث: معلومات التواصل */}
          <div className="md:col-span-4">
            <h4 className="text-sm font-bold mb-6 text-foreground">تواصل معنا</h4>
            <ul className="space-y-4">
              {contactInfo.map((item, i) => (
                <li key={i}>
                  <a
                    href={item.href}
                    className="flex items-center gap-3 text-gray-400 text-sm hover:text-emerald-400 transition-colors duration-300"
                  >
                    <span className="text-emerald-400/70">{item.icon}</span>
                    <span>{item.text}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </motion.div>

        {/* القسم السفلي: حقوق النشر */}
        <div className="py-6 border-t border-border flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-xs">
            © {currentYear} Indra. جميع الحقوق محفوظة.
          </p>
          <div className="flex gap-6 text-gray-500 text-xs">
            <a href="#" className="hover:text-gray-400 transition-colors">
              سياسة الخصوصية
            </a>
            <a href="#" className="hover:text-gray-400 transition-colors">
              الشروط والأحكام
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
