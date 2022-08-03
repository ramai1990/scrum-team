import { FC } from 'react';
import { useTheme } from '@mui/material';

import { Grid, Link, Card, Typography, Box } from 'src/shared/components';

import { createStyles } from './CardLists.style';

type Props = {
  cards: string[];
  href: string;
};

const CardLists: FC<Props> = ({ cards, href }) => {
  const theme = useTheme();
  const styles = createStyles(theme);

  if (cards.length === 0) {
    return (
      <Typography css={styles.description} variant="h6">
        Здесь пока нет карточек...
      </Typography>
    );
  }

  return (
    <Grid
      css={styles.root}
      container
      justifyContent="space-between"
      rowGap={30}
      columnGap={30}
    >
      {cards.map((title, i) => (
        <Link
          css={styles.link}
          key={i}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Card
            css={styles.card}
            content={{
              children: (
                <>
                  <Typography css={styles.title} variant="h5">
                    {title}
                  </Typography>
                </>
              ),
            }}
          />
        </Link>
      ))}
      <Box css={styles.item} />
      <Box css={styles.item} />
      <Box css={styles.item} />
    </Grid>
  );
};

export type { Props };

export { CardLists };
