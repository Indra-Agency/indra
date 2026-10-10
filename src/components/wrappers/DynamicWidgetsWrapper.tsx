'use client';

import { useState, useEffect } from 'react';
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
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const trigger = () => {
      setMounted(true);
      cleanup();
    };

    const cleanup = () => {
      window.removeEventListener('scroll', trigger);
      window.removeEventListener('pointerdown', trigger);
      window.removeEventListener('keydown', trigger);
    };

    window.addEventListener('scroll', trigger, { once: true, passive: true });
    window.addEventListener('pointerdown', trigger, { once: true, passive: true });
    window.addEventListener('keydown', trigger, { once: true, passive: true });

    // Fallback timer for delayed idle mount
    const timer = setTimeout(trigger, 4000);

    return () => {
      cleanup();
      clearTimeout(timer);
    };
  }, []);

  if (!mounted) return null;

  return (
    <>
      <FloatingWhatsApp />
      <SmartChatbot />
    </>
  );
}
