import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useParams, useNavigate } from 'react-router-dom';
import { 
  BookOpen,
  BadgeCheck,
  GraduationCap,
  Check,
  Clock,
  ChevronDown,
  ChevronUp,
  Users,
  Briefcase,
  Calendar,
  Info,
  Monitor
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
  ringColor?: string;
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
  startDate?: string; // Начало
  status?: string; // Статус
  format?: string; // Формат
}

// Function to generate URL-friendly slug from course title
const Courses: React.FC = () => {
  const navigate = useNavigate();
  const { category: categoryParam, subcategory: subcategoryParam } = useParams<{
    category?: string;
    subcategory?: string;
  }>();
  
  const [selectedCategory, setSelectedCategory] = useState<string | null>(
    categoryParam || null
  );
  const [expandedCategories, setExpandedCategories] = useState<Set<string>>(
    new Set(categoryParam ? [categoryParam] : [])
  );
  const [selectedSubcategory, setSelectedSubcategory] = useState<string>(
    subcategoryParam || 'students'
  );

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
              formatted_price_eur: '164 €',
              startDate: '10 януари 2026',
              status: 'Записвания отворени',
              format: 'Присъствен'
            },
            {
              id: 1,
              title: 'Tech Explorers: LEGO Robotics & Coding (6–10 г.)',
              slug: 'tech-explorers-lego-robotics-coding',
              description: 'Въвеждане в света на роботиката и програмирането чрез LEGO, развиване на логическо мислене и STEM умения.',
              duration: '8 седмици / 8 занятия',
              price: 360,
              difficulty: 'beginner',
              features: [
                'Основи на роботиката',
                'Сензори и двигатели',
                'Блоково програмиране',
                'STEM игри',
                'Сертификат за завършване'
              ],
              formatted_price: '360 лв.',
              formatted_price_eur: '185 €',
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
              difficulty: 'beginner',
              features: [
                'Програмиране на мини игри',
                'Създаване на чатботове',
                'Базови алгоритми',
                'Python синтаксис',
                'Практически проекти'
              ],
              formatted_price: '380 лв.',
              formatted_price_eur: '195 €',
              startDate: '12 януари 2026',
              status: 'Записвания отворени',
              format: 'Присъствен'
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
              formatted_price_eur: '246 €',
              startDate: '16 февруари 2026',
              status: 'Записвания отворени',
              format: 'Присъствен'
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
              formatted_price_eur: '185 €',
              startDate: '15 март 2026',
              status: 'Предстоящ',
              format: 'Присъствен'
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
              formatted_price_eur: '144 €',
              startDate: '12 април 2026',
              status: 'Предстоящ',
              format: 'Присъствен'
            },
            {
              id: 17,
              title: 'Графичен дизайн - Основи с Adobe (15–18 г.)',
              slug: 'graphic-design-adobe-basics',
              description: 'Практически курс за усвояване на стабилни основи в графичния дизайн и работа с професионалните Adobe инструменти. Курсът развива визуално мислене, композиция и технически умения, необходими за създаване на реални дизайнерски проекти.',
              duration: '10 седмици / 10 занятия',
              price: 490,
              difficulty: 'advanced',
              features: [
                'Основи на графичния дизайн и визуалната комуникация',
                'Цифрова обработка на изображения с Adobe Photoshop',
                'Създаване на векторни графики и лога с Adobe Illustrator',
                'Работа с цветове, типография и композиция',
                'Подготовка на дизайни за дигитална и печатна среда',
                'Практически мини проекти (постер, лого, визия за социални мрежи)'
              ],
              formatted_price: '490 лв.',
              formatted_price_eur: '250 €',
              startDate: '22 март 2026',
              status: 'Предстоящ',
              format: 'Присъствен'
            },
            {
              id: 18,
              title: 'Графичен дизайн - Портфолио и предпечат (15–18 г.)',
              slug: 'graphic-design-portfolio-prepress',
              description: 'Надграждащ курс за ученици, които вече имат основни умения по графичен дизайн или са преминали курса „Графичен дизайн - Основи с Adobe". Фокусът е върху предпечат, оформление на многостранични материали и създаване на завършено дизайнерско портфолио.',
              duration: '6 седмици / 6 занятия',
              price: 320,
              difficulty: 'advanced',
              features: [
                'Работа с Adobe InDesign за многостранични документи',
                'Основи на предпечата и подготовка за печат',
                'Макетиране на брошури, списания и презентационни материали',
                'Изграждане на визуална идентичност',
                'Създаване и подреждане на дизайнерско портфолио',
                'Финален проект с индивидуална обратна връзка'
              ],
              formatted_price: '320 лв.',
              formatted_price_eur: '165 €',
              startDate: '7 юни 2026',
              status: 'Предстоящ',
              format: 'Присъствен'
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
              id: 11,
              title: 'Софтуерно инженерство – Full Stack старт',
              slug: 'full-stack-start',
              description: 'Стабилен старт за кариера във Full Stack разработката. Изграждане на основни умения, реални проекти и технологична база за Junior позиции.',
              duration: '14 седмици',
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
              formatted_price_eur: '667 €',
              startDate: '20 януари 2026',
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
              formatted_price_eur: '333 €',
              startDate: '21 януари 2026',
              status: 'Записвания отворени',
              format: 'Онлайн'
            },
            {
              id: 9,
              title: 'QA – Автоматизирано тестване с помощта на AI',
              slug: 'qa-automated-testing',
              description: 'Интензивен курс по автоматизирано тестване за начинаещи, които вече имат основи по Manual QA. Обхваща автоматизация със съвременни инструменти, програмиране, CI/CD и интеграция на AI технологии в тестовия процес.',
              duration: '8 седмици',
              price: 700,
              difficulty: 'beginner',
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
              formatted_price: '700 лв.',
              formatted_price_eur: '359 €',
              startDate: '24 февруари 2026',
              status: 'Записвания отворени',
              format: 'Онлайн'
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
              formatted_price_eur: '215 €',
              startDate: '25 февруари 2026',
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
              difficulty: 'beginner',
              features: [
                'Основи на софтуерното тестване',
                'Типове тестове и техники за тест-дизайн',
                'Тестови сценарии и тестови случаи',
                'Изготвяне на бъг репорт',
                'Работа с инструменти като Jira',
                'QA процеси и документация',
                'Практически мини проект'
              ],
              formatted_price: '550 лв.',
              formatted_price_eur: '282 €',
              startDate: '21 април 2026',
              status: 'Предстоящ',
              format: 'Онлайн'
            },
            {
              id: 14,
              title: 'Vibe Coding - Програмиране с AI',
              slug: 'vibe-coding',
              description: 'Уникален курс по програмиране чрез с помощта на инструменти с изкуствен интелект. Подходящ за хора без опит, които искат да навлязат в IT сферата по нестандартен и вдъхновяващ начин.',
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
              formatted_price_eur: '282 €',
              startDate: '27 април 2026',
              status: 'Предстоящ',
              format: 'Онлайн'
            },
            {
              id: 12,
              title: 'UI/UX дизайн с Figma – Основи и практическо приложение (+ AI бонус)',
              slug: 'ai-driven-ui-design',
              description: 'Практически курс за усвояване на основите на UI/UX дизайна и работа с Figma. Подходящ за начинаещи и напреднали в дизайн и фронтенд разработка, които искат да създават функционални и визуално издържани потребителски интерфейси според добрите практики в индустрията.',
              duration: '8 седмици / 8 занятия',
              price: 750,
              difficulty: 'advanced',
              features: [
                'Основи на UI и UX дизайна',
                'Принципи на потребителското изживяване',
                'UX процес: research, user flows, wireframes',
                'Основи на визуалния UI дизайн',
                'Цветове, типография и визуална йерархия',
                'Работа с Figma – интерфейс и инструменти',
                'Създаване на wireframes и UI компоненти',
                'Прототипиране и интерактивни екрани',
                'Добри практики при дизайн на уеб и мобилни интерфейси',
                'Практически задания и реални UI проекти',
                'Изграждане на портфолио от UI/UX проекти',
                'Въведение в AI инструменти за дизайн',
                'AI подпомагане при wireframes и прототипи',
                'Генериране на идеи и UI компоненти с AI',
                'Ускоряване на дизайн процеса',
                'Добри практики и етика при използване на AI в дизайна'
              ],
              formatted_price: '750 лв.',
              formatted_price_eur: '385 €',
              startDate: '15 септември 2026',
              status: 'Предстоящ',
              format: 'Онлайн'
            },
            {
              id: 19,
              title: 'Графичен дизайн – Професионална подготовка',
              slug: 'graphic-design-professional-adobe',
              description: 'Професионален курс по графичен дизайн с фокус върху реални умения, търсени на пазара на труда. Подходящ за възрастни, които искат да се преквалифицират или да надградят своите дизайнерски умения.',
              duration: '12 седмици / 12 занятия',
              price: 980,
              difficulty: 'beginner',
              features: [
                'Основи на графичния дизайн и визуалната комуникация',
                'Цветове, композиция и визуална йерархия',
                'Adobe Photoshop – растерна графика и обработка на изображения',
                'Adobe Illustrator – векторни графики, лога и илюстрации',
                'Типография и визуална идентичност',
                'Практически задания по реални казуси',
                'Подготовка на дизайнерски проекти',
                'Работа с AI инструменти в графичния дизайн (Adobe Firefly, Canva AI)',
                'Генериране на идеи и ускоряване на дизайнерския процес',
                'Добри практики и етика при използване на AI'
              ],
              formatted_price: '980 лв.',
              formatted_price_eur: '501 €',
              startDate: '5 април 2026',
              status: 'Предстоящ',
              format: 'Онлайн'
            },
            {
              id: 20,
              title: 'Графичен дизайн - Предпечат и бранд материали с Adobe InDesign',
              slug: 'graphic-design-prepress-brand-materials',
              description: 'Надграждащ курс за предпечатна подготовка и създаване на бранд материали. Подходящ за курсисти с основни познания по графичен дизайн.',
              duration: '6 седмици / 6 занятия',
              price: 520,
              difficulty: 'advanced',
              features: [
                'Работа с Adobe InDesign',
                'Подготовка на файлове за печат',
                'Цветови режими, резолюции и формати',
                'Създаване на брошури, каталози и рекламни материали',
                'Многостранични документи и layout',
                'Основи на предпечатната подготовка',
                'AI инструменти за автоматизация на дизайн и предпечат',
                'Оптимизация на работния процес'
              ],
              formatted_price: '520 лв.',
              formatted_price_eur: '266 €',
              startDate: '10 юли 2026',
              status: 'Предстоящ',
              format: 'Онлайн'
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
      ringColor: 'ring-green-500/50',
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
      ringColor: 'ring-purple-500/50',
      comingSoon: true,
      specialties: [
        'Дигитализация на учебния процес',
        'Съвременни методи на преподаване',
        'Използване на AI и интерактивни технологии в класната стая'
      ],
      courses: []
    }
  ];

  useEffect(() => {
    if (categoryParam) {
      setSelectedCategory(categoryParam);
      setExpandedCategories(new Set([categoryParam]));
      // Set subcategory from URL or default if category has subcategories
      const categoryData = courseCategories.find(c => c.id === categoryParam);
      if (categoryData?.subcategories && categoryData.subcategories.length > 0) {
        if (subcategoryParam && categoryData.subcategories.find(sc => sc.id === subcategoryParam)) {
          setSelectedSubcategory(subcategoryParam);
        } else {
          // If no subcategory in URL but category has subcategories, redirect to first subcategory
          if (!subcategoryParam && categoryData.subcategories.length > 0) {
            navigate(`/courses/${categoryParam}/${categoryData.subcategories[0].id}`, { replace: true });
            return;
          }
          setSelectedSubcategory(categoryData.subcategories[0].id);
        }
      }
      // Scroll to category after state update and DOM render
      scrollToCategory(categoryParam, 400);
    } else {
      // Reset state when no category in URL
      setSelectedCategory(null);
      setExpandedCategories(new Set());
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [categoryParam, subcategoryParam]);

  // Handle initial page load with category parameter
  useEffect(() => {
    if (categoryParam) {
      // Wait for component to fully mount, render, and ScrollToTop to finish
      scrollToCategory(categoryParam, 700);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []); // Run only on mount

  const toggleCategory = (categoryId: string) => {
    const newExpanded = new Set(expandedCategories);
    if (newExpanded.has(categoryId)) {
      newExpanded.delete(categoryId);
      if (selectedCategory === categoryId) {
        setSelectedCategory(null);
        navigate('/courses', { replace: true });
      }
    } else {
      newExpanded.add(categoryId);
      setSelectedCategory(categoryId);
      // Reset subcategory selection when switching categories
      const category = courseCategories.find(c => c.id === categoryId);
      if (category?.subcategories && category.subcategories.length > 0) {
        const firstSubcategory = category.subcategories[0].id;
        setSelectedSubcategory(firstSubcategory);
        navigate(`/courses/${categoryId}/${firstSubcategory}`, { replace: true });
      } else {
        navigate(`/courses/${categoryId}`, { replace: true });
      }
      // Scroll to category after expanding
      scrollToCategory(categoryId);
    }
    setExpandedCategories(newExpanded);
  };

  // Set canonical URL and page title
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {
    const baseUrl = 'https://www.akavaacademy.com';
    let canonicalUrl = `${baseUrl}/courses`;
    let pageTitle = 'Курсове | Akava Academy';
    let metaDescription = 'Разгледайте нашите курсове по програмиране, роботика и технологии за деца и ученици.';

    if (categoryParam) {
      const category = courseCategories.find(c => c.id === categoryParam);
      if (category) {
        canonicalUrl = `${baseUrl}/courses/${categoryParam}`;
        pageTitle = `${category.title} | Akava Academy`;
        metaDescription = category.description;

        if (subcategoryParam) {
          const subcategory = category.subcategories?.find(sc => sc.id === subcategoryParam);
          if (subcategory) {
            canonicalUrl = `${baseUrl}/courses/${categoryParam}/${subcategoryParam}`;
            pageTitle = `${subcategory.title} - ${category.title} | Akava Academy`;
            metaDescription = subcategory.description;
          }
        }
      }
    }

    // Update document title
    document.title = pageTitle;

    // Update or create canonical link
    let canonicalLink = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
    if (!canonicalLink) {
      canonicalLink = document.createElement('link');
      canonicalLink.setAttribute('rel', 'canonical');
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.setAttribute('href', canonicalUrl);

    // Update meta description
    let metaDesc = document.querySelector('meta[name="description"]') as HTMLMetaElement;
    if (!metaDesc) {
      metaDesc = document.createElement('meta');
      metaDesc.setAttribute('name', 'description');
      document.head.appendChild(metaDesc);
    }
    metaDesc.setAttribute('content', metaDescription);
  }, [categoryParam, subcategoryParam]);

  return (
    <section id="courses" className="pt-32 md:pt-40 pb-20 bg-gray-50 min-h-screen">
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
                  isSelected ? `shadow-xl ring-4 ${category.ringColor || 'ring-primary-500/50'}` : 'shadow-lg hover:shadow-xl'
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
                                  onClick={() => {
                                    setSelectedSubcategory(subcat.id);
                                    // Update URL with clean path
                                    navigate(`/courses/${category.id}/${subcat.id}`, { replace: true });
                                  }}
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

                                    <div className="space-y-2 mb-4">
                                      {course.startDate && (
                                        <div className="flex items-center text-sm text-gray-600">
                                          <Calendar className="w-4 h-4 mr-2 text-primary-600 flex-shrink-0" />
                                          <span className="font-medium">Начало:</span>
                                          <span className="ml-2">{course.startDate}</span>
                                        </div>
                                      )}
                                      {course.status && (
                                        <div className="flex items-center text-sm">
                                          <Info className="w-4 h-4 mr-2 text-primary-600 flex-shrink-0" />
                                          <span className="font-medium">Статус:</span>
                                          <span className={`ml-2 px-2 py-0.5 rounded-full text-xs font-semibold ${
                                            course.status === 'Записвания отворени' 
                                              ? 'bg-green-100 text-green-700' 
                                              : course.status === 'Предстоящ'
                                                ? 'bg-blue-100 text-blue-700'
                                                : 'bg-gray-100 text-gray-700'
                                          }`}>
                                            {course.status}
                                          </span>
                                        </div>
                                      )}
                                      {course.format && (
                                        <div className="flex items-center text-sm text-gray-600">
                                          <Monitor className="w-4 h-4 mr-2 text-primary-600 flex-shrink-0" />
                                          <span className="font-medium">Формат:</span>
                                          <span className="ml-2">{course.format}</span>
                                        </div>
                                      )}
                                      <div className="flex items-center text-sm text-gray-500">
                                        <Clock className="w-4 h-4 mr-1" />
                                        {course.duration}
                                      </div>
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
                                      onClick={() => {
                                        // Store category and subcategory for back navigation
                                        sessionStorage.setItem('courseCategory', category.id);
                                        if (category.subcategories && selectedSubcategory) {
                                          sessionStorage.setItem('courseSubcategory', selectedSubcategory);
                                        }
                                        navigate(`/course/${course.slug}`);
                                      }}
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

                              <div className="space-y-2 mb-4">
                                {course.startDate && (
                                  <div className="flex items-center text-sm text-gray-600">
                                    <Calendar className="w-4 h-4 mr-2 text-primary-600 flex-shrink-0" />
                                    <span className="font-medium">Начало:</span>
                                    <span className="ml-2">{course.startDate}</span>
                                  </div>
                                )}
                                {course.status && (
                                  <div className="flex items-center text-sm">
                                    <Info className="w-4 h-4 mr-2 text-primary-600 flex-shrink-0" />
                                    <span className="font-medium">Статус:</span>
                                    <span className={`ml-2 px-2 py-0.5 rounded-full text-xs font-semibold ${
                                      course.status === 'Записвания отворени' 
                                        ? 'bg-green-100 text-green-700' 
                                        : course.status === 'Предстоящ'
                                          ? 'bg-blue-100 text-blue-700'
                                          : 'bg-gray-100 text-gray-700'
                                    }`}>
                                      {course.status}
                                    </span>
                                  </div>
                                )}
                                {course.format && (
                                  <div className="flex items-center text-sm text-gray-600">
                                    <Monitor className="w-4 h-4 mr-2 text-primary-600 flex-shrink-0" />
                                    <span className="font-medium">Формат:</span>
                                    <span className="ml-2">{course.format}</span>
                                  </div>
                                )}
                                <div className="flex items-center text-sm text-gray-500">
                                  <Clock className="w-4 h-4 mr-1" />
                                  {course.duration}
                                </div>
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
                                onClick={() => navigate(`/contact?course=${encodeURIComponent(course.title)}`)}
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
      </div>
    </section>
  );
};

export default Courses;

export const CoursesSection = Courses; 
