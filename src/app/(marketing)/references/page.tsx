import type { Metadata } from 'next'
import { References } from '@/components/References'
import ReferencesStructuredData from '@/components/ReferencesStructuredData'

export const metadata: Metadata = {
  title: 'GameLayer References - Customer Success Stories & Gamification Case Studies',
  description: 'Real-world GameLayer success stories from leading businesses. See how companies increased user engagement by 40-60% and customer retention by 25-40% using our AI-ready gamification platform. Case studies and implementation examples.',
  keywords: 'gamification case studies, gamification success stories, gamification examples, gamification ROI, gamification results, gamification implementation, gamification customer stories, gamification business results, gamification engagement increase, gamification retention improvement',
  openGraph: {
    title: 'GameLayer Customer Success Stories - Gamification Case Studies',
    description: 'See how businesses achieve 40-60% engagement increase and 25-40% retention improvement with GameLayer gamification platform. Real customer success stories and case studies.',
    images: [
      {
        url: 'https://gamelayer.io/gamelayer-logo.png',
        width: 1200,
        height: 630,
        alt: 'GameLayer Customer Success Stories',
      },
    ],
    url: 'https://gamelayer.io/references',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'GameLayer Customer Success Stories - Gamification Case Studies',
    description: 'See how businesses achieve 40-60% engagement increase with GameLayer gamification platform. Real customer success stories.',
    images: ['https://gamelayer.io/gamelayer-logo.png'],
  },
  alternates: {
    canonical: 'https://gamelayer.io/references',
  },
}

export default function ReferencesPage() {
  return (
    <>
      <ReferencesStructuredData />
      <References />
    </>
  )
}
