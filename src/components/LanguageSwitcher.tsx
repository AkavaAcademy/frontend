import { useTranslation } from 'react-i18next';

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  return (
    <div className="flex space-x-2">
      <button
        onClick={() => i18n.changeLanguage('bg')}
        className={`px-2 py-1 rounded ${i18n.language === 'bg' ? 'font-bold underline bg-primary-100 text-primary-700' : 'hover:bg-gray-100'}`}
      >
        BG
      </button>
      <button
        onClick={() => i18n.changeLanguage('en')}
        className={`px-2 py-1 rounded ${i18n.language === 'en' ? 'font-bold underline bg-primary-100 text-primary-700' : 'hover:bg-gray-100'}`}
      >
        EN
      </button>
    </div>
  );
};

export default LanguageSwitcher; 
