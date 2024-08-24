import { type ImageProps, Image as MantineImage } from "@mantine/core";
// biome-ignore lint/nursery/noRestrictedImports: we need to import the original `Image` component
import NextImage from "next/image";

export const Image = (props: ImageProps & { alt: string }) => {
  return <MantineImage component={NextImage} {...props} />;
};
