import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop: React.FC = () => {
  const { pathname, search } = useLocation();

  useEffect(() => {
    // Don't scroll to top if there's a category parameter (let Courses component handle scrolling)
    const urlParams = new URLSearchParams(search);
    if (urlParams.has('category')) {
      return;
    }
    window.scrollTo(0, 0);
  }, [pathname, search]);

  return null;
};

export default ScrollToTop;

