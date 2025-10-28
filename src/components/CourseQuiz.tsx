import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, ArrowLeft, CheckCircle, Sparkles } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface QuizQuestion {
  id: number;
  question: string;
  questionEn: string;
  options: {
    text: string;
    textEn: string;
    value: string;
  }[];
}

interface CourseRecommendation {
  courseName: string;
  courseNameEn: string;
  reason: string;
  reasonEn: string;
  difficulty: string;
  category: string;
}

const CourseQuiz: React.FC = () => {
  const navigate = useNavigate();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<{ [key: number]: string }>({});
  const [showResults, setShowResults] = useState(false);
  const [language] = useState('bg'); // You can integrate with your i18n context

  const questions: QuizQuestion[] = [
    {
      id: 1,
      question: 'Изберете възрастова група на обучаващия се',
      questionEn: 'Select the age group of the learner',
      options: [
        { text: '6-8 години', textEn: '6-8 years', value: '6-8' },
        { text: '9-11 години', textEn: '9-11 years', value: '9-11' },
        { text: '12-14 години', textEn: '12-14 years', value: '12-14' },
        { text: '15-18 години', textEn: '15-18 years', value: '15-18' },
      ],
    },
    {
      id: 2,
      question: 'Изберете ниво на опит с програмиране и технологии на обучаващия се',
      questionEn: 'Select the programming and technology experience level of the learner',
      options: [
        { text: 'Без опит - начинаещ', textEn: 'No experience - beginner', value: 'none' },
        { text: 'Малък опит (игри, основни приложения)', textEn: 'Little experience (games, basic apps)', value: 'little' },
        { text: 'Среден опит (основи в програмирането)', textEn: 'Medium experience (programming basics)', value: 'medium' },
        { text: 'Напреднал опит (работа със сложни проекти)', textEn: 'Advanced experience (working on complex projects)', value: 'advanced' },
      ],
    },
    {
      id: 3,
      question: 'Изберете област на обучение',
      questionEn: 'Select the area of study',
      options: [
        { text: 'Роботика и физически устройства', textEn: 'Robotics and physical devices', value: 'robotics' },
        { text: 'Създаване на игри и приложения', textEn: 'Creating games and applications', value: 'programming' },
        { text: 'Дизайн и визуално изкуство', textEn: 'Design and visual arts', value: 'design' },
        { text: 'Изкуствен интелект и бъдещи технологии', textEn: 'Artificial Intelligence and future technologies', value: 'future-tech' },
        { text: 'Киберсигурност и защита на системи', textEn: 'Cybersecurity and system protection', value: 'security' },
      ],
    },
    {
      id: 4,
      question: 'Изберете предпочитания стил на учене',
      questionEn: 'Select the preferred learning style',
      options: [
        { text: 'Практическо строене и експериментиране', textEn: 'Hands-on building and experimenting', value: 'hands-on' },
        { text: 'Логическо мислене и решаване на проблеми', textEn: 'Logical thinking and problem-solving', value: 'logical' },
        { text: 'Творческо изразяване и дизайн', textEn: 'Creative expression and design', value: 'creative' },
        { text: 'Изследване на нови технологии', textEn: 'Exploring new technologies', value: 'explorer' },
      ],
    },
    {
      id: 5,
      question: 'Изберете основната цел на обучението',
      questionEn: 'Select the main goal of the training',
      options: [
        { text: 'Забавление и развиване на интерес към технологиите', textEn: 'Fun and developing interest in technology', value: 'fun' },
        { text: 'Придобиване на умения за бъдеща кариера', textEn: 'Gaining skills for a future career', value: 'career' },
        { text: 'Създаване на собствени проекти', textEn: 'Creating own projects', value: 'projects' },
        { text: 'Подготовка за състезания и сертификати', textEn: 'Preparation for competitions and certifications', value: 'competitive' },
      ],
    },
    {
      id: 6,
      question: 'Изберете наличното време за обучение седмично',
      questionEn: 'Select the available time for learning per week',
      options: [
        { text: '1-2 часа седмично', textEn: '1-2 hours per week', value: 'low' },
        { text: '3-4 часа седмично', textEn: '3-4 hours per week', value: 'medium' },
        { text: '5 и повече часа седмично', textEn: '5 or more hours per week', value: 'high' },
        { text: 'По всяко време', textEn: 'Anytime', value: 'flexible' },
      ],
    },
  ];

  const getRecommendation = (): CourseRecommendation => {
    const age = answers[1];
    const experience = answers[2];
    const interest = answers[3];
    const learningStyle = answers[4];
    const timeCommitment = answers[6];

    // Logic for course recommendation based on answers
    
    // Check for individual lessons if flexible time is needed
    if (timeCommitment === 'flexible') {
      return {
        courseName: 'Индивидуални уроци и консултации',
        courseNameEn: 'Individual Lessons and Consultations',
        reason: 'Препоръчваме персонализирано обучение, което се адаптира към гъвкавото време и индивидуалните нужди.',
        reasonEn: 'We recommend personalized training that adapts to flexible schedule and individual needs.',
        difficulty: 'all',
        category: 'programming',
      };
    }

    // Advanced courses for older students with experience
    if ((age === '15-18' || age === '12-14') && (experience === 'advanced' || experience === 'medium')) {
      if (interest === 'future-tech') {
        return {
          courseName: 'Машинно обучение и AI',
          courseNameEn: 'Machine Learning and AI',
          reason: 'Изборът показва интерес към бъдещи технологии и достатъчно опит за напреднало обучение в изкуствен интелект.',
          reasonEn: 'This choice shows interest in future technologies and enough experience for advanced AI training.',
          difficulty: 'advanced',
          category: 'future-tech',
        };
      }
      if (interest === 'security') {
        return {
          courseName: 'Киберсигурност и етично хакерство',
          courseNameEn: 'Cybersecurity and Ethical Hacking',
          reason: 'Перфектно съчетание на интерес към сигурност и напреднали умения. Този курс ще развие експертни способности.',
          reasonEn: 'Perfect combination of interest in security and advanced skills. This course will develop expert abilities.',
          difficulty: 'advanced',
          category: 'security',
        };
      }
      if (interest === 'programming') {
        return {
          courseName: 'Разширено програмиране',
          courseNameEn: 'Advanced Programming',
          reason: 'Отличен избор за задълбочено изучаване на програмиране и софтуерно инженерство.',
          reasonEn: 'Excellent choice for in-depth programming and software engineering studies.',
          difficulty: 'intermediate',
          category: 'programming',
        };
      }
    }

    // Intermediate courses
    if ((age === '12-14' || age === '9-11') && (experience === 'medium' || experience === 'little')) {
      if (interest === 'robotics') {
        return {
          courseName: 'Роботика и автоматизация',
          courseNameEn: 'Robotics and Automation',
          reason: 'Отличен избор за тези, които обичат практическо строене и вече имат основни умения.',
          reasonEn: 'Excellent choice for those who love hands-on building and already have basic skills.',
          difficulty: 'intermediate',
          category: 'robotics',
        };
      }
      if (interest === 'future-tech') {
        return {
          courseName: 'Технологии на бъдещето',
          courseNameEn: 'Technologies of the Future',
          reason: 'Идеален курс за изследване на AI, киберсигурност и други модерни технологии.',
          reasonEn: 'Ideal course for exploring AI, cybersecurity, and other modern technologies.',
          difficulty: 'intermediate',
          category: 'future-tech',
        };
      }
      if (interest === 'programming') {
        return {
          courseName: 'Разширено програмиране',
          courseNameEn: 'Advanced Programming',
          reason: 'Перфектен избор за надграждане на уменията с JavaScript, React и реални проекти.',
          reasonEn: 'Perfect choice for building upon skills with JavaScript, React, and real projects.',
          difficulty: 'intermediate',
          category: 'programming',
        };
      }
    }

    // Beginner courses
    if (interest === 'robotics' || learningStyle === 'hands-on') {
      return {
        courseName: 'LEGO роботика и разработване на игри',
        courseNameEn: 'LEGO Robotics and Game Development',
        reason: 'Перфектно начало с практическо строене на роботи и забавно програмиране с LEGO.',
        reasonEn: 'Perfect start with hands-on robot building and fun programming with LEGO.',
        difficulty: 'beginner',
        category: 'robotics',
      };
    }

    if (interest === 'design' || learningStyle === 'creative') {
      return {
        courseName: 'Дизайн и креативност',
        courseNameEn: 'Design and Creativity',
        reason: 'Отлично за тези, които обичат да създават визуално изкуство и да изразяват креативността си.',
        reasonEn: 'Great for those who love creating visual art and expressing their creativity.',
        difficulty: 'beginner',
        category: 'design',
      };
    }

    // Default for beginners
    return {
      courseName: 'Основи на програмирането',
      courseNameEn: 'Programming Basics',
      reason: 'Идеално въведение в света на програмирането с Scratch, Python и веб дизайн.',
      reasonEn: 'Perfect introduction to the world of programming with Scratch, Python, and web design.',
      difficulty: 'beginner',
      category: 'programming',
    };
  };

  const handleAnswer = (value: string) => {
    setAnswers({ ...answers, [questions[currentQuestion].id]: value });
    
    if (currentQuestion < questions.length - 1) {
      setTimeout(() => {
        setCurrentQuestion(currentQuestion + 1);
      }, 300);
    } else {
      setTimeout(() => {
        setShowResults(true);
      }, 300);
    }
  };

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const handleRestart = () => {
    setCurrentQuestion(0);
    setAnswers({});
    setShowResults(false);
  };

  const recommendation = showResults ? getRecommendation() : null;
  const progress = ((currentQuestion + 1) / questions.length) * 100;

  return (
    <section className="min-h-screen bg-gradient-to-br from-primary-50 via-white to-secondary-50 py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {!showResults ? (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* Header */}
            <div className="text-center mb-12">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: 'spring', duration: 0.6 }}
                className="inline-block mb-4"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-full flex items-center justify-center mx-auto">
                  <Sparkles className="w-8 h-8 text-white" />
                </div>
              </motion.div>
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
                Намерете перфектния{' '}
                <span className="bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent">
                  курс
                </span>
              </h1>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Отговорете на няколко бързи въпроса и ще препоръчаме най-подходящия курс според възрастта, интересите и целите
              </p>
            </div>

            {/* Progress Bar */}
            <div className="mb-8">
              <div className="flex justify-between text-sm text-gray-600 mb-2">
                <span>Въпрос {currentQuestion + 1} от {questions.length}</span>
                <span>{Math.round(progress)}%</span>
              </div>
              <div className="h-3 bg-gray-200 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${progress}%` }}
                  transition={{ duration: 0.3 }}
                  className="h-full bg-gradient-to-r from-primary-500 to-secondary-500"
                />
              </div>
            </div>

            {/* Question Card */}
            <AnimatePresence mode="wait">
              <motion.div
                key={currentQuestion}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.3 }}
                className="bg-white rounded-2xl shadow-xl p-8 lg:p-12 mb-8"
              >
                <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-8">
                  {language === 'bg' ? questions[currentQuestion].question : questions[currentQuestion].questionEn}
                </h2>

                <div className="space-y-4">
                  {questions[currentQuestion].options.map((option, index) => (
                    <motion.button
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      onClick={() => handleAnswer(option.value)}
                      className={`w-full text-left p-6 rounded-xl border-2 transition-all duration-300 ${
                        answers[questions[currentQuestion].id] === option.value
                          ? 'border-primary-500 bg-primary-50'
                          : 'border-gray-200 hover:border-primary-300 hover:bg-gray-50'
                      }`}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <div className="flex items-center justify-between">
                        <span className="text-lg font-medium text-gray-900">
                          {language === 'bg' ? option.text : option.textEn}
                        </span>
                        {answers[questions[currentQuestion].id] === option.value && (
                          <CheckCircle className="w-6 h-6 text-primary-500" />
                        )}
                      </div>
                    </motion.button>
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation */}
            <div className="flex justify-between">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handlePrevious}
                disabled={currentQuestion === 0}
                className="flex items-center px-6 py-3 bg-white text-gray-700 rounded-lg font-semibold hover:bg-gray-100 transition-colors disabled:opacity-50 disabled:cursor-not-allowed shadow-md"
              >
                <ArrowLeft className="w-5 h-5 mr-2" />
                Назад
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => navigate('/courses')}
                className="px-6 py-3 bg-gray-200 text-gray-700 rounded-lg font-semibold hover:bg-gray-300 transition-colors shadow-md"
              >
                Откажи
              </motion.button>
            </div>
          </motion.div>
        ) : (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            {/* Results */}
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: 'spring', duration: 0.8, delay: 0.2 }}
              className="inline-block mb-6"
            >
              <div className="w-20 h-20 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full flex items-center justify-center mx-auto">
                <CheckCircle className="w-10 h-10 text-white" />
              </div>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4"
            >
              Препоръчваме ви:
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="bg-gradient-to-br from-primary-500 to-secondary-500 rounded-2xl p-8 lg:p-12 text-white mb-8"
            >
              <h3 className="text-3xl lg:text-4xl font-bold mb-4">
                {language === 'bg' ? recommendation?.courseName : recommendation?.courseNameEn}
              </h3>
              <p className="text-xl opacity-90 max-w-2xl mx-auto">
                {language === 'bg' ? recommendation?.reason : recommendation?.reasonEn}
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => navigate('/courses')}
                className="btn-primary flex items-center justify-center"
              >
                Виж всички курсове
                <ArrowRight className="ml-2 w-5 h-5" />
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleRestart}
                className="px-8 py-3 bg-white text-primary-600 rounded-lg font-semibold hover:bg-gray-100 transition-colors shadow-md"
              >
                Направи теста отново
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => navigate('/contact')}
                className="px-8 py-3 bg-gray-200 text-gray-700 rounded-lg font-semibold hover:bg-gray-300 transition-colors shadow-md"
              >
                Свържи се с нас
              </motion.button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="mt-12 p-6 bg-blue-50 border border-blue-200 rounded-xl"
            >
              <p className="text-gray-700">
                💡 <strong>Съвет:</strong> Можете да се запишете за безплатен пробен урок, за да разберете дали курсът е най-подходящият избор!
              </p>
            </motion.div>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default CourseQuiz;

