import React, { useState } from 'react';
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

const Contact: React.FC = () => {
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
      
      console.log('Sending contact data to backend:', contactData); // Debug log
      
      const response = await contactsAPI.create(contactData);
      
      console.log('Backend response:', response.data); // Debug log
      
      // Handle success - check for success field or assume success if status is 200/201
      if (response.status === 200 || response.status === 201 || response.data.success) {
        setSuccessMessage(
          response.data.message || 
          response.data.contact?.message || 
          'Благодарим ви! Получихме вашето съобщение и ще се свържем с вас в рамките на 24 часа.'
        );
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
        setError(response.data.message || 'Неуспешно изпращане на формата. Моля, опитайте отново.');
      }
    } catch (err: any) {
      // Handle API errors
      console.error('API Error:', err.response?.data || err.message); // Debug log
      
      if (err.response?.status === 404) {
        setError('Сървърът не е намерен. Моля, проверете дали backend сървърът работи на http://127.0.0.1:3000');
      } else if (err.response?.status === 500) {
        setError('Възникна грешка на сървъра. Моля, опитайте отново по-късно.');
      } else if (err.response?.data?.message) {
        setError(err.response.data.message);
      } else if (err.response?.data?.errors) {
        // Handle validation errors (array or object)
        const errors = Array.isArray(err.response.data.errors) 
          ? err.response.data.errors 
          : Object.values(err.response.data.errors).flat();
        setError(errors.join(', '));
      } else if (err.message) {
        setError(`Грешка: ${err.message}`);
      } else {
        setError('Неуспешно изпращане на формата. Моля, опитайте отново.');
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      title: 'Имейл',
      content: 'info@akavaacademy.com',
      description: 'Отговаряме в рамките на 24 часа'
    },
    {
      icon: Phone,
      title: 'Телефон',
      content: '0895 30 20 74',
      description: 'Свържете се с нас за консултация'
    },
    {
      icon: MapPin,
      title: 'Адрес',
      content: 'бул. "6-ти Септември" 144а, Пловдив',
      description: 'Запишете се за безплатна консултация'
    },
    {
      icon: Clock,
      title: 'Работно време',
      content: 'Понеделник - Петък',
      description: '9:00 - 18:00'
    }
  ];

  const courses = [
    'LEGO роботика и разработване на игри',
    'Основи на програмирането',
    'Дизайн и креативност',
    'Технологии на бъдещето',
    'Разширено програмиране',
    'Роботика и автоматизация',
    'Машинно обучение и AI',
    'Киберсигурност и етично хакерство',
    'Индивидуални уроци и консултации',
    'Не съм сигурен - имам нужда от съвет'
  ];

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
            Свържете се с{' '}
            <span className="bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent">
              нас
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Готови да започнете пътешествието на вашето дете в света на програмирането? 
            Свържете се с нас днес за безплатна консултация и открийте как Акава Академия 
            може да помогне за формирането на бъдещето им.
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
                Изпратете ни съобщение
              </h3>

              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-8"
                >
                  <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                  <h4 className="text-xl font-semibold text-gray-900 mb-2">
                    Благодарим ви!
                  </h4>
                  <p className="text-gray-600">
                    {successMessage || 'Получихме вашето съобщение и ще се свържем с вас в рамките на 24 часа.'}
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
                        Име на родителя *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors"
                        placeholder="Вашето пълно име"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                        Имейл адрес *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors"
                        placeholder="ваш@имейл.com"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                        Телефонен номер
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors"
                        placeholder="0895 30 20 74"
                      />
                    </div>
                    <div>
                      <label htmlFor="child_name" className="block text-sm font-medium text-gray-700 mb-2">
                        Име на детето
                      </label>
                      <input
                        type="text"
                        id="child_name"
                        name="child_name"
                        value={formData.child_name}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors"
                        placeholder="Име на детето"
                      />
                    </div>
                    <div>
                      <label htmlFor="child_age" className="block text-sm font-medium text-gray-700 mb-2">
                        Възраст на детето *
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
                        placeholder="Възраст (6-18)"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="course" className="block text-sm font-medium text-gray-700 mb-2">
                      Интересен курс
                    </label>
                    <select
                      id="course"
                      name="course"
                      value={formData.course}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors"
                    >
                      <option value="">Изберете курс</option>
                      {courses.map((course) => (
                        <option key={course} value={course}>
                          {course}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                      Съобщение
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      rows={4}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors resize-none"
                      placeholder="Разкажете ни за интересите на вашето дете и въпросите, които имате..."
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
                        Изпращане...
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5 mr-2" />
                        Изпрати съобщение
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
                Информация за контакт
              </h3>
              <p className="text-gray-600 mb-8">
                Тук сме, за да ви помогнем и на вашето дете да започне пътешествието си в света на програмирането. 
                Свържете се с нас чрез някой от каналите по-долу.
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
                Често задавани въпроси
              </h4>
              <div className="space-y-3">
                <div>
                  <h5 className="font-medium text-gray-900">За какви възрастови групи преподавате?</h5>
                  <p className="text-sm text-gray-600">Предлагаме курсове за ученици от 6 до 18 години.</p>
                </div>
                <div>
                  <h5 className="font-medium text-gray-900">Предлагате ли онлайн курсове?</h5>
                  <p className="text-sm text-gray-600">Да, предлагаме както онлайн, така и присъствени курсове</p>
                </div>
                <div>
                  <h5 className="font-medium text-gray-900">Има ли безплатен пробен урок?</h5>
                  <p className="text-sm text-gray-600">Да, има безплатен пробен урок за занятията по LEGO роботика.</p>
                </div>
                <div>
                  <h5 className="font-medium text-gray-900">Къде се намира академията?</h5>
                  <p className="text-sm text-gray-600">Намираме се в Пловдив, бул. "6-ти Септември" 144а, бизнес сграда LEVEL CENTER, етаж 3</p>
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