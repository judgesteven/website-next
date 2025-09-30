import type { Metadata } from 'next'
import { Testing } from '@/components/Testing'

export const metadata: Metadata = {
  title: 'GameLayer Chat - AI-Powered Gamification Assistant & Expert Guidance',
  description: 'Get instant answers to your gamification questions with our AI-powered chat assistant. Expert guidance on gamification strategies, implementation, and best practices. Free gamification consultation and support.',
  keywords: 'gamification chat, gamification assistant, gamification help, gamification support, gamification guidance, gamification consultation, gamification expert, gamification advice, gamification chatbot, gamification AI assistant',
  openGraph: {
    title: 'GameLayer AI Chat Assistant - Expert Gamification Guidance',
    description: 'Get instant expert guidance on gamification strategies and implementation. AI-powered chat assistant for gamification questions and support.',
    images: [
      {
        url: 'https://gamelayer.io/gamelayer-logo.png',
        width: 1200,
        height: 630,
        alt: 'GameLayer AI Chat Assistant',
      },
    ],
    url: 'https://gamelayer.io/chat',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'GameLayer AI Chat Assistant - Expert Gamification Guidance',
    description: 'Get instant expert guidance on gamification strategies and implementation. AI-powered chat assistant for gamification questions.',
    images: ['https://gamelayer.io/gamelayer-logo.png'],
  },
  alternates: {
    canonical: 'https://gamelayer.io/chat',
  },
}

export default function ChatAssistantPage() {
  return <Testing />
}
