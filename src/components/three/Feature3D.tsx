"use client";

import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Text3D, Center } from "@react-three/drei";
import * as THREE from "three";

function FloatingText({ text }: { text: string }) {
  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
      <Center>
        <Text3D
          font="/fonts/helvetiker_regular.typeface.json"
          size={0.5}
          height={0.2}
          curveSegments={12}
        >
          {text}
          <meshNormalMaterial />
        </Text3D>
      </Center>
    </Float>
  );
}

function RotatingCube() {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.getElapsedTime() * 0.3;
      meshRef.current.rotation.y = state.clock.getElapsedTime() * 0.4;
    }
  });

  return (
    <mesh ref={meshRef}>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color="#8b5cf6" metalness={0.8} roughness={0.2} />
    </mesh>
  );
}

interface Feature3DProps {
  variant?: "cube" | "text";
  text?: string;
  className?: string;
}

export default function Feature3D({
  variant = "cube",
  text = "Feature",
  className = "",
}: Feature3DProps) {
  return (
    <div className={`w-full h-full ${className}`}>
      <Canvas camera={{ position: [0, 0, 3], fov: 50 }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[5, 5, 5]} intensity={1} />
        <pointLight position={[-5, -5, -5]} intensity={0.5} />
        {variant === "cube" ? <RotatingCube /> : <FloatingText text={text} />}
      </Canvas>
    </div>
  );
}
