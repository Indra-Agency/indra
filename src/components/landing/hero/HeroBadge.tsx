'use client';

export function HeroBadge() {
  return (
    <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-white/15 bg-white text-[#0F0F0F]">
      <span className="w-2 h-2 rounded-full bg-[#22C55E] shadow-[0_0_8px_#22C55E]" />
      <span className="text-xs font-semibold">متاح للعمل</span>
    </div>
  );
}

