import type { Metadata } from 'next'
import { Testing } from '@/components/Testing'

export const metadata: Metadata = {
  title: 'GameLayer - #1 Gamification Platform & API for Business | Enterprise Gamification Solution',
  description: 'GameLayer is the leading gamification platform and API for businesses. Build gamification software, loyalty programs, and engagement solutions. Enterprise gamification SaaS with gamification tools, rewards system, and gamification mechanics.',
  keywords: 'gamification platform, gamification software, gamification SaaS, gamification API, enterprise gamification solution, gamification for business, gamification platform pricing, gamification service provider, gamification tools, gamification system, user engagement platform, customer loyalty software, customer retention tools, gamification consulting, gamification implementation, gamification strategy, gamification best practices, gamification examples, gamification case studies, gamification ROI, gamification metrics, gamification dashboard, gamification reporting, gamification automation, gamification personalization, gamification customization, gamification white label, gamification API integration, gamification webhook, gamification real-time, gamification mobile app, gamification web app, gamification responsive, gamification cross-platform, gamification multi-tenant, gamification scalable, gamification enterprise-ready, gamification secure, gamification compliant, gamification GDPR, gamification SOC2, gamification ISO27001',
  openGraph: {
    title: 'GameLayer - #1 Gamification Platform & API for Business',
    description: 'Leading gamification platform and API for building engaging user experiences',
    images: [
      {
        url: 'https://gamelayer.io/gamelayer-logo.png',
        width: 1200,
        height: 630,
        alt: 'GameLayer Logo',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'GameLayer - #1 Gamification Platform & API',
    description: 'Leading gamification platform and API for building engaging user experiences',
    images: ['https://gamelayer.io/gamelayer-logo.png'],
  },
  alternates: {
    canonical: 'https://gamelayer.io/',
  },
}

export default function Home() {
  return <Testing />
}