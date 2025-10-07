import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Play, Users, Award, Clock } from 'lucide-react';

const Hero: React.FC = () => {
  const stats = [
    { icon: Users, value: '500+', label: 'Students' },
    { icon: Award, value: '50+', label: 'Certificates' },
    { icon: Clock, value: '1000+', label: 'Hours Taught' },
  ];

  return (
    <section id="home" className="hero relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0  opacity-90"></div>
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            rotate: 360,
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute -top-40 -right-40 w-80 h-80 bg-white/10 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            rotate: -360,
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute -bottom-40 -left-40 w-96 h-96 bg-secondary-500/20 rounded-full blur-3xl"
        />
      </div>
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-left"
          >
            {/* <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="inline-flex items-center px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-white text-sm font-medium mb-6"
            >
              <span className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></span>
              Empowering the next generation of tech innovators
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight"
            >
              Learn to Code,
              <span className="block bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent">
                Build the Future
              </span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="text-xl text-white/90 mb-8 leading-relaxed"
            >
              Join Akava IT Academy and discover the exciting world of programming. 
              Our interactive courses are designed specifically for children aged 8-16, 
              making learning fun and engaging.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-primary flex items-center justify-center group"
              >
                Start Learning
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center justify-center px-6 py-3 bg-white/20 backdrop-blur-sm text-white rounded-lg font-semibold hover:bg-white/30 transition-all duration-300"
              >
                <Play className="w-5 h-5 mr-2" />
                Watch Demo
              </motion.button>
            </motion.div> */}
          </motion.div>
          {/* Right Content - Stats */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 + index * 0.1, duration: 0.8 }}
                  className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center hover:bg-white/20 transition-all duration-300"
                >
                  <stat.icon className="w-8 h-8 text-cyan-700 mx-auto mb-3" />
                  <div className="text-3xl font-bold text-cyan-700 mb-1">{stat.value}</div>
                  <div className="text-cyan-700/80 text-sm">{stat.label}</div>
                </motion.div>
              ))}
            </div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="bg-white/10 backdrop-blur-sm rounded-xl p-6"
            >
              <h3 className="text-xl font-semibold text-cyan-700 mb-3">Why Choose Akava?</h3>
              <ul className="space-y-2 text-cyan-700/90">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-cyan-700 rounded-full mr-3"></span>
                  Age-appropriate curriculum (8-16 years)
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-cyan-700 rounded-full mr-3"></span>
                  Interactive, project-based learning
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-cyan-700 rounded-full mr-3"></span>
                  Certified instructors and mentors
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-cyan-700 rounded-full mr-3"></span>
                  Flexible online and in-person classes
                </li>
              </ul>
            </motion.div>
          </motion.div>
        </div>
      </div>
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
          className="w-6 h-10 border-2 border-cyan-700/50 rounded-full flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1 h-3 bg-cyan-700 rounded-full mt-2"
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero; 