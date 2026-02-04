import {getRequestConfig} from 'next-intl/server';
import {hasLocale} from 'next-intl';
import {routing} from './routing';
 
export default getRequestConfig(async ({requestLocale}) => {
  const requested = await requestLocale;
  const locale = hasLocale(routing.locales, requested)
    ? requested
    : routing.defaultLocale;
 
  return {
    locale,
    messages: {
      hero: (await import(`@/contents/${locale}/hero.json`)).default,
      projects: (await import(`@/contents/${locale}/projects.json`)).default,
      about: (await import(`@/contents/${locale}/about.json`)).default,
      common: (await import(`@/contents/${locale}/common.json`)).default
    }
  };
});