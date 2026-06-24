/**
 * servicesData.ts
 * ────────────────
 * Service cards data for the ServicesSection grid.
 * To add a service: add a new object to the SERVICES array.
 * Icons are inline SVG React elements.
 */

import { ReactNode } from 'react';

export interface Service {
  title: string;
  desc:  string;
  icon:  ReactNode;
}

export const SERVICES: Service[] = [
  {
    title: 'أتمتة خدمة العملاء',
    desc:  'روبوتات دردشة ذكية قادرة على حل 80% من استفسارات العملاء على مدار الساعة.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
      </svg>
    ),
  },
  {
    title: 'هندسة مسارات العمل',
    desc:  'ربط تطبيقاتك المفضلة (CRM, Email, Slack) لتنفيذ المهام تلقائياً بدون تدخل بشري.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/>
        <line x1="9" y1="3" x2="9" y2="21"/>
      </svg>
    ),
  },
  {
    title: 'تأهيل العملاء المحتملين',
    desc:  'أنظمة ذكية لتصنيف العملاء المحتملين وتوجيههم فوراً لفريق المبيعات لزيادة التحويل.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
        <circle cx="9" cy="7" r="4"/>
        <polyline points="16 11 18 13 22 9"/>
      </svg>
    ),
  },
  {
    title: 'أتمتة العمليات الداخلية',
    desc:  'تبسيط عمليات الموارد البشرية والمالية من خلال تحويل المستندات الورقية إلى بيانات رقمية.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
        <polyline points="14 2 14 8 20 8"/>
        <line x1="16" y1="13" x2="8" y2="13"/>
        <line x1="16" y1="17" x2="8" y2="17"/>
        <polyline points="10 9 9 9 8 9"/>
      </svg>
    ),
  },
  {
    title: 'تحليل البيانات المتقدم',
    desc:  'لوحات تحكم ذكية تلخص أداء شركتك وتقدم تنبؤات مدعومة بالذكاء الاصطناعي.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <line x1="18" y1="20" x2="18" y2="10"/>
        <line x1="12" y1="20" x2="12" y2="4"/>
        <line x1="6"  y1="20" x2="6"  y2="14"/>
      </svg>
    ),
  },
  {
    title: 'تطوير نماذج مخصصة',
    desc:  'بناء وتدريب نماذج لغوية (LLMs) مخصصة على بيانات شركتك لحل تحدياتك المعقدة.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <polyline points="16 18 22 12 16 6"/>
        <polyline points="8 6 2 12 8 18"/>
      </svg>
    ),
  },
];
