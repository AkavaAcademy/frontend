/**
 * ALTERNATIVE FEATURES SECTIONS FOR AKAVA ACADEMY
 * 
 * This file contains several alternative implementations for the features section.
 * Choose the one that best fits your needs and replace the content in Features.tsx
 */

import React from 'react';
import { motion } from 'framer-motion';
import { 
  BookOpen, 
  BadgeCheck, 
  GraduationCap,
  Users,
  TrendingUp,
  Award,
  Clock,
  Target,
  CheckCircle,
  ArrowRight,
  Star,
  Briefcase,
  Laptop,
  Shield,
  Zap
} from 'lucide-react';

// ============================================================================
// OPTION 1: Statistics & Impact Section
// ============================================================================
export const FeaturesStats: React.FC = () => {
  const stats = [
    {
      icon: Users,
      number: '500+',
      label: 'Ученици',
      description: 'Доволни студенти и завършили курсове',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: BookOpen,
      number: '20+',
      label: 'Курсове',
      description: 'Разнообразни програми за всички нива',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: Award,
      number: '95%',
      label: 'Успеваемост',
      description: 'Процент на завършили успешно',
      color: 'from-yellow-500 to-orange-500'
    },
    {
      icon: Briefcase,
      number: '80%',
      label: 'Трудоустройство',
      description: 'Намират работа след обучението',
      color: 'from-green-500 to-emerald-500'
    }
  ];

  return (
    <section id="features" className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Акава Академи в{' '}
            <span className="bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent">
              Цифри
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Резултатите говорят сами - доказано качество в образованието и професионално развитие
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="text-center group"
            >
              <div className={`w-20 h-20 bg-gradient-to-br ${stat.color} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                <stat.icon className="w-10 h-10 text-white" />
              </div>
              <div className="text-5xl font-bold bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent mb-2">
                {stat.number}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{stat.label}</h3>
              <p className="text-gray-600">{stat.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// ============================================================================
// OPTION 2: Course Categories Showcase
// ============================================================================
export const FeaturesCategories: React.FC = () => {
  const categories = [
    {
      icon: BookOpen,
      title: 'Краткосрочни обучения',
      description: 'Бързо и практично развитие на дигитални умения за ученици и възрастни',
      features: [
        'Програми за всички възрасти',
        'Практически проекти',
        'Гъвкаво време',
        'Сертификати за завършване'
      ],
      color: 'from-blue-500 to-cyan-500',
      bgColor: 'bg-blue-50',
      link: '/courses/short'
    },
    {
      icon: BadgeCheck,
      title: 'Лицензирани професионални обучения',
      description: 'Официални квалификации, признати от НАПОО',
      features: [
        'Официални свидетелства',
        'Признати квалификации',
        'Професионална подготовка',
        'Кариерни възможности'
      ],
      color: 'from-green-500 to-emerald-500',
      bgColor: 'bg-green-50',
      link: '/courses/licensed',
      comingSoon: true
    },
    {
      icon: GraduationCap,
      title: 'Квалификация за преподаватели',
      description: 'Повишаване на квалификацията на педагогически специалисти',
      features: [
        'Одобрение от МОН',
        'Дигитални компетентности',
        'Съвременни методи',
        'AI в образованието'
      ],
      color: 'from-purple-500 to-pink-500',
      bgColor: 'bg-purple-50',
      link: '/courses/teachers',
      comingSoon: true
    }
  ];

  return (
    <section id="features" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
              Образователни Програми
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Изберете пътя, който отговаря на вашите цели - от краткосрочни курсове до професионални квалификации
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {categories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className={`${category.bgColor} rounded-2xl p-8 border-2 border-transparent hover:border-primary-300 transition-all duration-300 relative overflow-hidden group`}
            >
              {category.comingSoon && (
                <div className="absolute top-4 right-4 bg-yellow-400 text-yellow-900 px-3 py-1 rounded-full text-xs font-bold">
                  Скоро
                </div>
              )}
              
              <div className={`w-16 h-16 bg-gradient-to-br ${category.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <category.icon className="w-8 h-8 text-white" />
              </div>
              
              <h3 className="text-2xl font-bold text-gray-900 mb-4">{category.title}</h3>
              <p className="text-gray-700 mb-6 leading-relaxed">{category.description}</p>
              
              <ul className="space-y-3 mb-6">
                {category.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-gray-700">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              
              <a
                href={category.link}
                className="inline-flex items-center text-primary-600 font-semibold hover:text-primary-700 transition-colors group/link"
              >
                Научи повече
                <ArrowRight className="w-4 h-4 ml-2 group-hover/link:translate-x-1 transition-transform" />
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// ============================================================================
// OPTION 3: Learning Journey/Process
// ============================================================================
export const FeaturesJourney: React.FC = () => {
  const steps = [
    {
      step: '01',
      icon: Target,
      title: 'Избери курс',
      description: 'Разгледай нашите програми и избери курса, който отговаря на твоите цели и интереси',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      step: '02',
      icon: BookOpen,
      title: 'Запиши се',
      description: 'Свържи се с нас за безплатна консултация и запиши се за избрания курс',
      color: 'from-purple-500 to-pink-500'
    },
    {
      step: '03',
      icon: Laptop,
      title: 'Учи активно',
      description: 'Следвай интерактивните уроци, работи по проекти и получавай персонализирана обратна връзка',
      color: 'from-yellow-500 to-orange-500'
    },
    {
      step: '04',
      icon: Award,
      title: 'Получи сертификат',
      description: 'Завърши курса успешно и получи официален сертификат за придобитите умения',
      color: 'from-green-500 to-emerald-500'
    },
    {
      step: '05',
      icon: Briefcase,
      title: 'Започни кариера',
      description: 'Използвай новите си умения за професионален растеж или започни нова кариера',
      color: 'from-red-500 to-pink-500'
    }
  ];

  return (
    <section id="features" className="py-20 bg-gradient-to-br from-gray-50 via-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Твоят{' '}
            <span className="bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent">
              Път към Успеха
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            От записване до кариера - структуриран процес, който те води към професионално развитие
          </p>
        </motion.div>

        <div className="relative">
          {/* Connection Line (hidden on mobile) */}
          <div className="hidden lg:block absolute top-24 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-200 via-purple-200 via-yellow-200 via-green-200 to-red-200" />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border-2 border-transparent hover:border-primary-300 group">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-3xl font-bold text-gray-300 group-hover:text-primary-600 transition-colors">
                      {step.step}
                    </span>
                    <div className={`w-14 h-14 bg-gradient-to-br ${step.color} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-md`}>
                      <step.icon className="w-7 h-7 text-white" />
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{step.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

// ============================================================================
// OPTION 4: Target Audience Benefits
// ============================================================================
export const FeaturesAudience: React.FC = () => {
  const audiences = [
    {
      icon: Users,
      title: 'За ученици',
      subtitle: '8-18 години',
      description: 'Развивай дигитални умения от ранна възраст',
      benefits: [
        'Интерактивно и забавно обучение',
        'Подготовка за бъдеща кариера',
        'Възможности за стажове',
        'Сертификати и постижения'
      ],
      color: 'from-blue-500 to-cyan-500',
      bgColor: 'bg-blue-50'
    },
    {
      icon: Briefcase,
      title: 'За възрастни',
      subtitle: 'Преквалификация',
      description: 'Бързо развитие на нови професионални умения',
      benefits: [
        'Интензивни курсове',
        'Практически проекти',
        'Подготовка за кариера',
        'Гъвкаво време'
      ],
      color: 'from-purple-500 to-pink-500',
      bgColor: 'bg-purple-50'
    },
    {
      icon: GraduationCap,
      title: 'За преподаватели',
      subtitle: 'Повишаване на квалификацията',
      description: 'Развивай педагогически и дигитални компетентности',
      benefits: [
        'Одобрение от МОН',
        'Съвременни методи',
        'AI в образованието',
        'Официални удостоверения'
      ],
      color: 'from-green-500 to-emerald-500',
      bgColor: 'bg-green-50'
    }
  ];

  return (
    <section id="features" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Обучение за{' '}
            <span className="bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent">
              Всеки
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Независимо от възрастта или целите ти, имаме програма, която отговаря на твоите нужди
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {audiences.map((audience, index) => (
            <motion.div
              key={audience.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className={`${audience.bgColor} rounded-2xl p-8 border-2 border-transparent hover:border-primary-300 transition-all duration-300 group`}
            >
              <div className={`w-16 h-16 bg-gradient-to-br ${audience.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                <audience.icon className="w-8 h-8 text-white" />
              </div>
              
              <div className="mb-2">
                <h3 className="text-2xl font-bold text-gray-900">{audience.title}</h3>
                <p className="text-sm text-gray-600 font-medium">{audience.subtitle}</p>
              </div>
              
              <p className="text-gray-700 mb-6 leading-relaxed">{audience.description}</p>
              
              <ul className="space-y-3">
                {audience.benefits.map((benefit, idx) => (
                  <li key={idx} className="flex items-center text-gray-700">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// ============================================================================
// OPTION 5: Methodology & Approach
// ============================================================================
export const FeaturesMethodology: React.FC = () => {
  const methods = [
    {
      icon: Zap,
      title: 'Интерактивно обучение',
      description: 'Учи чрез практика с реални проекти и практически упражнения',
      color: 'from-yellow-500 to-orange-500'
    },
    {
      icon: Users,
      title: 'Малки групи',
      description: 'Индивидуален подход с внимание към всеки ученик',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Target,
      title: 'Практически проекти',
      description: 'Работа по реални задачи, които изграждат портфолио',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: Award,
      title: 'Сертификати',
      description: 'Официално признание за придобитите умения',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: Shield,
      title: 'Обратна връзка',
      description: 'Персонализирана подкрепа и насоки от опитни преподаватели',
      color: 'from-indigo-500 to-blue-500'
    },
    {
      icon: TrendingUp,
      title: 'Кариерна подготовка',
      description: 'Подготовка за професионален растеж и нови възможности',
      color: 'from-red-500 to-pink-500'
    }
  ];

  return (
    <section id="features" className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Нашият{' '}
            <span className="bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent">
              Подход
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Комбинираме доказани образователни методи с иновативни технологии за максимална ефективност
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {methods.map((method, index) => (
            <motion.div
              key={method.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border-2 border-transparent hover:border-primary-300 group"
            >
              <div className={`w-14 h-14 bg-gradient-to-br ${method.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                <method.icon className="w-7 h-7 text-white" />
              </div>
              
              <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-primary-600 transition-colors">
                {method.title}
              </h3>
              
              <p className="text-gray-600 leading-relaxed">{method.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

