import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Shield, Lock, Eye, FileText, CheckCircle, Mail, Phone } from 'lucide-react';

const PrivacyPolicy: React.FC = () => {
  const sections = [
    {
      icon: FileText,
      title: '1. Кои сме ние?',
      titleEn: '1. Who are we?',
      content: (
        <>
          <p className="mb-2"><strong>„Акава Академи" ЕООД</strong></p>
          <p>Лице за контакт: Елеонора Йовчева Михова</p>
          <p>Имейл: info@akavaacademy.com</p>
          <p>Телефон: 0895302074</p>
        </>
      ),
    },
    {
      icon: Eye,
      title: '2. Какви лични данни събираме?',
      titleEn: '2. What personal data do we collect?',
      content: (
        <>
          <p className="mb-4">
            При записване за курс чрез формата на сайта и при последваща комуникация по телефон, събираме следните данни:
          </p>
          <ul className="list-disc list-inside space-y-2 mb-4">
            <li>Име и имейл на родител</li>
            <li>Телефон за контакт</li>
            <li>Име и възраст на детето</li>
            <li>Избран курс</li>
          </ul>
          <p className="italic text-gray-600">
            Не събираме снимки, видео или чувствителна информация без предварително изрично съгласие.
          </p>
        </>
      ),
    },
    {
      icon: CheckCircle,
      title: '3. С каква цел използваме вашите данни?',
      titleEn: '3. For what purpose do we use your data?',
      content: (
        <ul className="list-disc list-inside space-y-2">
          <li>За да потвърдим вашето записване</li>
          <li>За да се свържем с вас във връзка с курса</li>
          <li>За издаване на сертификати (при завършване на курса)</li>
        </ul>
      ),
    },
    {
      icon: Lock,
      title: '4. Съхранение и защита на данните',
      titleEn: '4. Data storage and protection',
      content: (
        <p>
          Вашите лични данни се съхраняват сигурно и се използват <strong>само от екипа на Акава Академи</strong>. 
          Съхраняваме ги до издаване на сертификат, след което данните се изтриват, освен ако не е необходимо 
          да ги запазим по законови причини.
        </p>
      ),
    },
    {
      icon: Shield,
      title: '5. Споделяне на данни',
      titleEn: '5. Data sharing',
      content: (
        <p>
          <strong>Не споделяме лични данни с трети страни</strong>. Ако това се промени, 
          ще поискаме изричното ви съгласие.
        </p>
      ),
    },
    {
      icon: FileText,
      title: '6. Вашите права',
      titleEn: '6. Your rights',
      content: (
        <>
          <p className="mb-4">Имате право:</p>
          <ul className="list-disc list-inside space-y-2 mb-4">
            <li>Да поискате достъп до съхраняваните за вас данни</li>
            <li>Да поискате корекция или изтриване на данни</li>
            <li>Да оттеглите съгласие за използване на данни</li>
          </ul>
          <p className="flex items-center">
            <Mail className="w-4 h-4 mr-2 text-primary-600" />
            Свържете се с нас на: <a href="mailto:info@akavaacademy.com" className="text-primary-600 hover:text-primary-700 ml-1">info@akavaacademy.com</a>
          </p>
        </>
      ),
    },
    {
      icon: FileText,
      title: '7. Бисквитки (Cookies)',
      titleEn: '7. Cookies',
      content: (
        <p>
          Сайтът използва стандартни бисквитки за подобряване на потребителското преживяване. 
          Не използваме бисквитки за рекламни цели.
        </p>
      ),
    },
    {
      icon: FileText,
      title: '8. Промени в политиката',
      titleEn: '8. Policy changes',
      content: (
        <p>
          Можем периодично да актуализираме тази политика. Всички промени ще бъдат отразени тук.
        </p>
      ),
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-primary-50 py-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: 'spring', duration: 0.6 }}
            className="inline-block mb-6"
          >
            <div className="w-20 h-20 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-full flex items-center justify-center mx-auto">
              <Shield className="w-10 h-10 text-white" />
            </div>
          </motion.div>
          
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Политика за защита на{' '}
            <span className="bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent">
              личните данни
            </span>
          </h1>
          
          <p className="text-xl text-gray-600 mb-4">
            в Акава Академи
          </p>
          
          <p className="text-sm text-gray-500">
            Последна актуализация: <strong>07.07.2025 г.</strong>
          </p>
        </motion.div>

        {/* Introduction */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-white rounded-2xl shadow-lg p-8 mb-8"
        >
          <p className="text-lg text-gray-700 leading-relaxed">
            В Акава Академи държим на сигурността и защитата на личните данни на вашето дете. 
            Настоящата политика описва какви данни събираме, защо ги събираме и как ги защитаваме.
          </p>
        </motion.div>

        {/* Sections */}
        <div className="space-y-6">
          {sections.map((section, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 * index }}
              className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-lg flex items-center justify-center">
                    <section.icon className="w-6 h-6 text-white" />
                  </div>
                </div>
                <div className="flex-1">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">
                    {section.title}
                  </h2>
                  <div className="text-gray-700 leading-relaxed">
                    {section.content}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Contact Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-12 bg-gradient-to-r from-primary-600 to-secondary-600 rounded-2xl p-8 text-white text-center"
        >
          <h3 className="text-2xl font-bold mb-4">
            Имате въпроси относно вашите данни?
          </h3>
          <p className="text-lg mb-6 opacity-90">
            Не се колебайте да се свържете с нас!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="mailto:info@akavaacademy.com"
              className="flex items-center bg-white text-primary-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              <Mail className="w-5 h-5 mr-2" />
              info@akavaacademy.com
            </a>
            <a
              href="tel:0895302074"
              className="flex items-center bg-white text-primary-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              <Phone className="w-5 h-5 mr-2" />
              0895302074
            </a>
          </div>
        </motion.div>

        {/* Back Button */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1 }}
          className="mt-8 text-center"
        >
          <Link
            to="/"
            className="inline-block text-primary-600 hover:text-primary-700 font-semibold"
          >
            ← Върни се към началната страница
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;

