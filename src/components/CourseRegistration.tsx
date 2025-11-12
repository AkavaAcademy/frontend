import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { 
  ArrowLeft,
  Clock,
  Check,
  CheckCircle,
  Loader,
  BookOpen,
  Users,
  Calendar
} from 'lucide-react';
import { contactsAPI } from '../services/api';

// Course data structure - in a real app, this would come from an API
const allCourses = [
  {
    id: 1,
    title: 'Tech Explorers: LEGO Robotics & Coding (6–10 г.)',
    slug: 'tech-explorers-lego-robotics-coding',
    description: 'Въвеждане в света на роботиката и програмирането чрез LEGO, развиване на логическо мислене и STEM умения.',
    duration: '8 седмици / 8 занятия',
    price: 380,
    formatted_price: '380 лв.',
    formatted_price_eur: '195 €',
    features: [
      'Основи на роботиката',
      'Сензори и двигатели',
      'Блоково програмиране',
      'STEM игри',
      'Сертификат за завършване'
    ]
  },
  {
    id: 2,
    title: 'Scratch Creators (10–12 г.)',
    slug: 'scratch-creators',
    description: 'Създаване на анимации, игри и интерактивни истории чрез визуално програмиране.',
    duration: '8 седмици / 8 занятия',
    price: 320,
    formatted_price: '320 лв.',
    formatted_price_eur: '164 €',
    features: [
      'Създаване на анимации',
      'Разработване на игри',
      'Интерактивни истории',
      'Основи на логическо мислене',
      'Творчески проекти'
    ]
  },
  {
    id: 3,
    title: 'Python Start Lab (12–14 г.)',
    slug: 'python-start-lab',
    description: 'Първи стъпки в програмирането с Python чрез забавни проекти и практически приложения.',
    duration: '8 седмици / 8 занятия',
    price: 380,
    formatted_price: '380 лв.',
    formatted_price_eur: '195 €',
    features: [
      'Програмиране на мини игри',
      'Създаване на чатботове',
      'Базови алгоритми',
      'Python синтаксис',
      'Практически проекти'
    ]
  },
  {
    id: 4,
    title: 'Digital Design Studio (15–18 г.)',
    slug: 'digital-design-studio',
    description: 'Освояване на дигитален дизайн с модерни инструменти за създаване на визуални решения.',
    duration: '8 седмици / 8 занятия',
    price: 340,
    formatted_price: '340 лв.',
    formatted_price_eur: '174 €',
    features: [
      'Canva, Adobe Express, Figma',
      'Графика и композиция',
      'Лого дизайн',
      'Визуален сторителинг',
      'Портфолио проекти'
    ]
  },
  {
    id: 5,
    title: 'UX Discovery (16–18 г.)',
    slug: 'ux-discovery',
    description: 'Разглеждане на основите на потребителското изживяване и дизайн на интерфейси.',
    duration: '8 седмици / 8 занятия',
    price: 360,
    formatted_price: '360 лв.',
    formatted_price_eur: '185 €',
    features: [
      'Основи на UX/UI',
      'Wireframes',
      'Потребителско изживяване',
      'Прототипиране',
      'Тестване на дизайн'
    ]
  },
  {
    id: 6,
    title: 'CyberSmart Teens (15–18 г.)',
    slug: 'cybersmart-teens',
    description: 'Обучение за безопасност в дигиталния свят и защита на лични данни.',
    duration: '8 седмици / 8 занятия',
    price: 340,
    formatted_price: '340 лв.',
    formatted_price_eur: '174 €',
    features: [
      'Онлайн безопасност',
      'Дигитален отпечатък',
      'AI етика',
      'Защита на данни',
      'Киберсигурност основи'
    ]
  },
  {
    id: 7,
    title: 'AI for Teens (15–18 г.)',
    slug: 'ai-for-teens',
    description: 'Разбиране на изкуствения интелект, неговите приложения и възможности.',
    duration: '10 седмици / 10 занятия',
    price: 480,
    formatted_price: '480 лв.',
    formatted_price_eur: '246 €',
    features: [
      'Как работи AI',
      'ChatGPT и текстови модели',
      'Машинно обучение',
      'Визуални модели',
      'Практически AI проекти'
    ]
  },
  {
    id: 8,
    title: 'Career & Confidence Lab (16–18 г.)',
    slug: 'career-confidence-lab',
    description: 'Подготовка за кариера и развитие на лични умения за успех в професионалния свят.',
    duration: '5 седмици / 5 занятия',
    price: 280,
    formatted_price: '280 лв.',
    formatted_price_eur: '144 €',
    features: [
      'Подготовка за интервю',
      'Soft skills развитие',
      'Комуникация',
      'CV създаване',
      'Интервю симулации',
      'Критическо мислене',
      'Лидерство'
    ]
  }
];

