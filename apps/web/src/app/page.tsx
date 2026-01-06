'use client'

import { Suspense, useState, useEffect } from 'react'
import dynamic from 'next/dynamic'
import { motion, useScroll, useTransform } from 'framer-motion'
import { CommandPalette } from '@/components/command-palette'
import { ThemeToggle } from '@/components/theme-toggle'
import { FeatureGrid } from '@/components/feature-grid'
import { LiveTelemetry } from '@/components/live-telemetry'
import { GravelAnalyzer } from '@/components/gravel-analyzer'
import { BlockchainBibs } from '@/components/blockchain-bibs'
import { RaceStats } from '@/components/race-stats'

// Dynamically import 3D components for better performance
const GravelParticles = dynamic(() => import('@/components/3d/gravel-particles'), {
  ssr: false,
  loading: () => <div className="absolute inset-0 bg-gradient-to-b from-gravel-900 to-gravel-950" />,
})

const TerrainVisualization = dynamic(() => import('@/components/3d/terrain-visualization'), {
  ssr: false,
})

export default function Home() {
  const [isCommandOpen, setIsCommandOpen] = useState(false)
  const { scrollY } = useScroll()
  const opacity = useTransform(scrollY, [0, 300], [1, 0])
  const scale = useTransform(scrollY, [0, 300], [1, 0.8])

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === 'k' && (e.metaKey || e.ctrlKey)) {
        e.preventDefault()
        setIsCommandOpen((open) => !open)
      }
    }
    document.addEventListener('keydown', down)
    return () => document.removeEventListener('keydown', down)
  }, [])

  return (
    <main className="relative min-h-screen overflow-x-hidden">
      {/* Absurd 3D Background */}
      <div className="fixed inset-0 z-0">
        <Suspense fallback={null}>
          <GravelParticles />
        </Suspense>
      </div>

      {/* Ridiculous Hero Section */}
      <motion.section
        style={{ opacity, scale }}
        className="relative z-10 min-h-screen flex items-center justify-center px-4"
      >
        <div className="absolute top-4 right-4">
          <ThemeToggle />
        </div>

        <div className="text-center space-y-8 max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-4"
          >
            <h1 className="font-display text-8xl md:text-9xl lg:text-[12rem] font-bold tracking-tighter">
              <span className="bg-gradient-to-r from-brand-primary via-brand-secondary to-brand-tertiary bg-clip-text text-transparent animate-pulse-slow">
                GRVL DRMA
              </span>
            </h1>
            <p className="text-2xl md:text-4xl font-mono text-gravel-400 animate-fade-in">
              The Most{' '}
              <span className="line-through text-gravel-600">Unnecessary</span>{' '}
              <span className="text-brand-primary font-bold">Over-Engineered</span> Gravel Race Website
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="space-y-4"
          >
            <p className="text-xl md:text-2xl text-gravel-300 max-w-3xl mx-auto leading-relaxed">
              Featuring <span className="font-bold text-brand-secondary">blockchain-verified digital race bibs</span>,{' '}
              <span className="font-bold text-brand-tertiary">AI-powered gravel analysis</span>,{' '}
              <span className="font-bold text-brand-quaternary">real-time 3D telemetry</span>, and approximately{' '}
              <span className="font-mono text-brand-quinary">47 other features</span> that absolutely nobody asked for.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4 pt-8">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-to-r from-brand-primary to-brand-secondary text-white font-bold text-lg rounded-full shadow-lg hover:shadow-xl transition-all"
              >
                Register (Blockchain Required)
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gravel-800 text-gravel-100 font-bold text-lg rounded-full border-2 border-gravel-600 hover:bg-gravel-700 transition-all"
              >
                View Unnecessary Tech Stack
              </motion.button>
            </div>

            <p className="text-sm text-gravel-500 font-mono pt-4">
              Press{' '}
              <kbd className="px-2 py-1 bg-gravel-800 border border-gravel-600 rounded">⌘K</kbd>{' '}
              to open command palette (because of course we have one)
            </p>
          </motion.div>
        </div>
      </motion.section>

      {/* Ridiculous Feature Showcase */}
      <section className="relative z-10 py-32 px-4 bg-gradient-to-b from-transparent via-gravel-950/50 to-gravel-950">
        <div className="max-w-7xl mx-auto space-y-32">
          {/* Features Grid */}
          <div>
            <h2 className="font-display text-6xl md:text-7xl text-center mb-16 text-gravel-100">
              Unnecessary Features
            </h2>
            <FeatureGrid />
          </div>

          {/* Live Telemetry (even though there's no race happening) */}
          <div>
            <h2 className="font-display text-6xl md:text-7xl text-center mb-16 text-gravel-100">
              Live Race Telemetry
              <span className="text-2xl text-gravel-500 block mt-4 font-sans">
                (Simulated because there's no actual race)
              </span>
            </h2>
            <LiveTelemetry />
          </div>

          {/* 3D Terrain */}
          <div>
            <h2 className="font-display text-6xl md:text-7xl text-center mb-16 text-gravel-100">
              3D Course Visualization
            </h2>
            <div className="h-[600px] rounded-2xl overflow-hidden border-4 border-gravel-800">
              <Suspense fallback={<div className="w-full h-full bg-gravel-900 animate-pulse" />}>
                <TerrainVisualization />
              </Suspense>
            </div>
          </div>

          {/* AI Gravel Analyzer */}
          <div>
            <h2 className="font-display text-6xl md:text-7xl text-center mb-16 text-gravel-100">
              AI-Powered Gravel Analysis
              <span className="text-2xl text-gravel-500 block mt-4 font-sans">
                (Using TensorFlow.js to classify... rocks)
              </span>
            </h2>
            <GravelAnalyzer />
          </div>

          {/* Blockchain Bibs */}
          <div>
            <h2 className="font-display text-6xl md:text-7xl text-center mb-16 text-gravel-100">
              Blockchain Race Bibs
              <span className="text-2xl text-gravel-500 block mt-4 font-sans">
                (Because paper is so 2019)
              </span>
            </h2>
            <BlockchainBibs />
          </div>

          {/* Ridiculous Stats */}
          <div>
            <h2 className="font-display text-6xl md:text-7xl text-center mb-16 text-gravel-100">
              Overly Detailed Statistics
            </h2>
            <RaceStats />
          </div>
        </div>
      </section>

      {/* Footer with tech stack brag */}
      <footer className="relative z-10 bg-gravel-950 border-t border-gravel-800 py-16 px-4">
        <div className="max-w-7xl mx-auto text-center space-y-8">
          <h3 className="font-display text-4xl text-gravel-100">
            Built with an absolutely ridiculous tech stack
          </h3>
          <div className="flex flex-wrap items-center justify-center gap-4 text-sm text-gravel-400 font-mono">
            <span>Next.js 14</span>
            <span>•</span>
            <span>React 18</span>
            <span>•</span>
            <span>TypeScript</span>
            <span>•</span>
            <span>Three.js</span>
            <span>•</span>
            <span>TensorFlow.js</span>
            <span>•</span>
            <span>Web3</span>
            <span>•</span>
            <span>tRPC</span>
            <span>•</span>
            <span>GraphQL</span>
            <span>•</span>
            <span>Prisma</span>
            <span>•</span>
            <span>PostgreSQL</span>
            <span>•</span>
            <span>Redis</span>
            <span>•</span>
            <span>WebSockets</span>
            <span>•</span>
            <span>Docker</span>
            <span>•</span>
            <span>Kubernetes</span>
            <span>•</span>
            <span>and 47 other dependencies</span>
          </div>
          <p className="text-gravel-500 text-sm">
            © 2024 GRVL DRMA. Over-engineered with ❤️ and way too much free time.
          </p>
        </div>
      </footer>

      {/* Command Palette */}
      <CommandPalette open={isCommandOpen} onOpenChange={setIsCommandOpen} />
    </main>
  )
}
