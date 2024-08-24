"use client";

import image from "@/assets/error/generic_error.svg";
import UserFriendlyError from "@/components/UserFriendlyError";
import { theme } from "@/styles/theme";
import { MantineProvider } from "@mantine/core";

export default function GlobalErrorPage({
  error,
  params: { locale },
}: {
  error: Error & { digest?: string };
  params: { locale: string };
}) {
  return (
    <html lang={locale}>
      <body>
        <MantineProvider theme={theme}>
          <UserFriendlyError
            title={`Something bad just happened... (${error.digest})`}
            message="Our servers could not handle your request. Don't worry, our development team was already notified. Try refreshing the page."
            image={image}
            allowRefresh
          />
        </MantineProvider>
      </body>
    </html>
  );
}
