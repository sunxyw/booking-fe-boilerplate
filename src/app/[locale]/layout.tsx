import '@mantine/core/styles.css';
import '@/styles/globals.css';

import { ColorSchemeScript } from '@mantine/core';
import { type Metadata } from 'next';
import { notFound } from 'next/navigation';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages, unstable_setRequestLocale } from 'next-intl/server';

import ClientProviders from '@/app/[locale]/clientProviders';
import ServerProviders from '@/app/[locale]/serverProviders';
import { AppConfig } from '@/config/AppConfig';

export const metadata: Metadata = {
  title: 'Boilerplate',
  description: 'Just another boilerplate.',
  icons: [{ rel: 'icon', url: '/favicon.ico' }],
};

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  if (!AppConfig.locales.includes(params.locale)) {
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
