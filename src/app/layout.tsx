import type { Metadata } from 'next';
// استخدام خط Cairo - الأنسب للعربية مع طابع عصري
import { Cairo } from 'next/font/google';
import './globals.css';

const cairo = Cairo({
  subsets: ['arabic', 'latin'],
  weight: ['400', '500', '600', '700', '800'],
  display: 'swap',
  variable: '--font-cairo',
});

export const metadata: Metadata = {
  title: 'Indra | حلول الأتمتة والذكاء الاصطناعي',
  description:
    'نُنفّذ أنظمة أتمتة متكاملة مدعومة بالذكاء الاصطناعي ترفع الكفاءة، تقلّل التكاليف التشغيلية، وتزيد المبيعات مع دمج سلس في أنظمة الـCRM الحالية.',
  keywords: [
    'أتمتة',
    'ذكاء اصطناعي',
    'CRM',
    'عقارات',
    'عيادات',
    'تجارة إلكترونية',
    'Indra',
  ],
  openGraph: {
    title: 'Indra | حلول الأتمتة والذكاء الاصطناعي',
    description:
      'نُنفّذ أنظمة أتمتة متكاملة مدعومة بالذكاء الاصطناعي ترفع الكفاءة وتزيد المبيعات.',
    locale: 'ar_SA',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // تحويل اتجاه الموقع ليكون من اليمين لليسار (RTL)
    <html lang="ar" dir="rtl" className={cairo.variable}>
      <body className="min-h-screen bg-background text-foreground overflow-x-hidden font-[family-name:var(--font-cairo)]">
        {children}
      </body>
    </html>
  );
}