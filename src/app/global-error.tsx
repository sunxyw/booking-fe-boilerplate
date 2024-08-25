"use client";

import errorImage from "@/assets/error/generic_error.svg";
import {
  UserFriendlyError,
  UserFriendlyErrorControl,
} from "@/components/UserFriendlyError";
import { theme } from "@/styles/theme";
import { MantineProvider } from "@mantine/core";
import { useRouter } from "next/navigation";

export default function GlobalErrorPage({
  error,
  params: { locale },
}: {
  error: Error & { digest?: string };
  params: { locale: string };
}) {
  const router = useRouter();

  return (
    <html lang={locale}>
      <body>
        <MantineProvider theme={theme}>
          <UserFriendlyError
            title={`Something bad just happened... (${error.digest})`}
            message="Our servers could not handle your request. Don't worry, our development team was already notified. Try refreshing the page."
            image={errorImage}
            control={
              <UserFriendlyErrorControl
                component="button"
                onClick={() => router.refresh()}
              >
                Refresh the page
              </UserFriendlyErrorControl>
            }
          />
        </MantineProvider>
      </body>
    </html>
  );
}
