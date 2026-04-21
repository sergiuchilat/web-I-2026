import { getRequestConfig } from 'next-intl/server';
import enMessages from '../messages/en.json';
import roMessages from '../messages/ro.json';

const messages = {
  en: enMessages,
  ro: roMessages
};

export default getRequestConfig(async ({ requestLocale }) => {
  const locale = (await requestLocale) ?? 'en';

  return {
    locale,
    messages: messages[locale] ?? messages['en']
  };
});