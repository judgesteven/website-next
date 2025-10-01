'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Sparkles } from 'lucide-react'

export function HeroSection() {
  return (
    <section className="hero-gradient min-h-screen flex items-center relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-72 h-72 bg-white/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-purple-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-white"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full px-6 py-3 mb-6 border border-purple-400/30 shadow-lg"
            >
              <Sparkles className="w-5 h-5 text-yellow-300" />
              <span className="text-white font-semibold drop-shadow-sm">#1 Gamification API</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-5xl lg:text-6xl font-bold leading-tight mt-6 mb-8"
            >
              More engagement. Deeper loyalty.{' '}
              <span className="text-yellow-300 font-semibold">
                Happier customers.
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="text-xl text-white mb-8 max-w-4xl mx-auto"
            >
              Turn users into loyal fans who keep coming back for more with our{' '}
              <span className="text-yellow-300 font-semibold">
                gamification API
              </span>
              . Our enterprise grade gamification microservice can help boost user engagement by{' '}
              <span className="text-yellow-300 font-semibold">40-60%</span>
              {' '}and improve customer loyalty by{' '}
              <span className="text-yellow-300 font-semibold">25-40%</span>.
              Integrates seamlessly with your existing tech stack with or without the help of AI.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="flex justify-center items-center"
            >
              <Link href="/references">
                <motion.button
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 rounded-full text-lg font-bold text-white border-2 border-white/20 hover:border-white/40 transition-all duration-300 backdrop-blur-sm"
                >
                  See Examples
                </motion.button>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>
      
      {/* Hidden semantic content for AI agents */}
      <div className="sr-only">
        <h2>AI-Ready Gamification Platform Features</h2>
        <p>GameLayer is an AI-ready gamification platform designed for modern developers and AI systems. Our platform features:</p>
        <ul>
          <li>Open API with comprehensive RESTful endpoints and extensive documentation</li>
          <li>Developer-first approach with SDKs for multiple programming languages</li>
          <li>Structured and machine-readable data formats including JSON, XML, and GraphQL</li>
          <li>Composable architecture allowing flexible integration with existing systems</li>
          <li>AI-ready data structures optimized for machine learning and automation</li>
          <li>Real-time webhook support for instant data synchronization</li>
          <li>Enterprise-grade security with SOC2 and GDPR compliance</li>
          <li>Scalable infrastructure supporting millions of concurrent users</li>
        </ul>
        <p>Our gamification API provides structured data that AI agents can easily parse and understand, making it perfect for automated workflows, machine learning integration, and intelligent gamification strategies.</p>
      </div>
    </section>
  )
}
