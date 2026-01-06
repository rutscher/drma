'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

interface RacerData {
  id: number
  name: string
  position: number
  speed: number
  heartRate: number
  power: number
  cadence: number
  elevation: number
  gravelType: string
  dustLevel: number
}

export function LiveTelemetry() {
  const [racers, setRacers] = useState<RacerData[]>([])

  useEffect(() => {
    // Simulate live data updates
    const generateRacers = () => {
      return Array.from({ length: 10 }, (_, i) => ({
        id: i + 1,
        name: `Rider ${i + 1}`,
        position: i + 1,
        speed: 25 + Math.random() * 15,
        heartRate: 140 + Math.random() * 40,
        power: 200 + Math.random() * 150,
        cadence: 80 + Math.random() * 20,
        elevation: 500 + Math.random() * 300,
        gravelType: ['Chunky', 'Smooth', 'Wet', 'Dusty', 'Mixed'][Math.floor(Math.random() * 5)]!,
        dustLevel: Math.random() * 100,
      }))
    }

    setRacers(generateRacers())

    const interval = setInterval(() => {
      setRacers((prev) =>
        prev.map((racer) => ({
          ...racer,
          speed: Math.max(0, racer.speed + (Math.random() - 0.5) * 2),
          heartRate: Math.max(100, Math.min(200, racer.heartRate + (Math.random() - 0.5) * 5)),
          power: Math.max(0, racer.power + (Math.random() - 0.5) * 20),
          cadence: Math.max(60, Math.min(110, racer.cadence + (Math.random() - 0.5) * 3)),
          dustLevel: Math.random() * 100,
        }))
      )
    }, 1000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between p-4 bg-gravel-900 rounded-lg border border-gravel-700">
        <div className="flex items-center gap-2">
          <span className="relative flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
          </span>
          <span className="text-gravel-200 font-mono">LIVE</span>
        </div>
        <span className="text-gravel-400 text-sm font-mono">
          Updates via WebSocket (simulated)
        </span>
      </div>

      <div className="grid gap-2">
        {racers.map((racer) => (
          <motion.div
            key={racer.id}
            layout
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="p-4 bg-gravel-900/50 backdrop-blur rounded-lg border border-gravel-800 hover:border-brand-primary transition-colors"
          >
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-3">
                <span className="text-2xl font-bold text-brand-primary">#{racer.position}</span>
                <span className="text-lg text-gravel-100">{racer.name}</span>
              </div>
              <span className="px-3 py-1 bg-gravel-800 text-gravel-300 rounded-full text-sm font-mono">
                {racer.gravelType}
              </span>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 text-sm">
              <div>
                <div className="text-gravel-500">Speed</div>
                <div className="text-gravel-100 font-mono font-bold">
                  {racer.speed.toFixed(1)} km/h
                </div>
              </div>
              <div>
                <div className="text-gravel-500">Heart Rate</div>
                <div className="text-red-400 font-mono font-bold">{Math.round(racer.heartRate)} bpm</div>
              </div>
              <div>
                <div className="text-gravel-500">Power</div>
                <div className="text-yellow-400 font-mono font-bold">{Math.round(racer.power)}W</div>
              </div>
              <div>
                <div className="text-gravel-500">Cadence</div>
                <div className="text-blue-400 font-mono font-bold">{Math.round(racer.cadence)} rpm</div>
              </div>
              <div>
                <div className="text-gravel-500">Elevation</div>
                <div className="text-green-400 font-mono font-bold">{Math.round(racer.elevation)}m</div>
              </div>
              <div>
                <div className="text-gravel-500">Dust Level</div>
                <div className="text-orange-400 font-mono font-bold">
                  {Math.round(racer.dustLevel)}%
                </div>
              </div>
            </div>

            {/* Dust level progress bar */}
            <div className="mt-3 h-2 bg-gravel-800 rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-gradient-to-r from-orange-600 to-orange-400"
                initial={{ width: 0 }}
                animate={{ width: `${racer.dustLevel}%` }}
                transition={{ duration: 0.3 }}
              />
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
