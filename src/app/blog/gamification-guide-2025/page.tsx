import type { Metadata } from 'next'
import { BlogPost } from '@/components/BlogPost'

export const metadata: Metadata = {
  title: 'Complete Gamification Guide 2025 - GameLayer Blog',
  description: 'Comprehensive guide to gamification in 2025. Learn about latest trends, strategies, and best practices for implementing gamification in your business.',
  openGraph: {
    title: 'Gamification Guide 2025',
    description: 'Complete guide to gamification trends and strategies for 2025',
    type: 'article',
    publishedTime: '2025-01-01T00:00:00.000Z',
    authors: ['GameLayer Team'],
  },
}

export default function GamificationGuidePage() {
  return <BlogPost />
}
