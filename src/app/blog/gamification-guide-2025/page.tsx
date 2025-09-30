import type { Metadata } from 'next'
import { BlogPost } from '@/components/BlogPost'
import BlogStructuredData from '@/components/BlogStructuredData'

export const metadata: Metadata = {
  title: 'Complete Gamification Guide 2025 - AI-Ready Gamification Trends & Strategies | GameLayer Blog',
  description: 'Comprehensive guide to gamification in 2025. Learn about latest AI-ready gamification trends, strategies, and best practices for implementing gamification in your business. Expert insights on gamification ROI and implementation.',
  keywords: 'gamification guide 2025, gamification trends 2025, gamification strategies, gamification best practices, gamification implementation, gamification ROI, gamification case studies, gamification tips, gamification examples, AI gamification 2025',
  openGraph: {
    title: 'Complete Gamification Guide 2025 - AI-Ready Trends & Strategies',
    description: 'Comprehensive guide to gamification in 2025. Learn about latest AI-ready gamification trends, strategies, and best practices for business implementation.',
    images: [
      {
        url: 'https://gamelayer.io/gamelayer-logo.png',
        width: 1200,
        height: 630,
        alt: 'Gamification Guide 2025',
      },
    ],
    url: 'https://gamelayer.io/blog/gamification-guide-2025',
    type: 'article',
    publishedTime: '2025-01-01T00:00:00.000Z',
    authors: ['GameLayer Team'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Complete Gamification Guide 2025 - AI-Ready Trends & Strategies',
    description: 'Comprehensive guide to gamification in 2025. Learn about latest AI-ready gamification trends, strategies, and best practices.',
    images: ['https://gamelayer.io/gamelayer-logo.png'],
  },
  alternates: {
    canonical: 'https://gamelayer.io/blog/gamification-guide-2025',
  },
}

export default function GamificationGuidePage() {
  return (
    <>
      <BlogStructuredData />
      <BlogPost />
    </>
  )
}
