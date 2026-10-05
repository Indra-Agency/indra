'use client';

import React, { useEffect, useState, useRef } from 'react';
import dynamic from 'next/dynamic';

// Dynamically import Lottie to prevent SSR issues
const Lottie = dynamic(() => import('lottie-react'), { ssr: false });

interface LottiePlayerProps {
  src: string;
  className?: string;
}

export function LottiePlayer({ src, className }: LottiePlayerProps) {
  const [animationData, setAnimationData] = useState<any>(null);
  const [isVisible, setIsVisible] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  // Intersection Observer: only load Lottie JSON when visible in viewport
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { rootMargin: '200px' } // Start loading 200px before becoming visible
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  // Fetch the Lottie JSON only when the component is visible
  useEffect(() => {
    if (!isVisible) return;

    fetch(src)
      .then((res) => res.json())
      .then((data) => setAnimationData(data))
      .catch((err) => console.error('Error loading Lottie JSON:', err));
  }, [src, isVisible]);

  if (!animationData) {
    return (
      <div
        ref={containerRef}
        className={`flex items-center justify-center animate-pulse bg-gray-200/20 rounded-xl ${className}`}
      />
    );
  }

  return (
    <div ref={containerRef}>
      <Lottie 
        animationData={animationData} 
        loop={true} 
        autoplay={true} 
        className={className} 
      />
    </div>
  );
}
