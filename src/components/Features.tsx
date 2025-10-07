import React from 'react';
import { motion } from 'framer-motion';
import { 
  Code, 
  Users, 
  Trophy, 
  BookOpen, 
  Monitor, 
  Heart,
  Zap,
  Shield
} from 'lucide-react';

const Features: React.FC = () => {
  const features = [
    {
      icon: Code,
      title: 'Interactive Coding',
      description: 'Learn programming through fun, interactive exercises and real-world projects that make coding exciting.',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Users,
      title: 'Expert Mentors',
      description: 'Learn from certified instructors who specialize in teaching programming to children and young adults.',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: Trophy,
      title: 'Achievement System',
      description: 'Earn badges, certificates, and rewards as you progress through your coding journey.',
      color: 'from-yellow-500 to-orange-500'
    },
    {
      icon: BookOpen,
      title: 'Structured Curriculum',
      description: 'Follow our carefully designed learning path from basics to advanced programming concepts.',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: Monitor,
      title: 'Modern Tools',
      description: 'Use the latest development tools and platforms used by professional programmers.',
      color: 'from-indigo-500 to-blue-500'
    },
    {
      icon: Heart,
      title: 'Safe Environment',
      description: 'Learn in a secure, monitored environment designed specifically for young learners.',
      color: 'from-red-500 to-pink-500'
    },
    {
      icon: Zap,
      title: 'Fast Progress',
      description: 'Accelerate your learning with our proven methodology and personalized feedback.',
      color: 'from-yellow-400 to-orange-400'
    },
    {
      icon: Shield,
      title: 'Parent Dashboard',
      description: 'Track your child\'s progress and achievements through our comprehensive parent portal.',
      color: 'from-gray-600 to-gray-800'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  };

  return (
    <section id="features" className="py-20 bg-white">
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
            Why Choose{' '}
            <span className="bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent">
              Akava Academy?
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We combine cutting-edge technology with proven educational methods to create 
            an engaging learning experience that prepares children for the digital future.
          </p>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              variants={itemVariants}
              whileHover={{ y: -10 }}
              className="group"
            >
              <div className="card p-6 h-full">
                <div className={`w-12 h-12 bg-gradient-to-br ${feature.color} rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-primary-600 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-primary-50 to-secondary-50 rounded-2xl p-8 lg:p-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Ready to Start Your Coding Journey?
            </h3>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Join thousands of students who have already discovered the joy of programming 
              with Akava Academy. Start your free trial today!
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-primary text-lg px-8 py-4"
            >
              Start Free Trial
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Features; 