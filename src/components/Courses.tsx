import React, { useState, useEffect } from 'react';
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
  Loader
} from 'lucide-react';
import { coursesAPI } from '../services/api';
import { useNavigate } from 'react-router-dom';

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

const Courses: React.FC = () => {
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [courses, setCourses] = useState<Course[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const categories = [
    { id: 'all', name: 'Всички курсове' },
    { id: 'beginner', name: 'Начинаещи' },
    { id: 'advanced', name: 'Напреднали' },
  ];

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
        return { text: 'Роботика', color: 'bg-blue-100 text-blue-800' };
      case 'programming':
        return { text: 'Програмиране', color: 'bg-green-100 text-green-800' };
      case 'future-tech':
        return { text: 'Бъдещи технологии', color: 'bg-purple-100 text-purple-800' };
      case 'design':
        return { text: 'Дизайн', color: 'bg-orange-100 text-orange-800' };
      case 'security':
        return { text: 'Киберсигурност', color: 'bg-red-100 text-red-800' };
      default:
        return { text: 'Други', color: 'bg-gray-100 text-gray-800' };
    }
  };

  useEffect(() => {
    fetchCourses();
  }, []);

  const fetchCourses = async () => {
    try {
      setLoading(true);
      setError(null);
      
      console.log('Fetching courses from API...');
      const response = await coursesAPI.getAll();
      
      console.log('API Response:', response.data);
      
      // Transform API response to match our Course interface
      const apiCourses: Course[] = response.data.map((course: any) => ({
        id: course.id,
        title: course.title,
        description: course.description,
        duration: course.duration,
        price: course.price,
        difficulty: course.difficulty,
        category: course.category,
        features: course.features || [],
        formatted_price: `${course.price} лв.`,
        created_at: course.created_at,
        updated_at: course.updated_at
      }));
      
      // Filter out unwanted courses
      const allowedCourses = [
        'LEGO РобоМастъри (6-10 г.)',
        'Основи на програмирането със Scratch (10-12 г.)',
        'Python за начинаещи (12-15 г.)',
        'Web Development Basics (13-16 г.)',
        'AI и Machine Learning за тийнейджъри (15-18 г.)',
        'Киберсигурност за ученици (14-18 г.)',
        'Графичен дизайн (15-18 г.)',
        'Подготовка за ИТ интервю (18 г.)',
        'Индивидуални уроци и консултации'
      ];
      
      const filteredApiCourses = apiCourses.filter(course => 
        allowedCourses.includes(course.title)
      );
      
      setCourses(filteredApiCourses);
    } catch (err: any) {
      console.error('Error fetching courses:', err);
      setError(err.response?.data?.message || err.message || 'Failed to fetch courses');
      
      // Fallback to static data if API fails
      console.log('Falling back to static course data...');
      const staticCourses: Course[] = [
        // НАЧИНАЕЩИ КУРСОВЕ
        {
          id: 1,
          title: 'LEGO РобоМастъри (6-10 г.)',
          description: 'Научете децата да строят и програмират роботи с LEGO, като развиват логическо мислене и творчески умения.',
          duration: '12 седмици',
          price: 280,
          difficulty: 'beginner',
          category: 'robotics',
          features: [
            'LEGO Mindstorms програмиране',
            'Строене на роботи',
            'Разработване на игри',
            'Групови проекти',
            'Сертификат за завършване'
          ],
          formatted_price: '280 лв.',
          created_at: '2024-01-01',
          updated_at: '2024-01-01'
        },
        {
          id: 2,
          title: 'Основи на програмирането със Scratch (10-12 г.)',
          description: 'Въвеждане в света на програмирането с подходящи за възрастта езици и платформи.',
          duration: '16 седмици',
          price: 320,
          difficulty: 'beginner',
          category: 'programming',
          features: [
            'Scratch и Blockly',
            'Python за начинаещи',
            'Веб дизайн основи',
            'Алгоритмично мислене',
            'Практически проекти'
          ],
          formatted_price: '320 лв.',
          created_at: '2024-01-01',
          updated_at: '2024-01-01'
        },
        {
          id: 3,
          title: 'Python за начинаещи (12-15 г.)',
          description: 'Научете основите на Python програмирането с практически проекти и игри.',
          duration: '20 седмици',
          price: 400,
          difficulty: 'beginner',
          category: 'programming',
          features: [
            'Python синтаксис и основи',
            'Структури от данни',
            'Функции и модули',
            'Практически проекти',
            'Сертификат за завършване'
          ],
          formatted_price: '400 лв.',
          created_at: '2024-01-01',
          updated_at: '2024-01-01'
        },
        // НАПРЕДНАЛИ КУРСОВЕ
        {
          id: 4,
          title: 'Web Development Basics (13-16 г.)',
          description: 'Научете основите на уеб разработката с HTML, CSS и JavaScript.',
          duration: '24 седмици',
          price: 480,
          difficulty: 'advanced',
          category: 'programming',
          features: [
            'HTML5 и CSS3',
            'JavaScript основи',
            'Responsive дизайн',
            'Веб проекти',
            'Git и версиониране'
          ],
          formatted_price: '480 лв.',
          created_at: '2024-01-01',
          updated_at: '2024-01-01'
        },
        {
          id: 5,
          title: 'AI и Machine Learning за тийнейджъри (15-18 г.)',
          description: 'Разгледайте света на изкуствения интелект и машинното обучение.',
          duration: '30 седмици',
          price: 600,
          difficulty: 'advanced',
          category: 'future-tech',
          features: [
            'TensorFlow и PyTorch',
            'Нейронни мрежи',
            'Обработка на данни',
            'Исследователски проекти',
            'Менторство'
          ],
          formatted_price: '600 лв.',
          created_at: '2024-01-01',
          updated_at: '2024-01-01'
        },
        {
          id: 6,
          title: 'Киберсигурност за ученици (14-18 г.)',
          description: 'Защита на дигитални системи и етични техники за тестване на сигурността.',
          duration: '28 седмици',
          price: 560,
          difficulty: 'advanced',
          category: 'security',
          features: [
            'Етично хакерство',
            'Пенетрационно тестване',
            'Криптография',
            'Форензика',
            'Сертификация'
          ],
          formatted_price: '560 лв.',
          created_at: '2024-01-01',
          updated_at: '2024-01-01'
        },
        {
          id: 7,
          title: 'Графичен дизайн (15-18 г.)',
          description: 'Развиване на креативните умения чрез дигитален дизайн и изкуство.',
          duration: '18 седмици',
          price: 360,
          difficulty: 'advanced',
          category: 'design',
          features: [
            'Adobe Creative Suite',
            'Цветова теория',
            'Типография',
            'Дигитално рисуване',
            'Портфолио проекти'
          ],
          formatted_price: '360 лв.',
          created_at: '2024-01-01',
          updated_at: '2024-01-01'
        },
        {
          id: 8,
          title: 'Подготовка за ИТ интервю (18 г.)',
          description: 'Подгответе се за успешно ИТ интервю с практически упражнения и симулации.',
          duration: '12 седмици',
          price: 500,
          difficulty: 'advanced',
          category: 'programming',
          features: [
            'Технически интервюта',
            'Алгоритмични задачи',
            'Системен дизайн',
            'Мок интервюта',
            'Кариерно консултиране'
          ],
          formatted_price: '500 лв.',
          created_at: '2024-01-01',
          updated_at: '2024-01-01'
        },
        {
          id: 9,
          title: 'Индивидуални уроци и консултации',
          description: 'Персонализирано обучение според нуждите и интересите на детето.',
          duration: 'По заявка',
          price: 50,
          difficulty: 'both',
          category: 'programming',
          features: [
            '1-на-1 обучение',
            'Гъвкаво време',
            'Персонализирана програма',
            'Онлайн или присъствено',
            'Експертни ментори'
          ],
          formatted_price: '50 лв./час',
          created_at: '2024-01-01',
          updated_at: '2024-01-01'
        }
      ];
      
      setCourses(staticCourses);
    } finally {
      setLoading(false);
    }
  };

  const filteredCourses = selectedCategory === 'all' 
    ? courses 
    : courses.filter(course => 
        course.difficulty === selectedCategory || 
        (selectedCategory === 'beginner' && course.difficulty === 'both') ||
        (selectedCategory === 'advanced' && course.difficulty === 'both')
      );

  if (loading) {
    return (
      <section id="courses" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Loader className="w-8 h-8 animate-spin mx-auto mb-4" />
            <p className="text-gray-600">Loading courses...</p>
          </div>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section id="courses" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-red-600 mb-4">{error}</p>
            <button 
              onClick={fetchCourses}
              className="btn-primary"
            >
              Try Again
            </button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="courses" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Нашите{' '}
            <span className="bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent">
              Курсове
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Разгледайте курсовете, които предлагаме за ученици от 6 до 18 г. Всяка категория е внимателно структурирана, 
            за да отговаря на възрастта и интересите на учениците.
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                selectedCategory === category.id
                  ? 'bg-primary-600 text-white shadow-lg'
                  : 'bg-white text-gray-600 hover:bg-gray-100'
              }`}
            >
              {category.name}
            </button>
          ))}
        </motion.div>

        {/* Courses Grid */}
        <div className="space-y-16">
          {/* Начинаещи Courses */}
          {selectedCategory === 'all' || selectedCategory === 'beginner' ? (
            <div>
              {selectedCategory !== 'all' && (
                <motion.h3
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                  className="text-2xl font-bold text-gray-900 mb-8 text-center"
                >
                  Курсове за начинаещи
                </motion.h3>
              )}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
              >
                {filteredCourses
                  .filter(course => course.difficulty === 'beginner' || course.difficulty === 'both')
                  .map((course, index) => {
            const IconComponent = getIconForCategory(course.category);
            const categoryColor = getCategoryColor(course.category);
            const categoryBadge = getCategoryBadge(course.category);
            return (
              <motion.div
                key={course.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                className="group relative"
              >
                <div className="card p-6 h-full border-l-4 border-l-transparent hover:border-l-primary-500 transition-all duration-300">
                  {/* Category Badge */}
                  <div className="flex items-center justify-between mb-2">
                    <span className={`text-xs font-semibold rounded-full px-3 py-1 ${categoryBadge.color}`}>
                      {categoryBadge.text}
                    </span>
                    <span className="text-xs text-gray-500">
                      #{course.id}
                    </span>
                  </div>
                  <div className="flex items-center justify-between mb-4">
                    <div className={`w-12 h-12 bg-gradient-to-br ${categoryColor} rounded-lg flex items-center justify-center`}>
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex items-center space-x-1">
                      <Star className="w-4 h-4 text-yellow-400 fill-current" />
                      <span className="text-sm font-medium text-gray-600">4.8</span>
                    </div>
                  </div>

                  <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-primary-600 transition-colors">
                    {course.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {course.description}
                  </p>

                  <div className="flex items-center justify-between mb-4 text-sm text-gray-500">
                    <div className="flex items-center">
                      <Clock className="w-4 h-4 mr-1" />
                      {course.duration}
                    </div>
                    <div className="flex items-center">
                      <Users className="w-4 h-4 mr-1" />
                      120 students
                    </div>
                  </div>

                  <ul className="space-y-2 mb-6">
                    {course.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-600">
                        <Check className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <span className="text-2xl font-bold text-gray-900">{course.formatted_price}</span>
                      <span className="text-lg text-gray-400 line-through">${(course.price * 1.5).toFixed(0)}</span>
                    </div>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="btn-primary"
                    >
                      Запиши се
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            );
                  })}
              </motion.div>
            </div>
          ) : null}

          {/* Напреднали Courses */}
          {selectedCategory === 'all' || selectedCategory === 'advanced' ? (
            <div>
              {selectedCategory !== 'all' && (
                <motion.h3
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                  className="text-2xl font-bold text-gray-900 mb-8 text-center"
                >
                  Курсове за напреднали
                </motion.h3>
              )}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
              >
                {filteredCourses
                  .filter(course => course.difficulty === 'advanced' || course.difficulty === 'both')
                  .map((course, index) => {
                    const IconComponent = getIconForCategory(course.category);
                    const categoryColor = getCategoryColor(course.category);
                    const categoryBadge = getCategoryBadge(course.category);
                    return (
                      <motion.div
                        key={course.id}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: index * 0.1 }}
                        viewport={{ once: true }}
                        whileHover={{ y: -10 }}
                        className="group relative"
                      >
                        <div className="card p-6 h-full border-l-4 border-l-transparent hover:border-l-primary-500 transition-all duration-300">
                          {/* Category Badge */}
                          <div className="flex items-center justify-between mb-2">
                            <span className={`text-xs font-semibold rounded-full px-3 py-1 ${categoryBadge.color}`}>
                              {categoryBadge.text}
                            </span>
                            <span className="text-xs text-gray-500">
                              #{course.id}
                            </span>
                          </div>
                          <div className="flex items-center justify-between mb-4">
                            <div className={`w-12 h-12 bg-gradient-to-br ${categoryColor} rounded-lg flex items-center justify-center`}>
                              <IconComponent className="w-6 h-6 text-white" />
                            </div>
                            <div className="flex items-center space-x-1">
                              <Star className="w-4 h-4 text-yellow-400 fill-current" />
                              <span className="text-sm font-medium text-gray-600">4.8</span>
                            </div>
                          </div>

                          <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-primary-600 transition-colors">
                            {course.title}
                          </h3>
                          
                          <p className="text-gray-600 mb-4 leading-relaxed">
                            {course.description}
                          </p>

                          <div className="flex items-center justify-between mb-4 text-sm text-gray-500">
                            <div className="flex items-center">
                              <Clock className="w-4 h-4 mr-1" />
                              {course.duration}
                            </div>
                            <div className="flex items-center">
                              <Users className="w-4 h-4 mr-1" />
                              120 students
                            </div>
                          </div>

                          <ul className="space-y-2 mb-6">
                            {course.features.map((feature, idx) => (
                              <li key={idx} className="flex items-center text-sm text-gray-600">
                                <Check className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                                {feature}
                              </li>
                            ))}
                          </ul>

                          <div className="flex items-center justify-between">
                            <div className="flex items-center space-x-2">
                              <span className="text-2xl font-bold text-gray-900">{course.formatted_price}</span>
                              <span className="text-lg text-gray-400 line-through">${(course.price * 1.5).toFixed(0)}</span>
                            </div>
                            <motion.button
                              whileHover={{ scale: 1.05 }}
                              whileTap={{ scale: 0.95 }}
                              className="btn-primary"
                            >
                              Запиши се
                            </motion.button>
                          </div>
                        </div>
                      </motion.div>
                    );
                  })}
              </motion.div>
            </div>
          ) : null}
        </div>

        {/* Discount Table Section */}
        <motion.section
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-20 bg-white rounded-2xl p-8 lg:p-12 shadow-xl border border-gray-100 max-w-6xl mx-auto"
        >
          <div className="text-center mb-12">
            <h3 className="text-4xl font-bold text-gray-900 mb-4">Възможности за отстъпки</h3>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Спестете повече, когато инвестирате в повече знания!<br />
              Възползвайте се от нашите гъвкави условия и запишете вашето дете с преференциална цена.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {[
              {
                type: 'Ранно записване',
                size: '10%',
                condition: 'Записване до един месец преди началото',
                combinable: true,
                note: 'Да, само със семейната отстъпка',
                icon: '⏰',
                color: 'from-green-500 to-emerald-500',
                bgColor: 'bg-green-50',
                textColor: 'text-green-800',
                borderColor: 'border-green-200'
              },
              {
                type: 'Семейна отстъпка',
                size: '5%',
                condition: 'Две или повече деца от едно семейство',
                combinable: true,
                note: 'Да, само с ранното записване',
                icon: '👨‍👩‍👧‍👦',
                color: 'from-blue-500 to-cyan-500',
                bgColor: 'bg-blue-50',
                textColor: 'text-blue-800',
                borderColor: 'border-blue-200'
              },
              {
                type: 'Записване на целия курс',
                size: '8%',
                condition: 'Записване на всички модули от курса последователно',
                combinable: false,
                note: 'Не, фиксирана цена, не се комбинира',
                icon: '📚',
                color: 'from-purple-500 to-pink-500',
                bgColor: 'bg-purple-50',
                textColor: 'text-purple-800',
                borderColor: 'border-purple-200'
              },
              {
                type: 'За повече от един модул',
                size: '8%',
                condition: 'Записване за повече от един модул в рамките на учебната година',
                combinable: false,
                note: 'Не, не се комбинира с други отстъпки',
                icon: '🎯',
                color: 'from-orange-500 to-red-500',
                bgColor: 'bg-orange-50',
                textColor: 'text-orange-800',
                borderColor: 'border-orange-200'
              },
            ].map((row, idx) => (
              <motion.div
                key={row.type}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5, scale: 1.02 }}
                className={`${row.bgColor} ${row.borderColor} border-2 rounded-xl p-6 hover:shadow-lg transition-all duration-300 cursor-pointer`}
              >
                <div className="mb-6">
                  <div className="flex items-center space-x-3 mb-3">
                    <div className={`w-12 h-12 bg-gradient-to-r ${row.color} rounded-lg flex items-center justify-center text-white text-xl`}>
                      {row.icon}
                    </div>
                    <div>
                      <h4 className={`text-xl font-bold ${row.textColor}`}>{row.type}</h4>
                      <div className={`text-3xl font-bold ${row.textColor}`}>{row.size} отстъпка</div>
                    </div>
                  </div>
                  
                  <div className={`${row.bgColor} ${row.borderColor} border rounded-lg p-4 mb-4`}>
                    <p className="text-gray-700 font-medium leading-relaxed">{row.condition}</p>
                  </div>
                  
                  <div className="space-y-3">
                    <div className="flex items-start space-x-3">
                      <div className={`w-6 h-6 rounded-full ${row.combinable ? 'bg-green-100' : 'bg-gray-100'} flex items-center justify-center flex-shrink-0 mt-0.5`}>
                        <div className={`w-3 h-3 rounded-full ${row.combinable ? 'bg-green-500' : 'bg-gray-400'}`}></div>
                      </div>
                      <div>
                        <p className="text-sm font-medium text-gray-900 mb-1">
                          {row.combinable ? 'Може да се комбинира' : 'Не може да се комбинира'}
                        </p>
                        <p className="text-sm text-gray-600">{row.note}</p>
                      </div>
                    </div>
                    
                    {row.combinable && (
                      <div className="bg-green-50 border border-green-200 rounded-lg p-3">
                        <p className="text-sm text-green-800 font-medium">
                          💡 Съвет: Комбинирайте с други отстъпки за максимални спестявания!
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-primary-600 to-secondary-600 rounded-2xl p-8 lg:p-12 text-white">
            <h3 className="text-3xl font-bold mb-4">
              Не сте сигурни кой курс да изберете?
            </h3>
            <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
              Направете нашия безплатен тест, за да намерите перфектния курс според възрастта, интересите и целите.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => navigate('/course-quiz')}
              className="bg-white text-primary-600 font-semibold py-3 px-8 rounded-lg hover:bg-gray-100 transition-colors duration-300"
            >
              Направете безплатен тест
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Courses;

export const CoursesSection = Courses; 