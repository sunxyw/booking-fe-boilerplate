import { AppConfig } from "@/config/AppConfig";
import type { Locale } from "@/types/i18n-types";

export const getAppUrl = () => {
  if (process.env.NEXT_PUBLIC_APP_URL) {
    return process.env.NEXT_PUBLIC_APP_URL;
  }

  if (
    process.env.VERCEL_ENV === "production" &&
    process.env.VERCEL_PROJECT_PRODUCTION_URL
  ) {
    return `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`;
  }

  if (process.env.VERCEL_URL) {
    return `https://${process.env.VERCEL_URL}`;
  }

  return "http://localhost:3000";
};

export const getI18nPath = (url: string, locale: Locale) => {
  if (locale === AppConfig.defaultLocale) {
    return url;
  }

  return `/${locale}${url}`;
};
