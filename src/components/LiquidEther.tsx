'use client';

import { useEffect, useRef } from 'react';
import * as THREE from 'three';

interface LiquidEtherProps {
    colors?: string[];
    mouseForce?: number;
    cursorSize?: number;
    isViscous?: boolean;
    viscous?: number;
    iterationsViscous?: number;
    iterationsPoisson?: number;
    resolution?: number;
    isBounce?: boolean;
    autoDemo?: boolean;
    autoSpeed?: number;
    autoIntensity?: number;
    takeoverDuration?: number;
    autoResumeDelay?: number;
    autoRampDuration?: number;
}

export default function LiquidEther({
    colors = ['#5227FF', '#FF9FFC', '#B19EEF'],
    mouseForce = 20,
    cursorSize = 100,
    isViscous = false,
    viscous = 30,
    iterationsViscous = 32,
    iterationsPoisson = 32,
    resolution = 0.5,
    isBounce = false,
    autoDemo = true,
    autoSpeed = 0.5,
    autoIntensity = 2.2,
    takeoverDuration = 0.25,
    autoResumeDelay = 3000,
    autoRampDuration = 0.6,
}: LiquidEtherProps) {
    const containerRef = useRef<HTMLDivElement>(null);
    const sceneRef = useRef<THREE.Scene | null>(null);
    const cameraRef = useRef<THREE.OrthographicCamera | null>(null);
    const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
    const animationFrameRef = useRef<number | null>(null);

    useEffect(() => {
        if (!containerRef.current) return;

        // Scene setup
        const scene = new THREE.Scene();
        sceneRef.current = scene;

        // Camera setup
        const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);
        cameraRef.current = camera;

        // Renderer setup
        const renderer = new THREE.WebGLRenderer({
            antialias: true,
            alpha: true
        });
        renderer.setSize(containerRef.current.clientWidth, containerRef.current.clientHeight);
        renderer.setPixelRatio(window.devicePixelRatio * resolution);
        containerRef.current.appendChild(renderer.domElement);
        rendererRef.current = renderer;

        // Create fluid simulation shader material
        const vertexShader = `
      varying vec2 vUv;
      void main() {
        vUv = uv;
        gl_Position = vec4(position, 1.0);
      }
    `;

        const fragmentShader = `
      uniform vec2 resolution;
      uniform float time;
      uniform vec2 mouse;
      uniform vec3 color1;
      uniform vec3 color2;
      uniform vec3 color3;
      uniform float mouseForce;
      uniform float cursorSize;
      uniform bool autoDemo;
      uniform float autoSpeed;
      uniform float autoIntensity;
      
      varying vec2 vUv;
      
      vec3 mod289(vec3 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
      vec2 mod289(vec2 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
      vec3 permute(vec3 x) { return mod289(((x*34.0)+1.0)*x); }

      float snoise(vec2 v) {
        const vec4 C = vec4(0.211324865405187, 0.366025403784439, -0.577350269189626, 0.024390243902439);
        vec2 i = floor(v + dot(v, C.yy));
        vec2 x0 = v - i + dot(i, C.xx);
        vec2 i1 = (x0.x > x0.y) ? vec2(1.0, 0.0) : vec2(0.0, 1.0);
        vec4 x12 = x0.xyxy + C.xxzz;
        x12.xy -= i1;
        i = mod289(i);
        vec3 p = permute(permute(i.y + vec3(0.0, i1.y, 1.0)) + i.x + vec3(0.0, i1.x, 1.0));
        vec3 m = max(0.5 - vec3(dot(x0,x0), dot(x12.xy,x12.xy), dot(x12.zw,x12.zw)), 0.0);
        m = m*m;
        m = m*m;
        vec3 x = 2.0 * fract(p * C.www) - 1.0;
        vec3 h = abs(x) - 0.5;
        vec3 ox = floor(x + 0.5);
        vec3 a0 = x - ox;
        m *= 1.79284291400159 - 0.85373472095314 * (a0*a0 + h*h);
        vec3 g;
        g.x = a0.x * x0.x + h.x * x0.y;
        g.yz = a0.yz * x12.xz + h.yz * x12.yw;
        return 130.0 * dot(m, g);
      }

      void main() {
        vec2 uv = vUv;
        vec2 p = uv * 2.0 - 1.0;
        p.x *= resolution.x / resolution.y;
        
        // Auto demo movement
        vec2 animatedPos = vec2(0.0);
        if (autoDemo) {
          animatedPos = vec2(
            sin(time * autoSpeed) * autoIntensity,
            cos(time * autoSpeed * 0.7) * autoIntensity
          );
        }
        
        // Mouse interaction
        vec2 mousePos = (mouse * 2.0 - 1.0);
        mousePos.x *= resolution.x / resolution.y;
        
        float mouseDist = length(p - mousePos - animatedPos);
        float mouseInfluence = smoothstep(cursorSize / 100.0, 0.0, mouseDist) * mouseForce / 100.0;
        
        // Noise-based fluid simulation
        float n1 = snoise(p * 2.0 + time * 0.3 + animatedPos * 0.5);
        float n2 = snoise(p * 3.0 - time * 0.2 + vec2(n1) + mouseInfluence);
        float n3 = snoise(p * 1.5 + time * 0.4 + vec2(n2));
        
        // Combine noises
        float noise = (n1 + n2 + n3) / 3.0;
        noise += mouseInfluence;
        
        // Color mixing
        vec3 color = mix(color1, color2, smoothstep(-1.0, 1.0, noise));
        color = mix(color, color3, smoothstep(-0.5, 0.5, n3 + mouseInfluence));
        
        // Add glow effect near mouse
        float glow = exp(-mouseDist * 2.0) * mouseInfluence;
        color += glow * 0.5;
        
        gl_FragColor = vec4(color, 1.0);
      }
    `;

        // Convert hex colors to RGB
        const hexToRgb = (hex: string) => {
            const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
            return result ? {
                r: parseInt(result[1], 16) / 255,
                g: parseInt(result[2], 16) / 255,
                b: parseInt(result[3], 16) / 255
            } : { r: 0, g: 0, b: 0 };
        };

        const color1 = hexToRgb(colors[0] || '#5227FF');
        const color2 = hexToRgb(colors[1] || '#FF9FFC');
        const color3 = hexToRgb(colors[2] || '#B19EEF');

        // Create shader material
        const material = new THREE.ShaderMaterial({
            vertexShader,
            fragmentShader,
            uniforms: {
                time: { value: 0 },
                resolution: {
                    value: new THREE.Vector2(
                        containerRef.current.clientWidth,
                        containerRef.current.clientHeight
                    )
                },
                mouse: { value: new THREE.Vector2(0.5, 0.5) },
                color1: { value: new THREE.Vector3(color1.r, color1.g, color1.b) },
                color2: { value: new THREE.Vector3(color2.r, color2.g, color2.b) },
                color3: { value: new THREE.Vector3(color3.r, color3.g, color3.b) },
                mouseForce: { value: mouseForce },
                cursorSize: { value: cursorSize },
                autoDemo: { value: autoDemo },
                autoSpeed: { value: autoSpeed },
                autoIntensity: { value: autoIntensity },
            },
        });

        // Create plane mesh
        const geometry = new THREE.PlaneGeometry(2, 2);
        const mesh = new THREE.Mesh(geometry, material);
        scene.add(mesh);

        // Mouse tracking
        let mouseX = 0.5;
        let mouseY = 0.5;
        let targetX = 0.5;
        let targetY = 0.5;

        const handleMouseMove = (event: MouseEvent) => {
            const rect = containerRef.current?.getBoundingClientRect();
            if (rect) {
                targetX = (event.clientX - rect.left) / rect.width;
                targetY = 1.0 - (event.clientY - rect.top) / rect.height;
            }
        };

        const handleTouchMove = (event: TouchEvent) => {
            const rect = containerRef.current?.getBoundingClientRect();
            if (rect && event.touches.length > 0) {
                targetX = (event.touches[0].clientX - rect.left) / rect.width;
                targetY = 1.0 - (event.touches[0].clientY - rect.top) / rect.height;
            }
        };

        window.addEventListener('mousemove', handleMouseMove);
        window.addEventListener('touchmove', handleTouchMove);

        // Animation loop
        const animate = () => {
            // Smooth mouse movement
            mouseX += (targetX - mouseX) * 0.1;
            mouseY += (targetY - mouseY) * 0.1;

            material.uniforms.time.value += 0.01;
            material.uniforms.mouse.value.set(mouseX, mouseY);

            renderer.render(scene, camera);
            animationFrameRef.current = requestAnimationFrame(animate);
        };

        animate();

        // Handle resize
        const handleResize = () => {
            if (!containerRef.current) return;

            const width = containerRef.current.clientWidth;
            const height = containerRef.current.clientHeight;

            renderer.setSize(width, height);
            material.uniforms.resolution.value.set(width, height);
        };

        window.addEventListener('resize', handleResize);

        // Cleanup
        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('touchmove', handleTouchMove);
            window.removeEventListener('resize', handleResize);

            if (animationFrameRef.current !== null) {
                cancelAnimationFrame(animationFrameRef.current);
            }

            if (containerRef.current && renderer.domElement) {
                containerRef.current.removeChild(renderer.domElement);
            }

            geometry.dispose();
            material.dispose();
            renderer.dispose();
        };
    }, [colors, mouseForce, cursorSize, isViscous, viscous, iterationsViscous,
        iterationsPoisson, resolution, isBounce, autoDemo, autoSpeed,
        autoIntensity, takeoverDuration, autoResumeDelay, autoRampDuration]);

    return (
        <div
            ref={containerRef}
            style={{
                width: '100%',
                height: '100%',
                position: 'absolute',
                top: 0,
                left: 0,
                zIndex: 0
            }}
        />
    );
}
