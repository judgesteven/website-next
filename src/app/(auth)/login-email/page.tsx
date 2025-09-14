import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'GameLayer Email Login',
  description: 'Login to GameLayer with your email address.',
  robots: {
    index: false,
    follow: true,
  },
}

export default function LoginEmailPage() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="max-w-md w-full bg-white rounded-lg shadow-md p-8">
        <h1 className="text-2xl font-bold text-center mb-6">Email Login</h1>
        <p className="text-gray-600 text-center">Login functionality coming soon...</p>
      </div>
    </div>
  )
}
