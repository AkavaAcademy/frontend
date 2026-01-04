import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop: React.FC = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Scroll to top on route change
    // Note: Courses component handles its own scrolling for category navigation
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

export default ScrollToTop;

