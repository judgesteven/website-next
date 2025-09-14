import type { Metadata } from 'next'
import { LoginEmail } from '@/components/LoginEmail'

export const metadata: Metadata = {
  title: 'GameLayer Email Login',
  description: 'Login to GameLayer with your email address.',
  robots: {
    index: false,
    follow: true,
  },
}

export default function LoginEmailPage() {
  return <LoginEmail />
}
