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
    // Defer widgets until after critical rendering is completely finished
    if (typeof window !== 'undefined' && 'requestIdleCallback' in window) {
      const id = (window as Window & { requestIdleCallback: any; cancelIdleCallback: any }).requestIdleCallback(
        () => setMounted(true),
        { timeout: 3000 }
      );
      return () => (window as Window & { requestIdleCallback: any; cancelIdleCallback: any }).cancelIdleCallback(id);
    } else {
      const timer = setTimeout(() => setMounted(true), 2500);
      return () => clearTimeout(timer);
    }
  }, []);

  if (!mounted) return null;

  return (
    <>
      <FloatingWhatsApp />
      <SmartChatbot />
    </>
  );
}
