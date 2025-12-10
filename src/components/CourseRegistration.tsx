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
  Calendar
} from 'lucide-react';
import emailjs from '@emailjs/browser';

// Course data structure - in a real app, this would come from an API
const allCourses = [
  {
    id: 1,
    title: 'Tech Explorers: LEGO Robotics & Coding (6–10 г.)',
    slug: 'tech-explorers-lego-robotics-coding',
    description: 'Въвеждане в света на роботиката и програмирането чрез LEGO, развиване на логическо мислене и STEM умения.',
    duration: '8 седмици / 8 занятия',
    price: 360,
    formatted_price: '360 лв.',
    formatted_price_eur: '185 €',
    features: [
      'Основи на роботиката',
      'Сензори и двигатели',
      'Блоково програмиране',
      'STEM игри',
      'Сертификат за завършване'
    ],
    startDate: '10 януари 2026',
    status: 'Записвания отворени',
    format: 'Присъствен'
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
    ],
    startDate: '10 януари 2026',
    status: 'Записвания отворени',
    format: 'Присъствен'
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
    ],
    startDate: '12 януари 2026',
    status: 'Записвания отворени',
    format: 'Присъствен'
  },
  {
    id: 4,
    title: 'Digital Design Studio (15–18 г.)',
    slug: 'digital-design-studio',
    description: 'Дигитален дизайн с модерни инструменти за създаване на визуални решения.',
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
    ],
    startDate: '22 март 2026',
    status: 'Предстоящ',
    format: 'Присъствен'
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
    ],
    startDate: '15 март 2026',
    status: 'Предстоящ',
    format: 'Присъствен'
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
    ],
    startDate: '16 февруари 2026',
    status: 'Записвания отворени',
    format: 'Присъствен'
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
    ],
    startDate: '12 април 2026',
    status: 'Предстоящ',
    format: 'Присъствен'
  },
  {
    id: 9,
    title: 'QA – Автоматизирано тестване с помощта на AI',
    slug: 'qa-automated-testing',
    description: 'Интензивен курс по автоматизирано тестване за начинаещи, които вече имат основи по Manual QA. Обхваща автоматизация със съвременни инструменти, програмиране, CI/CD и интеграция на AI технологии в тестовия процес.',
    duration: '8 седмици',
    price: 700,
    formatted_price: '700 лв.',
    formatted_price_eur: '359 €',
    features: [
      'Въведение в тестовата автоматизация',
      'Основи на програмирането (JavaScript или Python)',
      'ООП концепции за QA инженери',
      'UI тестова автоматизация (Playwright / Selenium)',
      'Page Object Model и структура на automation проект',
      'API тестова автоматизация',
      'AI инструменти за автоматизирано тестване (Testim, Mabl, Copilot)',
      'CI/CD интеграции и автоматично изпълнение на тестове',
      'Финален automation проект'
    ],
    startDate: '24 февруари 2026',
    status: 'Записвания отворени',
    format: 'Онлайн'
  },
  {
    id: 16,
    title: 'QA - Ръчно тестване',
    slug: 'qa-manual-testing',
    description: 'Комплексен практически курс по ръчно тестване на софтуер. Подходящ за напълно начинаещи и желаещи да започнат кариера като Manual QA Engineer.',
    duration: '6 седмици',
    price: 550,
    formatted_price: '550 лв.',
    formatted_price_eur: '282 €',
    features: [
      'Основи на софтуерното тестване',
      'Типове тестове и техники за тест-дизайн',
      'Тестови сценарии и тестови случаи',
      'Изготвяне на бъг репорт',
      'Работа с инструменти като Jira',
      'QA процеси и документация',
      'Практически мини проект'
    ],
    startDate: '21 април 2026',
    status: 'Записвания отворени',
    format: 'Онлайн'
  },
  {
    id: 10,
    title: 'Project Management в ИТ',
    slug: 'project-management-it',
    description: 'Обучение по Agile, Scrum, Kanban, управление на екипи, работа с инструменти (JIRA, Trello), бюджетиране и комуникация. Подготовка за роли като IT Project Manager или Scrum Master.',
    duration: '6 седмици',
    price: 650,
    formatted_price: '650 лв.',
    formatted_price_eur: '333 €',
    features: [
      'Agile методологии',
      'Scrum и Kanban',
      'Управление на екипи',
      'Инструменти (JIRA, Trello)',
      'Бюджетиране',
      'Комуникация и лидерство',
      'Подготовка за IT Project Manager'
    ],
    startDate: '21 януари 2026',
    status: 'Записвания отворени',
    format: 'Онлайн'
  },
  {
    id: 11,
    title: 'Софтуерно инженерство – Full Stack старт',
    slug: 'full-stack-start',
    description: 'Интензивен курс за пълноценна Full Stack разработка: HTML/CSS, JavaScript, backend (Node.js/Java/Python), REST API, работа с база данни и deployment. Подготовка за кариера като Junior Full-Stack Developer.',
    duration: '12 седмици',
    price: 1300,
    formatted_price: '1300 лв.',
    formatted_price_eur: '667 €',
    features: [
      'HTML/CSS и JavaScript',
      'Backend разработка (Node.js/Java/Python)',
      'REST API',
      'Работа с база данни',
      'Deployment и DevOps основи',
      'Портфолио проекти',
      'Подготовка за Junior Full-Stack Developer'
    ],
    startDate: '20 януари 2026',
    status: 'Предстоящ',
    format: 'Онлайн'
  },
  {
    id: 12,
    title: 'AI-Driven UI Design: Създаване на потребителски интерфейс с помощта на изкуствен интелект',
    slug: 'ai-driven-ui-design',
    description: 'Курс за създаване на потребителски интерфейси с помощта на изкуствен интелект. Подходящ за начинаещи и напреднали в UX/UI, графичен дизайн или фронтенд разработка, които искат да използват AI за ускорено прототипиране и дизайн.',
    duration: '8 седмици / 8 занятия',
    price: 750,
    formatted_price: '750 лв.',
    formatted_price_eur: '385 €',
    features: [
      'AI-задвижвано прототипиране',
      'Ускорен дизайн процес',
      'UX/UI с AI инструменти',
      'Визуален дизайн и композиция',
      'Практически AI дизайн проекти',
      'Портфолио от AI-генерирани дизайни'
    ],
    startDate: '15 септември 2026',
    status: 'Предстоящ',
    format: 'Онлайн'
  },
  {
    id: 13,
    title: 'Digital Essentials – Дигитални компетентности за съвременния офис',
    slug: 'digital-essentials',
    description: 'Практически курс за развитие на дигитални компетентности за съвременна офис среда. Подходящ за възрастни и служители, които искат да развият своите практически дигитални умения.',
    duration: '6 седмици / 6 занятия',
    price: 420,
    formatted_price: '420 лв.',
    formatted_price_eur: '215 €',
    features: [
      'Microsoft Office (Word, Excel, PowerPoint, Outlook)',
      'Организация и управление на файлове (OneDrive, Google Drive)',
      'Онлайн комуникация (Teams, Zoom, Slack)',
      'Основи на киберсигурността',
      'Дигитална етика',
      'Практически офис умения'
    ],
    startDate: '25 февруари 2026',
    status: 'Записвания отворени',
    format: 'Онлайн'
  },
  {
    id: 14,
    title: 'Vibe Coding – Програмиране чрез креативност и интуиция',
    slug: 'vibe-coding',
    description: 'Уникален подход към програмирането чрез креативност и интуиция. Подходящ за хора без опит в програмирането, които искат да навлязат в ИТ сферата по креативен и нестандартен начин.',
    duration: '8 седмици / 8 занятия',
    price: 550,
    formatted_price: '550 лв.',
    formatted_price_eur: '282 €',
    features: [
      'Основи на програмирането чрез визуално и звуково възприятие',
      'Креативно мислене и структуриране на код',
      'Програмиране на интерактивни приложения',
      'Визуализации и творчески проекти',
      'Работа с Processing и p5.js',
      'AI code асистенти',
      'Креативни програмни проекти'
    ],
    startDate: '27 април 2026',
    status: 'Предстоящ',
    format: 'Онлайн'
  },
  {
    id: 15,
    title: 'AI Design Lab – Дизайн с изкуствен интелект',
    slug: 'ai-design-lab',
    description: 'Курс за създаване на впечатляващи визуални проекти с помощта на AI. Подходящ за дизайнери, маркетолози, предприемачи и творци, които искат да автоматизират творчески процеси и да създават бранд идентичност чрез AI.',
    duration: '6 седмици / 6 занятия',
    price: 750,
    formatted_price: '750 лв.',
    formatted_price_eur: '385 €',
    features: [
      'Въведение в генеративния дизайн',
      'Работа с Adobe Firefly, Midjourney, Runway ML',
      'Canva Magic Studio',
      'Автоматизация на творчески процеси',
      'Бранд идентичност и визуално разказване',
      'AI-генерирано визуално съдържание',
      'Портфолио от AI дизайн проекти'
    ],
    startDate: '16 юни 2026',
    status: 'Предстоящ',
    format: 'Онлайн'
  }
];

