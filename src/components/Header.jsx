import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiMenu, FiX, FiHome, FiBookOpen, FiUser, FiStar } = FiIcons;

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navigation = [
    { name: 'Home', href: '/', icon: FiHome },
    { name: 'Course', href: '/course', icon: FiBookOpen },
    { name: 'Profile', href: '/profile', icon: FiUser },
  ];

  return (
    <header className="bg-white/80 backdrop-blur-md border-b border-mystical-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-full flex items-center justify-center">
              <SafeIcon icon={FiStar} className="text-white text-sm" />
            </div>
            <span className="font-serif font-semibold text-mystical-800 text-lg">
              Design Your Destiny
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`flex items-center space-x-1 px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  location.pathname === item.href
                    ? 'text-primary-600 bg-primary-50'
                    : 'text-mystical-600 hover:text-primary-600 hover:bg-mystical-50'
                }`}
              >
                <SafeIcon icon={item.icon} className="text-sm" />
                <span>{item.name}</span>
              </Link>
            ))}
          </nav>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-md text-mystical-600 hover:text-primary-600 hover:bg-mystical-50"
          >
            <SafeIcon icon={isMenuOpen ? FiX : FiMenu} className="text-xl" />
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="md:hidden py-4 border-t border-mystical-200"
          >
            <div className="flex flex-col space-y-2">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className={`flex items-center space-x-2 px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                    location.pathname === item.href
                      ? 'text-primary-600 bg-primary-50'
                      : 'text-mystical-600 hover:text-primary-600 hover:bg-mystical-50'
                  }`}
                >
                  <SafeIcon icon={item.icon} className="text-sm" />
                  <span>{item.name}</span>
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </div>
    </header>
  );
};

export default Header;