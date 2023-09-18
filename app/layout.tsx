import { ThemeProvider } from '@/components/ui/theme-provider'
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'WebTrivia',
  description: 'Online multiplayer Trivia game. You make the rules, you play it.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head />
      <body className={inter.className}>
        <ThemeProvider attribute='class' defaultTheme='system' enableSystem>
          <main className="bg-background dark:bg-slate-900 w-full min-h-screen h-full">
            {children}
          </main>
        </ThemeProvider>
      </body>
    </html>
  )
}
