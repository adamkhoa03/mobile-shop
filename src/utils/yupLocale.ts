import { setLocale } from 'yup';
import yupLocale from '@/locales/yup/yupLocale.ts';
import constants from '@/constants.ts';

const updateYupLocale = (locale: string) => {
  setLocale(yupLocale[locale || constants.DEFAULT_LANGUAGE]);
};

export default updateYupLocale;
