'use client'

import { motion } from 'framer-motion'
import { CheckCircle } from 'lucide-react'
import { AccessForm } from '@/types/chat'

interface AccessSectionProps {
  accessForm: AccessForm
  isSubmitting: boolean
  submitSuccess: boolean
  onInputChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void
}

export function AccessSection({
  accessForm,
  isSubmitting,
  submitSuccess,
  onInputChange,
  onSubmit
}: AccessSectionProps) {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-800 via-purple-900 to-gray-800 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-72 h-72 bg-yellow-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-yellow-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 bg-gradient-to-r from-yellow-500/20 to-orange-500/20 border border-yellow-500/30 rounded-full px-6 py-2 mb-6"
          >
            <CheckCircle className="w-5 h-5 text-yellow-400" />
            <span className="text-yellow-300 font-medium">Request Access</span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            viewport={{ once: true }}
            className="text-4xl lg:text-5xl font-bold text-white mb-6"
          >
            Ready to{' '}
            <span className="text-yellow-300 font-semibold">
              Get Started?
            </span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            viewport={{ once: true }}
            className="text-xl text-white max-w-2xl mx-auto"
          >
            Request free access and start transforming your user engagement
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-md mx-auto"
        >
          {submitSuccess ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="bg-green-500/20 backdrop-blur border border-green-500/30 rounded-2xl p-8 text-center"
            >
              <CheckCircle className="w-16 h-16 text-green-400 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-white mb-2">Access Requested!</h3>
              <p className="text-green-300">
                Thank you for your interest! We'll review your request and get back to you within 24 hours.
              </p>
            </motion.div>
          ) : (
            <form onSubmit={onSubmit} className="bg-white/10 backdrop-blur border border-white/20 rounded-2xl p-8 shadow-2xl">
              <div className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-white mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={accessForm.name}
                    onChange={onInputChange}
                    required
                    className="w-full bg-white/20 backdrop-blur border border-white/30 rounded-xl px-4 py-3 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition-all duration-200"
                    placeholder="Enter your full name"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-white mb-2">
                    Company Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={accessForm.email}
                    onChange={onInputChange}
                    required
                    className="w-full bg-white/20 backdrop-blur border border-white/30 rounded-xl px-4 py-3 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition-all duration-200"
                    placeholder="your.email@company.com"
                  />
                </div>
                
                <div>
                  <label htmlFor="project" className="block text-sm font-medium text-white mb-2">
                    Your Project
                  </label>
                  <textarea
                    id="project"
                    name="project"
                    value={accessForm.project}
                    onChange={onInputChange}
                    required
                    rows={3}
                    className="w-full bg-white/20 backdrop-blur border border-white/30 rounded-xl px-4 py-3 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition-all duration-200 resize-none"
                    placeholder="Tell us about your project"
                  />
                </div>
                
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  disabled={!accessForm.name.trim() || !accessForm.email.trim() || !accessForm.project.trim() || isSubmitting}
                  className="w-full bg-gradient-to-r from-yellow-500 to-orange-500 text-white font-bold py-4 px-6 rounded-xl hover:from-yellow-600 hover:to-orange-600 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg hover:shadow-xl"
                >
                  {isSubmitting ? (
                    <div className="flex items-center justify-center gap-2">
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                      <span>Requesting Access...</span>
                    </div>
                  ) : (
                    'Request Access'
                  )}
                </motion.button>
              </div>
              
              <p className="text-xs text-gray-400 mt-4 text-center">
                We'll review your request and respond within 24 hours
              </p>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  )
}
