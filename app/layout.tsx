import type { Metadata } from 'next'
import { Space_Grotesk } from 'next/font/google'
import './globals.css'
import React from 'react'

const spaceGrotesk = Space_Grotesk({ 
  subsets: ['latin'],
  weight: ['400', '700']
})

export const metadata: Metadata = {
  title: "zkplant - Digital Botanical Preservation",
  description: "Preserving the future's flora in the heart of technology",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={spaceGrotesk.className}>{children}</body>
    </html>
  )
}

