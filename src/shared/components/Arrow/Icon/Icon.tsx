import { FC, CSSProperties } from 'react';
import { useTheme } from '@mui/material';

import { Box } from '../../Box/Box';
import { ArrowRightIcon } from '../../Icon';
import { createStyles } from './Icon.style';

type Props = {
  color?: CSSProperties['color'];
};

const Icon: FC<Props> = ({ color = '' }) => {
  const theme = useTheme();
  const styles = createStyles({ color }, theme);

  return (
    <Box css={styles.root()}>
      <ArrowRightIcon
        css={styles.icon()}
        viewBox="4 8 15.9 8"
        preserveAspectRatio="none"
      />
    </Box>
  );
};

export type { Props };

export { Icon };
