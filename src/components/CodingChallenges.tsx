import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Trophy, 
  Code, 
  Clock, 
  Flame,
  Star,
  Users,
  Target,
  Zap,
  Award,
  ChevronRight,
  Filter,
  TrendingUp
} from 'lucide-react';
import { Link } from 'react-router-dom';

interface Challenge {
  id: string;
  title: string;
  description: string;
  difficulty: 'easy' | 'medium' | 'hard' | 'expert';
  points: number;
  timeLimit?: string;
  category: string;
  participants: number;
  completionRate: number;
  badge?: string;
  isNew?: boolean;
  isFeatured?: boolean;
}

interface LeaderboardEntry {
  rank: number;
  name: string;
  points: number;
  challenges: number;
  badge: string;
}

const CodingChallenges: React.FC = () => {
  const [selectedDifficulty, setSelectedDifficulty] = useState<string>('all');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const challenges: Challenge[] = [
    {
      id: '1',
      title: 'Сумата на числата',
      description: 'Напиши програма, която намира сумата на всички числа от 1 до N.',
      difficulty: 'easy',
      points: 50,
      timeLimit: '10 мин',
      category: 'Логика',
      participants: 1234,
      completionRate: 87,
      isNew: true
    },
    {
      id: '2',
      title: 'Обръщане на думи',
      description: 'Създай функция, която обръща всички думи в изречение.',
      difficulty: 'easy',
      points: 75,
      timeLimit: '15 мин',
      category: 'Стрингове',
      participants: 892,
      completionRate: 72
    },
    {
      id: '3',
      title: 'Намери простите числа',
      description: 'Напиши алгоритъм, който намира всички прости числа до N.',
      difficulty: 'medium',
      points: 150,
      timeLimit: '20 мин',
      category: 'Алгоритми',
      participants: 645,
      completionRate: 58,
      badge: 'Математик'
    },
    {
      id: '4',
      title: 'Анимиран калкулатор',
      description: 'Създай интерактивен калкулатор с HTML, CSS и JavaScript.',
      difficulty: 'medium',
      points: 200,
      timeLimit: '45 мин',
      category: 'Web',
      participants: 523,
      completionRate: 45,
      isFeatured: true
    },
    {
      id: '5',
      title: 'Сортиране с bubble sort',
      description: 'Имплементирай bubble sort алгоритъм и оптимизирай го.',
      difficulty: 'medium',
      points: 175,
      timeLimit: '30 мин',
      category: 'Алгоритми',
      participants: 456,
      completionRate: 52
    },
    {
      id: '6',
      title: 'Игра Snake',
      description: 'Създай класическата игра Snake с Python и Pygame.',
      difficulty: 'hard',
      points: 300,
      timeLimit: '60 мин',
      category: 'Игри',
      participants: 312,
      completionRate: 34,
      badge: 'Game Dev',
      isNew: true
    },
    {
      id: '7',
      title: 'API интеграция',
      description: 'Създай приложение, което използва публичен API за показване на данни.',
      difficulty: 'hard',
      points: 350,
      timeLimit: '75 мин',
      category: 'Web',
      participants: 278,
      completionRate: 28,
      isFeatured: true
    },
    {
      id: '8',
      title: 'Машинно обучение - класификация',
      description: 'Създай модел за класификация на изображения с TensorFlow.',
      difficulty: 'expert',
      points: 500,
      timeLimit: '120 мин',
      category: 'AI',
      participants: 156,
      completionRate: 18,
      badge: 'AI Master',
      isFeatured: true
    },
    {
      id: '9',
      title: 'Оптимизация на код',
      description: 'Оптимизирай даден код да работи 10x по-бързо.',
      difficulty: 'expert',
      points: 450,
      timeLimit: '90 мин',
      category: 'Алгоритми',
      participants: 89,
      completionRate: 12,
      badge: 'Optimizer'
    }
  ];

  const leaderboard: LeaderboardEntry[] = [
    { rank: 1, name: 'Иван Георгиев', points: 2850, challenges: 45, badge: '👑' },
    { rank: 2, name: 'Мария Петрова', points: 2640, challenges: 42, badge: '🥈' },
    { rank: 3, name: 'Георги Стоянов', points: 2390, challenges: 38, badge: '🥉' },
    { rank: 4, name: 'Елена Димитрова', points: 2120, challenges: 35, badge: '⭐' },
    { rank: 5, name: 'Петър Колев', points: 1980, challenges: 32, badge: '⭐' }
  ];

  const categories = ['all', 'Логика', 'Стрингове', 'Алгоритми', 'Web', 'Игри', 'AI'];

  const filteredChallenges = challenges.filter(challenge => {
    const matchesDifficulty = selectedDifficulty === 'all' || challenge.difficulty === selectedDifficulty;
    const matchesCategory = selectedCategory === 'all' || challenge.category === selectedCategory;
    return matchesDifficulty && matchesCategory;
  });

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'easy': return 'bg-green-100 text-green-700 border-green-300';
      case 'medium': return 'bg-yellow-100 text-yellow-700 border-yellow-300';
      case 'hard': return 'bg-orange-100 text-orange-700 border-orange-300';
      case 'expert': return 'bg-red-100 text-red-700 border-red-300';
      default: return 'bg-gray-100 text-gray-700 border-gray-300';
    }
  };

  const getDifficultyText = (difficulty: string) => {
    switch (difficulty) {
      case 'easy': return 'Лесно';
      case 'medium': return 'Средно';
      case 'hard': return 'Трудно';
      case 'expert': return 'Експерт';
      default: return '';
    }
  };

  const getDifficultyIcon = (difficulty: string) => {
    switch (difficulty) {
      case 'easy': return '⚡';
      case 'medium': return '🔥';
      case 'hard': return '💪';
      case 'expert': return '🚀';
      default: return '';
    }
  };

  const stats = [
    { icon: Target, number: '100+', label: 'Предизвикателства' },
    { icon: Users, number: '5,000+', label: 'Участници' },
    { icon: Trophy, number: '50+', label: 'Награди' },
    { icon: Flame, number: '24/7', label: 'Активност' }
  ];

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-purple-600 via-pink-600 to-red-600 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="inline-flex items-center gap-2 mb-6">
              <Trophy className="w-12 h-12 text-yellow-300" />
              <h1 className="text-4xl lg:text-6xl font-bold">
                Кодови{' '}
                <span className="bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent">
                  Предизвикателства
                </span>
              </h1>
            </div>
            <p className="text-xl lg:text-2xl text-white/90 max-w-3xl mx-auto mb-8">
              Тествай уменията си, състезавай се с други и печели награди!
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                to="/student-portal"
                className="btn-primary bg-white text-purple-600 hover:bg-gray-100 inline-flex items-center"
              >
                <Zap className="w-5 h-5 mr-2" />
                Започни сега
              </Link>
              <a
                href="#challenges"
                className="btn-primary bg-white/10 backdrop-blur-sm border-2 border-white/30 hover:bg-white/20 inline-flex items-center"
              >
                <Code className="w-5 h-5 mr-2" />
                Виж предизвикателствата
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
                <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-br from-purple-100 to-pink-100 rounded-lg mb-4">
                  <stat.icon className="w-6 h-6 text-purple-600" />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">{stat.number}</div>
                <div className="text-gray-600">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content - Challenges */}
          <div className="lg:col-span-2">
            {/* Filters */}
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
                    {['all', 'easy', 'medium', 'hard', 'expert'].map((filter) => (
                      <button
                        key={filter}
                        onClick={() => setSelectedDifficulty(filter)}
                        className={`px-4 py-2 rounded-lg font-medium transition-all ${
                          selectedDifficulty === filter
                            ? 'bg-purple-600 text-white shadow-lg'
                            : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                        }`}
                      >
                        {filter === 'all' ? 'Всички' : getDifficultyText(filter)}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Category Filter */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Категория</label>
                  <div className="flex flex-wrap gap-2">
                    {categories.map((cat) => (
                      <button
                        key={cat}
                        onClick={() => setSelectedCategory(cat)}
                        className={`px-4 py-2 rounded-lg font-medium transition-all ${
                          selectedCategory === cat
                            ? 'bg-pink-600 text-white shadow-lg'
                            : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                        }`}
                      >
                        {cat === 'all' ? 'Всички' : cat}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Challenges List */}
            <div id="challenges" className="space-y-4">
              {filteredChallenges.map((challenge, index) => (
                <motion.div
                  key={challenge.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-transparent hover:border-purple-300 relative"
                >
                  {/* Badges */}
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-2 flex-wrap">
                      <span className={`px-3 py-1 rounded-full text-xs font-bold border-2 ${getDifficultyColor(challenge.difficulty)}`}>
                        {getDifficultyIcon(challenge.difficulty)} {getDifficultyText(challenge.difficulty)}
                      </span>
                      {challenge.isNew && (
                        <span className="px-3 py-1 rounded-full text-xs font-bold bg-blue-100 text-blue-700 border-2 border-blue-300">
                          ✨ Ново
                        </span>
                      )}
                      {challenge.isFeatured && (
                        <span className="px-3 py-1 rounded-full text-xs font-bold bg-purple-100 text-purple-700 border-2 border-purple-300">
                          ⭐ Препоръчано
                        </span>
                      )}
                    </div>
                    <div className="flex items-center gap-1 text-yellow-500 font-bold">
                      <Trophy className="w-5 h-5" />
                      {challenge.points}
                    </div>
                  </div>

                  <h3 className="text-2xl font-bold text-gray-900 mb-3">
                    {challenge.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-4">
                    {challenge.description}
                  </p>

                  <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600 mb-4">
                    {challenge.timeLimit && (
                      <div className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        {challenge.timeLimit}
                      </div>
                    )}
                    <div className="flex items-center gap-1">
                      <Users className="w-4 h-4" />
                      {challenge.participants} участници
                    </div>
                    <div className="flex items-center gap-1">
                      <TrendingUp className="w-4 h-4" />
                      {challenge.completionRate}% успеваемост
                    </div>
                    <span className="px-2 py-1 bg-gray-100 rounded text-xs font-medium">
                      {challenge.category}
                    </span>
                  </div>

                  {challenge.badge && (
                    <div className="mb-4 inline-flex items-center gap-2 px-3 py-1 bg-gradient-to-r from-yellow-100 to-orange-100 border-2 border-yellow-300 rounded-lg">
                      <Award className="w-4 h-4 text-yellow-600" />
                      <span className="text-sm font-semibold text-yellow-700">
                        Награда: {challenge.badge}
                      </span>
                    </div>
                  )}

                  <div className="flex gap-3">
                    <button className="flex-1 btn-primary bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 inline-flex items-center justify-center">
                      <Code className="w-5 h-5 mr-2" />
                      Започни
                    </button>
                    <button className="px-4 py-2 border-2 border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                      Виж повече
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>

            {filteredChallenges.length === 0 && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center py-12 bg-white rounded-xl shadow-lg"
              >
                <Target className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Няма намерени предизвикателства
                </h3>
                <p className="text-gray-600">
                  Опитайте с други филтри
                </p>
              </motion.div>
            )}
          </div>

          {/* Sidebar - Leaderboard */}
          <div className="lg:col-span-1">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-white rounded-xl p-6 shadow-lg sticky top-24"
            >
              <div className="flex items-center gap-2 mb-6">
                <Trophy className="w-6 h-6 text-yellow-500" />
                <h3 className="text-xl font-bold text-gray-900">Класация</h3>
              </div>

              <div className="space-y-4">
                {leaderboard.map((entry, index) => (
                  <motion.div
                    key={entry.rank}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className={`p-4 rounded-lg ${
                      entry.rank === 1
                        ? 'bg-gradient-to-r from-yellow-100 to-orange-100 border-2 border-yellow-400'
                        : entry.rank === 2
                        ? 'bg-gradient-to-r from-gray-100 to-gray-200 border-2 border-gray-400'
                        : entry.rank === 3
                        ? 'bg-gradient-to-r from-orange-100 to-red-100 border-2 border-orange-400'
                        : 'bg-gray-50 border-2 border-gray-200'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-3">
                        <span className="text-2xl">{entry.badge}</span>
                        <div>
                          <div className="font-bold text-gray-900">{entry.name}</div>
                          <div className="text-sm text-gray-600">
                            {entry.challenges} предизвикателства
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-1 text-yellow-600 font-bold">
                        <Star className="w-4 h-4 fill-current" />
                        {entry.points} точки
                      </div>
                      <span className="text-sm text-gray-500">#{entry.rank}</span>
                    </div>
                  </motion.div>
                ))}
              </div>

              <Link
                to="/student-portal"
                className="mt-6 w-full btn-primary bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 inline-flex items-center justify-center"
              >
                Влез в класацията
                <ChevronRight className="w-5 h-5 ml-2" />
              </Link>
            </motion.div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-purple-600 via-pink-600 to-red-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center text-white"
          >
            <Trophy className="w-16 h-16 mx-auto mb-6 text-yellow-300" />
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              Готови ли сте да станете шампиони?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Присъединете се към хиляди ученици, които вече се състезават и печелят награди!
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                to="/courses"
                className="btn-primary bg-white text-purple-600 hover:bg-gray-100 inline-flex items-center"
              >
                Започни обучение
                <ChevronRight className="w-5 h-5 ml-2" />
              </Link>
              <Link
                to="/contact"
                className="btn-primary bg-white/10 backdrop-blur-sm border-2 border-white/30 hover:bg-white/20 inline-flex items-center"
              >
                Научи повече
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default CodingChallenges;

