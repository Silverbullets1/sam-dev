"use client";

import { useRef, useMemo } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Float, Environment, MeshDistortMaterial, Icosahedron } from "@react-three/drei";
import { EffectComposer, Bloom, Vignette } from "@react-three/postprocessing";
import * as THREE from "three";

/** Slowly rotating, mouse-reactive distorted core object with bloom glow. */
function CoreObject() {
  const mesh = useRef<THREE.Mesh>(null);
  const group = useRef<THREE.Group>(null);

  useFrame((state, delta) => {
    if (mesh.current) {
      mesh.current.rotation.y += delta * 0.25;
      mesh.current.rotation.x += delta * 0.08;
    }
    // Mouse parallax
    const { x, y } = state.pointer;
    if (group.current) {
      group.current.rotation.y = THREE.MathUtils.lerp(group.current.rotation.y, x * 0.4, 0.05);
      group.current.rotation.x = THREE.MathUtils.lerp(group.current.rotation.x, -y * 0.3, 0.05);
    }
  });

  return (
    <group ref={group}>
      <Float speed={1.4} rotationIntensity={0.6} floatIntensity={1.2}>
        <Icosahedron ref={mesh} args={[1.35, 12]}>
          <MeshDistortMaterial
            color="#7c3aed"
            emissive="#22d3ee"
            emissiveIntensity={0.6}
            roughness={0.15}
            metalness={0.8}
            distort={0.35}
            speed={1.8}
          />
        </Icosahedron>
        <mesh scale={1.9}>
          <icosahedronGeometry args={[1, 1]} />
          <meshBasicMaterial color="#3b82f6" wireframe transparent opacity={0.18} />
        </mesh>
      </Float>
    </group>
  );
}

/** Floating particle field for depth + aurora feel. */
function Particles({ count = 120 }: { count?: number }) {
  const points = useRef<THREE.Points>(null);
  const positions = useMemo(() => {
    const arr = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      arr[i * 3] = (Math.random() - 0.5) * 14;
      arr[i * 3 + 1] = (Math.random() - 0.5) * 10;
      arr[i * 3 + 2] = (Math.random() - 0.5) * 8;
    }
    return arr;
  }, [count]);

  useFrame((_, delta) => {
    if (points.current) points.current.rotation.y += delta * 0.04;
  });

  return (
    <points ref={points}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
      </bufferGeometry>
      <pointsMaterial
        size={0.045}
        color="#22d3ee"
        transparent
        opacity={0.8}
        sizeAttenuation
      />
    </points>
  );
}

function Rig() {
  // Subtle camera drift
  const { camera } = useThree();
  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    camera.position.x = Math.sin(t * 0.15) * 0.6;
    camera.position.y = Math.cos(t * 0.2) * 0.3;
    camera.lookAt(0, 0, 0);
  });
  return null;
}

export default function HeroScene() {
  return (
    <Canvas
      camera={{ position: [0, 0, 6], fov: 45 }}
      dpr={[1, 1.8]}
      gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
    >
      <ambientLight intensity={0.4} />
      <directionalLight position={[5, 5, 5]} intensity={1.2} color="#a855f7" />
      <pointLight position={[-5, -3, 2]} intensity={2} color="#22d3ee" />
      <CoreObject />
      <Particles />
      <Rig />
      <Environment preset="night" />
      <EffectComposer>
        <Bloom intensity={1.1} luminanceThreshold={0.2} luminanceSmoothing={0.9} mipmapBlur />
        <Vignette eskil={false} offset={0.25} darkness={0.85} />
      </EffectComposer>
    </Canvas>
  );
}
