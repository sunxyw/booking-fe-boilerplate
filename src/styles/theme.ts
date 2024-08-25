// Fonts
import "@fontsource-variable/noto-sans"; // Noto Sans Variable
import "@fontsource-variable/lora"; // Lora Variable
import "@fontsource-variable/noto-sans-hk"; // Noto Sans HK Variable
import "@fontsource/lxgw-wenkai-tc"; // LXGW WenKai TC
import "@fontsource-variable/noto-sans-sc"; // Noto Sans SC Variable
import "@fontsource/lxgw-wenkai"; // LXGW WenKai

import { DEFAULT_THEME, createTheme } from "@mantine/core";

export const theme = createTheme({
  fontFamily: `var(--font-sans), ${DEFAULT_THEME.fontFamily}`,
  fontFamilyMonospace: `var(--font-monospace), ${DEFAULT_THEME.fontFamilyMonospace}`,
});
