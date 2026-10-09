export type Language = 'ar' | 'en';

export interface Translations {
  nav: {
    about: string;
    services: string;
    work: string;
    experience: string;
    contact: string;
    cta: string;
    langToggle: string;
    langAria: string;
  };
  hero: {
    badge: string;
    headingLine1: string;
    headingAccent: string;
    headingLine2: string;
    subtext1: string;
    subtext2: string;
    ctaPrimary: string;
    ctaSecondary: string;
    trustedBy: string;
    loadingPartners: string;
  };
  marquee: {
    row1: string[];
    row2: string[];
  };
  about: {
    subtitle: string;
    title: string;
    centerCard: {
      available: string;
      brand: string;
      tagline: string;
      global: string;
      countries: string;
      projects: string;
      years: string;
      cta: string;
    };
    badges: {
      googleAds: string;
      metaAds: string;
      tiktok: string;
      mobileApps: string;
      instagram: string;
      snapchat: string;
      cms: string;
      frontend: string;
    };
  };
  why: {
    shimmerTitle: string;
    cards: Array<{
      id: string;
      icon: string;
      title: string;
      description: string;
    }>;
  };
  physicsCloud: Array<{
    id: string;
    text: string;
  }>;
  services: {
    subtitle: string;
    title: string;
    items: Array<{
      id: string;
      title: string;
      description: string;
      tags: string[];
    }>;
  };
  methodology: {
    subtitle: string;
    title: string;
    steps: Array<{
      id: string;
      title: string;
      subtitle: string;
      description: string;
      tags: string[];
    }>;
  };
  diagram: {
    subtitle: string;
    title: string;
    description: string;
    node1: { label: string; sub: string };
    node2: { label: string; sub: string };
    node3: { label: string; sub: string };
    center: { label: string; sub: string };
    node4: { label: string; sub: string };
    node5: { label: string; sub: string };
  };
  projects: {
    subtitle: string;
    title: string;
    downloadFrom: string;
    appStore: string;
    googlePlay: string;
    visitWebsite: string;
    startProject: string;
    items: Array<{
      title: string;
      year: string;
      country: string;
      desc: string;
      tags: string[];
    }>;
  };
  stats: {
    title: string;
    items: Array<{
      id: number;
      value: string;
      title: string;
      subtitle: string;
    }>;
  };
  experience: {
    subtitle: string;
    title: string;
    cta: string;
    items: Array<{
      company: string;
      badge: string;
      title: string;
      date: string;
      location: string;
      shortDesc: string;
      achievements: string[];
    }>;
  };
  clients: {
    subtitle: string;
    title: string;
  };
  contact: {
    title1: string;
    title2: string;
    description: string;
    formTitle: string;
    formSubtitle: string;
    nameLabel: string;
    namePlaceholder: string;
    emailLabel: string;
    emailPlaceholder: string;
    subjectLabel: string;
    subjectPlaceholder: string;
    messageLabel: string;
    messagePlaceholder: string;
    sendBtn: string;
    sendingBtn: string;
    successBtn: string;
    errorBtn: string;
    infoLocationTitle: string;
    infoLocationVal: string;
    infoLocationDesc: string;
    infoEmail: string;
    infoPhone: string;
    infoWhatsapp: string;
  };
  footer: {
    ctaReady: string;
    ctaTitle: string;
    ctaDesc: string;
    ctaStart: string;
    ctaSayHello: string;
    agencyBio: string;
    navTitle: string;
    contactTitle: string;
    basedIn: string;
    scrollToTop: string;
    rights: string;
    designCredit: string;
    navLinks: Array<{ label: string; href: string }>;
  };
  chatbot: {
    askTitle: string;
    online: string;
    closeAria: string;
    sendAria: string;
    inputPlaceholder: string;
    triggerAria: string;
    tooltip: string;
    welcome: string;
    quickQuestions: string[];
  };
  whatsapp: {
    aria: string;
  };
}

