import type { Metadata } from 'next'
import type { ReactNode } from 'react'
import { Providers } from './(layout)/providers'
import './globals.css'

export const metadata: Metadata = {
  title: 'TakeOver - Homebrew App Picker',
  description:
    'Select apps and generate a brew install command. Take over your Mac setup.',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className="dark">
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
