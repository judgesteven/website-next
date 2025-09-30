import type { Metadata } from 'next'
import { ApiPage } from '@/components/ApiPage'
import ApiStructuredData from '@/components/ApiStructuredData'

export const metadata: Metadata = {
  title: 'GameLayer API Documentation - AI-Ready Gamification API Reference & Integration Guide',
  description: 'Complete GameLayer API documentation with RESTful endpoints, SDKs, and integration examples. AI-ready gamification API with structured data, webhooks, and developer-first approach. Open API with comprehensive documentation.',
  keywords: 'gamification API, gamification API documentation, gamification API reference, gamification integration, gamification SDK, gamification webhook, gamification REST API, gamification API guide, gamification developer tools, gamification API examples',
  openGraph: {
    title: 'GameLayer API Documentation - AI-Ready Gamification API',
    description: 'Complete reference for GameLayer gamification API integration. RESTful endpoints, SDKs, webhooks, and structured data for AI-ready gamification.',
    images: [
      {
        url: 'https://gamelayer.io/gamelayer-logo.png',
        width: 1200,
        height: 630,
        alt: 'GameLayer API Documentation',
      },
    ],
    url: 'https://gamelayer.io/api',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'GameLayer API Documentation - AI-Ready Gamification API',
    description: 'Complete reference for GameLayer gamification API integration. RESTful endpoints, SDKs, and structured data.',
    images: ['https://gamelayer.io/gamelayer-logo.png'],
  },
  alternates: {
    canonical: 'https://gamelayer.io/api',
  },
}

export default function ApiDocPage() {
  return (
    <>
      <ApiStructuredData />
      <ApiPage />
    </>
  )
}
