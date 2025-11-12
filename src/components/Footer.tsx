import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Facebook, 
  Instagram, 
  Linkedin,
  Mail,
  Phone,
  MapPin
} from 'lucide-react';
import { FaTiktok } from 'react-icons/fa';
import bgTranslations from '../i18n/bg.json';
import enTranslations from '../i18n/en.json';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  const [language] = React.useState('bg'); // You can integrate with your i18n context
  const t = language === 'bg' ? bgTranslations : enTranslations;

  const socialLinks = [
    { icon: Facebook, href: 'https://www.facebook.com/AkavaAcademy/', label: 'Facebook' },
    { icon: Instagram, href: 'https://www.instagram.com/akavaacademy/', label: 'Instagram' },
    { icon: Linkedin, href: 'https://www.linkedin.com/company/%D0%B0%D0%BA%D0%B0%D0%B4%D0%B5%D0%BC%D0%B8%D1%8F-akava/', label: 'LinkedIn' },
    { icon: FaTiktok, href: 'https://www.tiktok.com/@akavaacademy', label: 'TikTok' }
  ];

  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="mb-6"
            >
              <div className="flex items-center space-x-2 mb-4">
                <span className="text-2xl font-bold bg-gradient-to-r from-primary-400 to-secondary-400 bg-clip-text text-transparent">
                  Акава Академи
                </span>
              </div>
              <p className="text-gray-300 leading-relaxed mb-6">
                {t.footer.description}
              </p>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="space-y-3"
            >
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-primary-400" />
                <a 
                  href="mailto:info@akavaacademy.com" 
                  className="text-gray-300 hover:text-primary-400 transition-colors"
                >
                  info@akavaacademy.com
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-primary-400" />
                <a 
                  href="tel:0895302074" 
                  className="text-gray-300 hover:text-primary-400 transition-colors"
                >
                  0895302074
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-primary-400" />
                <a 
                  href="https://www.google.com/maps/place/Level+Center/@42.150511,24.7396242,17z/data=!4m10!1m2!2m1!1z0KbQtdC90YLRitGA0KDQsNC50L7QvSDQptC10L3RgtGA0LDQu9C10L0sINCx0YPQuy4g4oCeNi3RgtC4INCh0LXQv9GC0LXQvNCy0YDQuOKAnCAxNDTQsCwgNDAwMCDQn9C70L7QstC00LjQsg!3m6!1s0x14acd1bdd7395fd1:0xbf880f74b3137a3c!8m2!3d42.150511!4d24.7443878!15sCm3QptC10L3RgtGK0YDQoNCw0LnQvtC9INCm0LXQvdGC0YDQsNC70LXQvSwg0LHRg9C7LiDigJ42LdGC0Lgg0KHQtdC_0YLQtdC80LLRgNC44oCcIDE0NNCwLCA0MDAwINCf0LvQvtCy0LTQuNCyWmYiZNGG0LXQvdGC0YrRgNGA0LDQudC-0L0g0YbQtdC90YLRgNCw0LvQtdC9INCx0YPQuyA2INGC0Lgg0YHQtdC_0YLQtdC80LLRgNC4IDE0NNCwIDQwMDAg0L_Qu9C-0LLQtNC40LKSAQ9idXNpbmVzc19jZW50ZXKaAURDaTlEUVVsUlFVTnZaRU5vZEhsalJqbHZUMjVuTlZGWGJIbGhSMUoyWW13NGVsbHFRbFpqYkZaMFZtNXdTMU5JWXhBQuABAPoBBAgAEBM!16s%2Fg%2F11cjk60ddv?entry=ttu&g_ep=EgoyMDI1MTAxNC4wIKXMDSoASAFQAw%3D%3D"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-primary-400 transition-colors"
                >
                  гр. Пловдив, бул. "6-ти септември" 144а
                </a>
              </div>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="flex space-x-4 mt-6"
            >
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-primary-600 transition-colors duration-300"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </motion.div>
          </div>

          {/* Courses */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-semibold mb-4">{t.footer.coursesTitle}</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/courses" className="text-gray-300 hover:text-primary-400 transition-colors duration-200">
                  {t.footer.courses.robotics}
                </Link>
              </li>
              <li>
                <Link to="/courses" className="text-gray-300 hover:text-primary-400 transition-colors duration-200">
                  {t.footer.courses.scratch}
                </Link>
              </li>
              <li>
                <Link to="/courses" className="text-gray-300 hover:text-primary-400 transition-colors duration-200">
                  {t.footer.courses.python}
                </Link>
              </li>
              <li>
                <Link to="/courses" className="text-gray-300 hover:text-primary-400 transition-colors duration-200">
                  {t.footer.courses.web}
                </Link>
              </li>
              <li>
                <Link to="/courses" className="text-gray-300 hover:text-primary-400 transition-colors duration-200">
                  {t.footer.courses.ai}
                </Link>
              </li>
              <li>
                <Link to="/courses" className="text-gray-300 hover:text-primary-400 transition-colors duration-200">
                  {t.footer.courses.design}
                </Link>
              </li>
            </ul>
          </motion.div>

          {/* Support & Resources */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div>
              <h3 className="text-lg font-semibold mb-4">{t.footer.supportTitle}</h3>
              <ul className="space-y-2">
                <li>
                  <Link to="/contact" className="text-gray-300 hover:text-primary-400 transition-colors duration-200">
                    {t.footer.support.contact}
                  </Link>
                </li>
                <li>
                  <Link to="/privacy-policy" className="text-gray-300 hover:text-primary-400 transition-colors duration-200">
                    {t.footer.support.privacy}
                  </Link>
                </li>
                <li>
                  <Link to="/terms-of-service" className="text-gray-300 hover:text-primary-400 transition-colors duration-200">
                    {t.footer.support.terms}
                  </Link>
                </li>
                <li>
                  <Link to="/student-portal" className="text-gray-300 hover:text-primary-400 transition-colors duration-200">
                    {t.footer.support.studentPortal}
                  </Link>
                </li>
                <li>
                  <Link to="/parent-portal" className="text-gray-300 hover:text-primary-400 transition-colors duration-200">
                    {t.footer.support.parentDashboard}
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">{t.footer.resourcesTitle}</h3>
              <ul className="space-y-2">
                <li>
                  <Link to="/free-lessons" className="text-gray-300 hover:text-primary-400 transition-colors duration-200">
                    {t.footer.resources.tutorials}
                  </Link>
                </li>
                <li>
                  <Link to="/coding-challenges" className="text-gray-300 hover:text-primary-400 transition-colors duration-200">
                    {t.footer.resources.challenges}
                  </Link>
                </li>
                <li>
                  <Link to="/project-ideas" className="text-gray-300 hover:text-primary-400 transition-colors duration-200">
                    {t.footer.resources.projects}
                  </Link>
                </li>
                <li>
                  <Link to="/learning-paths" className="text-gray-300 hover:text-primary-400 transition-colors duration-200">
                    {t.footer.resources.paths}
                  </Link>
                </li>
                <li>
                  <Link to="/contact" className="text-gray-300 hover:text-primary-400 transition-colors duration-200">
                    {t.footer.resources.faq}
                  </Link>
                </li>
              </ul>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Newsletter Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        viewport={{ once: true }}
        className="border-t border-gray-800 py-8"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h3 className="text-xl font-semibold mb-2">
              {t.footer.newsletterTitle}
            </h3>
            <p className="text-gray-400 mb-6">
              {t.footer.newsletterDesc}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder={t.footer.emailPlaceholder}
                className="flex-1 px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent text-white placeholder-gray-400"
              />
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-primary whitespace-nowrap"
              >
                {t.footer.subscribe}
              </motion.button>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-400 text-sm">
              © {currentYear} {t.footer.copyright}
            </div>
            <div className="flex space-x-6 text-sm">
              <Link to="/privacy-policy" className="text-gray-400 hover:text-primary-400 transition-colors">
                Политика за поверителност
              </Link>
              <Link to="/terms-of-service" className="text-gray-400 hover:text-primary-400 transition-colors">
                Общи условия
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 