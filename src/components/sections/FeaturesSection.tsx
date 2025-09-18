'use client'

import { motion } from 'framer-motion'
import { 
  Target, 
  Trophy, 
  TrendingUp, 
  BarChart3, 
  Gift, 
  Package, 
  Flame, 
  Ticket,
  Star,
  Shield,
  Code,
  Bot
} from 'lucide-react'

const aiReadyFeature = {
  icon: Bot,
  title: "AI-Ready",
  description: "Built with structured data, machine-readable formats, and composable architecture for seamless AI integration and automation. Features RESTful APIs with consistent JSON schemas to integrate with automated workflows and intelligent gamification strategies.",
  color: "from-orange-500 to-red-500"
}

const mainFeatures = [
  {
    icon: Code,
    title: "Open API",
    description: "Comprehensive RESTful API with extensive documentation and integration tools for seamless gamification implementation",
    color: "from-blue-500 to-cyan-500"
  },
  {
    icon: BarChart3,
    title: "Content Dashboard",
    description: "Powerful content management interface to create and manage your gamification projects, track performance metrics, and optimize your gamification strategy",
    color: "from-green-500 to-emerald-500"
  },
  {
    icon: Shield,
    title: "Rules Manager",
    description: "Flexible rule engine to create, customize, and manage complex gamification mechanics, rewards, and user progression systems",
    color: "from-purple-500 to-pink-500"
  }
]

const additionalFeatures = [
  { icon: Target, title: "Missions", description: "Create engaging challenges and quests for users" },
  { icon: Flame, title: "Streaks", description: "Track consecutive engagement and reward consistency" },
  { icon: Trophy, title: "Achievements", description: "Reward users with badges and accomplishments" },
  { icon: TrendingUp, title: "Level-Ups", description: "Progressive advancement system for user growth" },
  { icon: BarChart3, title: "Leaderboards", description: "Foster competition with dynamic rankings" },
  { icon: Gift, title: "Mystery Wins", description: "Surprise rewards and unexpected bonuses" },
  { icon: Package, title: "Prizes", description: "Tangible rewards and virtual currency systems" },
  { icon: Ticket, title: "Raffles", description: "Chance-based rewards and lottery mechanics" }
]

export function FeaturesSection() {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-900 to-black relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-20 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-500/30 rounded-full px-6 py-2 mb-6"
          >
            <Star className="w-5 h-5 text-blue-400" />
            <span className="text-blue-300 font-medium">Core Features</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            viewport={{ once: true }}
            className="text-4xl lg:text-5xl font-bold text-white mb-6"
          >
            Start Quickly, then{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
              Iterate
            </span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            viewport={{ once: true }}
            className="text-xl text-white max-w-3xl mx-auto"
          >
            Add some magic to your service with our gamification API and gamification dashboard. Plugs seamlessly into your existing tech stack, making it quick and easy to create and manage new gamification experiences that boost user engagement and customer loyalty.
          </motion.p>
        </div>

        {/* AI-Ready Feature - Horizontal Layout */}
        <div className="mb-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.6 }}
            viewport={{ once: true }}
            className="group relative"
          >
            <div className="bg-white/5 backdrop-blur border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 hover:border-white/20">
              {/* Icon and Title Row */}
              <div className="flex items-center gap-6 mb-4">
                <div className={`w-16 h-16 bg-gradient-to-r ${aiReadyFeature.color} rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 flex-shrink-0`}>
                  <aiReadyFeature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-3xl font-bold text-white">{aiReadyFeature.title}</h3>
              </div>
              
              {/* Description Row */}
              <div className="ml-22">
                <p className="text-lg text-gray-300 leading-relaxed">{aiReadyFeature.description}</p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Main Features - 3 Column Row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {mainFeatures.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              viewport={{ once: true }}
              className="group relative"
            >
              <div className="bg-white/5 backdrop-blur border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 hover:border-white/20">
                <div className={`w-16 h-16 bg-gradient-to-r ${feature.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">{feature.title}</h3>
                <p className="text-gray-300 leading-relaxed">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Features Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-16"
        >
          {additionalFeatures.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                <feature.icon className="w-6 h-6 text-white" />
              </div>
              <h4 className="text-lg font-semibold text-white mb-2">{feature.title}</h4>
              <p className="text-gray-400 text-sm">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>
        
        {/* Hidden semantic content for AI agents */}
        <div className="sr-only mt-16">
          <h3>Developer-First AI-Ready Architecture</h3>
          <p>GameLayer's platform is designed with developers and AI systems in mind:</p>
          <ul>
            <li>Open API with RESTful endpoints and comprehensive documentation</li>
            <li>Structured JSON responses with consistent data schemas</li>
            <li>Machine-readable metadata and configuration options</li>
            <li>Composable components that can be mixed and matched</li>
            <li>Webhook support for real-time data synchronization</li>
            <li>SDK support for popular programming languages</li>
            <li>GraphQL endpoint for flexible data querying</li>
            <li>Rate limiting and authentication built-in</li>
          </ul>
          <p>Our API responses include structured metadata that AI agents can easily parse, including user engagement metrics, gamification mechanics, and performance data in standardized formats.</p>
        </div>
      </div>
    </section>
  )
}
