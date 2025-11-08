import React from 'react';
import { motion } from 'framer-motion';
import { 
  Heart, 
  Target, 
  Users, 
  Award, 
  BookOpen, 
  Star,
  Rocket,
  GraduationCap
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const AboutUs: React.FC = () => {
  const { t } = useTranslation();
  
  const stats = [
    { number: '100+', label: t('aboutUs.stats.students'), icon: Users },
    { number: '2025', label: t('aboutUs.stats.founded'), icon: Award },
    { number: '15+', label: t('aboutUs.stats.courses'), icon: GraduationCap },
    { number: '100%', label: t('aboutUs.stats.quality'), icon: Heart }
  ];

  const team = [
    {
      name: t('aboutUs.team.founder.name'),
      role: t('aboutUs.team.founder.role'),
      description: t('aboutUs.team.founder.description'),
      image: '👩‍💼'
    },
    {
      name: t('aboutUs.team.teachers.name'),
      role: t('aboutUs.team.teachers.role'),
      description: t('aboutUs.team.teachers.description'),
      image: '👨‍🏫'
    }
  ];

  const milestones = [
    {
      year: t('aboutUs.timeline.milestones.founding.date'),
      title: t('aboutUs.timeline.milestones.founding.title'),
      description: t('aboutUs.timeline.milestones.founding.description')
    },
    {
      year: t('aboutUs.timeline.milestones.team.date'),
      title: t('aboutUs.timeline.milestones.team.title'),
      description: t('aboutUs.timeline.milestones.team.description')
    },
    {
      year: t('aboutUs.timeline.milestones.program.date'),
      title: t('aboutUs.timeline.milestones.program.title'),
      description: t('aboutUs.timeline.milestones.program.description')
    },
    {
      year: t('aboutUs.timeline.milestones.firstStudents.date'),
      title: t('aboutUs.timeline.milestones.firstStudents.title'),
      description: t('aboutUs.timeline.milestones.firstStudents.description')
    },
    {
      year: t('aboutUs.timeline.milestones.growth.date'),
      title: t('aboutUs.timeline.milestones.growth.title'),
      description: t('aboutUs.timeline.milestones.growth.description')
    },
    {
      year: t('aboutUs.timeline.milestones.future.date'),
      title: t('aboutUs.timeline.milestones.future.title'),
      description: t('aboutUs.timeline.milestones.future.description')
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary-600 via-primary-700 to-secondary-600 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-72 h-72 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-white rounded-full blur-3xl"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-block mb-6"
            >
              <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto">
                <Rocket className="w-10 h-10 text-white" />
              </div>
            </motion.div>
            
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">
              {t('aboutUs.title').split(' ')[0]}{' '}
              <span className="bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent">
                Akava Academy
              </span>
            </h1>
            <p className="text-xl lg:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed">
              {t('aboutUs.subtitle')}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-xl mb-4">
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-3xl lg:text-4xl font-bold text-gray-900 mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600 font-medium">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section id="mission" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                {t('aboutUs.story.title').split(' ')[0]}{' '}
                <span className="bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent">
                  {t('aboutUs.story.title').split(' ').slice(1).join(' ')}
                </span>
              </h2>
              <div className="space-y-4 text-gray-600 leading-relaxed text-lg">
                <p>{t('aboutUs.story.paragraph1')}</p>
                <p>{t('aboutUs.story.paragraph2')}</p>
                <p>{t('aboutUs.story.paragraph3')}</p>
                <p>{t('aboutUs.story.paragraph4')}</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="bg-gradient-to-br from-primary-500 to-secondary-500 rounded-2xl p-8 text-white">
                <BookOpen className="w-12 h-12 mb-6" />
                <h3 className="text-2xl font-bold mb-4">{t('aboutUs.mission.title')}</h3>
                <p className="text-white/90 text-lg leading-relaxed">
                  {t('aboutUs.mission.description')}
                </p>
              </div>
              
              <div className="mt-6 bg-white rounded-2xl p-8 shadow-lg border-2 border-gray-100">
                <Target className="w-12 h-12 text-primary-600 mb-6" />
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{t('aboutUs.vision.title')}</h3>
                <p className="text-gray-600 text-lg leading-relaxed">
                  {t('aboutUs.vision.description')}
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              {t('aboutUs.timeline.title').split(' ')[0]}{' '}
              <span className="bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent">
                {t('aboutUs.timeline.title').split(' ').slice(1).join(' ')}
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t('aboutUs.timeline.subtitle')}
            </p>
          </motion.div>

          <div className="relative">
            {/* Timeline line */}
            <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-primary-600 to-secondary-600 rounded-full"></div>

            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <motion.div
                  key={milestone.year}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className={`flex items-center gap-8 ${
                    index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                  } flex-col`}
                >
                  <div className={`flex-1 ${index % 2 === 0 ? 'lg:text-right' : 'lg:text-left'} text-center lg:text-left`}>
                    <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                      <div className="text-3xl font-bold text-primary-600 mb-2">
                        {milestone.year}
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">
                        {milestone.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        {milestone.description}
                      </p>
                    </div>
                  </div>

                  <div className="relative flex items-center justify-center lg:w-16">
                    <div className="w-12 h-12 bg-gradient-to-br from-primary-600 to-secondary-600 rounded-full flex items-center justify-center shadow-lg z-10">
                      <Star className="w-6 h-6 text-white" />
                    </div>
                  </div>

                  <div className="flex-1 hidden lg:block"></div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              {t('aboutUs.team.title').split(' ')[0]}{' '}
              <span className="bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent">
                {t('aboutUs.team.title').split(' ').slice(1).join(' ')}
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t('aboutUs.team.subtitle')}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border-2 border-gray-100"
              >
                <div className="text-6xl mb-6 text-center">
                  {member.image}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2 text-center">
                  {member.name}
                </h3>
                <div className="text-primary-600 font-semibold mb-4 text-center">
                  {member.role}
                </div>
                <p className="text-gray-600 leading-relaxed text-center">
                  {member.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary-600 to-secondary-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              {t('aboutUs.cta.title')}
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              {t('aboutUs.cta.description')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/courses">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-white text-primary-600 font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  {t('aboutUs.cta.viewCourses')}
                </motion.button>
              </Link>
              <Link to="/contact">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-transparent border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-primary-600 transition-all duration-300"
                >
                  {t('aboutUs.cta.contactUs')}
                </motion.button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;

