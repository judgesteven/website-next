import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Terms of Service - GameLayer',
  description: 'GameLayer Terms of Service - Terms and conditions for using our gamification platform.',
}

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-gray-900 text-white py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold mb-8">Terms of Service</h1>
        <div className="prose prose-invert max-w-none">
          <p className="text-lg text-gray-300 mb-6">
            These terms of service govern your use of GameLayer&apos;s gamification platform and services.
          </p>
          <h2 className="text-2xl font-semibold text-white mb-4">Acceptance of Terms</h2>
          <p className="text-gray-300 mb-4">
            By accessing or using our services, you agree to be bound by these terms and conditions.
          </p>
          <h2 className="text-2xl font-semibold text-white mb-4">Use of Services</h2>
          <p className="text-gray-300 mb-4">
            You may use our services only for lawful purposes and in accordance with these terms. 
            You are responsible for ensuring your use complies with applicable laws and regulations.
          </p>
          <h2 className="text-2xl font-semibold text-white mb-4">Payment Terms</h2>
          <p className="text-gray-300 mb-4">
            Subscription fees are billed in advance on a monthly or annual basis. 
            All fees are non-refundable unless otherwise specified.
          </p>
          <h2 className="text-2xl font-semibold text-white mb-4">Limitation of Liability</h2>
          <p className="text-gray-300 mb-4">
            GameLayer shall not be liable for any indirect, incidental, special, 
            consequential, or punitive damages resulting from your use of our services.
          </p>
          <p className="text-gray-400 text-sm mt-8">
            Last updated: September 2024
          </p>
        </div>
      </div>
    </div>
  )
}
