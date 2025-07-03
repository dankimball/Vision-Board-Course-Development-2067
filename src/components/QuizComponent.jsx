import React, { useState } from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiHelpCircle, FiCheck, FiX, FiRefreshCw } = FiIcons;

const QuizComponent = ({ title, questions, onComplete, isCompleted }) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [showResults, setShowResults] = useState(false);
  const [quizStarted, setQuizStarted] = useState(false);

  const handleAnswerSelect = (questionIndex, answerIndex) => {
    setSelectedAnswers(prev => ({
      ...prev,
      [questionIndex]: answerIndex
    }));
  };

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResults(true);
      onComplete();
    }
  };

  const getScore = () => {
    let correct = 0;
    questions.forEach((question, index) => {
      if (selectedAnswers[index] === question.correct) {
        correct++;
      }
    });
    return correct;
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setSelectedAnswers({});
    setShowResults(false);
    setQuizStarted(false);
  };

  if (!quizStarted) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="bg-gradient-to-br from-secondary-50 to-white rounded-2xl p-6 shadow-sm border border-secondary-200"
      >
        <div className="flex items-center space-x-3 mb-4">
          <div className="w-10 h-10 bg-gradient-to-br from-secondary-500 to-secondary-600 rounded-lg flex items-center justify-center">
            <SafeIcon icon={FiHelpCircle} className="text-white text-sm" />
          </div>
          <div>
            <h3 className="text-lg font-serif font-semibold text-mystical-800">
              Knowledge Check
            </h3>
            <p className="text-sm text-mystical-600">{title}</p>
          </div>
          {isCompleted && (
            <div className="ml-auto">
              <SafeIcon icon={FiCheck} className="text-green-500 text-xl" />
            </div>
          )}
        </div>

        <div className="text-center">
          <p className="text-mystical-600 mb-6">
            Test your understanding with {questions.length} questions. 
            You'll receive immediate feedback on each answer.
          </p>
          <button
            onClick={() => setQuizStarted(true)}
            className="bg-gradient-to-r from-secondary-500 to-secondary-600 text-white px-6 py-3 rounded-lg hover:shadow-md transition-all"
          >
            Start Quiz
          </button>
        </div>
      </motion.div>
    );
  }

  if (showResults) {
    const score = getScore();
    const percentage = Math.round((score / questions.length) * 100);
    
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="bg-gradient-to-br from-secondary-50 to-white rounded-2xl p-6 shadow-sm border border-secondary-200"
      >
        <div className="text-center mb-6">
          <div className="w-16 h-16 bg-gradient-to-br from-secondary-500 to-secondary-600 rounded-full flex items-center justify-center mx-auto mb-4">
            <SafeIcon icon={FiCheck} className="text-white text-2xl" />
          </div>
          <h3 className="text-xl font-serif font-semibold text-mystical-800 mb-2">
            Quiz Complete!
          </h3>
          <p className="text-2xl font-bold text-secondary-600 mb-2">
            {score} / {questions.length} Correct
          </p>
          <p className="text-mystical-600">
            {percentage >= 80 ? 'Excellent understanding!' : 
             percentage >= 60 ? 'Good work!' : 
             'Consider reviewing the material'}
          </p>
        </div>

        <div className="space-y-4">
          {questions.map((question, index) => {
            const userAnswer = selectedAnswers[index];
            const isCorrect = userAnswer === question.correct;
            
            return (
              <div key={index} className="bg-white rounded-lg p-4 border border-mystical-100">
                <div className="flex items-start space-x-3">
                  <SafeIcon 
                    icon={isCorrect ? FiCheck : FiX} 
                    className={`mt-1 ${isCorrect ? 'text-green-500' : 'text-red-500'}`}
                  />
                  <div className="flex-1">
                    <p className="font-medium text-mystical-800 mb-2">
                      {question.question}
                    </p>
                    <p className="text-sm text-mystical-600 mb-2">
                      Your answer: {question.options[userAnswer]}
                    </p>
                    {!isCorrect && (
                      <p className="text-sm text-green-600 mb-2">
                        Correct answer: {question.options[question.correct]}
                      </p>
                    )}
                    <p className="text-xs text-mystical-500">
                      {question.explanation}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="text-center mt-6">
          <button
            onClick={resetQuiz}
            className="flex items-center space-x-2 mx-auto text-secondary-600 hover:text-secondary-700"
          >
            <SafeIcon icon={FiRefreshCw} />
            <span>Retake Quiz</span>
          </button>
        </div>
      </motion.div>
    );
  }

  const question = questions[currentQuestion];
  const selectedAnswer = selectedAnswers[currentQuestion];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="bg-gradient-to-br from-secondary-50 to-white rounded-2xl p-6 shadow-sm border border-secondary-200"
    >
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-gradient-to-br from-secondary-500 to-secondary-600 rounded-lg flex items-center justify-center">
            <SafeIcon icon={FiHelpCircle} className="text-white text-sm" />
          </div>
          <div>
            <h3 className="text-lg font-serif font-semibold text-mystical-800">
              {title}
            </h3>
            <p className="text-sm text-mystical-600">
              Question {currentQuestion + 1} of {questions.length}
            </p>
          </div>
        </div>
        
        <div className="text-sm text-mystical-500">
          {Math.round(((currentQuestion + 1) / questions.length) * 100)}%
        </div>
      </div>

      <div className="mb-6">
        <h4 className="text-lg font-medium text-mystical-800 mb-4">
          {question.question}
        </h4>
        
        <div className="space-y-3">
          {question.options.map((option, index) => (
            <button
              key={index}
              onClick={() => handleAnswerSelect(currentQuestion, index)}
              className={`w-full text-left p-4 rounded-lg border-2 transition-all ${
                selectedAnswer === index
                  ? 'border-secondary-500 bg-secondary-50'
                  : 'border-mystical-200 hover:border-secondary-300 hover:bg-mystical-50'
              }`}
            >
              <div className="flex items-center space-x-3">
                <div className={`w-4 h-4 rounded-full border-2 ${
                  selectedAnswer === index
                    ? 'border-secondary-500 bg-secondary-500'
                    : 'border-mystical-300'
                }`}>
                  {selectedAnswer === index && (
                    <div className="w-full h-full rounded-full bg-white scale-50"></div>
                  )}
                </div>
                <span className="text-mystical-700">{option}</span>
              </div>
            </button>
          ))}
        </div>
      </div>

      <div className="flex justify-between items-center">
        <button
          onClick={() => setCurrentQuestion(Math.max(0, currentQuestion - 1))}
          disabled={currentQuestion === 0}
          className="text-mystical-600 hover:text-secondary-600 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Previous
        </button>
        
        <button
          onClick={handleNext}
          disabled={selectedAnswer === undefined}
          className="bg-gradient-to-r from-secondary-500 to-secondary-600 text-white px-6 py-2 rounded-lg hover:shadow-md transition-all disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {currentQuestion === questions.length - 1 ? 'Finish Quiz' : 'Next Question'}
        </button>
      </div>
    </motion.div>
  );
};

export default QuizComponent;