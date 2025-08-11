'use client';

import { useRef, useEffect, useState } from 'react';
import { Canvas, useFrame, useLoader } from '@react-three/fiber';
import { OrbitControls, Sphere, Ring } from '@react-three/drei';
import { TextureLoader } from 'three';
import * as THREE from 'three';

// Earth component with rotation
function Earth() {
  const earthRef = useRef<THREE.Mesh>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  // Track mouse position for interactive rotation
  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      setMousePosition({
        x: (event.clientX / window.innerWidth) * 2 - 1,
        y: -(event.clientY / window.innerHeight) * 2 + 1,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Auto-rotation with mouse influence
  useFrame((state) => {
    if (earthRef.current) {
      earthRef.current.rotation.y += 0.005;
      earthRef.current.rotation.x = mousePosition.y * 0.1;
      earthRef.current.rotation.z = mousePosition.x * 0.1;
    }
  });

  return (
    <mesh ref={earthRef}>
      <sphereGeometry args={[2.5, 64, 64]} />
      <meshPhongMaterial
        color="#4a90e2"
        shininess={100}
        specular="#ffffff"
        transparent
        opacity={0.8}
      />
      {/* Inner glow effect */}
      <mesh>
        <sphereGeometry args={[2.45, 32, 32]} />
        <meshBasicMaterial
          color="#8A2BE2"
          transparent
          opacity={0.3}
          side={THREE.BackSide}
        />
      </mesh>
    </mesh>
  );
}

// Orbital rings around Earth
function OrbitalRings() {
  const ring1Ref = useRef<THREE.Mesh>(null);
  const ring2Ref = useRef<THREE.Mesh>(null);
  const ring3Ref = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    
    if (ring1Ref.current) {
      ring1Ref.current.rotation.x = time * 0.5;
      ring1Ref.current.rotation.z = Math.sin(time * 0.3) * 0.2;
    }
    if (ring2Ref.current) {
      ring2Ref.current.rotation.y = time * 0.3;
      ring2Ref.current.rotation.x = Math.cos(time * 0.2) * 0.1;
    }
    if (ring3Ref.current) {
      ring3Ref.current.rotation.z = time * 0.4;
      ring3Ref.current.rotation.y = Math.sin(time * 0.4) * 0.15;
    }
  });

  return (
    <>
      {/* Ring 1 */}
      <mesh ref={ring1Ref}>
        <torusGeometry args={[4, 0.02, 16, 100]} />
        <meshBasicMaterial
          color="#8A2BE2"
          transparent
          opacity={0.6}
        />
      </mesh>
      
      {/* Ring 2 */}
      <mesh ref={ring2Ref}>
        <torusGeometry args={[4.8, 0.015, 16, 100]} />
        <meshBasicMaterial
          color="#4F46E5"
          transparent
          opacity={0.4}
        />
      </mesh>
      
      {/* Ring 3 */}
      <mesh ref={ring3Ref}>
        <torusGeometry args={[5.5, 0.01, 16, 100]} />
        <meshBasicMaterial
          color="#60A5FA"
          transparent
          opacity={0.3}
        />
      </mesh>
    </>
  );
}

// Floating particles around the globe
function FloatingParticles() {
  const particlesRef = useRef<THREE.Points>(null);

  useFrame((state) => {
    if (particlesRef.current) {
      particlesRef.current.rotation.y += 0.001;
      particlesRef.current.rotation.x = Math.sin(state.clock.getElapsedTime() * 0.2) * 0.1;
    }
  });

  const particleCount = 1000;
  const positions = new Float32Array(particleCount * 3);

  for (let i = 0; i < particleCount; i++) {
    const radius = 8 + Math.random() * 4;
    const theta = Math.random() * Math.PI * 2;
    const phi = Math.random() * Math.PI;

    positions[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
    positions[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
    positions[i * 3 + 2] = radius * Math.cos(phi);
  }

  return (
    <points ref={particlesRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          array={positions}
          count={particleCount}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        color="#8A2BE2"
        size={0.05}
        transparent
        opacity={0.6}
        sizeAttenuation
      />
    </points>
  );
}

// Main Globe component
export default function Globe() {
  return (
    <div className="w-full h-[400px] sm:h-[500px] lg:h-[600px] relative">
      <Canvas
        camera={{ position: [0, 0, 10], fov: 45 }}
        style={{ background: 'transparent' }}
        aria-label="Interactive 3D Globe"
        role="img"
      >
        {/* Lighting */}
        <ambientLight intensity={0.4} />
        <pointLight position={[10, 10, 10]} intensity={1} color="#8A2BE2" />
        <pointLight position={[-10, -10, -10]} intensity={0.5} color="#4F46E5" />
        <directionalLight
          position={[5, 5, 5]}
          intensity={0.8}
          color="#ffffff"
          castShadow
        />

        {/* 3D Elements */}
        <Earth />
        <OrbitalRings />
        <FloatingParticles />

        {/* Controls */}
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          autoRotate={false}
          rotateSpeed={0.5}
        />
      </Canvas>

      {/* UI Overlay */}
      <div className="absolute inset-0 pointer-events-none flex items-center justify-center">
        <div className="text-center z-10 px-4">
          <h3 className="text-xl sm:text-2xl font-bold text-primary-text mb-2">
            Interactive Globe
          </h3>
          <p className="text-secondary-text text-sm hidden sm:block">
            Move your mouse to influence rotation
          </p>
          <p className="text-secondary-text text-xs sm:hidden">
            Touch to interact
          </p>
        </div>
      </div>
    </div>
  );
}
