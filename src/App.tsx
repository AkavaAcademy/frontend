import React from 'react';
import { motion } from 'framer-motion';
import { AuthProvider } from './contexts/AuthContext';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import FeaturesPage from './components/FeaturesPage';
import Courses, { CoursesSection } from './components/Courses';
import News from './components/Testimonials';
import Contact from './components/Contact';
import ContactPage from './components/ContactPage';
import Footer from './components/Footer';
import Blog from './components/Blog';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <AuthProvider>
      <Router>
        <div className="App min-h-screen bg-gray-50">
          <Header />
          <Routes>
            <Route path="/" element={
              <>
                <Hero />
                <Features />
                <CoursesSection />
                <News />
                <Contact />
              </>
            } />
            <Route path="/features" element={<FeaturesPage />} />
            <Route path="/courses" element={<Courses />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/blog" element={<Blog />} />
          </Routes>
          <Footer />
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;
