import React from 'react';
import { useLanguage } from '../App';
import { Language } from '../types';

const LanguageSelector: React.FC = () => {
  const { language, setLanguage } = useLanguage();

  const languages: { code: Language; name: string; disabled?: boolean }[] = [
    { code: 'es', name: 'Español' },
    { code: 'en', name: 'English', disabled: true },
    { code: 'qu', name: 'Quechua', disabled: true },
  ];

  return (
    <div className="flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full p-1">
      {languages.map(lang => (
        <button
          key={lang.code}
          onClick={() => setLanguage(lang.code)}
          disabled={lang.disabled}
          title={lang.disabled ? 'Próximamente' : ''}
          className={`px-3 py-1 text-sm font-semibold rounded-full transition-colors duration-300 ${
            language === lang.code
              ? 'bg-white text-stokyds-red shadow'
              : 'text-white hover:bg-white/50'
          } disabled:opacity-50 disabled:cursor-not-allowed`}
        >
          {lang.name}
        </button>
      ))}
    </div>
  );
};

export default LanguageSelector;