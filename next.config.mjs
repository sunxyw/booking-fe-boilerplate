import createJITI from 'jiti';
import { fileURLToPath } from 'node:url';

const jiti = createJITI(fileURLToPath(import.meta.url));

/**
 * Run `build` or `dev` with `SKIP_ENV_VALIDATION` to skip env validation. This is especially useful
 * for Docker builds.
 */
jiti('./src/env.ts');

/** @type {import("next").NextConfig} */
const config = {
  // Use CDN in production for assets
  assetPrefix: process.env.NODE_ENV === 'production' ? 'https://example.com' : undefined,
};

export default config;
