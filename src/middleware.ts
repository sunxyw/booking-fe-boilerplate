import createMiddleware from 'next-intl/middleware';

import { AppConfig } from '@/config/AppConfig';

export default createMiddleware({
  // A list of all locales that are supported
  locales: AppConfig.locales,

  // Used when no locale matches
  defaultLocale: AppConfig.defaultLocale,

  localePrefix: AppConfig.localePrefix,
});

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
};
