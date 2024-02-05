import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Menpo',
  description: 'Techno music producer from France',
  metadataBase: new URL('https://menpo.fr'),
  openGraph: {
    title: 'Menpo',
    description: 'Techno music producer from France',
    images: 'url/opengraph-image.jpg'
  },
  twitter: {

    title: 'Menpo',
    description: 'Techno music producer from France',
    images: 'url/twitter-image.jpg'
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
