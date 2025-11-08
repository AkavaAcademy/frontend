import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Users, Calendar, TrendingUp, ArrowRight, Clock } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const BlogComponent: React.FC = () => {
  const { t } = useTranslation();
  
  const newsCategories = [
    {
      icon: BookOpen,
      title: t('blog.categories.useful.title'),
      description: t('blog.categories.useful.description'),
      articles: 15,
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Users,
      title: t('blog.categories.parents.title'),
      description: t('blog.categories.parents.description'),
      articles: 12,
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: Calendar,
      title: t('blog.categories.news.title'),
      description: t('blog.categories.news.description'),
      articles: 8,
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: TrendingUp,
      title: t('blog.categories.trends.title'),
      description: t('blog.categories.trends.description'),
      articles: 20,
      color: 'from-orange-500 to-red-500'
    }
  ];

  const recentArticles = [
    {
      title: 'Как да мотивираме децата да учат програмиране',
      category: 'Съвети за родители',
      date: '15 януари 2024',
      readTime: '5 мин',
      excerpt: 'Практически съвети за родители как да вдъхновят децата си да се занимават с програмиране...',
      image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=400&h=250&fit=crop'
    },
    {
      title: 'Нови курсове по AI за 2024',
      category: 'Новини от академията',
      date: '12 януари 2024',
      readTime: '3 мин',
      excerpt: 'Представяме новите курсове по изкуствен интелект и машинно обучение...',
      image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400&h=250&fit=crop'
    },
    {
      title: 'Топ 10 програмни езика за 2024',
      category: 'Дигитални умения и тенденции',
      date: '10 януари 2024',
      readTime: '7 мин',
      excerpt: 'Кои програмни езици са най-търсените на пазара на труда тази година...',
      image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=250&fit=crop'
    },
    {
      title: 'Успехи на нашите ученици в състезания',
      category: 'Новини от академията',
      date: '8 януари 2024',
      readTime: '4 мин',
      excerpt: 'Гордеем се с постиженията на нашите ученици в национални състезания...',
      image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=400&h=250&fit=crop'
    }
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
              {t('blog.title')}{' '}
              <span className="bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent">
                {t('blog.titleHighlight')}
              </span>
            </h1>
            <p className="text-xl lg:text-2xl text-white/90 max-w-3xl mx-auto">
              {t('blog.subtitle')}
            </p>
          </motion.div>
        </div>
      </section>

      {/* News Categories */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Категории новини
            </h2>
            <p className="text-xl text-gray-600">
              Изберете тема, която ви интересува
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {newsCategories.map((category, index) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer group"
              >
                <div className={`w-16 h-16 bg-gradient-to-r ${category.color} rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <category.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {category.title}
                </h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {category.description}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">
                    {category.articles} {t('blog.categories.useful.articles')}
                  </span>
                  <ArrowRight className="w-5 h-5 text-primary-600 group-hover:translate-x-1 transition-transform" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Recent Articles */}
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
              {t('blog.recent')}
            </h2>
            <p className="text-xl text-gray-600">
              {t('blog.recentSubtitle')}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            {recentArticles.map((article, index) => (
              <motion.article
                key={article.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group cursor-pointer"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-primary-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                      {article.category}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-primary-600 transition-colors">
                    {article.title}
                  </h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {article.excerpt}
                  </p>
                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center">
                        <Calendar className="w-4 h-4 mr-1" />
                        {article.date}
                      </div>
                      <div className="flex items-center">
                        <Clock className="w-4 h-4 mr-1" />
                        {article.readTime.replace('мин', t('blog.readTime'))}
                      </div>
                    </div>
                    <ArrowRight className="w-5 h-5 text-primary-600 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-20 bg-gradient-to-r from-primary-600 to-secondary-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
              {t('blog.newsletter.title')}
            </h2>
            <p className="text-xl text-white/90 mb-8">
              {t('blog.newsletter.description')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder={t('blog.newsletter.placeholder')}
                className="flex-1 px-4 py-3 rounded-lg border-0 focus:ring-2 focus:ring-white/50 text-gray-900"
              />
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-primary-600 font-semibold py-3 px-6 rounded-lg hover:bg-gray-100 transition-colors duration-300"
              >
                {t('blog.newsletter.subscribe')}
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default BlogComponent; 