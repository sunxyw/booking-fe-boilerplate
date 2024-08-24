import { Button, Container, Text, Title } from "@mantine/core";
import { useTranslations } from "next-intl";
import { unstable_setRequestLocale } from "next-intl/server";

import { Link } from "@/components/Link";
import UserInfo from "@/components/UserInfo";
import classes from "@/styles/home.module.css";

export default function Home({ params }: { params: { locale: string } }) {
  unstable_setRequestLocale(params.locale);

  const t = useTranslations("HomePage");

  return (
    <Container className={classes.wrapper} size={1400}>
      <div className={classes.inner}>
        <Title className={classes.title}>
          {t("title.start")}{" "}
          <Text component="span" className={classes.highlight} inherit>
            {t("title.highlight")}
          </Text>{" "}
          {t("title.end")}
        </Title>

        <Container p={0} size={600}>
          <Text size="lg" c="dimmed" className={classes.description}>
            {t("description")}
          </Text>
          <UserInfo />
        </Container>

        <div className={classes.controls}>
          <Button
            component={Link}
            href="/"
            locale="zh-hk"
            className={classes.control}
            size="lg"
          >
            Switch to Traditional Chinese
          </Button>
          <Button
            component={Link}
            href="/"
            locale="en"
            className={classes.control}
            size="lg"
          >
            Switch to English
          </Button>
        </div>
      </div>
    </Container>
  );
}
