"use client";

// This is a wrapper for the `Link` component from `next-intl/navigation`.
// Due to the mechanism of how `Mantine` works, we need to wrap the `Link` component
// and mark it as a client component. Therefore, we could pass `Link` as a prop to polymorphic components.

// eslint-disable-next-line no-restricted-imports -- we need to import the original `Link` component
import { Link as RawI18nLink } from "@/libs/i18nNavigation";

export const Link = (props: Parameters<typeof RawI18nLink>[0]) => {
  return <RawI18nLink {...props} />;
};
