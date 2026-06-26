'use client';

import React, { useEffect, useRef } from 'react';
import Matter from 'matter-js';
import { 
  SiZapier, SiWordpress, SiOpenai, SiNextdotjs, SiTypescript, 
  SiFirebase, SiGoogle, SiGooglemaps, SiFlutter, SiReact 
} from 'react-icons/si';
import { 
  FaSearch, FaRobot, FaTerminal, FaNetworkWired, 
  FaUsers, FaChartLine, FaCloud 
} from 'react-icons/fa';
import { MdRocketLaunch, MdAnalytics } from 'react-icons/md';

const GOOGLE_GRADIENT = 'bg-[linear-gradient(90deg,#4285F4_0%,#EA4335_33%,#FBBC05_66%,#34A853_100%)] text-white';

const TAGS = [
  // Existing Kept Tags
  { id: 'ai', text: 'الذكاء الاصطناعي', icon: SiOpenai, color: 'bg-[#6EE7B7] text-zinc-900' },
  { id: 'auto', text: 'أتمتة العمليات', icon: SiZapier, color: 'bg-[#F97316] text-white' },
  { id: 'db', text: 'قواعد البيانات', icon: SiFirebase, color: 'bg-[#F5CD3F] text-black' },
  { id: 'firebase', text: 'Firebase', icon: SiFirebase, color: 'bg-[#F5CD3F] text-black' },
  { id: 'supabase', text: 'Supabase', icon: SiFirebase, color: 'bg-[#4ade80] text-zinc-900' }, // Using green for supabase since icon is generic here
  { id: 'web', text: 'تطوير الويب', icon: SiNextdotjs, color: 'bg-white text-black' },
  { id: 'wp', text: 'إدارة المحتوى', icon: SiWordpress, color: 'bg-[#3b82f6] text-white' },
  { id: 'seo', text: 'تحسين محركات البحث', icon: FaSearch, color: 'bg-[#6EE7B7] text-zinc-900' },
  { id: 'ts', text: 'البرمجة TS', icon: SiTypescript, color: 'bg-[#3178C6] text-white' },

  // Google Wave Gradient Tags
  { id: 'googleads', text: 'إعلانات جوجل', icon: SiGoogle, color: GOOGLE_GRADIENT },
  { id: 'maps', text: 'خرائط جوجل', icon: SiGooglemaps, color: GOOGLE_GRADIENT },

  // New Technical Tags
  { id: 'chatbots', text: 'روبوتات الدردشة', icon: FaRobot, color: 'bg-[#4C1D95] text-white' },
  { id: 'flutter', text: 'تطبيقات فلاتر', icon: SiFlutter, color: 'bg-[#02569B] text-white' },
  { id: 'prompt', text: 'هندسة الأوامر', icon: FaTerminal, color: 'bg-[#059669] text-white' },
  { id: 'api', text: 'تكامل الأنظمة API', icon: FaNetworkWired, color: 'bg-[#0369A1] text-white' },
  { id: 'crm', text: 'إدارة علاقات العملاء CRM', icon: FaUsers, color: 'bg-[#BE123C] text-white' },
  { id: 'analytics_new', text: 'تحليل البيانات', icon: FaChartLine, color: 'bg-[#CA8A04] text-black' },
  { id: 'cloud_new', text: 'البنية السحابية', icon: FaCloud, color: 'bg-[#334155] text-white' },
  { id: 'ui', text: 'تطوير الواجهات', icon: SiReact, color: 'bg-[#18181B] text-[#61DAFB]' },
];

