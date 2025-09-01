import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Untitled UI - Super Simple Banking',
  description: 'Banking technology that has your back. Simple, transparent banking. No hidden fees and free overdrafts.',
  keywords: 'banking, fintech, simple banking, transparent banking, no fees',
  authors: [{ name: 'Untitled UI' }],
  viewport: 'width=device-width, initial-scale=1',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}