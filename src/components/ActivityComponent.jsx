import React, { useState } from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiTarget, FiCheck, FiCheckSquare } = FiIcons;

const ActivityComponent = ({ title, description, instructions, onComplete, isCompleted }) => {
  const [completedSteps, setCompletedSteps] = useState([]);
  const [notes, setNotes] = useState('');
  const [isActivityComplete, setIsActivityComplete] = useState(false);

  const toggleStep = (stepIndex) => {
    setCompletedSteps(prev => {
      const newCompleted = prev.includes(stepIndex)
        ? prev.filter(i => i !== stepIndex)
        : [...prev, stepIndex];
      
      // Check if all steps are completed
      if (newCompleted.length === instructions.length && !isActivityComplete) {
        setIsActivityComplete(true);
        onComplete();
      }
      
      return newCompleted;
    });
  };

  const saveNotes = () => {
    // In a real app, save to database
    localStorage.setItem(`activity-${title}`, notes);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="bg-gradient-to-br from-primary-50 to-white rounded-2xl p-6 shadow-sm border border-primary-200"
    >
      <div className="flex items-center space-x-3 mb-4">
        <div className="w-10 h-10 bg-gradient-to-br from-primary-500 to-primary-600 rounded-lg flex items-center justify-center">
          <SafeIcon icon={FiTarget} className="text-white text-sm" />
        </div>
        <div>
          <h3 className="text-lg font-serif font-semibold text-mystical-800">
            Practical Activity
          </h3>
          <p className="text-sm text-mystical-600">{title}</p>
        </div>
        {isCompleted && (
          <div className="ml-auto">
            <SafeIcon icon={FiCheck} className="text-green-500 text-xl" />
          </div>
        )}
      </div>

      <div className="bg-primary-100 rounded-lg p-4 mb-6">
        <p className="text-mystical-700 leading-relaxed">
          {description}
        </p>
      </div>

      <div className="space-y-4 mb-6">
        <h4 className="font-semibold text-mystical-800 mb-3">Instructions:</h4>
        {instructions.map((instruction, index) => (
          <div
            key={index}
            className="flex items-start space-x-3 p-3 rounded-lg hover:bg-mystical-50 transition-colors"
          >
            <button
              onClick={() => toggleStep(index)}
              className={`mt-1 w-5 h-5 rounded border-2 flex items-center justify-center transition-colors ${
                completedSteps.includes(index)
                  ? 'bg-primary-500 border-primary-500'
                  : 'border-mystical-300 hover:border-primary-400'
              }`}
            >
              {completedSteps.includes(index) && (
                <SafeIcon icon={FiCheck} className="text-white text-xs" />
              )}
            </button>
            <div className="flex-1">
              <p className={`text-sm leading-relaxed ${
                completedSteps.includes(index) 
                  ? 'text-mystical-500 line-through' 
                  : 'text-mystical-700'
              }`}>
                {instruction}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="border-t border-primary-200 pt-4">
        <h4 className="font-semibold text-mystical-800 mb-3">Activity Notes:</h4>
        <textarea
          value={notes}
          onChange={(e) => setNotes(e.target.value)}
          onBlur={saveNotes}
          placeholder="Record your insights, observations, or reflections from this activity..."
          className="w-full h-24 p-3 border border-mystical-200 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 resize-none text-sm"
        />
      </div>

      {isActivityComplete && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-4 p-3 bg-green-50 border border-green-200 rounded-lg"
        >
          <div className="flex items-center space-x-2 text-green-700">
            <SafeIcon icon={FiCheckSquare} />
            <span className="font-medium">Activity Complete!</span>
          </div>
          <p className="text-sm text-green-600 mt-1">
            Great work completing this transformative activity. Your notes have been saved.
          </p>
        </motion.div>
      )}

      <div className="mt-4 pt-4 border-t border-primary-200">
        <p className="text-xs text-mystical-500">
          💡 Tip: Take your time with each step. The quality of your engagement determines the depth of your transformation.
        </p>
      </div>
    </motion.div>
  );
};

export default ActivityComponent;