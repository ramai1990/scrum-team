import { FC } from 'react';
import { useTheme } from '@mui/material';

import { Card as MuiCard, Typography } from 'src/shared/components';
import { setDateFormat } from 'src/shared/helpers/scripts/formattingDate';

import { createStyles } from './Card.style';

type Props = {
  dateLastActivity: string;
  cardName: string | undefined;
};

const Card: FC<Props> = ({ dateLastActivity, cardName }) => {
  const theme = useTheme();
  const styles = createStyles(theme);

  return (
    <MuiCard
      css={styles.root}
      content={{
        children: (
          <>
            <Typography css={styles.title} variant="h5">
              {cardName}
            </Typography>
            <Typography css={styles.date}>
              {setDateFormat(dateLastActivity)}
            </Typography>
          </>
        ),
      }}
    />
  );
};

export type { Props };

export { Card };
