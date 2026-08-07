import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Inter, Space_Grotesk, IBM_Plex_Sans } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space-grotesk',
  display: 'swap',
})

const plex = IBM_Plex_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-plex',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://nikhiljadhav.com'),
  title: {
    default: 'Nikhil Jadhav — UX Architect & Automotive HMI Design Leader',
    template: '%s — Nikhil Jadhav',
  },
  description:
    'Nikhil Jadhav is a UX Architect and Automotive HMI Design Leader with 17+ years of experience across Software Defined Vehicles, Android Automotive OS, IVI, clusters, HUD and AI-assisted design.',
  keywords: [
    'UX Architect',
    'Automotive HMI',
    'Android Automotive OS',
    'In-Vehicle Infotainment',
    'Instrument Cluster',
    'Head-Up Display',
    'Design Systems',
    'AI DesignOps',
    'Nikhil Jadhav',
  ],
  authors: [{ name: 'Nikhil Jadhav' }],
  creator: 'Nikhil Jadhav',
  openGraph: {
    type: 'website',
    title: 'Nikhil Jadhav — UX Architect & Automotive HMI Design Leader',
    description:
      '17+ years designing digital cockpits, IVI, clusters, HUD and AI-assisted design systems for global automotive brands.',
    siteName: 'Nikhil Jadhav',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Nikhil Jadhav — UX Architect & Automotive HMI Design Leader',
    description:
      '17+ years designing digital cockpits, IVI, clusters, HUD and AI-assisted design systems for global automotive brands.',
  },
  generator: 'v0.app',
}

export const viewport: Viewport = {
  themeColor: '#0f1115',
  colorScheme: 'dark',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${spaceGrotesk.variable} ${plex.variable} bg-background`}
    >
      <body className="font-sans antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
