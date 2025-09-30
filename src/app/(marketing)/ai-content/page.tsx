import type { Metadata } from 'next'
import { AIContent } from '@/components/AIContent'

export const metadata: Metadata = {
  title: 'GameLayer AI Content - AI-Powered Gamification Solutions & Machine Learning Integration',
  description: 'Discover how GameLayer integrates with AI to create intelligent gamification experiences. AI-ready platform with machine learning capabilities, automated workflows, and intelligent gamification strategies. Open API with structured data for AI systems.',
  keywords: 'AI gamification, AI-powered gamification, machine learning gamification, AI gamification platform, intelligent gamification, AI gamification API, automated gamification, AI gamification solutions, machine learning gamification platform, AI gamification integration',
  openGraph: {
    title: 'GameLayer AI Content - AI-Powered Gamification Solutions',
    description: 'Discover how GameLayer integrates with AI to create intelligent gamification experiences. AI-ready platform with machine learning capabilities and automated workflows.',
    images: [
      {
        url: 'https://gamelayer.io/gamelayer-logo.png',
        width: 1200,
        height: 630,
        alt: 'GameLayer AI Content',
      },
    ],
    url: 'https://gamelayer.io/ai-content',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'GameLayer AI Content - AI-Powered Gamification Solutions',
    description: 'Discover how GameLayer integrates with AI to create intelligent gamification experiences. AI-ready platform with machine learning capabilities.',
    images: ['https://gamelayer.io/gamelayer-logo.png'],
  },
  alternates: {
    canonical: 'https://gamelayer.io/ai-content',
  },
}

export default function AIContentPage() {
  return <AIContent />
}
