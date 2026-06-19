import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* ──── تكوين خاص بدعم مكتبات Three.js مع Turbopack ──── */
  transpilePackages: [
    "three",
    "@react-three/fiber",
    "@react-three/drei",
  ],
};

export default nextConfig;
