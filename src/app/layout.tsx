import "@mantine/core/styles.css";
import "@/styles/globals.css";

import { ColorSchemeScript } from "@mantine/core";
import type { Metadata } from "next";
import { NextIntlClientProvider } from "next-intl";
import { getMessages, unstable_setRequestLocale } from "next-intl/server";
import type { ReactNode } from "react";

import ClientProviders from "@/app/clientProviders";
import ServerProviders from "@/app/serverProviders";
import { AppConfig } from "@/config/AppConfig";
import { isValidLocale } from "@/libs/i18n";

export const metadata: Metadata = {
  title: "Boilerplate",
  description: "Just another boilerplate.",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default async function RootLayout({
  children,
  params,
}: {
  children: ReactNode;
  params: { locale: string };
}) {
  let tryLocale = params.locale;
  if (!isValidLocale(tryLocale)) {
    // do not trigger not found here, it will cause an circular dependency
    tryLocale = AppConfig.defaultLocale;
  }

  unstable_setRequestLocale(tryLocale);
  const messages = await getMessages();

  return (
    <html lang={tryLocale}>
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
