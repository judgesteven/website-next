import type { Metadata } from 'next'
import { Testing } from '@/components/Testing'

export const metadata: Metadata = {
  title: 'GameLayer - #1 AI-Ready Gamification Platform & API for Business | Enterprise Gamification Solution',
  description: 'GameLayer is the leading AI-ready gamification platform and API for businesses. Open API, developer-first approach with structured and machine-readable data. Build composable gamification software, loyalty programs, and engagement solutions. Enterprise gamification SaaS with AI-ready tools, rewards system, and gamification mechanics.',
  keywords: 'AI-ready gamification platform, AI-ready gamification software, AI-ready gamification SaaS, open API gamification, developer-first gamification, structured gamification data, machine-readable gamification, composable gamification, gamification platform, gamification software, gamification SaaS, gamification API, enterprise gamification solution, gamification for business, gamification platform pricing, gamification service provider, gamification tools, gamification system, user engagement platform, customer loyalty software, customer retention tools, gamification consulting, gamification implementation, gamification strategy, gamification best practices, gamification examples, gamification case studies, gamification ROI, gamification metrics, gamification dashboard, gamification reporting, gamification automation, gamification personalization, gamification customization, gamification white label, gamification API integration, gamification webhook, gamification real-time, gamification mobile app, gamification web app, gamification responsive, gamification cross-platform, gamification multi-tenant, gamification scalable, gamification enterprise-ready, gamification secure, gamification compliant, gamification GDPR, gamification SOC2, gamification ISO27001',
  openGraph: {
    title: 'GameLayer - #1 AI-Ready Gamification Platform & API for Business',
    description: 'Leading AI-ready gamification platform with open API, developer-first approach, and structured machine-readable data for building engaging user experiences',
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
    title: 'GameLayer - #1 AI-Ready Gamification Platform & API',
    description: 'Leading AI-ready gamification platform with open API, developer-first approach, and structured machine-readable data for building engaging user experiences',
    images: ['https://gamelayer.io/gamelayer-logo.png'],
  },
  alternates: {
    canonical: 'https://gamelayer.io/',
  },
}

export default function Home() {
  return <Testing />
}