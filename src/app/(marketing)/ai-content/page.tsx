import type { Metadata } from 'next'
import { AIContent } from '@/components/AIContent'

export const metadata: Metadata = {
  title: 'GameLayer AI Content - AI-Enhanced Gamification Solutions',
  description: 'Discover how AI enhances gamification with GameLayer. AI-powered engagement strategies, personalization, and automated optimization.',
  openGraph: {
    title: 'GameLayer AI-Enhanced Gamification',
    description: 'Next-generation gamification powered by AI',
  },
}

export default function AIContentPage() {
  return <AIContent />
}
