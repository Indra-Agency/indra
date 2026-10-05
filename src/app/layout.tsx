import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

/* ── Primary font: Thmanyah Sans (Preload only Regular and Bold for instant text render) ── */
const thmanyahSans = localFont({
  src: [
    { path: "./fonts/thmanyah typeface/thmanyahsans/woff2/thmanyahsans-Regular.woff2", weight: "400", style: "normal" },
    { path: "./fonts/thmanyah typeface/thmanyahsans/woff2/thmanyahsans-Bold.woff2", weight: "700", style: "normal" },
  ],
  variable: "--font-body",
  display: "swap",
  preload: true,
});

/* ── Heading font: Thmanyah Serif Display (Preload Bold and Black for hero title) ── */
const thmanyahSerifDisplay = localFont({
  src: [
    { path: "./fonts/thmanyah typeface/thmanyahserifdisplay/woff2/thmanyahserifdisplay-Bold.woff2", weight: "700", style: "normal" },
    { path: "./fonts/thmanyah typeface/thmanyahserifdisplay/woff2/thmanyahserifdisplay-Black.woff2", weight: "900", style: "normal" },
  ],
  variable: "--font-heading",
  display: "swap",
  preload: true,
});

/* ── Paragraph/Sub-heading font: Thmanyah Serif Text (Below fold only — do NOT preload) ── */
const thmanyahSerifText = localFont({
  src: [
    { path: "./fonts/thmanyah typeface/thmanyahseriftext/woff2/thmanyahseriftext-Regular.woff2", weight: "400", style: "normal" },
    { path: "./fonts/thmanyah typeface/thmanyahseriftext/woff2/thmanyahseriftext-Bold.woff2", weight: "700", style: "normal" },
  ],
  variable: "--font-text",
  display: "swap",
  preload: false,
});



export const metadata: Metadata = {
  metadataBase: new URL("https://indra.agency"),
  title: {
    default: "وكالة إندرا للأتمتة والذكاء الاصطناعي | Indra",
    template: "%s | Indra - وكالة إندرا للأتمتة والذكاء الاصطناعي",
  },
  description: "وكالة إندرا (Indra) هي وكالة متخصصة في تقديم حلول أتمتة الأعمال، وتطبيقات الذكاء الاصطناعي، وتطوير البرمجيات، وتحليل النظم، وهيكلة المشاريع التقنية. نبتكر حلولاً رقمية ذكية وشاملة تزيد من إنتاجية الشركات وتدفع مسيرة التحول الرقمي.",
  keywords: [
    "وكالة إندرا",
    "إندرا",
    "Indra",
    "Indra Agency",
    "أتمتة الأعمال",
    "الذكاء الاصطناعي",
    "تطوير البرمجيات",
    "تحليل النظم",
    "هيكلة المشاريع التقنية",
    "حلول رقمية",
    "Business Automation",
    "Artificial Intelligence",
    "Software Development",
    "Systems Analysis",
    "AI Agency",
    "AI Automation",
    "برمجيات ذكية"
  ],
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon.svg", type: "image/svg+xml" },
      { url: "/icon.png", type: "image/png" }
    ],
    apple: "/apple-touch-icon.png",
  },
  openGraph: {
    type: "website",
    locale: "ar_AR",
    url: "https://indra.agency",
    title: "وكالة إندرا للأتمتة والذكاء الاصطناعي | Indra",
    description: "وكالة إندرا (Indra) هي وكالة متخصصة في تقديم حلول أتمتة الأعمال، وتطبيقات الذكاء الاصطناعي، وتطوير البرمجيات، وتحليل النظم، وهيكلة المشاريع التقنية. نبتكر حلولاً رقمية ذكية وشاملة.",
    siteName: "إندرا (Indra)",
    images: [
      {
        url: "/images/og-image.png",
        width: 1200,
        height: 630,
        alt: "وكالة إندرا للأتمتة والذكاء الاصطناعي",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "وكالة إندرا للأتمتة والذكاء الاصطناعي | Indra",
    description: "وكالة إندرا (Indra) هي وكالة متخصصة في تقديم حلول أتمتة الأعمال، وتطبيقات الذكاء الاصطناعي، وتطوير البرمجيات، وتحليل النظم، وهيكلة المشاريع التقنية.",
    images: ["/images/og-image.png"],
  },
};

import { SpeedInsights } from "@vercel/speed-insights/next";
import { DynamicWidgetsWrapper } from "@/components/wrappers/DynamicWidgetsWrapper";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "وكالة إندرا للأتمتة والذكاء الاصطناعي | Indra",
  "alternateName": "Indra Agency",
  "url": "https://indra.agency",
  "logo": "https://indra.agency/images/logo.png",
  "description": "وكالة إندرا (Indra) هي وكالة رائدة متخصصة في أتمتة الأعمال، وحلول الذكاء الاصطناعي، وتطوير البرمجيات، وتحليل النظم، وهيكلة المشاريع التقنية. نقدم حلولاً رقمية ذكية لزيادة كفاءة وأداء الشركات.",
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+967-738-688-812",
    "contactType": "customer service",
    "areaServed": "Worldwide",
    "availableLanguage": ["Arabic", "English"]
  },
  "sameAs": [
    "https://wa.me/967738688812"
  ]
};

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
        className="bg-background text-foreground antialiased"
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
        <DynamicWidgetsWrapper />
        <SpeedInsights />
      </body>
    </html>
  );
}