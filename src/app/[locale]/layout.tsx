import { notFound } from "next/navigation";
import type { ReactNode } from "react";

import { isValidLocale } from "@/libs/i18n";

export default async function LocaleLayout({
  children,
  params,
}: {
  children: ReactNode;
  params: { locale: string };
}) {
  if (!isValidLocale(params.locale)) {
    notFound();
  }

  return children;
}
