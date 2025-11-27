import React from 'react';
import { motion } from 'framer-motion';
import { Home, ArrowLeft, Search } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const NotFound: React.FC = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-purple-50 py-12 px-4">
      <div className="max-w-2xl w-full text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* 404 Number */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-8"
          >
            <h1 className="text-9xl font-black text-transparent bg-clip-text bg-gradient-to-r from-primary-600 via-purple-600 to-pink-600">
              404
            </h1>
          </motion.div>

          {/* Error Message */}
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
          >
            {t('notFound.title')}
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="text-lg text-gray-600 mb-8"
          >
            {t('notFound.description')}
          </motion.p>

          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Link
              to="/"
              className="inline-flex items-center justify-center px-6 py-3 bg-primary-600 text-white font-semibold rounded-lg shadow-lg hover:bg-primary-700 transform hover:scale-105 transition-all duration-200"
            >
              <Home className="w-5 h-5 mr-2" />
              {t('notFound.goHome')}
            </Link>

            <button
              onClick={() => navigate(-1)}
              className="inline-flex items-center justify-center px-6 py-3 bg-white text-gray-700 font-semibold rounded-lg border-2 border-gray-300 shadow-md hover:bg-gray-50 transform hover:scale-105 transition-all duration-200"
            >
              <ArrowLeft className="w-5 h-5 mr-2" />
              {t('notFound.goBack')}
            </button>

            <Link
              to="/courses"
              className="inline-flex items-center justify-center px-6 py-3 bg-purple-600 text-white font-semibold rounded-lg shadow-lg hover:bg-purple-700 transform hover:scale-105 transition-all duration-200"
            >
              <Search className="w-5 h-5 mr-2" />
              {t('notFound.browseCourses')}
            </Link>
          </motion.div>

          {/* Helpful Links */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="mt-12 pt-8 border-t border-gray-200"
          >
            <p className="text-sm text-gray-500 mb-4">{t('notFound.popularLinks')}</p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                to="/courses"
                className="text-primary-600 hover:text-primary-700 font-medium transition-colors"
              >
                {t('nav.courses')}
              </Link>
              <Link
                to="/blog"
                className="text-primary-600 hover:text-primary-700 font-medium transition-colors"
              >
                {t('nav.blog')}
              </Link>
              <Link
                to="/contact"
                className="text-primary-600 hover:text-primary-700 font-medium transition-colors"
              >
                {t('nav.contact')}
              </Link>
              <Link
                to="/aboutUs"
                className="text-primary-600 hover:text-primary-700 font-medium transition-colors"
              >
                {t('nav.features')}
              </Link>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default NotFound;

