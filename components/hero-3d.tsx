'use client';

import { Canvas } from '@react-three/fiber';
import { OrbitControls, Text3D, Center } from '@react-three/drei';
import { EffectComposer, Bloom } from '@react-three/postprocessing';
import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

function MoonveilLogo3D() {
  const logoRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (logoRef.current) {
      logoRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.3;
      logoRef.current.rotation.x = Math.cos(state.clock.elapsedTime * 0.4) * 0.1;
      logoRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.9) * 0.15;
    }
  });

  return (
    <group ref={logoRef}>
      <Center>
        <Text3D
          font="/fonts/helvetiker_regular.typeface.json"
          size={1.6}
          height={0.4}
          bevelEnabled
          bevelThickness={0.15}
          bevelSize={0.08}
          bevelSegments={10}
        >
          Z+
          <meshStandardMaterial
            color="#C97BFF"
            emissive="#A855F7"
            emissiveIntensity={1.4}   // increase emissive for glowing effect
            metalness={0.7}
            roughness={0.25}
          />
        </Text3D>
      </Center>

      {/* Lights */}
      <pointLight position={[6, 6, 8]} intensity={1.2} color="#C97BFF" />
      <pointLight position={[-6, -6, -4]} intensity={0.6} color="#7A3EB1" />
      <ambientLight intensity={0.25} />
    </group>
  );
}

export function Hero3D() {
  return (
    <div className="h-96 w-full relative">
      <Canvas camera={{ position: [0, 0, 8], fov: 45 }}>
        <MoonveilLogo3D />

        {/* 🔥 Bloom (Glow) Effect */}
        <EffectComposer>
          <Bloom
            intensity={1.5}      // strength of glow
            luminanceThreshold={0.2} // what is considered "bright"
            luminanceSmoothing={0.9}
            radius={0.9}          // spread of glow
          />
        </EffectComposer>

        <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={1} />
      </Canvas>
    </div>
  );
        }
