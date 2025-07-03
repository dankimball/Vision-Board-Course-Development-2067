import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';
import JournalPrompt from '../components/JournalPrompt';
import QuizComponent from '../components/QuizComponent';
import ActivityComponent from '../components/ActivityComponent';

const { FiArrowLeft, FiArrowRight, FiBookOpen, FiEdit3, FiAward, FiDownload, FiPlay, FiCheck } = FiIcons;

const ModulePage = () => {
  const { moduleId } = useParams();
  const [currentSection, setCurrentSection] = useState(0);
  const [moduleProgress, setModuleProgress] = useState({
    sectionsCompleted: [],
    journalCompleted: false,
    quizCompleted: false,
    activityCompleted: false
  });

  const moduleData = {
    1: {
      title: "Welcome to the Journey",
      subtitle: "What is a Vision Board & Why it Works",
      duration: "45 min",
      sections: [
        {
          title: "Understanding Vision Boards",
          content: `A vision board is more than a collection of pretty pictures—it's a sacred tool for transformation. Rooted in neuroscience and positive psychology, vision boards work by activating your reticular activating system (RAS), the brain's filtering mechanism that helps you notice opportunities aligned with your goals.

When you create a vision board with intention and purpose, you're not just dreaming—you're programming your subconscious mind to recognize the people, resources, and opportunities that will help manifest your deepest aspirations.

This course goes beyond surface-level vision boarding. We integrate:
• Character strengths psychology (VIA Survey)
• PERMA well-being framework  
• ARIA model of sustainable change
• Jungian shadow work and individuation
• Sacred intention-setting practices

Your vision board becomes a living document of your soul's calling, grounded in evidence-based practices and archetypal wisdom.`
        },
        {
          title: "The Science Behind Visualization",
          content: `Research in neuroscience shows that visualization activates the same neural pathways as actual experience. When you regularly visualize your goals, your brain begins to believe they're achievable and starts working toward them automatically.

The Law of Attraction, while often misunderstood, has solid psychological foundations:

**Attention and Awareness**: What you focus on expands. Your vision board keeps your goals at the forefront of your consciousness.

**Motivation and Action**: Clear visual representation of your goals increases intrinsic motivation and goal-directed behavior.

**Opportunity Recognition**: When you're clear about what you want, you notice relevant opportunities that were always there but previously invisible.

**Neuroplasticity**: Regular visualization literally rewires your brain, creating new neural pathways that support your desired outcomes.

This isn't magical thinking—it's applied neuroscience combined with ancient wisdom about the power of intention and focused attention.`
        },
        {
          title: "Your Sacred Commitment",
          content: `Before we begin this transformative journey, we invite you to make a sacred commitment—not just to completing the course, but to showing up authentically for your own transformation.

This journey will ask you to:
• Face your shadow and integrate rejected aspects of yourself
• Question limiting beliefs and outdated stories
• Commit to practices that may feel uncomfortable at first
• Trust the process even when you can't see the outcome

**Your Sacred Vow**:
"I commit to showing up fully for this journey of transformation. I will engage with curiosity rather than judgment, courage rather than comfort, and authenticity rather than perfection. I understand that true change requires both inner work and outer action, and I am ready to embrace both."

Take a moment to feel the weight and power of this commitment. This isn't just about creating a vision board—it's about designing a life that reflects your deepest truth and highest potential.`
        }
      ],
      journalPrompt: {
        title: "Sacred Beginning",
        prompt: "What chapter of life am I ending—and what am I beginning? Reflect on what you're ready to release and what you're calling in. Write about the threshold you're crossing as you begin this journey."
      },
      quiz: {
        title: "Foundation Understanding",
        questions: [
          {
            question: "What is the primary psychological mechanism that makes vision boards effective?",
            options: [
              "Positive thinking",
              "Reticular Activating System (RAS)",
              "Law of Attraction",
              "Creative visualization"
            ],
            correct: 1,
            explanation: "The RAS is your brain's filtering system that helps you notice information relevant to your goals and values."
          },
          {
            question: "This course integrates vision boarding with which evidence-based frameworks?",
            options: [
              "Only positive psychology",
              "VIA Character Strengths and PERMA well-being",
              "Just the Law of Attraction",
              "Traditional goal-setting methods"
            ],
            correct: 1,
            explanation: "We combine vision boarding with VIA Character Strengths, PERMA well-being, ARIA change model, and Jungian psychology."
          }
        ]
      },
      activity: {
        title: "Sacred Commitment Ritual",
        description: "Create a personal ritual to mark the beginning of your journey. This might include lighting a candle, writing your sacred vow, or creating a small altar space for your work.",
        instructions: [
          "Find a quiet, sacred space where you won't be interrupted",
          "Light a candle or create another meaningful ritual element",
          "Write out your Sacred Vow in your own words",
          "Speak your commitment aloud",
          "Keep this written vow somewhere you'll see it throughout the course"
        ]
      }
    },
    2: {
      title: "Awareness & Acceptance",
      subtitle: "Shadow Work and Character Strengths",
      duration: "60 min",
      sections: [
        {
          title: "Understanding Shadow Work",
          content: `Carl Jung taught us that what we resist in ourselves doesn't disappear—it goes underground, into what he called the "shadow." The shadow contains not just our rejected negative traits, but also our disowned positive qualities, our unlived potential, and our authentic power.

In alchemical terms, this is the *nigredo* or "blackening"—the necessary descent into darkness that precedes transformation. Before we can create an authentic vision for our future, we must honestly face what we've been avoiding about ourselves.

**Common Shadow Elements**:
• Anger we've been taught is "unspiritual"
• Ambition we've been told is "selfish"  
• Sensitivity we've learned to see as "weakness"
• Power we've been taught to fear
• Creativity we've dismissed as "impractical"

The goal isn't to eliminate the shadow—it's to integrate it consciously. When we own our shadow, we reclaim our wholeness and authentic power. Your vision board will be far more potent when it emerges from this place of integrated authenticity.`
        },
        {
          title: "Defenses and Awareness",
          content: `We all develop psychological defenses to protect ourselves from pain, rejection, and vulnerability. While these defenses served us at one time, they can also keep us from our authentic desires and full potential.

**Common Defenses That Block Vision**:
• **Perfectionism**: "I'll start when I have it all figured out"
• **Cynicism**: "Vision boards are just wishful thinking"  
• **Comparison**: "Others are more deserving/talented/lucky"
• **Overwhelm**: "There are too many possibilities"
• **Minimizing**: "I shouldn't want too much"

**Strengths of Awareness**:
The VIA Character Strengths that support awareness and acceptance include:

• **Curiosity**: Openness to experience and learning
• **Love of Learning**: Desire to understand and grow
• **Creativity**: Ability to see new possibilities
• **Judgment**: Critical thinking and discernment
• **Perspective**: Wisdom and the big picture view
• **Spirituality**: Connection to meaning and purpose

These strengths help us approach our shadow work with compassion rather than judgment, curiosity rather than fear.`
        },
        {
          title: "The Gifts of Acceptance",
          content: `True acceptance doesn't mean resignation—it means embracing reality as the starting point for transformation. When we stop fighting what is, we free up tremendous energy for creating what could be.

**Acceptance Practices**:
• Acknowledging your current life without judgment
• Honoring your past choices and their lessons
• Embracing your full emotional range
• Recognizing your defenses with compassion
• Celebrating your survival and resilience

**The Paradox of Change**: We can only change what we fully accept. Resistance keeps us stuck; acceptance creates the space for transformation.

As you move through this module, notice what arises. Your resistance is information. Your judgments are doorways. Your discomfort is often a sign you're touching something important.

Remember: You are not broken and don't need fixing. You are a whole being ready for the next level of your evolution.`
        }
      ],
      journalPrompt: {
        title: "Shadow Integration",
        prompt: "What aspects of yourself have you been hiding, denying, or rejecting? What would you be capable of if you fully owned your power? Write about both your 'negative' shadow (what you judge in yourself) and your 'golden' shadow (positive qualities you haven't fully claimed)."
      },
      quiz: {
        title: "Know Thyself",
        questions: [
          {
            question: "In Jungian psychology, the shadow contains:",
            options: [
              "Only negative traits we've rejected",
              "Only positive qualities we've disowned",
              "Both rejected negative traits and disowned positive qualities",
              "Only childhood traumas"
            ],
            correct: 2,
            explanation: "The shadow contains both negative traits we've rejected AND positive qualities we haven't fully claimed or integrated."
          },
          {
            question: "Which VIA strength is most important for shadow work?",
            options: [
              "Hope",
              "Curiosity",
              "Leadership",
              "Gratitude"
            ],
            correct: 1,
            explanation: "Curiosity allows us to approach our shadow with openness and non-judgment, essential for integration work."
          }
        ]
      },
      activity: {
        title: "Strengths Reflection Exercise",
        description: "Complete a preliminary assessment of your character strengths and identify areas where you might be over-using, under-using, or avoiding certain strengths.",
        instructions: [
          "Review the 24 VIA Character Strengths (provided worksheet)",
          "Rate each strength from 1-5 based on how much you currently use it",
          "Identify 3 strengths you might be over-using (causing problems)",
          "Identify 3 strengths you might be under-using (missed opportunities)",
          "Reflect on which strengths you judge in others (potential shadow material)"
        ]
      }
    },
    3: {
      title: "Discover Your Signature Strengths",
      subtitle: "VIA Assessment and Interpretation",
      duration: "50 min",
      sections: [
        {
          title: "Understanding the VIA Survey",
          content: `The VIA (Values in Action) Character Strengths Survey is one of the most scientifically validated tools in positive psychology. Developed by Dr. Martin Seligman and Dr. Christopher Peterson, it identifies your top character strengths from 24 universal strengths found across cultures and throughout history.

**Why Character Strengths Matter for Vision Boarding**:
Your vision board should reflect not just what you want, but WHO you are at your core. When your goals align with your signature strengths, you have more energy, feel more authentic, and achieve better outcomes.

**The 24 VIA Character Strengths** are organized into 6 virtues:

**Wisdom & Knowledge**: Creativity, Curiosity, Judgment, Love of Learning, Perspective

**Courage**: Bravery, Perseverance, Honesty, Zest

**Humanity**: Love, Kindness, Social Intelligence

**Justice**: Teamwork, Fairness, Leadership

**Temperance**: Forgiveness, Humility, Prudence, Self-Regulation

**Transcendence**: Appreciation of Beauty, Gratitude, Hope, Humor, Spirituality

Your top 5 strengths are considered your "signature strengths"—the ones that feel most authentic and energizing to use.`
        },
        {
          title: "Signature vs. Phasic Strengths",
          content: `**Signature Strengths** (Top 5):
• Feel authentic and true to who you are
• Energize rather than drain you
• Come naturally and easily
• You're drawn to use them even without external rewards
• Others often recognize these strengths in you
• Using them contributes to your sense of fulfillment

**Phasic Strengths** (Middle strengths):
• Situational—you can use them when needed
• May require more effort to access
• Useful tools in your toolkit
• Don't define your core identity

**Lower Strengths** (Bottom 5):
• May feel forced or inauthentic when overused
• Can be developed if needed for specific goals
• Not necessarily weaknesses—just not your natural go-to

**Important**: There are no "bad" strengths rankings. Every combination is valuable and unique.

**For Vision Boarding**: Focus primarily on how your signature strengths can be expressed through your goals and aspirations. This ensures your vision feels authentic and achievable.`
        },
        {
          title: "The Golden Mean: Underuse vs. Overuse",
          content: `Aristotle taught about the "golden mean"—the balanced use of our virtues. Even our greatest strengths can become problematic when over-used or under-used.

**Underuse** occurs when we don't use a strength enough:
• **Creativity** underused → Stuck in routine, lack of innovation
• **Bravery** underused → Avoiding necessary risks, staying in comfort zone  
• **Love** underused → Isolation, missed connections
• **Hope** underused → Pessimism, giving up too easily

**Overuse** occurs when we rely too heavily on a strength:
• **Creativity** overused → Chaos, inability to follow through
• **Bravery** overused → Recklessness, unnecessary risk-taking
• **Love** overused → Codependency, boundary issues
• **Hope** overused → Unrealistic optimism, poor planning

**The Sweet Spot**: Using your strengths in the right amount, at the right time, in the right way, for the right reasons.

**For Your Vision Board**: Consider how you can express your signature strengths in balanced ways. What would the "golden mean" look like for each of your top strengths in the context of your goals?`
        }
      ],
      journalPrompt: {
        title: "Authentic Self-Expression",
        prompt: "When do I feel most like my true self? Describe specific moments when you felt fully alive, authentic, and energized. What strengths were you using? How can these moments inform your vision for the future?"
      },
      quiz: {
        title: "Strengths Integration",
        questions: [
          {
            question: "Signature strengths are characterized by:",
            options: [
              "Being the most important strengths everyone should have",
              "Feeling energizing and authentic when used",
              "Being the hardest strengths to develop",
              "Only being useful in professional settings"
            ],
            correct: 1,
            explanation: "Signature strengths feel energizing, authentic, and true to who you are at your core."
          },
          {
            question: "The 'golden mean' refers to:",
            options: [
              "Having average levels of all strengths",
              "Using strengths in balanced ways—not too much or too little",
              "Only using your top 5 strengths",
              "Developing your weakest strengths"
            ],
            correct: 1,
            explanation: "The golden mean is about using strengths in the right amount, at the right time, in balanced ways."
          }
        ]
      },
      activity: {
        title: "VIA Survey and Strengths Mapping",
        description: "Take the official VIA Character Strengths Survey and create a personalized strengths map for your vision board planning.",
        instructions: [
          "Take the VIA Survey using the provided link",
          "Review your complete results, not just the top 5",
          "Complete the Signature Strengths Reflection worksheet",
          "Identify potential areas of overuse/underuse for your top strengths",
          "Begin brainstorming how your signature strengths could be expressed in different life areas",
          "Save your results—you'll reference them throughout the course"
        ]
      }
    }
    // Additional modules would continue here...
  };

  const currentModule = moduleData[moduleId];
  const sections = currentModule?.sections || [];
  const totalSections = sections.length;
  const hasJournal = !!currentModule?.journalPrompt;
  const hasQuiz = !!currentModule?.quiz;
  const hasActivity = !!currentModule?.activity;

  useEffect(() => {
    // Reset progress when module changes
    setCurrentSection(0);
    setModuleProgress({
      sectionsCompleted: [],
      journalCompleted: false,
      quizCompleted: false,
      activityCompleted: false
    });
  }, [moduleId]);

  const markSectionComplete = (sectionIndex) => {
    setModuleProgress(prev => ({
      ...prev,
      sectionsCompleted: [...new Set([...prev.sectionsCompleted, sectionIndex])]
    }));
  };

  const markJournalComplete = () => {
    setModuleProgress(prev => ({ ...prev, journalCompleted: true }));
  };

  const markQuizComplete = () => {
    setModuleProgress(prev => ({ ...prev, quizCompleted: true }));
  };

  const markActivityComplete = () => {
    setModuleProgress(prev => ({ ...prev, activityCompleted: true }));
  };

  const isModuleComplete = () => {
    const sectionsComplete = moduleProgress.sectionsCompleted.length === totalSections;
    const journalComplete = !hasJournal || moduleProgress.journalCompleted;
    const quizComplete = !hasQuiz || moduleProgress.quizCompleted;
    const activityComplete = !hasActivity || moduleProgress.activityCompleted;
    
    return sectionsComplete && journalComplete && quizComplete && activityComplete;
  };

  const nextModule = parseInt(moduleId) + 1;
  const prevModule = parseInt(moduleId) - 1;

  if (!currentModule) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-serif text-mystical-800 mb-4">Module Not Found</h1>
          <Link to="/course" className="text-primary-500 hover:text-primary-600">
            Return to Course
          </Link>
        </div>
      </div>
    );
  }

  const renderCurrentContent = () => {
    if (currentSection < totalSections) {
      const section = sections[currentSection];
      return (
        <motion.div
          key={`section-${currentSection}`}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-2xl p-8 shadow-sm border border-mystical-100"
        >
          <h2 className="text-2xl font-serif font-semibold text-mystical-800 mb-6">
            {section.title}
          </h2>
          <div className="prose prose-lg text-mystical-700 leading-relaxed">
            {section.content.split('\n\n').map((paragraph, idx) => {
              if (paragraph.startsWith('**') && paragraph.endsWith('**:')) {
                return (
                  <h3 key={idx} className="text-lg font-semibold text-mystical-800 mt-6 mb-3">
                    {paragraph.slice(2, -2)}
                  </h3>
                );
              }
              if (paragraph.startsWith('•')) {
                const items = paragraph.split('\n• ').map(item => item.replace(/^• /, ''));
                return (
                  <ul key={idx} className="list-disc list-inside space-y-2 my-4">
                    {items.map((item, itemIdx) => (
                      <li key={itemIdx} className="text-mystical-700">{item}</li>
                    ))}
                  </ul>
                );
              }
              return (
                <p key={idx} className="mb-4 text-mystical-700 leading-relaxed">
                  {paragraph}
                </p>
              );
            })}
          </div>
          
          <div className="flex justify-between items-center mt-8 pt-6 border-t border-mystical-100">
            <button
              onClick={() => setCurrentSection(Math.max(0, currentSection - 1))}
              disabled={currentSection === 0}
              className="flex items-center space-x-2 px-4 py-2 text-mystical-600 hover:text-primary-600 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <SafeIcon icon={FiArrowLeft} />
              <span>Previous</span>
            </button>
            
            <span className="text-sm text-mystical-500">
              Section {currentSection + 1} of {totalSections}
            </span>
            
            <button
              onClick={() => {
                markSectionComplete(currentSection);
                if (currentSection < totalSections - 1) {
                  setCurrentSection(currentSection + 1);
                } else {
                  setCurrentSection(totalSections); // Move to activities
                }
              }}
              className="flex items-center space-x-2 bg-gradient-to-r from-primary-500 to-secondary-500 text-white px-4 py-2 rounded-lg hover:shadow-md transition-all"
            >
              <span>{currentSection === totalSections - 1 ? 'Complete Reading' : 'Next'}</span>
              <SafeIcon icon={FiArrowRight} />
            </button>
          </div>
        </motion.div>
      );
    }

    // Show activities after reading sections
    return (
      <div className="space-y-6">
        {hasJournal && (
          <JournalPrompt
            {...currentModule.journalPrompt}
            onComplete={markJournalComplete}
            isCompleted={moduleProgress.journalCompleted}
          />
        )}
        
        {hasQuiz && (
          <QuizComponent
            {...currentModule.quiz}
            onComplete={markQuizComplete}
            isCompleted={moduleProgress.quizCompleted}
          />
        )}
        
        {hasActivity && (
          <ActivityComponent
            {...currentModule.activity}
            onComplete={markActivityComplete}
            isCompleted={moduleProgress.activityCompleted}
          />
        )}
      </div>
    );
  };

  return (
    <div className="min-h-screen py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Module Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <div className="flex items-center space-x-4 mb-4">
            <Link
              to="/course"
              className="flex items-center space-x-2 text-mystical-600 hover:text-primary-600 transition-colors"
            >
              <SafeIcon icon={FiArrowLeft} />
              <span>Back to Course</span>
            </Link>
            
            <div className="flex items-center space-x-2 text-mystical-500">
              <SafeIcon icon={FiBookOpen} className="text-sm" />
              <span className="text-sm">{currentModule.duration}</span>
            </div>
          </div>
          
          <h1 className="text-3xl lg:text-4xl font-serif font-bold text-mystical-800 mb-2">
            Module {moduleId}: {currentModule.title}
          </h1>
          <p className="text-lg text-mystical-600">
            {currentModule.subtitle}
          </p>
        </motion.div>

        {/* Progress Indicator */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-8"
        >
          <div className="bg-white rounded-xl p-4 shadow-sm border border-mystical-100">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-medium text-mystical-700">Module Progress</span>
              <span className="text-sm text-mystical-500">
                {moduleProgress.sectionsCompleted.length}/{totalSections} sections
                {hasJournal && `, Journal: ${moduleProgress.journalCompleted ? '✓' : '○'}`}
                {hasQuiz && `, Quiz: ${moduleProgress.quizCompleted ? '✓' : '○'}`}
                {hasActivity && `, Activity: ${moduleProgress.activityCompleted ? '✓' : '○'}`}
              </span>
            </div>
            <div className="w-full bg-mystical-200 rounded-full h-2">
              <div
                className="bg-gradient-to-r from-primary-500 to-secondary-500 h-2 rounded-full transition-all duration-500"
                style={{
                  width: `${((moduleProgress.sectionsCompleted.length + 
                    (moduleProgress.journalCompleted ? 1 : 0) +
                    (moduleProgress.quizCompleted ? 1 : 0) +
                    (moduleProgress.activityCompleted ? 1 : 0)) / 
                    (totalSections + (hasJournal ? 1 : 0) + (hasQuiz ? 1 : 0) + (hasActivity ? 1 : 0))) * 100}%`
                }}
              />
            </div>
          </div>
        </motion.div>

        {/* Main Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mb-8"
        >
          {renderCurrentContent()}
        </motion.div>

        {/* Navigation */}
        {isModuleComplete() && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-br from-mystical-800 to-mystical-900 rounded-2xl p-6 text-white text-center"
          >
            <div className="flex items-center justify-center space-x-2 mb-4">
              <SafeIcon icon={FiCheck} className="text-green-400 text-xl" />
              <h2 className="text-xl font-serif font-semibold">Module Complete!</h2>
            </div>
            <p className="text-mystical-200 mb-6">
              Congratulations on completing Module {moduleId}. You've taken another important step in your transformation journey.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              {prevModule > 0 && (
                <Link
                  to={`/module/${prevModule}`}
                  className="flex items-center space-x-2 bg-mystical-700 text-white px-4 py-2 rounded-lg hover:bg-mystical-600 transition-colors"
                >
                  <SafeIcon icon={FiArrowLeft} />
                  <span>Previous Module</span>
                </Link>
              )}
              
              {nextModule <= 8 ? (
                <Link
                  to={`/module/${nextModule}`}
                  className="flex items-center space-x-2 bg-gradient-to-r from-primary-500 to-secondary-500 text-white px-4 py-2 rounded-lg hover:shadow-md transition-all"
                >
                  <span>Next Module</span>
                  <SafeIcon icon={FiArrowRight} />
                </Link>
              ) : (
                <Link
                  to="/profile"
                  className="flex items-center space-x-2 bg-gradient-to-r from-primary-500 to-secondary-500 text-white px-4 py-2 rounded-lg hover:shadow-md transition-all"
                >
                  <SafeIcon icon={FiAward} />
                  <span>View Certificate</span>
                </Link>
              )}
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default ModulePage;