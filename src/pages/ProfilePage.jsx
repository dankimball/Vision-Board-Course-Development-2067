import React, { useState } from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiUser, FiAward, FiBookOpen, FiTrendingUp, FiCalendar, FiDownload, FiStar, FiHeart, FiTarget } = FiIcons;

const ProfilePage = () => {
  const [userStats] = useState({
    name: "Journey Traveler",
    joinDate: "December 2024",
    completedModules: 3,
    totalModules: 8,
    journalEntries: 8,
    quizzesCompleted: 3,
    activitiesCompleted: 3,
    streakDays: 12,
    totalTimeSpent: "4.5 hours"
  });

  const achievements = [
    {
      id: 1,
      title: "Shadow Explorer",
      description: "Completed Module 2: Awareness & Acceptance",
      icon: FiUser,
      earned: true,
      date: "Dec 15, 2024"
    },
    {
      id: 2,
      title: "Strength Seeker",
      description: "Completed VIA Character Strengths Assessment",
      icon: FiStar,
      earned: true,
      date: "Dec 16, 2024"
    },
    {
      id: 3,
      title: "Sacred Commitment",
      description: "Made your sacred vow to transformation",
      icon: FiHeart,
      earned: true,
      date: "Dec 14, 2024"
    },
    {
      id: 4,
      title: "Vision Architect",
      description: "Complete Module 6: Create Your Vision Board",
      icon: FiTarget,
      earned: false,
      date: null
    },
    {
      id: 5,
      title: "Integration Master",
      description: "Complete all 8 modules",
      icon: FiAward,
      earned: false,
      date: null
    }
  ];

  const recentActivity = [
    {
      type: "module",
      title: "Completed Module 3: Discover Your Signature Strengths",
      date: "2 hours ago",
      icon: FiBookOpen
    },
    {
      type: "journal",
      title: "Journal Entry: Authentic Self-Expression",
      date: "2 hours ago",
      icon: FiUser
    },
    {
      type: "quiz",
      title: "Quiz: Strengths Integration (100% score)",
      date: "3 hours ago",
      icon: FiTrendingUp
    },
    {
      type: "activity",
      title: "Completed VIA Survey and Strengths Mapping",
      date: "3 hours ago",
      icon: FiTarget
    }
  ];

  const progressPercentage = (userStats.completedModules / userStats.totalModules) * 100;

  return (
    <div className="min-h-screen py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Profile Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-br from-mystical-800 to-mystical-900 rounded-2xl p-8 text-white mb-8"
        >
          <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-6">
            <div className="w-20 h-20 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-full flex items-center justify-center">
              <SafeIcon icon={FiUser} className="text-white text-3xl" />
            </div>
            
            <div className="text-center md:text-left flex-1">
              <h1 className="text-3xl font-serif font-bold mb-2">{userStats.name}</h1>
              <p className="text-mystical-200 mb-4">
                Transformation Journey • Joined {userStats.joinDate}
              </p>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                <div>
                  <div className="text-2xl font-bold text-primary-300">{userStats.completedModules}</div>
                  <div className="text-xs text-mystical-300">Modules Complete</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-secondary-300">{userStats.journalEntries}</div>
                  <div className="text-xs text-mystical-300">Journal Entries</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-accent-300">{userStats.streakDays}</div>
                  <div className="text-xs text-mystical-300">Day Streak</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-green-300">{userStats.totalTimeSpent}</div>
                  <div className="text-xs text-mystical-300">Time Invested</div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Course Progress */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-2 bg-white rounded-2xl p-6 shadow-sm border border-mystical-100"
          >
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-10 h-10 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-lg flex items-center justify-center">
                <SafeIcon icon={FiTrendingUp} className="text-white text-sm" />
              </div>
              <div>
                <h2 className="text-xl font-serif font-semibold text-mystical-800">
                  Course Progress
                </h2>
                <p className="text-sm text-mystical-600">Your transformation journey</p>
              </div>
            </div>

            {/* Progress Bar */}
            <div className="mb-6">
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm font-medium text-mystical-700">Overall Progress</span>
                <span className="text-sm font-medium text-mystical-700">{Math.round(progressPercentage)}%</span>
              </div>
              <div className="w-full bg-mystical-200 rounded-full h-3">
                <motion.div
                  className="bg-gradient-to-r from-primary-500 to-secondary-500 h-3 rounded-full"
                  initial={{ width: 0 }}
                  animate={{ width: `${progressPercentage}%` }}
                  transition={{ duration: 1, delay: 0.5 }}
                />
              </div>
            </div>

            {/* Module Progress Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {Array.from({ length: 8 }, (_, i) => i + 1).map((moduleNum) => {
                const isCompleted = moduleNum <= userStats.completedModules;
                const isCurrent = moduleNum === userStats.completedModules + 1;
                
                return (
                  <div
                    key={moduleNum}
                    className={`p-4 rounded-lg border-2 ${
                      isCompleted 
                        ? 'border-green-200 bg-green-50' 
                        : isCurrent 
                          ? 'border-primary-200 bg-primary-50'
                          : 'border-mystical-200 bg-mystical-50'
                    }`}
                  >
                    <div className="flex items-center space-x-3">
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                        isCompleted 
                          ? 'bg-green-500' 
                          : isCurrent 
                            ? 'bg-gradient-to-br from-primary-500 to-secondary-500'
                            : 'bg-mystical-300'
                      }`}>
                        <span className="text-white text-sm font-semibold">{moduleNum}</span>
                      </div>
                      <div>
                        <p className="text-sm font-medium text-mystical-800">
                          Module {moduleNum}
                        </p>
                        <p className="text-xs text-mystical-500">
                          {isCompleted ? 'Complete' : isCurrent ? 'In Progress' : 'Locked'}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.div>

          {/* Achievements */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-white rounded-2xl p-6 shadow-sm border border-mystical-100"
          >
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-10 h-10 bg-gradient-to-br from-accent-500 to-accent-600 rounded-lg flex items-center justify-center">
                <SafeIcon icon={FiAward} className="text-white text-sm" />
              </div>
              <div>
                <h2 className="text-xl font-serif font-semibold text-mystical-800">
                  Achievements
                </h2>
                <p className="text-sm text-mystical-600">Your milestones</p>
              </div>
            </div>

            <div className="space-y-4">
              {achievements.map((achievement) => (
                <div
                  key={achievement.id}
                  className={`p-4 rounded-lg border ${
                    achievement.earned
                      ? 'border-accent-200 bg-accent-50'
                      : 'border-mystical-200 bg-mystical-50 opacity-60'
                  }`}
                >
                  <div className="flex items-start space-x-3">
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                      achievement.earned
                        ? 'bg-gradient-to-br from-accent-500 to-accent-600'
                        : 'bg-mystical-300'
                    }`}>
                      <SafeIcon 
                        icon={achievement.icon} 
                        className="text-white text-sm" 
                      />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-mystical-800 text-sm">
                        {achievement.title}
                      </h3>
                      <p className="text-xs text-mystical-600 mb-1">
                        {achievement.description}
                      </p>
                      {achievement.earned && achievement.date && (
                        <p className="text-xs text-accent-600 font-medium">
                          Earned {achievement.date}
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Recent Activity */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-8 bg-white rounded-2xl p-6 shadow-sm border border-mystical-100"
        >
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-secondary-500 to-secondary-600 rounded-lg flex items-center justify-center">
                <SafeIcon icon={FiCalendar} className="text-white text-sm" />
              </div>
              <div>
                <h2 className="text-xl font-serif font-semibold text-mystical-800">
                  Recent Activity
                </h2>
                <p className="text-sm text-mystical-600">Your latest progress</p>
              </div>
            </div>
            
            <button className="flex items-center space-x-2 text-secondary-600 hover:text-secondary-700 text-sm">
              <SafeIcon icon={FiDownload} />
              <span>Export Progress</span>
            </button>
          </div>

          <div className="space-y-4">
            {recentActivity.map((activity, index) => (
              <div
                key={index}
                className="flex items-center space-x-4 p-3 rounded-lg hover:bg-mystical-50 transition-colors"
              >
                <div className="w-8 h-8 bg-gradient-to-br from-mystical-600 to-mystical-700 rounded-lg flex items-center justify-center">
                  <SafeIcon icon={activity.icon} className="text-white text-xs" />
                </div>
                <div className="flex-1">
                  <p className="text-sm font-medium text-mystical-800">
                    {activity.title}
                  </p>
                  <p className="text-xs text-mystical-500">
                    {activity.date}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-8 bg-gradient-to-br from-mystical-800 to-mystical-900 rounded-2xl p-6 text-white text-center"
        >
          <h2 className="text-xl font-serif font-semibold mb-2">
            Continue Your Transformation
          </h2>
          <p className="text-mystical-200 mb-4">
            You're {Math.round(progressPercentage)}% through your journey. Keep going!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-primary-500 to-secondary-500 text-white px-6 py-3 rounded-lg hover:shadow-md transition-all">
              Continue Module {userStats.completedModules + 1}
            </button>
            <button className="border border-mystical-600 text-mystical-200 px-6 py-3 rounded-lg hover:bg-mystical-700 transition-all">
              Review Past Work
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ProfilePage;