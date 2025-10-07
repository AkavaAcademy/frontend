import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  Check, 
  Star, 
  Clock, 
  Users, 
  BookOpen,
  Code,
  Gamepad2,
  Globe,
  Smartphone,
  Loader
} from 'lucide-react';
import { coursesAPI } from '../services/api';

interface Course {
  id: number;
  title: string;
  description: string;
  duration: string;
  price: number;
  difficulty: string;
  category: string;
  features: string[];
  formatted_price: string;
  created_at: string;
  updated_at: string;
}

const Courses: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [courses, setCourses] = useState<Course[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const categories = [
    { id: 'all', name: 'All Courses' },
    { id: 'beginner', name: 'Beginner' },
    { id: 'intermediate', name: 'Intermediate' },
    { id: 'advanced', name: 'Advanced' },
  ];

  const getIconForCategory = (category: string) => {
    switch (category) {
      case 'programming':
        return Code;
      case 'web':
        return Globe;
      case 'gaming':
        return Gamepad2;
      case 'mobile':
        return Smartphone;
      case 'data':
        return BookOpen;
      default:
        return Code;
    }
  };

  useEffect(() => {
    fetchCourses();
  }, []);

  const fetchCourses = async () => {
    try {
      setLoading(true);
      const response = await coursesAPI.getAll();
      setCourses(response.data);
      setError(null);
    } catch (err: any) {
      setError(err.message || 'Failed to fetch courses');
    } finally {
      setLoading(false);
    }
  };

  const filteredCourses = selectedCategory === 'all' 
    ? courses 
    : courses.filter(course => course.difficulty === selectedCategory);

  if (loading) {
    return (
      <section id="courses" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Loader className="w-8 h-8 animate-spin mx-auto mb-4" />
            <p className="text-gray-600">Loading courses...</p>
          </div>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section id="courses" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-red-600 mb-4">{error}</p>
            <button 
              onClick={fetchCourses}
              className="btn-primary"
            >
              Try Again
            </button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="courses" className="py-20 bg-gray-50">
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
            Explore Our{' '}
            <span className="bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent">
              Courses
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From beginner to advanced, our courses are designed to grow with your child's 
            programming skills and interests.
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                selectedCategory === category.id
                  ? 'bg-primary-600 text-white shadow-lg'
                  : 'bg-white text-gray-600 hover:bg-gray-100'
              }`}
            >
              {category.name}
            </button>
          ))}
        </motion.div>

        {/* Courses Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredCourses.map((course, index) => {
            const IconComponent = getIconForCategory(course.category);
            return (
              <motion.div
                key={course.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                className="group relative"
              >
                <div className="card p-6 h-full">
                  {/* Index and ID */}
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-semibold text-primary-600 bg-primary-50 rounded-full px-3 py-1">
                      Course #{index + 1} (ID: {course.id})
                    </span>
                  </div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-lg flex items-center justify-center">
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex items-center space-x-1">
                      <Star className="w-4 h-4 text-yellow-400 fill-current" />
                      <span className="text-sm font-medium text-gray-600">4.8</span>
                    </div>
                  </div>

                  <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-primary-600 transition-colors">
                    {course.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {course.description}
                  </p>

                  <div className="flex items-center justify-between mb-4 text-sm text-gray-500">
                    <div className="flex items-center">
                      <Clock className="w-4 h-4 mr-1" />
                      {course.duration}
                    </div>
                    <div className="flex items-center">
                      <Users className="w-4 h-4 mr-1" />
                      120 students
                    </div>
                  </div>

                  <ul className="space-y-2 mb-6">
                    {course.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-600">
                        <Check className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <span className="text-2xl font-bold text-gray-900">{course.formatted_price}</span>
                      <span className="text-lg text-gray-400 line-through">${(course.price * 1.5).toFixed(0)}</span>
                    </div>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="btn-primary"
                    >
                      Enroll Now
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Discount Table Section */}
        <motion.section
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-20 bg-[#1a2736] rounded-2xl p-8 shadow-xl text-white max-w-4xl mx-auto"
        >
          <h3 className="text-3xl font-bold mb-2 text-center">Възможности за отстъпки</h3>
          <p className="text-lg text-blue-100 mb-8 text-center">
            Спестете повече, когато инвестирате в повече знания!<br />
            Възползвайте се от нашите гъвкави условия и запишете вашето дете с преференциална цена.
          </p>
          <div className="overflow-x-auto">
            <table className="min-w-full border-separate border-spacing-y-2">
              <thead className="sticky top-0 z-10">
                <tr className="text-blue-100 text-lg bg-[#1a2736]">
                  <th className="px-4 py-2 font-semibold text-left">Вид отстъпка</th>
                  <th className="px-4 py-2 font-semibold text-left">Размер</th>
                  <th className="px-4 py-2 font-semibold text-left">Условия за получаване</th>
                  <th className="px-4 py-2 font-semibold text-left">Може ли да се комбинира?</th>
                </tr>
              </thead>
              <motion.tbody
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={{
                  hidden: {},
                  visible: {
                    transition: { staggerChildren: 0.15 }
                  }
                }}
              >
                {[
                  {
                    type: 'Ранно записване',
                    size: '10%',
                    condition: 'Записване до <span class="font-bold">един месец преди началото</span>',
                    combinable: true,
                    note: 'Да, само със семейната отстъпка',
                  },
                  {
                    type: 'Семейна отстъпка',
                    size: '5%',
                    condition: 'Две или повече деца от едно семейство',
                    combinable: true,
                    note: 'Да, само с ранното записване',
                  },
                  {
                    type: 'Записване на целия курс',
                    size: '8%',
                    condition: 'Записване на всички модули от курса последователно',
                    combinable: false,
                    note: 'Не, фиксирана цена, не се комбинира',
                  },
                  {
                    type: 'За повече от един модул',
                    size: '8%',
                    condition: 'Записване за <span class="font-bold">повече от един модул</span> в рамките на учебната година',
                    combinable: false,
                    note: 'Не, не се комбинира с други отстъпки',
                  },
                ].map((row, idx) => (
                  <motion.tr
                    key={row.type}
                    variants={{
                      hidden: { opacity: 0, y: 30 },
                      visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
                    }}
                    whileHover={{ scale: 1.03, boxShadow: '0 8px 32px 0 rgba(0,0,0,0.18)' }}
                    className="bg-[#22344a] rounded-xl transition-transform cursor-pointer"
                  >
                    <td className="px-4 py-3 font-medium">{row.type}</td>
                    <td className="px-4 py-3 font-bold">{row.size}</td>
                    <td className="px-4 py-3" dangerouslySetInnerHTML={{ __html: row.condition }} />
                    <td className="px-4 py-3 flex items-center gap-2">
                      <span className="inline-block align-middle">
                        {row.combinable ? (
                          <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect x="2" y="2" width="24" height="24" rx="6" fill="#1a2736" stroke="#4ade80" strokeWidth="2.5"/>
                            <path d="M8 14.5L12 18L20 10" stroke="#4ade80" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                        ) : (
                          <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect x="2" y="2" width="24" height="24" rx="6" fill="#1a2736" stroke="#f87171" strokeWidth="2.5"/>
                            <path d="M9 9L19 19M19 9L9 19" stroke="#f87171" strokeWidth="2.5" strokeLinecap="round"/>
                          </svg>
                        )}
                      </span>
                      {row.note}
                    </td>
                  </motion.tr>
                ))}
              </motion.tbody>
            </table>
          </div>
        </motion.section>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-primary-600 to-secondary-600 rounded-2xl p-8 lg:p-12 text-white">
            <h3 className="text-3xl font-bold mb-4">
              Not Sure Which Course to Choose?
            </h3>
            <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
              Take our free assessment quiz to find the perfect course for your child's skill level and interests.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-primary-600 font-semibold py-3 px-8 rounded-lg hover:bg-gray-100 transition-colors duration-300"
            >
              Take Free Assessment
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Courses;

export const CoursesSection = Courses; 