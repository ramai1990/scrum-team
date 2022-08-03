import { CSSProperties, FC } from 'react';
import { useTheme } from '@mui/material';

import { Box } from '../Box/Box';
import { createStyles } from './Arrow.style';
import { CloudIcon } from './CloudIcon/CloudIcon';
import { Icon } from './Icon/Icon';
import { NONE } from './constants';
import { Status } from './status';

type Props = {
  cloudColor?: CSSProperties['color'];

  iconColor?: CSSProperties['color'];

  convertingStatus: Status;
};

const Arrow: FC<Props> = ({
  cloudColor = '',
  iconColor = '',
  convertingStatus = NONE,
}) => {
  const theme = useTheme();
  const styles = createStyles(theme);

  return (
    <Box css={styles.root()}>
      <CloudIcon color={cloudColor} convertingStatus={convertingStatus} />
      <Icon color={iconColor} />
    </Box>
  );
};

export { Arrow };
