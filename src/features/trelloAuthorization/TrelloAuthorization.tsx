import { useTheme } from '@mui/material';
import { FC } from 'react';

import { Box, Typography } from 'src/shared/components';

import { AuthorizationButton } from './view/containers';
import { createStyles } from './TrelloAuthorization.style';

const TrelloAuthorization: FC = () => {
  const theme = useTheme();
  const styles = createStyles({}, theme);

  return (
    <Box css={styles.root()}>
      <Typography css={styles.authText()}>Not authorized</Typography>
      <Box css={styles.button()}>
        <AuthorizationButton />
      </Box>
    </Box>
  );
};

export { TrelloAuthorization };
