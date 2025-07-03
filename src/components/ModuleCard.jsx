import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiPlay, FiCheck, FiClock, FiBookOpen, FiLock } = FiIcons;

const ModuleCard = ({ module, index }) => {
  const getStatusIcon = () => {
    if (module.isCompleted) return FiCheck;
    if (module.isCurrent) return FiPlay;
    return FiLock;
  };

  const getStatusColor = () => {
    if (module.isCompleted) return 'text-green-500';
    if (module.isCurrent) return 'text-primary-500';
    return 'text-mystical-400';
  };

  const getBorderColor = () => {
    if (module.isCompleted) return 'border-green-200 bg-green-50';
    if (module.isCurrent) return 'border-primary-200 bg-primary-50';
    return 'border-mystical-200 bg-white';
  };

  const isAccessible = module.isCompleted || module.isCurrent;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className={`rounded-2xl border-2 p-6 transition-all duration-300 hover:shadow-lg ${getBorderColor()}`}
    >
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center space-x-3">
          <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
            module.isCompleted 
              ? 'bg-green-500' 
              : module.isCurrent 
                ? 'bg-gradient-to-br from-primary-500 to-secondary-500' 
                : 'bg-mystical-300'
          }`}>
            <SafeIcon 
              icon={getStatusIcon()} 
              className="text-white text-sm" 
            />
          </div>
          <div>
            <h3 className="font-serif font-semibold text-mystical-800 text-lg">
              Module {module.id}
            </h3>
            <p className="text-sm text-mystical-500">
              {module.title}
            </p>
          </div>
        </div>
        
        <div className="flex items-center space-x-1 text-mystical-500">
          <SafeIcon icon={FiClock} className="text-xs" />
          <span className="text-xs">{module.duration}</span>
        </div>
      </div>

      <p className="text-mystical-600 text-sm leading-relaxed mb-4">
        {module.description}
      </p>

      <div className="mb-6">
        <h4 className="text-sm font-semibold text-mystical-700 mb-2 flex items-center space-x-1">
          <SafeIcon icon={FiBookOpen} className="text-xs" />
          <span>Activities</span>
        </h4>
        <div className="flex flex-wrap gap-2">
          {module.activities.map((activity, idx) => (
            <span
              key={idx}
              className="text-xs bg-mystical-100 text-mystical-600 px-2 py-1 rounded-full"
            >
              {activity}
            </span>
          ))}
        </div>
      </div>

      {isAccessible ? (
        <Link
          to={`/module/${module.id}`}
          className={`w-full flex items-center justify-center space-x-2 py-3 rounded-lg font-semibold text-sm transition-all duration-300 ${
            module.isCompleted
              ? 'bg-green-500 text-white hover:bg-green-600'
              : 'bg-gradient-to-r from-primary-500 to-secondary-500 text-white hover:shadow-md transform hover:scale-105'
          }`}
        >
          <SafeIcon icon={module.isCompleted ? FiCheck : FiPlay} />
          <span>{module.isCompleted ? 'Review Module' : 'Start Module'}</span>
        </Link>
      ) : (
        <div className="w-full flex items-center justify-center space-x-2 py-3 rounded-lg bg-mystical-100 text-mystical-400 font-semibold text-sm">
          <SafeIcon icon={FiLock} />
          <span>Complete Previous Modules</span>
        </div>
      )}
    </motion.div>
  );
};

export default ModuleCard;