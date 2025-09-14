'use client'

import { motion } from 'framer-motion'
import { Calendar, User, ArrowLeft } from 'lucide-react'
import Link from 'next/link'

export function BlogPost() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <Link href="/" className="inline-flex items-center text-purple-400 hover:text-purple-300 transition-colors">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Link>
        </motion.div>

        <motion.article
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-white/10 backdrop-blur border border-white/20 rounded-2xl p-8"
        >
          <header className="mb-8">
            <h1 className="text-4xl lg:text-5xl font-bold text-white mb-4">
              Complete Gamification Guide 2025
            </h1>
            <div className="flex items-center space-x-4 text-gray-400">
              <div className="flex items-center">
                <Calendar className="w-4 h-4 mr-2" />
                <span>January 1, 2025</span>
              </div>
              <div className="flex items-center">
                <User className="w-4 h-4 mr-2" />
                <span>GameLayer Team</span>
              </div>
            </div>
          </header>

          <div className="prose prose-invert max-w-none">
            <p className="text-xl text-gray-300 mb-6">
              Gamification continues to evolve in 2025, with new trends and technologies reshaping how businesses engage their users. This comprehensive guide covers everything you need to know about modern gamification strategies.
            </p>

            <h2 className="text-2xl font-bold text-white mt-8 mb-4">What is Gamification?</h2>
            <p className="text-gray-300 mb-6">
              Gamification is the application of game design elements and principles in non-game contexts to engage users and solve problems. It leverages our natural desires for competition, achievement, and recognition to motivate behavior.
            </p>

            <h2 className="text-2xl font-bold text-white mt-8 mb-4">Key Trends for 2025</h2>
            <ul className="text-gray-300 mb-6 space-y-2">
              <li>• AI-powered personalization</li>
              <li>• Micro-interactions and instant feedback</li>
              <li>• Social gamification features</li>
              <li>• Cross-platform experiences</li>
              <li>• Sustainability-focused gamification</li>
            </ul>

            <h2 className="text-2xl font-bold text-white mt-8 mb-4">Implementation Best Practices</h2>
            <p className="text-gray-300 mb-6">
              Successful gamification requires careful planning, user research, and iterative testing. Start with clear objectives, understand your audience, and design experiences that align with your business goals.
            </p>

            <div className="bg-purple-500/20 border border-purple-500/30 rounded-xl p-6 mt-8">
              <h3 className="text-lg font-semibold text-white mb-2">Pro Tip</h3>
              <p className="text-gray-300">
                Use GameLayer's analytics dashboard to track engagement metrics and optimize your gamification strategy in real-time.
              </p>
            </div>
          </div>
        </motion.article>
      </div>
    </div>
  )
}
