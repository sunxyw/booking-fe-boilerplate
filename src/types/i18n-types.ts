import type { AppConfig } from '@/config/AppConfig';

export type Locale = (typeof AppConfig.locales)[number];
