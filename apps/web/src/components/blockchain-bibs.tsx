'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'

export function BlockchainBibs() {
  const [minting, setMinting] = useState(false)
  const [minted, setMinted] = useState(false)
  const [bibNumber, setBibNumber] = useState<number | null>(null)

  const mintBib = () => {
    setMinting(true)
    // Simulate blockchain transaction
    setTimeout(() => {
      setBibNumber(Math.floor(Math.random() * 9999) + 1)
      setMinted(true)
      setMinting(false)
    }, 3000)
  }

  return (
    <div className="max-w-4xl mx-auto">
      <div className="p-8 bg-gradient-to-br from-purple-900/20 to-pink-900/20 rounded-2xl border-2 border-purple-500/30">
        <div className="text-center mb-8">
          <div className="text-8xl mb-4">⛓️</div>
          <h3 className="text-3xl font-bold text-gravel-100 mb-2">NFT Race Bibs</h3>
          <p className="text-gravel-400">
            Your race bib is minted as an NFT on the Ethereum blockchain
            <br />
            <span className="text-sm">(Gas fees not included. Actually, nothing is included. This is fake.)</span>
          </p>
        </div>

        {!minted ? (
          <div className="text-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={mintBib}
              disabled={minting}
              className="px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold text-lg rounded-full shadow-lg disabled:opacity-50"
            >
              {minting ? (
                <span className="flex items-center gap-2">
                  <motion.span
                    animate={{ rotate: 360 }}
                    transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                  >
                    ⚙️
                  </motion.span>
                  Minting NFT... (Waiting for 6 confirmations)
                </span>
              ) : (
                'Mint Your NFT Bib'
              )}
            </motion.button>

            {minting && (
              <div className="mt-8 space-y-2">
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-gravel-400 font-mono text-sm"
                >
                  <div>⛏️ Mining block...</div>
                  <div>📝 Generating smart contract...</div>
                  <div>🔐 Calculating cryptographic hash...</div>
                  <div>💰 Burning unnecessary gas fees...</div>
                  <div>🌍 Contributing to climate change...</div>
                </motion.div>
              </div>
            )}
          </div>
        ) : (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="space-y-6"
          >
            <div className="p-8 bg-gradient-to-br from-purple-600/20 to-pink-600/20 rounded-xl border-2 border-purple-400/50">
              <div className="text-center">
                <div className="text-6xl font-display text-transparent bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text mb-4">
                  BIB #{bibNumber}
                </div>
                <div className="text-gravel-400 font-mono text-sm space-y-1">
                  <div>Token ID: 0x{Math.random().toString(16).slice(2, 42)}</div>
                  <div>Contract: 0xc0ffee{Math.random().toString(16).slice(2, 36)}</div>
                  <div>Chain: Ethereum Mainnet (definitely not a test network)</div>
                  <div>Gas Used: {(Math.random() * 0.1 + 0.05).toFixed(4)} ETH</div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="p-4 bg-gravel-900/50 rounded-lg text-center">
                <div className="text-4xl mb-2">🎨</div>
                <div className="text-gravel-400 text-sm">Unique Artwork</div>
                <div className="text-gravel-200 font-bold">Auto-Generated</div>
              </div>
              <div className="p-4 bg-gravel-900/50 rounded-lg text-center">
                <div className="text-4xl mb-2">💎</div>
                <div className="text-gravel-400 text-sm">Rarity</div>
                <div className="text-gravel-200 font-bold">Ultra Rare</div>
              </div>
              <div className="p-4 bg-gravel-900/50 rounded-lg text-center">
                <div className="text-4xl mb-2">📈</div>
                <div className="text-gravel-400 text-sm">Market Value</div>
                <div className="text-gravel-200 font-bold">$0.00</div>
              </div>
            </div>

            <div className="flex justify-center gap-4">
              <button className="px-6 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors">
                View on OpenSea (lol)
              </button>
              <button className="px-6 py-2 bg-gravel-800 text-gravel-200 rounded-lg hover:bg-gravel-700 transition-colors">
                Download Certificate
              </button>
            </div>

            <div className="p-4 bg-yellow-500/10 border border-yellow-500/30 rounded-lg">
              <p className="text-sm text-yellow-200 text-center">
                ⚠️ This NFT gives you absolutely no utility, ownership rights, or value whatsoever
              </p>
            </div>
          </motion.div>
        )}
      </div>
    </div>
  )
}
