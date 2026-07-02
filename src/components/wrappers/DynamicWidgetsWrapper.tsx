'use client';

import dynamic from 'next/dynamic';

const FloatingWhatsApp = dynamic(
  () => import('@/components/ui/FloatingWhatsApp').then((mod) => mod.FloatingWhatsApp),
  { ssr: false }
);

const SmartChatbot = dynamic(
  () => import('@/components/ui/SmartChatbot').then((mod) => mod.SmartChatbot),
  { ssr: false }
);

export function DynamicWidgetsWrapper() {
  return (
    <>
      <FloatingWhatsApp />
      <SmartChatbot />
    </>
  );
}
