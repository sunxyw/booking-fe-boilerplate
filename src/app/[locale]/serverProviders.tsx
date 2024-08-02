import { MantineProvider } from '@mantine/core';
import type { PropsWithChildren } from 'react';
import type React from 'react';

import { theme } from '@/styles/theme';

export default function ServerProviders({
  children,
}: PropsWithChildren<{}>): React.ReactNode {
  return <MantineProvider theme={theme}>{children}</MantineProvider>;
}
