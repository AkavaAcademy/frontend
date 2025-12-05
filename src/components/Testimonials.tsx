import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { BookOpen, Users, Calendar, TrendingUp, ChevronLeft, ChevronRight } from 'lucide-react';

const News: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const newsItems = [
    {
      id: 1,
      title: 'Полезни статии',
      category: 'Полезни статии',
      categorySlug: 'useful-articles',
      icon: BookOpen,
      content: 'Материали, които ще ви помогнат да разширите знанията си в света на технологиите и образованието. Научете най-новите техники за ефективно обучение и развитие на дигитални умения.',
      date: '2024-01-15',
      readTime: '5 мин',
      type: 'Статия'
    },
    {
      id: 2,
      title: 'Съвети за родители',
      category: 'Съвети за родители',
      categorySlug: 'parent-tips',
      icon: Users,
      content: 'Полезни насоки за родители, които искат да подкрепят дигиталното развитие на своите деца. Теми за безопасност, мотивация и ефективно учене в съвременната дигитална среда.',
      date: '2024-01-12',
      readTime: '7 мин',
      type: 'Съвет'
    },
    {
      id: 3,
      title: 'Новини от академията',
      category: 'Новини от академията',
      categorySlug: 'academy-news',
      icon: Calendar,
      content: 'Бъдете в крак с всичко ново в Akava Academy — нови курсове, събития, успехи на учениците и актуални инициативи, които развиваме заедно с нашата общност.',
      date: '2024-01-10',
      readTime: '4 мин',
      type: 'Новина'
    },
    {
      id: 4,
      title: 'Дигитални умения и тенденции',
      category: 'Дигитални умения и тенденции',
      categorySlug: 'digital-skills',
      icon: TrendingUp,
      content: 'Следете най-актуалните тенденции в света на технологиите, програмирането, дизайна и дигиталната безопасност. Научете какви умения са нужни на децата днес, за да успеят утре.',
      date: '2024-01-08',
      readTime: '6 мин',
      type: 'Тенденция'
    },
    {
      id: 5,
      title: 'Нови курсове за 2026',
      category: 'Новини от академията',
      categorySlug: 'academy-news',
      icon: BookOpen,
      content: 'Представяме ви новите курсове за 2026 година! Разширяваме програмата си с курсове по изкуствен интелект, киберсигурност и 3D дизайн за по-голямо разнообразие и възможности за развитие.',
      date: '2024-01-05',
      readTime: '3 мин',
      type: 'Анонс'
    }
  ];

  const nextNews = () => {
    setCurrentIndex((prev) => (prev + 1) % newsItems.length);
  };

  const prevNews = () => {
    setCurrentIndex((prev) => (prev - 1 + newsItems.length) % newsItems.length);
  };

  const goToNews = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <section id="news" className="py-20 bg-white">
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
            Новини и{' '}
            <span className="bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent">
              Статии
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Информирайте се за най-новите тенденции в образованието и технологиите. 
            Полезни статии, съвети за родители и актуални новини от Акава Академи.
          </p>
        </motion.div>

        {/* News Carousel */}
        <div className="relative max-w-4xl mx-auto px-12 sm:px-0">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
              className="text-center"
            >
              <Link
                to={`/blog?category=${newsItems[currentIndex].categorySlug}`}
                className="block"
              >
                <div className="card p-6 sm:p-8 lg:p-12 hover:shadow-xl transition-shadow duration-300 cursor-pointer">
                  {/* News Icon */}
                  <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-full flex items-center justify-center mx-auto mb-6">
                    {React.createElement(newsItems[currentIndex].icon, { className: "w-8 h-8 text-white" })}
                  </div>

                  {/* Type Badge */}
                  <div className="inline-block bg-primary-100 text-primary-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
                    {newsItems[currentIndex].type}
                  </div>

                  {/* Title */}
                  <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
                    {newsItems[currentIndex].title}
                  </h3>

                  {/* Content */}
                  <p className="text-base sm:text-lg text-gray-700 mb-8 leading-relaxed">
                    {newsItems[currentIndex].content}
                  </p>

                  {/* Category and Meta Info */}
                  <div className="flex items-center justify-center space-x-6 text-sm text-gray-500">
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-primary-500 rounded-full"></div>
                      <span>{newsItems[currentIndex].category}</span>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Buttons */}
          <button
            onClick={prevNews}
            className="absolute left-0 md:left-4 top-1/2 transform -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-50 transition-colors duration-200 z-10"
            aria-label="Previous news"
          >
            <ChevronLeft className="w-5 h-5 md:w-6 md:h-6 text-gray-600" />
          </button>
          
          <button
            onClick={nextNews}
            className="absolute right-0 md:right-4 top-1/2 transform -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-50 transition-colors duration-200 z-10"
            aria-label="Next news"
          >
            <ChevronRight className="w-5 h-5 md:w-6 md:h-6 text-gray-600" />
          </button>
        </div>

        {/* Dots Indicator */}
        <div className="flex justify-center mt-8 space-x-2">
          {newsItems.map((_, index) => (
            <button
              key={index}
              onClick={() => goToNews(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentIndex
                  ? 'bg-primary-600 scale-125'
                  : 'bg-gray-300 hover:bg-gray-400'
              }`}
            />
          ))}
        </div>

        {/* News Categories Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16"
        >
          <div className="text-center">
            <div className="text-4xl font-bold text-primary-600 mb-2">50+</div>
            <div className="text-gray-600">Полезни статии</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-primary-600 mb-2">1000+</div>
            <div className="text-gray-600">Читатели</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-primary-600 mb-2">24/7</div>
            <div className="text-gray-600">Актуални новини</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default News; 
