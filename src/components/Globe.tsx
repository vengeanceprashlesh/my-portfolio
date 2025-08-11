'use client';

import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import * as THREE from 'three';

// Animated Tech Constellation
function TechConstellation() {
  const mainGroupRef = useRef<THREE.Group>(null);
  const orbitingNodesRef = useRef<THREE.Group>(null);
  const particlesRef = useRef<THREE.Points>(null);
  const ringsRef = useRef<THREE.Group>(null);

  // Define tech nodes in perfect circular arrangement
  const techNodes = useMemo(() => {
    const nodeCount = 6;
    const radius = 2.5;
    const nodes = [];
    
    // Center node (You)
    nodes.push({
      position: [0, 0, 0] as [number, number, number],
      color: '#8A2BE2',
      size: 0.2,
      label: 'You',
      orbitRadius: 0,
      orbitSpeed: 0
    });
    
    // Surrounding tech nodes
    const techs = [
      { name: 'React', color: '#61DAFB' },
      { name: 'Node.js', color: '#22C55E' },
      { name: 'Python', color: '#F59E0B' },
      { name: 'MongoDB', color: '#4F46E5' },
      { name: 'JavaScript', color: '#EF4444' },
      { name: 'Git', color: '#60A5FA' }
    ];
    
    techs.forEach((tech, i) => {
      const angle = (i / nodeCount) * Math.PI * 2;
      const x = Math.cos(angle) * radius;
      const z = Math.sin(angle) * radius;
      const y = Math.sin(angle * 2) * 0.5; // Add some vertical variation
      
      nodes.push({
        position: [x, y, z] as [number, number, number],
        color: tech.color,
        size: 0.12,
        label: tech.name,
        orbitRadius: radius,
        orbitSpeed: 0.3 + i * 0.1,
        orbitPhase: angle
      });
    });
    
    return nodes;
  }, []);

  // Create connection lines
  const connections = useMemo(() => {
    const lines = [];
    
    // Connect all orbiting nodes to center
    for (let i = 1; i < techNodes.length; i++) {
      lines.push({
        start: techNodes[0].position,
        end: techNodes[i].position,
        opacity: 0.4
      });
    }
    
    // Connect adjacent orbiting nodes
    for (let i = 1; i < techNodes.length; i++) {
      const nextIndex = i < techNodes.length - 1 ? i + 1 : 1;
      lines.push({
        start: techNodes[i].position,
        end: techNodes[nextIndex].position,
        opacity: 0.2
      });
    }
    
    return lines;
  }, [techNodes]);

  // Enhanced particle system
  const starField = useMemo(() => {
    const particleCount = 300;
    const positions = new Float32Array(particleCount * 3);
    const colors = new Float32Array(particleCount * 3);
    const sizes = new Float32Array(particleCount);
    const velocities = new Float32Array(particleCount * 3);
    
    const colorPalette = [
      new THREE.Color('#8A2BE2'), // Purple
      new THREE.Color('#4F46E5'), // Blue  
      new THREE.Color('#60A5FA'), // Light Blue
      new THREE.Color('#22C55E'), // Green
      new THREE.Color('#F59E0B'), // Orange
      new THREE.Color('#EF4444'), // Red
    ];
    
    for (let i = 0; i < particleCount; i++) {
      // Create layered particle distribution
      const layer = Math.floor(i / (particleCount / 3));
      const baseRadius = 1.5 + layer * 1.2;
      const radiusVariation = 0.5 + Math.random() * 0.8;
      const finalRadius = baseRadius + radiusVariation;
      
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      
      positions[i * 3] = finalRadius * Math.sin(phi) * Math.cos(theta);
      positions[i * 3 + 1] = finalRadius * Math.sin(phi) * Math.sin(theta);
      positions[i * 3 + 2] = finalRadius * Math.cos(phi);
      
      // Assign colors based on distance from center
      const distanceFromCenter = finalRadius / 4;
      const colorIndex = Math.min(Math.floor(distanceFromCenter * colorPalette.length), colorPalette.length - 1);
      const color = colorPalette[colorIndex];
      
      colors[i * 3] = color.r;
      colors[i * 3 + 1] = color.g;
      colors[i * 3 + 2] = color.b;
      
      // Size based on layer (closer = bigger)
      sizes[i] = (0.8 - layer * 0.2) * (0.3 + Math.random() * 0.4);
      
      // Slow orbital velocities
      velocities[i * 3] = (Math.random() - 0.5) * 0.02;
      velocities[i * 3 + 1] = (Math.random() - 0.5) * 0.02;
      velocities[i * 3 + 2] = (Math.random() - 0.5) * 0.02;
    }
    
    return { positions, colors, sizes, velocities, count: particleCount };
  }, []);

  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    
    // Smooth main rotation
    if (mainGroupRef.current) {
      mainGroupRef.current.rotation.y = time * 0.15;
      mainGroupRef.current.rotation.x = Math.sin(time * 0.3) * 0.1;
    }
    
    // Individual node animations (pulsing)
    if (orbitingNodesRef.current) {
      orbitingNodesRef.current.children.forEach((node, i) => {
        if (node instanceof THREE.Mesh && i > 0) {
          // Gentle pulsing animation
          const pulseScale = 1 + Math.sin(time * 2 + i) * 0.1;
          node.scale.setScalar(pulseScale);
          
          // Floating motion
          const originalY = techNodes[i]?.position[1] || 0;
          node.position.y = originalY + Math.sin(time * 1.5 + i * 0.5) * 0.2;
        }
      });
    }
    
    // Animate particles
    if (particlesRef.current && particlesRef.current.geometry) {
      const positions = particlesRef.current.geometry.attributes.position.array as Float32Array;
      
      for (let i = 0; i < starField.count; i++) {
        // Subtle drift motion
        positions[i * 3] += Math.sin(time * 0.5 + i * 0.1) * 0.001;
        positions[i * 3 + 1] += Math.cos(time * 0.7 + i * 0.15) * 0.001;
        positions[i * 3 + 2] += Math.sin(time * 0.3 + i * 0.2) * 0.001;
      }
      
      particlesRef.current.geometry.attributes.position.needsUpdate = true;
    }
    
    // Animate rings
    if (ringsRef.current) {
      ringsRef.current.children.forEach((ring, i) => {
        ring.rotation.z = time * (0.2 + i * 0.1);
        ring.rotation.x = time * 0.1 + i;
      });
    }
  });

  return (
    <group ref={mainGroupRef}>
      {/* Tech Nodes */}
      <group ref={orbitingNodesRef}>
        {techNodes.map((node, i) => (
          <mesh key={i} position={node.position}>
            <sphereGeometry args={[node.size, 32, 32]} />
            <meshStandardMaterial
              color={node.color}
              emissive={node.color}
              emissiveIntensity={i === 0 ? 0.4 : 0.3}
              metalness={0.8}
              roughness={0.1}
              transparent
              opacity={0.9}
            />
            {/* Glow effect */}
            <mesh scale={[1.5, 1.5, 1.5]}>
              <sphereGeometry args={[node.size, 16, 16]} />
              <meshBasicMaterial
                color={node.color}
                transparent
                opacity={0.1}
              />
            </mesh>
          </mesh>
        ))}
      </group>
      
      {/* Connection Lines */}
      <group>
        {connections.map((connection, i) => {
          const start = new THREE.Vector3(...connection.start);
          const end = new THREE.Vector3(...connection.end);
          const points = [start, end];
          
          return (
            <line key={i}>
              <bufferGeometry>
                <bufferAttribute
                  attach="attributes-position"
                  args={[new Float32Array(points.flatMap(p => [p.x, p.y, p.z])), 3]}
                  count={2}
                />
              </bufferGeometry>
              <lineBasicMaterial
                color="#8A2BE2"
                transparent
                opacity={connection.opacity}
                linewidth={1}
              />
            </line>
          );
        })}
      </group>
      
      {/* Star Field */}
      <points ref={particlesRef}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            args={[starField.positions, 3]}
            count={starField.count}
          />
          <bufferAttribute
            attach="attributes-color"
            args={[starField.colors, 3]}
            count={starField.count}
          />
          <bufferAttribute
            attach="attributes-size"
            args={[starField.sizes, 1]}
            count={starField.count}
          />
        </bufferGeometry>
        <pointsMaterial
          transparent
          opacity={0.6}
          vertexColors
          sizeAttenuation
          blending={THREE.AdditiveBlending}
        />
      </points>
      
      {/* Energy Rings */}
      <group ref={ringsRef}>
        {[2.8, 3.5, 4.2].map((radius, i) => (
          <mesh key={i}>
            <torusGeometry args={[radius, 0.005, 16, 100]} />
            <meshBasicMaterial
              color={['#8A2BE2', '#4F46E5', '#60A5FA'][i]}
              transparent
              opacity={0.3 - i * 0.08}
            />
          </mesh>
        ))}
      </group>
    </group>
  );
}

