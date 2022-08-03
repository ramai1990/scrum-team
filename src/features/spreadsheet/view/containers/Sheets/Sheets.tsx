import { FC } from 'react';
import { useTheme } from '@mui/material';

import { useAppSelector } from 'src/app/hooks';
import { REQUEST_STATUS } from 'src/shared/helpers/redux';
import { Alert, Box, LinearProgress } from 'src/shared/components';

import { selectError, selectItems, selectStatus } from '../../../redux/slice';
import { Tabs } from '../../components';
import { createStyles } from './Sheets.style';

type Props = {
  href: string;
};

const Sheets: FC<Props> = ({ href }) => {
  const theme = useTheme();
  const styles = createStyles(theme);

  const items = useAppSelector(selectItems);

  const status = useAppSelector(selectStatus);
  const error = useAppSelector(selectError);

  const sheetTitles = Object.keys(items);
  const sheetIDs = Object.values(items).map(({ id }) => id);

  switch (status) {
    case REQUEST_STATUS.idle:
    case REQUEST_STATUS.pending: {
      return <LinearProgress css={styles.linearProgress} />;
    }
    case REQUEST_STATUS.fulfilled: {
      return (
        <Box css={styles.root}>
          <Tabs
            href={href}
            sheetTitles={sheetTitles}
            sheetIDs={sheetIDs}
            items={items}
          />
        </Box>
      );
    }
    case REQUEST_STATUS.rejected: {
      return <Alert severity="error">{error}</Alert>;
    }

    default: {
      return null;
    }
  }
};

export type { Props };

export { Sheets };
