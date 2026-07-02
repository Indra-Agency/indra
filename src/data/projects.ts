export interface TechStackItem {
  name: string;
  img: string;
}

export interface ProjectData {
  title: string;
  year: string;
  country: string;
  logo?: string;
  bgColor: string;
  textColor: string;
  desc: string;
  tags: string[];
  ctaType: string;
  tech: TechStackItem[];
  image: string;
}

export const PROJECTS_DATA: ProjectData[] = [
  {
    title: 'متجر عُدّتي',
    year: '2026',
    country: 'SA السعودية',
    logo: '/images/logos/12.png',
    bgColor: 'bg-[#4FFFB0]',
    textColor: 'text-black',
    desc: 'بناء تطبيق Flutter متكامل للمتجر مع شات بوت ذكي، نظام ولاء عملاء، لوحات أداء لحظية، وبوابات دفع متكاملة. صُمم وطُور وأُطلق على المتاجر في أقل من شهر.',
    tags: ['أُطلق في < شهر', 'نظام ولاء', 'بوابات دفع'],
    ctaType: 'apps',
    tech: [
      { name: 'Flutter', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/flutter/flutter-original.svg' },
      { name: 'AI', img: 'https://upload.wikimedia.org/wikipedia/commons/0/04/ChatGPT_logo.svg' },
      { name: 'Payment', img: 'https://api.iconify.design/logos:visa.svg' },
      { name: 'Firebase', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/firebase/firebase-plain.svg' },
      { name: 'Analytics', img: 'https://api.iconify.design/logos:google-analytics.svg' },
      { name: 'Supabase', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/supabase/supabase-original.svg' },
      { name: 'Google Maps', img: 'https://upload.wikimedia.org/wikipedia/commons/a/aa/Google_Maps_icon_%282020%29.svg' },
    ],
    image: '/images/projects/2.png'
  },
  {
    title: 'أبشر',
    year: '2026',
    country: 'السعودية',
    bgColor: 'bg-white',
    textColor: 'text-black',
    desc: 'منصة متكاملة (تطبيق Flutter وموقع إلكتروني) مخصصة لاستئجار المعدات الثقيلة، وتوفير فرص عمل وتوظيف لأصحاب المعدات لربطهم بالعملاء بسهولة وموثوقية.',
    tags: ['تطبيق وموقع', 'استئجار معدات', 'توظيف'],
    ctaType: 'apps',
    tech: [
      { name: 'Flutter', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/flutter/flutter-original.svg' },
      { name: 'React', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg' },
      { name: 'Firebase', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/firebase/firebase-plain.svg' },
      { name: 'Google Maps', img: 'https://upload.wikimedia.org/wikipedia/commons/a/aa/Google_Maps_icon_%282020%29.svg' },
    ],
    image: '/images/projects/3.jpg'
  },
  {
    title: 'Delivery App',
    year: '2023',
    country: 'اليمن',
    logo: '/images/logos/11.png',
    bgColor: 'bg-[#4FFFB0]',
    textColor: 'text-black',
    desc: 'منظومة توصيل متكاملة تتكون من 3 تطبيقات (تطبيق للعميل، تطبيق للمشرفين، وتطبيق للسائقين). تم التطوير والربط والإطلاق في وقت قياسي (شهرين).',
    tags: ['3 تطبيقات مدمجة', 'تتبع لحظي', 'أُطلق في شهرين'],
    ctaType: 'apps',
    tech: [
      { name: 'Flutter', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/flutter/flutter-original.svg' },
      { name: 'AI', img: 'https://upload.wikimedia.org/wikipedia/commons/0/04/ChatGPT_logo.svg' },
      { name: 'Payment', img: 'https://api.iconify.design/logos:visa.svg' },
      { name: 'Firebase', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/firebase/firebase-plain.svg' },
      { name: 'Analytics', img: 'https://api.iconify.design/logos:google-analytics.svg' },
      { name: 'Supabase', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/supabase/supabase-original.svg' },
      { name: 'Google Maps', img: 'https://upload.wikimedia.org/wikipedia/commons/a/aa/Google_Maps_icon_%282020%29.svg' },
    ],
    image: '/images/projects/1.png'
  }
];
