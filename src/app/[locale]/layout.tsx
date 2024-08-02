import '@mantine/core/styles.css';
import '@/styles/globals.css';

import { ColorSchemeScript, createTheme, MantineProvider } from '@mantine/core';
import { type Metadata } from 'next';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages, unstable_setRequestLocale } from 'next-intl/server';

export const metadata: Metadata = {
  title: 'Boilerplate',
  description: 'Just another boilerplate.',
  icons: [{ rel: 'icon', url: '/favicon.ico' }],
};

const theme = createTheme({
  /** Put your mantine theme override here */
});

export default async function RootLayout(props: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  unstable_setRequestLocale(props.params.locale);
  const messages = await getMessages();

  return (
    <html lang={props.params.locale}>
      <head>
        <ColorSchemeScript />
      </head>
      <body>
        <NextIntlClientProvider messages={messages}>
          <MantineProvider theme={theme}>{props.children}</MantineProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
