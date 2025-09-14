import type { Metadata } from 'next'
import { ApiPage } from '@/components/ApiPage'

export const metadata: Metadata = {
  title: 'GameLayer API Documentation - Gamification API Reference',
  description: 'Comprehensive documentation for the GameLayer gamification API. Integration guides, endpoints reference, and implementation examples.',
  openGraph: {
    title: 'GameLayer API Documentation',
    description: 'Complete reference for GameLayer gamification API integration',
  },
}

export default function ApiDocPage() {
  return <ApiPage />
}
