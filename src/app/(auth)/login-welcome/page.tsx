import type { Metadata } from 'next'
import { LoginWelcome } from '@/components/LoginWelcome'

export const metadata: Metadata = {
  title: 'Welcome to GameLayer - Login',
  description: 'Welcome to GameLayer. Access your gamification dashboard and start engaging your users.',
  robots: {
    index: false,
    follow: true,
  },
}

export default function LoginWelcomePage() {
  return <LoginWelcome />
}
