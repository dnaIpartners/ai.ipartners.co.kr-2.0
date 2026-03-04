import React, { useRef } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Environment, MeshDistortMaterial, Sphere, Float } from '@react-three/drei';
import * as THREE from 'three';
import { motion } from 'motion/react';

function JellySphere() {
  const mesh = useRef<THREE.Mesh>(null);
  const { size } = useThree();
  
  // Reduce scale by 20% on mobile screens (width < 768px)
  const scale = size.width < 768 ? 1.08 * 0.8 : 1.08;
  
  useFrame((state) => {
    if (mesh.current) {
      mesh.current.rotation.x = state.clock.getElapsedTime() * 0.2;
      mesh.current.rotation.y = state.clock.getElapsedTime() * 0.3;
    }
  });

  return (
    <Float speed={2} rotationIntensity={1} floatIntensity={2}>
      <Sphere ref={mesh} args={[2.5, 128, 128]} scale={scale}>
        <MeshDistortMaterial
          color="#ffffff"
          attach="material"
          distort={0.4} // Amount of distortion
          speed={2} // Speed of distortion
          roughness={0.1}
          metalness={0.1}
          clearcoat={1}
          clearcoatRoughness={0.1}
          transmission={0.9}
          ior={1.5}
          thickness={2}
        />
      </Sphere>
    </Float>
  );
}

export default function FluidBackground() {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 2, ease: "easeOut" }}
      className="absolute inset-0 z-0 bg-[#F8F8F8] overflow-hidden"
    >
      <Canvas camera={{ position: [0, 0, 8], fov: 45 }} dpr={[1, 2]}>
        <ambientLight intensity={1} />
        <directionalLight position={[10, 10, 10]} intensity={2} color="#ffffff" />
        <directionalLight position={[-10, -10, -10]} intensity={1} color="#FF6B00" />
        <directionalLight position={[10, -10, 10]} intensity={1} color="#2563EB" />
        
        <JellySphere />
        
        <Environment preset="city" />
      </Canvas>
      {/* Overlay to ensure text readability if needed */}
      <div className="absolute inset-0 bg-white/30 backdrop-blur-[2px] pointer-events-none"></div>
    </motion.div>
  );
}
