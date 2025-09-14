import type { Metadata } from 'next'
import { Pricing } from '@/components/Pricing'

export const metadata: Metadata = {
  title: 'GameLayer Pricing - Gamification Platform & API Pricing Plans',
  description: 'Flexible pricing plans for GameLayer gamification platform and API. Choose from Starter, Growth, Scale, and Enterprise plans to match your business needs.',
  openGraph: {
    title: 'GameLayer Pricing Plans',
    description: 'Flexible pricing for gamification solutions that grow with your business',
  },
}

export default function PricingPage() {
  return <Pricing />
}
