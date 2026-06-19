'use client';

import { useEffect } from 'react';
import { Button } from '@/components/ui/Button';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-background px-6 text-center">
      {/* وهج أحمر خفيف للخلفية كتحذير */}
      <div className="absolute w-80 h-80 bg-red-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-md border border-red-500/20 bg-surface/40 backdrop-blur-md p-8 md:p-12 rounded-2xl shadow-2xl">
        <div className="w-16 h-16 bg-red-500/10 border border-red-500/30 text-red-500 rounded-full flex items-center justify-center mx-auto mb-6">
          <svg
            className="w-8 h-8"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
            />
          </svg>
        </div>

        <h2 className="text-2xl font-bold mb-3 text-white">
          عذراً، حدث خطأ غير متوقع
        </h2>
        <p className="text-gray-400 text-sm leading-relaxed mb-8">
          نواجه مشكلة مؤقتة في تحميل هذه الصفحة. يرجى المحاولة مرة أخرى أو الاتصال
          بالدعم الفني إذا استمرت المشكلة.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Button variant="primary" onClick={() => reset()} className="w-full sm:w-auto">
            إعادة المحاولة
          </Button>
          <Button
            variant="ghost"
            onClick={() => window.location.reload()}
            className="w-full sm:w-auto"
          >
            تحديث الصفحة
          </Button>
        </div>
      </div>
    </div>
  );
}
