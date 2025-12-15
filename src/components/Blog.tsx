import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link, useSearchParams } from 'react-router-dom';
import { BookOpen, Users, Calendar, TrendingUp, ArrowRight, Clock, Calendar as CalendarIcon, X } from 'lucide-react';
import { articles, Article } from '../data/articles';

interface NewsCategory {
  icon: React.ElementType;
  title: string;
  slug: 'useful-articles' | 'parent-tips' | 'academy-news' | 'digital-skills';
  description: string;
  color: string;
}

const BlogComponent: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const categoryParam = searchParams.get('category');
  const [allArticles] = useState<Article[]>(articles);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(categoryParam);

  const newsCategories: NewsCategory[] = [
    {
      icon: BookOpen,
      title: 'Полезни статии',
      slug: 'useful-articles',
      description: 'Материали, които ще ви помогнат да разширите знанията си в света на технологиите и образованието.',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Users,
      title: 'Съвети за родители',
      slug: 'parent-tips',
      description: 'Полезни насоки за родители, които искат да подкрепят дигиталното развитие на своите деца. Теми за безопасност, мотивация и ефективно учене в съвременната дигитална среда.',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: Calendar,
      title: 'Новини от академията',
      slug: 'academy-news',
      description: 'Бъдете в крак с всичко ново в Акава Академи — нови курсове, събития, успехи на учениците и актуални инициативи, които развиваме заедно.',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: TrendingUp,
      title: 'Дигитални умения и тенденции',
      slug: 'digital-skills',
      description: 'Следете най-актуалните тенденции в света на технологиите, програмирането, дизайна и дигиталната безопасност. Научете какви умения са нужни на децата днес, за да успеят утре.',
      color: 'from-orange-500 to-red-500'
    }
  ];

  useEffect(() => {
    if (categoryParam) {
      setSelectedCategory(categoryParam);
    }
  }, [categoryParam]);

  const getCategoryArticleCount = (slug: string) => {
    if (!Array.isArray(allArticles)) return 0;
    return allArticles.filter(article => article.categorySlug === slug).length;
  };

  const filteredArticles = Array.isArray(allArticles)
    ? (selectedCategory
      ? allArticles.filter(article => article.categorySlug === selectedCategory)
      : allArticles)
    : [];

  const recentArticles = Array.isArray(allArticles)
    ? [...allArticles]
      .sort((a, b) => {
        // Simple date sorting - assumes date format like "15 януари 2024"
        return b.id - a.id; // Fallback to ID sorting if dates are not parseable
      })
      .slice(0, 4)
    : [];

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
              Новини и{' '}
              <span className="bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent">
                Статии
              </span>
            </h1>
            <p className="text-xl lg:text-2xl text-white/90 max-w-3xl mx-auto">
              В страницата „Новини" ще намерите полезни статии за ученици и родители, актуални събития от академия АКАВА и интересни тенденции в света на технологиите и образованието.
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
            {newsCategories.map((category, index) => {
              const IconComponent = category.icon;
              const articleCount = getCategoryArticleCount(category.slug);
              const isSelected = selectedCategory === category.slug;
              
              return (
                <motion.div
                  key={category.slug}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  onClick={() => {
                    const newCategory = isSelected ? null : category.slug;
                    setSelectedCategory(newCategory);
                    if (newCategory) {
                      setSearchParams({ category: newCategory });
                    } else {
                      setSearchParams({});
                    }
                    // Scroll to articles section
                    setTimeout(() => {
                      const articlesSection = document.getElementById('articles-section');
                      if (articlesSection) {
                        articlesSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
                      }
                    }, 100);
                  }}
                  className={`bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer group ${
                    isSelected ? 'ring-2 ring-primary-500' : ''
                  }`}
                >
                  <div className={`w-16 h-16 bg-gradient-to-r ${category.color} rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    {category.title}
                  </h3>
                  <p className="text-gray-600 mb-4 leading-relaxed text-sm">
                    {category.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">
                      {articleCount} {articleCount === 1 ? 'статия' : 'статии'}
                    </span>
                    {isSelected ? (
                      <X className="w-5 h-5 text-primary-600" />
                    ) : (
                      <ArrowRight className="w-5 h-5 text-primary-600 group-hover:translate-x-1 transition-transform" />
                    )}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Articles Section */}
      <section id="articles-section" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="flex-1"
            >
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                {selectedCategory 
                  ? `${newsCategories.find(c => c.slug === selectedCategory)?.title || 'Статии'} (${filteredArticles.length})`
                  : 'Последни статии'
                }
              </h2>
              {selectedCategory && (
                <button
                  onClick={() => {
                    setSelectedCategory(null);
                    setSearchParams({});
                    // Scroll to articles section
                    setTimeout(() => {
                      const articlesSection = document.getElementById('articles-section');
                      if (articlesSection) {
                        articlesSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
                      }
                    }, 100);
                  }}
                  className="text-primary-600 hover:text-primary-700 text-sm font-medium flex items-center"
                >
                  <X className="w-4 h-4 mr-1" />
                  Покажи всички статии
                </button>
              )}
            </motion.div>
          </div>

          {(selectedCategory ? filteredArticles : recentArticles).length === 0 ? (
            <div className="text-center py-12">
              <p className="text-gray-600 text-lg">Няма налични статии в тази категория.</p>
              <p className="text-gray-500 text-sm mt-2">
                Статиите от <a href="https://akavaacademy.com/новини" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:underline">akavaacademy.com/новини</a> трябва да бъдат добавени в <code className="bg-gray-100 px-2 py-1 rounded">src/data/articles.ts</code>
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
              {(selectedCategory ? filteredArticles : recentArticles).map((article, index) => {
                const category = newsCategories.find(c => c.slug === article.categorySlug);
                return (
                  <Link
                    key={article.id}
                    to={`/blog/article/${article.id}`}
                  >
                    <motion.article
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group cursor-pointer h-full"
                    >
                      {article.categorySlug !== 'parent-tips' && (
                        <div className="relative h-48 overflow-hidden bg-gray-200">
                          <img
                            src={article.image}
                            alt={article.title}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                            onError={(e) => {
                              const target = e.target as HTMLImageElement;
                              target.src = 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&h=500&fit=crop';
                            }}
                            loading="lazy"
                          />
                          <div className="absolute top-4 left-4">
                            <span className={`bg-gradient-to-r ${category?.color || 'from-gray-500 to-gray-600'} text-white px-3 py-1 rounded-full text-sm font-medium`}>
                              {article.category}
                            </span>
                          </div>
                        </div>
                      )}
                      {article.categorySlug === 'parent-tips' && (
                        <div className="p-6 pb-0">
                          <span className={`bg-gradient-to-r ${category?.color || 'from-gray-500 to-gray-600'} text-white px-3 py-1 rounded-full text-sm font-medium inline-block`}>
                            {article.category}
                          </span>
                        </div>
                      )}
                      <div className="p-6">
                        <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-primary-600 transition-colors line-clamp-2 min-h-[3.5rem]">
                          {article.title}
                        </h3>
                        <p className="text-gray-600 mb-4 leading-relaxed line-clamp-3">
                          {article.excerpt}
                        </p>
                        <div className="flex items-center justify-between text-sm text-gray-500">
                          <div className="flex items-center space-x-4 flex-wrap gap-2">
                            <div className="flex items-center">
                              <CalendarIcon className="w-4 h-4 mr-1 flex-shrink-0" />
                              <span className="whitespace-nowrap">{article.date}</span>
                            </div>
                            <div className="flex items-center">
                              <Clock className="w-4 h-4 mr-1 flex-shrink-0" />
                              <span className="whitespace-nowrap">{article.readTime}</span>
                            </div>
                          </div>
                          <ArrowRight className="w-5 h-5 text-primary-600 group-hover:translate-x-1 transition-transform flex-shrink-0" />
                        </div>
                      </div>
                    </motion.article>
                  </Link>
                );
              })}
            </div>
          )}
        </div>
      </section>

      {/* Newsletter Signup - Temporarily hidden until functionality is fixed */}
      {false && (
        <section className="py-20 bg-gradient-to-r from-primary-600 to-secondary-600">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
                Получавайте най-новите блогове директно в пощенската си кутия
              </h2>
              <p className="text-xl text-white/90 mb-8">
                Абонирайте се за нашия бюлетин и получавайте най-новите статии директно в пощенската си кутия.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Вашият имейл адрес"
                  className="flex-1 px-4 py-3 rounded-lg border-0 focus:ring-2 focus:ring-white/50 text-gray-900"
                />
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-white text-primary-600 font-semibold py-3 px-6 rounded-lg hover:bg-gray-100 transition-colors duration-300"
                >
                  Абонирай се
                </motion.button>
              </div>
            </motion.div>
          </div>
        </section>
      )}
    </div>
  );
};

export default BlogComponent; 
