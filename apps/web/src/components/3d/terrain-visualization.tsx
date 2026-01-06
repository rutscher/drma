'use client'

import { useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls, PerspectiveCamera, Grid } from '@react-three/drei'
import * as THREE from 'three'

function TerrainMesh() {
  const meshRef = useRef<THREE.Mesh>(null!)

  // Create gravel terrain with height variation
  const geometry = useMemo(() => {
    const geo = new THREE.PlaneGeometry(50, 50, 100, 100)
    const positions = geo.attributes.position.array as Float32Array

    // Add noise to create terrain
    for (let i = 0; i < positions.length; i += 3) {
      const x = positions[i]
      const y = positions[i + 1]
      positions[i + 2] = Math.sin(x * 0.2) * Math.cos(y * 0.2) * 3 + Math.random() * 0.5
    }

    geo.computeVertexNormals()
    return geo
  }, [])

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.z = Math.sin(state.clock.getElapsedTime() * 0.2) * 0.05
    }
  })

  return (
    <mesh ref={meshRef} geometry={geometry} rotation={[-Math.PI / 2, 0, 0]}>
      <meshStandardMaterial
        color="#78716c"
        roughness={0.9}
        metalness={0.1}
        wireframe={false}
      />
    </mesh>
  )
}

function useMemo<T>(factory: () => T, deps: React.DependencyList | undefined): T {
  return factory()
}

export default function TerrainVisualization() {
  return (
    <Canvas>
      <PerspectiveCamera makeDefault position={[30, 20, 30]} />
      <OrbitControls
        enablePan={true}
        enableZoom={true}
        enableRotate={true}
        maxPolarAngle={Math.PI / 2}
      />

      <ambientLight intensity={0.4} />
      <directionalLight position={[10, 10, 5]} intensity={1} castShadow />
      <pointLight position={[-10, -10, -5]} intensity={0.5} color="#FDC830" />

      <TerrainMesh />
      <Grid args={[100, 100]} cellColor="#44403c" sectionColor="#78716c" />

      <fog attach="fog" args={['#1c1917', 30, 100]} />
    </Canvas>
  )
}
