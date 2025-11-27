import React from 'react';
import { motion } from 'framer-motion';
import { 
  Code, 
  Users, 
  Trophy, 
  BookOpen, 
  Monitor, 
  Heart,
  Zap,
  Shield
} from 'lucide-react';

const Features: React.FC = () => {
  const features = [
    {
      icon: Code,
      title: 'Интерактивно програмиране',
      description: 'Научете програмиране чрез забавни, интерактивни упражнения и реални проекти, които правят писането на код вълнуващо.',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Users,
      title: 'Опитни преподаватели',
      description: 'Учете се от сертифицирани инструктори с реален практически опит в ИТ фирми.',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: Trophy,
      title: 'Система за постижения',
      description: 'Печелете значки, сертификати и награди, докато напредвате в пътешествието си в програмирането.',
      color: 'from-yellow-500 to-orange-500'
    },
    {
      icon: BookOpen,
      title: 'Структурирана програма',
      description: 'Следвайте внимателно проектирания път на обучение от основите до напредналите програмни концепции.',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: Monitor,
      title: 'Съвременни инструменти',
      description: 'Използвайте най-новите инструменти за разработка и платформи, използвани от професионални програмисти.',
      color: 'from-indigo-500 to-blue-500'
    },
    {
      icon: Heart,
      title: 'Реални проекти',
      description: 'Работете по истински проекти, които изграждат портфолио и подготвят за професионална кариера.',
      color: 'from-red-500 to-pink-500'
    },
    {
      icon: Zap,
      title: 'Бърз прогрес',
      description: 'Ускорете обучението си с нашата доказана методология и персонализирана обратна връзка.',
      color: 'from-yellow-400 to-orange-400'
    },
    {
      icon: Shield,
      title: 'Родителски панел',
      description: 'Проследявайте прогреса и постиженията на детето си чрез нашия всеобхватен родителски портал.',
      color: 'from-gray-600 to-gray-800'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  };

  return (
    <section id="features" className="py-20 bg-white">
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
            Защо да изберете{' '}
            <span className="bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent">
              Акава Академи?
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Комбинираме най-новите технологии с доказани образователни методи, за да създадем 
            увлекателно учебно преживяване, което подготвя обучаемите за дигиталното бъдеще.
          </p>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {features.map((feature, _index) => (
            <motion.div
              key={feature.title}
              variants={itemVariants}
              whileHover={{ y: -10 }}
              className="group"
            >
              <div className="card p-6 h-full">
                <div className={`w-12 h-12 bg-gradient-to-br ${feature.color} rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-primary-600 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};

export default Features; 
