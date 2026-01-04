import { useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

/**
 * Component to handle redirects from old query parameter URLs to new clean URLs
 * This ensures SEO-friendly URLs and proper indexing
 * 
 * Redirects:
 * - /courses?category=short -> /courses/short
 * - /courses?category=short&subcategory=students -> /courses/short/students
 * - /blog?category=useful-articles -> /blog/useful-articles
 */
const QueryParamRedirect: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const category = searchParams.get('category');
    const subcategory = searchParams.get('subcategory');

    // Only process if we're on /courses or /blog and have query parameters
    if (location.pathname === '/courses' && category) {
      // Normalize category to lowercase (URLs should be lowercase)
      const normalizedCategory = category.toLowerCase();
      
      // Build clean URL
      let newPath = `/courses/${normalizedCategory}`;
      
      if (subcategory) {
        // Normalize subcategory to lowercase
        const normalizedSubcategory = subcategory.toLowerCase();
        newPath += `/${normalizedSubcategory}`;
      }

      // Perform redirect (replace: true simulates 301 redirect behavior)
      // This replaces the history entry, preventing back button issues
      navigate(newPath, { replace: true });
      return;
    }

    if (location.pathname === '/blog' && category) {
      // Normalize category to lowercase
      const normalizedCategory = category.toLowerCase();
      
      // Build clean URL for blog
      const newPath = `/blog/${normalizedCategory}`;
      
      // Perform redirect
      navigate(newPath, { replace: true });
      return;
    }
  }, [location, navigate]);

  return null;
};

export default QueryParamRedirect;

