'use client'

import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

export function RaceStats() {
  const [stats, setStats] = useState({
    totalRegistrations: 0,
    averageSpeed: 0,
    gravelAnalyzed: 0,
    nftsMinted: 0,
    coffeeConsumed: 0,
    unnecessaryFeatures: 0,
    linesOfCode: 0,
    deploymentComplexity: 0,
  })

  useEffect(() => {
    // Animate counters
    const intervals = [
      setInterval(() => setStats((s) => ({ ...s, totalRegistrations: Math.min(s.totalRegistrations + 13, 1337) })), 50),
      setInterval(() => setStats((s) => ({ ...s, averageSpeed: Math.min(s.averageSpeed + 0.3, 28.5) })), 50),
      setInterval(() => setStats((s) => ({ ...s, gravelAnalyzed: Math.min(s.gravelAnalyzed + 47, 9001) })), 20),
      setInterval(() => setStats((s) => ({ ...s, nftsMinted: Math.min(s.nftsMinted + 7, 420) })), 60),
      setInterval(() => setStats((s) => ({ ...s, coffeeConsumed: Math.min(s.coffeeConsumed + 3, 999) })), 30),
      setInterval(() => setStats((s) => ({ ...s, unnecessaryFeatures: Math.min(s.unnecessaryFeatures + 1, 73) })), 100),
      setInterval(() => setStats((s) => ({ ...s, linesOfCode: Math.min(s.linesOfCode + 234, 50000) })), 10),
      setInterval(() => setStats((s) => ({ ...s, deploymentComplexity: Math.min(s.deploymentComplexity + 2, 100) })), 40),
    ]

    return () => intervals.forEach(clearInterval)
  }, [])

  const statCards = [
    {
      icon: '🚴',
      label: 'Total Registrations',
      value: stats.totalRegistrations.toFixed(0),
      suffix: 'riders',
      color: 'from-blue-600 to-cyan-600',
    },
    {
      icon: '⚡',
      label: 'Average Speed',
      value: stats.averageSpeed.toFixed(1),
      suffix: 'km/h',
      color: 'from-yellow-600 to-orange-600',
    },
    {
      icon: '🪨',
      label: 'Gravel Pieces Analyzed',
      value: stats.gravelAnalyzed.toFixed(0),
      suffix: 'rocks',
      color: 'from-gray-600 to-gray-400',
    },
    {
      icon: '⛓️',
      label: 'NFTs Minted',
      value: stats.nftsMinted.toFixed(0),
      suffix: 'tokens',
      color: 'from-purple-600 to-pink-600',
    },
    {
      icon: '☕',
      label: 'Coffees Consumed (Dev Team)',
      value: stats.coffeeConsumed.toFixed(0),
      suffix: 'cups',
      color: 'from-amber-700 to-amber-500',
    },
    {
      icon: '🎯',
      label: 'Unnecessary Features',
      value: stats.unnecessaryFeatures.toFixed(0),
      suffix: 'features',
      color: 'from-red-600 to-rose-600',
    },
    {
      icon: '💻',
      label: 'Lines of Code',
      value: stats.linesOfCode.toLocaleString(),
      suffix: 'LOC',
      color: 'from-green-600 to-emerald-600',
    },
    {
      icon: '🏗️',
      label: 'Infrastructure Complexity',
      value: stats.deploymentComplexity.toFixed(0),
      suffix: '%',
      color: 'from-indigo-600 to-violet-600',
    },
  ]

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {statCards.map((stat, index) => (
        <motion.div
          key={stat.label}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.1 }}
          className="relative group"
        >
          <div className="p-6 bg-gravel-900 rounded-xl border border-gravel-800 hover:border-gravel-600 transition-all">
            <div className="text-5xl mb-3">{stat.icon}</div>
            <div className="text-gravel-400 text-sm mb-2">{stat.label}</div>
            <div className="flex items-baseline gap-2">
              <motion.div
                key={stat.value}
                initial={{ scale: 1.2, color: '#FF6B35' }}
                animate={{ scale: 1, color: '#e7e5e4' }}
                className={`text-4xl font-bold font-mono bg-gradient-to-r ${stat.color} bg-clip-text text-transparent`}
              >
                {stat.value}
              </motion.div>
              <span className="text-gravel-500 text-sm">{stat.suffix}</span>
            </div>

            {/* Decorative gradient overlay */}
            <div className={`absolute inset-0 bg-gradient-to-r ${stat.color} opacity-0 group-hover:opacity-5 rounded-xl transition-opacity`} />
          </div>
        </motion.div>
      ))}
    </div>
  )
}
