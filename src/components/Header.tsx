import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, User, LogOut, ChevronDown, BookOpen, Briefcase, GraduationCap, BadgeCheck } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';
import LanguageSwitcher from './LanguageSwitcher';
import { useTranslation } from 'react-i18next';
import akavaLogo from '../assets/akava-logo-small.png';
import { Link, useLocation } from 'react-router-dom';

const Header: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [hoveredNavItem, setHoveredNavItem] = useState<string | null>(null);
  const { user, isAuthenticated, logout } = useAuth();
  const { t } = useTranslation();
  const location = useLocation();

  const courseCategories = [
    { 
      id: 'short', 
      name: 'Краткосрочни обучения', 
      href: '/courses?category=short',
      icon: BookOpen,
      description: 'Програми за ученици и възрастни'
    },
    { 
      id: 'licensed', 
      name: 'Лицензирани обучения', 
      href: '/courses?category=licensed',
      icon: BadgeCheck,
      description: 'Професионална квалификация'
    },
    { 
      id: 'teachers', 
      name: 'За преподаватели', 
      href: '/courses?category=teachers',
      icon: GraduationCap,
      description: 'Повишаване на квалификацията'
    },
  ];

  const navItems = [
    { name: t('nav.home'), href: '/', isRoute: true },
    { name: t('nav.features'), href: '/aboutUs', isRoute: true },
    { name: t('nav.courses'), href: '/courses', isRoute: true, hasDropdown: true },
    { name: t('nav.blog'), href: '/blog', isRoute: true },
    { name: t('nav.contact'), href: '/contact', isRoute: true },
  ];

  const handleLogout = () => {
    logout();
    setIsMobileMenuOpen(false);
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300
        bg-gradient-to-r from-blue-100 via-blue-50 to-white/90 border-b border-blue-200 shadow-md
      `}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-1">
          {/* Logo */}
          <motion.div whileHover={{ scale: 1.05 }}>
            <Link
              to="/"
              className="flex items-center space-x-2"
            >
              <img
                src={akavaLogo}
                alt="Akava IT Academy Logo"
                className="h-20 md:h-28 object-contain drop-shadow-md"
              />
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            {navItems.map((item) => (
              <div
                key={item.name}
                className="relative"
                onMouseEnter={() => item.hasDropdown && setHoveredNavItem(item.name)}
                onMouseLeave={() => setHoveredNavItem(null)}
              >
                <motion.div 
                  whileHover={{ y: -2 }}
                  className="relative"
                >
                  <Link
                    to={item.href}
                    className={`relative flex items-center space-x-1 text-gray-700 hover:text-primary-600 font-medium transition-colors duration-200 py-2 ${
                      (location.pathname === item.href || (item.href === '/courses' && location.pathname.startsWith('/course'))) ? 'text-primary-600' : ''
                    }`}
                  >
                    <span>{item.name}</span>
                    {item.hasDropdown && (
                      <ChevronDown 
                        className={`w-4 h-4 transition-transform duration-200 ${
                          hoveredNavItem === item.name ? 'rotate-180' : ''
                        }`} 
                      />
                    )}
                  </Link>
                </motion.div>

                {/* Dropdown Menu for Courses */}
                {item.hasDropdown && (
                  <AnimatePresence>
                    {hoveredNavItem === item.name && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        transition={{ duration: 0.2 }}
                        className="absolute top-full left-0 mt-2 w-80 bg-white rounded-xl shadow-2xl border border-gray-200 overflow-hidden z-50"
                        onMouseEnter={() => setHoveredNavItem(item.name)}
                        onMouseLeave={() => setHoveredNavItem(null)}
                      >
                        <div className="p-2">
                          {courseCategories.map((category) => {
                            const IconComponent = category.icon;
                            return (
                              <motion.div
                                key={category.id}
                                whileHover={{ x: 4 }}
                                transition={{ duration: 0.2 }}
                              >
                                <Link
                                  to={category.href}
                                  className="flex items-start space-x-3 p-3 rounded-lg hover:bg-primary-50 transition-colors group"
                                  onClick={() => setHoveredNavItem(null)}
                                >
                                  <div className="w-10 h-10 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                                    <IconComponent className="w-5 h-5 text-white" />
                                  </div>
                                  <div className="flex-1 min-w-0">
                                    <p className="font-semibold text-gray-900 group-hover:text-primary-600 transition-colors">
                                      {category.name}
                                    </p>
                                    <p className="text-sm text-gray-500 mt-0.5">
                                      {category.description}
                                    </p>
                                  </div>
                                </Link>
                              </motion.div>
                            );
                          })}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                )}
              </div>
            ))}
          </nav>

          {/* Language Switcher + User Menu / CTA Button */}
          <div className="hidden md:flex items-center space-x-4">
            <LanguageSwitcher />
            {isAuthenticated ? (
              <div className="flex items-center space-x-3">
                <div className="flex items-center space-x-2 bg-white/20 backdrop-blur-sm rounded-lg px-3 py-1">
                  <User className="w-4 h-4 text-gray-600" />
                  <span className="text-sm font-medium text-gray-700">
                    {user?.name}
                  </span>
                </div>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={handleLogout}
                  className="flex items-center space-x-2 text-gray-600 hover:text-red-600 transition-colors"
                >
                  <LogOut className="w-4 h-4" />
                  <span className="text-sm font-medium">{t('nav.logout')}</span>
                </motion.button>
              </div>
            ) : (
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-primary"
              >
                {t('nav.getStarted')}
              </motion.button>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-1 rounded-lg hover:bg-gray-100 transition-colors"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden py-2 border-t border-gray-200"
          >
            <nav className="flex flex-col space-y-2">
              {navItems.map((item) => (
                <motion.div
                  key={item.name}
                  whileTap={{ scale: 0.98 }}
                >
                  <Link
                    to={item.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`block px-4 py-3 rounded-lg font-medium transition-all duration-200 ${
                      location.pathname === item.href
                        ? 'bg-primary-50 text-primary-600 border-l-4 border-primary-600'
                        : 'text-gray-700 hover:text-primary-600 hover:bg-gray-50'
                    }`}
                  >
                    {item.name}
                  </Link>
                </motion.div>
              ))}
              <div className="flex items-center justify-between mt-2">
                <LanguageSwitcher />
              </div>
              {isAuthenticated ? (
                <div className="pt-2 border-t border-gray-200">
                  <div className="flex items-center space-x-2 mb-4">
                    <User className="w-4 h-4 text-gray-600" />
                    <span className="text-sm font-medium text-gray-700">
                      {user?.name}
                    </span>
                  </div>
                  <button
                    onClick={handleLogout}
                    className="flex items-center space-x-2 text-gray-600 hover:text-red-600 transition-colors"
                  >
                    <LogOut className="w-4 h-4" />
                    <span className="text-sm font-medium">{t('nav.logout')}</span>
                  </button>
                </div>
              ) : (
                <button className="btn-primary w-full mt-2">
                  {t('nav.getStarted')}
                </button>
              )}
            </nav>
          </motion.div>
        )}
      </div>
    </motion.header>
  );
};

export default Header; 