export const translations: Record<Language, Translations> = {
  ar: {
    nav: {
      about: 'عن الوكالة',
      services: 'الخدمات',
      work: 'المشاريع',
      experience: 'الخبرات',
      contact: 'تواصل',
      cta: 'ابدأ مشروعك',
      langToggle: 'EN',
      langAria: 'التبديل إلى الإنجليزية',
    },
    hero: {
      badge: 'متاح للعمل',
      headingLine1: 'حين تُدار أنظمتك بذكاء',
      headingAccent: 'يصبح النمو',
      headingLine2: 'نتيجة حتمية.',
      subtext1: 'وكالة متخصصة في حلول الأتمتة والذكاء الاصطناعي.',
      subtext2: 'نُحوّل العمليات اليدوية إلى أنظمة ذكية تعمل على مدار الساعة.',
      ctaPrimary: 'شاهد أعمالنا',
      ctaSecondary: 'تواصل معنا',
      trustedBy: 'موثوق من قبل',
      loadingPartners: 'جاري تحميل شركاء النجاح...',
    },
    marquee: {
      row1: [
        'أتمتة العمليات',
        'الذكاء الاصطناعي',
        'ربط APIs',
        'أتمتة واتساب',
        'تحليل البيانات',
        'شات بوت ذكي',
        'أتمتة CRM',
        'تقارير تلقائية',
        'Make.com',
        'Zapier',
      ],
      row2: [
        'n8n',
        'OpenAI',
        'إدارة Pipeline',
        'تصميم Flows',
        'حجز تلقائي',
        'دمج الأنظمة',
        'برمجة مخصصة',
        'استراتيجية الأتمتة',
        'اختراق النمو',
        'تصميم المنتجات',
      ],
    },
    about: {
      subtitle: 'عن الوكالة',
      title: 'حلول رقمية شاملة',
      centerCard: {
        available: 'متاح',
        brand: 'وكالة Indra',
        tagline: 'شريكك التقني الشامل',
        global: 'تخدم العملاء عالمياً',
        countries: 'دول',
        projects: 'مشروع',
        years: 'سنوات',
        cta: 'لنبني منتجك',
      },
      badges: {
        googleAds: 'إعلانات جوجل',
        metaAds: 'إعلانات ميتا',
        tiktok: 'تيك توك',
        mobileApps: 'تطبيقات الجوال',
        instagram: 'إنستغرام',
        snapchat: 'سناب شات',
        cms: 'إدارة المحتوى',
        frontend: 'تطوير الواجهات',
      },
    },
    why: {
      shimmerTitle: 'أصنع الفارق',
      cards: [
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
      ],
    },
    physicsCloud: [
      { id: 'ai', text: 'الذكاء الاصطناعي' },
      { id: 'auto', text: 'أتمتة العمليات' },
      { id: 'db', text: 'قواعد البيانات' },
      { id: 'firebase', text: 'Firebase' },
      { id: 'supabase', text: 'Supabase' },
      { id: 'web', text: 'تطوير الويب' },
      { id: 'wp', text: 'إدارة المحتوى' },
      { id: 'seo', text: 'تحسين محركات البحث' },
      { id: 'ts', text: 'البرمجة TS' },
      { id: 'googleads', text: 'إعلانات جوجل' },
      { id: 'maps', text: 'خرائط جوجل' },
      { id: 'chatbots', text: 'روبوتات الدردشة' },
      { id: 'flutter', text: 'تطبيقات فلاتر' },
      { id: 'prompt', text: 'هندسة الأوامر' },
      { id: 'api', text: 'تكامل الأنظمة API' },
      { id: 'crm', text: 'إدارة علاقات العملاء CRM' },
      { id: 'analytics_new', text: 'تحليل البيانات' },
      { id: 'cloud_new', text: 'البنية السحابية' },
      { id: 'ui', text: 'تطوير الواجهات' },
    ],
    services: {
      subtitle: 'الخدمات',
      title: 'خبرات تصنع الفارق',
      items: [
        {
          id: '01',
          title: 'الذكاء الاصطناعي والأتمتة',
          description: 'نحول العمليات اليدوية المكررة إلى أنظمة ذاتية القيادة. نبني روبوتات محادثة ذكية ونؤتمت سير العمل لتقليل التكاليف ومضاعفة الإنتاجية على مدار الساعة.',
          tags: ['أتمتة العمليات', 'روبوتات ذكية', 'نماذج لغوية', 'وكلاء ذكاء اصطناعي'],
        },
        {
          id: '02',
          title: 'تطوير التطبيقات والمواقع',
          description: 'نبرمج تطبيقات الهواتف الذكية والمنصات السحابية بأحدث التقنيات لضمان أداء فائق وتجربة مستخدم استثنائية.',
          tags: ['تطبيقات الهواتف (Cross-platform)', 'واجهات الويب', 'قواعد البيانات', 'لوحات تحكم'],
        },
        {
          id: '03',
          title: 'تكامل الأنظمة والتحول الرقمي',
          description: 'نربط أدوات عملك ببعضها في نظام بيئي متكامل. نؤسس بيئات عمل رقمية مركزية (Agency OS) لتنظيم المشاريع، وإدارة العملاء، وتدفق البيانات بسلاسة.',
          tags: ['ربط الأنظمة (API)', 'البنية السحابية', 'أتمتة سير العمل المتقدمة', 'مساحات العمل المركزية'],
        },
        {
          id: '04',
          title: 'تحسين محركات البحث (SEO)',
          description: 'تدقيق تقني دقيق واستراتيجيات نمو متقدمة لضمان تصدر موقعك في نتائج البحث، وجلب زيارات مستهدفة تتحول إلى عملاء فعليين.',
          tags: ['تدقيق تقني', 'بناء روابط', 'تحسين داخلي', 'استراتيجية المحتوى'],
        },
      ],
    },
    methodology: {
      subtitle: 'المنهجية',
      title: 'كيف نعمل',
      steps: [
        {
          id: '01',
          title: 'الاستكشاف والتحليل',
          subtitle: 'بيانات، لا افتراضات',
          description: 'نبني فهمنا على دراسة دقيقة لعملياتك الحالية. نحلل نقاط الاختناق (Bottlenecks) ونحدد الفرص التقنية التي ستحقق أعلى عائد على الاستثمار قبل كتابة أي سطر كود.',
          tags: ['تدقيق العمليات', 'تحليل البيانات', 'دراسة الجدوى'],
        },
        {
          id: '02',
          title: 'تصميم المنظومة',
          subtitle: 'هندسة معمارية متكاملة',
          description: 'لا نعمل في جزر منعزلة. نصمم بنية تحتية برمجية تربط أدواتك، وقواعد بياناتك، وواجهات العمل في نظام بيئي واحد يعمل بتناغم تام.',
          tags: ['تصميم واجهات', 'هندسة قواعد البيانات', 'تخطيط الأنظمة'],
        },
        {
          id: '03',
          title: 'التطوير والأتمتة',
          subtitle: 'تنفيذ دقيق وسريع',
          description: 'نبدأ بتحويل التصاميم إلى واقع باستخدام أحدث تقنيات الذكاء الاصطناعي والأتمتة. نختبر كل مكون لضمان الأداء الفائق والأمان التام.',
          tags: ['برمجة مخصصة', 'ربط API', 'دمج الذكاء الاصطناعي'],
        },
        {
          id: '04',
          title: 'الإطلاق والقياس',
          subtitle: 'قرارات مبنية على الأداء',
          description: 'الإطلاق هو البداية. نبني لوحات تحكم (Dashboards) لمراقبة الأداء لحظة بلحظة، ونستخدم البيانات لتحسين وتوسيع الأنظمة باستمرار.',
          tags: ['إطلاق تدريجي', 'تقارير ذكية', 'صيانة مستمرة'],
        },
      ],
    },
    diagram: {
      subtitle: 'بنية تحتية متطورة',
      title: 'ندير عملياتك المعقدة بكفاءة وأمان',
      description: 'نحن لا نكتفي بكتابة الأكواد، بل نصمم لك أنظمة مؤتمتة متكاملة. تستقبل أعمالك، وتعالج بياناتك بذكاء فائق، لتتحول في النهاية إلى نتائج ورؤى تساعدك على مضاعفة أرباحك وتوسيع نطاق عملك براحة تامة.',
      node1: { label: 'بيانات عملائك', sub: 'تخزين سحابي مشفر وآمن' },
      node2: { label: 'تكامل الأنظمة', sub: 'ربط سلس واستجابة لحظية' },
      node3: { label: 'إدارة الأصول', sub: 'مزامنة وتخزين عالي الأداء' },
      center: { label: 'النواة الذكية', sub: 'معالجة فائقة السرعة للعمليات' },
      node4: { label: 'لوحات تحكم تفاعلية', sub: 'رؤى وتحليلات لدعم قراراتك' },
      node5: { label: 'متابعة مستمرة', sub: 'إشعارات وتقارير لحظية' },
    },
    projects: {
      subtitle: 'التأثير',
      title: 'المشاريع المميزة',
      downloadFrom: 'حمّله من',
      appStore: 'آب ستور',
      googlePlay: 'جوجل بلاي',
      visitWebsite: 'زيارة الموقع',
      startProject: 'ابدأ مشروع',
      items: [
        {
          title: 'متجر عُدّتي',
          year: '2026',
          country: 'SA السعودية',
          desc: 'بناء تطبيق Flutter متكامل للمتجر مع شات بوت ذكي، نظام ولاء عملاء، لوحات أداء لحظية، وبوابات دفع متكاملة. صُمم وطُور وأُطلق على المتاجر في أقل من شهر.',
          tags: ['أُطلق في < شهر', 'نظام ولاء', 'بوابات دفع'],
        },
        {
          title: 'أبشر',
          year: '2026',
          country: 'السعودية',
          desc: 'منصة متكاملة (تطبيق Flutter وموقع إلكتروني) مخصصة لاستئجار المعدات الثقيلة، وتوفير فرص عمل وتوظيف لأصحاب المعدات لربطهم بالعملاء بسهولة وموثوقية.',
          tags: ['تطبيق وموقع', 'استئجار معدات', 'توظيف'],
        },
        {
          title: 'منظومة Delivery App',
          year: '2023',
          country: 'اليمن',
          desc: 'منظومة توصيل متكاملة تتكون من 3 تطبيقات (تطبيق للعميل، تطبيق للمشرفين، وتطبيق للسائقين). تم التطوير والربط والإطلاق في وقت قياسي (شهرين).',
          tags: ['3 تطبيقات مدمجة', 'تتبع لحظي', 'أُطلق في شهرين'],
        },
      ],
    },
    stats: {
      title: 'أثر يُثبت بالأرقام',
      items: [
        {
          id: 4,
          value: '+3',
          title: 'سنوات خبرة',
          subtitle: 'في الحلول التقنية',
        },
        {
          id: 3,
          value: '+50',
          title: 'مشاريع تقنية',
          subtitle: 'تم إنجازها بنجاح',
        },
        {
          id: 2,
          value: '2',
          title: 'أسواق نشطة',
          subtitle: 'اليمن - السعودية',
        },
        {
          id: 1,
          value: '100%',
          title: 'رضا العملاء',
          subtitle: 'في جميع مشاريعنا',
        },
      ],
    },
    experience: {
      subtitle: 'المسيرة المهنية',
      title: 'أين صنعت الأثر',
      cta: 'للتحدث',
      items: [
        {
          company: 'متجر عُدّتي',
          badge: 'عمل عن بُعد',
          title: 'مهندس برمجيات ومطور أول',
          date: '2026',
          location: 'السعودية (عن بُعد)',
          shortDesc: 'قيادة التطوير التقني الشامل لمتجر "عُدّتي" الإلكتروني، وتأسيس بنية تحتية قابلة للتوسع السريع لخدمة السوق السعودي.',
          achievements: [
            'بناء تطبيق Flutter متكامل يربط بين تجربة المستخدم المريحة والأداء السريع.',
            'دمج شات بوت ذكي يعمل بالذكاء الاصطناعي لتحسين خدمة العملاء والرد الآلي.',
            'تأسيس نظام ولاء عملاء متطور لزيادة الاحتفاظ بالعملاء والمبيعات المتكررة.',
            'ربط وتطوير لوحات أداء (Dashboards) لحظية لمراقبة العمليات والمبيعات بدقة.',
            'دمج بوابات دفع متكاملة وآمنة لضمان موثوقية العمليات المالية.',
            'إنجاز التطوير والتصميم والإطلاق الكامل على المتاجر في أقل من شهر واحد.',
          ],
        },
        {
          company: 'Play Game',
          badge: 'عمل عن بُعد',
          title: 'مطور واجهات وتحسين محركات البحث',
          date: '2026',
          location: 'دول الخليج (عن بُعد)',
          shortDesc: 'تطوير منصة ترفيهية شاملة لبيع بطاقات الألعاب والمسلسلات، مع التركيز المكثف على سرعة الأداء واكتساب العملاء عضوياً.',
          achievements: [
            'بناء الموقع من الصفر ليوفر جميع بطاقات الترفيه الرقمية بأسلوب عرض جذاب ومبسط.',
            'تطوير تجربة المستخدم (UI/UX) وهندسة الواجهات لضمان تصفح سلس وسريع.',
            'تنفيذ استراتيجيات تحسين محركات البحث (SEO) المتقدمة لرفع ترتيب الموقع في نتائج البحث.',
            'إنجاز المشروع بالكامل واكتساب ثقة محركات البحث في وقت قياسي جداً (شهر واحد).',
          ],
        },
        {
          company: 'منظومة Delivery App',
          badge: 'دوام كامل',
          title: 'مؤسس تقني ومهندس أنظمة',
          date: '2023',
          location: 'اليمن',
          shortDesc: 'هندسة وتطوير منظومة توصيل ونقل بضائع متكاملة مصممة خصيصاً لتلبية احتياجات السوق اليمني، وربط كافة الأطراف في بيئة موحدة.',
          achievements: [
            'بناء 3 تطبيقات مدمجة ومترابطة (تطبيق للعميل، تطبيق للمشرفين، وتطبيق للسائقين).',
            'تطوير نظام تتبع جغرافي لحظي (Real-time Tracking) باستخدام خرائط جوجل لضمان دقة التوصيل.',
            'تصميم قواعد بيانات ضخمة وآمنة للتعامل مع آلاف الطلبات اليومية بكفاءة عالية.',
            'أتمتة العمليات الإدارية للمشرفين، وتوفير أدوات دقيقة لتحليل أداء السائقين.',
            'الانتهاء من التطوير والربط المتبادل وإطلاق المنظومة بالكامل في شهرين فقط.',
          ],
        },
      ],
    },
    clients: {
      subtitle: 'موثوق من قبل',
      title: 'أبرز العملاء',
    },
    contact: {
      title1: 'تواصل',
      title2: 'لتعمل معاً',
      description: 'لديك مشروع في ذهنك؟ دعنا نحول رؤيتك إلى واقع.',
      formTitle: 'أرسل رسالة',
      formSubtitle: 'سأعود إليك خلال 24 ساعة.',
      nameLabel: 'الاسم',
      namePlaceholder: 'اسمك',
      emailLabel: 'البريد الإلكتروني',
      emailPlaceholder: 'your@email.com',
      subjectLabel: 'الموضوع',
      subjectPlaceholder: 'ما موضوع رسالتك؟',
      messageLabel: 'الرسالة',
      messagePlaceholder: 'أخبرني عن مشروعك وأهدافك والجدول الزمني...',
      sendBtn: 'إرسال الرسالة',
      sendingBtn: 'جاري الإرسال...',
      successBtn: 'تم الإرسال بنجاح',
      errorBtn: 'حدث خطأ، حاول مجدداً',
      infoLocationTitle: 'مقيم في',
      infoLocationVal: 'اليمن',
      infoLocationDesc: 'متاح للعمل عن بُعد في الشرق الأوسط والعالم',
      infoEmail: 'البريد الإلكتروني',
      infoPhone: 'الهاتف',
      infoWhatsapp: 'واتساب',
    },
    footer: {
      ctaReady: 'مستعد للبداية؟',
      ctaTitle: 'لنبن شيئاً مختلفاً',
      ctaDesc: 'لديك مشروع أو فكرة أو تريد أن تقول مرحباً؟ يسعدني التواصل.',
      ctaStart: 'ابدأ مشروعاً',
      ctaSayHello: 'قُل مرحباً',
      agencyBio: 'وكالة رقمية متكاملة متخصصة في حلول الأتمتة والذكاء الاصطناعي، وتطوير المواقع والتطبيقات المبتكرة. نُحوّل رؤيتك إلى أنظمة متطورة تعمل على مدار الساعة لتعزيز نمو أعمالك.',
      navTitle: 'التصفح',
      contactTitle: 'تواصل معنا',
      basedIn: 'مقيم في اليمن',
      scrollToTop: 'الأعلى',
      rights: 'جميع الحقوق محفوظة.',
      designCredit: 'تصميم وتطوير',
      navLinks: [
        { label: 'نبذة عنا', href: '#about' },
        { label: 'الخدمات', href: '#services' },
        { label: 'المشاريع', href: '#work' },
        { label: 'المنهجية', href: '#methodology' },
        { label: 'تواصل', href: '#contact' },
      ],
    },
    chatbot: {
      askTitle: 'اسأل Indra',
      online: 'متصل · يرد فوراً',
      closeAria: 'إغلاق المحادثة',
      sendAria: 'إرسال',
      inputPlaceholder: 'اسألني أي شيء...',
      triggerAria: 'اسأل Indra',
      tooltip: 'اسألني عن خدمات Indra وحلول الأتمتة والذكاء الاصطناعي 🤖',
      welcome: 'أهلاً! 👋 مرحباً بك في Indra. نحن وكالة متخصصة في حلول الأتمتة والذكاء الاصطناعي لتسريع نمو أعمالك. ما اسمك الكريم لنبدأ؟',
      quickQuestions: [
        'ما هي خدماتكم؟',
        'كيف تفيدني الأتمتة؟',
        'ما هي حلول الذكاء الاصطناعي؟',
        'حدثني عن مشاريعكم',
        'هل تقدمون استشارات؟',
        'كيف نبدأ العمل معاً؟',
      ],
    },
    whatsapp: {
      aria: 'تواصل معنا عبر واتساب',
    },
  },

  en: {
    nav: {
      about: 'About',
      services: 'Services',
      work: 'Projects',
      experience: 'Experience',
      contact: 'Contact',
      cta: 'Start Project',
      langToggle: 'AR',
      langAria: 'Switch to Arabic',
    },
    hero: {
      badge: 'Available for work',
      headingLine1: 'When your systems run intelligently,',
      headingAccent: 'growth becomes',
      headingLine2: 'an inevitable outcome.',
      subtext1: 'A premier software agency specializing in workflow automation and AI.',
      subtext2: 'We turn manual repetitive tasks into autonomous 24/7 operating systems.',
      ctaPrimary: 'Explore Our Work',
      ctaSecondary: 'Contact Us',
      trustedBy: 'Trusted by',
      loadingPartners: 'Loading partners...',
    },
    marquee: {
      row1: [
        'Workflow Automation',
        'Artificial Intelligence',
        'API Integration',
        'WhatsApp Automation',
        'Data Analytics',
        'Smart Chatbots',
        'CRM Automation',
        'Automated Reports',
        'Make.com',
        'Zapier',
      ],
      row2: [
        'n8n',
        'OpenAI',
        'Pipeline Management',
        'Flow Design',
        'Automated Booking',
        'Systems Integration',
        'Custom Software',
        'Automation Strategy',
        'Growth Hacking',
        'Product Design',
      ],
    },
    about: {
      subtitle: 'About The Agency',
      title: 'Comprehensive Digital Solutions',
      centerCard: {
        available: 'Available',
        brand: 'Indra Agency',
        tagline: 'Your Comprehensive Tech Partner',
        global: 'Serving Clients Globally',
        countries: 'Countries',
        projects: 'Projects',
        years: 'Years',
        cta: "Let's Build Your Product",
      },
      badges: {
        googleAds: 'Google Ads',
        metaAds: 'Meta Ads',
        tiktok: 'TikTok',
        mobileApps: 'Mobile Apps',
        instagram: 'Instagram',
        snapchat: 'Snapchat',
        cms: 'Content Management',
        frontend: 'Frontend Engineering',
      },
    },
    why: {
      shimmerTitle: 'Make The Difference',
      cards: [
        {
          id: 'ai',
          icon: '🤖',
          title: 'Genuine Artificial Intelligence',
          description: 'We deploy cutting-edge AI models to automate your operations and analyze data with precision beyond human capacity.',
        },
        {
          id: 'speed',
          icon: '⚡',
          title: 'Rapid Sprint Delivery',
          description: 'We ship projects in weekly cycles with measurable milestones, eliminating ambiguous deadlines.',
        },
        {
          id: 'design',
          icon: '✦',
          title: 'Design That Differentiates',
          description: 'Every UI we engineer blends visual elegance with high performance, because luxury appeal converts before copy is even read.',
        },
        {
          id: 'support',
          icon: '🛡️',
          title: 'Round-The-Clock Support',
          description: 'Our engineering team is always on standby to monitor your system health and deploy updates without friction.',
        },
        {
          id: 'apps',
          icon: '📱',
          title: 'Native-Grade Mobile Apps',
          description: 'We build iOS and Android apps delivering frictionless UX that transforms first-time visitors into loyal advocates.',
        },
        {
          id: 'results',
          icon: '📈',
          title: 'Measurable ROI',
          description: 'We believe in verifiable data. Every system is linked to transparent KPIs with regular weekly reporting.',
        },
      ],
    },
    physicsCloud: [
      { id: 'ai', text: 'Artificial Intelligence' },
      { id: 'auto', text: 'Workflow Automation' },
      { id: 'db', text: 'Databases' },
      { id: 'firebase', text: 'Firebase' },
      { id: 'supabase', text: 'Supabase' },
      { id: 'web', text: 'Web Development' },
      { id: 'wp', text: 'CMS Platforms' },
      { id: 'seo', text: 'Search Engine Optimization' },
      { id: 'ts', text: 'TypeScript' },
      { id: 'googleads', text: 'Google Ads' },
      { id: 'maps', text: 'Google Maps API' },
      { id: 'chatbots', text: 'AI Chatbots' },
      { id: 'flutter', text: 'Flutter Apps' },
      { id: 'prompt', text: 'Prompt Engineering' },
      { id: 'api', text: 'API Integration' },
      { id: 'crm', text: 'CRM Automation' },
      { id: 'analytics_new', text: 'Data Analytics' },
      { id: 'cloud_new', text: 'Cloud Infrastructure' },
      { id: 'ui', text: 'Modern UI/UX' },
    ],
    services: {
      subtitle: 'Our Services',
      title: 'Expertise That Drives Growth',
      items: [
        {
          id: '01',
          title: 'AI & Workflow Automation',
          description: 'We turn repetitive manual workflows into self-driving pipelines. Building intelligent chatbots and automated flows that slash operational overhead and boost productivity 24/7.',
          tags: ['Workflow Automation', 'Smart Bots', 'LLM Models', 'Autonomous AI Agents'],
        },
        {
          id: '02',
          title: 'App & Web Development',
          description: 'We engineer high-performance mobile apps and scalable cloud platforms using modern stacks to ensure lightning-fast speed and an extraordinary user journey.',
          tags: ['Cross-platform Apps', 'Modern Web UI', 'Scalable Databases', 'Admin Dashboards'],
        },
        {
          id: '03',
          title: 'Systems Integration & Digital Transformation',
          description: 'We interconnect your tech stack into a unified ecosystem. Crafting central operational environments (Agency OS) to synchronize projects, clients, and data effortlessly.',
          tags: ['API Integrations', 'Cloud Architecture', 'Advanced Workflows', 'Central Workspaces'],
        },
        {
          id: '04',
          title: 'Search Engine Optimization (SEO)',
          description: 'Deep technical audits and high-impact organic strategies designed to position your brand at the summit of search rankings and attract qualified high-intent customers.',
          tags: ['Technical SEO', 'Link Building', 'On-page Optimization', 'Content Strategy'],
        },
      ],
    },
    methodology: {
      subtitle: 'Our Methodology',
      title: 'How We Work',
      steps: [
        {
          id: '01',
          title: 'Discovery & Analysis',
          subtitle: 'Data-driven, zero assumptions',
          description: 'We evaluate your active workflows, diagnose operational bottlenecks, and identify high-leverage technical opportunities that maximize ROI before writing a single line of code.',
          tags: ['Process Audit', 'Data Diagnostics', 'Feasibility Study'],
        },
        {
          id: '02',
          title: 'System Architecture',
          subtitle: 'Integrated ecosystem design',
          description: 'We never work in silos. We architect a unified software blueprint connecting your applications, databases, and client touchpoints in seamless synchrony.',
          tags: ['UI/UX Systems', 'Database Schemas', 'Architecture Planning'],
        },
        {
          id: '03',
          title: 'Engineering & Automation',
          subtitle: 'Precision & high-velocity build',
          description: 'We bring concepts to reality using cutting-edge AI and robust automation tools, stress-testing each module for resilient security and high concurrency.',
          tags: ['Custom Code', 'API Webhooks', 'AI Model Integration'],
        },
        {
          id: '04',
          title: 'Launch & Performance Scaling',
          subtitle: 'Decisions guided by metrics',
          description: 'Launch day is just day one. We set up real-time observability dashboards and leverage operational analytics to continually refine, scale, and optimize.',
          tags: ['Phased Deployment', 'Smart Dashboards', 'Ongoing Optimization'],
        },
      ],
    },
    diagram: {
      subtitle: 'Advanced Infrastructure',
      title: 'Managing Complex Operations with Precision & Security',
      description: 'Beyond writing code, we architect end-to-end automated systems that intake workflows, process data with advanced intelligence, and deliver tangible results and insights to scale your business.',
      node1: { label: 'Customer Data', sub: 'Encrypted & secure cloud storage' },
      node2: { label: 'System Integration', sub: 'Seamless link & instant response' },
      node3: { label: 'Asset Management', sub: 'High-performance synchronization' },
      center: { label: 'Intelligent Core', sub: 'Ultra-fast process execution' },
      node4: { label: 'Interactive Dashboards', sub: 'Insights & analytics for decisions' },
      node5: { label: 'Active Monitoring', sub: 'Real-time alerts & reports' },
    },
    projects: {
      subtitle: 'Impact & Results',
      title: 'Featured Projects',
      downloadFrom: 'Download on',
      appStore: 'App Store',
      googlePlay: 'Google Play',
      visitWebsite: 'Visit Website',
      startProject: 'Start a Project',
      items: [
        {
          title: 'Oodaty Store',
          year: '2026',
          country: 'Saudi Arabia (SA)',
          desc: 'Engineered an end-to-end Flutter e-commerce application equipped with an AI sales chatbot, customer loyalty tiers, live telemetry dashboards, and multi-gateway checkout. Deployed to stores in under one month.',
          tags: ['Shipped in < 1 month', 'Loyalty System', 'Payment Gateways'],
        },
        {
          title: 'Absher Equipment',
          year: '2026',
          country: 'Saudi Arabia',
          desc: 'A unified digital platform (Flutter mobile app & web portal) dedicated to heavy machinery rental, creating transparent employment and booking channels for equipment operators and contractors.',
          tags: ['Mobile & Web', 'Equipment Rental', 'Staffing'],
        },
        {
          title: 'Delivery App Ecosystem',
          year: '2023',
          country: 'Yemen',
          desc: 'An integrated logistics ecosystem comprising 3 dedicated apps (Customer, Admin/Dispatch, and Drivers). Built, synchronized with live GPS tracking, and launched in record time (2 months).',
          tags: ['3 Synchronized Apps', 'Real-time Tracking', 'Shipped in 2 months'],
        },
      ],
    },
    stats: {
      title: 'Proven Impact By Numbers',
      items: [
        {
          id: 4,
          value: '+3',
          title: 'Years of Experience',
          subtitle: 'In Technical Solutions',
        },
        {
          id: 3,
          value: '+50',
          title: 'Software Projects',
          subtitle: 'Delivered Successfully',
        },
        {
          id: 2,
          value: '2',
          title: 'Active Markets',
          subtitle: 'Saudi Arabia & Yemen',
        },
        {
          id: 1,
          value: '100%',
          title: 'Client Satisfaction',
          subtitle: 'Across All Deliverables',
        },
      ],
    },
    experience: {
      subtitle: 'Career Milestones',
      title: 'Where Impact Was Made',
      cta: "Let's Talk",
      items: [
        {
          company: 'Oodaty Store',
          badge: 'Remote',
          title: 'Lead Software Engineer & Technical Architect',
          date: '2026',
          location: 'Saudi Arabia (Remote)',
          shortDesc: 'Spearheaded complete technical development for the Oodaty digital storefront, establishing high-concurrency infrastructure for the Saudi consumer market.',
          achievements: [
            'Architected a cross-platform Flutter application pairing fluid ergonomics with sub-second responsiveness.',
            'Integrated an AI customer service agent for autonomous inquiries and ticket resolution.',
            'Established an advanced loyalty program driving repeat conversions and client retention.',
            'Constructed real-time business intelligence dashboards monitoring orders and inventory.',
            'Integrated PCI-compliant payment gateways ensuring ironclad financial reliability.',
            'Delivered complete design, development, and dual-store release in under 30 days.',
          ],
        },
        {
          company: 'Play Game',
          badge: 'Remote',
          title: 'Frontend & Technical SEO Lead',
          date: '2026',
          location: 'Gulf Region (Remote)',
          shortDesc: 'Engineered a digital entertainment voucher marketplace with intensive focus on rendering speed, Core Web Vitals, and organic inbound acquisition.',
          achievements: [
            'Built the storefront from ground up offering instant digital game keys and subscription deliveries.',
            'Enhanced UI/UX architecture to deliver effortless browsing and near-zero checkout friction.',
            'Executed enterprise SEO architecture securing high-ranking organic placements.',
            'Shipped the full platform and established domain authority in a single month.',
          ],
        },
        {
          company: 'Delivery App Ecosystem',
          badge: 'Full-Time',
          title: 'Technical Co-founder & Systems Architect',
          date: '2023',
          location: 'Yemen',
          shortDesc: 'Engineered a scalable multi-party delivery and freight logistics ecosystem customized for local infrastructure requirements.',
          achievements: [
            'Engineered 3 interconnected applications (Customer app, Dispatch console, and Driver app).',
            'Implemented real-time GPS fleet tracking via Google Maps ensuring route precision.',
            'Architected resilient database backends handling thousands of concurrent daily dispatches.',
            'Automated dispatcher supervisory workflows and driver performance metrics.',
            'Achieved full multi-system integration and production rollout in exactly two months.',
          ],
        },
      ],
    },
    clients: {
      subtitle: 'Trusted By Industry Leaders',
      title: 'Featured Clients & Partners',
    },
    contact: {
      title1: 'Get In Touch',
      title2: "Let's Work Together",
      description: 'Have a project or vision? Let’s turn your ideas into high-impact software.',
      formTitle: 'Send a Message',
      formSubtitle: 'We will respond within 24 hours.',
      nameLabel: 'Name',
      namePlaceholder: 'Your Name',
      emailLabel: 'Email Address',
      emailPlaceholder: 'your@email.com',
      subjectLabel: 'Subject',
      subjectPlaceholder: 'What is your message about?',
      messageLabel: 'Message',
      messagePlaceholder: 'Tell us about your project, objectives, and timeline...',
      sendBtn: 'Send Message',
      sendingBtn: 'Sending...',
      successBtn: 'Sent Successfully',
      errorBtn: 'Error occurred, try again',
      infoLocationTitle: 'Based in',
      infoLocationVal: 'Yemen',
      infoLocationDesc: 'Available for remote collaboration across the Middle East & Worldwide',
      infoEmail: 'Email',
      infoPhone: 'Phone',
      infoWhatsapp: 'WhatsApp',
    },
    footer: {
      ctaReady: 'Ready to start?',
      ctaTitle: "Let's Build Something Extraordinary",
      ctaDesc: 'Have an upcoming project, innovative idea, or just want to explore possibilities? We’d love to connect.',
      ctaStart: 'Start a Project',
      ctaSayHello: 'Say Hello',
      agencyBio: 'A full-service digital agency specializing in workflow automation, artificial intelligence, and scalable web and mobile software development. We turn your vision into 24/7 intelligent operating systems.',
      navTitle: 'Navigation',
      contactTitle: 'Get in Touch',
      basedIn: 'Based in Yemen',
      scrollToTop: 'Top',
      rights: 'All rights reserved.',
      designCredit: 'Designed & Developed by',
      navLinks: [
        { label: 'About', href: '#about' },
        { label: 'Services', href: '#services' },
        { label: 'Projects', href: '#work' },
        { label: 'Methodology', href: '#methodology' },
        { label: 'Contact', href: '#contact' },
      ],
    },
    chatbot: {
      askTitle: 'Ask Indra',
      online: 'Online · Replies instantly',
      closeAria: 'Close chat',
      sendAria: 'Send',
      inputPlaceholder: 'Ask me anything...',
      triggerAria: 'Ask Indra',
      tooltip: 'Ask me about Indra services & AI automation 🤖',
      welcome: 'Hello! 👋 Welcome to Indra. We specialize in workflow automation and AI solutions to accelerate your business growth. What is your name to get started?',
      quickQuestions: [
        'What are your services?',
        'How does automation help me?',
        'What are your AI solutions?',
        'Tell me about your projects',
        'Do you offer consultations?',
        'How do we get started?',
      ],
    },
    whatsapp: {
      aria: 'Chat with us on WhatsApp',
    },
  },
};
