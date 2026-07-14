"use client";

import { useEffect } from "react";
import { NeoButton } from "@/components/ui/NeoButton";
import { FiRefreshCw, FiAlertTriangle } from "react-icons/fi";

export default function ErrorBoundary({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service if applicable
    console.error("Caught by Local Error Boundary:", error);
  }, [error]);

  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center text-center px-6" dir="rtl">
      <div className="bg-[#1a1a1a] p-8 md:p-12 rounded-[2rem] border border-blue-fantastic shadow-2xl max-w-lg w-full flex flex-col items-center">
        <div className="w-16 h-16 bg-red-500/10 text-red-500 rounded-full flex items-center justify-center mb-6">
          <FiAlertTriangle className="text-3xl" />
        </div>
        
        <h2 className="text-2xl md:text-3xl font-extrabold mb-4 text-palladian tracking-tight">
          عذراً، حدث خطأ غير متوقع
        </h2>
        
        <p className="text-zinc-400 font-medium mb-8 leading-relaxed text-sm md:text-base">
          لقد واجهنا مشكلة فنية أثناء محاولة تحميل هذه الصفحة. لا تقلق، لم يتم عرض أي بيانات حساسة للخطأ. فريقنا سيعمل على فحص المشكلة. يرجى المحاولة مرة أخرى.
        </p>
        
        <NeoButton onClick={() => reset()} variant="green" className="w-full sm:w-auto text-[15px]">
          حاول مجدداً
          <FiRefreshCw className="mr-2" />
        </NeoButton>
      </div>
    </div>
  );
}
