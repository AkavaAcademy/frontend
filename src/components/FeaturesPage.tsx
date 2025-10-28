import React from 'react';
import { motion } from 'framer-motion';
import { Code, Award, BookOpen, Globe, Smartphone, Gamepad2 } from 'lucide-react';

const FeaturesPage: React.FC = () => {
  const features = [
    {
      icon: Code,
      title: 'Програмиране за всички възрасти',
      description: 'Научете се да програмирате с подходящи за възрастта езици и платформи - от Scratch за най-малките до Python и JavaScript за по-големите.',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Gamepad2,
      title: 'LEGO роботика и игри',
      description: 'Създавайте роботи и игри с LEGO Mindstorms. Развивайте логическо мислене и творчески умения чрез забавни проекти.',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: Globe,
      title: 'Уеб дизайн',
      description: 'Научете се да създавате красиви и функционални уебсайтове с HTML, CSS и JavaScript.',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: Smartphone,
      title: 'Мобилни приложения',
      description: 'Разработвайте мобилни приложения за Android и iOS с React Native и други модерни технологии.',
      color: 'from-orange-500 to-red-500'
    },
    {
      icon: BookOpen,
      title: 'Дизайн и креативност',
      description: 'Развивайте креативните си умения с Adobe Creative Suite, 3D моделиране и дигитално изкуство.',
      color: 'from-indigo-500 to-purple-500'
    },
    {
      icon: Award,
      title: 'Сертификати и признание',
      description: 'Получавайте сертификати за завършени курсове и участвайте в национални състезания по програмиране.',
      color: 'from-yellow-500 to-orange-500'
    }
  ];

  const stats = [
    { number: '500+', label: 'Щастливи ученици' },
    { number: '50+', label: 'Завършени курсове' },
    { number: '1000+', label: 'Часа обучение' },
    { number: '98%', label: 'Доволни родители' }
  ];

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary-600 to-secondary-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">
              Нашите{' '}
              <span className="bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent">
                Възможности
              </span>
            </h1>
            <p className="text-xl lg:text-2xl text-white/90 max-w-3xl mx-auto">
              Открийте разнообразните курсове и възможности, които предлагаме за развитие на дигиталните умения на вашите деца.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className={`w-16 h-16 bg-gradient-to-r ${feature.color} rounded-lg flex items-center justify-center mb-6`}>
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Нашите постижения
            </h2>
            <p className="text-xl text-gray-600">
              Резултатите говорят сами за себе си
            </p>
          </motion.div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="text-4xl lg:text-5xl font-bold text-primary-600 mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600 font-medium">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary-600 to-secondary-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
              Готови да започнете?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Запишете вашето дете за безплатен пробен курс и открийте света на програмирането!
            </p>
            <motion.a
              href="/courses"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block bg-white text-primary-600 font-semibold py-4 px-8 rounded-lg hover:bg-gray-100 transition-colors duration-300"
            >
              Виж всички курсове
            </motion.a>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default FeaturesPage;
