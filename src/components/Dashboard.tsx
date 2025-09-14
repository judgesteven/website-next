'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { 
  Users, 
  User,
  Trophy, 
  Settings, 
  Bell,
  Search,
  Filter,
  Edit,
  Trash2,
  Medal,
  Gift,
  Zap,
  Activity,
  DollarSign,
  ClipboardCheck,
  ChevronLeft,
  ChevronRight,
  Clock,
  Target,
  Tag,
  Check,
  Upload,
  Calendar,
  RefreshCw,
  Users2,
  TrendingUp,
  BarChart3,
  Shield,
  Heart,
  Star,
  Package
} from 'lucide-react'

// 10 analytics cards linked to GameLayer gamification mechanics
const stats = [
  { title: 'Total Players', value: '1,247', subtitle: 'Active users', change: '+12%', icon: Users, color: 'text-blue-600' },
  { title: 'Active Missions', value: '24', subtitle: 'Running campaigns', change: '+5%', icon: Target, color: 'text-green-600' },
  { title: 'Points Awarded', value: '2.4M', subtitle: 'This month', change: '+18%', icon: Trophy, color: 'text-yellow-600' },
  { title: 'Engagement Rate', value: '87%', subtitle: 'Average', change: '+3%', icon: Activity, color: 'text-purple-600' },
  { title: 'Revenue', value: '€12.5K', subtitle: 'This month', change: '+8%', icon: DollarSign, color: 'text-green-600' },
  { title: 'Active Streaks', value: '342', subtitle: 'Consecutive days', change: '+15%', icon: Zap, color: 'text-orange-600' },
  { title: 'Achievements', value: '156', subtitle: 'Unlocked this week', change: '+22%', icon: Medal, color: 'text-pink-600' },
  { title: 'Leaderboard', value: '89', subtitle: 'Active competitions', change: '+7%', icon: BarChart3, color: 'text-indigo-600' },
  { title: 'Mystery Wins', value: '127', subtitle: 'Surprise rewards', change: '+31%', icon: Gift, color: 'text-red-600' },
  { title: 'Prize Redemptions', value: '89', subtitle: 'This month', change: '+14%', icon: Package, color: 'text-amber-600' }
]

const tabs = [
  { id: 'players', name: 'Players', icon: Users },
  { id: 'missions', name: 'Missions', icon: Target },
  { id: 'prizes', name: 'Prizes', icon: Gift },
  { id: 'teams', name: 'Teams', icon: Users2 },
  { id: 'streaks', name: 'Streaks', icon: Zap },
  { id: 'achievements', name: 'Achievements', icon: Medal },
  { id: 'surveys', name: 'Surveys', icon: ClipboardCheck },
  { id: 'settings', name: 'Settings', icon: Settings }
]

const topUsers = [
  { id: 1, name: 'Sarah Johnson', points: 2450, level: 'Gold', avatar: '/api/placeholder/40/40', change: '+12%' },
  { id: 2, name: 'Mike Chen', points: 2380, level: 'Gold', avatar: '/api/placeholder/40/40', change: '+8%' },
  { id: 3, name: 'Emma Wilson', points: 2150, level: 'Silver', avatar: '/api/placeholder/40/40', change: '+15%' },
  { id: 4, name: 'Alex Rodriguez', points: 1980, level: 'Silver', avatar: '/api/placeholder/40/40', change: '+5%' },
  { id: 5, name: 'Lisa Park', points: 1850, level: 'Silver', avatar: '/api/placeholder/40/40', change: '+22%' }
]

