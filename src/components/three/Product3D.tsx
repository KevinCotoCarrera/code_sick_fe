"use client";

import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Torus, MeshWobbleMaterial } from "@react-three/drei";
import * as THREE from "three";

function AnimatedTorus() {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.getElapsedTime() * 0.4;
      meshRef.current.rotation.z = state.clock.getElapsedTime() * 0.2;
    }
  });

  return (
    <Torus ref={meshRef} args={[1, 0.4, 16, 100]}>
      <MeshWobbleMaterial
        color="#10b981"
        attach="material"
        factor={0.6}
        speed={1.5}
        roughness={0.1}
        metalness={0.9}
      />
    </Torus>
  );
}

interface Product3DProps {
  className?: string;
}

export default function Product3D({ className = "" }: Product3DProps) {
  return (
    <div className={`w-full h-full ${className}`}>
      <Canvas camera={{ position: [0, 0, 4], fov: 50 }}>
        <ambientLight intensity={0.4} />
        <directionalLight position={[8, 8, 5]} intensity={1.2} />
        <pointLight position={[-8, -8, -5]} intensity={0.6} color="#34d399" />
        <AnimatedTorus />
      </Canvas>
    </div>
  );
}
