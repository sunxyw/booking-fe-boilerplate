import { Button, Container, Text, Title } from '@mantine/core';
import Link from 'next/link';
import { useTranslations } from 'next-intl';

import classes from '@/styles/home.module.css';

export default function Home() {
  const t = useTranslations('HomePage');

  return (
    <Container className={classes.wrapper} size={1400}>
      <div className={classes.inner}>
        <Title className={classes.title}>
          {t('title.start')}{' '}
          <Text component="span" className={classes.highlight} inherit>
            {t('title.highlight')}
          </Text>{' '}
          {t('title.end')}
        </Title>

        <Container p={0} size={600}>
          <Text size="lg" c="dimmed" className={classes.description}>
            {t('description')}
          </Text>
        </Container>

        <div className={classes.controls}>
          <Button className={classes.control} size="lg">
            <Link href="/zh-hk/home">Switch to Traditional Chinese</Link>
          </Button>
          <Button className={classes.control} size="lg">
            <Link href="/en/home">Switch to English</Link>
          </Button>
        </div>
      </div>
    </Container>
  );
}
