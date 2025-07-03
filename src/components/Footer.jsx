import React from 'react';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiHeart, FiStar } = FiIcons;

const Footer = () => {
  return (
    <footer className="bg-mystical-800 text-mystical-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-full flex items-center justify-center">
                <SafeIcon icon={FiStar} className="text-white text-sm" />
              </div>
              <span className="font-serif font-semibold text-lg">
                Design Your Destiny
              </span>
            </div>
            <p className="text-mystical-300 text-sm leading-relaxed">
              A transformative journey through strengths, aspiration, and purpose. 
              Craft your vision board with intention and sacred commitment.
            </p>
          </div>

          {/* Course Info */}
          <div className="space-y-4">
            <h3 className="font-semibold text-mystical-100">Course Journey</h3>
            <ul className="space-y-2 text-sm text-mystical-300">
              <li>8 Transformative Modules</li>
              <li>Guided Reflections & Journaling</li>
              <li>Character Strengths Assessment</li>
              <li>PERMA Well-being Framework</li>
              <li>Sacred Vision Board Creation</li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h3 className="font-semibold text-mystical-100">Path4Change</h3>
            <div className="space-y-2 text-sm text-mystical-300">
              <p>Based on the Design Your Destiny Workbook</p>
              <p>Signature workshop methodology</p>
              <p>Evidence-based transformation</p>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-mystical-700">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-mystical-400">
              © 2024 Design Your Destiny Course. All rights reserved.
            </p>
            <div className="flex items-center space-x-1 text-sm text-mystical-400 mt-2 md:mt-0">
              <span>Made with</span>
              <SafeIcon icon={FiHeart} className="text-primary-400 text-xs" />
              <span>for transformation</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;