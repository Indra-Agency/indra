'use client';

import React, { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';

// Dynamically import Lottie to prevent SSR issues
const Lottie = dynamic(() => import('lottie-react'), { ssr: false });

interface LottiePlayerProps {
  src: string;
  className?: string;
}

export function LottiePlayer({ src, className }: LottiePlayerProps) {
  const [animationData, setAnimationData] = useState<any>(null);

  useEffect(() => {
    fetch(src)
      .then((res) => res.json())
      .then((data) => setAnimationData(data))
      .catch((err) => console.error('Error loading Lottie JSON:', err));
  }, [src]);

  if (!animationData) {
    return <div className={`flex items-center justify-center animate-pulse bg-gray-200/20 rounded-xl ${className}`}></div>;
  }

  return (
    <Lottie 
      animationData={animationData} 
      loop={true} 
      autoplay={true} 
      className={className} 
    />
  );
}
