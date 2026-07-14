'use client';

import React, { useEffect, useRef } from 'react';

interface Particle {
  x: number;
  y: number;
  z: number; // For faux 3D depth
  vx: number;
  vy: number;
  size: number;
  color: string;
}

export function ParticleNetwork() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  
  // Track mouse position with lerped values for smooth interaction
  const mouse = useRef({ x: -1000, y: -1000, targetX: -1000, targetY: -1000 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d', { alpha: true });
    if (!ctx) return;

    let particles: Particle[] = [];
    let animationFrameId: number;

    const colorOrange = '255, 153, 51'; // burning-flame
    const colorWhite = '201, 193, 177'; // palladian

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      initParticles();
    };

    const initParticles = () => {
      particles = [];
      const numParticles = Math.min(Math.floor(window.innerWidth / 12), 100);
      for (let i = 0; i < numParticles; i++) {
        const z = Math.random(); // Depth: 0 (far) to 1 (near)
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          z: z,
          vx: (Math.random() - 0.5) * (0.2 + z * 0.3), // Near particles move slightly faster
          vy: (Math.random() - 0.5) * (0.2 + z * 0.3),
          size: z * 2 + 0.5, // Near particles are larger
          color: Math.random() > 0.7 ? colorOrange : colorWhite, // 30% orange
        });
      }
    };

    const handleMouseMove = (e: MouseEvent) => {
      mouse.current.targetX = e.clientX;
      mouse.current.targetY = e.clientY;
      // Initialize if first move
      if (mouse.current.x === -1000) {
        mouse.current.x = e.clientX;
        mouse.current.y = e.clientY;
      }
    };

    const handleMouseOut = () => {
      mouse.current.targetX = -1000;
      mouse.current.targetY = -1000;
    };

    const draw = () => {
      // Smooth out mouse movement (lerping)
      if (mouse.current.targetX !== -1000) {
        mouse.current.x += (mouse.current.targetX - mouse.current.x) * 0.1;
        mouse.current.y += (mouse.current.targetY - mouse.current.y) * 0.1;
      } else {
        mouse.current.x = -1000;
        mouse.current.y = -1000;
      }

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Draw Lines
      for (let i = 0; i < particles.length; i++) {
        // Connect particles
        for (let j = i + 1; j < particles.length; j++) {
          const p1 = particles[i];
          const p2 = particles[j];
          const dx = p1.x - p2.x;
          const dy = p1.y - p2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          // Only connect if they are close in 2D space AND close in Z depth
          const zDiff = Math.abs(p1.z - p2.z);

          if (dist < 150 && zDiff < 0.4) {
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            
            const opacity = (1 - dist / 150) * (1 - zDiff / 0.4) * 0.4;
            
            // Professional touch: Gradient lines between different colored particles
            if (p1.color !== p2.color) {
              const grad = ctx.createLinearGradient(p1.x, p1.y, p2.x, p2.y);
              grad.addColorStop(0, `rgba(${p1.color}, ${opacity})`);
              grad.addColorStop(1, `rgba(${p2.color}, ${opacity})`);
              ctx.strokeStyle = grad;
            } else {
              ctx.strokeStyle = `rgba(${p1.color}, ${opacity})`;
            }
            
            ctx.lineWidth = Math.max(0.2, (p1.z + p2.z) / 2); // Thicker lines for closer particles
            ctx.stroke();
          }
        }

        // Connect to mouse gracefully
        const dxMouse = particles[i].x - mouse.current.x;
        const dyMouse = particles[i].y - mouse.current.y;
        const distMouse = Math.sqrt(dxMouse * dxMouse + dyMouse * dyMouse);

        if (distMouse < 200) {
          ctx.beginPath();
          ctx.moveTo(particles[i].x, particles[i].y);
          ctx.lineTo(mouse.current.x, mouse.current.y);
          const opacity = (1 - distMouse / 200) * 0.5 * particles[i].z; // Only connect to near particles
          
          // Glow effect for mouse connections
          ctx.shadowBlur = 10;
          ctx.shadowColor = `rgba(${particles[i].color}, 0.8)`;
          
          ctx.strokeStyle = `rgba(${particles[i].color}, ${opacity})`;
          ctx.lineWidth = 1;
          ctx.stroke();
          
          // Reset shadow
          ctx.shadowBlur = 0;
          
          // Ultra-smooth mouse repel based on distance and particle depth
          const force = (200 - distMouse) / 200;
          const angle = Math.atan2(dyMouse, dxMouse);
          // Push them slightly away
          particles[i].vx += Math.cos(angle) * force * 0.02 * particles[i].z;
          particles[i].vy += Math.sin(angle) * force * 0.02 * particles[i].z;
        }
      }

      // Update & Draw Particles
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        
        // Add friction to velocity so mouse repel doesn't accelerate them forever
        p.vx *= 0.99;
        p.vy *= 0.99;
        
        // Minimum drifting velocity
        const minVx = (Math.random() - 0.5) * 0.1;
        const minVy = (Math.random() - 0.5) * 0.1;
        if (Math.abs(p.vx) < 0.05) p.vx += minVx;
        if (Math.abs(p.vy) < 0.05) p.vy += minVy;

        p.x += p.vx;
        p.y += p.vy;

        // Wrap around edges seamlessly instead of bouncing for a more infinite feel
        if (p.x < -50) p.x = canvas.width + 50;
        if (p.x > canvas.width + 50) p.x = -50;
        if (p.y < -50) p.y = canvas.height + 50;
        if (p.y > canvas.height + 50) p.y = -50;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        
        // Glow on dots
        ctx.shadowBlur = p.color === colorOrange ? 15 : 5;
        ctx.shadowColor = `rgba(${p.color}, 0.5)`;
        
        ctx.fillStyle = `rgba(${p.color}, ${0.4 + p.z * 0.6})`;
        ctx.fill();
        
        ctx.shadowBlur = 0; // Reset
      }

      animationFrameId = requestAnimationFrame(draw);
    };

    window.addEventListener('resize', resize);
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseout', handleMouseOut);
    
    resize();
    draw();

    return () => {
      window.removeEventListener('resize', resize);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseout', handleMouseOut);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      // Fades in slowly on mount, mix-blend-screen makes glows look beautiful
      className="absolute inset-0 pointer-events-none mix-blend-screen opacity-100 transition-opacity duration-1000"
      style={{ zIndex: 0 }}
    />
  );
}
