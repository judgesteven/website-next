import type { Metadata } from 'next'
import Dashboard from '@/components/Dashboard'

export const metadata: Metadata = {
  title: 'GameLayer Admin Dashboard',
  description: 'Manage your gamification projects, track metrics, and optimize user engagement.',
  robots: {
    index: false,
    follow: true,
  },
}

export default function DashboardAdminPage() {
  return <Dashboard />
}
