'use client'

import { motion } from 'framer-motion'
import { Brain, Zap, Target } from 'lucide-react'

export function AIContent() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-4xl lg:text-5xl font-bold text-white mb-6"
          >
            AI-Enhanced{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">
              Gamification
            </span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            viewport={{ once: true }}
            className="text-xl text-white max-w-2xl mx-auto"
          >
            Discover how artificial intelligence revolutionizes gamification, creating personalized and adaptive experiences.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              icon: Brain,
              title: 'Smart Personalization',
              description: 'AI analyzes user behavior to create personalized gamification experiences that adapt to individual preferences.',
            },
            {
              icon: Zap,
              title: 'Dynamic Content',
              description: 'Automatically generate and optimize gamification content based on user engagement patterns and success metrics.',
            },
            {
              icon: Target,
              title: 'Predictive Analytics',
              description: 'Predict user behavior and optimize gamification strategies to maximize engagement and retention.',
            },
          ].map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-white/10 backdrop-blur border border-white/20 rounded-2xl p-8 text-center"
            >
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <feature.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">{feature.title}</h3>
              <p className="text-gray-300">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}
