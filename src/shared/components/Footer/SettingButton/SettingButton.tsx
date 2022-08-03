import { FC, ReactNode } from 'react';
import { useTheme } from '@mui/material';

import { Box } from '../../Box/Box';
import { Button } from '../../Button/Button';
import { createStyles } from './SettingButton.style';

type Props = {
  buttonName: string;
  controls: ReactNode[];
};

const SettingButton: FC<Props> = ({ buttonName, controls }) => {
  const theme = useTheme();
  const styles = createStyles(theme);

  return (
    <Box css={styles.root}>
      <Button css={styles.button} variant="text" color="inherit" noWrap>
        {buttonName}
      </Button>
      {controls}
    </Box>
  );
};

export type { Props };

export { SettingButton };
