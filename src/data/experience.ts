import { TechStackItem } from './projects';

export interface ExperienceData {
  company: string;
  badge: string;
  title: string;
  date: string;
  location: string;
  pillClass: string;
  bgColor: string;
  textColor: string;
  shortDesc: string;
  achievements: string[];
  tech: TechStackItem[];
  btnVariant: 'green' | 'white';
}

export const EXPERIENCE_DATA: ExperienceData[] = [
  {
    company: 'متجر عُدّتي',
    badge: 'عمل عن بُعد',
    title: 'مهندس برمجيات ومطور أول',
    date: '2026',
    location: 'السعودية (عن بُعد)',
    pillClass: 'bg-red-50 text-[#d96a5b]', 
    bgColor: 'bg-white',
    textColor: 'text-black',
    shortDesc: 'قيادة التطوير التقني الشامل لمتجر "عُدّتي" الإلكتروني، وتأسيس بنية تحتية قابلة للتوسع السريع لخدمة السوق السعودي.',
    achievements: [
      'بناء تطبيق Flutter متكامل يربط بين تجربة المستخدم المريحة والأداء السريع.',
      'دمج شات بوت ذكي يعمل بالذكاء الاصطناعي لتحسين خدمة العملاء والرد الآلي.',
      'تأسيس نظام ولاء عملاء متطور لزيادة الاحتفاظ بالعملاء والمبيعات المتكررة.',
      'ربط وتطوير لوحات أداء (Dashboards) لحظية لمراقبة العمليات والمبيعات بدقة.',
      'دمج بوابات دفع متكاملة وآمنة لضمان موثوقية العمليات المالية.',
      'إنجاز التطوير والتصميم والإطلاق الكامل على المتاجر في أقل من شهر واحد.'
    ],
    tech: [
      { name: 'Flutter', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/flutter/flutter-original.svg' },
      { name: 'AI', img: 'https://upload.wikimedia.org/wikipedia/commons/0/04/ChatGPT_logo.svg' },
      { name: 'Payment', img: 'https://api.iconify.design/logos:visa.svg' },
      { name: 'Firebase', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/firebase/firebase-plain.svg' },
      { name: 'Supabase', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/supabase/supabase-original.svg' }
    ],
    btnVariant: 'green'
  },
  {
    company: 'Play Game',
    badge: 'عمل عن بُعد',
    title: 'مطور واجهات وتحسين محركات البحث',
    date: '2026',
    location: 'دول الخليج (عن بُعد)',
    pillClass: 'bg-white text-black shadow-sm',
    bgColor: 'bg-[#4FFFB0]',
    textColor: 'text-black',
    shortDesc: 'تطوير منصة ترفيهية شاملة لبيع بطاقات الألعاب والمسلسلات، مع التركيز المكثف على سرعة الأداء واكتساب العملاء عضوياً.',
    achievements: [
      'بناء الموقع من الصفر ليوفر جميع بطاقات الترفيه الرقمية بأسلوب عرض جذاب ومبسط.',
      'تطوير تجربة المستخدم (UI/UX) وهندسة الواجهات لضمان تصفح سلس وسريع.',
      'تنفيذ استراتيجيات تحسين محركات البحث (SEO) المتقدمة لرفع ترتيب الموقع في نتائج البحث.',
      'إنجاز المشروع بالكامل واكتساب ثقة محركات البحث في وقت قياسي جداً (شهر واحد).'
    ],
    tech: [
      { name: 'WordPress', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/wordpress/wordpress-plain.svg' },
      { name: 'SEO', img: 'https://api.iconify.design/flat-color-icons:search.svg' },
      { name: 'GA4', img: 'https://api.iconify.design/logos:google-analytics.svg' },
      { name: 'Optimization', img: 'https://api.iconify.design/flat-color-icons:positive-dynamic.svg' }
    ],
    btnVariant: 'white'
  },
  {
    company: 'منظومة Delivery App',
    badge: 'دوام كامل',
    title: 'مؤسس تقني ومهندس أنظمة',
    date: '2023',
    location: 'اليمن',
    pillClass: 'bg-red-50 text-[#d96a5b]', 
    bgColor: 'bg-white',
    textColor: 'text-black',
    shortDesc: 'هندسة وتطوير منظومة توصيل ونقل بضائع متكاملة مصممة خصيصاً لتلبية احتياجات السوق اليمني، وربط كافة الأطراف في بيئة موحدة.',
    achievements: [
      'بناء 3 تطبيقات مدمجة ومترابطة (تطبيق للعميل، تطبيق للمشرفين، وتطبيق للسائقين).',
      'تطوير نظام تتبع جغرافي لحظي (Real-time Tracking) باستخدام خرائط جوجل لضمان دقة التوصيل.',
      'تصميم قواعد بيانات ضخمة وآمنة للتعامل مع آلاف الطلبات اليومية بكفاءة عالية.',
      'أتمتة العمليات الإدارية للمشرفين، وتوفير أدوات دقيقة لتحليل أداء السائقين.',
      'الانتهاء من التطوير والربط المتبادل وإطلاق المنظومة بالكامل في شهرين فقط.'
    ],
    tech: [
      { name: 'Flutter', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/flutter/flutter-original.svg' },
      { name: 'AI', img: 'https://upload.wikimedia.org/wikipedia/commons/0/04/ChatGPT_logo.svg' },
      { name: 'Firebase', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/firebase/firebase-plain.svg' },
      { name: 'Google Maps', img: 'https://upload.wikimedia.org/wikipedia/commons/a/aa/Google_Maps_icon_%282020%29.svg' }
    ],
    btnVariant: 'green'
  }
];
