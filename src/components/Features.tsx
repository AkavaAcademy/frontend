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
import { useTranslation } from 'react-i18next';

const Features: React.FC = () => {
  const { t } = useTranslation();
  
  const features = [
    {
      icon: Code,
      title: t('features.items.interactive.title'),
      description: t('features.items.interactive.description'),
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Users,
      title: t('features.items.mentors.title'),
      description: t('features.items.mentors.description'),
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: Trophy,
      title: t('features.items.achievements.title'),
      description: t('features.items.achievements.description'),
      color: 'from-yellow-500 to-orange-500'
    },
    {
      icon: BookOpen,
      title: t('features.items.structured.title'),
      description: t('features.items.structured.description'),
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: Monitor,
      title: t('features.items.tools.title'),
      description: t('features.items.tools.description'),
      color: 'from-indigo-500 to-blue-500'
    },
    {
      icon: Heart,
      title: t('features.items.safe.title'),
      description: t('features.items.safe.description'),
      color: 'from-red-500 to-pink-500'
    },
    {
      icon: Zap,
      title: t('features.items.progress.title'),
      description: t('features.items.progress.description'),
      color: 'from-yellow-400 to-orange-400'
    },
    {
      icon: Shield,
      title: t('features.items.parent.title'),
      description: t('features.items.parent.description'),
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
            {t('features.title')}{' '}
            <span className="bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent">
              {t('features.titleHighlight')}
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t('features.desc')}
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
              {t('features.cta.title')}
            </h3>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              {t('features.cta.description')}
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-primary text-lg px-8 py-4"
            >
              {t('features.cta.button')}
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Features; 