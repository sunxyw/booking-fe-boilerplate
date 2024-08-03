import type { LocalePrefix } from 'node_modules/next-intl/dist/types/src/routing/types';

const localePrefix: LocalePrefix = 'as-needed';

// FIXME: Update this configuration file based on project information
export const AppConfig = {
  name: 'Booking FE',
  locales: ['en', 'zh-hk'],
  defaultLocale: 'en',
  localePrefix,
} as const;
