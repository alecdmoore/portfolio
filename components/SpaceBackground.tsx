// First, install required dependencies:
// npm install three @types/three @react-three/fiber @react-three/drei

// src/components/SpaceBackground.tsx
import { useRef, useEffect } from "react";
import * as THREE from "three";

interface ParticleProps {
  count?: number;
  size?: number;
  spread?: number;
}

const SpaceBackground = ({
  count = 5000,
  size = 0.01,
  spread = 50,
}: ParticleProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const requestRef = useRef<number | null>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    // Setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    const renderer = new THREE.WebGLRenderer({ antialias: true });

    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    containerRef.current.appendChild(renderer.domElement);

    // Create circle texture
    const circleTexture = (() => {
      const canvas = document.createElement("canvas");
      const ctx = canvas.getContext("2d");
      if (!ctx) return null;

      const size = 64;
      canvas.width = size;
      canvas.height = size;

      ctx.beginPath();
      ctx.arc(size / 2, size / 2, size / 2, 0, Math.PI * 2);
      ctx.fillStyle = "white";
      ctx.fill();

      return new THREE.CanvasTexture(canvas);
    })();

    // Create particles
    const positions = new Float32Array(count * 3);
    const geometry = new THREE.BufferGeometry();
    const material = new THREE.PointsMaterial({
      size,
      sizeAttenuation: true,
      color: 0xb5b0a7,
      transparent: true,
      opacity: 0.8,
      map: circleTexture,
      alphaTest: 0.1,
      depthWrite: false,
    });

    // Randomly position particles
    for (let i = 0; i < count * 3; i += 3) {
      positions[i] = (Math.random() - 0.5) * spread; // x
      positions[i + 1] = (Math.random() - 0.5) * spread; // y
      positions[i + 2] = (Math.random() - 0.5) * spread; // z
    }

    geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    const particles = new THREE.Points(geometry, material);
    scene.add(particles);

    // Position camera
    camera.position.z = 30;

    // Animation
    const animate = () => {
      particles.rotation.x -= 0.0001;
      particles.rotation.y -= 0.0001;

      renderer.render(scene, camera);
      requestRef.current = requestAnimationFrame(animate);
    };

    // Handle resize
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener("resize", handleResize);
    requestRef.current = requestAnimationFrame(animate);

    // Cleanup
    return () => {
      if (containerRef.current) {
        containerRef.current.removeChild(renderer.domElement);
      }
      window.removeEventListener("resize", handleResize);
      if (requestRef.current) {
        cancelAnimationFrame(requestRef.current);
      }
      geometry.dispose();
      material.dispose();
    };
  }, [count, size, spread]);

  return <div ref={containerRef} className="fixed inset-0 -z-10" />;
};

export { SpaceBackground };
