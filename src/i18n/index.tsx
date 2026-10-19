import { createContext, useContext, useEffect, useState } from 'react';
import type { ReactNode } from 'react';
import translations from './translations.json';

export type Language = 'pt' | 'en' | 'es';
const locales = { pt: 'pt-BR', en: 'en-US', es: 'es-ES' };
const dictionary: Record<string, { pt: string; es: string }> = translations;
const storageKey = 'portfolio-language';
const translate = (text: string, language: Language) => language === 'en' ? text : dictionary[text]?.[language] ?? text;
const LanguageContext = createContext({
  language: 'en' as Language,
  locale: locales.en,
  setLanguage: (_language: Language) => { void _language; },
  t: (text: string) => text,
});

function initialLanguage(): Language {
  try {
    const saved = localStorage.getItem(storageKey);
    if (saved === 'pt' || saved === 'en' || saved === 'es') return saved;
  } catch { /* The selector still works when storage is unavailable. */ }
  const preferred = navigator.language.slice(0, 2);
  return preferred === 'pt' || preferred === 'es' ? preferred : 'en';
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>(initialLanguage);
  useEffect(() => {
    document.documentElement.lang = locales[language];
    document.title = { pt: 'Victor Moni | Portfólio', en: 'Victor Moni | Portfolio', es: 'Victor Moni | Portafolio' }[language];
    try { localStorage.setItem(storageKey, language); } catch { /* Optional persistence. */ }
  }, [language]);
  return <LanguageContext.Provider value={{ language, locale: locales[language], setLanguage, t: text => translate(text, language) }}>{children}</LanguageContext.Provider>;
}

export const useLanguage = () => useContext(LanguageContext);
