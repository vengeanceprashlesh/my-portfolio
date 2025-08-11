'use client';

import { useRef, useEffect, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import * as THREE from 'three';

// Fractal DNA Helix with Quantum Particles - Ultra Unique 3D Element
function FractalDNAHelix() {
  const helixRef = useRef<THREE.Group>(null);
  const strand1Ref = useRef<THREE.Group>(null);
  const strand2Ref = useRef<THREE.Group>(null);
  const quantumParticlesRef = useRef<THREE.Points>(null);
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

  // Complex DNA helix animation with quantum effects
  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    
    if (helixRef.current) {
      helixRef.current.rotation.y = time * 0.3 + mousePosition.x * 0.5;
      helixRef.current.rotation.x = mousePosition.y * 0.3;
    }
    
    if (strand1Ref.current) {
      strand1Ref.current.rotation.y = time * 0.8;
    }
    
    if (strand2Ref.current) {
      strand2Ref.current.rotation.y = -time * 0.8;
    }
    
    if (quantumParticlesRef.current) {
      quantumParticlesRef.current.rotation.y = time * 0.1;
      quantumParticlesRef.current.rotation.z = Math.sin(time * 0.5) * 0.2;
    }
  });

  // Generate DNA base pairs with fractal patterns
  const createDNAStrand = (radius: number, offset: number, color: string) => {
    const nodes = [];
    const segments = 40;
    const height = 6;
    
    for (let i = 0; i < segments; i++) {
      const angle = (i / segments) * Math.PI * 4 + offset;
      const y = (i / segments) * height - height / 2;
      const x = Math.cos(angle) * radius;
      const z = Math.sin(angle) * radius;
      
      // Create fractal-like branching nodes
      nodes.push(
        <group key={i} position={[x, y, z]}>
          {/* Main node */}
          <mesh>
            <dodecahedronGeometry args={[0.15, 0]} />
            <meshStandardMaterial
              color={color}
              emissive={color}
              emissiveIntensity={0.3}
              metalness={0.8}
              roughness={0.2}
            />
          </mesh>
          
          {/* Fractal branches */}
          {Array.from({ length: 4 }, (_, j) => {
            const branchAngle = (j / 4) * Math.PI * 2;
            const branchX = Math.cos(branchAngle) * 0.3;
            const branchZ = Math.sin(branchAngle) * 0.3;
            
            return (
              <mesh key={j} position={[branchX, 0, branchZ]}>
                <tetrahedronGeometry args={[0.05, 0]} />
                <meshBasicMaterial
                  color={color}
                  transparent
                  opacity={0.8}
                />
              </mesh>
            );
          })}
          
          {/* Connection lines to next node */}
          {i < segments - 1 && (
            <mesh rotation={[0, angle + 0.1, 0]}>
              <cylinderGeometry args={[0.02, 0.02, 0.8, 8]} />
              <meshBasicMaterial
                color={color}
                transparent
                opacity={0.6}
              />
            </mesh>
          )}
        </group>
      );
    }
    
    return nodes;
  };

  // Generate quantum particle field
  const quantumParticleCount = 800;
  const quantumPositions = new Float32Array(quantumParticleCount * 3);
  const quantumColors = new Float32Array(quantumParticleCount * 3);
  
  for (let i = 0; i < quantumParticleCount; i++) {
    // Create particle cloud in torus shape around helix
    const theta = Math.random() * Math.PI * 2;
    const phi = Math.random() * Math.PI * 2;
    const radius = 4 + Math.random() * 2;
    const tubeRadius = 0.5 + Math.random() * 1.5;
    
    quantumPositions[i * 3] = (radius + tubeRadius * Math.cos(phi)) * Math.cos(theta);
    quantumPositions[i * 3 + 1] = tubeRadius * Math.sin(phi) + (Math.random() - 0.5) * 4;
    quantumPositions[i * 3 + 2] = (radius + tubeRadius * Math.cos(phi)) * Math.sin(theta);
    
    // Theme-matched colors: purples and blues only
    const colorVariant = Math.random();
    let color;
    if (colorVariant < 0.4) {
      color = new THREE.Color(0x8A2BE2); // Accent purple
    } else if (colorVariant < 0.8) {
      color = new THREE.Color(0x4F46E5); // Accent blue
    } else {
      color = new THREE.Color(0x6366F1); // Light indigo variant
    }
    quantumColors[i * 3] = color.r;
    quantumColors[i * 3 + 1] = color.g;
    quantumColors[i * 3 + 2] = color.b;
  }

  return (
    <group ref={helixRef} position={[0, 0, 0]} scale={1.0}>
      {/* DNA Strand 1 - Cyan/Blue */}
      <group ref={strand1Ref}>
        {createDNAStrand(1.5, 0, "#4F46E5")}
      </group>
      
      {/* DNA Strand 2 - Pink/Magenta */}
      <group ref={strand2Ref}>
        {createDNAStrand(1.5, Math.PI, "#8A2BE2")}
      </group>
      
      {/* Base pair connections */}
      {Array.from({ length: 20 }, (_, i) => {
        const angle = (i / 20) * Math.PI * 4;
        const y = (i / 20) * 6 - 3;
        const x1 = Math.cos(angle) * 1.5;
        const z1 = Math.sin(angle) * 1.5;
        const x2 = Math.cos(angle + Math.PI) * 1.5;
        const z2 = Math.sin(angle + Math.PI) * 1.5;
        
        return (
          <mesh key={i} position={[(x1 + x2) / 2, y, (z1 + z2) / 2]} rotation={[0, angle, 0]}>
            <cylinderGeometry args={[0.03, 0.03, 3, 6]} />
            <meshStandardMaterial
              color="#9CA3AF"
              emissive="#6366F1"
              emissiveIntensity={0.3}
              transparent
              opacity={0.8}
            />
          </mesh>
        );
      })}
      
      {/* Central energy core */}
      <mesh>
        <torusKnotGeometry args={[0.8, 0.3, 100, 16, 2, 3]} />
        <meshStandardMaterial
          color="#F3F4F6"
          emissive="#8A2BE2"
          emissiveIntensity={0.4}
          metalness={0.8}
          roughness={0.1}
        />
      </mesh>
      
      {/* Quantum particle field */}
      <points ref={quantumParticlesRef}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            args={[quantumPositions, 3]}
            count={quantumParticleCount}
          />
          <bufferAttribute
            attach="attributes-color"
            args={[quantumColors, 3]}
            count={quantumParticleCount}
          />
        </bufferGeometry>
        <pointsMaterial
          size={0.06}
          transparent
          opacity={0.7}
          vertexColors
          sizeAttenuation
        />
      </points>
    </group>
  );
}

// Quantum energy rings around DNA Helix
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

// Floating particles around the fractal helix
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
          args={[positions, 3]}
          count={particleCount}
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

// Main Fractal DNA Helix component (keeping Globe name for compatibility)
export default function Globe() {
  return (
    <div className="w-full h-[400px] sm:h-[500px] lg:h-[600px] relative">
      <Canvas
        camera={{ position: [2, 0, 10], fov: 45 }}
        style={{ background: 'transparent' }}
        aria-label="Interactive 3D Fractal DNA Helix"
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
        <FractalDNAHelix />
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
    </div>
  );
}
