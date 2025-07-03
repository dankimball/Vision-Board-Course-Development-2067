import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiArrowRight, FiStar, FiCompass, FiHeart, FiEye, FiTarget, FiBookOpen, FiAward, FiUsers } = FiIcons;

const HomePage = () => {
  const features = [
    {
      icon: FiCompass,
      title: "Sacred Self-Discovery",
      description: "Travel through your character strengths, and archetypal wisdom to discover your authentic self."
    },
    {
      icon: FiHeart,
      title: "PERMA Well-being",
      description: "Build your vision around Positive emotions, Engagement, Relationships, Meaning, and Achievement."
    },
    {
      icon: FiEye,
      title: "Vision Board Mastery",
      description: "Create a meaningful, intention-driven vision board that serves as your sacred roadmap to transformation."
    },
    {
      icon: FiTarget,
      title: "Actionable Integration",
      description: "Transform insights into action with the ARIA model and practical accountability systems."
    }
  ];

  const courseHighlights = [
    { icon: FiBookOpen, text: "8 Transformative Modules" },
    { icon: FiAward, text: "Certificate of Completion" },
    { icon: FiUsers, text: "Private Community Access" },
    { icon: FiStar, text: "VIA Character Assessment" }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-50 via-white to-secondary-50 opacity-60"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <div className="flex justify-center">
                <div className="w-20 h-20 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-full flex items-center justify-center animate-float">
                  <SafeIcon icon={FiStar} className="text-white text-3xl" />
                </div>
              </div>
              
              <h1 className="text-4xl lg:text-6xl font-serif font-bold text-mystical-800 leading-tight">
                Design Your Destiny
              </h1>
              
              <p className="text-xl lg:text-2xl text-mystical-600 font-light">
              LETS DO THIS NOW https://dreamy-eclair-e6aef6.netlify.app
              </p>
              
              <div className="max-w-3xl mx-auto">
                <p className="text-lg text-mystical-600 leading-relaxed">
                  This immersive course blends creative self-discovery with proven psychological tools 
                  to help you craft a life-aligned vision board rooted in character strengths, 
                  the ARIA model of change, and PERMA well-being.  IS NT THAT GREAT
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
                <Link
                  to="/course"
                  className="group bg-gradient-to-r from-primary-500 to-secondary-500 text-white px-8 py-4 rounded-full font-semibold text-lg hover:shadow-lg transform hover:scale-105 transition-all duration-300 flex items-center space-x-2"
                >
                  <span>Begin Your Journey</span>
                  <SafeIcon icon={FiArrowRight} className="group-hover:translate-x-1 transition-transform" />
                </Link>
                
                <div className="flex items-center space-x-4 text-mystical-600">
                  {courseHighlights.map((highlight, index) => (
                    <div key={index} className="flex items-center space-x-1 text-sm">
                      <SafeIcon icon={highlight.icon} className="text-primary-500" />
                      <span>{highlight.text}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl lg:text-4xl font-serif font-bold text-mystical-800 mb-4">
                More Than a Craft Project
              </h2>
              <p className="text-lg text-mystical-600 max-w-2xl mx-auto">
                A journey of individuation, shadow integration, and sacred intention-setting 
                that leads to meaningful, lasting personal transformation.
              </p>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-mystical-50 to-white p-6 rounded-2xl hover:shadow-lg transition-shadow duration-300"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-xl flex items-center justify-center mb-4">
                  <SafeIcon icon={feature.icon} className="text-white text-xl" />
                </div>
                <h3 className="text-lg font-semibold text-mystical-800 mb-2">
                  {feature.title}
                </h3>
                <p className="text-mystical-600 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-mystical-800 to-mystical-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center text-white"
          >
            <h2 className="text-3xl lg:text-4xl font-serif font-bold mb-6">
              Ready to Design Your Destiny?
            </h2>
            <p className="text-xl text-mystical-200 mb-8 max-w-2xl mx-auto">
              Join thousands who have transformed their lives through this sacred journey 
              of self-discovery and intentional creation.
            </p>
            <Link
              to="/course"
              className="inline-flex items-center space-x-2 bg-gradient-to-r from-primary-500 to-secondary-500 text-white px-8 py-4 rounded-full font-semibold text-lg hover:shadow-lg transform hover:scale-105 transition-all duration-300"
            >
              <span>Start Your Transformation</span>
              <SafeIcon icon={FiArrowRight} className="hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
