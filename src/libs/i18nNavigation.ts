import { createSharedPathnamesNavigation } from 'next-intl/navigation';

import { AppConfig } from '@/utils/AppConfig';

export const { Link, redirect, usePathname, useRouter } =
  createSharedPathnamesNavigation({
    locales: AppConfig.locales,
    localePrefix: AppConfig.localePrefix,
  });
