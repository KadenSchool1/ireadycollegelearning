import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'DotGUI',
  description: 'A collection of unblocked games and tools',
  keywords: ['games', 'unblocked', 'emulators', 'tools'],
  authors: [{ name: 'DotLYHiyou' }],
  viewport: 'width=device-width, initial-scale=1',
  icons: {
    icon: '/favicon.ico',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="font-outfit min-h-screen flex flex-col">
        {children}
      </body>
    </html>
  )
}
