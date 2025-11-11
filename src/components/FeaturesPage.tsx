import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Award, Sparkles, Mail, BookOpen, Users, Clock, Star } from 'lucide-react';

const FeaturesPage: React.FC = () => {
  const [selectedMember, setSelectedMember] = useState<number | null>(null);

  const staffMembers = [
    {
      id: 1,
      name: 'Име на преподавател',
      role: 'Старши преподавател по програмиране',
      specialization: 'Python, JavaScript, Web Development',
      experience: '10+ години опит',
      bio: 'Страстен преподавател с богат опит в разработката на софтуер и образованието. Специализиран в модерни програмни езици и методологии.',
      achievements: ['Сертификат за педагогическа квалификация', 'Участник в национални образователни проекти'],
      email: 'teacher1@akava.academy',
      courses: ['Python за начинаещи', 'Уеб разработка', 'JavaScript Advanced']
    },
    {
      id: 2,
      name: 'Име на преподавател',
      role: 'Преподавател по роботика и AI',
      specialization: 'Robotics, AI, Machine Learning',
      experience: '8+ години опит',
      bio: 'Експерт в областта на роботиката и изкуствения интелект. Преподава с иновативни методи и практически проекти.',
      achievements: ['Победител в национални състезания по роботика', 'Автор на образователни материали'],
      email: 'teacher2@akava.academy',
      courses: ['LEGO роботика', 'Въведение в AI', 'Machine Learning за ученици']
    },
    {
      id: 3,
      name: 'Име на преподавател',
      role: 'Преподавател по дизайн и креативност',
      specialization: 'UI/UX Design, 3D Modeling, Digital Art',
      experience: '7+ години опит',
      bio: 'Креативен професионалист с дълбоки познания в дигиталния дизайн. Помага на учениците да развият своята креативност.',
      achievements: ['Признат дизайнер на годината', 'Работил с водещи технологични компании'],
      email: 'teacher3@akava.academy',
      courses: ['Уеб дизайн', '3D моделиране', 'Дигитално изкуство']
    },
    {
      id: 4,
      name: 'Име на преподавател',
      role: 'Преподавател по мобилни технологии',
      specialization: 'Mobile Apps, React Native, Flutter',
      experience: '6+ години опит',
      bio: 'Специалист в разработката на мобилни приложения с фокус върху модерни технологии. Преподава с практически примери и реални проекти.',
      achievements: ['Публикувани приложения в App Store и Google Play', 'Ментор в стартъп акселератори'],
      email: 'teacher4@akava.academy',
      courses: ['Мобилни приложения', 'React Native', 'Flutter Development']
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary-600 to-secondary-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent">
                За нас
              </span>
            </h1>
            <p className="text-xl lg:text-2xl text-white/90 max-w-3xl mx-auto">
              Опознай екипа зад Акава Академи - преподаватели, обединени от мисията да вдъхновяват, обучават и развиват бъдещи професионалисти.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Teaching Staff Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Нашият екип от преподаватели
            </h2>
          </motion.div>

          {/* Staff Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {staffMembers.map((member, index) => (
              <motion.div
                key={member.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                onClick={() => setSelectedMember(selectedMember === member.id ? null : member.id)}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer border-2 border-transparent hover:border-blue-400 relative overflow-hidden group"
              >
                {/* Decorative gradient background */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-100 to-purple-100 rounded-full -mr-16 -mt-16 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                <div className="relative z-10">
                  {/* Avatar placeholder */}
                  <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center text-white text-3xl font-bold shadow-lg group-hover:scale-110 transition-transform duration-300">
                    {member.name.charAt(0)}
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-2 text-center group-hover:text-blue-600 transition-colors">
                    {member.name}
                  </h3>
                  
                  <p className="text-sm text-blue-600 font-semibold mb-3 text-center">
                    {member.role}
                  </p>
                  
                  <div className="flex items-center justify-center gap-2 mb-3 text-xs text-gray-500">
                    <Clock className="w-4 h-4" />
                    <span>{member.experience}</span>
                  </div>
                  
                  <div className="flex items-center justify-center gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  
                  <div className="text-center">
                    <p className="text-sm text-gray-600 mb-3 line-clamp-2">
                      {member.specialization}
                    </p>
                    
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="text-blue-600 hover:text-blue-700 font-semibold text-sm flex items-center justify-center gap-2 mx-auto"
                    >
                      {selectedMember === member.id ? 'По-малко' : 'Научи повече'}
                      <Sparkles className={`w-4 h-4 transition-transform duration-300 ${selectedMember === member.id ? 'rotate-180' : ''}`} />
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Expanded Member Details */}
          {selectedMember && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="mb-12"
            >
              {staffMembers
                .filter(member => member.id === selectedMember)
                .map((member) => (
                  <motion.div
                    key={member.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-8 shadow-xl border-2 border-blue-200"
                  >
                    <div className="grid md:grid-cols-2 gap-8">
                      {/* Left Column */}
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                          <Users className="w-6 h-6 text-blue-600" />
                          За преподавателя
                        </h3>
                        <p className="text-gray-700 leading-relaxed mb-6">
                          {member.bio}
                        </p>
                        
                        <div className="mb-6">
                          <h4 className="text-lg font-semibold text-gray-900 mb-3 flex items-center gap-2">
                            <Award className="w-5 h-5 text-yellow-500" />
                            Постижения
                          </h4>
                          <ul className="space-y-2">
                            {member.achievements.map((achievement, idx) => (
                              <li key={idx} className="flex items-start gap-2 text-gray-700">
                                <span className="text-blue-600 mt-1">•</span>
                                <span>{achievement}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                      
                      {/* Right Column */}
                      <div>
                        <h4 className="text-lg font-semibold text-gray-900 mb-3 flex items-center gap-2">
                          <BookOpen className="w-5 h-5 text-purple-600" />
                          Преподавани курсове
                        </h4>
                        <div className="flex flex-wrap gap-2 mb-6">
                          {member.courses.map((course, idx) => (
                            <span
                              key={idx}
                              className="px-4 py-2 bg-white rounded-lg text-sm font-medium text-gray-700 shadow-sm border border-gray-200"
                            >
                              {course}
                            </span>
                          ))}
                        </div>
                        
                        <div className="bg-white rounded-lg p-4 shadow-sm">
                          <h4 className="text-lg font-semibold text-gray-900 mb-3">
                            Свържете се
                          </h4>
                          <a
                            href={`mailto:${member.email}`}
                            className="flex items-center gap-2 text-blue-600 hover:text-blue-700 transition-colors"
                          >
                            <Mail className="w-5 h-5" />
                            <span>{member.email}</span>
                          </a>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
            </motion.div>
          )}

          {/* Why Choose Our Teachers Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white"
          >
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <GraduationCap className="w-12 h-12 mx-auto mb-4 text-yellow-300" />
                <h3 className="text-xl font-bold mb-2">Високо квалифицирани</h3>
                <p className="text-white/90">Всички наши преподаватели имат академична подготовка и сертификати</p>
              </div>
              <div className="text-center">
                <Users className="w-12 h-12 mx-auto mb-4 text-yellow-300" />
                <h3 className="text-xl font-bold mb-2">Опитни професионалисти</h3>
                <p className="text-white/90">Години опит в образованието и индустрията</p>
              </div>
              <div className="text-center">
                <Sparkles className="w-12 h-12 mx-auto mb-4 text-yellow-300" />
                <h3 className="text-xl font-bold mb-2">Индивидуален подход</h3>
                <p className="text-white/90">Персонализирано обучение, адаптирано към нуждите и темпото на всеки ученик</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default FeaturesPage;
