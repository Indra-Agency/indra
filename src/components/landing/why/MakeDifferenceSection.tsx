'use client';

/**
 * MakeDifferenceSection.tsx
 * ──────────────────────────
 * PERFECT SPATIAL SYNCHRONIZATION
 * The light beam's global X coordinate is calculated mathematically and
 * mapped to both the Text background-position and the SVG gradientTransform.
 * This guarantees the light travels at a constant velocity across the ENTIRE
 * container, passing seamlessly from the text into the icons.
 *
 * It uses a smooth sine-wave ping-pong effect, taking 15 seconds per round trip
 * (much slower and majestic, as requested).
 */

import { useRef, useEffect } from 'react';

export function MakeDifferenceSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLHeadingElement>(null);
  const gradRef = useRef<SVGLinearGradientElement>(null);

  /* ── 4-pointed curved star path (cubic bezier, concave sides) ── */
  const star = (r: number) => {
    const k = +(r * 0.36).toFixed(2);
    return (
      `M 0 ${-r} C ${k} ${-k},${k} ${-k},${r} 0 ` +
      `C ${k} ${k},${k} ${k},0 ${r} ` +
      `C ${-k} ${k},${-k} ${k},${-r} 0 ` +
      `C ${-k} ${-k},${-k} ${-k},0 ${-r} Z`
    );
  };

  useEffect(() => {
    const DURATION = 15000; // 15 seconds for a full round-trip (very slow & smooth)
    let start: number | null = null;
    let raf: number;
    let widthCache = { container: 0, text: 0, svg: 120 };

    // Asynchronously observe dimensions without forced reflows
    const ro = new ResizeObserver((entries) => {
      for (const entry of entries) {
        if (entry.target === containerRef.current) widthCache.container = entry.contentRect.width;
        else if (entry.target === textRef.current) widthCache.text = entry.contentRect.width;
        else if (gradRef.current?.ownerSVGElement && entry.target === gradRef.current.ownerSVGElement) {
          widthCache.svg = entry.contentRect.width;
        }
      }
    });

    if (containerRef.current) ro.observe(containerRef.current);
    if (textRef.current) ro.observe(textRef.current);
    if (gradRef.current?.ownerSVGElement) ro.observe(gradRef.current.ownerSVGElement);

    const step = (ts: number) => {
      if (start === null) start = ts;
      
      const progress = ((ts - start) % DURATION) / DURATION;
      const ease = (Math.sin(progress * Math.PI * 2 - Math.PI / 2) + 1) / 2;

      if (containerRef.current && textRef.current && gradRef.current) {
        const totalWidth = widthCache.container || window.innerWidth;
        const textWidth = widthCache.text || 500;
        
        const lightX = (totalWidth + 150) - ease * (totalWidth + 300);

        const textLocalX = lightX - (totalWidth - textWidth);
        const pos = 100 * (1.5 - textLocalX / textWidth) / 2;
        textRef.current.style.backgroundPosition = `${pos}% center`;

        const svgWidth = widthCache.svg || 120;
        const svgLocalX = lightX * (120 / svgWidth);
        const tx = svgLocalX - 60;
        gradRef.current.setAttribute('gradientTransform', `translate(${tx.toFixed(2)}, 0)`);
      }

      raf = requestAnimationFrame(step);
    };

    raf = requestAnimationFrame(step);
    return () => {
      cancelAnimationFrame(raf);
      ro.disconnect();
    };
  }, []);

  return (
    <>
      <style>{`
        .shimmer-text {
          background-image: linear-gradient(
            to right,
            #3f3f46 25%,
            #52525b 42%,
            #f4f4f5 50%,
            #52525b 58%,
            #3f3f46 75%
          );
          background-size: 300% auto;
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
          filter: drop-shadow(0 2px 8px rgba(255,255,255,0.06));
        }
      `}</style>

      <section
        style={{
          background:    '#0A0A0A',
          paddingTop:    'clamp(0.25rem, 1vw, 1.5rem)',
          paddingBottom: 'clamp(1.5rem, 3vw, 3.5rem)',
          overflow:      'hidden',
        }}
        aria-label="أصنع الفارق"
      >
        <div
          ref={containerRef}
          style={{
            display:        'flex',
            alignItems:     'center',
            justifyContent: 'center',
            gap:            'clamp(0.6rem, 2vw, 2rem)',
            direction:      'rtl',
            width:          'fit-content',
            margin:         '0 auto', /* Keeps the calculation tightly bound to the content */
          }}
        >
          {/* ── Text (On the right) ── */}
          <h2
            ref={textRef}
            className="shimmer-text ar-heading font-extrabold tracking-tight pb-4"
            style={{
              fontSize:   'clamp(3rem, 8vw, 7rem)',
              lineHeight: 1.4,
              whiteSpace: 'nowrap',
            }}
          >
            أصنع الفارق
          </h2>

          {/* ── SVG Sparkles (On the left) ── */}
          <svg
            viewBox="0 0 120 120"
            xmlns="http://www.w3.org/2000/svg"
            style={{
              width:      'clamp(3rem, 6vw, 5.5rem)',
              height:     'clamp(3rem, 6vw, 5.5rem)',
              flexShrink: 0,
              overflow:   'visible',
            }}
            aria-hidden="true"
          >
            <defs>
              <linearGradient
                id="sg"
                ref={gradRef}
                gradientUnits="userSpaceOnUse"
                x1="-60" y1="0"
                x2="180" y2="0"
              >
                <stop offset="0%"   stopColor="#3f3f46" />
                <stop offset="40%"  stopColor="#52525b" />
                <stop offset="50%"  stopColor="#f4f4f5" />
                <stop offset="60%"  stopColor="#52525b" />
                <stop offset="100%" stopColor="#3f3f46" />
              </linearGradient>
            </defs>

            {/* Static icons, dynamic fill */}
            <g transform="translate(20,22)">
              <path d={star(13)} fill="url(#sg)" />
            </g>
            <g transform="translate(82,62)">
              <path d={star(37)} fill="url(#sg)" />
            </g>
            <g transform="translate(27,94)">
              <path d={star(19)} fill="url(#sg)" />
            </g>
          </svg>
        </div>
      </section>
    </>
  );
}