export function ServicesPhysicsCloud() {
  const sceneRef = useRef<HTMLDivElement>(null);
  const elementsRef = useRef<Map<string, HTMLDivElement>>(new Map());
  const engineRef = useRef<Matter.Engine | null>(null);

  useEffect(() => {
    let runner: Matter.Runner;
    let engine: Matter.Engine;
    let raf: number;
    let ro: ResizeObserver;
    let onScroll: () => void;
    let handlePointerDown: (e: PointerEvent) => void;
    let handlePointerMove: (e: PointerEvent) => void;
    let handlePointerLeave: () => void;

    // Wrap initialization in requestIdleCallback to prevent blocking the main thread during hydration
    const idleId = (window.requestIdleCallback || window.setTimeout)(() => {
      if (!sceneRef.current) return;
      const scene = sceneRef.current;
      
      engine = Matter.Engine.create();
      engine.world.gravity.y = 0.8;
      engineRef.current = engine;

      const width = scene.clientWidth;
      const height = scene.clientHeight;
      let rect = scene.getBoundingClientRect();

      const wallOptions = { isStatic: true, render: { visible: false }, friction: 0.2, restitution: 0.3 };
      const ground = Matter.Bodies.rectangle(width / 2, height + 25, width * 3, 50, wallOptions);
      const leftWall = Matter.Bodies.rectangle(-25, height / 2, 50, height * 3, wallOptions);
      const rightWall = Matter.Bodies.rectangle(width + 25, height / 2, 50, height * 3, wallOptions);
      const ceiling = Matter.Bodies.rectangle(width / 2, -500, width * 3, 50, wallOptions); 
      Matter.World.add(engine.world, [ground, leftWall, rightWall, ceiling]);

      const tagBodies: { body: Matter.Body, elem: HTMLElement, w: number, h: number }[] = [];
      
      TAGS.forEach((tag) => {
        const elem = elementsRef.current.get(tag.id);
        if (elem) {
          const w = elem.offsetWidth;
          const h = elem.offsetHeight;
          const startX = 50 + Math.random() * (width - 100);
          const startY = -100 - (Math.random() * 400);

          const body = Matter.Bodies.rectangle(startX, startY, w, h, {
            restitution: 0.3, friction: 0.1, density: 0.001,
            chamfer: { radius: h / 2 }, angle: (Math.random() - 0.5) * 0.4,
          });
          Matter.World.add(engine.world, body);
          tagBodies.push({ body, elem, w, h }); // Cache w and h to avoid forced reflows
        }
      });

      let isInteractive = false;
      const triggerScatter = (e: PointerEvent, forceMultiplier: number = 1) => {
        const mousePos = { x: e.clientX - rect.left, y: e.clientY - rect.top };
        const bodies = tagBodies.map(t => t.body);
        const hovered = Matter.Query.point(bodies, mousePos);
        hovered.forEach(body => {
          const forceMagnitude = 0.05 * forceMultiplier;
          Matter.Body.applyForce(body, body.position, {
            x: (Math.random() - 0.5) * forceMagnitude, y: -forceMagnitude
          });
        });
      };

      handlePointerDown = (e: PointerEvent) => { isInteractive = true; triggerScatter(e, 2); };
      handlePointerMove = (e: PointerEvent) => { if (isInteractive) triggerScatter(e, 1); };
      handlePointerLeave = () => { isInteractive = false; };

      scene.addEventListener('pointerdown', handlePointerDown);
      scene.addEventListener('pointermove', handlePointerMove);
      scene.addEventListener('pointerleave', handlePointerLeave);

      runner = Matter.Runner.create();
      Matter.Runner.run(runner, engine);

      const syncDOM = () => {
        tagBodies.forEach(({ body, elem, w, h }) => {
          const { x, y } = body.position;
          elem.style.transform = `translate(${x - w / 2}px, ${y - h / 2}px) rotate(${body.angle}rad)`;
        });
        raf = requestAnimationFrame(syncDOM);
      };
      raf = requestAnimationFrame(syncDOM);

      ro = new ResizeObserver((entries) => {
        if (!entries[0]) return;
        rect = scene.getBoundingClientRect();
        const newWidth = entries[0].contentRect.width;
        const newHeight = entries[0].contentRect.height;
        Matter.Body.setPosition(ground, { x: newWidth / 2, y: newHeight + 25 });
        Matter.Body.setPosition(rightWall, { x: newWidth + 25, y: newHeight / 2 });
      });
      ro.observe(scene);

      onScroll = () => { rect = scene.getBoundingClientRect(); };
      window.addEventListener('scroll', onScroll, { passive: true });
    });

    return () => {
      (window.cancelIdleCallback || window.clearTimeout)(idleId);
      if (raf) cancelAnimationFrame(raf);
      if (ro) ro.disconnect();
      if (onScroll) window.removeEventListener('scroll', onScroll);
      if (sceneRef.current) {
        if (handlePointerDown) sceneRef.current.removeEventListener('pointerdown', handlePointerDown);
        if (handlePointerMove) sceneRef.current.removeEventListener('pointermove', handlePointerMove);
        if (handlePointerLeave) sceneRef.current.removeEventListener('pointerleave', handlePointerLeave);
      }
      if (runner) Matter.Runner.stop(runner);
      if (engine) Matter.Engine.clear(engine);
    };
  }, []);

  return (
    <section className="w-full bg-[#0A0A0A]">
      <div 
        ref={sceneRef} 
        className="relative w-full h-[350px] overflow-hidden cursor-pointer"
        dir="rtl"
      >
        {TAGS.map((tag) => {
          const Icon = tag.icon;
          return (
            <div
              key={tag.id}
              ref={(el) => {
                if (el) elementsRef.current.set(tag.id, el);
              }}
              // will-change-transform ensures GPU hardware acceleration
              className={`absolute top-0 left-0 flex items-center gap-2 px-6 py-3 rounded-full font-bold select-none whitespace-nowrap will-change-transform shadow-xl transition-transform duration-75 ${tag.color}`}
              style={{ transformOrigin: 'center center' }}
            >
              <Icon size={18} />
              <span className="text-[15px] leading-none pt-1" dir="rtl">{tag.text}</span>
            </div>
          );
        })}
      </div>
    </section>
  );
}
