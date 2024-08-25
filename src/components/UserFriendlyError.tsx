"use client";

import {
  Button,
  type ButtonProps,
  Container,
  SimpleGrid,
  Text,
  Title,
  createPolymorphicComponent,
} from "@mantine/core";
import type { StaticImport } from "next/dist/shared/lib/get-img-props";
import { type ReactNode, forwardRef } from "react";
import { Image } from "./Image";
import classes from "./UserFriendlyError.module.css";

interface UserFriendlyErrorControlProps extends ButtonProps {}

export const UserFriendlyErrorControl = createPolymorphicComponent<
  "button",
  UserFriendlyErrorControlProps
>(
  forwardRef<HTMLButtonElement, UserFriendlyErrorControlProps>(
    (props: UserFriendlyErrorControlProps, ref) => {
      return (
        <Button
          ref={ref}
          variant="outline"
          size="md"
          mt="xl"
          className={classes.control}
          {...props}
        />
      );
    },
  ),
);

interface UserFriendlyErrorProps {
  title: string;
  message: string;
  image: StaticImport;
  control?: ReactNode;
}

export const UserFriendlyError = ({
  title,
  message,
  image,
  control,
}: UserFriendlyErrorProps) => {
  return (
    <Container className={classes.root}>
      <SimpleGrid spacing={{ base: 40, sm: 80 }} cols={{ base: 1, sm: 2 }}>
        <Image
          src={image}
          alt=""
          className={classes.mobileImage}
          fit="contain"
        />
        <div>
          <Title className={classes.title}>{title}</Title>
          <Text c="dimmed" size="lg">
            {message}
          </Text>
          {control}
        </div>
        <Image
          src={image}
          alt=""
          className={classes.desktopImage}
          fit="contain"
        />
      </SimpleGrid>
    </Container>
  );
};
