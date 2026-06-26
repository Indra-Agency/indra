import { FaBrain, FaLaptopCode, FaNetworkWired, FaSearch } from 'react-icons/fa';
import { ReactNode } from 'react';

export interface ServiceData {
  id: string;
  title: string;
  description: string;
  bgColor: string;
  textColor: string;
  descColor: string;
  tagsBg: string;
  tagsText: string;
  watermark: string;
  iconBg: string;
  tags: string[];
  image: string;
  icon: ReactNode;
}

export const SERVICES_DATA: ServiceData[] = [
  {
    id: '01',
    title: 'الذكاء الاصطناعي والأتمتة',
    description: 'نحول العمليات اليدوية المكررة إلى أنظمة ذاتية القيادة. نبني روبوتات محادثة ذكية ونؤتمت سير العمل لتقليل التكاليف ومضاعفة الإنتاجية على مدار الساعة.',
    bgColor: 'bg-[#4FFFB0]',
    textColor: 'text-[#0A0A0A]',
    descColor: 'text-[#0A0A0A]/70',
    tagsBg: 'bg-black/5',
    tagsText: 'text-[#0A0A0A]',
    watermark: 'text-black/5',
    iconBg: 'bg-black/5',
    tags: ['أتمتة العمليات', 'روبوتات ذكية', 'نماذج لغوية', 'وكلاء ذكاء اصطناعي'],
    image: '/images/1.png',
    icon: <FaBrain className="w-5 h-5" />
  },
  {
    id: '02',
    title: 'تطوير التطبيقات والمواقع',
    description: 'نبرمج تطبيقات الهواتف الذكية والمنصات السحابية بأحدث التقنيات لضمان أداء فائق وتجربة مستخدم استثنائية.',
    bgColor: 'bg-white',
    textColor: 'text-[#0A0A0A]',
    descColor: 'text-[#0A0A0A]/70',
    tagsBg: 'bg-[#ecfdf5]',
    tagsText: 'text-[#0A0A0A]',
    watermark: 'text-[#ecfdf5]',
    iconBg: 'bg-[#ecfdf5]',
    tags: ['تطبيقات الهواتف (Cross-platform)', 'واجهات الويب', 'قواعد البيانات', 'لوحات تحكم'],
    image: '/images/2.jpg',
    icon: <FaLaptopCode className="w-5 h-5" />
  },
  {
    id: '03',
    title: 'تكامل الأنظمة والتحول الرقمي',
    description: 'نربط أدوات عملك ببعضها في نظام بيئي متكامل. نؤسس بيئات عمل رقمية مركزية (Agency OS) لتنظيم المشاريع، وإدارة العملاء، وتدفق البيانات بسلاسة.',
    bgColor: 'bg-[#4FFFB0]',
    textColor: 'text-[#0A0A0A]',
    descColor: 'text-[#0A0A0A]/70',
    tagsBg: 'bg-black/5',
    tagsText: 'text-[#0A0A0A]',
    watermark: 'text-black/5',
    iconBg: 'bg-black/5',
    tags: ['ربط الأنظمة (API)', 'البنية السحابية', 'أتمتة سير العمل المتقدمة', 'مساحات العمل المركزية'],
    image: '/images/5.png',
    icon: <FaNetworkWired className="w-5 h-5" />
  },
  {
    id: '04',
    title: 'تحسين محركات البحث (SEO)',
    description: 'تدقيق تقني دقيق واستراتيجيات نمو متقدمة لضمان تصدر موقعك في نتائج البحث، وجلب زيارات مستهدفة تتحول إلى عملاء فعليين.',
    bgColor: 'bg-white',
    textColor: 'text-[#0A0A0A]',
    descColor: 'text-[#0A0A0A]/70',
    tagsBg: 'bg-[#ecfdf5]',
    tagsText: 'text-[#0A0A0A]',
    watermark: 'text-[#ecfdf5]',
    iconBg: 'bg-[#ecfdf5]',
    tags: ['تدقيق تقني', 'بناء روابط', 'تحسين داخلي', 'استراتيجية المحتوى'],
    image: '/images/4.jpg',
    icon: <FaSearch className="w-5 h-5" />
  }
];
