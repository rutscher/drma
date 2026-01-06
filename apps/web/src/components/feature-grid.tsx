'use client'

import { motion } from 'framer-motion'

const features = [
  {
    icon: '⛓️',
    title: 'Blockchain Race Bibs',
    description: 'Your bib number is an NFT on the Ethereum blockchain because why not.',
    absurdity: 'HIGH',
  },
  {
    icon: '🧠',
    title: 'AI Gravel Classifier',
    description: 'TensorFlow.js powered ML model that identifies types of gravel. Yes, really.',
    absurdity: 'EXTREME',
  },
  {
    icon: '🎮',
    title: 'Real-time 3D Telemetry',
    description: 'WebGL-powered live race tracking with particle effects and shaders.',
    absurdity: 'VERY HIGH',
  },
  {
    icon: '🗺️',
    title: '3D Terrain Visualization',
    description: 'Three.js rendered course map with elevation data and dynamic lighting.',
    absurdity: 'HIGH',
  },
  {
    icon: '📊',
    title: 'GraphQL + tRPC APIs',
    description: 'Both. At the same time. For a static website.',
    absurdity: 'MAXIMUM',
  },
  {
    icon: '🔄',
    title: 'Real-time WebSockets',
    description: 'Live updates for... everything. Even things that don\'t need live updates.',
    absurdity: 'VERY HIGH',
  },
  {
    icon: '🌐',
    title: '23 Language Support',
    description: 'Full i18n because gravel is a universal language.',
    absurdity: 'MEDIUM',
  },
  {
    icon: '🎨',
    title: 'Three Theme Modes',
    description: 'Light, Dark, and exclusive Gravel Mode™ with 50 shades of gray.',
    absurdity: 'LOW',
  },
  {
    icon: '⚡',
    title: 'PWA with Offline Support',
    description: 'Works offline so you can browse race info with no cell service.',
    absurdity: 'MEDIUM',
  },
  {
    icon: '🔍',
    title: 'Command Palette (⌘K)',
    description: 'Keyboard-driven navigation because we\'re professional developers.',
    absurdity: 'LOW',
  },
  {
    icon: '📱',
    title: 'Push Notifications',
    description: 'Get notified when absolutely nothing important happens.',
    absurdity: 'HIGH',
  },
  {
    icon: '🐳',
    title: 'Kubernetes Deployment',
    description: 'Full K8s setup with auto-scaling for your gravel bike race website.',
    absurdity: 'EXTREME',
  },
]

const absurdityColors = {
  LOW: 'text-green-500',
  MEDIUM: 'text-yellow-500',
  HIGH: 'text-orange-500',
  'VERY HIGH': 'text-red-500',
  EXTREME: 'text-purple-500 animate-pulse',
  MAXIMUM: 'text-pink-500 animate-pulse font-bold',
}

export function FeatureGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {features.map((feature, index) => (
        <motion.div
          key={feature.title}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.1 }}
          whileHover={{ scale: 1.05, rotate: Math.random() * 4 - 2 }}
          className="p-6 rounded-xl bg-gradient-to-br from-gravel-900 to-gravel-950 border border-gravel-800 hover:border-brand-primary transition-all cursor-pointer group"
        >
          <div className="text-5xl mb-4 group-hover:animate-bounce">{feature.icon}</div>
          <h3 className="text-xl font-bold text-gravel-100 mb-2">{feature.title}</h3>
          <p className="text-gravel-400 text-sm mb-4">{feature.description}</p>
          <div className="flex items-center justify-between">
            <span className="text-xs text-gravel-600 font-mono">Absurdity Level:</span>
            <span className={`text-xs font-bold font-mono ${absurdityColors[feature.absurdity as keyof typeof absurdityColors]}`}>
              {feature.absurdity}
            </span>
          </div>
        </motion.div>
      ))}
    </div>
  )
}
