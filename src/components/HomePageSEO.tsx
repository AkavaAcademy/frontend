import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const HomePageSEO: React.FC = () => {
  const location = useLocation();

  useEffect(() => {
    // Only set SEO metadata for the homepage
    if (location.pathname === '/') {
      // Set document title
      document.title = 'АКАВА АКАДЕМИ – ИТ академия и професионално обучение';

      // Update or create meta description
      let metaDesc = document.querySelector('meta[name="description"]') as HTMLMetaElement;
      if (!metaDesc) {
        metaDesc = document.createElement('meta');
        metaDesc.setAttribute('name', 'description');
        document.head.appendChild(metaDesc);
      }
      metaDesc.setAttribute('content', 'АКАВА АКАДЕМИ е ИТ академия с краткосрочни обучения за ученици и възрастни, лицензирани професионални програми и курсове за повишаване квалификацията на преподаватели.');

      // Set canonical URL for homepage
      const baseUrl = 'https://www.akavaacademy.com';
      let canonicalLink = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
      if (!canonicalLink) {
        canonicalLink = document.createElement('link');
        canonicalLink.setAttribute('rel', 'canonical');
        document.head.appendChild(canonicalLink);
      }
      canonicalLink.setAttribute('href', baseUrl);
    }
  }, [location.pathname]);

  return null;
};

export default HomePageSEO;
