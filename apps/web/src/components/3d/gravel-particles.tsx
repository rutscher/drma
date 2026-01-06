'use client'

import { useRef, useMemo } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Points, PointMaterial } from '@react-three/drei'
import * as THREE from 'three'

function GravelParticleField() {
  const ref = useRef<THREE.Points>(null!)
  const particleCount = 5000

  const particles = useMemo(() => {
    const positions = new Float32Array(particleCount * 3)
    const colors = new Float32Array(particleCount * 3)

    for (let i = 0; i < particleCount; i++) {
      // Position
      positions[i * 3] = (Math.random() - 0.5) * 100
      positions[i * 3 + 1] = (Math.random() - 0.5) * 100
      positions[i * 3 + 2] = (Math.random() - 0.5) * 50

      // Gravel colors (shades of gray/brown)
      const gravelColor = new THREE.Color()
      gravelColor.setHSL(0.1, Math.random() * 0.2, 0.3 + Math.random() * 0.4)
      colors[i * 3] = gravelColor.r
      colors[i * 3 + 1] = gravelColor.g
      colors[i * 3 + 2] = gravelColor.b
    }

    return { positions, colors }
  }, [])

  useFrame((state) => {
    const time = state.clock.getElapsedTime()
    if (ref.current) {
      ref.current.rotation.x = time * 0.05
      ref.current.rotation.y = time * 0.075

      // Subtle floating motion
      const positions = ref.current.geometry.attributes.position.array as Float32Array
      for (let i = 0; i < particleCount; i++) {
        const i3 = i * 3
        positions[i3 + 1] = particles.positions[i3 + 1] + Math.sin(time + i) * 0.1
      }
      ref.current.geometry.attributes.position.needsUpdate = true
    }
  })

  return (
    <Points ref={ref} positions={particles.positions} colors={particles.colors}>
      <PointMaterial
        transparent
        vertexColors
        size={0.15}
        sizeAttenuation
        depthWrite={false}
        opacity={0.6}
        blending={THREE.AdditiveBlending}
      />
    </Points>
  )
}

export default function GravelParticles() {
  return (
    <Canvas
      camera={{ position: [0, 0, 20], fov: 75 }}
      style={{ background: 'linear-gradient(to bottom, #0c0a09, #1c1917)' }}
    >
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} />
      <GravelParticleField />
    </Canvas>
  )
}
