/**
 * whyData.ts
 * ──────────
 * Data for the "WhySection" cards.
 * Each card has an icon (emoji/SVG string), title, and description.
 */

export interface WhyCard {
  id: string;
  icon: string;
  title: string;
  description: string;
}

export const WHY_CARDS: WhyCard[] = [
  {
    id: 'ai',
    icon: '🤖',
    title: 'ذكاء اصطناعي حقيقي',
    description: 'نوظّف أحدث نماذج الذكاء الاصطناعي لأتمتة عملياتك وتحليل بياناتك بدقة تفوق القدرة البشرية.',
  },
  {
    id: 'speed',
    icon: '⚡',
    title: 'تسليم فائق السرعة',
    description: 'نُطلق مشاريعنا في دورات أسبوعية مع قياس مستمر للنتائج، لا مواعيد نهائية مُبهمة.',
  },
  {
    id: 'design',
    icon: '✦',
    title: 'تصميم يصنع الفارق',
    description: 'كل واجهة نبنيها تجمع بين الجمال البصري والأداء التقني، لأن المظهر الفاخر يُقنع قبل أن يتكلم المحتوى.',
  },
  {
    id: 'support',
    icon: '🛡️',
    title: 'دعم لا ينام',
    description: 'فريقنا متاح على مدار الساعة لمتابعة أداء أنظمتك وتحديثها، بلا عقود معقدة.',
  },
  {
    id: 'apps',
    icon: '📱',
    title: 'تطبيقات جوّال احترافية',
    description: 'نصنع تطبيقات iOS وAndroid تُقدّم تجربة مستخدم استثنائية تُحوّل الزوار إلى عملاء دائمين.',
  },
  {
    id: 'results',
    icon: '📈',
    title: 'نتائج قابلة للقياس',
    description: 'لا نؤمن بالكلام، نؤمن بالأرقام. كل مشروع له KPIs واضحة نُراقبها ونُرسل تقاريرها أسبوعياً.',
  },
];
