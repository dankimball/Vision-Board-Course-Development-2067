import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';
import ModuleCard from '../components/ModuleCard';

const { FiPlay, FiClock, FiBookOpen, FiAward, FiUsers, FiDownload } = FiIcons;

const CoursePage = () => {
  const [userProgress] = useState({
    completedModules: [1, 2],
    currentModule: 3,
    totalModules: 8
  });

  const modules = [
    {
      id: 1,
      title: "Welcome to the Fun",
      description: "What is a Vision Board & Why it Works. Evidence-Based Practices & Law of Attraction. Your Sacred Commitment to Begin.",
      duration: "45 min",
      activities: ["Journal Prompt", "Sacred Commitment"],
      isCompleted: userProgress.completedModules.includes(1),
      isCurrent: userProgress.currentModule === 1
    },
    {
      id: 2,
      title: "Awareness & Acceptance",
      description: "Shadow, Defenses, Nigredo (Blackening). Strengths of the Head & Acceptance Strengths.",
      duration: "60 min",
      activities: ["Strengths Reflection", "Quiz: Know Thyself", "Awareness Worksheet"],
      isCompleted: userProgress.completedModules.includes(2),
      isCurrent: userProgress.currentModule === 2
    },
    {
      id: 3,
      title: "Discover Your Signature Strengths",
      description: "VIA Survey & Interpretation. Understanding Signature vs. Phasic Strengths. Underuse vs. Overuse of Strengths.",
      duration: "50 min",
      activities: ["VIA Assessment", "Strengths Map", "Journal Reflection"],
      isCompleted: userProgress.completedModules.includes(3),
      isCurrent: userProgress.currentModule === 3
    },
    {
      id: 4,
      title: "Your Deepest Aspiration",
      description: "Aspiration, Qi, and Purpose as Breath. The Sacred Vow & the Golden Thread of Calling.",
      duration: "55 min",
      activities: ["Aspiration Writing", "Guided Meditation", "Sacred Fire Journal"],
      isCompleted: userProgress.completedModules.includes(4),
      isCurrent: userProgress.currentModule === 4
    },
    {
      id: 5,
      title: "PERMA Vision Mapping",
      description: "Define each PERMA domain with real goals. Link PERMA domains to specific strengths.",
      duration: "65 min",
      activities: ["PERMA Planning", "Strengths Mapping", "Vision Board Blueprint"],
      isCompleted: userProgress.completedModules.includes(5),
      isCurrent: userProgress.currentModule === 5
    },
    {
      id: 6,
      title: "Create Your Vision Board",
      description: "Best Practices for Board Design. Image & Symbol Collection. Meaning-Driven Creation.",
      duration: "90 min",
      activities: ["Board Creation", "Photo Upload", "Theme Analysis"],
      isCompleted: userProgress.completedModules.includes(6),
      isCurrent: userProgress.currentModule === 6
    },
    {
      id: 7,
      title: "Integration & Sacred Space",
      description: "The Ritual of Completion & Sacred Vow. Shadow & Light in Your Vision.",
      duration: "40 min",
      activities: ["Completion Ritual", "Shadow Work", "Integration Checklist"],
      isCompleted: userProgress.completedModules.includes(7),
      isCurrent: userProgress.currentModule === 7
    },
    {
      id: 8,
      title: "Accountability & Flourishing",
      description: "ARIA Model Review. SMART Goals vs. Soul Goals. Vision Activation Plan.",
      duration: "50 min",
      activities: ["Activation Plan", "Community Access", "Final Reflection"],
      isCompleted: userProgress.completedModules.includes(8),
      isCurrent: userProgress.currentModule === 8
    }
  ];

  const courseFeatures = [
    { icon: FiBookOpen, text: "8 Transformative Modules", desc: "Complete journey from awareness to action" },
    { icon: FiClock, text: "Self-Paced Learning", desc: "Complete at your own rhythm" },
    { icon: FiDownload, text: "Downloadable Resources", desc: "Worksheets, checklists, and tools" },
    { icon: FiUsers, text: "Private Community", desc: "Connect with fellow journey travelers" },
    { icon: FiAward, text: "Certificate of Completion", desc: "Recognize your transformation" },
    { icon: FiPlay, text: "Guided Meditations", desc: "Audio support for deep work" }
  ];

  const progressPercentage = (userProgress.completedModules.length / userProgress.totalModules) * 100;

  return (
    <div className="min-h-screen py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Course Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl lg:text-5xl font-serif font-bold text-mystical-800 mb-4">
            Design Your Destiny Course
          </h1>
          <p className="text-xl text-mystical-600 max-w-3xl mx-auto mb-8">
            A Vision Board Journey Through Strengths, Aspiration, and Purpose
          </p>

          {/* Progress Bar */}
          <div className="max-w-md mx-auto mb-8">
            <div className="flex justify-between items-center mb-2">
              <span className="text-sm font-medium text-mystical-600">Course Progress</span>
              <span className="text-sm font-medium text-mystical-600">{Math.round(progressPercentage)}%</span>
            </div>
            <div className="w-full bg-mystical-200 rounded-full h-2">
              <motion.div
                className="bg-gradient-to-r from-primary-500 to-secondary-500 h-2 rounded-full"
                initial={{ width: 0 }}
                animate={{ width: `${progressPercentage}%` }}
                transition={{ duration: 1, delay: 0.5 }}
              />
            </div>
            <p className="text-sm text-mystical-500 mt-2">
              {userProgress.completedModules.length} of {userProgress.totalModules} modules completed
            </p>
          </div>
        </motion.div>

        {/* Course Features */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-16"
        >
          <div className="bg-white rounded-2xl p-8 shadow-sm border border-mystical-100">
            <h2 className="text-2xl font-serif font-semibold text-mystical-800 mb-6 text-center">
              What's Included
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {courseFeatures.map((feature, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-lg flex items-center justify-center flex-shrink-0">
                    <SafeIcon icon={feature.icon} className="text-white text-sm" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-mystical-800 text-sm">{feature.text}</h3>
                    <p className="text-mystical-600 text-xs mt-1">{feature.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* Modules Grid */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h2 className="text-3xl font-serif font-semibold text-mystical-800 mb-8 text-center">
            Course Modules
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {modules.map((module, index) => (
              <ModuleCard
                key={module.id}
                module={module}
                index={index}
              />
            ))}
          </div>
        </motion.section>

        {/* Call to Action */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-br from-mystical-800 to-mystical-900 rounded-2xl p-8 text-white">
            <h2 className="text-2xl font-serif font-semibold mb-4">
              Ready to Continue Your Journey?
            </h2>
            <p className="text-mystical-200 mb-6 max-w-2xl mx-auto">
              Each module builds upon the last, creating a comprehensive transformation experience 
              rooted in evidence-based practices and sacred intention.
            </p>
            <Link
              to={`/module/${userProgress.currentModule}`}
              className="inline-flex items-center space-x-2 bg-gradient-to-r from-primary-500 to-secondary-500 text-white px-6 py-3 rounded-full font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-300"
            >
              <SafeIcon icon={FiPlay} />
              <span>Continue to Module {userProgress.currentModule}</span>
            </Link>
          </div>
        </motion.section>
      </div>
    </div>
  );
};

export default CoursePage;