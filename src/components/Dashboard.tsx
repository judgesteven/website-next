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
  Flag,
  Layers,
  Crown,
  HelpCircle,
  Medal,
  Gift,
  Box,
  Ticket,
  Star,
  Zap,
  Activity,
  BookOpen,
  DollarSign,
  ClipboardCheck,
  ChevronLeft,
  ChevronRight,
  Zap as ZapIcon,
  X,
  Clock,
  Target,
  Tag,
  Check,
  Upload,
  Calendar,
  RefreshCw,
  Users2,
  Image as ImageIcon
} from 'lucide-react'

// Sample data from the original Dashboard
const stats = [
  { title: 'Total Players', value: '1,247', subtitle: 'Active users', change: '+12%', icon: Users, color: 'text-blue-600' },
  { title: 'Active Missions', value: '24', subtitle: 'Running campaigns', change: '+5%', icon: Target, color: 'text-green-600' },
  { title: 'Points Awarded', value: '2.4M', subtitle: 'This month', change: '+18%', icon: Trophy, color: 'text-yellow-600' },
  { title: 'Engagement Rate', value: '87%', subtitle: 'Average', change: '+3%', icon: Activity, color: 'text-purple-600' },
  { title: 'Revenue', value: '€12.5K', subtitle: 'This month', change: '+8%', icon: DollarSign, color: 'text-green-600' }
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
  { id: 1, name: 'John Doe', description: 'Premium member', level: 5, points: 1250, credits: 500, image: 'https://picsum.photos/400/300?random=1' },
  { id: 2, name: 'Jane Smith', description: 'Active player', level: 4, points: 980, credits: 320, image: 'https://picsum.photos/400/300?random=2' },
  { id: 3, name: 'Mike Johnson', description: 'Team leader', level: 7, points: 2100, credits: 850, image: 'https://picsum.photos/400/300?random=3' },
  { id: 4, name: 'Sarah Wilson', description: 'New member', level: 2, points: 450, credits: 120, image: 'https://picsum.photos/400/300?random=4' },
  { id: 5, name: 'David Brown', description: 'VIP member', level: 8, points: 3200, credits: 1200, image: 'https://picsum.photos/400/300?random=5' }
]

