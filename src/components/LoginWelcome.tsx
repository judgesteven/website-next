'use client'

import { motion } from 'framer-motion'
import { CheckCircle, ArrowRight } from 'lucide-react'
import Link from 'next/link'

export function LoginWelcome() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 flex items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-md"
      >
        <div className="bg-white/10 backdrop-blur border border-white/20 rounded-2xl p-8 shadow-2xl text-center">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
            className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-6"
          >
            <CheckCircle className="w-8 h-8 text-white" />
          </motion.div>

          <h1 className="text-3xl font-bold text-white mb-4">Welcome to GameLayer!</h1>
          <p className="text-gray-300 mb-8">
            Your account has been created successfully. You're now ready to start building amazing gamification experiences.
          </p>

          <div className="space-y-4">
            <Link href="/dashboard">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-gradient-to-r from-purple-500 to-blue-500 text-white font-bold py-4 px-6 rounded-xl hover:from-purple-600 hover:to-blue-600 transition-all duration-200 shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
              >
                Go to Dashboard
                <ArrowRight className="w-5 h-5" />
              </motion.button>
            </Link>

            <Link href="/">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-white/20 text-white font-bold py-4 px-6 rounded-xl hover:bg-white/30 transition-all duration-200"
              >
                Explore Features
              </motion.button>
            </Link>
          </div>
        </div>
      </motion.div>
    </div>
  )
}
