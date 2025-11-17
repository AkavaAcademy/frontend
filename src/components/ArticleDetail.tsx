import React, { useMemo } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Clock, Calendar, User, Tag, Share2, BookOpen } from 'lucide-react';
import { articles } from '../data/articles';

const ArticleDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const articleId = id ? parseInt(id) : null;

  // Find article directly from local articles
  const article = useMemo(() => {
    return articleId ? articles.find(a => a.id === articleId) || null : null;
  }, [articleId]);

  // Find related articles
  const relatedArticles = useMemo(() => {
    if (!article) return [];
    return articles
      .filter(a => 
        a.id !== article.id && 
        (a.categorySlug === article.categorySlug || 
         a.tags?.some(tag => article.tags?.includes(tag)))
      )
      .slice(0, 3);
  }, [article]);

  const handleShare = () => {
    if (navigator.share && article) {
      navigator.share({
        title: article.title,
        text: article.excerpt,
        url: window.location.href,
      }).catch(console.error);
    } else {
      // Fallback: copy to clipboard
      navigator.clipboard.writeText(window.location.href);
      alert('Линкът е копиран в клипборда!');
    }
  };

  if (!article) {
    return (
      <div className="min-h-screen bg-gray-50 pt-20 flex items-center justify-center">
        <div className="text-center max-w-md mx-auto px-4">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Статията не е намерена</h2>
          <p className="text-gray-600 mb-6">Статията, която търсите, не съществува или е премахната.</p>
          <Link to="/blog" className="btn-primary inline-flex items-center">
            <ArrowLeft className="w-5 h-5 mr-2" />
            Назад към блога
          </Link>
        </div>
      </div>
    );
  }

  const categoryColors: Record<string, string> = {
    'useful-articles': 'from-blue-500 to-cyan-500',
    'parent-tips': 'from-green-500 to-emerald-500',
    'academy-news': 'from-purple-500 to-pink-500',
    'digital-skills': 'from-orange-500 to-red-500',
  };

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      {/* Header with Back Button */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <Link
            to="/blog"
            className="inline-flex items-center text-gray-600 hover:text-primary-600 transition-colors"
          >
            <ArrowLeft className="w-5 h-5 mr-2 flex-shrink-0" />
            Назад към блога
          </Link>
        </div>
      </div>

      {/* Article Content */}
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Article Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          {/* Category Badge */}
          <div className="mb-4">
            <span className={`inline-block bg-gradient-to-r ${categoryColors[article.categorySlug] || 'from-gray-500 to-gray-600'} text-white px-4 py-2 rounded-full text-sm font-medium`}>
              {article.category}
            </span>
          </div>

          {/* Title */}
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            {article.title}
          </h1>

          {/* Meta Information */}
          <div className="flex flex-wrap items-center gap-6 text-gray-600 mb-6">
            <div className="flex items-center">
              <Calendar className="w-5 h-5 mr-2 text-primary-600" />
              <span>{article.date}</span>
            </div>
            <div className="flex items-center">
              <Clock className="w-5 h-5 mr-2 text-primary-600" />
              <span>{article.readTime}</span>
            </div>
            {article.author && (
              <div className="flex items-center">
                <User className="w-5 h-5 mr-2 text-primary-600" />
                <span>{article.author}</span>
              </div>
            )}
            <button
              onClick={handleShare}
              className="flex items-center text-primary-600 hover:text-primary-700 transition-colors"
            >
              <Share2 className="w-5 h-5 mr-2" />
              Сподели
            </button>
          </div>

          {/* Featured Image */}
          <div className="relative h-96 mb-8 rounded-2xl overflow-hidden shadow-xl">
            <img
              src={article.image}
              alt={article.title}
              className="w-full h-full object-cover"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.src = 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=1200&h=600&fit=crop';
              }}
            />
          </div>
        </motion.div>

        {/* Article Body */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-white rounded-2xl shadow-lg p-8 lg:p-12 mb-12"
        >
          {/* Excerpt */}
          <div className="text-xl text-gray-700 leading-relaxed mb-8 font-medium border-l-4 border-primary-500 pl-6">
            {article.excerpt}
          </div>

          {/* Article Content */}
          <div className="prose prose-lg max-w-none prose-headings:text-gray-900 prose-headings:font-bold prose-h2:text-2xl prose-h2:mt-8 prose-h2:mb-4 prose-h3:text-xl prose-h3:mt-6 prose-h3:mb-3 prose-p:text-gray-700 prose-p:leading-relaxed prose-p:mb-4 prose-ul:list-disc prose-ul:pl-6 prose-ul:mb-4 prose-ol:list-decimal prose-ol:pl-6 prose-ol:mb-4 prose-li:mb-2 prose-strong:text-gray-900 prose-strong:font-semibold">
            {article.content ? (
              <div 
                className="article-content text-gray-700 leading-relaxed"
                dangerouslySetInnerHTML={{ __html: article.content }}
              />
            ) : (
              <div className="text-gray-700 leading-relaxed space-y-6">
                <p className="text-lg">
                  {article.excerpt}
                </p>
                <div className="space-y-4">
                  <p>
                    В днешния дигитален свят, където технологиите се развиват с невероятна скорост, образованието на децата в областта на програмирането и дигиталните умения става все по-важно. Тази статия разглежда ключовите аспекти и предоставя ценна информация за родители и ученици.
                  </p>
                  <p>
                    Чрез систематично обучение и практика, децата могат да развият критично мислене, логическо разсъждение и креативност. Тези умения са от съществено значение не само за бъдещата им кариера, но и за личностното им развитие.
                  </p>
                  <p>
                    Важно е да се подчертае, че обучението трябва да бъде адаптирано към възрастта и интересите на всяко дете. С правилния подход и подкрепа, всяко дете може да постигне значителен прогрес в дигиталните умения.
                  </p>
                </div>
              </div>
            )}
          </div>

          {/* Tags */}
          {article.tags && article.tags.length > 0 && (
            <div className="mt-8 pt-8 border-t border-gray-200">
              <div className="flex flex-wrap items-center gap-2">
                <Tag className="w-5 h-5 text-gray-500 mr-2" />
                {article.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm hover:bg-gray-200 transition-colors"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </div>
          )}
        </motion.div>

        {/* Related Articles */}
        {relatedArticles.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
              <BookOpen className="w-8 h-8 mr-3 text-primary-600" />
              Свързани статии
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedArticles.map((relatedArticle) => (
                <Link
                  key={relatedArticle.id}
                  to={`/blog/article/${relatedArticle.id}`}
                  className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group"
                >
                  <div className="relative h-40 overflow-hidden">
                    <img
                      src={relatedArticle.image}
                      alt={relatedArticle.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.src = 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=400&h=250&fit=crop';
                      }}
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-primary-600 transition-colors line-clamp-2">
                      {relatedArticle.title}
                    </h3>
                    <p className="text-sm text-gray-600 line-clamp-2">
                      {relatedArticle.excerpt}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </motion.div>
        )}

        {/* Navigation Buttons */}
        <div className="flex justify-between items-center pt-8 border-t border-gray-200">
          <Link
            to="/blog"
            className="btn-primary inline-flex items-center"
          >
            <ArrowLeft className="w-5 h-5 mr-2 flex-shrink-0" />
            Назад към блога
          </Link>
          <button
            onClick={handleShare}
            className="px-6 py-3 bg-gray-100 text-gray-700 rounded-lg font-semibold hover:bg-gray-200 transition-colors flex items-center"
          >
            <Share2 className="w-5 h-5 mr-2" />
            Сподели статията
          </button>
        </div>
      </article>
    </div>
  );
};

export default ArticleDetail;

