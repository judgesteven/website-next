import type { Metadata } from 'next'
import { Testing } from '@/components/Testing'

export const metadata: Metadata = {
  title: 'GameLayer Chat - AI-Powered Gamification Assistant',
  description: 'Get instant answers to your gamification questions with our AI-powered chat assistant. Expert guidance on gamification strategies and implementation.',
  openGraph: {
    title: 'GameLayer AI Chat Assistant',
    description: 'Get expert gamification guidance instantly',
  },
}

export default function ChatAssistantPage() {
  return <Testing />
}
