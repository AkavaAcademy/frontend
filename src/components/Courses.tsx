import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useSearchParams, useNavigate } from 'react-router-dom';
import { 
  BookOpen,
  BadgeCheck,
  GraduationCap,
  Check,
  Clock,
  ChevronDown,
  ChevronUp,
  Users,
  Briefcase
} from 'lucide-react';

interface CourseSubcategory {
  id: string;
  title: string;
  description: string;
  icon?: React.ElementType;
  courses: Course[];
}

interface CourseCategory {
  id: string;
  title: string;
  description: string;
  fullDescription: string;
  icon: React.ElementType;
  color: string;
  bgColor: string;
  textColor: string;
  borderColor: string;
  courses: Course[];
  subcategories?: CourseSubcategory[];
  comingSoon?: boolean;
  specialties?: string[];
}

interface Course {
  id: number;
  title: string;
  description: string;
  duration: string;
  price?: number;
  difficulty?: string;
  features: string[];
  formatted_price?: string;
  formatted_price_eur?: string;
  slug?: string;
}

// Function to generate URL-friendly slug from course title
const generateSlug = (title: string): string => {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9а-я\s-]/g, '') // Remove special characters except spaces and hyphens
    .replace(/\s+/g, '-') // Replace spaces with hyphens
    .replace(/-+/g, '-') // Replace multiple hyphens with single hyphen
    .replace(/^-|-$/g, ''); // Remove leading/trailing hyphens
};

