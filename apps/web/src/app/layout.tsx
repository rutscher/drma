import type { Metadata, Viewport } from 'next'
import { Inter, JetBrains_Mono, Bebas_Neue } from 'next/font/google'
import { Providers } from '@/components/providers'
import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/next'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains-mono',
  display: 'swap',
})

const bebasNeue = Bebas_Neue({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-bebas-neue',
  display: 'swap',
})

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#0c0a09' },
  ],
}

export const metadata: Metadata = {
  title: {
    default: 'GRVL DRMA - The Most Over-Engineered Gravel Race Website',
    template: '%s | GRVL DRMA',
  },
  description:
    'A satirical gravel bike race featuring blockchain-verified digital race bibs, AI-powered gravel analysis, real-time 3D telemetry, and more unnecessary features than you can shake a drop bar at.',
  keywords: [
    'gravel',
    'cycling',
    'bike race',
    'over-engineered',
    'satire',
    'blockchain',
    'AI',
    '3D visualization',
    'WebGL',
    'grvl drma',
    'gravel drama',
  ],
  authors: [{ name: 'GRVL DRMA Team' }],
  creator: 'GRVL DRMA',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://grvldrma.com',
    title: 'GRVL DRMA - The Most Over-Engineered Gravel Race',
    description: 'Because a simple race website would be too boring.',
    siteName: 'GRVL DRMA',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'GRVL DRMA - The Most Over-Engineered Gravel Race',
    description: 'Because a simple race website would be too boring.',
    creator: '@grvldrma',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png',
  },
  manifest: '/manifest.json',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${inter.variable} ${jetbrainsMono.variable} ${bebasNeue.variable}`}
    >
      <body className="font-sans antialiased">
        <Providers>
          {children}
          <Analytics />
          <SpeedInsights />
        </Providers>
      </body>
    </html>
  )
}
