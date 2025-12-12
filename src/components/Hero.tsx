import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, BookOpen, BadgeCheck, GraduationCap } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section
      id="home"
      className="hero relative min-h-screen flex items-start justify-center overflow-hidden pt-20 sm:pt-24 md:pt-28 lg:pt-32 pb-8 md:pb-12"
    >
      {/* Static Background */}
      <div className="absolute inset-0 opacity-90">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-purple-900/20 to-pink-900/20" />
      </div>

      {/* Static Background Orbs */}
      <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-yellow-400/20 to-orange-400/20 rounded-full blur-3xl overflow-hidden" />
      <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-full blur-3xl overflow-hidden" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        {/* Hero Content - Top aligned with proper spacing */}
        <div className="flex flex-col items-center justify-start text-center pt-4 sm:pt-6 md:pt-8">
          {/* Main Title */}
          <motion.div 
            className="mb-4 sm:mb-6 md:mb-8 relative z-20 w-full"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h1 className="mb-3 sm:mb-4 md:mb-6 leading-tight">
              <motion.span 
                className="block text-2xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-7xl font-black mb-2 sm:mb-3 md:mb-4 relative z-20 text-white px-2"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                АКАВА АКАДЕМИ
              </motion.span>
              <motion.span 
                className="block text-white text-base sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl font-bold relative z-20 px-2"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                Център за професионално и дигитално обучение
              </motion.span>
            </h1>
          </motion.div>

          {/* Subheading - Glass Panels Layout */}
          <motion.div 
            className="mb-4 sm:mb-6 md:mb-8 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-3 sm:gap-4 md:gap-4 w-full px-2"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <motion.div 
              className="group text-base sm:text-lg text-white font-medium px-4 md:px-6 py-3 md:py-5 bg-white/10 backdrop-blur-xl rounded-2xl border border-white/30 shadow-2xl hover:bg-white/15 transition-all duration-300 flex flex-col relative"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              whileHover={{ y: -5 }}
            >
              <div className="absolute top-0 left-0 right-0 h-px bg-white/20"></div>
              <div className="flex justify-center mb-2 md:mb-3">
                <BookOpen className="w-6 h-6 md:w-8 md:h-8 transition-all duration-300 group-hover:scale-125 group-hover:text-yellow-300" />
              </div>
              <h3 className="text-white font-extrabold text-base sm:text-xl mb-2 md:mb-3 transition-colors duration-200 group-hover:text-yellow-300 text-center">
                Краткосрочни обучения
              </h3>
              <p className="flex-grow text-white/90 text-xs sm:text-base">Програми за ученици и възрастни, които искат да развият нови дигитални и технологични умения.</p>
              <div className="mt-2 md:mt-4 flex justify-end">
                <a href="/courses?category=short" className="inline-flex items-center px-3 md:px-4 py-1.5 md:py-2 rounded-lg text-xs md:text-sm font-semibold text-yellow-200 border border-yellow-400/60 hover:text-yellow-100 hover:border-yellow-300 bg-transparent hover:bg-yellow-500/30 transition shadow-md hover:shadow-yellow-400/40">
                  Научи повече
                </a>
              </div>
            </motion.div>
            <motion.div 
              className="group text-base sm:text-lg text-white font-medium px-4 md:px-6 py-3 md:py-5 bg-white/10 backdrop-blur-xl rounded-2xl border border-white/30 shadow-2xl hover:bg-white/15 transition-all duration-300 flex flex-col relative"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              whileHover={{ y: -5 }}
            >
              <div className="absolute top-0 left-0 right-0 h-px bg-white/20"></div>
              <div className="flex justify-center mb-2 md:mb-3">
                <BadgeCheck className="w-6 h-6 md:w-8 md:h-8 transition-all duration-300 group-hover:scale-125 group-hover:text-yellow-300" />
              </div>
              <h3 className="text-white font-extrabold text-base sm:text-xl mb-2 md:mb-3 transition-colors duration-200 group-hover:text-yellow-300 text-center">
                Лицензирани професионални обучения
              </h3>
              <p className="flex-grow text-white/90 text-xs sm:text-base">Придобиване на квалификация и издаване на свидетелство или удостоверение.</p>
              <div className="mt-2 md:mt-4 flex justify-end">
                <a href="/courses?category=licensed" className="inline-flex items-center px-3 md:px-4 py-1.5 md:py-2 rounded-lg text-xs md:text-sm font-semibold text-yellow-200 border border-yellow-400/60 hover:text-yellow-100 hover:border-yellow-300 bg-transparent hover:bg-yellow-500/30 transition shadow-md hover:shadow-yellow-400/40">
                  Научи повече
                </a>
              </div>
            </motion.div>
            <motion.div 
              className="group text-base sm:text-lg text-white font-medium px-4 md:px-6 py-3 md:py-5 bg-white/10 backdrop-blur-xl rounded-2xl border border-white/30 shadow-2xl hover:bg-white/15 transition-all duration-300 flex flex-col relative"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              whileHover={{ y: -5 }}
            >
              <div className="absolute top-0 left-0 right-0 h-px bg-white/20"></div>
              <div className="flex justify-center mb-2 md:mb-3">
                <GraduationCap className="w-6 h-6 md:w-8 md:h-8 transition-all duration-300 group-hover:scale-125 group-hover:text-yellow-300" />
              </div>
              <h3 className="text-white font-extrabold text-base sm:text-xl mb-2 md:mb-3 transition-colors duration-200 group-hover:text-yellow-300 text-center">
                Квалификация за преподаватели
              </h3>
              <p className="flex-grow text-white/90 text-xs sm:text-base">Програми за надграждане на педагогически и дигитални компетентности.</p>
              <div className="mt-2 md:mt-4 flex justify-end">
                <a href="/courses?category=teachers" className="inline-flex items-center px-3 md:px-4 py-1.5 md:py-2 rounded-lg text-xs md:text-sm font-semibold text-yellow-200 border border-yellow-400/60 hover:text-yellow-100 hover:border-yellow-300 bg-transparent hover:bg-yellow-500/30 transition shadow-md hover:shadow-yellow-400/40">
                  Научи повече
                </a>
              </div>
            </motion.div>
          </motion.div>

          {/* Action Buttons */}
          <motion.div 
            className="flex justify-center w-full px-2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
          >
            <motion.a
              href="/courses"
              className="flex items-center justify-center px-4 sm:px-5 md:px-6 py-2 sm:py-2.5 md:py-3 text-sm sm:text-base md:text-lg font-bold rounded-xl bg-blue-500 text-white hover:bg-blue-600 transition-all duration-300 shadow-2xl hover:shadow-blue-500/60 relative overflow-hidden"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="relative z-10 flex items-center">
                  Виж всички курсове
                <ArrowRight className="w-4 h-4 sm:w-4 md:w-5 md:h-5 ml-2" />
              </span>
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero; 
