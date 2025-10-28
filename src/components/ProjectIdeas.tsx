import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Lightbulb, 
  Code, 
  Clock, 
  Star,
  Users,
  Target,
  Download,
  ExternalLink,
  Heart,
  Bookmark,
  Filter,
  Search,
  Upload,
  Award,
  PlayCircle,
  FileCode,
  ChevronRight
} from 'lucide-react';
import { Link } from 'react-router-dom';

interface Project {
  id: string;
  title: string;
  description: string;
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  technology: string;
  duration: string;
  ageGroup: string;
  image: string;
  skills: string[];
  likes: number;
  views: number;
  submissions: number;
  hasStarterCode: boolean;
  hasVideo: boolean;
  author: string;
}

const ProjectIdeas: React.FC = () => {
  const [selectedDifficulty, setSelectedDifficulty] = useState<string>('all');
  const [selectedTech, setSelectedTech] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [likedProjects, setLikedProjects] = useState<Set<string>>(new Set());
  const [bookmarkedProjects, setBookmarkedProjects] = useState<Set<string>>(new Set());

  const projects: Project[] = [
    {
      id: '1',
      title: 'Създай калкулатор с Python',
      description: 'Направи функционален калкулатор с графичен интерфейс използвайки Python и Tkinter библиотеката.',
      difficulty: 'beginner',
      technology: 'Python',
      duration: '2-3 часа',
      ageGroup: '10-14 год.',
      image: 'bg-gradient-to-br from-blue-500 to-cyan-500',
      skills: ['Python основи', 'GUI', 'Функции'],
      likes: 234,
      views: 1245,
      submissions: 89,
      hasStarterCode: true,
      hasVideo: true,
      author: 'Иван Георгиев'
    },
    {
      id: '2',
      title: 'Портфолио уебсайт',
      description: 'Изгради професионален портфолио уебсайт с HTML, CSS и малко JavaScript за показване на твоите проекти.',
      difficulty: 'beginner',
      technology: 'Web',
      duration: '3-4 часа',
      ageGroup: '12-16 год.',
      image: 'bg-gradient-to-br from-purple-500 to-pink-500',
      skills: ['HTML', 'CSS', 'Responsive Design'],
      likes: 456,
      views: 2341,
      submissions: 156,
      hasStarterCode: true,
      hasVideo: true,
      author: 'Мария Петрова'
    },
    {
      id: '3',
      title: 'Игра Snake с JavaScript',
      description: 'Създай класическата игра Snake в браузъра използвайки JavaScript и Canvas API.',
      difficulty: 'intermediate',
      technology: 'JavaScript',
      duration: '4-5 часа',
      ageGroup: '13-17 год.',
      image: 'bg-gradient-to-br from-green-500 to-emerald-500',
      skills: ['JavaScript', 'Canvas API', 'Game Logic'],
      likes: 567,
      views: 3421,
      submissions: 234,
      hasStarterCode: true,
      hasVideo: true,
      author: 'Георги Стоянов'
    },
    {
      id: '4',
      title: 'To-Do листа с React',
      description: 'Направи интерактивна To-Do листа с React, която запазва данни в localStorage.',
      difficulty: 'intermediate',
      technology: 'React',
      duration: '5-6 часа',
      ageGroup: '14-18 год.',
      image: 'bg-gradient-to-br from-cyan-500 to-blue-500',
      skills: ['React', 'State Management', 'localStorage'],
      likes: 389,
      views: 2876,
      submissions: 178,
      hasStarterCode: true,
      hasVideo: false,
      author: 'Мария Петрова'
    },
    {
      id: '5',
      title: 'Роботизирана ръка с LEGO',
      description: 'Създай роботизирана ръка с LEGO Mindstorms, която може да хваща и премества обекти.',
      difficulty: 'intermediate',
      technology: 'Robotics',
      duration: '1 ден',
      ageGroup: '10-15 год.',
      image: 'bg-gradient-to-br from-orange-500 to-red-500',
      skills: ['LEGO Mindstorms', 'Сензори', 'Механика'],
      likes: 678,
      views: 4521,
      submissions: 67,
      hasStarterCode: false,
      hasVideo: true,
      author: 'Петър Колев'
    },
    {
      id: '6',
      title: 'Чатбот с Machine Learning',
      description: 'Направи интелигентен чатбот използвайки Python и библиотеката NLTK за обработка на естествен език.',
      difficulty: 'advanced',
      technology: 'AI',
      duration: '1 седмица',
      ageGroup: '15-18 год.',
      image: 'bg-gradient-to-br from-pink-500 to-rose-500',
      skills: ['Python', 'NLP', 'Machine Learning'],
      likes: 445,
      views: 3234,
      submissions: 45,
      hasStarterCode: true,
      hasVideo: true,
      author: 'Иван Георгиев'
    },
    {
      id: '7',
      title: 'Мобилно приложение за време',
      description: 'Създай мобилно приложение, което показва прогнозата за времето използвайки API и React Native.',
      difficulty: 'advanced',
      technology: 'Mobile',
      duration: '1 седмица',
      ageGroup: '15-18 год.',
      image: 'bg-gradient-to-br from-indigo-500 to-purple-500',
      skills: ['React Native', 'API', 'Mobile Design'],
      likes: 523,
      views: 4123,
      submissions: 89,
      hasStarterCode: true,
      hasVideo: false,
      author: 'Елена Димитрова'
    },
    {
      id: '8',
      title: 'Разпознаване на изображения с AI',
      description: 'Създай модел за разпознаване на изображения с TensorFlow и интегрирай го в уеб приложение.',
      difficulty: 'advanced',
      technology: 'AI',
      duration: '2 седмици',
      ageGroup: '16-18 год.',
      image: 'bg-gradient-to-br from-yellow-500 to-orange-500',
      skills: ['TensorFlow', 'Python', 'Deep Learning'],
      likes: 389,
      views: 2987,
      submissions: 34,
      hasStarterCode: true,
      hasVideo: true,
      author: 'Георги Стоянов'
    }
  ];

  const technologies = ['all', 'Python', 'Web', 'JavaScript', 'React', 'Robotics', 'AI', 'Mobile'];

  const filteredProjects = projects.filter(project => {
    const matchesDifficulty = selectedDifficulty === 'all' || project.difficulty === selectedDifficulty;
    const matchesTech = selectedTech === 'all' || project.technology === selectedTech;
    const matchesSearch = project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          project.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesDifficulty && matchesTech && matchesSearch;
  });

  const toggleLike = (projectId: string) => {
    setLikedProjects(prev => {
      const newSet = new Set(prev);
      if (newSet.has(projectId)) {
        newSet.delete(projectId);
      } else {
        newSet.add(projectId);
      }
      return newSet;
    });
  };

  const toggleBookmark = (projectId: string) => {
    setBookmarkedProjects(prev => {
      const newSet = new Set(prev);
      if (newSet.has(projectId)) {
        newSet.delete(projectId);
      } else {
        newSet.add(projectId);
      }
      return newSet;
    });
  };

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
    { icon: Lightbulb, number: '200+', label: 'Идеи за проекти' },
    { icon: Users, number: '4,500+', label: 'Завършени проекти' },
    { icon: Award, number: '500+', label: 'Публикувани работи' },
    { icon: Star, number: '4.9', label: 'Средна оценка' }
  ];

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-orange-600 via-red-600 to-pink-600 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="inline-flex items-center gap-2 mb-6">
              <Lightbulb className="w-12 h-12 text-yellow-300" />
              <h1 className="text-4xl lg:text-6xl font-bold">
                Идеи за{' '}
                <span className="bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent">
                  Проекти
                </span>
              </h1>
            </div>
            <p className="text-xl lg:text-2xl text-white/90 max-w-3xl mx-auto mb-8">
              Намери вдъхновение, създай нещо невероятно и сподели творбата си!
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                to="/student-portal"
                className="btn-primary bg-white text-orange-600 hover:bg-gray-100 inline-flex items-center"
              >
                <Code className="w-5 h-5 mr-2" />
                Започни проект
              </Link>
              <a
                href="#projects"
                className="btn-primary bg-white/10 backdrop-blur-sm border-2 border-white/30 hover:bg-white/20 inline-flex items-center"
              >
                <Lightbulb className="w-5 h-5 mr-2" />
                Виж идеите
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
                <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-br from-orange-100 to-pink-100 rounded-lg mb-4">
                  <stat.icon className="w-6 h-6 text-orange-600" />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">{stat.number}</div>
                <div className="text-gray-600">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section id="projects" className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Search & Filters */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-xl p-6 shadow-md mb-8"
          >
            {/* Search Bar */}
            <div className="mb-6">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Търси проекти..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-12 pr-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all"
                />
              </div>
            </div>

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
                      onClick={() => setSelectedDifficulty(filter)}
                      className={`px-4 py-2 rounded-lg font-medium transition-all ${
                        selectedDifficulty === filter
                          ? 'bg-orange-600 text-white shadow-lg'
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
                          ? 'bg-pink-600 text-white shadow-lg'
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

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group"
              >
                {/* Image/Thumbnail */}
                <div className={`h-48 ${project.image} relative flex items-center justify-center`}>
                  <Lightbulb className="w-16 h-16 text-white opacity-80 group-hover:scale-110 transition-transform" />
                  <div className="absolute top-4 right-4 flex gap-2">
                    <button
                      onClick={() => toggleLike(project.id)}
                      className={`p-2 rounded-full backdrop-blur-sm transition-all ${
                        likedProjects.has(project.id)
                          ? 'bg-red-500 text-white'
                          : 'bg-white/20 text-white hover:bg-white/30'
                      }`}
                    >
                      <Heart className={`w-5 h-5 ${likedProjects.has(project.id) ? 'fill-current' : ''}`} />
                    </button>
                    <button
                      onClick={() => toggleBookmark(project.id)}
                      className={`p-2 rounded-full backdrop-blur-sm transition-all ${
                        bookmarkedProjects.has(project.id)
                          ? 'bg-yellow-500 text-white'
                          : 'bg-white/20 text-white hover:bg-white/30'
                      }`}
                    >
                      <Bookmark className={`w-5 h-5 ${bookmarkedProjects.has(project.id) ? 'fill-current' : ''}`} />
                    </button>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${getDifficultyColor(project.difficulty)}`}>
                      {getDifficultyText(project.difficulty)}
                    </span>
                    <span className="text-sm text-gray-500">{project.ageGroup}</span>
                  </div>

                  <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-orange-600 transition-colors">
                    {project.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.skills.slice(0, 3).map((skill, idx) => (
                      <span key={idx} className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-full">
                        {skill}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      {project.duration}
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="flex items-center gap-1">
                        <Heart className="w-4 h-4" />
                        {project.likes}
                      </span>
                      <span className="flex items-center gap-1">
                        <Users className="w-4 h-4" />
                        {project.submissions}
                      </span>
                    </div>
                  </div>

                  <div className="flex gap-2 mb-4">
                    {project.hasStarterCode && (
                      <span className="flex items-center gap-1 text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded">
                        <FileCode className="w-3 h-3" />
                        Starter код
                      </span>
                    )}
                    {project.hasVideo && (
                      <span className="flex items-center gap-1 text-xs bg-purple-100 text-purple-700 px-2 py-1 rounded">
                        <PlayCircle className="w-3 h-3" />
                        Видео урок
                      </span>
                    )}
                  </div>

                  <button className="w-full btn-primary bg-gradient-to-r from-orange-600 to-pink-600 hover:from-orange-700 hover:to-pink-700 inline-flex items-center justify-center">
                    <Code className="w-5 h-5 mr-2" />
                    Виж проекта
                  </button>
                </div>
              </motion.div>
            ))}
          </div>

          {filteredProjects.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-12 bg-white rounded-xl shadow-lg"
            >
              <Lightbulb className="w-16 h-16 text-gray-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Няма намерени проекти
              </h3>
              <p className="text-gray-600">
                Опитайте с други филтри или търсене
              </p>
            </motion.div>
          )}
        </div>
      </section>

      {/* Submit Your Project CTA */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-orange-600 via-red-600 to-pink-600 rounded-2xl p-12 text-center text-white"
          >
            <Upload className="w-16 h-16 mx-auto mb-6" />
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              Сподели твоя проект!
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Имаш готов проект? Сподели го с другите ученици и вдъхнови ги!
            </p>
            <Link
              to="/student-portal"
              className="btn-primary bg-white text-orange-600 hover:bg-gray-100 inline-flex items-center"
            >
              <Upload className="w-5 h-5 mr-2" />
              Качи проект
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 bg-gradient-to-br from-orange-600 via-red-600 to-pink-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center text-white"
          >
            <Lightbulb className="w-16 h-16 mx-auto mb-6 text-yellow-300" />
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              Вдъхнови се и създай!
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Всеки велик проект започва с една идея. Започни своето пътешествие днес!
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                to="/courses"
                className="btn-primary bg-white text-orange-600 hover:bg-gray-100 inline-flex items-center"
              >
                Научи нови умения
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

export default ProjectIdeas;