const Courses: React.FC = () => {
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  const [selectedCategory, setSelectedCategory] = useState<string | null>(
    searchParams.get('category') || null
  );
  const [expandedCategories, setExpandedCategories] = useState<Set<string>>(
    new Set(searchParams.get('category') ? [searchParams.get('category')!] : [])
  );
  const [selectedSubcategory, setSelectedSubcategory] = useState<string>('students');

  const scrollToCategory = (categoryId: string, delay: number = 300) => {
    setTimeout(() => {
      const element = document.getElementById(`category-${categoryId}`);
      if (element) {
        const headerOffset = 100; // Offset for fixed header if any
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    }, delay);
  };

  useEffect(() => {
    const category = searchParams.get('category');
    if (category) {
      setSelectedCategory(category);
      setExpandedCategories(new Set([category]));
      // Set default subcategory if category has subcategories
      const categoryData = courseCategories.find(c => c.id === category);
      if (categoryData?.subcategories && categoryData.subcategories.length > 0) {
        setSelectedSubcategory(categoryData.subcategories[0].id);
      }
      // Scroll to category after state update and DOM render
      scrollToCategory(category, 400);
    }
  }, [searchParams]);

  // Handle initial page load with category parameter
  useEffect(() => {
    const category = searchParams.get('category');
    if (category) {
      // Wait for component to fully mount, render, and ScrollToTop to finish
      scrollToCategory(category, 700);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []); // Run only on mount

  const courseCategories: CourseCategory[] = [
    {
      id: 'short',
      title: 'Краткосрочни обучения',
      description: 'Програми за ученици, студенти и възрастни, които искат бързо и практично да развият дигитални или технологични умения.',
      fullDescription: 'Програмите са предназначени за ученици, студенти и възрастни, които искат бързо и практично да развият дигитални или технологични умения. Подходящи са за хора без предишен опит или с желание да се преквалифицират.',
      icon: BookOpen,
      color: 'from-blue-500 to-cyan-500',
      bgColor: 'bg-blue-50',
      textColor: 'text-blue-800',
      borderColor: 'border-blue-200',
      subcategories: [
        {
          id: 'students',
          title: 'За ученици до 18 години',
          description: 'Специализирани курсове, адаптирани към възрастта и интересите на младите ученици. Идеални за развитие на дигитални умения, подготовка за бъдеща кариера и възможности за стажове в IT компании.',
          icon: Users,
          courses: [
            {
              id: 1,
              title: 'Tech Explorers: LEGO Robotics & Coding (6–10 г.)',
              slug: 'tech-explorers-lego-robotics-coding',
              description: 'Въвеждане в света на роботиката и програмирането чрез LEGO, развиване на логическо мислене и STEM умения.',
              duration: '8 седмици / 8 занятия',
              price: 380,
              difficulty: 'beginner',
              features: [
                'Основи на роботиката',
                'Сензори и двигатели',
                'Блоково програмиране',
                'STEM игри',
                'Сертификат за завършване'
              ],
              formatted_price: '380 лв.',
              formatted_price_eur: '195 €'
            },
            {
              id: 2,
              title: 'Scratch Creators (10–12 г.)',
              slug: 'scratch-creators',
              description: 'Създаване на анимации, игри и интерактивни истории чрез визуално програмиране.',
              duration: '8 седмици / 8 занятия',
              price: 320,
              difficulty: 'beginner',
              features: [
                'Създаване на анимации',
                'Разработване на игри',
                'Интерактивни истории',
                'Основи на логическо мислене',
                'Творчески проекти'
              ],
              formatted_price: '320 лв.',
              formatted_price_eur: '164 €'
            },
            {
              id: 3,
              title: 'Python Start Lab (12–14 г.)',
              slug: 'python-start-lab',
              description: 'Първи стъпки в програмирането с Python чрез забавни проекти и практически приложения.',
              duration: '8 седмици / 8 занятия',
              price: 380,
              difficulty: 'beginner',
              features: [
                'Програмиране на мини игри',
                'Създаване на чатботове',
                'Базови алгоритми',
                'Python синтаксис',
                'Практически проекти'
              ],
              formatted_price: '380 лв.',
              formatted_price_eur: '195 €'
            },
            {
              id: 4,
              title: 'Digital Design Studio (15–18 г.)',
              slug: 'digital-design-studio',
              description: 'Освояване на дигитален дизайн с модерни инструменти за създаване на визуални решения.',
              duration: '8 седмици / 8 занятия',
              price: 340,
              difficulty: 'advanced',
              features: [
                'Canva, Adobe Express, Figma',
                'Графика и композиция',
                'Лого дизайн',
                'Визуален сторителинг',
                'Портфолио проекти'
              ],
              formatted_price: '340 лв.',
              formatted_price_eur: '174 €'
            },
            {
              id: 5,
              title: 'UX Discovery (16–18 г.)',
              slug: 'ux-discovery',
              description: 'Разглеждане на основите на потребителското изживяване и дизайн на интерфейси.',
              duration: '8 седмици / 8 занятия',
              price: 360,
              difficulty: 'advanced',
              features: [
                'Основи на UX/UI',
                'Wireframes',
                'Потребителско изживяване',
                'Прототипиране',
                'Тестване на дизайн'
              ],
              formatted_price: '360 лв.',
              formatted_price_eur: '185 €'
            },
            {
              id: 6,
              title: 'CyberSmart Teens (15–18 г.)',
              slug: 'cybersmart-teens',
              description: 'Обучение за безопасност в дигиталния свят и защита на лични данни.',
              duration: '8 седмици / 8 занятия',
              price: 340,
              difficulty: 'advanced',
              features: [
                'Онлайн безопасност',
                'Дигитален отпечатък',
                'AI етика',
                'Защита на данни',
                'Киберсигурност основи'
              ],
              formatted_price: '340 лв.',
              formatted_price_eur: '174 €'
            },
            {
              id: 7,
              title: 'AI for Teens (15–18 г.)',
              slug: 'ai-for-teens',
              description: 'Разбиране на изкуствения интелект, неговите приложения и възможности.',
              duration: '10 седмици / 10 занятия',
              price: 480,
              difficulty: 'advanced',
              features: [
                'Как работи AI',
                'ChatGPT и текстови модели',
                'Машинно обучение',
                'Визуални модели',
                'Практически AI проекти'
              ],
              formatted_price: '480 лв.',
              formatted_price_eur: '246 €'
            },
            {
              id: 8,
              title: 'Career & Confidence Lab (16–18 г.)',
              slug: 'career-confidence-lab',
              description: 'Подготовка за кариера и развитие на лични умения за успех в професионалния свят.',
              duration: '5 седмици / 5 занятия',
              price: 280,
              difficulty: 'advanced',
              features: [
                'Подготовка за интервю',
                'Soft skills развитие',
                'Комуникация',
                'CV създаване',
                'Интервю симулации',
                'Критическо мислене',
                'Лидерство'
              ],
              formatted_price: '280 лв.',
              formatted_price_eur: '144 €'
            }
          ]
        },
        {
          id: 'adults',
          title: 'За възрастни - бърза преквалификация',
          description: 'Интензивни курсове за бързо придобиване на практически умения и преквалификация в технологични и дигитални области. Подходящи за хора, които искат да променят кариерата си или да развият нови професионални компетенции.',
          icon: Briefcase,
          courses: [
            {
              id: 9,
              title: 'QA и автоматизирано тестване',
              slug: 'qa-automated-testing',
              description: 'Комплексен курс за основи на QA, автоматизирани тестове, работа с инструменти като Selenium и CI/CD интеграция. Подготовка за кариера като QA инженер или Test Automation Engineer.',
              duration: '8 седмици',
              price: 700,
              difficulty: 'beginner',
              features: [
                'Основи на QA',
                'Автоматизирани тестове',
                'Работа с Selenium',
                'CI/CD интеграция',
                'Практически проекти',
                'Подготовка за кариера като QA инженер'
              ],
              formatted_price: '700 лв.',
              formatted_price_eur: '359 €'
            },
            {
              id: 10,
              title: 'Project Management в ИТ',
              slug: 'project-management-it',
              description: 'Обучение по Agile, Scrum, Kanban, управление на екипи, работа с инструменти (JIRA, Trello), бюджетиране и комуникация. Подготовка за роли като IT Project Manager или Scrum Master.',
              duration: '6 седмици',
              price: 650,
              difficulty: 'beginner',
              features: [
                'Agile методологии',
                'Scrum и Kanban',
                'Управление на екипи',
                'Инструменти (JIRA, Trello)',
                'Бюджетиране',
                'Комуникация и лидерство',
                'Подготовка за IT Project Manager'
              ],
              formatted_price: '650 лв.',
              formatted_price_eur: '333 €'
            },
            {
              id: 11,
              title: 'Софтуерно инженерство – Full Stack старт',
              slug: 'full-stack-start',
              description: 'Интензивен курс за пълноценна Full Stack разработка: HTML/CSS, JavaScript, backend (Node.js/Java/Python), REST API, работа с база данни и deployment. Подготовка за кариера като Junior Full-Stack Developer.',
              duration: '12 седмици',
              price: 1300,
              difficulty: 'beginner',
              features: [
                'HTML/CSS и JavaScript',
                'Backend разработка (Node.js/Java/Python)',
                'REST API',
                'Работа с база данни',
                'Deployment и DevOps основи',
                'Портфолио проекти',
                'Подготовка за Junior Full-Stack Developer'
              ],
              formatted_price: '1300 лв.',
              formatted_price_eur: '667 €'
            },
            {
              id: 12,
              title: 'AI-Driven UI Design: Създаване на потребителски интерфейс с помощта на изкуствен интелект',
              slug: 'ai-driven-ui-design',
              description: 'Курс за създаване на потребителски интерфейси с помощта на изкуствен интелект. Подходящ за начинаещи и напреднали в UX/UI, графичен дизайн или фронтенд разработка, които искат да използват AI за ускорено прототипиране и дизайн.',
              duration: '8 седмици / 8 занятия',
              price: 750,
              difficulty: 'advanced',
              features: [
                'AI-задвижвано прототипиране',
                'Ускорен дизайн процес',
                'UX/UI с AI инструменти',
                'Визуален дизайн и композиция',
                'Практически AI дизайн проекти',
                'Портфолио от AI-генерирани дизайни'
              ],
              formatted_price: '750 лв.',
              formatted_price_eur: '385 €'
            },
            {
              id: 13,
              title: 'Digital Essentials – Дигитални компетентности за съвременния офис',
              slug: 'digital-essentials',
              description: 'Практически курс за развитие на дигитални компетентности за съвременна офис среда. Подходящ за възрастни и служители, които искат да развият своите практически дигитални умения.',
              duration: '6 седмици / 6 занятия',
              price: 420,
              difficulty: 'beginner',
              features: [
                'Microsoft Office (Word, Excel, PowerPoint, Outlook)',
                'Организация и управление на файлове (OneDrive, Google Drive)',
                'Онлайн комуникация (Teams, Zoom, Slack)',
                'Основи на киберсигурността',
                'Дигитална етика',
                'Практически офис умения'
              ],
              formatted_price: '420 лв.',
              formatted_price_eur: '215 €'
            },
            {
              id: 14,
              title: 'Vibe Coding – Програмиране чрез креативност и интуиция',
              slug: 'vibe-coding',
              description: 'Уникален подход към програмирането чрез креативност и интуиция. Подходящ за хора без опит в програмирането, които искат да навлязат в ИТ сферата по креативен и нестандартен начин.',
              duration: '8 седмици / 8 занятия',
              price: 550,
              difficulty: 'beginner',
              features: [
                'Основи на програмирането чрез визуално и звуково възприятие',
                'Креативно мислене и структуриране на код',
                'Програмиране на интерактивни приложения',
                'Визуализации и творчески проекти',
                'Работа с Processing и p5.js',
                'AI code асистенти',
                'Креативни програмни проекти'
              ],
              formatted_price: '550 лв.',
              formatted_price_eur: '282 €'
            },
            {
              id: 15,
              title: 'AI Design Lab – Дизайн с изкуствен интелект',
              slug: 'ai-design-lab',
              description: 'Курс за създаване на впечатляващи визуални проекти с помощта на AI. Подходящ за дизайнери, маркетолози, предприемачи и творци, които искат да автоматизират творчески процеси и да създават бранд идентичност чрез AI.',
              duration: '6 седмици / 6 занятия',
              price: 750,
              difficulty: 'beginner',
              features: [
                'Въведение в генеративния дизайн',
                'Работа с Adobe Firefly, Midjourney, Runway ML',
                'Canva Magic Studio',
                'Автоматизация на творчески процеси',
                'Бранд идентичност и визуално разказване',
                'AI-генерирано визуално съдържание',
                'Портфолио от AI дизайн проекти'
              ],
              formatted_price: '750 лв.',
              formatted_price_eur: '385 €'
            }
          ]
        }
      ],
      courses: [] // Keep empty as courses are now in subcategories
    },
    {
      id: 'licensed',
      title: 'Лицензирани професионални обучения',
      description: 'Курсове, които водят до придобиване на професионална квалификация по утвърдени програми, лицензирани от НАПОО.',
      fullDescription: 'Акава Академи в момента е в процес на получаване на лиценз от Националната агенция за професионално образование и обучение (НАПОО) за провеждане на професионални обучения, водещи до издаване на свидетелство или удостоверение за професионална квалификация. След одобрение ще предлагаме сертифицирани програми в различни специалности.',
      icon: BadgeCheck,
      color: 'from-green-500 to-emerald-500',
      bgColor: 'bg-green-50',
      textColor: 'text-green-800',
      borderColor: 'border-green-200',
      comingSoon: true,
      specialties: [
        'Полиграфия',
        'Компютърна графика',
        'Графичен дизайн',
        'Бизнес администрация',
        'Програмно осигуряване',
        'Системно програмиране',
        'Приложно програмиране',
        'Текстообработване',
        'Електронна търговия'
      ],
      courses: []
    },
    {
      id: 'teachers',
      title: 'Квалификация за преподаватели',
      description: 'Програми за педагогически специалисти, които искат да повишат своята квалификация.',
      fullDescription: 'Акава Академи подготвя лицензирани програми за повишаване на квалификацията на педагогически специалисти, които ще бъдат одобрени от Министерството на образованието и науката (МОН). Програмите са в процес на одобрение и скоро ще бъдат достъпни за всички учители, желаещи да надградят своите компетентности.',
      icon: GraduationCap,
      color: 'from-purple-500 to-pink-500',
      bgColor: 'bg-purple-50',
      textColor: 'text-purple-800',
      borderColor: 'border-purple-200',
      comingSoon: true,
      specialties: [
        'Дигитализация на учебния процес',
        'Съвременни методи на преподаване',
        'Използване на AI и интерактивни технологии в класната стая'
      ],
      courses: []
    }
  ];

  const toggleCategory = (categoryId: string) => {
    const newExpanded = new Set(expandedCategories);
    if (newExpanded.has(categoryId)) {
      newExpanded.delete(categoryId);
      if (selectedCategory === categoryId) {
        setSelectedCategory(null);
        setSearchParams({});
      }
    } else {
      newExpanded.add(categoryId);
      setSelectedCategory(categoryId);
      setSearchParams({ category: categoryId });
      // Reset subcategory selection when switching categories
      const category = courseCategories.find(c => c.id === categoryId);
      if (category?.subcategories && category.subcategories.length > 0) {
        setSelectedSubcategory(category.subcategories[0].id);
      }
      // Scroll to category after expanding
      scrollToCategory(categoryId);
    }
    setExpandedCategories(newExpanded);
  };


  return (
    <section id="courses" className="py-20 bg-gray-50 min-h-screen">
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
            Изберете категория, която отговаря на вашите цели и нужди
          </p>
        </motion.div>

        {/* Category Cards */}
        <div className="space-y-8 mb-16">
          {courseCategories.map((category, index) => {
            const IconComponent = category.icon;
            const isExpanded = expandedCategories.has(category.id);
            const isSelected = selectedCategory === category.id;

            return (
              <motion.div
                key={category.id}
                id={`category-${category.id}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`${category.bgColor} ${category.borderColor} border-2 rounded-2xl overflow-hidden transition-all duration-300 ${
                  isSelected ? 'shadow-xl ring-4 ring-opacity-50' : 'shadow-lg hover:shadow-xl'
                }`}
              >
                {/* Category Header */}
                <div
                  className={`p-8 cursor-pointer ${isSelected ? 'bg-gradient-to-r ' + category.color : ''}`}
                  onClick={() => toggleCategory(category.id)}
                >
                  <div className="flex items-start justify-between">
                    <div className="flex items-start space-x-6 flex-1">
                      <div className={`w-16 h-16 bg-gradient-to-r ${category.color} rounded-xl flex items-center justify-center flex-shrink-0 ${
                        isSelected ? 'bg-white/20' : ''
                      }`}>
                        <IconComponent className={`w-8 h-8 ${isSelected ? 'text-white' : 'text-white'}`} />
                  </div>
                      <div className="flex-1">
                        <h3 className={`text-2xl font-bold mb-3 ${isSelected ? 'text-white' : category.textColor}`}>
                          {category.title}
                  </h3>
                        <p className={`text-base leading-relaxed ${isSelected ? 'text-white/90' : 'text-gray-700'}`}>
                          {isExpanded ? category.fullDescription : category.description}
                        </p>
                      </div>
                    </div>
                    <div className="ml-4 flex-shrink-0">
                      {isExpanded ? (
                        <ChevronUp className={`w-6 h-6 ${isSelected ? 'text-white' : category.textColor}`} />
                      ) : (
                        <ChevronDown className={`w-6 h-6 ${isSelected ? 'text-white' : category.textColor}`} />
                      )}
                    </div>
                  </div>
                </div>

                {/* Courses List or Coming Soon */}
                {isExpanded && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="bg-white border-t-2 border-gray-200"
                  >
                    {category.comingSoon ? (
                      <div className="p-8 lg:p-12">
                        {/* Coming Soon Badge */}
                        <div className="text-center mb-8">
                          <motion.div
                            initial={{ scale: 0.9 }}
                            animate={{ scale: 1 }}
                            transition={{ duration: 0.5 }}
                            className="inline-block"
                          >
                            <span className={`inline-flex items-center px-6 py-3 rounded-full text-lg font-bold ${category.bgColor} ${category.textColor} border-2 ${category.borderColor}`}>
                              Очаквайте скоро!
                            </span>
                          </motion.div>
                        </div>

                        {/* Status Information */}
                        <div className="max-w-4xl mx-auto mb-10">
                          <div className={`${category.bgColor} ${category.borderColor} border-2 rounded-2xl p-6 lg:p-8 mb-6`}>
                            <h4 className="text-xl font-bold text-gray-900 mb-4">
                              {category.id === 'licensed' ? 'Статус на лицензиране' : 'Статус на одобрение'}
                            </h4>
                            <p className="text-gray-700 leading-relaxed whitespace-pre-line">
                              {category.fullDescription}
                            </p>
                          </div>

                          {/* Specialties List */}
                          <div>
                            <h4 className="text-xl font-bold text-gray-900 mb-6 text-center">
                              {category.id === 'licensed' ? 'Специалности, които ще предлагаме' : 'Теми, които ще обхващат курсовете'}
                            </h4>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                              {category.specialties?.map((specialty, index) => (
                                <motion.div
                                  key={specialty}
                                  initial={{ opacity: 0, y: 10 }}
                                  animate={{ opacity: 1, y: 0 }}
                                  transition={{ duration: 0.3, delay: index * 0.05 }}
                                  className={`${category.bgColor} ${category.borderColor} border-2 rounded-xl p-4 flex items-center`}
                                >
                                  <Check className={`w-5 h-5 ${category.textColor} mr-3 flex-shrink-0`} />
                                  <span className={`font-semibold ${category.textColor}`}>
                                    {specialty}
                                  </span>
                                </motion.div>
                              ))}
                            </div>
                          </div>
                        </div>

                        {/* Call to Action */}
                        <div className="text-center mt-8">
                          <p className="text-gray-600 mb-4">
                            Искате ли да бъдете уведомени, когато програмите станат достъпни?
                          </p>
                          <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={() => navigate('/contact')}
                            className={`px-6 py-3 rounded-lg font-semibold text-white bg-gradient-to-r ${category.color} hover:shadow-lg transition-all duration-300`}
                          >
                            Свържете се с нас
                          </motion.button>
                        </div>
                      </div>
                    ) : category.subcategories ? (
                      <div className="p-8">
                        {/* Subcategory Tabs */}
                        <div className="mb-8 border-b border-gray-200">
                          <div className="flex flex-wrap gap-4">
                            {category.subcategories.map((subcat) => {
                              const SubcatIcon = subcat.icon;
                              const isActive = selectedSubcategory === subcat.id;
                              return (
                                <button
                                  key={subcat.id}
                                  onClick={() => setSelectedSubcategory(subcat.id)}
                                  className={`flex items-center gap-3 px-6 py-4 rounded-t-lg font-semibold transition-all duration-300 ${
                                    isActive
                                      ? `bg-gradient-to-r ${category.color} text-white shadow-lg`
                                      : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
                                  }`}
                                >
                                  {SubcatIcon && <SubcatIcon className="w-5 h-5" />}
                                  <span>{subcat.title}</span>
                                  <span className={`ml-2 px-2 py-1 rounded-full text-xs ${
                                    isActive ? 'bg-white/20 text-white' : 'bg-gray-200 text-gray-700'
                                  }`}>
                                    {subcat.courses.length}
                                  </span>
                                </button>
                              );
                            })}
                          </div>
                        </div>

                        {/* Subcategory Description */}
                        {category.subcategories.find(sc => sc.id === selectedSubcategory) && (
                          <div className="mb-8">
                            <p className="text-gray-700 leading-relaxed text-lg">
                              {category.subcategories.find(sc => sc.id === selectedSubcategory)?.description}
                            </p>
                          </div>
                        )}

                        {/* Courses for Selected Subcategory */}
                        {(() => {
                          const activeSubcat = category.subcategories?.find(sc => sc.id === selectedSubcategory);
                          const coursesToShow = activeSubcat?.courses || [];
                          
                          if (coursesToShow.length === 0) {
                            return (
                              <div className="text-center py-12">
                                <div className={`inline-block p-4 rounded-full ${category.bgColor} mb-4`}>
                                  {activeSubcat?.icon && (() => {
                                    const Icon = activeSubcat.icon;
                                    return <Icon className={`w-12 h-12 ${category.textColor}`} />;
                                  })()}
                                </div>
                                <h4 className="text-xl font-semibold text-gray-900 mb-2">
                                  Курсовете скоро ще бъдат достъпни
                                </h4>
                                <p className="text-gray-600 mb-6">
                                  В момента работим по подготовката на курсовете за тази категория.
                                </p>
                                <motion.button
                                  whileHover={{ scale: 1.05 }}
                                  whileTap={{ scale: 0.95 }}
                                  onClick={() => navigate('/contact')}
                                  className={`px-6 py-3 rounded-lg font-semibold text-white bg-gradient-to-r ${category.color} hover:shadow-lg transition-all duration-300`}
                                >
                                  Свържете се с нас за информация
                                </motion.button>
                              </div>
                            );
                          }

                          return (
                            <>
                              <h4 className="text-xl font-semibold text-gray-900 mb-6">
                                Достъпни курсове ({coursesToShow.length})
                              </h4>
                              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                {coursesToShow.map((course, courseIndex) => (
                                  <motion.div
                                    key={course.id}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.4, delay: courseIndex * 0.1 }}
                                    whileHover={{ y: -5 }}
                                    className="bg-gray-50 rounded-xl p-6 border border-gray-200 hover:border-primary-300 hover:shadow-lg transition-all duration-300"
                                  >
                                    <div className="flex items-center justify-between mb-3">
                                      <span className={`text-xs font-semibold rounded-full px-3 py-1 ${category.bgColor} ${category.textColor}`}>
                                        {course.difficulty === 'beginner' ? 'Начинаещи' : course.difficulty === 'advanced' ? 'Напреднали' : 'Всички'}
                                      </span>
                                      {course.formatted_price && (
                                        <div className="flex flex-col items-end">
                                          <span className="text-lg font-bold text-gray-900">
                                            {course.formatted_price}
                                          </span>
                                          {course.formatted_price_eur && (
                                            <span className="text-sm text-gray-500">
                                              {course.formatted_price_eur}
                                            </span>
                                          )}
                                        </div>
                                      )}
                                    </div>

                                    <h5 className="text-lg font-semibold text-gray-900 mb-2">
                                      {course.title}
                                    </h5>
                                  
                                    <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                                      {course.description}
                                    </p>

                                    <div className="flex items-center text-sm text-gray-500 mb-4">
                                      <Clock className="w-4 h-4 mr-1" />
                                      {course.duration}
                                    </div>

                                    <ul className="space-y-2 mb-4">
                                      {course.features.slice(0, 3).map((feature, idx) => (
                                        <li key={idx} className="flex items-center text-sm text-gray-600">
                                          <Check className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                                          <span className="line-clamp-1">{feature}</span>
                                        </li>
                                      ))}
                                      {course.features.length > 3 && (
                                        <li className="text-xs text-gray-500">
                                          +{course.features.length - 3} още
                                        </li>
                                      )}
                                    </ul>

                                    <motion.button
                                      whileHover={{ scale: 1.02 }}
                                      whileTap={{ scale: 0.98 }}
                                      onClick={() => navigate(`/course/${course.slug || generateSlug(course.title)}`)}
                                      className={`w-full py-2 px-4 rounded-lg font-medium text-white bg-gradient-to-r ${category.color} hover:shadow-md transition-all duration-300`}
                                    >
                                      Запиши се
                                    </motion.button>
                                  </motion.div>
                                ))}
                              </div>
                            </>
                          );
                        })()}
                      </div>
                    ) : (
                      <div className="p-8">
                        <h4 className="text-xl font-semibold text-gray-900 mb-6">
                          Курсове в тази категория ({category.courses.length})
                        </h4>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                          {category.courses.map((course, courseIndex) => (
                            <motion.div
                              key={course.id}
                              initial={{ opacity: 0, y: 20 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ duration: 0.4, delay: courseIndex * 0.1 }}
                              whileHover={{ y: -5 }}
                              className="bg-gray-50 rounded-xl p-6 border border-gray-200 hover:border-primary-300 hover:shadow-lg transition-all duration-300"
                            >
                              <div className="flex items-center justify-between mb-3">
                                <span className={`text-xs font-semibold rounded-full px-3 py-1 ${category.bgColor} ${category.textColor}`}>
                                  {course.difficulty === 'beginner' ? 'Начинаещи' : course.difficulty === 'advanced' ? 'Напреднали' : 'Всички'}
                                </span>
                                {course.formatted_price && (
                                  <div className="flex flex-col items-end">
                                    <span className="text-lg font-bold text-gray-900">
                                      {course.formatted_price}
                                    </span>
                                    {course.formatted_price_eur && (
                                      <span className="text-sm text-gray-500">
                                        {course.formatted_price_eur}
                                      </span>
                                    )}
                                  </div>
                                )}
                              </div>

                              <h5 className="text-lg font-semibold text-gray-900 mb-2">
                                {course.title}
                              </h5>
                            
                              <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                                {course.description}
                              </p>

                              <div className="flex items-center text-sm text-gray-500 mb-4">
                                <Clock className="w-4 h-4 mr-1" />
                                {course.duration}
                              </div>

                              <ul className="space-y-2 mb-4">
                                {course.features.slice(0, 3).map((feature, idx) => (
                                  <li key={idx} className="flex items-center text-sm text-gray-600">
                                    <Check className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                                    <span className="line-clamp-1">{feature}</span>
                                  </li>
                                ))}
                                {course.features.length > 3 && (
                                  <li className="text-xs text-gray-500">
                                    +{course.features.length - 3} още
                                  </li>
                                )}
                              </ul>

                              <motion.button
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                onClick={() => navigate(`/course/${course.slug || generateSlug(course.title)}`)}
                                className={`w-full py-2 px-4 rounded-lg font-medium text-white bg-gradient-to-r ${category.color} hover:shadow-md transition-all duration-300`}
                              >
                                Запиши се
                              </motion.button>
                            </motion.div>
                          ))}
                        </div>
                      </div>
                    )}
                  </motion.div>
                )}
              </motion.div>
            );
          })}
          </div>

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
