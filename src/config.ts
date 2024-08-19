import { LocalePrefix } from 'next-intl/routing';
export const locales = ['en', 'pt'] as const;


export const localePrefix = {
  mode: 'always',
  prefixes: {
    'en': '/en',
    'pt': '/pt'
  }
} satisfies LocalePrefix<typeof locales>;