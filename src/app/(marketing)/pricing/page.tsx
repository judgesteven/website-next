import type { Metadata } from 'next'
import { Pricing } from '@/components/Pricing'
import PricingStructuredData from '@/components/PricingStructuredData'

export const metadata: Metadata = {
  title: 'GameLayer Pricing - AI-Ready Gamification Platform Plans | €100-€2,500/month',
  description: 'Transparent pricing for GameLayer gamification platform. Starter (€100), Growth (€1,000), Scale (€2,500), Enterprise plans. 30-day free trial, no credit card required. AI-ready gamification API with open access.',
  keywords: 'gamification pricing, gamification platform cost, gamification API pricing, enterprise gamification pricing, gamification software cost, gamification SaaS pricing, gamification platform plans, gamification service pricing',
  openGraph: {
    title: 'GameLayer Pricing - Transparent Gamification Platform Plans',
    description: 'Choose the perfect GameLayer plan for your business. From €100/month for startups to custom Enterprise solutions. AI-ready gamification API with 30-day free trial.',
    images: [
      {
        url: 'https://gamelayer.io/gamelayer-logo.png',
        width: 1200,
        height: 630,
        alt: 'GameLayer Pricing Plans',
      },
    ],
    url: 'https://gamelayer.io/pricing',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'GameLayer Pricing - Transparent Gamification Plans',
    description: 'Choose the perfect GameLayer plan for your business. From €100/month for startups to custom Enterprise solutions.',
    images: ['https://gamelayer.io/gamelayer-logo.png'],
  },
  alternates: {
    canonical: 'https://gamelayer.io/pricing',
  },
}

export default function PricingPage() {
  return (
    <>
      <PricingStructuredData />
      <Pricing />
    </>
  )
}
