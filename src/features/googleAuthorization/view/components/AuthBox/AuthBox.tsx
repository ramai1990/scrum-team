import { useTheme } from '@mui/material';
import { FC } from 'react';

import { Box, Button, Typography } from 'src/shared/components';

import { createStyles } from './AuthBox.style';

type Props = {
  onAuth: () => void;
};

const AuthBox: FC<Props> = ({ onAuth }) => {
  const theme = useTheme();
  const styles = createStyles({}, theme);

  return (
    <Box css={styles.root()}>
      <Typography css={styles.authText()}>Not authorized</Typography>
      <Box css={styles.buttonWrapper()}>
        <Button css={styles.button()} variant="contained" onClick={onAuth}>
          authorization
        </Button>
      </Box>
    </Box>
  );
};

export type { Props };

export { AuthBox };
