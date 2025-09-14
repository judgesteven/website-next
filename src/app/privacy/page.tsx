import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Privacy Policy - GameLayer',
  description: 'GameLayer Privacy Policy - How we collect, use, and protect your data.',
}

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-gray-900 text-white py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold mb-8">Privacy Policy</h1>
        <div className="prose prose-invert max-w-none">
          <p className="text-lg text-gray-300 mb-6">
            This privacy policy explains how GameLayer collects, uses, and protects your information.
          </p>
          <h2 className="text-2xl font-semibold text-white mb-4">Information We Collect</h2>
          <p className="text-gray-300 mb-4">
            We collect information you provide directly to us, such as when you create an account, 
            use our services, or contact us for support.
          </p>
          <h2 className="text-2xl font-semibold text-white mb-4">How We Use Your Information</h2>
          <p className="text-gray-300 mb-4">
            We use the information we collect to provide, maintain, and improve our services, 
            process transactions, and communicate with you.
          </p>
          <h2 className="text-2xl font-semibold text-white mb-4">Data Protection</h2>
          <p className="text-gray-300 mb-4">
            We implement appropriate security measures to protect your personal information 
            against unauthorized access, alteration, disclosure, or destruction.
          </p>
          <p className="text-gray-400 text-sm mt-8">
            Last updated: September 2024
          </p>
        </div>
      </div>
    </div>
  )
}
