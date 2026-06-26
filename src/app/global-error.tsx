"use client";

import { useEffect } from "react";
import { NeoButton } from "@/components/ui/NeoButton";
import { FiRefreshCw, FiAlertOctagon } from "react-icons/fi";
import "./globals.css";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error("Caught by Global Error Boundary:", error);
  }, [error]);

  return (
    <html lang="ar" dir="rtl">
      <body 
        className="bg-[#0A0A0A] text-white antialiased flex items-center justify-center min-h-screen"
        style={{ fontFamily: "sans-serif" }}
      >
        <div className="bg-[#1a1a1a] p-8 md:p-12 rounded-[2rem] border border-zinc-800 shadow-2xl max-w-lg w-full flex flex-col items-center text-center mx-4">
          <div className="w-16 h-16 bg-red-500/10 text-red-500 rounded-full flex items-center justify-center mb-6">
            <FiAlertOctagon className="text-3xl" />
          </div>
          
          <h2 className="text-2xl md:text-3xl font-extrabold mb-4 text-white tracking-tight">
            عطل حرج في النظام
          </h2>
          
          <p className="text-zinc-400 font-medium mb-8 leading-relaxed text-sm md:text-base">
            يبدو أن هناك مشكلة كبيرة حالت دون تحميل واجهة الموقع الأساسية. يرجى إعادة المحاولة أو العودة لاحقاً. فريقنا التقني قد تم إشعاره تلقائياً.
          </p>
          
          <NeoButton onClick={() => reset()} variant="green" className="w-full sm:w-auto text-[15px]">
            إعادة تحميل الموقع
            <FiRefreshCw className="mr-2" />
          </NeoButton>
        </div>
      </body>
    </html>
  );
}
