import createJITI from 'jiti';
import { fileURLToPath } from 'node:url';
import createNextIntlPlugin from 'next-intl/plugin';

const jiti = createJITI(fileURLToPath(import.meta.url));

/**
 * Run `build` or `dev` with `SKIP_ENV_VALIDATION` to skip env validation. This is especially useful
 * for Docker builds.
 */
jiti('./src/config/Env.ts');

const withNextIntl = createNextIntlPlugin('./src/libs/i18n.ts');

/** @type {import("next").NextConfig} */
const config = {
  // Use CDN in production for assets
  assetPrefix: process.env.NODE_ENV === 'production' ? 'https://example.com' : undefined,
};

export default withNextIntl(config);
