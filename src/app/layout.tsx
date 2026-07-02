import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

/* ── Primary font: Thmanyah Sans ── */
const thmanyahSans = localFont({
  src: [
    { path: "./fonts/thmanyah typeface/thmanyahsans/otf/thmanyahsans-Light.otf", weight: "300", style: "normal" },
    { path: "./fonts/thmanyah typeface/thmanyahsans/otf/thmanyahsans-Regular.otf", weight: "400", style: "normal" },
    { path: "./fonts/thmanyah typeface/thmanyahsans/otf/thmanyahsans-Medium.otf", weight: "500", style: "normal" },
    { path: "./fonts/thmanyah typeface/thmanyahsans/otf/thmanyahsans-Bold.otf", weight: "700", style: "normal" },
    { path: "./fonts/thmanyah typeface/thmanyahsans/otf/thmanyahsans-Black.otf", weight: "900", style: "normal" },
  ],
  variable: "--font-body",
  display: "swap",
});

/* ── Heading font: Thmanyah Serif Display ── */
const thmanyahSerifDisplay = localFont({
  src: [
    { path: "./fonts/thmanyah typeface/thmanyahserifdisplay/otf/thmanyahserifdisplay-Light.otf", weight: "300", style: "normal" },
    { path: "./fonts/thmanyah typeface/thmanyahserifdisplay/otf/thmanyahserifdisplay-Regular.otf", weight: "400", style: "normal" },
    { path: "./fonts/thmanyah typeface/thmanyahserifdisplay/otf/thmanyahserifdisplay-Medium.otf", weight: "500", style: "normal" },
    { path: "./fonts/thmanyah typeface/thmanyahserifdisplay/otf/thmanyahserifdisplay-Bold.otf", weight: "700", style: "normal" },
    { path: "./fonts/thmanyah typeface/thmanyahserifdisplay/otf/thmanyahserifdisplay-Black.otf", weight: "900", style: "normal" },
  ],
  variable: "--font-heading",
  display: "swap",
});

/* ── Paragraph/Sub-heading font: Thmanyah Serif Text ── */
const thmanyahSerifText = localFont({
  src: [
    { path: "./fonts/thmanyah typeface/thmanyahseriftext/otf/thmanyahseriftext-Light.otf", weight: "300", style: "normal" },
    { path: "./fonts/thmanyah typeface/thmanyahseriftext/otf/thmanyahseriftext-Regular.otf", weight: "400", style: "normal" },
    { path: "./fonts/thmanyah typeface/thmanyahseriftext/otf/thmanyahseriftext-Medium.otf", weight: "500", style: "normal" },
    { path: "./fonts/thmanyah typeface/thmanyahseriftext/otf/thmanyahseriftext-Bold.otf", weight: "700", style: "normal" },
    { path: "./fonts/thmanyah typeface/thmanyahseriftext/otf/thmanyahseriftext-Black.otf", weight: "900", style: "normal" },
  ],
  variable: "--font-text",
  display: "swap",
});



export const metadata: Metadata = {
  title: "Indra | وكالة أتمتة الذكاء الاصطناعي",
  description:
    "وكالة متخصصة في حلول الأتمتة والذكاء الاصطناعي. نُحوّل العمليات اليدوية إلى أنظمة ذكية تعمل على مدار الساعة.",
};

import { FloatingWhatsApp } from "@/components/ui/FloatingWhatsApp";
import { SmartChatbot } from "@/components/ui/SmartChatbot";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ar"
      dir="rtl"
      className={`${thmanyahSans.variable} ${thmanyahSerifDisplay.variable} ${thmanyahSerifText.variable} scroll-smooth`}
    >
      <body
        style={{ fontFamily: "var(--font-body), sans-serif", direction: "rtl" }}
        className="bg-[#0A0A0A] text-white antialiased"
      >
        {children}
        <FloatingWhatsApp />
        <SmartChatbot />
      </body>
    </html>
  );
}