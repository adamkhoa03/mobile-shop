// i18n
import { createI18n } from 'vue-i18n';
import vi from '@/locales/vi.ts';
import en from '@/locales/en.ts';
import constants from '@/constants.ts'

const message = {
  en: {
    ...en
  },
  vi: {
    ...vi
  }
};
const currentLocale = localStorage.getItem(constants.DEFAULT_LANGUAGE) || 'vi'
localStorage.setItem(constants.DEFAULT_LANGUAGE, currentLocale)
const i18n = createI18n({
  locale: currentLocale,
  fallbackLocale: constants.DEFAULT_LANGUAGE,
  messages: message
});
export default i18n;