const CourseRegistration: React.FC = () => {
  const navigate = useNavigate();
  const { slug } = useParams<{ slug: string }>();
  
  const [course, setCourse] = useState(allCourses.find(c => c.slug === slug) || null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (slug) {
      const foundCourse = allCourses.find(c => c.slug === slug);
      if (foundCourse) {
        setCourse(foundCourse);
      }
    }
  }, [slug]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);
    
    try {
      const contactData = {
        name: formData.name,
        email: formData.email,
        phone: formData.phone || undefined,
        message: formData.message || undefined,
        course: course?.title || undefined
      };

      await contactsAPI.create(contactData);
      setIsSubmitted(true);
    } catch (err: any) {
      console.error('Registration error:', err);
      setError(err.response?.data?.message || 'Възникна грешка при изпращане на заявката. Моля, опитайте отново.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!course) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center py-20">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Курсът не е намерен</h2>
          <p className="text-gray-600 mb-6">Моля, изберете курс от страницата с курсове.</p>
          <Link to="/courses" className="btn-primary inline-block">
            Виж всички курсове
          </Link>
        </div>
      </div>
    );
  }

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center py-20">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="max-w-2xl mx-auto px-4 text-center"
        >
          <div className="bg-white rounded-2xl p-12 shadow-xl">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: 'spring' }}
              className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6"
            >
              <CheckCircle className="w-12 h-12 text-green-600" />
            </motion.div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Заявката ви е изпратена успешно!
            </h2>
            <p className="text-gray-600 mb-8">
              Благодарим ви за интереса! Ще се свържем с вас скоро, за да потвърдим записването за курса.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => navigate('/courses')}
                className="btn-primary"
              >
                Виж други курсове
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => {
                  setIsSubmitted(false);
                  setFormData({
                    name: '',
                    email: '',
                    phone: '',
                    message: ''
                  });
                }}
                className="px-6 py-3 bg-gray-200 text-gray-700 rounded-lg font-semibold hover:bg-gray-300 transition-colors"
              >
                Изпрати друга заявка
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50 pt-20 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Button */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="mb-6"
        >
          <Link
            to="/courses"
            className="inline-flex items-center text-gray-600 hover:text-primary-600 transition-colors"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Назад към курсовете
          </Link>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Course Info Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-1"
          >
            <div className="bg-white rounded-2xl shadow-xl p-8 sticky top-8">
              <div className="mb-6">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center mb-4">
                  <BookOpen className="w-8 h-8 text-white" />
                </div>
                <h1 className="text-2xl font-bold text-gray-900 mb-3">
                  {course.title}
                </h1>
                <p className="text-gray-600 leading-relaxed">
                  {course.description}
                </p>
              </div>

              <div className="space-y-4 mb-6 pb-6 border-b border-gray-200">
                <div className="flex items-center text-gray-700">
                  <Clock className="w-5 h-5 mr-3 text-primary-600" />
                  <span className="font-medium">{course.duration}</span>
                </div>
                <div className="flex items-center text-gray-700">
                  <Users className="w-5 h-5 mr-3 text-primary-600" />
                  <span className="font-medium">Малки групи</span>
                </div>
                <div className="flex items-center text-gray-700">
                  <Calendar className="w-5 h-5 mr-3 text-primary-600" />
                  <span className="font-medium">Гъвкаво разписание</span>
                </div>
              </div>

              <div className="mb-6">
                <div className="flex items-baseline space-x-2 mb-2">
                  <span className="text-3xl font-bold text-gray-900">
                    {course.formatted_price}
                  </span>
                  <span className="text-lg text-gray-500">
                    {course.formatted_price_eur}
                  </span>
                </div>
                <p className="text-sm text-gray-500">
                  За целия курс
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  Какво ще научите:
                </h3>
                <ul className="space-y-2">
                  {course.features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <Check className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>

          {/* Registration Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:col-span-2"
          >
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-2">
                Запишете се за курса
              </h2>
              <p className="text-gray-600 mb-8">
                Попълнете формата по-долу и ще се свържем с вас за потвърждение.
              </p>

              {error && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg text-red-700"
                >
                  {error}
                </motion.div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Име *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors"
                    placeholder="Вашето име"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Имейл адрес *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors"
                      placeholder="your@email.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                      Телефонен номер
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors"
                      placeholder="+359 888 123 456"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Допълнителна информация
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors resize-none"
                    placeholder="Имате ли въпроси или специални изисквания?"
                  />
                </div>

                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                  <p className="text-sm text-blue-800">
                    <strong>Важно:</strong> След изпращане на заявката, ще се свържем с вас в рамките на 24 часа за потвърждение и детайли относно записването.
                  </p>
                </div>

                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                  whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                  className="w-full py-4 px-6 bg-gradient-to-r from-primary-600 to-secondary-600 text-white font-semibold rounded-lg hover:shadow-lg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
                >
                  {isSubmitting ? (
                    <>
                      <Loader className="w-5 h-5 mr-2 animate-spin" />
                      Изпращане...
                    </>
                  ) : (
                    'Изпрати заявка за записване'
                  )}
                </motion.button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default CourseRegistration;

