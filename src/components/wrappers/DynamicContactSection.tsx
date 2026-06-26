'use client';

import dynamic from 'next/dynamic';

export const DynamicContactSection = dynamic(
  () => import('@/components/landing/contact').then(mod => mod.ContactSection),
  { ssr: false }
);
