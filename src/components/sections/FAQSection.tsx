'use client'

import { motion } from 'framer-motion'
import { CheckCircle } from 'lucide-react'

const faqs = [
  {
    question: "What is gamification and how does it work?",
    answer: "Gamification is the application of game mechanics to non-game contexts to increase user engagement, motivation, and participation. It works by using elements like points, badges, leaderboards, and rewards that create a sense of achievement and progress. Our gamification platform makes it easy to implement these mechanics through our API and dashboard."
  },
  {
    question: "How much does GameLayer cost?",
    answer: "GameLayer offers flexible pricing starting at €100/month for the Starter plan (up to 1,000 users), €1,000/month for Growth (up to 25,000 users), €2,500/month for Scale (up to 100,000 users), and custom Enterprise pricing for unlimited users. All plans include our full gamification platform and API access."
  },
  {
    question: "What types of businesses can benefit from gamification?",
    answer: "Any business looking to increase user engagement, customer retention, or employee motivation can benefit from gamification. This includes SaaS companies, e-learning platforms, mobile apps, retail businesses, healthcare organizations, fitness apps, HR departments, and marketing teams. GameLayer works across all industries and use cases."
  },
  {
    question: "How quickly can I implement gamification with GameLayer?",
    answer: "With GameLayer's API and pre-built components, you can implement basic gamification features in just a few hours. Our comprehensive documentation and integration guides make it easy for developers to get started quickly. Most customers see results within the first week of implementation."
  },
  {
    question: "What gamification features does GameLayer offer?",
    answer: "GameLayer offers a complete suite of gamification features including points and rewards systems, leaderboards and rankings, achievements and badges, missions and challenges, streaks and daily goals, mystery boxes, team competitions, real-time analytics, custom branding, and behavioral insights. All features are accessible through our API and dashboard."
  },
  {
    question: "How does gamification improve customer retention?",
    answer: "Gamification improves customer retention by 25-40% through loyalty programs, consistent engagement, habit formation, and emotional connection. Features like streaks, daily goals, and mystery boxes keep users coming back regularly. Our platform provides the tools to create these engaging experiences that drive long-term customer loyalty."
  }
]

export function FAQSection() {
  return (
    <section className="py-20 bg-gradient-to-br from-slate-800 via-gray-800 to-slate-900 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 bg-gradient-to-r from-green-500/20 to-blue-500/20 border border-green-500/30 rounded-full px-6 py-2 mb-6"
          >
            <CheckCircle className="w-5 h-5 text-green-400" />
            <span className="text-green-300 font-medium">Frequently Asked Questions</span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            viewport={{ once: true }}
            className="text-4xl lg:text-5xl font-bold text-white mb-6"
          >
            Gamification{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-400">
              Questions & Answers
            </span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-white/5 backdrop-blur border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300"
            >
              <h3 className="text-lg font-bold text-white mb-3">{faq.question}</h3>
              <p className="text-gray-300 leading-relaxed">{faq.answer}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <p className="text-gray-300 mb-6">
            Still have questions? Check out our API documentation or explore our project references to see gamification in action.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
