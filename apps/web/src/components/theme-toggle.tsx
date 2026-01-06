'use client'

import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

export function ThemeToggle() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  const themes = [
    { name: 'light', icon: '☀️', label: 'Light' },
    { name: 'dark', icon: '🌙', label: 'Dark' },
    { name: 'gravel', icon: '🪨', label: 'Gravel Mode™' },
  ]

  return (
    <div className="flex items-center gap-2 p-2 bg-gravel-900/80 backdrop-blur-sm rounded-full border border-gravel-700">
      {themes.map((t) => (
        <motion.button
          key={t.name}
          onClick={() => setTheme(t.name)}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
            theme === t.name
              ? 'bg-gradient-to-r from-brand-primary to-brand-secondary text-white'
              : 'text-gravel-400 hover:text-gravel-200'
          }`}
          title={t.label}
        >
          <span className="mr-2">{t.icon}</span>
          {t.label}
        </motion.button>
      ))}
    </div>
  )
}
