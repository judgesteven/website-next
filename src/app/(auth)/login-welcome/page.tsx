import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Welcome to GameLayer - Login',
  description: 'Welcome to GameLayer. Access your gamification dashboard and start engaging your users.',
  robots: {
    index: false,
    follow: true,
  },
}

export default function LoginWelcomePage() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="max-w-md w-full bg-white rounded-lg shadow-md p-8">
        <h1 className="text-2xl font-bold text-center mb-6">Welcome to GameLayer</h1>
        <p className="text-gray-600 text-center">Welcome page functionality coming soon...</p>
      </div>
    </div>
  )
}
