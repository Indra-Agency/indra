'use client';

import React, { useRef, useMemo, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Environment, Float, PresentationControls } from '@react-three/drei';
import * as THREE from 'three';
import { createNoise3D } from 'simplex-noise';

function Blob() {
  const meshRef = useRef<THREE.Mesh>(null);
  
  // Use useMemo to avoid recreating objects on every render
  const noise3D = useMemo(() => createNoise3D(), []);
  
  // Store original positions for the noise deformation
  const originalPositions = useRef<Float32Array | null>(null);

  useEffect(() => {
    if (meshRef.current) {
      const geometry = meshRef.current.geometry;
      // Ensure we have position attributes
      if (geometry.attributes.position) {
        originalPositions.current = new Float32Array(geometry.attributes.position.array);
      }
    }
  }, []);

  useFrame((state) => {
    if (!meshRef.current || !originalPositions.current) return;

    const time = state.clock.getElapsedTime();
    const geometry = meshRef.current.geometry;
    const positions = geometry.attributes.position.array as Float32Array;
    const v3 = new THREE.Vector3();

    // Deform vertices based on noise
    for (let i = 0; i < positions.length; i += 3) {
      // Original vertex position
      v3.set(
        originalPositions.current[i],
        originalPositions.current[i + 1],
        originalPositions.current[i + 2]
      );

      // Calculate noise based on position and time
      // Slower time (* 0.2) and smaller amplitude (* 0.2) for a very gentle, comfortable breathing effect
      const noise = noise3D(v3.x * 0.8 + time * 0.2, v3.y * 0.8 + time * 0.2, v3.z * 0.8) * 0.2;
      
      // Apply noise outward along the normal (for a sphere, normal is roughly normalized position)
      v3.normalize().multiplyScalar(2 + noise); // Base radius 2, noise amplitude 0.2

      positions[i] = v3.x;
      positions[i + 1] = v3.y;
      positions[i + 2] = v3.z;
    }

    // Need to tell Three.js to update the geometry
    geometry.attributes.position.needsUpdate = true;
    geometry.computeVertexNormals();
    
    // Very slow rotation
    meshRef.current.rotation.y = time * 0.1;
    meshRef.current.rotation.z = time * 0.05;
  });

  return (
    <Float speed={1.5} rotationIntensity={0.5} floatIntensity={1}>
      <mesh ref={meshRef}>
        {/* Icosahedron is good for smooth sphere deformation, detail level 16 */}
        <icosahedronGeometry args={[2, 32]} />
        <meshPhysicalMaterial 
          color="#1B2632" /* abyssal-blue */
          emissive="#FF9933" /* burning-flame */
          emissiveIntensity={0.1}
          roughness={0.1}
          metalness={0.8}
          clearcoat={1}
          clearcoatRoughness={0.1}
          wireframe={false}
        />
      </mesh>
    </Float>
  );
}

export function Hero3DBlob() {
  return (
    <div className="absolute inset-0 z-0 pointer-events-auto overflow-hidden">
      <Canvas
        camera={{ position: [0, 0, 8], fov: 45 }}
        gl={{ antialias: true, alpha: true }}
      >
        {/* Lights */}
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={1} color="#FF9933" />
        <directionalLight position={[-10, -10, -5]} intensity={2} color="#2C3B4D" />
        
        {/* Interactive Controls (Tilt based on mouse) */}
        <PresentationControls 
          global 
          config={{ mass: 2, tension: 500 }} 
          snap={{ mass: 4, tension: 1500 }} 
          rotation={[0, 0, 0]} 
          polar={[-Math.PI / 3, Math.PI / 3]} 
          azimuth={[-Math.PI / 1.4, Math.PI / 2]}
        >
          {/* Group to position the blob on the left side (RTL left) */}
          <group position={[-2.5, 0, 0]}>
            <Blob />
          </group>
        </PresentationControls>

        {/* Environment mapping for reflections */}
        <Environment preset="city" />
      </Canvas>
    </div>
  );
}
