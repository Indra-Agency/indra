'use client';

import { useRef, useMemo, useState, useEffect } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Float, Points, PointMaterial } from '@react-three/drei';
import * as THREE from 'three';

/* ────────────────────────────────────────────────────────
   ① المجسم الهندسي الرئيسي — Icosahedron شبكي متوهج
   ──────────────────────────────────────────────────────── */
function CoreGeometry({ isMobile }: { isMobile: boolean }) {
  const meshRef = useRef<THREE.Mesh>(null);
  const outlineRef = useRef<THREE.Mesh>(null);

  const geoRef1 = useRef<THREE.IcosahedronGeometry>(null);
  const matRef1 = useRef<THREE.MeshStandardMaterial>(null);
  const geoRef2 = useRef<THREE.IcosahedronGeometry>(null);
  const matRef2 = useRef<THREE.MeshStandardMaterial>(null);

  // تنظيف الذاكرة للمجسمات والمواد عند إلغاء تحميل المكون
  useEffect(() => {
    return () => {
      geoRef1.current?.dispose();
      matRef1.current?.dispose();
      geoRef2.current?.dispose();
      matRef2.current?.dispose();
    };
  }, []);

  useFrame(({ clock, pointer }) => {
    if (!meshRef.current || !outlineRef.current) return;
    const t = clock.getElapsedTime();

    // دوران بطيء مستمر
    meshRef.current.rotation.y = t * 0.08;
    meshRef.current.rotation.x = t * 0.05;
    outlineRef.current.rotation.y = t * 0.08;
    outlineRef.current.rotation.x = t * 0.05;

    // تفاعل خفيف مع الماوس (Parallax)
    meshRef.current.rotation.z = pointer.x * 0.15;
    meshRef.current.position.y = pointer.y * 0.3;
    outlineRef.current.rotation.z = pointer.x * 0.15;
    outlineRef.current.position.y = pointer.y * 0.3;
  });

  const detail = isMobile ? 0 : 1;

  return (
    <group>
      {/* الشكل الداخلي — سطح شبه شفاف */}
      <mesh ref={meshRef}>
        <icosahedronGeometry ref={geoRef1} args={[1.8, detail]} />
        <meshStandardMaterial
          ref={matRef1}
          color="#10B981"
          transparent
          opacity={0.06}
          side={THREE.DoubleSide}
        />
      </mesh>

      {/* الشكل الخارجي — إطار شبكي (Wireframe) */}
      <mesh ref={outlineRef}>
        <icosahedronGeometry ref={geoRef2} args={[1.8, detail]} />
        <meshStandardMaterial
          ref={matRef2}
          color="#10B981"
          wireframe
          transparent
          opacity={0.35}
        />
      </mesh>
    </group>
  );
}

/* ────────────────────────────────────────────────────────
   ② حلقة مدارية خارجية — Torus دوّار
   ──────────────────────────────────────────────────────── */
function OrbitalRing({ isMobile }: { isMobile: boolean }) {
  const ringRef = useRef<THREE.Mesh>(null);
  const geoRef = useRef<THREE.TorusGeometry>(null);
  const matRef = useRef<THREE.MeshStandardMaterial>(null);

  // تنظيف الذاكرة
  useEffect(() => {
    return () => {
      geoRef.current?.dispose();
      matRef.current?.dispose();
    };
  }, []);

  useFrame(({ clock, pointer }) => {
    if (!ringRef.current) return;
    const t = clock.getElapsedTime();
    ringRef.current.rotation.x = Math.PI / 2.5 + t * 0.03;
    ringRef.current.rotation.z = t * 0.06;
    ringRef.current.rotation.y = pointer.x * 0.1;
  });

  const radialSegments = isMobile ? 8 : 16;
  const tubularSegments = isMobile ? 40 : 100;

  return (
    <mesh ref={ringRef}>
      <torusGeometry
        ref={geoRef}
        args={[2.8, 0.008, radialSegments, tubularSegments]}
      />
      <meshStandardMaterial
        ref={matRef}
        color="#10B981"
        transparent
        opacity={0.25}
        emissive="#10B981"
        emissiveIntensity={0.5}
      />
    </mesh>
  );
}

/* ────────────────────────────────────────────────────────
   ③ حلقة ثانية — دوران عكسي (يتم عرضها للشاشات الكبيرة فقط)
   ──────────────────────────────────────────────────────── */
function SecondRing() {
  const ringRef = useRef<THREE.Mesh>(null);
  const geoRef = useRef<THREE.TorusGeometry>(null);
  const matRef = useRef<THREE.MeshStandardMaterial>(null);

  // تنظيف الذاكرة
  useEffect(() => {
    return () => {
      geoRef.current?.dispose();
      matRef.current?.dispose();
    };
  }, []);

  useFrame(({ clock }) => {
    if (!ringRef.current) return;
    const t = clock.getElapsedTime();
    ringRef.current.rotation.x = Math.PI / 3.5 + t * -0.04;
    ringRef.current.rotation.y = t * 0.05;
  });

  return (
    <mesh ref={ringRef}>
      <torusGeometry ref={geoRef} args={[3.2, 0.005, 16, 100]} />
      <meshStandardMaterial
        ref={matRef}
        color="#6EE7B7"
        transparent
        opacity={0.15}
        emissive="#6EE7B7"
        emissiveIntensity={0.3}
      />
    </mesh>
  );
}

