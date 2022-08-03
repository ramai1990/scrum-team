import { FC } from 'react';
import { useTheme } from '@mui/material';

import { GetCardsOnABoardResponse } from 'src/shared/api/trello';
import { Box, Grid, Link } from 'src/shared/components';

import { createStyles } from './CardLists.style';
import { Card } from '../Card/Card';

type Props = {
  items: GetCardsOnABoardResponse[];
  route: string | undefined;
  id: string | undefined;
};

const CardLists: FC<Props> = ({ items, route, id }) => {
  const theme = useTheme();
  const styles = createStyles(theme);

  return (
    <Grid
      css={styles.root}
      container
      justifyContent="space-between"
      rowGap={30}
      columnGap={30}
    >
      {items
        .filter(({ idList }) => idList === id)
        .map(({ id: idCard, name: cardName, dateLastActivity }) => (
          <Link css={styles.link} key={idCard} href={`${route}/${idCard}`}>
            <Card dateLastActivity={dateLastActivity} cardName={cardName} />
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