// Enhanced Tech Constellation Component
export default function Globe() {
  return (
    <div className="w-full h-[280px] sm:h-[320px] lg:h-[380px] relative overflow-hidden rounded-xl">
      <Canvas
        camera={{ 
          position: [0, 2, 6], 
          fov: 50,
          near: 0.1,
          far: 1000
        }}
        style={{ background: 'transparent' }}
        aria-label="Interactive Tech Constellation"
        role="img"
        dpr={[1, 2]} // Responsive pixel ratio
      >
        {/* Enhanced Lighting */}
        <ambientLight intensity={0.2} />
        <pointLight 
          position={[4, 4, 4]} 
          intensity={1.2} 
          color="#8A2BE2" 
          distance={20}
          decay={2}
        />
        <pointLight 
          position={[-4, -2, -4]} 
          intensity={0.8} 
          color="#4F46E5"
          distance={15}
          decay={2}
        />
        <directionalLight
          position={[2, 8, 5]}
          intensity={0.5}
          color="#60A5FA"
          castShadow
        />

        {/* Tech Constellation */}
        <TechConstellation />

        {/* Smooth Interactive Controls */}
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          autoRotate
          autoRotateSpeed={0.5}
          rotateSpeed={0.3}
          dampingFactor={0.05}
          enableDamping
          maxPolarAngle={Math.PI * 0.7}
          minPolarAngle={Math.PI * 0.3}
        />
      </Canvas>
    </div>
  );
}
