import { ColorSchemeScript } from "@mantine/core";
import type { Metadata } from "next";
import { NextIntlClientProvider } from "next-intl";
import { getMessages, unstable_setRequestLocale } from "next-intl/server";
import type { ReactNode } from "react";

import { AppConfig } from "@/config/AppConfig";
import { isValidLocale } from "@/libs/i18n";
import { notFound } from "next/navigation";
import { ClientProviders } from "./clientProviders";
import { ServerProviders } from "./serverProviders";

export const metadata: Metadata = {
  title: "Boilerplate",
  description: "Just another boilerplate.",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

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

  unstable_setRequestLocale(params.locale);
  const messages = await getMessages();

  return (
    <html lang={params.locale}>
      <head>
        <ColorSchemeScript />
      </head>
      <body>
        <ServerProviders>
          <ClientProviders>
            <NextIntlClientProvider messages={messages}>
              {children}
            </NextIntlClientProvider>
          </ClientProviders>
        </ServerProviders>
      </body>
    </html>
  );
}

export function generateStaticParams() {
  return AppConfig.locales.map((locale) => ({ locale }));
}