export function Dashboard() {
  const [activeTab, setActiveTab] = useState('players')
  const [editingPlayerId, setEditingPlayerId] = useState<number | null>(null)

  const handleStartEditPlayer = (user: any) => {
    setEditingPlayerId(user.id)
  }

  const handleCancelEditPlayer = () => {
    setEditingPlayerId(null)
  }

  return (
    <div className="min-h-screen bg-gray-50 pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="flex justify-between items-start mb-8">
          <div className="flex items-center space-x-6">
            {/* User Profile Section */}
            <div className="flex items-center space-x-4">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white text-xl font-bold">
                JS
              </div>
              <div>
                <h1 className="text-2xl font-bold text-gray-900">John Smith</h1>
                <p className="text-gray-600">Administrator</p>
                <p className="text-sm text-gray-500">john.smith@company.com</p>
              </div>
            </div>
            
            {/* Account Info */}
            <div className="border-l border-gray-200 pl-6">
              <h2 className="text-lg font-semibold text-gray-900">GameLayer Platform</h2>
              <p className="text-gray-600">Account: Premium</p>
              <p className="text-sm text-gray-500">Last login: Today at 9:30 AM</p>
            </div>
          </div>
          
          <div className="flex items-center space-x-4">
            <button className="p-2 text-gray-400 hover:text-gray-600 relative">
              <Bell className="w-5 h-5" />
              <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full"></span>
            </button>
            <button className="bg-blue-600 text-white rounded-3xl hover:bg-blue-700 transition-colors text-sm font-medium py-3 px-4">
              New Campaign
            </button>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 mb-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-lg shadow-sm border border-gray-200 p-6"
            >
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-600 text-sm">{stat.title}</p>
                  <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
                  <p className="text-gray-500 text-xs">{stat.subtitle}</p>
                  <p className="text-green-600 text-sm font-medium">{stat.change} change</p>
                </div>
                <div className={`p-3 rounded-lg bg-gray-50 ${stat.color}`}>
                  <stat.icon className="w-6 h-6" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Divider */}
        <div className="border-t border-gray-200 my-8"></div>

        {/* Main Content Area with Sidebar */}
        <div className="flex gap-4 max-w-7xl mx-auto">
          {/* Left Sidebar Navigation */}
          <div className="w-56 flex-shrink-0">
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4">
              <nav className="space-y-2">
                {tabs.map((tab, index) => (
                  <div key={tab.id}>
                    <button
                      onClick={() => setActiveTab(tab.id)}
                      className={`w-full flex items-center px-4 py-3 rounded-2xl text-sm font-medium transition-colors ${
                        activeTab === tab.id
                          ? 'bg-blue-50 text-blue-600 border border-blue-200'
                          : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                      }`}
                    >
                      <tab.icon className="w-4 h-4 mr-3" />
                      {tab.name}
                    </button>
                    {/* Add divider between Surveys and Settings */}
                    {tab.id === 'surveys' && (
                      <div className="border-t border-gray-200 my-2"></div>
                    )}
                  </div>
                ))}
              </nav>
            </div>
          </div>

          {/* Main Content */}
          <div className="flex-1 bg-white rounded-lg shadow-sm border border-gray-200 p-4">
            {activeTab === 'players' && (
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center space-x-4">
                    <div className="relative">
                      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                      <input
                        type="text"
                        placeholder="Search players..."
                        className="pl-10 pr-4 py-2 border border-gray-300 rounded-2xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                    </div>
                    <button className="flex items-center px-3 py-2 border border-gray-300 rounded-xl text-sm">
                      <Filter className="w-4 h-4 mr-2" />
                      Filter
                    </button>
                  </div>
                  <button className="px-4 py-3 bg-blue-600 text-white rounded-3xl hover:bg-blue-700 transition-colors text-sm font-medium">
                    Add Player
                  </button>
                </div>

                <div className="bg-white border border-gray-200 rounded-lg overflow-hidden w-full">
                  <table className="w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Player
                        </th>
                        <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Level
                        </th>
                        <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Points
                        </th>
                        <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Credits
                        </th>
                        <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Actions
                        </th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      {topUsers.map((user, index) => (
                        <tr 
                          key={index}
                          className="hover:bg-gray-50 cursor-pointer" 
                          onClick={() => {
                            if (editingPlayerId === user.id) {
                              handleCancelEditPlayer();
                            } else {
                              handleStartEditPlayer(user);
                            }
                          }}
                        >
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="flex items-center">
                              {user.image ? (
                                <div className="w-12 h-12 rounded-lg overflow-hidden flex-shrink-0">
                                  <img 
                                    src={user.image} 
                                    alt={user.name}
                                    className="w-full h-full object-cover"
                                    onError={(e) => {
                                      e.currentTarget.style.display = 'none';
                                      const fallback = e.currentTarget.nextElementSibling as HTMLElement;
                                      if (fallback) fallback.style.display = 'flex';
                                    }}
                                  />
                                  <div className="w-full h-full bg-blue-600 text-white rounded-lg flex items-center justify-center text-sm font-medium" style={{ display: 'none' }}>
                                    <User className="w-4 h-4" />
                                  </div>
                                </div>
                              ) : (
                                <div className="w-12 h-12 bg-blue-600 text-white rounded-lg flex items-center justify-center text-sm font-medium">
                                  <User className="w-4 h-4" />
                                </div>
                              )}
                              <div className="ml-4">
                                <div className="text-sm font-medium text-gray-900">{user.name}</div>
                                <div className="text-sm text-gray-500">{user.description || 'No description'}</div>
                              </div>
                            </div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-center">
                            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                              Level {user.level}
                            </span>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 text-center">
                            {user.points.toLocaleString()}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 text-center">
                            {user.credits ? user.credits.toLocaleString() : '0'}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-center">
                            <div className="flex items-center justify-center space-x-2">
                              <button 
                                className="text-gray-600 hover:text-gray-900"
                                onClick={(e) => {
                                  e.stopPropagation();
                                  handleStartEditPlayer(user);
                                }}
                              >
                                <Edit className="w-4 h-4" />
                              </button>
                              <button 
                                className="text-gray-600 hover:text-red-600"
                                onClick={(e) => {
                                  e.stopPropagation();
                                  // Handle delete
                                }}
                              >
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
              <div>
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-xl font-bold text-gray-900">Missions</h2>
                  <button className="px-4 py-3 bg-blue-600 text-white rounded-3xl hover:bg-blue-700 transition-colors text-sm font-medium">
                    Add Mission
                  </button>
                </div>
                <div className="text-gray-600">Mission management features coming soon...</div>
              </div>
            )}
            
            {activeTab === 'prizes' && (
              <div>
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-xl font-bold text-gray-900">Prizes</h2>
                  <button className="px-4 py-3 bg-blue-600 text-white rounded-3xl hover:bg-blue-700 transition-colors text-sm font-medium">
                    Add Prize
                  </button>
                </div>
                <div className="text-gray-600">Prize management features coming soon...</div>
              </div>
            )}
            
            {activeTab === 'teams' && (
              <div>
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-xl font-bold text-gray-900">Teams</h2>
                  <button className="px-4 py-3 bg-blue-600 text-white rounded-3xl hover:bg-blue-700 transition-colors text-sm font-medium">
                    Add Team
                  </button>
                </div>
                <div className="text-gray-600">Team management features coming soon...</div>
              </div>
            )}
            
            {activeTab === 'streaks' && (
              <div>
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-xl font-bold text-gray-900">Streaks</h2>
                  <button className="px-4 py-3 bg-blue-600 text-white rounded-3xl hover:bg-blue-700 transition-colors text-sm font-medium">
                    Add Streak
                  </button>
                </div>
                <div className="text-gray-600">Streak management features coming soon...</div>
              </div>
            )}
            
            {activeTab === 'achievements' && (
              <div>
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-xl font-bold text-gray-900">Achievements</h2>
                  <button className="px-4 py-3 bg-blue-600 text-white rounded-3xl hover:bg-blue-700 transition-colors text-sm font-medium">
                    Add Achievement
                  </button>
                </div>
                <div className="text-gray-600">Achievement management features coming soon...</div>
              </div>
            )}
            
            {activeTab === 'surveys' && (
              <div>
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-xl font-bold text-gray-900">Surveys</h2>
                  <button className="px-4 py-3 bg-blue-600 text-white rounded-3xl hover:bg-blue-700 transition-colors text-sm font-medium">
                    Add Survey
                  </button>
                </div>
                <div className="text-gray-600">Survey management features coming soon...</div>
              </div>
            )}
            
            {activeTab === 'settings' && (
              <div>
                <h2 className="text-xl font-bold text-gray-900 mb-6">Settings</h2>
                <div className="text-gray-600">Settings panel coming soon...</div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}