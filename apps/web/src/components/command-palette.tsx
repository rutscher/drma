'use client'

import { useEffect, useState } from 'react'
import { Command } from 'cmdk'
import { motion, AnimatePresence } from 'framer-motion'

interface CommandPaletteProps {
  open: boolean
  onOpenChange: (open: boolean) => void
}

export function CommandPalette({ open, onOpenChange }: CommandPaletteProps) {
  const [search, setSearch] = useState('')

  useEffect(() => {
    if (!open) {
      setSearch('')
    }
  }, [open])

  const commands = [
    { icon: '🏠', label: 'Home', shortcut: 'H', action: () => console.log('Home') },
    { icon: '🚴', label: 'Register for Race', shortcut: 'R', action: () => console.log('Register') },
    { icon: '📊', label: 'View Live Telemetry', shortcut: 'T', action: () => console.log('Telemetry') },
    { icon: '🧠', label: 'AI Gravel Analysis', shortcut: 'A', action: () => console.log('AI') },
    { icon: '⛓️', label: 'Mint NFT Bib', shortcut: 'N', action: () => console.log('NFT') },
    { icon: '🗺️', label: '3D Terrain View', shortcut: '3', action: () => console.log('3D') },
    { icon: '📈', label: 'Race Statistics', shortcut: 'S', action: () => console.log('Stats') },
    { icon: '⚙️', label: 'Settings', shortcut: ',', action: () => console.log('Settings') },
    { icon: '🌙', label: 'Toggle Dark Mode', shortcut: 'D', action: () => console.log('Dark') },
    { icon: '🪨', label: 'Toggle Gravel Mode', shortcut: 'G', action: () => console.log('Gravel') },
    { icon: '❓', label: 'Help (lol)', shortcut: '?', action: () => console.log('Help') },
    { icon: '🎮', label: 'Konami Code Easter Egg', shortcut: '↑↑↓↓', action: () => console.log('Konami') },
  ]

  return (
    <AnimatePresence>
      {open && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => onOpenChange(false)}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50"
          />

          {/* Command Palette */}
          <div className="fixed inset-0 z-50 flex items-start justify-center pt-[20vh] px-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: -20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: -20 }}
              transition={{ duration: 0.2 }}
              className="w-full max-w-2xl"
            >
              <Command className="rounded-xl border border-gravel-700 bg-gravel-900/95 backdrop-blur-xl shadow-2xl overflow-hidden">
                <div className="flex items-center border-b border-gravel-800 px-4">
                  <span className="text-gravel-500 mr-3">🔍</span>
                  <Command.Input
                    value={search}
                    onValueChange={setSearch}
                    placeholder="Type a command or search... (because we're fancy)"
                    className="flex-1 bg-transparent py-4 text-gravel-100 placeholder:text-gravel-500 outline-none"
                  />
                  <kbd className="px-2 py-1 text-xs bg-gravel-800 text-gravel-400 rounded border border-gravel-700">
                    ESC
                  </kbd>
                </div>

                <Command.List className="max-h-[400px] overflow-y-auto p-2">
                  <Command.Empty className="py-6 text-center text-sm text-gravel-500">
                    No results found. Try being more unnecessarily specific.
                  </Command.Empty>

                  <Command.Group heading="Commands" className="text-gravel-500 text-xs font-semibold px-2 py-1">
                    {commands.map((cmd) => (
                      <Command.Item
                        key={cmd.label}
                        onSelect={() => {
                          cmd.action()
                          onOpenChange(false)
                        }}
                        className="flex items-center gap-3 px-3 py-3 rounded-lg cursor-pointer data-[selected=true]:bg-gravel-800 text-gravel-200 hover:text-gravel-100 transition-colors group"
                      >
                        <span className="text-xl">{cmd.icon}</span>
                        <span className="flex-1">{cmd.label}</span>
                        <kbd className="px-2 py-1 text-xs bg-gravel-800 text-gravel-500 rounded border border-gravel-700 group-data-[selected=true]:bg-gravel-700">
                          {cmd.shortcut}
                        </kbd>
                      </Command.Item>
                    ))}
                  </Command.Group>
                </Command.List>

                <div className="border-t border-gravel-800 px-4 py-3 flex items-center justify-between text-xs text-gravel-500">
                  <div className="flex items-center gap-4">
                    <span>↑↓ navigate</span>
                    <span>⏎ select</span>
                    <span>esc close</span>
                  </div>
                  <span className="font-mono">v1.0.0-unnecessarily-complex</span>
                </div>
              </Command>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  )
}
