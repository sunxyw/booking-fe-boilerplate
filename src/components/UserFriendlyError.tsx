import { Button, Container, SimpleGrid, Text, Title } from "@mantine/core";
import type { StaticImport } from "next/dist/shared/lib/get-img-props";
import { Image } from "./Image";
import { Link } from "./Link";
import classes from "./UserFriendlyError.module.css";

interface UserFriendlyErrorProps {
  title: string;
  message: string;
  image: StaticImport;
  allowRefresh?: boolean;
}

export const UserFriendlyError = ({
  title,
  message,
  image,
  allowRefresh = false,
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
          {allowRefresh ? (
            <Button
              variant="outline"
              size="md"
              mt="xl"
              className={classes.control}
              onClick={() => window.location.reload()}
            >
              Refresh the page
            </Button>
          ) : (
            <Button
              component={Link}
              href="/"
              variant="outline"
              size="md"
              mt="xl"
              className={classes.control}
            >
              Get back to home page
            </Button>
          )}
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
