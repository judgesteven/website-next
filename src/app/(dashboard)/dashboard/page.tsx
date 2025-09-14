import type { Metadata } from 'next'
import { DashboardLogin } from '@/components/DashboardLogin'

export const metadata: Metadata = {
  title: 'GameLayer Dashboard - Login',
  description: 'Access your GameLayer dashboard to manage your gamification projects and track performance metrics.',
  robots: {
    index: false,
    follow: true,
  },
}

export default function DashboardPage() {
  return <DashboardLogin />
}
