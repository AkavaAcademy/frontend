import React, { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, Play } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const Hero: React.FC = () => {
  const { t } = useTranslation();
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 300], [0, -50]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);


  return (
    <section id="home" className="hero relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Interactive Background with Mouse Parallax */}
      <div className="absolute inset-0 opacity-90">
        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-purple-900/20 to-pink-900/20"
          animate={{
            background: [
              'linear-gradient(45deg, rgba(59, 130, 246, 0.1), rgba(147, 51, 234, 0.1), rgba(236, 72, 153, 0.1))',
              'linear-gradient(135deg, rgba(236, 72, 153, 0.1), rgba(59, 130, 246, 0.1), rgba(34, 197, 94, 0.1))',
              'linear-gradient(225deg, rgba(34, 197, 94, 0.1), rgba(236, 72, 153, 0.1), rgba(59, 130, 246, 0.1))',
            ]
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      {/* Animated Particle System */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-white/30 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -100, 0],
              opacity: [0, 1, 0],
              scale: [0, 1, 0],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>


      {/* Dynamic Background Orbs */}
      <motion.div
        className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-yellow-400/20 to-orange-400/20 rounded-full blur-3xl"
        animate={{
          rotate: 360,
          scale: [1, 1.2, 1],
          x: [0, 50, 0],
          y: [0, -30, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        style={{
          x: mousePosition.x * 0.02,
          y: mousePosition.y * 0.02,
        }}
      />
      <motion.div
        className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-full blur-3xl"
        animate={{
          rotate: -360,
          scale: [1, 1.1, 1],
          x: [0, -40, 0],
          y: [0, 20, 0],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        style={{
          x: mousePosition.x * -0.01,
          y: mousePosition.y * -0.01,
        }}
      />
      <motion.div 
        className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        style={{ y }}
      >
        {/* Centered Hero Content */}
        <div className="flex flex-col items-center justify-center min-h-screen text-center">
          {/* Interactive Glow Effect */}
          <motion.div
            className="absolute inset-0 pointer-events-none"
            animate={{
              background: isHovering 
                ? 'radial-gradient(circle at 50% 50%, rgba(255, 255, 255, 0.1) 0%, transparent 70%)'
                : 'radial-gradient(circle at 50% 50%, rgba(255, 255, 255, 0.05) 0%, transparent 70%)'
            }}
            transition={{ duration: 0.5 }}
          />

          {/* Main Title with Interactive Effects */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="mb-8 relative"
            onHoverStart={() => setIsHovering(true)}
            onHoverEnd={() => setIsHovering(false)}
          >
            <motion.h1
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4, duration: 1.2, ease: "easeOut" }}
              className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black text-white mb-6 leading-tight relative"
              whileHover={{ scale: 1.02 }}
            >
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.8 }}
                className="block text-yellow-400 relative"
                whileHover={{ 
                  textShadow: "0 0 20px rgba(255, 255, 0, 0.5)",
                  scale: 1.05
                }}
              >
                {t('hero.title1')}
                <motion.span
                  className="absolute -top-2 -right-2 text-2xl"
                  animate={{ rotate: [0, 360] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                >
                  ✨
                </motion.span>
              </motion.span>
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.8 }}
                className="block text-white relative"
                whileHover={{ 
                  textShadow: "0 0 20px rgba(255, 255, 255, 0.3)",
                  scale: 1.05
                }}
              >
                {t('hero.title2')}
              </motion.span>
            </motion.h1>

            {/* Animated Underline */}
            <motion.div
              className="h-1 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full mx-auto"
              initial={{ width: 0 }}
              animate={{ width: "60%" }}
              transition={{ delay: 1.5, duration: 1, ease: "easeOut" }}
              whileHover={{ width: "80%" }}
            />
          </motion.div>

          {/* Interactive Tech Tags */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="mb-12 max-w-4xl"
          >
            {/* Interactive Tech Stack */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2, duration: 0.8 }}
              className="flex flex-wrap justify-center gap-4 mb-8"
            >
              {[
                t('hero.techStack.robotics'), 
                t('hero.techStack.programming'), 
                t('hero.techStack.design'), 
                t('hero.techStack.cybersecurity'), 
                t('hero.techStack.ai')
              ].map((tech, index) => (
                <motion.span
                  key={tech}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ 
                    delay: 1.4 + index * 0.15, 
                    duration: 0.6,
                    type: "spring",
                    stiffness: 200
                  }}
                  whileHover={{ scale: 1.1 }}
                  className="px-6 py-3 bg-white/20 backdrop-blur-md text-white rounded-2xl text-sm font-bold border border-white/40 hover:border-white/60 hover:bg-white/30 transition-all duration-300 cursor-pointer"
                >
                  {tech}
                </motion.span>
              ))}
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.8, duration: 0.8 }}
              className="relative"
            >
              <motion.p
                className="text-lg sm:text-xl lg:text-2xl text-white/90 font-medium"
                whileHover={{ scale: 1.05 }}
              >
                {t('hero.ageRange').split(' ').slice(0, -3).join(' ')}{' '}
                <motion.span 
                  className="text-yellow-300 font-bold relative"
                  whileHover={{ 
                    textShadow: "0 0 15px rgba(251, 191, 36, 0.5)",
                    scale: 1.1
                  }}
                >
                  {t('hero.ageText')}
                  <motion.span
                    className="absolute -top-1 -right-1 text-sm"
                    animate={{ 
                      scale: [1, 1.2, 1],
                      opacity: [0.7, 1, 0.7]
                    }}
                    transition={{ 
                      duration: 2, 
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  >
                    🎯
                  </motion.span>
                </motion.span>
              </motion.p>
            </motion.div>
          </motion.div>
          {/* Interactive Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-6 items-center"
          >
            <motion.div
              whileHover={{ scale: 1.05, y: -4 }}
              whileTap={{ scale: 0.95 }}
              className="group relative"
            >
              <motion.a
                href="/courses"
                className="btn-primary flex items-center justify-center px-10 py-5 text-xl font-bold rounded-xl shadow-2xl hover:shadow-yellow-500/25 transition-all duration-300 relative overflow-hidden"
                whileHover={{ 
                  boxShadow: "0 20px 40px rgba(251, 191, 36, 0.3)",
                  y: -2
                }}
              >
                <motion.span
                  className="relative z-10 flex items-center"
                  whileHover={{ x: -2 }}
                >
                  {t('hero.viewCourses')}
                  <motion.div
                    className="ml-3"
                    whileHover={{ x: 4, rotate: 15 }}
                    transition={{ duration: 0.2 }}
                  >
                    <ArrowRight className="w-6 h-6" />
                  </motion.div>
                </motion.span>
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-yellow-400/20 to-orange-400/20 rounded-xl"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: "0%" }}
                  transition={{ duration: 0.3 }}
                />
              </motion.a>
            </motion.div>
            
            <motion.button
              whileHover={{ scale: 1.05, y: -4 }}
              whileTap={{ scale: 0.95 }}
              className="group flex items-center justify-center px-10 py-5 bg-white/20 backdrop-blur-md text-white rounded-xl font-bold text-xl hover:bg-white/30 transition-all duration-300 border border-white/30 hover:border-white/50 shadow-xl relative overflow-hidden"
            >
              <motion.span
                className="relative z-10 flex items-center"
                whileHover={{ x: -2 }}
              >
                <motion.div
                  className="mr-3"
                  whileHover={{ scale: 1.2, rotate: 360 }}
                  transition={{ duration: 0.5 }}
                >
                  <Play className="w-6 h-6" />
                </motion.div>
                <span className="hidden sm:inline">{t('hero.freeTrial')}</span>
                <span className="sm:hidden">{t('hero.freeTrialShort')}</span>
              </motion.span>
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-xl"
                initial={{ x: "-100%" }}
                whileHover={{ x: "0%" }}
                transition={{ duration: 0.3 }}
              />
            </motion.button>
          </motion.div>
        </div>
      </motion.div>
      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 border-2 border-white/80 rounded-full flex justify-center bg-white/10"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1 h-3 bg-white rounded-full mt-2"
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero; 