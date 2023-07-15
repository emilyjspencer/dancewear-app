import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import en from "./translations/en/english.json";
import de from './translations/de/german.json';
import fr from './translations/fr/french.json';

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    debug: true, 
    fallbackLng: 'en', 
    interpolation: {
      escapeValue: false, 
    },
    resources: {
       en: {
        english: en
       },
       de: {
        german: de
       },
       fr: {
        french: fr
       }
    },
  });
 
export default i18n;