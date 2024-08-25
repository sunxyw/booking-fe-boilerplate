import { MantineProvider } from "@mantine/core";
import type { PropsWithChildren } from "react";

import { theme } from "@/styles/theme";

export const ServerProviders = ({ children }: PropsWithChildren) => {
  return <MantineProvider theme={theme}>{children}</MantineProvider>;
};
