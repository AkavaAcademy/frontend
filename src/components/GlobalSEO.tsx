import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ensureMetaTag = (selector: string, attributes: Record<string, string>): HTMLMetaElement => {
  let element = document.querySelector(selector) as HTMLMetaElement | null;
  if (!element) {
    element = document.createElement('meta');
    Object.entries(attributes).forEach(([key, value]) => {
      element!.setAttribute(key, value);
    });
    document.head.appendChild(element);
  }
  return element;
};

const ensureOgTag = (property: string, content: string) => {
  const selector = `meta[property="${property}"]`;
  let element = document.querySelector(selector) as HTMLMetaElement | null;
  if (!element) {
    element = document.createElement('meta');
    element.setAttribute('property', property);
    document.head.appendChild(element);
  }
  element.setAttribute('content', content);
};

const GlobalSEO: React.FC = () => {
  const location = useLocation();

  useEffect(() => {
    const robotsMeta = ensureMetaTag('meta[name="robots"]', { name: 'robots' });
    const isPrivate =
      location.pathname.startsWith('/student') ||
      location.pathname.startsWith('/parent');
    robotsMeta.setAttribute('content', isPrivate ? 'noindex, nofollow' : 'index, follow');
  }, [location.pathname]);

  useEffect(() => {
    const scriptId = 'akava-org-schema';
    if (document.getElementById(scriptId)) {
      return;
    }

    const data = {
      '@context': 'https://schema.org',
      '@type': ['Organization', 'EducationalOrganization'],
      name: 'Акава Академи',
      legalName: '„Акава Академи" ЕООД',
      url: 'https://www.akavaacademy.com/',
      logo: 'https://www.akavaacademy.com/logo512.png',
      sameAs: [
        'https://www.facebook.com/AkavaAcademy/',
        'https://www.instagram.com/akavaacademy/',
        'https://www.linkedin.com/company/%D0%B0%D0%BA%D0%B0%D0%B4%D0%B5%D0%BC%D0%B8%D1%8F-akava/',
        'https://www.tiktok.com/@akavaacademy'
      ],
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'бул. „6-ти септември" 144А',
        addressLocality: 'Пловдив',
        addressCountry: 'BG'
      },
      contactPoint: [
        {
          '@type': 'ContactPoint',
          telephone: '+359895302074',
          contactType: 'customer service',
          availableLanguage: ['bg', 'en']
        }
      ]
    };

    const script = document.createElement('script');
    script.id = scriptId;
    script.type = 'application/ld+json';
    script.text = JSON.stringify(data);
    document.head.appendChild(script);
  }, []);

  useEffect(() => {
    const baseUrl = 'https://www.akavaacademy.com';
    const pageUrl = `${baseUrl}${location.pathname}${location.search}`;

    const title = document.title || 'АКАВА АКАДЕМИ – ИТ академия и професионално обучение';
    const descriptionElement = document.querySelector('meta[name="description"]') as HTMLMetaElement | null;
    const description =
      descriptionElement?.getAttribute('content') ||
      'АКАВА АКАДЕМИ е ИТ академия с краткосрочни обучения, професионални програми и курсове за повишаване квалификацията на преподаватели.';

    ensureOgTag('og:site_name', 'AKAVA Academy');
    ensureOgTag('og:type', location.pathname === '/' ? 'website' : 'article');
    ensureOgTag('og:title', title);
    ensureOgTag('og:description', description);
    ensureOgTag('og:url', pageUrl);
    ensureOgTag('og:image', 'https://www.akavaacademy.com/logo512.png');
    ensureOgTag('og:locale', 'bg_BG');
  }, [location.pathname, location.search]);

  useEffect(() => {
    const firedPercents = new Set<number>();

    const handleScroll = () => {
      const scrollTop = window.scrollY || window.pageYOffset;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (docHeight <= 0) return;
      const percent = Math.min(100, Math.round((scrollTop / docHeight) * 100));

      const thresholds = [25, 50, 75, 90];
      thresholds.forEach((threshold) => {
        if (percent >= threshold && !firedPercents.has(threshold)) {
          firedPercents.add(threshold);
          (window as any).gtag?.('event', 'scroll', {
            scroll_depth: threshold,
            event_category: 'engagement',
            event_label: `${threshold}%`,
          });
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    const handleClick = (event: MouseEvent) => {
      const target = event.target as HTMLElement | null;
      if (!target) return;
      const ctaElement = target.closest('[data-cta]') as HTMLElement | null;
      if (!ctaElement) return;
      const ctaName = ctaElement.getAttribute('data-cta') || 'cta';

      (window as any).gtag?.('event', 'click', {
        event_category: 'engagement',
        event_label: ctaName,
      });
    };

    document.addEventListener('click', handleClick);
    return () => {
      document.removeEventListener('click', handleClick);
    };
  }, []);

  useEffect(() => {
    const pixelId = (process.env.REACT_APP_FACEBOOK_PIXEL_ID || '').trim();
    if (!pixelId) {
      return;
    }

    if ((window as any).fbq) {
      return;
    }

    const fbq = (...args: any[]) => {
      (window as any).fbq.callMethod
        ? (window as any).fbq.callMethod.apply((window as any).fbq, args)
        : (window as any).fbq.queue.push(args);
    };

    (window as any).fbq = fbq;
    (window as any).fbq.push = fbq;
    (window as any).fbq.loaded = true;
    (window as any).fbq.version = '2.0';
    (window as any).fbq.queue = [];

    const script = document.createElement('script');
    script.async = true;
    script.src = 'https://connect.facebook.net/en_US/fbevents.js';
    document.head.appendChild(script);

    (window as any).fbq('init', pixelId);
    (window as any).fbq('track', 'PageView');
  }, []);

  return null;
};

export default GlobalSEO;

