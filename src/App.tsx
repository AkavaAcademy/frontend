import React from 'react';
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
import CourseQuiz from './components/CourseQuiz';
import PrivacyPolicy from './components/PrivacyPolicy';
import TermsOfService from './components/TermsOfService';
import StudentPortal from './components/StudentPortal';
import StudentDashboard from './components/StudentDashboard';
import ParentPortal from './components/ParentPortal';
import ParentDashboard from './components/ParentDashboard';
import FreeLessons from './components/FreeLessons';
import CodingChallenges from './components/CodingChallenges';
import ProjectIdeas from './components/ProjectIdeas';
import LearningPaths from './components/LearningPaths';
import ScrollToTop from './components/ScrollToTop';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <AuthProvider>
      <Router>
        <ScrollToTop />
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
            <Route path="/aboutUs" element={<FeaturesPage />} />
            <Route path="/courses" element={<Courses />} />
            <Route path="/course-quiz" element={<CourseQuiz />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/terms-of-service" element={<TermsOfService />} />
            <Route path="/student-portal" element={<StudentPortal />} />
            <Route path="/student-dashboard" element={<StudentDashboard />} />
            <Route path="/parent-portal" element={<ParentPortal />} />
            <Route path="/parent-dashboard" element={<ParentDashboard />} />
            <Route path="/free-lessons" element={<FreeLessons />} />
            <Route path="/coding-challenges" element={<CodingChallenges />} />
            <Route path="/project-ideas" element={<ProjectIdeas />} />
            <Route path="/learning-paths" element={<LearningPaths />} />
          </Routes>
          <Footer />
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;
