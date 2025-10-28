import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  PlayCircle, 
  Clock, 
  BookOpen, 
  Award,
  Filter,
  ChevronRight,
  Star,
  Users,
  Download,
  Lock
} from 'lucide-react';
import { Link } from 'react-router-dom';

interface Lesson {
  id: string;
  title: string;
  description: string;
  duration: string;
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  ageGroup: string;
  technology: string;
  thumbnail: string;
  instructor: string;
  students: number;
  rating: number;
  isFree: boolean;
}

const FreeLessons: React.FC = () => {
  const [selectedFilter, setSelectedFilter] = useState<'all' | 'beginner' | 'intermediate' | 'advanced'>('all');
  const [selectedTech, setSelectedTech] = useState<string>('all');

  const lessons: Lesson[] = [
    {
      id: '1',
      title: 'Първите ти стъпки в Python',
      description: 'Научи основите на Python програмирането чрез забавни примери и упражнения.',
      duration: '45 мин',
      difficulty: 'beginner',
      ageGroup: '10-14 год.',
      technology: 'Python',
      thumbnail: 'bg-gradient-to-br from-blue-500 to-cyan-500',
      instructor: 'Иван Георгиев',
      students: 342,
      rating: 4.8,
      isFree: true
    },
    {
      id: '2',
      title: 'HTML & CSS за начинаещи',
      description: 'Създай първия си уебсайт с HTML и CSS. Научи се как да създадеш красиви страници.',
      duration: '60 мин',
      difficulty: 'beginner',
      ageGroup: '11-15 год.',
      technology: 'Web',
      thumbnail: 'bg-gradient-to-br from-purple-500 to-pink-500',
      instructor: 'Мария Петрова',
      students: 521,
      rating: 4.9,
      isFree: true
    },
    {
      id: '3',
      title: 'Създай своя първа игра със Scratch',
      description: 'Направи собствена игра със Scratch без да пишеш код. Идеално за най-малките.',
      duration: '40 мин',
      difficulty: 'beginner',
      ageGroup: '6-10 год.',
      technology: 'Scratch',
      thumbnail: 'bg-gradient-to-br from-orange-500 to-red-500',
      instructor: 'Елена Димитрова',
      students: 678,
      rating: 5.0,
      isFree: true
    },
    {
      id: '4',
      title: 'LEGO Robotics - Базови команди',
      description: 'Научи как да програмираш LEGO роботи и да ги накараш да се движат.',
      duration: '50 мин',
      difficulty: 'beginner',
      ageGroup: '8-12 год.',
      technology: 'Robotics',
      thumbnail: 'bg-gradient-to-br from-green-500 to-emerald-500',
      instructor: 'Петър Колев',
      students: 445,
      rating: 4.7,
      isFree: true
    },
    {
      id: '5',
      title: 'JavaScript - Интерактивни уебсайтове',
      description: 'Добави интерактивност към твоите уебсайтове с JavaScript.',
      duration: '75 мин',
      difficulty: 'intermediate',
      ageGroup: '13-16 год.',
      technology: 'JavaScript',
      thumbnail: 'bg-gradient-to-br from-yellow-500 to-orange-500',
      instructor: 'Георги Стоянов',
      students: 289,
      rating: 4.6,
      isFree: true
    },
    {
      id: '6',
      title: 'Създаване на игри с Python Pygame',
      description: 'Създай своя 2D игра с Python библиотеката Pygame.',
      duration: '90 мин',
      difficulty: 'intermediate',
      ageGroup: '12-16 год.',
      technology: 'Python',
      thumbnail: 'bg-gradient-to-br from-indigo-500 to-purple-500',
      instructor: 'Иван Георгиев',
      students: 356,
      rating: 4.8,
      isFree: true
    },
    {
      id: '7',
      title: 'React - Съвременни уеб приложения',
      description: 'Научи се да създаваш съвременни уеб приложения с React библиотеката.',
      duration: '120 мин',
      difficulty: 'advanced',
      ageGroup: '15-18 год.',
      technology: 'React',
      thumbnail: 'bg-gradient-to-br from-cyan-500 to-blue-500',
      instructor: 'Мария Петрова',
      students: 187,
      rating: 4.9,
      isFree: false
    },
    {
      id: '8',
      title: 'AI и Machine Learning за деца',
      description: 'Въведение в изкуствения интелект и машинното обучение.',
      duration: '100 мин',
      difficulty: 'advanced',
      ageGroup: '14-18 год.',
      technology: 'AI',
      thumbnail: 'bg-gradient-to-br from-pink-500 to-rose-500',
      instructor: 'Георги Стоянов',
      students: 234,
      rating: 4.7,
      isFree: false
    }
  ];

  const technologies = ['all', 'Python', 'Web', 'JavaScript', 'Scratch', 'Robotics', 'React', 'AI'];

  const filteredLessons = lessons.filter(lesson => {
    const matchesDifficulty = selectedFilter === 'all' || lesson.difficulty === selectedFilter;
    const matchesTech = selectedTech === 'all' || lesson.technology === selectedTech;
    return matchesDifficulty && matchesTech;
  });

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'beginner': return 'bg-green-100 text-green-700';
      case 'intermediate': return 'bg-yellow-100 text-yellow-700';
      case 'advanced': return 'bg-red-100 text-red-700';
      default: return 'bg-gray-100 text-gray-700';
    }
  };

  const getDifficultyText = (difficulty: string) => {
    switch (difficulty) {
      case 'beginner': return 'Начинаещи';
      case 'intermediate': return 'Средно';
      case 'advanced': return 'Напреднали';
      default: return '';
    }
  };

  const stats = [
    { icon: PlayCircle, number: '50+', label: 'Безплатни урока' },
    { icon: Users, number: '3,000+', label: 'Активни ученици' },
    { icon: Clock, number: '100+', label: 'Часа съдържание' },
    { icon: Award, number: '4.8', label: 'Средна оценка' }
  ];

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary-600 to-secondary-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">
              Безплатни{' '}
              <span className="bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent">
                Уроци
              </span>
            </h1>
            <p className="text-xl lg:text-2xl text-white/90 max-w-3xl mx-auto mb-8">
              Започни своето пътешествие в програмирането с нашите безплатни интерактивни уроци
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                to="/student-portal"
                className="btn-primary bg-white text-primary-600 hover:bg-gray-100 inline-flex items-center"
              >
                <BookOpen className="w-5 h-5 mr-2" />
                Започни да учиш
              </Link>
              <a
                href="#lessons"
                className="btn-primary bg-white/10 backdrop-blur-sm border-2 border-white/30 hover:bg-white/20 inline-flex items-center"
              >
                <PlayCircle className="w-5 h-5 mr-2" />
                Разгледай уроците
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
                <div className="inline-flex items-center justify-center w-12 h-12 bg-primary-100 rounded-lg mb-4">
                  <stat.icon className="w-6 h-6 text-primary-600" />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">{stat.number}</div>
                <div className="text-gray-600">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Filters Section */}
      <section id="lessons" className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-xl p-6 shadow-md mb-8"
          >
            <div className="flex items-center gap-2 mb-4">
              <Filter className="w-5 h-5 text-gray-600" />
              <h3 className="text-lg font-semibold text-gray-900">Филтрирай по:</h3>
            </div>
            
            <div className="space-y-4">
              {/* Difficulty Filter */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Ниво</label>
                <div className="flex flex-wrap gap-2">
                  {['all', 'beginner', 'intermediate', 'advanced'].map((filter) => (
                    <button
                      key={filter}
                      onClick={() => setSelectedFilter(filter as any)}
                      className={`px-4 py-2 rounded-lg font-medium transition-all ${
                        selectedFilter === filter
                          ? 'bg-primary-600 text-white shadow-lg'
                          : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                      }`}
                    >
                      {filter === 'all' ? 'Всички' : getDifficultyText(filter)}
                    </button>
                  ))}
                </div>
              </div>

              {/* Technology Filter */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Технология</label>
                <div className="flex flex-wrap gap-2">
                  {technologies.map((tech) => (
                    <button
                      key={tech}
                      onClick={() => setSelectedTech(tech)}
                      className={`px-4 py-2 rounded-lg font-medium transition-all ${
                        selectedTech === tech
                          ? 'bg-secondary-600 text-white shadow-lg'
                          : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                      }`}
                    >
                      {tech === 'all' ? 'Всички' : tech}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Lessons Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredLessons.map((lesson, index) => (
              <motion.div
                key={lesson.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group"
              >
                {/* Thumbnail */}
                <div className={`h-48 ${lesson.thumbnail} relative flex items-center justify-center`}>
                  {lesson.isFree ? (
                    <div className="absolute top-4 right-4 bg-green-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                      Безплатен
                    </div>
                  ) : (
                    <div className="absolute top-4 right-4 bg-yellow-500 text-white px-3 py-1 rounded-full text-sm font-medium flex items-center gap-1">
                      <Lock className="w-4 h-4" />
                      Премиум
                    </div>
                  )}
                  <PlayCircle className="w-16 h-16 text-white opacity-80 group-hover:scale-110 transition-transform" />
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${getDifficultyColor(lesson.difficulty)}`}>
                      {getDifficultyText(lesson.difficulty)}
                    </span>
                    <span className="text-sm text-gray-500">{lesson.ageGroup}</span>
                  </div>

                  <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-primary-600 transition-colors">
                    {lesson.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-4 line-clamp-2">
                    {lesson.description}
                  </p>

                  <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      {lesson.duration}
                    </div>
                    <div className="flex items-center gap-1">
                      <Users className="w-4 h-4" />
                      {lesson.students}
                    </div>
                  </div>

                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      <span className="font-medium text-gray-900">{lesson.rating}</span>
                    </div>
                    <span className="text-sm text-gray-600">{lesson.instructor}</span>
                  </div>

                  <button className="w-full btn-primary flex items-center justify-center">
                    {lesson.isFree ? (
                      <>
                        <PlayCircle className="w-5 h-5 mr-2" />
                        Започни урока
                      </>
                    ) : (
                      <>
                        <Lock className="w-5 h-5 mr-2" />
                        Изисква абонамент
                      </>
                    )}
                  </button>
                </div>
              </motion.div>
            ))}
          </div>

          {filteredLessons.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-12"
            >
              <BookOpen className="w-16 h-16 text-gray-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Няма намерени уроци
              </h3>
              <p className="text-gray-600">
                Опитайте с други филтри
              </p>
            </motion.div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary-600 to-secondary-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center text-white"
          >
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              Готови за повече?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Запишете се за пълен достъп до всички наши курсове, предизвикателства и проекти!
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                to="/courses"
                className="btn-primary bg-white text-primary-600 hover:bg-gray-100 inline-flex items-center"
              >
                Виж всички курсове
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

export default FreeLessons;

