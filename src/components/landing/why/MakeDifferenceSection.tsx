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

    const step = (ts: number) => {
      if (start === null) start = ts;
      
      const progress = ((ts - start) % DURATION) / DURATION;
      
      /* 
       * Smooth Ping-Pong using Sine wave (0 → 1 → 0)
       * ease=0 means light is at far right (start of text)
       * ease=1 means light is at far left (end of SVG)
       */
      const ease = (Math.sin(progress * Math.PI * 2 - Math.PI / 2) + 1) / 2;

      if (containerRef.current && textRef.current && gradRef.current) {
        const totalWidth = containerRef.current.offsetWidth;
        const textWidth = textRef.current.offsetWidth;
        
        /* 
          Global light X: 0 is the far left of the container.
          We start 150px off-screen right, and end 150px off-screen left.
        */
        const lightX = (totalWidth + 150) - ease * (totalWidth + 300);

        /* 1. Map to Text (text is on the right in RTL, its left edge is totalWidth - textWidth) */
        const textLocalX = lightX - (totalWidth - textWidth);
        // Math for bg-size: 300% to map local center to CSS percentage:
        const pos = 100 * (1.5 - textLocalX / textWidth) / 2;
        textRef.current.style.backgroundPosition = `${pos}% center`;

        /* 2. Map to SVG (svg is on the left, its left edge is 0) */
        const svgElement = gradRef.current.ownerSVGElement;
        const svgWidth = svgElement ? svgElement.clientWidth : 120;
        
        // Map pixel X to SVG viewBox units (viewBox width is 120)
        const svgLocalX = lightX * (120 / svgWidth);
        
        // Gradient center is at X=60. We translate it so center matches svgLocalX.
        const tx = svgLocalX - 60;
        gradRef.current.setAttribute('gradientTransform', `translate(${tx.toFixed(2)}, 0)`);
      }

      raf = requestAnimationFrame(step);
    };

    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
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
