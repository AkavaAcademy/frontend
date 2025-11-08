import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock, 
  Send,
  CheckCircle,
  Loader
} from 'lucide-react';
import { contactsAPI } from '../services/api';
import { useTranslation } from 'react-i18next';
import { useSearchParams } from 'react-router-dom';

const Contact: React.FC = () => {
  const { t } = useTranslation();
  const [searchParams] = useSearchParams();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    child_name: '',
    child_age: '',
    message: '',
    course: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [successMessage, setSuccessMessage] = useState<string>('');

  useEffect(() => {
    const courseParam = searchParams.get('course');
    if (courseParam) {
      setFormData(prev => ({
        ...prev,
        course: decodeURIComponent(courseParam)
      }));
    }
  }, [searchParams]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);
    
    try {
      const contactData = {
        name: formData.name,
        email: formData.email,
        phone: formData.phone || undefined,
        child_name: formData.child_name || undefined,
        child_age: parseInt(formData.child_age),
        message: formData.message || undefined,
        course: formData.course || undefined
      };
      
      console.log('Sending contact data:', contactData); // Debug log
      
      const response = await contactsAPI.create(contactData);
      
      // Check if the response indicates success
      if (response.data.success) {
        setSuccessMessage(response.data.message || 'Thank you for your message! We will get back to you soon.');
        setIsSubmitted(true);
        
        // Reset form after 5 seconds
        setTimeout(() => {
          setIsSubmitted(false);
          setSuccessMessage('');
          setFormData({
            name: '',
            email: '',
            phone: '',
            child_name: '',
            child_age: '',
            message: '',
            course: ''
          });
        }, 5000);
      } else {
        setError(response.data.message || 'Failed to submit form. Please try again.');
      }
    } catch (err: any) {
      // Handle API errors
      console.log('API Error:', err.response?.data); // Debug log
      if (err.response?.data?.message) {
        setError(err.response.data.message);
      } else if (err.response?.data?.errors) {
        setError(err.response.data.errors.join(', '));
      } else {
        setError('Failed to submit form. Please try again.');
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      title: t('contact.contactInfo.email.title'),
      content: t('contact.contactInfo.email.content'),
      description: t('contact.contactInfo.email.description')
    },
    {
      icon: Phone,
      title: t('contact.contactInfo.phone.title'),
      content: t('contact.contactInfo.phone.content'),
      description: t('contact.contactInfo.phone.description')
    },
    {
      icon: MapPin,
      title: t('contact.contactInfo.address.title'),
      content: t('contact.contactInfo.address.content'),
      description: t('contact.contactInfo.address.description')
    },
    {
      icon: Clock,
      title: t('contact.contactInfo.hours.title'),
      content: t('contact.contactInfo.hours.content'),
      description: t('contact.contactInfo.hours.description')
    }
  ];

  const baseCourses = [
    t('contact.courses.lego'),
    t('contact.courses.basics'),
    t('contact.courses.design'),
    t('contact.courses.future'),
    t('contact.courses.advanced'),
    t('contact.courses.robotics'),
    t('contact.courses.ml'),
    t('contact.courses.cyber'),
    t('contact.courses.individual'),
    t('contact.courses.unsure')
  ];

  // Add course from URL if it's not in the list
  const courseParam = searchParams.get('course');
  const courses = courseParam && !baseCourses.includes(decodeURIComponent(courseParam))
    ? [...baseCourses, decodeURIComponent(courseParam)]
    : baseCourses;

  return (
    <section id="contact" className="py-20 bg-gray-50">
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
            {t('contact.titlePart1')}{' '}
            <span className="bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent">
              {t('contact.titlePart2')}
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t('contact.desc')}
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="card p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                {t('contact.sendMessage')}
              </h3>

              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-8"
                >
                  <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                  <h4 className="text-xl font-semibold text-gray-900 mb-2">
                    {t('contact.thankYou')}
                  </h4>
                  <p className="text-gray-600">
                    {successMessage || t('contact.received')}
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {error && (
                    <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg">
                      {error}
                    </div>
                  )}
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                        {t('contact.parentName')}
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors"
                        placeholder={t('contact.parentNamePlaceholder')}
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                        {t('contact.email')}
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors"
                        placeholder={t('contact.emailPlaceholder')}
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                        {t('contact.phone')}
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors"
                        placeholder={t('contact.phonePlaceholder')}
                      />
                    </div>
                    <div>
                      <label htmlFor="child_name" className="block text-sm font-medium text-gray-700 mb-2">
                        {t('contact.childName')}
                      </label>
                      <input
                        type="text"
                        id="child_name"
                        name="child_name"
                        value={formData.child_name}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors"
                        placeholder={t('contact.childNamePlaceholder')}
                      />
                    </div>
                    <div>
                      <label htmlFor="child_age" className="block text-sm font-medium text-gray-700 mb-2">
                        {t('contact.childAge')}
                      </label>
                      <input
                        type="number"
                        id="child_age"
                        name="child_age"
                        value={formData.child_age}
                        onChange={handleInputChange}
                        required
                        min="6"
                        max="18"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors"
                        placeholder={t('contact.childAgePlaceholder')}
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="course" className="block text-sm font-medium text-gray-700 mb-2">
                      {t('contact.interestedCourse')}
                    </label>
                    <select
                      id="course"
                      name="course"
                      value={formData.course}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors"
                    >
                      <option value="">{t('contact.selectCourse')}</option>
                      {courses.map((course) => (
                        <option key={course} value={course}>
                          {course}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                      {t('contact.message')}
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      rows={4}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors resize-none"
                      placeholder={t('contact.messagePlaceholder')}
                    />
                  </div>

                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                    whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                    className="w-full btn-primary flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader className="w-5 h-5 mr-2 animate-spin" />
                        {t('contact.sending')}
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5 mr-2" />
                        {t('contact.send')}
                      </>
                    )}
                  </motion.button>
                </form>
              )}
            </div>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                {t('contact.contactInfo.title')}
              </h3>
              <p className="text-gray-600 mb-8">
                {t('contact.contactInfo.description')}
              </p>
            </div>

            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={info.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-start space-x-4"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-lg flex items-center justify-center flex-shrink-0">
                    <info.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-1">
                      {info.title}
                    </h4>
                    <p className="text-gray-900 font-medium mb-1">
                      {info.content}
                    </p>
                    <p className="text-gray-600 text-sm">
                      {info.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* FAQ Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl p-6 shadow-lg"
            >
              <h4 className="text-lg font-semibold text-gray-900 mb-4">
                {t('contact.faq.title')}
              </h4>
              <div className="space-y-3">
                <div>
                  <h5 className="font-medium text-gray-900">{t('contact.faq.q1.question')}</h5>
                  <p className="text-sm text-gray-600">{t('contact.faq.q1.answer')}</p>
                </div>
                <div>
                  <h5 className="font-medium text-gray-900">{t('contact.faq.q2.question')}</h5>
                  <p className="text-sm text-gray-600">{t('contact.faq.q2.answer')}</p>
                </div>
                <div>
                  <h5 className="font-medium text-gray-900">{t('contact.faq.q3.question')}</h5>
                  <p className="text-sm text-gray-600">{t('contact.faq.q3.answer')}</p>
                </div>
                <div>
                  <h5 className="font-medium text-gray-900">{t('contact.faq.q4.question')}</h5>
                  <p className="text-sm text-gray-600">{t('contact.faq.q4.answer')}</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact; 