'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'

export function GravelAnalyzer() {
  const [analyzing, setAnalyzing] = useState(false)
  const [result, setResult] = useState<{
    type: string
    confidence: number
    properties: { roughness: number; dustiness: number; chunkiness: number }
  } | null>(null)

  const analyzeGravel = () => {
    setAnalyzing(true)
    setResult(null)

    // Simulate AI analysis
    setTimeout(() => {
      const gravelTypes = [
        'Premium Belgian Gravel',
        'Artisanal Limestone Chunks',
        'Organic Free-Range Pebbles',
        'Locally-Sourced Crushed Rock',
        'Imported Italian Gravel',
        'Sustainable Recycled Concrete',
        'Boutique Weathered Shale',
      ]

      setResult({
        type: gravelTypes[Math.floor(Math.random() * gravelTypes.length)]!,
        confidence: 85 + Math.random() * 15,
        properties: {
          roughness: Math.random() * 100,
          dustiness: Math.random() * 100,
          chunkiness: Math.random() * 100,
        },
      })
      setAnalyzing(false)
    }, 2000)
  }

  return (
    <div className="max-w-4xl mx-auto">
      <div className="p-8 bg-gradient-to-br from-gravel-900 to-gravel-950 rounded-2xl border border-gravel-700">
        <div className="text-center mb-8">
          <div className="w-32 h-32 mx-auto mb-4 bg-gravel-800 rounded-full flex items-center justify-center text-6xl">
            🪨
          </div>
          <p className="text-gravel-400">
            Upload a photo of gravel and our TensorFlow.js-powered AI will identify it
            <br />
            <span className="text-sm">(Disclaimer: This is completely made up)</span>
          </p>
        </div>

        <div className="flex justify-center mb-8">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={analyzeGravel}
            disabled={analyzing}
            className="px-8 py-4 bg-gradient-to-r from-brand-primary to-brand-secondary text-white font-bold text-lg rounded-full shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {analyzing ? (
              <span className="flex items-center gap-2">
                <motion.span
                  animate={{ rotate: 360 }}
                  transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                >
                  ⚙️
                </motion.span>
                Analyzing with AI...
              </span>
            ) : (
              'Analyze Random Gravel'
            )}
          </motion.button>
        </div>

        {result && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-6"
          >
            <div className="p-6 bg-gravel-800/50 rounded-xl border border-gravel-700">
              <h3 className="text-2xl font-bold text-gravel-100 mb-2">Analysis Complete</h3>
              <p className="text-3xl font-display text-brand-primary mb-4">{result.type}</p>
              <div className="flex items-center gap-2">
                <span className="text-gravel-400">Confidence:</span>
                <span className="text-2xl font-bold text-green-400">{result.confidence.toFixed(1)}%</span>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="p-4 bg-gravel-800/30 rounded-lg">
                <div className="text-gravel-400 mb-2">Roughness Index</div>
                <div className="text-2xl font-bold text-orange-400 mb-2">
                  {result.properties.roughness.toFixed(1)}/100
                </div>
                <div className="h-2 bg-gravel-900 rounded-full overflow-hidden">
                  <motion.div
                    className="h-full bg-orange-500"
                    initial={{ width: 0 }}
                    animate={{ width: `${result.properties.roughness}%` }}
                  />
                </div>
              </div>

              <div className="p-4 bg-gravel-800/30 rounded-lg">
                <div className="text-gravel-400 mb-2">Dustiness Level</div>
                <div className="text-2xl font-bold text-yellow-400 mb-2">
                  {result.properties.dustiness.toFixed(1)}/100
                </div>
                <div className="h-2 bg-gravel-900 rounded-full overflow-hidden">
                  <motion.div
                    className="h-full bg-yellow-500"
                    initial={{ width: 0 }}
                    animate={{ width: `${result.properties.dustiness}%` }}
                  />
                </div>
              </div>

              <div className="p-4 bg-gravel-800/30 rounded-lg">
                <div className="text-gravel-400 mb-2">Chunkiness Factor</div>
                <div className="text-2xl font-bold text-purple-400 mb-2">
                  {result.properties.chunkiness.toFixed(1)}/100
                </div>
                <div className="h-2 bg-gravel-900 rounded-full overflow-hidden">
                  <motion.div
                    className="h-full bg-purple-500"
                    initial={{ width: 0 }}
                    animate={{ width: `${result.properties.chunkiness}%` }}
                  />
                </div>
              </div>
            </div>

            <div className="p-4 bg-brand-primary/10 border border-brand-primary/30 rounded-lg">
              <p className="text-sm text-gravel-300 text-center">
                🤖 Powered by TensorFlow.js, trained on 10 million gravel images*
                <br />
                <span className="text-xs text-gravel-500">*Not actually trained on anything</span>
              </p>
            </div>
          </motion.div>
        )}
      </div>
    </div>
  )
}
