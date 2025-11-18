import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Nebula Contingency Ads - Contas Blindadas para Mídia Paga',
  description: 'Contas de Google Ads, Meta Ads e TikTok Ads para contingência, com proxies residenciais inclusos, suporte de especialistas e entrega rápida.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  )
}

