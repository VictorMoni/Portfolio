import { useContext } from 'react';
import { LanguageContext } from './context';
export const useLanguage = () => useContext(LanguageContext);
