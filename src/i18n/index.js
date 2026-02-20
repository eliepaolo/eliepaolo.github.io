import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import translations from './translations.json';
import config from './config.json';

i18n
  .use(initReactI18next)
  .init({
    resources: {
      it: {
        translation: translations.it.translation,
        config: config
      },
      en: {
        translation: translations.en.translation,
        config: config
      },
      de: {
        translation: translations.de.translation,
        config: config
      }
    },
    ns: ['translation', 'config'],
    defaultNS: 'translation',
    lng: 'it',
    fallbackLng: 'it',
    interpolation: { escapeValue: false }
  });

export default i18n;