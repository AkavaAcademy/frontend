import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  MapPin,
  Code,
  Gamepad2,
  Database,
  Smartphone,
  Bot,
  ChevronRight,
  CheckCircle,
  Lock,
  Star,
  Clock,
  Award,
  TrendingUp,
  Users,
  BookOpen,
  Target,
  Briefcase,
  ArrowRight
} from 'lucide-react';
import { Link } from 'react-router-dom';

interface PathStep {
  id: string;
  title: string;
  description: string;
  duration: string;
  isCompleted?: boolean;
  isLocked?: boolean;
  skills: string[];
}

interface LearningPath {
  id: string;
  title: string;
  description: string;
  icon: any;
  color: string;
  gradient: string;
  difficulty: string;
  duration: string;
  students: number;
  salary: string;
  steps: PathStep[];
  careers: string[];
}

const LearningPaths: React.FC = () => {
  const [selectedPath, setSelectedPath] = useState<string | null>(null);

  const paths: LearningPath[] = [
    {
      id: 'web-dev',
      title: 'Пътят на Web Developer-a',
      description: 'Стани експерт в създаването на съвременни уебсайтове и приложения',
      icon: Code,
      color: 'from-blue-500 to-cyan-500',
      gradient: 'bg-gradient-to-br from-blue-500 to-cyan-500',
      difficulty: 'Начинаещи до напреднали',
      duration: '12-18 месеца',
      students: 1234,
      salary: '2,500 - 5,000 лв',
      steps: [
        {
          id: '1',
          title: 'HTML & CSS Основи',
          description: 'Научи основите на уеб разработката',
          duration: '2 месеца',
          isCompleted: false,
          skills: ['HTML5', 'CSS3', 'Responsive Design']
        },
        {
          id: '2',
          title: 'JavaScript Fundamentals',
          description: 'Овладей основите на JavaScript',
          duration: '3 месеца',
          isCompleted: false,
          skills: ['JavaScript', 'DOM Manipulation', 'ES6+']
        },
        {
          id: '3',
          title: 'React Framework',
          description: 'Научи се да създаваш съвременни уеб приложения',
          duration: '3 месеца',
          isCompleted: false,
          skills: ['React', 'Components', 'State Management']
        },
        {
          id: '4',
          title: 'Backend Development',
          description: 'Разбери как работи сървърната част',
          duration: '3 месеца',
          isCompleted: false,
          skills: ['Node.js', 'Express', 'Databases']
        },
        {
          id: '5',
          title: 'Full Stack Projects',
          description: 'Създай цялостни проекти',
          duration: '2 месеца',
          isCompleted: false,
          skills: ['Full Stack', 'APIs', 'Deployment']
        }
      ],
      careers: ['Front-end Developer', 'Back-end Developer', 'Full Stack Developer', 'UI/UX Developer']
    },
    {
      id: 'game-dev',
      title: 'Пътят на Game Developer-a',
      description: 'Създавай забавни игри и интерактивни преживявания',
      icon: Gamepad2,
      color: 'from-purple-500 to-pink-500',
      gradient: 'bg-gradient-to-br from-purple-500 to-pink-500',
      difficulty: 'Начинаещи до напреднали',
      duration: '10-15 месеца',
      students: 892,
      salary: '2,000 - 4,500 лв',
      steps: [
        {
          id: '1',
          title: 'Scratch Game Design',
          description: 'Създай първите си игри със Scratch',
          duration: '1 месец',
          isCompleted: false,
          skills: ['Scratch', 'Game Logic', 'Sprites']
        },
        {
          id: '2',
          title: 'Python Game Development',
          description: 'Направи игри с Python и Pygame',
          duration: '3 месеца',
          isCompleted: false,
          skills: ['Python', 'Pygame', '2D Graphics']
        },
        {
          id: '3',
          title: 'JavaScript Game Programming',
          description: 'Създавай браузърни игри',
          duration: '3 месеца',
          isCompleted: false,
          skills: ['JavaScript', 'Canvas', 'Physics']
        },
        {
          id: '4',
          title: 'Unity Game Engine',
          description: 'Научи професионален game engine',
          duration: '4 месеца',
          isCompleted: false,
          skills: ['Unity', 'C#', '3D Development']
        },
        {
          id: '5',
          title: 'Game Design & Publishing',
          description: 'Публикувай игрите си',
          duration: '2 месеца',
          isCompleted: false,
          skills: ['Game Design', 'Publishing', 'Marketing']
        }
      ],
      careers: ['Game Developer', 'Game Designer', 'Unity Developer', 'Indie Game Creator']
    },
    {
      id: 'data-science',
      title: 'Пътят на Data Scientist-a',
      description: 'Анализирай данни и създавай интелигентни решения',
      icon: Database,
      color: 'from-green-500 to-emerald-500',
      gradient: 'bg-gradient-to-br from-green-500 to-emerald-500',
      difficulty: 'Средно до напреднали',
      duration: '15-20 месеца',
      students: 645,
      salary: '3,000 - 6,000 лв',
      steps: [
        {
          id: '1',
          title: 'Python Basics',
          description: 'Научи основите на Python',
          duration: '2 месеца',
          isCompleted: false,
          skills: ['Python', 'Programming Logic', 'Data Types']
        },
        {
          id: '2',
          title: 'Data Analysis',
          description: 'Анализирай данни с Pandas и NumPy',
          duration: '3 месеца',
          isCompleted: false,
          skills: ['Pandas', 'NumPy', 'Data Cleaning']
        },
        {
          id: '3',
          title: 'Data Visualization',
          description: 'Визуализирай данните красиво',
          duration: '2 месеца',
          isCompleted: false,
          skills: ['Matplotlib', 'Seaborn', 'Plotly']
        },
        {
          id: '4',
          title: 'Machine Learning',
          description: 'Създавай ML модели',
          duration: '5 месеца',
          isCompleted: false,
          skills: ['Scikit-learn', 'ML Algorithms', 'Model Training']
        },
        {
          id: '5',
          title: 'Deep Learning & AI',
          description: 'Навлез в света на AI',
          duration: '4 месеца',
          isCompleted: false,
          skills: ['TensorFlow', 'Neural Networks', 'Deep Learning']
        }
      ],
      careers: ['Data Scientist', 'Data Analyst', 'ML Engineer', 'AI Specialist']
    },
    {
      id: 'mobile-dev',
      title: 'Пътят на Mobile Developer-a',
      description: 'Създавай мобилни приложения за милиони потребители',
      icon: Smartphone,
      color: 'from-orange-500 to-red-500',
      gradient: 'bg-gradient-to-br from-orange-500 to-red-500',
      difficulty: 'Средно до напреднали',
      duration: '12-16 месеца',
      students: 567,
      salary: '2,500 - 5,500 лв',
      steps: [
        {
          id: '1',
          title: 'Programming Basics',
          description: 'Основи на програмирането',
          duration: '2 месеца',
          isCompleted: false,
          skills: ['Programming Logic', 'Variables', 'Functions']
        },
        {
          id: '2',
          title: 'JavaScript & React',
          description: 'Научи съвременни технологии',
          duration: '4 месеца',
          isCompleted: false,
          skills: ['JavaScript', 'React', 'Components']
        },
        {
          id: '3',
          title: 'React Native',
          description: 'Създавай мобилни приложения',
          duration: '4 месеца',
          isCompleted: false,
          skills: ['React Native', 'Mobile UI', 'APIs']
        },
        {
          id: '4',
          title: 'Native Development',
          description: 'iOS и Android разработка',
          duration: '4 месеца',
          isCompleted: false,
          skills: ['Swift/Kotlin', 'Native APIs', 'Performance']
        },
        {
          id: '5',
          title: 'App Publishing',
          description: 'Публикувай в App Store и Play Store',
          duration: '1 месец',
          isCompleted: false,
          skills: ['App Store', 'Play Store', 'ASO']
        }
      ],
      careers: ['Mobile Developer', 'iOS Developer', 'Android Developer', 'React Native Developer']
    },
    {
      id: 'robotics',
      title: 'Пътят на Robotics Engineer-a',
      description: 'Проектирай и програмирай роботи на бъдещето',
      icon: Bot,
      color: 'from-indigo-500 to-purple-500',
      gradient: 'bg-gradient-to-br from-indigo-500 to-purple-500',
      difficulty: 'Начинаещи до напреднали',
      duration: '14-18 месеца',
      students: 423,
      salary: '2,800 - 5,500 лв',
      steps: [
        {
          id: '1',
          title: 'LEGO Robotics',
          description: 'Започни с LEGO Mindstorms',
          duration: '3 месеца',
          isCompleted: false,
          skills: ['LEGO', 'Basic Programming', 'Sensors']
        },
        {
          id: '2',
          title: 'Arduino Basics',
          description: 'Научи се да програмираш микроконтролери',
          duration: '3 месеца',
          isCompleted: false,
          skills: ['Arduino', 'C++', 'Electronics']
        },
        {
          id: '3',
          title: 'Sensors & Actuators',
          description: 'Работи със сензори и актуатори',
          duration: '3 месеца',
          isCompleted: false,
          skills: ['Sensors', 'Motors', 'Control Systems']
        },
        {
          id: '4',
          title: 'Python for Robotics',
          description: 'Използвай Python за роботика',
          duration: '3 месеца',
          isCompleted: false,
          skills: ['Python', 'ROS', 'Automation']
        },
        {
          id: '5',
          title: 'AI Integration',
          description: 'Добави AI към роботите',
          duration: '4 месеца',
          isCompleted: false,
          skills: ['Computer Vision', 'ML', 'AI']
        }
      ],
      careers: ['Robotics Engineer', 'Automation Engineer', 'Mechatronics Engineer', 'IoT Developer']
    }
  ];

  const stats = [
    { icon: MapPin, number: '5', label: 'Кариерни пътища' },
    { icon: Users, number: '3,800+', label: 'Активни ученици' },
    { icon: Award, number: '500+', label: 'Завършени пътища' },
    { icon: Briefcase, number: '95%', label: 'Намират работа' }
  ];

  const selectedPathData = paths.find(p => p.id === selectedPath);

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="inline-flex items-center gap-2 mb-6">
              <MapPin className="w-12 h-12 text-yellow-300" />
              <h1 className="text-4xl lg:text-6xl font-bold">
                Пътища за{' '}
                <span className="bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent">
                  Обучение
                </span>
              </h1>
            </div>
            <p className="text-xl lg:text-2xl text-white/90 max-w-3xl mx-auto mb-8">
              Избери своя път и стани експерт в технологиите на бъдещето
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                to="/course-quiz"
                className="btn-primary bg-white text-indigo-600 hover:bg-gray-100 inline-flex items-center"
              >
                <Target className="w-5 h-5 mr-2" />
                Намери своя път
              </Link>
              <a
                href="#paths"
                className="btn-primary bg-white/10 backdrop-blur-sm border-2 border-white/30 hover:bg-white/20 inline-flex items-center"
              >
                <MapPin className="w-5 h-5 mr-2" />
                Разгледай пътищата
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-br from-indigo-100 to-purple-100 rounded-lg mb-4">
                  <stat.icon className="w-6 h-6 text-indigo-600" />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">{stat.number}</div>
                <div className="text-gray-600">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Learning Paths Section */}
      <section id="paths" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Избери своя кариерен път
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Всеки път е структуриран, за да те отведе от начинаещ до професионалист
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {paths.map((path, index) => (
              <motion.div
                key={path.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                onClick={() => setSelectedPath(path.id)}
                className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer group border-2 border-transparent hover:border-indigo-300"
              >
                {/* Header */}
                <div className={`h-32 bg-gradient-to-br ${path.color} flex items-center justify-center relative`}>
                  <path.icon className="w-16 h-16 text-white group-hover:scale-110 transition-transform" />
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-indigo-600 transition-colors">
                    {path.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-4">
                    {path.description}
                  </p>

                  <div className="space-y-2 text-sm text-gray-600 mb-4">
                    <div className="flex items-center gap-2">
                      <TrendingUp className="w-4 h-4" />
                      <span>{path.difficulty}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4" />
                      <span>{path.duration}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Users className="w-4 h-4" />
                      <span>{path.students} ученици</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Briefcase className="w-4 h-4" />
                      <span className="font-semibold text-green-600">{path.salary}/месец</span>
                    </div>
                  </div>

                  <button className="w-full btn-primary bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 inline-flex items-center justify-center">
                    Виж детайли
                    <ChevronRight className="w-5 h-5 ml-2" />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Detailed Path View */}
          {selectedPathData && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-white rounded-xl shadow-2xl p-8 mb-12"
            >
              <div className="flex items-center justify-between mb-8">
                <div>
                  <h2 className="text-3xl font-bold text-gray-900 mb-2">
                    {selectedPathData.title}
                  </h2>
                  <p className="text-gray-600">{selectedPathData.description}</p>
                </div>
                <button
                  onClick={() => setSelectedPath(null)}
                  className="text-gray-400 hover:text-gray-600 text-2xl"
                >
                  ×
                </button>
              </div>

              {/* Path Steps */}
              <div className="mb-8">
                <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                  <BookOpen className="w-6 h-6" />
                  Стъпки на обучение
                </h3>
                
                <div className="space-y-6">
                  {selectedPathData.steps.map((step, index) => (
                    <motion.div
                      key={step.id}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                      className="relative"
                    >
                      {/* Connector Line */}
                      {index < selectedPathData.steps.length - 1 && (
                        <div className="absolute left-6 top-16 w-0.5 h-16 bg-gray-300"></div>
                      )}
                      
                      <div className="flex gap-4">
                        {/* Step Number/Icon */}
                        <div className={`flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center font-bold text-white ${
                          step.isCompleted 
                            ? 'bg-green-500' 
                            : step.isLocked 
                              ? 'bg-gray-400'
                              : selectedPathData.gradient
                        }`}>
                          {step.isCompleted ? (
                            <CheckCircle className="w-6 h-6" />
                          ) : step.isLocked ? (
                            <Lock className="w-6 h-6" />
                          ) : (
                            index + 1
                          )}
                        </div>

                        {/* Step Content */}
                        <div className="flex-1 bg-gray-50 rounded-lg p-4 hover:shadow-md transition-shadow">
                          <div className="flex items-start justify-between mb-2">
                            <h4 className="text-lg font-bold text-gray-900">{step.title}</h4>
                            <span className="text-sm text-gray-500 flex items-center gap-1">
                              <Clock className="w-4 h-4" />
                              {step.duration}
                            </span>
                          </div>
                          <p className="text-gray-600 mb-3">{step.description}</p>
                          <div className="flex flex-wrap gap-2">
                            {step.skills.map((skill, idx) => (
                              <span key={idx} className="px-3 py-1 bg-white text-gray-700 text-sm rounded-full border border-gray-200">
                                {skill}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Career Options */}
              <div className="bg-gradient-to-r from-indigo-50 to-purple-50 rounded-lg p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <Briefcase className="w-6 h-6" />
                  Кариерни възможности
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {selectedPathData.careers.map((career, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-gray-700">
                      <ArrowRight className="w-4 h-4 text-indigo-600" />
                      <span>{career}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* CTA */}
              <div className="mt-8 flex gap-4">
                <Link
                  to="/student-portal"
                  className="flex-1 btn-primary bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 inline-flex items-center justify-center"
                >
                  Започни пътя
                  <ChevronRight className="w-5 h-5 ml-2" />
                </Link>
                <Link
                  to="/courses"
                  className="px-6 py-3 border-2 border-indigo-600 text-indigo-600 rounded-lg hover:bg-indigo-50 transition-colors font-medium inline-flex items-center justify-center"
                >
                  Виж курсове
                </Link>
              </div>
            </motion.div>
          )}
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Истории на успеха
            </h2>
            <p className="text-xl text-gray-600">
              Виж как други ученици успяха да постигнат мечтите си
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: 'Иван, 17 години',
                path: 'Web Developer',
                story: 'След 15 месеца обучение започнах работа като Junior Front-end Developer.',
                salary: '2,800 лв'
              },
              {
                name: 'Мария, 16 години',
                path: 'Game Developer',
                story: 'Публикувах първата си игра в Steam и имам над 10,000 изтегляния!',
                salary: '3,200 лв'
              },
              {
                name: 'Георги, 18 години',
                path: 'Data Scientist',
                story: 'Работя на проект за AI в медицината и спечелих национално състезание.',
                salary: '4,500 лв'
              }
            ].map((story, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-xl p-6 border-2 border-indigo-200"
              >
                <div className="flex items-center gap-2 mb-4">
                  <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                </div>
                <h4 className="font-bold text-gray-900 mb-1">{story.name}</h4>
                <p className="text-sm text-indigo-600 font-medium mb-3">{story.path}</p>
                <p className="text-gray-600 mb-4">{story.story}</p>
                <div className="inline-flex items-center gap-1 px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-medium">
                  <Briefcase className="w-4 h-4" />
                  {story.salary}/месец
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center text-white"
          >
            <MapPin className="w-16 h-16 mx-auto mb-6 text-yellow-300" />
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              Готов да започнеш пътешествието?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Всеки велик програмист започна точно където си ти сега. Направи първата стъпка днес!
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                to="/course-quiz"
                className="btn-primary bg-white text-indigo-600 hover:bg-gray-100 inline-flex items-center"
              >
                Направи тест
                <ChevronRight className="w-5 h-5 ml-2" />
              </Link>
              <Link
                to="/contact"
                className="btn-primary bg-white/10 backdrop-blur-sm border-2 border-white/30 hover:bg-white/20 inline-flex items-center"
              >
                Свържи се с нас
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default LearningPaths;

