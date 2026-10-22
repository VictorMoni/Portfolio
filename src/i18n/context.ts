import { createContext } from 'react';
export type Language = 'pt' | 'en' | 'es';
export const LanguageContext = createContext({
  language: 'en' as Language,
  locale: 'en-US',
  setLanguage: (_language: Language) => { void _language; },
  t: (text: string) => text,
});
