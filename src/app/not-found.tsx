import notFoundImage from "@/assets/error/not_found.svg";
import {
  UserFriendlyError,
  UserFriendlyErrorControl,
} from "@/components/UserFriendlyError";
import { AppConfig } from "@/config/AppConfig";
import { theme } from "@/styles/theme";
import { MantineProvider } from "@mantine/core";
// biome-ignore lint/nursery/noRestrictedImports: Using non-localized Link since we don't have i18n context here
import Link from "next/link";

export default function GlobalNotFoundPage() {
  return (
    <html lang={AppConfig.defaultLocale}>
      <body>
        <MantineProvider theme={theme}>
          <UserFriendlyError
            title="Something is not right..."
            message="Page you are trying to open does not exist. You may have mistyped the address, or the page has been moved to another URL. If you think this is an error contact support."
            image={notFoundImage}
            control={
              <UserFriendlyErrorControl component={Link} href="/">
                Go back to home page
              </UserFriendlyErrorControl>
            }
          />
        </MantineProvider>
      </body>
    </html>
  );
}
