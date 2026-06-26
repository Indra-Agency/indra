import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* ──── تكوين خاص بدعم مكتبات Three.js مع Turbopack ──── */
  transpilePackages: [
    "three",
    "@react-three/fiber",
    "@react-three/drei",
  ],
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "raw.githubusercontent.com" },
      { protocol: "https", hostname: "api.iconify.design" },
      { protocol: "https", hostname: "cdn.jsdelivr.net" },
      { protocol: "https", hostname: "upload.wikimedia.org" },
    ],
  },
};

export default nextConfig;
