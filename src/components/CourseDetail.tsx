import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Check, 
  Star, 
  Clock, 
  Users, 
  BookOpen,
  Code,
  Gamepad2,
  Globe,
  Smartphone,
  Loader,
  ArrowLeft,
  Calendar,
  Award,
  Target,
  UserCheck
} from 'lucide-react';
import { coursesAPI } from '../services/api';
import { useTranslation } from 'react-i18next';

interface Course {
  id: number;
  title: string;
  description: string;
  duration: string;
  price: number;
  difficulty: string;
  category: string;
  features: string[];
  formatted_price: string;
  created_at: string;
  updated_at: string;
}

const CourseDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { t } = useTranslation();
  const [course, setCourse] = useState<Course | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const getIconForCategory = (category: string) => {
    switch (category) {
      case 'robotics':
        return Gamepad2;
      case 'programming':
        return Code;
      case 'future-tech':
        return Globe;
      case 'design':
        return BookOpen;
      case 'security':
        return Smartphone;
      default:
        return Code;
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'robotics':
        return 'from-blue-500 to-cyan-500';
      case 'programming':
        return 'from-green-500 to-emerald-500';
      case 'future-tech':
        return 'from-purple-500 to-pink-500';
      case 'design':
        return 'from-orange-500 to-red-500';
      case 'security':
        return 'from-red-500 to-rose-500';
      default:
        return 'from-gray-500 to-slate-500';
    }
  };

  const getCategoryBadge = (category: string) => {
    switch (category) {
      case 'robotics':
        return { text: t('courses.categoryBadge.robotics'), color: 'bg-blue-100 text-blue-800' };
      case 'programming':
        return { text: t('courses.categoryBadge.programming'), color: 'bg-green-100 text-green-800' };
      case 'future-tech':
        return { text: t('courses.categoryBadge.future-tech'), color: 'bg-purple-100 text-purple-800' };
      case 'design':
        return { text: t('courses.categoryBadge.design'), color: 'bg-orange-100 text-orange-800' };
      case 'security':
        return { text: t('courses.categoryBadge.security'), color: 'bg-red-100 text-red-800' };
      default:
        return { text: t('courses.categoryBadge.other'), color: 'bg-gray-100 text-gray-800' };
    }
  };

  const getDifficultyText = (difficulty: string) => {
    switch (difficulty) {
      case 'beginner':
        return t('courses.categories.beginner');
      case 'advanced':
        return t('courses.categories.advanced');
      case 'both':
        return t('courses.categories.all');
      default:
        return difficulty;
    }
  };

  useEffect(() => {
    if (id) {
      fetchCourse(parseInt(id));
    }
  }, [id]);

  const fetchCourse = async (courseId: number) => {
    try {
      setLoading(true);
      setError(null);
      
      // Try to fetch from API first
      try {
        const response = await coursesAPI.getById(courseId);
        const apiCourse = response.data;
        setCourse({
          id: apiCourse.id,
          title: apiCourse.title,
          description: apiCourse.description,
          duration: apiCourse.duration,
          price: apiCourse.price,
          difficulty: apiCourse.difficulty,
          category: apiCourse.category,
          features: apiCourse.features || [],
          formatted_price: `${apiCourse.price} лв.`,
          created_at: apiCourse.created_at,
          updated_at: apiCourse.updated_at
        });
      } catch (apiError) {
        // Fallback to static data
        console.warn('API fetch failed, using static data:', apiError);
        const staticCourses: Course[] = [
          // НАЧИНАЕЩИ КУРСОВЕ (6-14 г.)
          {
            id: 1,
            title: 'Tech Explorers: LEGO Robotics & Coding (6–10 г.)',
            description: 'Научете децата да строят и програмират роботи с LEGO, като развиват логическо мислене и творчески умения.',
            duration: '6 седмици / 6 занятия',
            price: 240,
            difficulty: 'beginner',
            category: 'robotics',
            features: [
              'Основи на роботиката',
              'Сензори и двигатели',
              'Блоково програмиране',
              'STEM игри',
              'Сертификат за завършване'
            ],
            formatted_price: '240 лв.',
            created_at: '2024-01-01',
            updated_at: '2024-01-01'
          },
          {
            id: 2,
            title: 'Scratch Creators (10–12 г.)',
            description: 'Създаване на анимации, игри и интерактивни истории. Основи на логическо мислене.',
            duration: '6 седмици / 6 занятия',
            price: 240,
            difficulty: 'beginner',
            category: 'programming',
            features: [
              'Създаване на анимации',
              'Разработване на игри',
              'Интерактивни истории',
              'Основи на логическо мислене',
              'Практически проекти'
            ],
            formatted_price: '240 лв.',
            created_at: '2024-01-01',
            updated_at: '2024-01-01'
          },
          {
            id: 3,
            title: 'Python Start Lab (12–14 г.)',
            description: 'Програмиране на мини игри, чатботове, базови алгоритми.',
            duration: '6 седмици / 6 занятия',
            price: 280,
            difficulty: 'beginner',
            category: 'programming',
            features: [
              'Програмиране на мини игри',
              'Създаване на чатботове',
              'Базови алгоритми',
              'Python синтаксис',
              'Сертификат за завършване'
            ],
            formatted_price: '280 лв.',
            created_at: '2024-01-01',
            updated_at: '2024-01-01'
          },
          // ДИЗАЙН КУРСОВЕ (15-18 г.)
          {
            id: 4,
            title: 'Digital Design Studio (15–18 г.)',
            description: 'Canva, Adobe Express, Figma – графика, композиция, лого дизайн, визуален сторителинг.',
            duration: '8 седмици / 8 занятия',
            price: 360,
            difficulty: 'advanced',
            category: 'design',
            features: [
              'Canva и Adobe Express',
              'Figma дизайн',
              'Графика и композиция',
              'Лого дизайн',
              'Визуален сториелинг'
            ],
            formatted_price: '360 лв.',
            created_at: '2024-01-01',
            updated_at: '2024-01-01'
          },
          {
            id: 5,
            title: 'UX Discovery (16–18 г.)',
            description: 'Основи на UX/UI, wireframes, потребителско изживяване, прототипиране.',
            duration: '8 седмици / 8 занятия',
            price: 400,
            difficulty: 'advanced',
            category: 'design',
            features: [
              'Основи на UX/UI',
              'Wireframes',
              'Потребителско изживяване',
              'Прототипиране',
              'Портфолио проекти'
            ],
            formatted_price: '400 лв.',
            created_at: '2024-01-01',
            updated_at: '2024-01-01'
          },
          // НАПРЕДНАЛИ ТЕХНОЛОГИИ (15-18 г.)
          {
            id: 6,
            title: 'CyberSmart Teens (15–18 г.)',
            description: 'Онлайн безопасност, дигитален отпечатък, AI етика, защита на данни.',
            duration: '6 седмици / 6 занятия',
            price: 300,
            difficulty: 'advanced',
            category: 'security',
            features: [
              'Онлайн безопасност',
              'Дигитален отпечатък',
              'AI етика',
              'Защита на данни',
              'Сертификат за завършване'
            ],
            formatted_price: '300 лв.',
            created_at: '2024-01-01',
            updated_at: '2024-01-01'
          },
          {
            id: 7,
            title: 'AI for Teens (15–18 г.)',
            description: 'Как работи AI, ChatGPT, машинно обучение, визуални и текстови модели.',
            duration: '10 седмици / 10 занятия',
            price: 500,
            difficulty: 'advanced',
            category: 'future-tech',
            features: [
              'Как работи AI',
              'ChatGPT и AI инструменти',
              'Машинно обучение',
              'Визуални и текстови модели',
              'Практически проекти'
            ],
            formatted_price: '500 лв.',
            created_at: '2024-01-01',
            updated_at: '2024-01-01'
          },
          {
            id: 8,
            title: 'Career & Confidence Lab (16–18 г.)',
            description: 'Комуникация, CV, интервю симулации, критическо мислене, лидерство.',
            duration: '5 седмици / 5 занятия',
            price: 280,
            difficulty: 'advanced',
            category: 'programming',
            features: [
              'Комуникация и soft skills',
              'CV създаване',
              'Интервю симулации',
              'Критическо мислене',
              'Лидерство и работа в екип'
            ],
            formatted_price: '280 лв.',
            created_at: '2024-01-01',
            updated_at: '2024-01-01'
          }
        ];
        
        const foundCourse = staticCourses.find(c => c.id === courseId);
        if (foundCourse) {
          setCourse(foundCourse);
        } else {
          setError('Курсът не е намерен');
        }
      }
    } catch (err: any) {
      console.error('Error fetching course:', err);
      setError(err.message || 'Грешка при зареждане на курса');
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <section className="py-20 bg-gray-50 min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Loader className="w-8 h-8 animate-spin mx-auto mb-4" />
            <p className="text-gray-600">Зареждане на курс...</p>
          </div>
        </div>
      </section>
    );
  }

  if (error || !course) {
    return (
      <section className="py-20 bg-gray-50 min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-red-600 mb-4">{error || 'Курсът не е намерен'}</p>
            <button 
              onClick={() => navigate('/courses')}
              className="btn-primary"
            >
              Назад към курсовете
            </button>
          </div>
        </div>
      </section>
    );
  }

  const IconComponent = getIconForCategory(course.category);
  const categoryColor = getCategoryColor(course.category);
  const categoryBadge = getCategoryBadge(course.category);

  return (
    <section className="py-20 bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Button */}
        <motion.button
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          onClick={() => navigate('/courses')}
          className="flex items-center text-gray-600 hover:text-primary-600 mb-8 transition-colors"
        >
          <ArrowLeft className="w-5 h-5 mr-2" />
          Назад към курсовете
        </motion.button>

        {/* Course Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-2xl shadow-xl p-8 lg:p-12 mb-8"
        >
          <div className="flex flex-col lg:flex-row gap-8">
            <div className="flex-1">
              <div className="flex items-center gap-4 mb-4">
                <span className={`text-xs font-semibold rounded-full px-3 py-1 ${categoryBadge.color}`}>
                  {categoryBadge.text}
                </span>
                <span className="text-sm text-gray-500">
                  {getDifficultyText(course.difficulty)}
                </span>
              </div>
              
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
                {course.title}
              </h1>
              
              <p className="text-xl text-gray-600 mb-6 leading-relaxed">
                {course.description}
              </p>

              <div className="flex flex-wrap gap-6 mb-6">
                <div className="flex items-center text-gray-600">
                  <Clock className="w-5 h-5 mr-2 text-primary-600" />
                  <span className="font-medium">{course.duration}</span>
                </div>
                <div className="flex items-center text-gray-600">
                  <Users className="w-5 h-5 mr-2 text-primary-600" />
                  <span className="font-medium">120 {t('courses.students')}</span>
                </div>
                <div className="flex items-center text-gray-600">
                  <Star className="w-5 h-5 mr-2 text-yellow-400 fill-current" />
                  <span className="font-medium">4.8</span>
                </div>
              </div>
            </div>

            <div className="lg:w-80">
              <div className={`w-20 h-20 bg-gradient-to-br ${categoryColor} rounded-xl flex items-center justify-center mb-6`}>
                <IconComponent className="w-10 h-10 text-white" />
              </div>
              
              <div className="bg-gradient-to-br from-primary-50 to-secondary-50 rounded-xl p-6 border-2 border-primary-200">
                <div className="mb-4">
                  <div className="flex items-baseline gap-2 mb-2">
                    <span className="text-4xl font-bold text-gray-900">{course.formatted_price}</span>
                    <span className="text-xl text-gray-400 line-through">${(course.price * 1.5).toFixed(0)}</span>
                  </div>
                  <p className="text-sm text-gray-600">Еднократна такса</p>
                </div>
                
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => navigate(`/contact?course=${encodeURIComponent(course.title)}`)}
                  className="w-full btn-primary mb-4"
                >
                  Запиши се сега
                </motion.button>
                
                <button
                  onClick={() => navigate('/course-quiz')}
                  className="w-full text-primary-600 hover:text-primary-700 font-medium text-sm"
                >
                  Направете безплатен тест
                </button>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Course Features */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-white rounded-2xl shadow-xl p-8 lg:p-12 mb-8"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
            <Target className="w-8 h-8 mr-3 text-primary-600" />
            Какво ще научите
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {course.features.map((feature, idx) => (
              <div key={idx} className="flex items-start">
                <Check className="w-6 h-6 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700 text-lg">{feature}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Course Details */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="bg-white rounded-2xl shadow-xl p-8"
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
              <Calendar className="w-6 h-6 mr-3 text-primary-600" />
              Детайли за курса
            </h3>
            
            <div className="space-y-4">
              <div className="flex justify-between items-center py-3 border-b border-gray-200">
                <span className="text-gray-600 font-medium">Продължителност:</span>
                <span className="text-gray-900 font-semibold">{course.duration}</span>
              </div>
              
              <div className="flex justify-between items-center py-3 border-b border-gray-200">
                <span className="text-gray-600 font-medium">Ниво:</span>
                <span className="text-gray-900 font-semibold">{getDifficultyText(course.difficulty)}</span>
              </div>
              
              <div className="flex justify-between items-center py-3 border-b border-gray-200">
                <span className="text-gray-600 font-medium">Категория:</span>
                <span className="text-gray-900 font-semibold">{categoryBadge.text}</span>
              </div>
              
              <div className="flex justify-between items-center py-3">
                <span className="text-gray-600 font-medium">Цена:</span>
                <span className="text-gray-900 font-semibold text-xl">{course.formatted_price}</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="bg-white rounded-2xl shadow-xl p-8"
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
              <Award className="w-6 h-6 mr-3 text-primary-600" />
              Какво получавате
            </h3>
            
            <div className="space-y-4">
              <div className="flex items-start">
                <UserCheck className="w-5 h-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
                <div>
                  <p className="font-semibold text-gray-900">Сертификат за завършване</p>
                  <p className="text-gray-600 text-sm">Получете официален сертификат след успешно завършване</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <BookOpen className="w-5 h-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
                <div>
                  <p className="font-semibold text-gray-900">Учебни материали</p>
                  <p className="text-gray-600 text-sm">Достъп до всички учебни материали и ресурси</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <Users className="w-5 h-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
                <div>
                  <p className="font-semibold text-gray-900">Подкрепа от ментори</p>
                  <p className="text-gray-600 text-sm">Персонализирана подкрепа от опитни инструктори</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <Code className="w-5 h-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
                <div>
                  <p className="font-semibold text-gray-900">Практически проекти</p>
                  <p className="text-gray-600 text-sm">Работа по реални проекти за портфолио</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mt-8 bg-gradient-to-r from-primary-600 to-secondary-600 rounded-2xl p-8 lg:p-12 text-white text-center"
        >
          <h3 className="text-3xl font-bold mb-4">
            Готови ли сте да започнете?
          </h3>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Запишете се за курса днес и дайте на вашето дете възможността да развие уменията за бъдещето.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => navigate(`/contact?course=${encodeURIComponent(course.title)}`)}
              className="bg-white text-primary-600 font-semibold py-3 px-8 rounded-lg hover:bg-gray-100 transition-colors duration-300"
            >
              Запиши се сега
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => navigate('/courses')}
              className="bg-transparent border-2 border-white text-white font-semibold py-3 px-8 rounded-lg hover:bg-white hover:text-primary-600 transition-colors duration-300"
            >
              Виж други курсове
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CourseDetail;

