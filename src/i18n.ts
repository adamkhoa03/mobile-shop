// i18n
import { createI18n } from 'vue-i18n';
import viCustomize from '@/locales/vi.ts';
import enCustomize from '@/locales/en.ts';
import constants from '@/constants.ts';

const message = {
  en: {
    ...enCustomize
  },
  vi: {
    ...viCustomize
  }
};
const currentLocale = localStorage.getItem(constants.LANGUAGE_KEY) || constants.DEFAULT_LANGUAGE;
localStorage.setItem(constants.LANGUAGE_KEY, currentLocale);
const i18n = createI18n({
  legacy: false,
  locale: currentLocale,
  fallbackLocale: constants.DEFAULT_LANGUAGE,
  messages: message
});

export default i18n;