const recentActivity = [
  { id: 1, user: 'Sarah Johnson', action: 'completed mission', target: 'Daily Check-in', time: '2 min ago', icon: Check },
  { id: 2, user: 'Mike Chen', action: 'earned achievement', target: 'Streak Master', time: '5 min ago', icon: Medal },
  { id: 3, user: 'Emma Wilson', action: 'joined team', target: 'Marketing Squad', time: '12 min ago', icon: Users },
  { id: 4, user: 'Alex Rodriguez', action: 'redeemed prize', target: 'Coffee Voucher', time: '18 min ago', icon: Gift },
  { id: 5, user: 'Lisa Park', action: 'completed survey', target: 'User Feedback', time: '25 min ago', icon: ClipboardCheck }
]

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState('players')
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedUsers, setSelectedUsers] = useState<number[]>([])

  const handleSelectUser = (userId: number) => {
    setSelectedUsers(prev => 
      prev.includes(userId) 
        ? prev.filter(id => id !== userId)
        : [...prev, userId]
    )
  }

  const handleSelectAll = () => {
    setSelectedUsers(selectedUsers.length === topUsers.length ? [] : topUsers.map(user => user.id))
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
              <p className="text-gray-600 mt-1">Welcome back! Here's what's happening with your gamification platform.</p>
            </div>
            <div className="flex items-center space-x-4">
              <button className="flex items-center space-x-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                <Settings className="w-4 h-4" />
                <span>Settings</span>
              </button>
              <button className="relative p-2 text-gray-600 hover:text-gray-900">
                <Bell className="w-6 h-6" />
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">3</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Analytics Cards - 2 rows of 5 cards each */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 mb-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-xl p-6 shadow-sm border border-gray-200 hover:shadow-md transition-shadow"
            >
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">{stat.title}</p>
                  <p className="text-2xl font-bold text-gray-900 mt-1">{stat.value}</p>
                  <p className="text-sm text-gray-500 mt-1">{stat.subtitle}</p>
                </div>
                <div className={`p-3 rounded-lg bg-gray-50 ${stat.color}`}>
                  <stat.icon className="w-6 h-6" />
                </div>
              </div>
              <div className="mt-4 flex items-center">
                <span className="text-sm font-medium text-green-600">{stat.change}</span>
                <span className="text-sm text-gray-500 ml-2">vs last month</span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Tabs and Content */}
          <div className="lg:col-span-2">
            {/* Tabs */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 mb-6">
              <div className="border-b border-gray-200">
                <nav className="flex space-x-8 px-6">
                  {tabs.map((tab) => (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id)}
                      className={`py-4 px-1 border-b-2 font-medium text-sm transition-colors ${
                        activeTab === tab.id
                          ? 'border-blue-500 text-blue-600'
                          : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                      }`}
                    >
                      <div className="flex items-center space-x-2">
                        <tab.icon className="w-4 h-4" />
                        <span>{tab.name}</span>
                      </div>
                    </button>
                  ))}
                </nav>
              </div>

              {/* Tab Content */}
              <div className="p-6">
                {activeTab === 'players' && (
                  <div>
                    {/* Search and Filters */}
                    <div className="flex items-center justify-between mb-6">
                      <div className="flex items-center space-x-4">
                        <div className="relative">
                          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                          <input
                            type="text"
                            placeholder="Search players..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                          />
                        </div>
                        <button className="flex items-center space-x-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">
                          <Filter className="w-4 h-4" />
                          <span>Filter</span>
                        </button>
                      </div>
                      <div className="flex items-center space-x-2">
                        <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">
                          Export
                        </button>
                        <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
                          Add Player
                        </button>
                      </div>
                    </div>

                    {/* Players Table */}
                    <div className="overflow-hidden">
                      <table className="min-w-full divide-y divide-gray-200">
                        <thead className="bg-gray-50">
                          <tr>
                            <th className="px-6 py-3 text-left">
                              <input
                                type="checkbox"
                                checked={selectedUsers.length === topUsers.length}
                                onChange={handleSelectAll}
                                className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                              />
                            </th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                              Player
                            </th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                              Points
                            </th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                              Level
                            </th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                              Change
                            </th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                              Actions
                            </th>
                          </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200">
                          {topUsers.map((user) => (
                            <tr key={user.id} className="hover:bg-gray-50">
                              <td className="px-6 py-4">
                                <input
                                  type="checkbox"
                                  checked={selectedUsers.includes(user.id)}
                                  onChange={() => handleSelectUser(user.id)}
                                  className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                                />
                              </td>
                              <td className="px-6 py-4 whitespace-nowrap">
                                <div className="flex items-center">
                                  <img
                                    className="h-10 w-10 rounded-full"
                                    src={user.avatar}
                                    alt={user.name}
                                  />
                                  <div className="ml-4">
                                    <div className="text-sm font-medium text-gray-900">{user.name}</div>
                                  </div>
                                </div>
                              </td>
                              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                                {user.points.toLocaleString()}
                              </td>
                              <td className="px-6 py-4 whitespace-nowrap">
                                <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                                  user.level === 'Gold' ? 'bg-yellow-100 text-yellow-800' :
                                  user.level === 'Silver' ? 'bg-gray-100 text-gray-800' :
                                  'bg-orange-100 text-orange-800'
                                }`}>
                                  {user.level}
                                </span>
                              </td>
                              <td className="px-6 py-4 whitespace-nowrap text-sm text-green-600">
                                {user.change}
                              </td>
                              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                                <div className="flex items-center space-x-2">
                                  <button className="text-blue-600 hover:text-blue-900">
                                    <Edit className="w-4 h-4" />
                                  </button>
                                  <button className="text-red-600 hover:text-red-900">
                                    <Trash2 className="w-4 h-4" />
                                  </button>
                                </div>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                )}

                {activeTab === 'missions' && (
                  <div className="text-center py-12">
                    <Target className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                    <h3 className="text-lg font-medium text-gray-900 mb-2">Missions</h3>
                    <p className="text-gray-500">Manage your gamification missions and campaigns.</p>
                  </div>
                )}

                {activeTab === 'prizes' && (
                  <div className="text-center py-12">
                    <Gift className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                    <h3 className="text-lg font-medium text-gray-900 mb-2">Prizes</h3>
                    <p className="text-gray-500">Configure rewards and prizes for your users.</p>
                  </div>
                )}

                {activeTab === 'teams' && (
                  <div className="text-center py-12">
                    <Users2 className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                    <h3 className="text-lg font-medium text-gray-900 mb-2">Teams</h3>
                    <p className="text-gray-500">Organize users into teams and track team performance.</p>
                  </div>
                )}

                {activeTab === 'streaks' && (
                  <div className="text-center py-12">
                    <Zap className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                    <h3 className="text-lg font-medium text-gray-900 mb-2">Streaks</h3>
                    <p className="text-gray-500">Monitor user engagement streaks and consistency.</p>
                  </div>
                )}

                {activeTab === 'achievements' && (
                  <div className="text-center py-12">
                    <Medal className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                    <h3 className="text-lg font-medium text-gray-900 mb-2">Achievements</h3>
                    <p className="text-gray-500">Track and manage user achievements and badges.</p>
                  </div>
                )}

                {activeTab === 'surveys' && (
                  <div className="text-center py-12">
                    <ClipboardCheck className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                    <h3 className="text-lg font-medium text-gray-900 mb-2">Surveys</h3>
                    <p className="text-gray-500">Create and manage user feedback surveys.</p>
                  </div>
                )}

                {activeTab === 'settings' && (
                  <div className="text-center py-12">
                    <Settings className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                    <h3 className="text-lg font-medium text-gray-900 mb-2">Settings</h3>
                    <p className="text-gray-500">Configure your gamification platform settings.</p>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Right Column - Recent Activity */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl shadow-sm border border-gray-200">
              <div className="p-6 border-b border-gray-200">
                <h3 className="text-lg font-semibold text-gray-900">Recent Activity</h3>
              </div>
              <div className="p-6">
                <div className="space-y-4">
                  {recentActivity.map((activity) => (
                    <div key={activity.id} className="flex items-start space-x-3">
                      <div className="flex-shrink-0">
                        <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                          <activity.icon className="w-4 h-4 text-blue-600" />
                        </div>
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm text-gray-900">
                          <span className="font-medium">{activity.user}</span> {activity.action} <span className="font-medium">{activity.target}</span>
                        </p>
                        <p className="text-xs text-gray-500 mt-1">{activity.time}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-6">
                  <button className="w-full text-center text-sm text-blue-600 hover:text-blue-700 font-medium">
                    View all activity
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
