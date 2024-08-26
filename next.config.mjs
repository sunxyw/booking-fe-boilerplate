import { fileURLToPath } from "node:url";
import createBundleAnalyzer from "@next/bundle-analyzer";
import createSerwist from "@serwist/next";
import createJiti from "jiti";
import createNextIntlPlugin from "next-intl/plugin";

const jiti = createJiti(fileURLToPath(import.meta.url));

/**
 * Run `build` or `dev` with `SKIP_ENV_VALIDATION` to skip env validation. This is especially useful
 * for Docker builds.
 */
jiti("./src/config/Env.ts");

const withNextIntl = createNextIntlPlugin("./src/libs/i18n.ts");

const withBundleAnalyzer = createBundleAnalyzer({
  enabled: process.env.ANALYZE === "true",
});

const withSerwist = createSerwist({
  cacheOnNavigation: true,
  swSrc: "./src/service-worker.ts",
  swDest: "./public/sw.js",
  additionalPrecacheEntries: [
    { url: "/~offline", revision: crypto.randomUUID() },
  ],
});

/** @type {import("next").NextConfig} */
const config = {
  // FIXME: Use CDN in production for assets
  // assetPrefix: process.env.NODE_ENV === 'production' ? 'https://example.com' : undefined,

  experimental: {
    optimizePackageImports: ["@mantine/core", "@mantine/hooks"],
  },
};

export default withBundleAnalyzer(withSerwist(withNextIntl(config)));
