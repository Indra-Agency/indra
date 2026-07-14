'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/Button';

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-background px-6 text-center">
      {/* وهج أخضر خفيف في الخلفية */}
      <div className="absolute w-[500px] h-[500px] bg-burning-flame/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-md">
        <h1 className="text-9xl font-extrabold text-transparent bg-clip-text bg-gradient-to-b from-burning-flame to-burning-flame tracking-widest mb-4">
          404
        </h1>

        <h2 className="text-2xl font-bold mb-4 text-palladian">الصفحة غير موجودة</h2>
        <p className="text-gray-400 text-sm leading-relaxed mb-8">
          عذراً، الصفحة التي تبحث عنها قد تم نقلها أو حذفها، أو أنها غير موجودة في
          الأساس.
        </p>

        <Link href="/" passHref legacyBehavior>
          <Button variant="primary" size="lg" className="px-8">
            العودة للرئيسية
          </Button>
        </Link>
      </div>
    </div>
  );
}
