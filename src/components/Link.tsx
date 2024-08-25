"use client";

// This is a wrapper for the `Link` component from `next-intl/navigation`.
// Due to the mechanism of how `Mantine` works, we need to wrap the `Link` component
// and mark it as a client component. Therefore, we could pass `Link` as a prop to polymorphic components.

// // biome-ignore lint/nursery/noRestrictedImports: we need to import the original `Link` component
import { Link as RawI18nLink } from "@/libs/i18nNavigation";
import type { Route } from "next";

export const Link = <T extends string>(
  props: Parameters<typeof RawI18nLink>[0] & { href: Route<T> | URL },
) => {
  return <RawI18nLink {...props} />;
};
