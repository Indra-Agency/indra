'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiSend, FiX } from 'react-icons/fi';
import Image from 'next/image';

interface Message {
  id: string;
  sender: 'bot' | 'user';
  text: string;
  time: string;
}

const QUICK_QUESTIONS = [
  'ما هي خدماتكم؟',
  'كيف تفيدني الأتمتة؟',
  'ما هي حلول الذكاء الاصطناعي؟',
  'حدثني عن مشاريعكم',
  'هل تقدمون استشارات؟',
  'كيف نبدأ العمل معاً؟',
];

export function SmartChatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 'welcome',
      sender: 'bot',
      text: 'أهلاً! 👋 مرحباً بك في Indra. نحن وكالة متخصصة في حلول الأتمتة والذكاء الاصطناعي لتسريع نمو أعمالك. ما اسمك الكريم لنبدأ؟',
      time: getFormattedTime(),
    },
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [userName, setUserName] = useState<string | null>(null);

  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Show tooltip after a brief delay on load
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowTooltip(true);
    }, 2500);
    return () => clearTimeout(timer);
  }, []);

  // Auto scroll to bottom
  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages, isTyping]);

  function getFormattedTime() {
    const now = new Date();
    let hours = now.getHours();
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const ampm = hours >= 12 ? 'م' : 'ص';
    hours = hours % 12;
    hours = hours ? hours : 12;
    return `${hours}:${minutes} ${ampm}`;
  }

  const handleSendMessage = (text: string) => {
    if (!text.trim()) return;

    const userMsg: Message = {
      id: Math.random().toString(),
      sender: 'user',
      text,
      time: getFormattedTime(),
    };

    setMessages((prev) => [...prev, userMsg]);
    setInputValue('');
    setIsTyping(true);

    // Simulate smart reply
    setTimeout(() => {
      setIsTyping(false);
      
      // Play a gentle notification sound when a message is received
      try {
        const AudioContext = window.AudioContext || (window as any).webkitAudioContext;
        if (AudioContext) {
          const ctx = new AudioContext();
          const osc = ctx.createOscillator();
          const gain = ctx.createGain();

          osc.type = 'sine';
          osc.frequency.setValueAtTime(587.33, ctx.currentTime); // D5
          osc.frequency.exponentialRampToValueAtTime(880.00, ctx.currentTime + 0.12); // A5

          gain.gain.setValueAtTime(0.12, ctx.currentTime);
          gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.12);

          osc.connect(gain);
          gain.connect(ctx.destination);

          osc.start();
          osc.stop(ctx.currentTime + 0.12);
        }
      } catch (err) {
        console.warn("Audio feedback blocked by browser autoplay policy:", err);
      }

      let replyText = '';
      // First reply after greeting: User gave their name
      if (!userName && messages.length <= 2) {
        setUserName(text);
        replyText = `أهلاً بك يا ${text}! يسعدنا تواصلك مع وكالة Indra. تفضل باختيار أحد المواضيع التالية أو اسألنا عن أي استفسار يخطر ببالك:`;
      } else {
        const query = text.toLowerCase().trim();

        if (query.includes('خدمات') || query.includes('ما هي خدماتكم') || query.includes('ماذا تقدم')) {
          replyText = `نحن في وكالة Indra نقدم حلولاً رقمية ذكية لرفع كفاءة أعمالك، وتتضمن:
• أتمتة العمليات (Workflow Automation) لربط الأنظمة وتوفير الوقت والجهد.
• دمج الذكاء الاصطناعي (AI Integration) لبناء نماذج ذكية تخدم عملك.
• تطوير تطبيقات الويب والمنصات السحابية (Next.js & React) فائقة الأداء.
• تصميم وتطوير تطبيقات الهواتف الذكية (iOS & Android).
• بناء وتطوير أنظمة خدمة العملاء الآلية وروبوتات الرد الذكي.`;
        } else if (query.includes('أتمتة') || query.includes('تفيدني') || query.includes('كيف تفيدني')) {
          replyText = `أتمتة العمليات تساعد شركتك على النمو السريع من خلال:
• تقليل التكاليف التشغيلية بشكل ضخم عبر تقليص المهام اليدوية المتكررة.
• تشغيل عملياتك والمبيعات وخدمة العملاء على مدار الساعة 24/7 دون توقف.
• زيادة سرعة الإنجاز والإنتاجية وضمان دقة العمل بنسبة 100% دون أخطاء بشرية.

هل تود أتمتة عملية معينة أو ربط تطبيقين في شركتك؟`;
        } else if (query.includes('ذكاء') || query.includes('حلول الذكاء') || query.includes('ai')) {
          replyText = `نقدم حلول ذكاء اصطناعي ذكية ومخصصة لأعمالك تشمل:
• أنظمة تحليل البيانات والتنبؤ بالسلوك والمبيعات.
• روبوتات المحادثة الذكية (Chatbots) المتقدمة لخدمة العملاء.
• أتمتة إدخال وتصنيف البيانات والملفات تلقائياً باستخدام الذكاء الاصطناعي.
• دمج الذكاء الاصطناعي التوليدي (ChatGPT, Claude) لتسريع وتسهيل إنتاج المحتوى والعمليات اليومية لشركتك.`;
        } else if (query.includes('مشاريع') || query.includes('أعمال') || query.includes('سابقة')) {
          replyText = `قمنا بتطوير حلول برمجية وأنظمة أتمتة لجهات وشركات مختلفة، مثل:
• لوحات تحكم متقدمة لإدارة المبيعات والعمليات.
• منصات أتمتة لخدمة العملاء وربطها بأنظمة الـ CRM.
• مواقع وتطبيقات سحابية سريعة ومتوافقة مع معايير الـ SEO بنسبة 100%.

يمكنك استكشاف معرض مشاريعنا المميزة في الموقع للمزيد من التفاصيل!`;
        } else if (query.includes('استشار') || query.includes('استشارات') || query.includes('تواصل')) {
          replyText = `نعم بكل سرور! نحن نقدم استشارات تقنية مجانية في البداية لدراسة طبيعة عملك وتحديد الفرص التي يمكن للذكاء الاصطناعي والأتمتة تسريعها وتحسينها.

يمكنك حجز استشارتك مباشرة عبر نموذج الاتصال أو الضغط على زر الواتساب للتحدث معنا فوراً!`;
        } else if (query.includes('بدء') || query.includes('نبدأ') || query.includes('العمل')) {
          replyText = `البدء معنا سهل للغاية:
1. نتناقش أولاً حول متطلباتك والعمليات التي تود تطويرها أو أتمتتها.
2. نقدم لك دراسة سريعة وعرضاً فنياً ومالياً مخصصاً لمشروعك.
3. نبدأ في التطوير والتكامل الفعلي مع أنظمتك الحالية.

تواصل معنا الآن عبر نموذج الاتصال في الموقع أو مباشرة عبر الواتساب لنبدأ فوراً!`;
        } else if (query.includes('مرحبا') || query.includes('أهلاً') || query.includes('هلا') || query.includes('السلام')) {
          replyText = `أهلاً بك! يسعدنا تواصلك مع وكالة Indra. كيف يمكننا مساعدتك اليوم؟ يمكنك سؤالي عن خدماتنا، أتمتة العمليات، أو كيف نبدأ العمل معاً.`;
        } else {
          replyText = `سؤال رائع! للحصول على إجابة تفصيلية مخصصة، أو لمناقشة مشروعك بشكل مباشر، يمكنك مراسلتنا مباشرة عبر الواتساب، وسنكون سعداء جداً بمساعدتك!`;
        }
      }

      const botMsg: Message = {
        id: Math.random().toString(),
        sender: 'bot',
        text: replyText,
        time: getFormattedTime(),
      };

      setMessages((prev) => [...prev, botMsg]);
    }, 1000);
  };

  return (
    <div className="fixed bottom-6 right-6 z-[999] flex flex-col items-end gap-4">
      {/* Tooltip & Trigger Button Group */}
      <div className="flex items-center gap-3 flex-row-reverse">
        {/* Chat Toggle Button */}
        <button
          onClick={() => {
            setIsOpen(!isOpen);
            setShowTooltip(false);
          }}
          className="relative w-14 h-14 bg-burning-flame text-abyssal-blue rounded-full flex items-center justify-center border-2 border-abyssal-blue shadow-[3px_3px_0_0_var(--color-abyssal-blue)] hover:-translate-y-1 hover:-translate-x-1 hover:shadow-[5px_5px_0_0_var(--color-abyssal-blue)] transition-all duration-300 pointer-events-auto"
          aria-label="اسأل Indra"
        >
          {/* Online Dot */}
          <span className="absolute top-0.5 right-0.5 w-3 h-3 rounded-full bg-red-500 border border-abyssal-blue" />
          
          <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
          </svg>
        </button>

        {/* Floating Tooltip */}
        <AnimatePresence>
          {showTooltip && !isOpen && (
            <motion.div
              initial={{ opacity: 0, x: 15, scale: 0.95 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              exit={{ opacity: 0, x: 15, scale: 0.95 }}
              transition={{ duration: 0.3 }}
              className="bg-palladian text-blue-fantastic px-4 py-3 rounded-2xl shadow-xl flex items-center gap-2 border border-oatmeal max-w-[260px] md:max-w-xs text-start relative pointer-events-auto font-medium"
            >
              <span className="text-xs md:text-sm font-semibold leading-relaxed">
                اسألني عن خدمات Indra وحلول الأتمتة والذكاء الاصطناعي 🤖
              </span>
              {/* Tooltip arrow pointing right to the button */}
              <div className="absolute top-1/2 -right-1.5 -translate-y-1/2 w-3 h-3 bg-palladian border-r border-t border-oatmeal transform rotate-45" />
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 30, scale: 0.95 }}
            transition={{ duration: 0.3 }}
            className="w-[90vw] sm:w-[380px] h-[550px] bg-palladian border-2 border-abyssal-blue rounded-3xl overflow-hidden shadow-2xl flex flex-col text-start pointer-events-auto"
          >
            {/* Header */}
            <div className="bg-burning-flame p-4 flex items-center justify-between text-abyssal-blue relative z-10 border-b-2 border-abyssal-blue">
              <div className="flex items-center gap-3">
                <div className="relative w-10 h-10 rounded-full overflow-hidden border border-abyssal-blue/10 bg-palladian/20">
                  <Image
                    src="/images/4.jpg"
                    alt="Indra"
                    fill
                    sizes="40px"
                    className="object-cover"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = "https://api.iconify.design/ph:user-bold.svg";
                    }}
                  />
                  <span className="absolute bottom-0 left-0 w-2.5 h-2.5 rounded-full bg-burning-flame border border-burning-flame" />
                </div>
                <div className="flex flex-col items-start leading-tight">
                  <span className="font-extrabold text-sm">اسأل Indra</span>
                  <span className="text-[10px] font-semibold opacity-60">متصل · يرد فوراً</span>
                </div>
              </div>

              {/* Close Button */}
              <button
                onClick={() => setIsOpen(false)}
                className="w-8 h-8 rounded-full flex items-center justify-center bg-abyssal-blue/5 hover:bg-abyssal-blue/10 transition-colors"
                aria-label="إغلاق المحادثة"
              >
                <FiX className="text-lg text-abyssal-blue" />
              </button>
            </div>

            {/* Conversation Area */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-zinc-50">
              {messages.map((msg) => (
                <div
                  key={msg.id}
                  className={`flex items-start gap-2.5 ${msg.sender === 'user' ? 'flex-row-reverse' : ''}`}
                >
                  {/* Bot Avatar */}
                  {msg.sender === 'bot' && (
                    <div className="relative w-8 h-8 rounded-full overflow-hidden shrink-0 border border-oatmeal bg-palladian">
                      <Image
                        src="/images/4.jpg"
                        alt="Indra"
                        fill
                        sizes="32px"
                        className="object-cover"
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          target.src = "https://api.iconify.design/ph:user-bold.svg";
                        }}
                      />
                    </div>
                  )}

                  {/* Message Bubble Wrapper */}
                  <div className="flex flex-col max-w-[75%] gap-1">
                    {/* Bubble */}
                    <div
                      className={`px-4 py-3 rounded-2xl text-[13px] leading-relaxed whitespace-pre-wrap ${
                        msg.sender === 'user'
                          ? 'bg-blue-fantastic text-palladian rounded-tl-none border border-blue-fantastic'
                          : 'bg-palladian text-blue-fantastic rounded-tr-none shadow-sm border border-oatmeal/80'
                      }`}
                    >
                      {msg.text}
                    </div>
                    {/* Time */}
                    <span className="text-[9px] text-zinc-500 pr-1 pl-1 text-end">
                      {msg.time}
                    </span>
                  </div>
                </div>
              ))}

              {/* Typing Indicator */}
              {isTyping && (
                <div className="flex items-start gap-2.5">
                  <div className="relative w-8 h-8 rounded-full overflow-hidden shrink-0 border border-oatmeal bg-palladian">
                    <Image
                      src="/images/4.jpg"
                      alt="Indra"
                      fill
                      sizes="32px"
                      className="object-cover"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.src = "https://api.iconify.design/ph:user-bold.svg";
                      }}
                    />
                  </div>
                  <div className="bg-palladian px-4 py-3 rounded-2xl rounded-tr-none shadow-sm border border-oatmeal/80 flex items-center justify-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-zinc-400 animate-bounce" />
                    <span className="w-1.5 h-1.5 rounded-full bg-zinc-400 animate-bounce [animation-delay:0.2s]" />
                    <span className="w-1.5 h-1.5 rounded-full bg-zinc-400 animate-bounce [animation-delay:0.4s]" />
                  </div>
                </div>
              )}

              <div ref={messagesEndRef} />
            </div>

            {/* Quick Questions (Chips) */}
            <div className="p-3 border-t border-oatmeal bg-palladian flex flex-wrap gap-1.5 justify-start max-h-[120px] overflow-y-auto">
              {QUICK_QUESTIONS.map((q, idx) => (
                <button
                  key={idx}
                  onClick={() => handleSendMessage(q)}
                  className="bg-palladian hover:bg-zinc-50 text-zinc-700 border border-oatmeal hover:border-zinc-300 px-3.5 py-2 rounded-full text-[12px] font-bold shadow-sm transition-all duration-200 active:scale-95 whitespace-nowrap"
                >
                  {q}
                </button>
              ))}
            </div>

            {/* Input Form */}
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSendMessage(inputValue);
              }}
              className="p-4 border-t border-oatmeal bg-palladian flex items-center"
            >
              <div className="w-full flex items-center border-2 border-abyssal-blue rounded-full px-3 py-1 bg-palladian">
                <input
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  placeholder="اسألني أي شيء..."
                  className="flex-1 bg-transparent text-abyssal-blue px-2 py-2 text-xs md:text-sm focus:outline-none placeholder:text-zinc-400 font-medium"
                />
                <button
                  type="submit"
                  className="w-8 h-8 rounded-full bg-oatmeal hover:bg-oatmeal text-zinc-500 hover:text-abyssal-blue flex items-center justify-center transition-all shrink-0"
                  aria-label="إرسال"
                >
                  <FiSend className="text-sm rtl:-rotate-180" />
                </button>
              </div>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
