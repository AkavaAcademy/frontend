import React from 'react';
import { motion } from 'framer-motion';
import { 
  Users,
  Briefcase,
  GraduationCap,
  CheckCircle,
  Zap,
  Target,
  Award,
  Shield,
  TrendingUp
} from 'lucide-react';

const Features: React.FC = () => {
  // Option 4: Target Audience Benefits
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

  // Option 5: Methodology & Approach
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
    <section id="features" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Option 4: Target Audience Benefits Section */}
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
            Разнообразие от програми за всеки етап от твоето професионално развитие
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
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

        {/* Option 5: Methodology & Approach Section */}
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

export default Features; 
