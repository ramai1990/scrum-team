import { FC } from 'react';
import { useTheme } from '@mui/material';

import { Box } from 'src/shared/components';

import { Header } from './Header/Header';
import { createStyles } from './DefaultLayout.style';

type Props = {
  withHeader?: boolean;
};

const DefaultLayout: FC<Props> = ({ children, withHeader = false }) => {
  const theme = useTheme();
  const styles = createStyles({ withHeader }, theme);

  return (
    <Box css={styles.root()}>
      {withHeader && (
        <Box css={styles.header()}>
          <Header />
        </Box>
      )}

      {children}
    </Box>
  );
};

export type { Props };

export { DefaultLayout };
