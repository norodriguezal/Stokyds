import React from 'react';
import { useLanguage } from '../App';
import { Language } from '../types';

const LanguageSelector: React.FC = () => {
  const { language, setLanguage } = useLanguage();

  const languages: { code: Language; name: string; flag: string }[] = [
    { code: 'es', name: 'Español', flag: '🇪🇸' },
    { code: 'en', name: 'English', flag: '🇺🇸' },
    { code: 'qu', name: 'Quechua', flag: '🇵🇪' },
  ];

  return (
    <div className="flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full p-2 border border-gray-100 shadow-sm">
      {languages.map(lang => (
        <button
          key={lang.code}
          onClick={() => setLanguage(lang.code)}
          className={`flex items-center gap-2 px-4 py-2 text-sm font-semibold rounded-full transition-all duration-300 transform hover:-translate-y-0.5 ${
            language === lang.code
              ? 'bg-stokyds-red text-white shadow-md'
              : 'text-gray-600 hover:bg-red-50 hover:text-stokyds-red-dark'
          }`}
        >
          <span className="text-base">{lang.flag}</span>
          <span className="hidden sm:inline">{lang.name}</span>
          <span className="sm:hidden uppercase">{lang.code}</span>
        </button>
      ))}
    </div>
  );
};

export default LanguageSelector;