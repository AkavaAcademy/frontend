import React from 'react';
import { motion } from 'framer-motion';
import { useAuth } from '../contexts/AuthContext';
import { useNavigate } from 'react-router-dom';
import { 
  BookOpen, 
  Calendar, 
  Award, 
  Download, 
  Clock, 
  CheckCircle,
  Play,
  FileText,
  LogOut,
  User,
  TrendingUp
} from 'lucide-react';

const StudentDashboard: React.FC = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/student-portal');
  };

  // Demo data - in production, this would come from your backend
  const courses = [
    {
      id: 1,
      title: 'Python за деца',
      progress: 65,
      totalLessons: 24,
      completedLessons: 16,
      nextLesson: 'Работа с библиотеки',
      nextLessonDate: '25.10.2025',
      color: 'from-green-500 to-emerald-500'
    },
    {
      id: 2,
      title: 'Основи на програмирането',
      progress: 40,
      totalLessons: 20,
      completedLessons: 8,
      nextLesson: 'Цикли и условия',
      nextLessonDate: '26.10.2025',
      color: 'from-blue-500 to-cyan-500'
    }
  ];

  const upcomingClasses = [
    {
      id: 1,
      course: 'Python за деца',
      date: '25.10.2025',
      time: '16:00',
      duration: '90 мин',
      topic: 'Работа с библиотеки'
    },
    {
      id: 2,
      course: 'Основи на програмирането',
      date: '26.10.2025',
      time: '14:00',
      duration: '90 мин',
      topic: 'Цикли и условия'
    }
  ];

  const achievements = [
    { id: 1, title: 'Първи проект', icon: '🎯', earned: true },
    { id: 2, title: 'Перфектен код', icon: '⭐', earned: true },
    { id: 3, title: 'Бърз ученик', icon: '⚡', earned: false },
    { id: 4, title: 'Експерт', icon: '🏆', earned: false }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-primary-50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex justify-between items-center mb-8"
        >
          <div>
            <h1 className="text-4xl font-bold text-gray-900 mb-2">
              Добре дошъл, {user?.name || 'Ученик'}! 👋
            </h1>
            <p className="text-xl text-gray-600">
              Готов ли си да продължиш обучението?
            </p>
          </div>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleLogout}
            className="flex items-center px-6 py-3 bg-gray-200 text-gray-700 rounded-lg font-semibold hover:bg-gray-300 transition-colors"
          >
            <LogOut className="w-5 h-5 mr-2" />
            Изход
          </motion.button>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="bg-white rounded-xl shadow-lg p-6"
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600 mb-1">Активни курсове</p>
                <p className="text-3xl font-bold text-gray-900">2</p>
              </div>
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center">
                <BookOpen className="w-6 h-6 text-white" />
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white rounded-xl shadow-lg p-6"
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600 mb-1">Завършени уроци</p>
                <p className="text-3xl font-bold text-gray-900">24</p>
              </div>
              <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-500 rounded-lg flex items-center justify-center">
                <CheckCircle className="w-6 h-6 text-white" />
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="bg-white rounded-xl shadow-lg p-6"
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600 mb-1">Часове обучение</p>
                <p className="text-3xl font-bold text-gray-900">36</p>
              </div>
              <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                <Clock className="w-6 h-6 text-white" />
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-white rounded-xl shadow-lg p-6"
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600 mb-1">Постижения</p>
                <p className="text-3xl font-bold text-gray-900">2/4</p>
              </div>
              <div className="w-12 h-12 bg-gradient-to-br from-yellow-500 to-orange-500 rounded-lg flex items-center justify-center">
                <Award className="w-6 h-6 text-white" />
              </div>
            </div>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Courses */}
          <div className="lg:col-span-2 space-y-6">
            {/* My Courses */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="bg-white rounded-xl shadow-lg p-6"
            >
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <BookOpen className="w-6 h-6 mr-2 text-primary-600" />
                Моите курсове
              </h2>
              
              <div className="space-y-4">
                {courses.map((course) => (
                  <div key={course.id} className="border border-gray-200 rounded-xl p-6 hover:shadow-md transition-shadow">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex-1">
                        <h3 className="text-xl font-semibold text-gray-900 mb-2">{course.title}</h3>
                        <div className="flex items-center text-sm text-gray-600">
                          <CheckCircle className="w-4 h-4 mr-1 text-green-500" />
                          {course.completedLessons} от {course.totalLessons} урока завършени
                        </div>
                      </div>
                      <div className={`w-16 h-16 bg-gradient-to-br ${course.color} rounded-lg flex items-center justify-center`}>
                        <span className="text-2xl font-bold text-white">{course.progress}%</span>
                      </div>
                    </div>
                    
                    {/* Progress Bar */}
                    <div className="mb-4">
                      <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                        <div 
                          className={`h-full bg-gradient-to-r ${course.color} transition-all duration-500`}
                          style={{ width: `${course.progress}%` }}
                        ></div>
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div className="text-sm text-gray-600">
                        <span className="font-semibold">Следващ урок:</span> {course.nextLesson}
                      </div>
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="btn-primary text-sm py-2 px-4"
                      >
                        <Play className="w-4 h-4 mr-1 inline" />
                        Продължи
                      </motion.button>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Achievements */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="bg-white rounded-xl shadow-lg p-6"
            >
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <Award className="w-6 h-6 mr-2 text-primary-600" />
                Постижения
              </h2>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {achievements.map((achievement) => (
                  <div 
                    key={achievement.id}
                    className={`text-center p-4 rounded-lg border-2 ${
                      achievement.earned 
                        ? 'border-primary-500 bg-primary-50' 
                        : 'border-gray-200 bg-gray-50 opacity-50'
                    }`}
                  >
                    <div className="text-4xl mb-2">{achievement.icon}</div>
                    <p className="text-sm font-semibold text-gray-900">{achievement.title}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Right Column - Schedule & Resources */}
          <div className="space-y-6">
            {/* Upcoming Classes */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="bg-white rounded-xl shadow-lg p-6"
            >
              <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                <Calendar className="w-5 h-5 mr-2 text-primary-600" />
                Предстоящи занятия
              </h2>
              
              <div className="space-y-3">
                {upcomingClasses.map((class_) => (
                  <div key={class_.id} className="border-l-4 border-primary-500 bg-primary-50 p-4 rounded-r-lg">
                    <p className="font-semibold text-gray-900 mb-1">{class_.course}</p>
                    <p className="text-sm text-gray-600 mb-1">{class_.topic}</p>
                    <div className="flex items-center justify-between text-xs text-gray-500">
                      <span>{class_.date} • {class_.time}</span>
                      <span>{class_.duration}</span>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Quick Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="bg-white rounded-xl shadow-lg p-6"
            >
              <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                <FileText className="w-5 h-5 mr-2 text-primary-600" />
                Бързи връзки
              </h2>
              
              <div className="space-y-2">
                <button className="w-full text-left px-4 py-3 bg-gray-50 hover:bg-primary-50 rounded-lg transition-colors flex items-center">
                  <Download className="w-5 h-5 mr-3 text-primary-600" />
                  <span className="text-gray-700">Материали за сваляне</span>
                </button>
                <button className="w-full text-left px-4 py-3 bg-gray-50 hover:bg-primary-50 rounded-lg transition-colors flex items-center">
                  <Award className="w-5 h-5 mr-3 text-primary-600" />
                  <span className="text-gray-700">Моите сертификати</span>
                </button>
                <button className="w-full text-left px-4 py-3 bg-gray-50 hover:bg-primary-50 rounded-lg transition-colors flex items-center">
                  <TrendingUp className="w-5 h-5 mr-3 text-primary-600" />
                  <span className="text-gray-700">Напредък по курсове</span>
                </button>
                <button className="w-full text-left px-4 py-3 bg-gray-50 hover:bg-primary-50 rounded-lg transition-colors flex items-center">
                  <User className="w-5 h-5 mr-3 text-primary-600" />
                  <span className="text-gray-700">Профил и настройки</span>
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentDashboard;