const CourseRegistration: React.FC = () => {
  const navigate = useNavigate();
  const { slug } = useParams<{ slug: string }>();
  
  // Get stored category and subcategory for back navigation
  const storedCategory = sessionStorage.getItem('courseCategory');
  const storedSubcategory = sessionStorage.getItem('courseSubcategory');
  
  // Build back URL with category and subcategory if available
  const getBackUrl = () => {
    if (storedCategory) {
      let url = `/courses?category=${storedCategory}`;
      if (storedSubcategory) {
        url += `&subcategory=${storedSubcategory}`;
      }
      return url;
    }
    return '/courses';
  };
  
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
  const [emailError, setEmailError] = useState<string | null>(null);
  const [phoneError, setPhoneError] = useState<string | null>(null);
  const serviceId = (process.env.REACT_APP_EMAILJS_SERVICE_ID || '').trim();
  const templateId = (process.env.REACT_APP_EMAILJS_TEMPLATE_ID || '').trim();
  const publicKey = (process.env.REACT_APP_EMAILJS_PUBLIC_KEY || '').trim();

  // Email validation function
  const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  // Phone validation function (Bulgarian format: 0XXXXXXXX or +359XXXXXXXXX)
  const validatePhone = (phone: string): boolean => {
    if (!phone) return true; // Phone is optional
    // Remove spaces, dashes, and parentheses
    const cleaned = phone.replace(/[\s\-()]/g, '');
    // Check for Bulgarian format: starts with 0 and 9 digits, or +359 and 9 digits
    const phoneRegex = /^(\+359|0)[0-9]{9}$/;
    return phoneRegex.test(cleaned);
  };

  const handleEmailBlur = () => {
    if (formData.email && !validateEmail(formData.email)) {
      setEmailError('Моля, въведете валиден имейл адрес');
    } else {
      setEmailError(null);
    }
  };

  const handlePhoneBlur = () => {
    if (formData.phone && !validatePhone(formData.phone)) {
      setPhoneError('Моля, въведете валиден телефонен номер (напр. 0895123456 или +359895123456)');
    } else {
      setPhoneError(null);
    }
  };

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
    // Clear errors when user starts typing
    if (e.target.name === 'email' && emailError) {
      setEmailError(null);
    }
    if (e.target.name === 'phone' && phoneError) {
      setPhoneError(null);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);
    setEmailError(null);
    setPhoneError(null);
    
    // Validate email before submitting
    if (!formData.email) {
      setEmailError('Имейл адресът е задължителен');
      setIsSubmitting(false);
      return;
    }
    
    if (!validateEmail(formData.email)) {
      setEmailError('Моля, въведете валиден имейл адрес');
      setIsSubmitting(false);
      return;
    }
    
    // Validate phone if provided
    if (!formData.phone) {
      setEmailError('Телефонен номер е задължителен');
      setIsSubmitting(false);
      return;
    }
    
    if (formData.phone && !validatePhone(formData.phone)) {
      setPhoneError('Моля, въведете валиден телефонен номер (напр. 0895123456 или +359895123456)');
      setIsSubmitting(false);
      return;
    }
    
    try {
      if (!serviceId || !templateId || !publicKey) {
        throw new Error('EmailJS не е конфигуриран. Моля, проверете environment variables.');
      }

      const templateParams = {
        to_email: 'info@akavaacademy.com',
        from_name: formData.name,
        from_email: formData.email,
        phone: formData.phone || 'Не е предоставен',
        course: course?.title || 'Не е избран',
        message: formData.message || 'Няма допълнителна информация',
        subject: course?.title 
          ? `Заявка за записване - ${course?.title}` 
          : 'Ново запитване от контактна форма'
      };

      await emailjs.send(serviceId, templateId, templateParams, publicKey);      

      setIsSubmitted(true);
      
      // Reset form after 5 seconds
      setTimeout(() => {
        setIsSubmitted(false);
        setFormData({
          name: '',
          email: '',
          phone: '',
          message: ''
        });
      }, 5000);
    } catch (err: any) {
      if (err.text) {
        setError(`Грешка при изпращане на имейл: ${err.text}`);
      } else if (err.message) {
        setError(`Грешка: ${err.message}`);
      } else {
        setError('Неуспешно изпращане на формата. Моля, опитайте отново.');
      }
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
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50 pt-32 md:pt-40 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Button */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="mb-6"
        >
          <Link
            to={getBackUrl()}
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
                <p className="text-gray-600 leading-relaxed mb-4">
                  {course.description}
                </p>
                
                {/* Start Date and Status */}
                {(course.startDate || course.status) && (
                  <div className="space-y-4 pt-4 border-t border-gray-200">
                    {course.startDate && (
                      <div className="flex items-start">
                        <Calendar className="w-5 h-5 text-primary-600 mr-2 mt-0.5 flex-shrink-0" />
                        <div>
                          <p className="text-sm font-medium text-gray-500 mb-1">Начало</p>
                          <p className="text-base font-semibold text-gray-900">{course.startDate}</p>
                        </div>
                      </div>
                    )}
                    {course.status && (
                      <div className="flex items-start">
                        <CheckCircle className={`w-5 h-5 mr-2 mt-0.5 flex-shrink-0 ${
                          course.status === 'Записвания отворени' 
                            ? 'text-green-600' 
                            : 'text-blue-600'
                        }`} />
                        <div>
                          <p className="text-sm font-medium text-gray-500 mb-1">Статус</p>
                          <p className={`text-base font-semibold ${
                            course.status === 'Записвания отворени' 
                              ? 'text-green-600' 
                              : 'text-blue-600'
                          }`}>
                            {course.status}
                          </p>
                        </div>
                      </div>
                    )}
                  </div>
                )}
              </div>

              <div className="mb-6 pb-6 border-b border-gray-200">
                <div className="flex items-start">
                  <Clock className="w-5 h-5 text-primary-600 mr-2 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-sm font-medium text-gray-500 mb-1">Продължителност</p>
                    <p className="text-base font-semibold text-gray-900">{course.duration}</p>
                  </div>
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
                      onBlur={handleEmailBlur}
                      required
                      className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors ${
                        emailError ? 'border-red-500' : 'border-gray-300'
                      }`}
                      placeholder="your@email.com"
                    />
                    {emailError && (
                      <p className="mt-1 text-sm text-red-600">{emailError}</p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                      Телефонен номер *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleInputChange}
                      onBlur={handlePhoneBlur}
                      className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors ${
                        phoneError ? 'border-red-500' : 'border-gray-300'
                      }`}
                      placeholder="+359 888 123 456"
                    />
                    {phoneError && (
                      <p className="mt-1 text-sm text-red-600">{phoneError}</p>
                    )}
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

