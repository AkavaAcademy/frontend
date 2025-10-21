import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useAuth } from '../contexts/AuthContext';
import { useNavigate } from 'react-router-dom';
import { 
  Users, 
  Calendar, 
  CreditCard, 
  MessageSquare, 
  TrendingUp,
  LogOut,
  Clock,
  CheckCircle,
  AlertCircle,
  Download,
  Bell,
  BookOpen,
  Award
} from 'lucide-react';

const ParentDashboard: React.FC = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const [selectedChild, setSelectedChild] = useState(0);

  const handleLogout = () => {
    logout();
    navigate('/parent-portal');
  };

  // Demo data - in production, this would come from your backend
  const children = [
    {
      id: 1,
      name: 'Мария Петрова',
      age: 12,
      enrolledCourses: 2,
      totalProgress: 55,
      attendanceRate: 95,
      courses: [
        {
          id: 1,
          title: 'Python за деца',
          progress: 65,
          instructor: 'Иван Георгиев',
          nextClass: '25.10.2025 в 16:00',
          grade: 'Отличен',
          attendance: '15/16 присъствия'
        },
        {
          id: 2,
          title: 'Основи на програмирането',
          progress: 45,
          instructor: 'Мария Димитрова',
          nextClass: '26.10.2025 в 14:00',
          grade: 'Много добър',
          attendance: '7/8 присъствия'
        }
      ]
    },
    {
      id: 2,
      name: 'Георги Петров',
      age: 9,
      enrolledCourses: 1,
      totalProgress: 40,
      attendanceRate: 100,
      courses: [
        {
          id: 3,
          title: 'LEGO роботика и разработване на игри',
          progress: 40,
          instructor: 'Петър Стоянов',
          nextClass: '27.10.2025 в 15:00',
          grade: 'Отличен',
          attendance: '5/5 присъствия'
        }
      ]
    }
  ];

  const upcomingPayments = [
    {
      id: 1,
      course: 'Python за деца - Модул 2',
      child: 'Мария Петрова',
      amount: 280,
      dueDate: '15.11.2025',
      status: 'upcoming'
    }
  ];

  const recentPayments = [
    {
      id: 1,
      course: 'Python за деца - Модул 1',
      child: 'Мария Петрова',
      amount: 280,
      date: '15.09.2025',
      invoice: '#AKV-2025-001'
    },
    {
      id: 2,
      course: 'LEGO роботика - Модул 1',
      child: 'Георги Петров',
      amount: 240,
      date: '01.10.2025',
      invoice: '#AKV-2025-002'
    }
  ];

  const announcements = [
    {
      id: 1,
      title: 'Промяна в графика',
      message: 'Занятията на 28.10 ще започнат с 30 минути закъснение.',
      date: '20.10.2025',
      type: 'warning'
    },
    {
      id: 2,
      title: 'Нов курс: Киберсигурност',
      message: 'Отварям записванията за нов курс по киберсигурност за ученици 15-18 г.',
      date: '18.10.2025',
      type: 'info'
    }
  ];

  const currentChild = children[selectedChild];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-primary-50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4"
        >
          <div>
            <h1 className="text-4xl font-bold text-gray-900 mb-2">
              Добре дошли, {user?.name || 'Родител'}! 👋
            </h1>
            <p className="text-xl text-gray-600">
              Ето преглед на напредъка на вашите деца
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

        {/* Children Selector */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="bg-white rounded-xl shadow-lg p-6 mb-8"
        >
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-2xl font-bold text-gray-900 flex items-center">
              <Users className="w-6 h-6 mr-2 text-primary-600" />
              Моите деца
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {children.map((child, index) => (
              <motion.button
                key={child.id}
                onClick={() => setSelectedChild(index)}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={`text-left p-6 rounded-xl border-2 transition-all ${
                  selectedChild === index
                    ? 'border-primary-500 bg-primary-50'
                    : 'border-gray-200 bg-gray-50 hover:border-primary-300'
                }`}
              >
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900">{child.name}</h3>
                    <p className="text-sm text-gray-600">{child.age} години</p>
                  </div>
                  {selectedChild === index && (
                    <CheckCircle className="w-6 h-6 text-primary-600" />
                  )}
                </div>
                
                <div className="grid grid-cols-3 gap-2 text-sm">
                  <div>
                    <p className="text-gray-600">Курсове</p>
                    <p className="font-bold text-gray-900">{child.enrolledCourses}</p>
                  </div>
                  <div>
                    <p className="text-gray-600">Прогрес</p>
                    <p className="font-bold text-green-600">{child.totalProgress}%</p>
                  </div>
                  <div>
                    <p className="text-gray-600">Присъствие</p>
                    <p className="font-bold text-blue-600">{child.attendanceRate}%</p>
                  </div>
                </div>
              </motion.button>
            ))}
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Progress & Courses */}
          <div className="lg:col-span-2 space-y-6">
            {/* Course Progress */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white rounded-xl shadow-lg p-6"
            >
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <BookOpen className="w-6 h-6 mr-2 text-primary-600" />
                Курсове на {currentChild.name}
              </h2>
              
              <div className="space-y-6">
                {currentChild.courses.map((course) => (
                  <div key={course.id} className="border border-gray-200 rounded-xl p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex-1">
                        <h3 className="text-xl font-semibold text-gray-900 mb-1">{course.title}</h3>
                        <p className="text-sm text-gray-600">Преподавател: {course.instructor}</p>
                      </div>
                      <div className="flex flex-col items-end">
                        <div className="text-2xl font-bold text-primary-600">{course.progress}%</div>
                        <span className={`text-xs px-2 py-1 rounded-full mt-1 ${
                          course.grade === 'Отличен' ? 'bg-green-100 text-green-800' : 'bg-blue-100 text-blue-800'
                        }`}>
                          {course.grade}
                        </span>
                      </div>
                    </div>
                    
                    {/* Progress Bar */}
                    <div className="mb-4">
                      <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                        <div 
                          className="h-full bg-gradient-to-r from-primary-500 to-secondary-500 transition-all duration-500"
                          style={{ width: `${course.progress}%` }}
                        ></div>
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between text-sm">
                      <div className="flex items-center text-gray-600">
                        <Clock className="w-4 h-4 mr-1" />
                        Следващ урок: {course.nextClass}
                      </div>
                      <div className="flex items-center text-green-600">
                        <CheckCircle className="w-4 h-4 mr-1" />
                        {course.attendance}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Payment Information */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-white rounded-xl shadow-lg p-6"
            >
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <CreditCard className="w-6 h-6 mr-2 text-primary-600" />
                Плащания
              </h2>
              
              {/* Upcoming Payments */}
              {upcomingPayments.length > 0 && (
                <div className="mb-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Предстоящи плащания</h3>
                  <div className="space-y-3">
                    {upcomingPayments.map((payment) => (
                      <div key={payment.id} className="bg-yellow-50 border-l-4 border-yellow-500 p-4 rounded-r-lg">
                        <div className="flex items-start justify-between">
                          <div className="flex-1">
                            <p className="font-semibold text-gray-900">{payment.course}</p>
                            <p className="text-sm text-gray-600">{payment.child}</p>
                            <p className="text-xs text-gray-500 mt-1">Падеж: {payment.dueDate}</p>
                          </div>
                          <div className="text-right">
                            <p className="text-xl font-bold text-gray-900">{payment.amount} лв.</p>
                            <motion.button
                              whileHover={{ scale: 1.05 }}
                              whileTap={{ scale: 0.95 }}
                              className="text-sm text-primary-600 hover:text-primary-700 font-semibold mt-1"
                            >
                              Плати сега
                            </motion.button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
              
              {/* Recent Payments */}
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Последни плащания</h3>
                <div className="space-y-3">
                  {recentPayments.map((payment) => (
                    <div key={payment.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                      <div className="flex-1">
                        <p className="font-semibold text-gray-900">{payment.course}</p>
                        <p className="text-sm text-gray-600">{payment.child}</p>
                        <p className="text-xs text-gray-500 mt-1">{payment.date} • {payment.invoice}</p>
                      </div>
                      <div className="text-right flex items-center space-x-3">
                        <div>
                          <p className="font-bold text-gray-900">{payment.amount} лв.</p>
                          <p className="text-xs text-green-600">Платено</p>
                        </div>
                        <button className="text-primary-600 hover:text-primary-700">
                          <Download className="w-5 h-5" />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Column - Schedule & Communication */}
          <div className="space-y-6">
            {/* Announcements */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="bg-white rounded-xl shadow-lg p-6"
            >
              <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                <Bell className="w-5 h-5 mr-2 text-primary-600" />
                Съобщения
              </h2>
              
              <div className="space-y-3">
                {announcements.map((announcement) => (
                  <div 
                    key={announcement.id}
                    className={`p-4 rounded-lg border-l-4 ${
                      announcement.type === 'warning' 
                        ? 'bg-yellow-50 border-yellow-500' 
                        : 'bg-blue-50 border-blue-500'
                    }`}
                  >
                    <div className="flex items-start space-x-3">
                      <AlertCircle className={`w-5 h-5 flex-shrink-0 mt-0.5 ${
                        announcement.type === 'warning' ? 'text-yellow-600' : 'text-blue-600'
                      }`} />
                      <div className="flex-1">
                        <p className="font-semibold text-gray-900 text-sm mb-1">{announcement.title}</p>
                        <p className="text-xs text-gray-600 mb-2">{announcement.message}</p>
                        <p className="text-xs text-gray-500">{announcement.date}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Quick Actions */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="bg-white rounded-xl shadow-lg p-6"
            >
              <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                <TrendingUp className="w-5 h-5 mr-2 text-primary-600" />
                Бързи действия
              </h2>
              
              <div className="space-y-2">
                <button className="w-full text-left px-4 py-3 bg-gray-50 hover:bg-primary-50 rounded-lg transition-colors flex items-center">
                  <MessageSquare className="w-5 h-5 mr-3 text-primary-600" />
                  <span className="text-gray-700">Съобщение до преподавател</span>
                </button>
                <button className="w-full text-left px-4 py-3 bg-gray-50 hover:bg-primary-50 rounded-lg transition-colors flex items-center">
                  <Calendar className="w-5 h-5 mr-3 text-primary-600" />
                  <span className="text-gray-700">Виж цялото разписание</span>
                </button>
                <button className="w-full text-left px-4 py-3 bg-gray-50 hover:bg-primary-50 rounded-lg transition-colors flex items-center">
                  <Award className="w-5 h-5 mr-3 text-primary-600" />
                  <span className="text-gray-700">Изтегли сертификати</span>
                </button>
                <button className="w-full text-left px-4 py-3 bg-gray-50 hover:bg-primary-50 rounded-lg transition-colors flex items-center">
                  <BookOpen className="w-5 h-5 mr-3 text-primary-600" />
                  <span className="text-gray-700">Запиши за нов курс</span>
                </button>
              </div>
            </motion.div>

            {/* Support */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="bg-gradient-to-r from-primary-600 to-secondary-600 rounded-xl shadow-lg p-6 text-white"
            >
              <h3 className="text-lg font-bold mb-2">Нуждаете се от помощ?</h3>
              <p className="text-sm opacity-90 mb-4">
                Свържете се с нас за въпроси относно курсовете или напредъка на вашето дете.
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full bg-white text-primary-600 font-semibold py-2 px-4 rounded-lg hover:bg-gray-100 transition-colors"
              >
                Свържи се
              </motion.button>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ParentDashboard;

