import React, { useState } from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiEdit3, FiSave, FiCheck } = FiIcons;

const JournalPrompt = ({ title, prompt, onComplete, isCompleted }) => {
  const [journalEntry, setJournalEntry] = useState('');
  const [isSaved, setIsSaved] = useState(false);

  const handleSave = () => {
    if (journalEntry.trim()) {
      setIsSaved(true);
      onComplete();
      // In a real app, you'd save this to a database
      localStorage.setItem(`journal-${title}`, journalEntry);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="bg-gradient-to-br from-accent-50 to-white rounded-2xl p-6 shadow-sm border border-accent-200"
    >
      <div className="flex items-center space-x-3 mb-4">
        <div className="w-10 h-10 bg-gradient-to-br from-accent-500 to-accent-600 rounded-lg flex items-center justify-center">
          <SafeIcon icon={FiEdit3} className="text-white text-sm" />
        </div>
        <div>
          <h3 className="text-lg font-serif font-semibold text-mystical-800">
            Journal Reflection
          </h3>
          <p className="text-sm text-mystical-600">{title}</p>
        </div>
        {isCompleted && (
          <div className="ml-auto">
            <SafeIcon icon={FiCheck} className="text-green-500 text-xl" />
          </div>
        )}
      </div>

      <div className="bg-accent-100 rounded-lg p-4 mb-4">
        <p className="text-mystical-700 italic leading-relaxed">
          "{prompt}"
        </p>
      </div>

      <div className="space-y-4">
        <textarea
          value={journalEntry}
          onChange={(e) => setJournalEntry(e.target.value)}
          placeholder="Begin writing your reflection here..."
          className="w-full h-40 p-4 border border-mystical-200 rounded-lg focus:ring-2 focus:ring-accent-500 focus:border-accent-500 resize-none"
          disabled={isSaved}
        />

        {!isSaved ? (
          <button
            onClick={handleSave}
            disabled={!journalEntry.trim()}
            className="flex items-center space-x-2 bg-gradient-to-r from-accent-500 to-accent-600 text-white px-4 py-2 rounded-lg hover:shadow-md transition-all disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <SafeIcon icon={FiSave} />
            <span>Save Reflection</span>
          </button>
        ) : (
          <div className="flex items-center space-x-2 text-green-600">
            <SafeIcon icon={FiCheck} />
            <span className="font-medium">Reflection Saved</span>
          </div>
        )}
      </div>

      <div className="mt-4 pt-4 border-t border-accent-200">
        <p className="text-xs text-mystical-500">
          💡 Tip: Be honest and authentic in your writing. This is your private space for self-discovery.
        </p>
      </div>
    </motion.div>
  );
};

export default JournalPrompt;