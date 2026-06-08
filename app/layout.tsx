import type { Metadata } from 'next'
import './globals.css'
import HydrationGuard from '@/components/HydrationGuard'

export const metadata: Metadata = {
  title: 'VICOMETAL — Engenharia de Precisão Industrial',
  description: 'Grupo Vicometal — Soluções industriais em metalomecânica, estruturas metálicas, montagem e manutenção. Desde 2001 em mais de 15 países.',
  keywords: 'metalomecânica, estruturas metálicas, fabrico industrial, corte laser, quinagem, soldadura, Vicometal, Portugal',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt" className="dark no-js" suppressHydrationWarning>
      <body className="min-h-screen overflow-x-hidden">
        <HydrationGuard />
        {children}
      </body>
    </html>
  )
}