/* ────────────────────────────────────────────────────────
   ④ جزيئات نقطية خلفية — Particle Field
   ──────────────────────────────────────────────────────── */
function ParticleField({ isMobile }: { isMobile: boolean }) {
  const pointsRef = useRef<THREE.Points>(null);
  const matRef = useRef<THREE.PointsMaterial>(null);

  const particles = useMemo(() => {
    const count = isMobile ? 150 : 600;
    const positions = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 12;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 12;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 12;
    }
    return positions;
  }, [isMobile]);

  // تنظيف الذاكرة
  useEffect(() => {
    return () => {
      if (pointsRef.current) {
        pointsRef.current.geometry.dispose();
      }
      matRef.current?.dispose();
    };
  }, []);

  useFrame(({ clock }) => {
    if (!pointsRef.current) return;
    pointsRef.current.rotation.y = clock.getElapsedTime() * 0.015;
    pointsRef.current.rotation.x = clock.getElapsedTime() * 0.008;
  });

  return (
    <Points
      ref={pointsRef}
      positions={particles}
      stride={3}
      frustumCulled={false}
    >
      <PointMaterial
        ref={matRef}
        transparent
        color="#34D399"
        size={0.015}
        sizeAttenuation
        depthWrite={false}
        opacity={0.6}
      />
    </Points>
  );
}

/* ────────────────────────────────────────────────────────
   ⑤ نقطة وهج مركزية — Central Glow Point
   ──────────────────────────────────────────────────────── */
function GlowCore() {
  const lightRef = useRef<THREE.PointLight>(null);
  const geoRef = useRef<THREE.SphereGeometry>(null);
  const matRef = useRef<THREE.MeshBasicMaterial>(null);

  // تنظيف الذاكرة
  useEffect(() => {
    return () => {
      geoRef.current?.dispose();
      matRef.current?.dispose();
    };
  }, []);

  useFrame(({ clock }) => {
    if (!lightRef.current) return;
    const t = clock.getElapsedTime();
    lightRef.current.intensity = 1.5 + Math.sin(t * 0.8) * 0.5;
  });

  return (
    <>
      <pointLight
        ref={lightRef}
        position={[0, 0, 0]}
        color="#10B981"
        intensity={1.5}
        distance={8}
        decay={2}
      />
      <mesh>
        <sphereGeometry ref={geoRef} args={[0.08, 16, 16]} />
        <meshBasicMaterial ref={matRef} color="#6EE7B7" transparent opacity={0.8} />
      </mesh>
    </>
  );
}

/* ────────────────────────────────────────────────────────
   ⑥ كاميرا تستجيب للماوس — Mouse-aware camera rig
   ──────────────────────────────────────────────────────── */
function CameraRig() {
  const { camera } = useThree();
  const targetPosition = useRef(new THREE.Vector3(0, 0, 6));

  useFrame(({ pointer }) => {
    targetPosition.current.x = pointer.x * 0.4;
    targetPosition.current.y = pointer.y * 0.3;
    targetPosition.current.z = 6;

    camera.position.lerp(targetPosition.current, 0.03);
    camera.lookAt(0, 0, 0);
  });

  return null;
}

/* ────────────────────────────────────────────────────────
   المكون الرئيسي — Hero3DScene
   ──────────────────────────────────────────────────────── */
export const Hero3DScene = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width: 768px)');
    setIsMobile(mediaQuery.matches);
    const handler = (e: MediaQueryListEvent) => setIsMobile(e.matches);
    mediaQuery.addEventListener('change', handler);
    return () => mediaQuery.removeEventListener('change', handler);
  }, []);

  return (
    <div className="absolute inset-0 z-0" style={{ pointerEvents: 'auto' }}>
      <Canvas
        camera={{ position: [0, 0, 6], fov: 50 }}
        dpr={[1, 1.5]}
        gl={{
          antialias: true,
          alpha: true,
          powerPreference: 'high-performance',
        }}
        style={{ background: 'transparent' }}
      >
        {/* الإضاءة */}
        <ambientLight intensity={0.15} color="#ffffff" />
        <pointLight position={[5, 5, 5]} intensity={0.4} color="#ffffff" />
        <pointLight position={[-5, -3, 3]} intensity={0.2} color="#10B981" />

        {/* المشهد الرئيسي */}
        <Float speed={1.5} rotationIntensity={0.2} floatIntensity={0.3}>
          <CoreGeometry isMobile={isMobile} />
          <GlowCore />
        </Float>

        <OrbitalRing isMobile={isMobile} />
        {!isMobile && <SecondRing />}
        <ParticleField isMobile={isMobile} />
        <CameraRig />
      </Canvas>
    </div>
  );
};
