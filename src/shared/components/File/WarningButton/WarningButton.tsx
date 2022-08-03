import { useTheme } from '@mui/material';
import { FC } from 'react';

import { Button } from '../../Button/Button';
import { WarningIcon } from '../../Icon';
import { createStyles } from './WarningButton.style';

type Props = {
  onClick: (event: any) => void;
  message?: string;
};

const WarningButton: FC<Props> = ({ onClick, message = 'See warning' }) => {
  const theme = useTheme();
  const styles = createStyles(theme);

  return (
    <Button css={styles.root} onClick={onClick}>
      {message}
      <WarningIcon css={styles.icon} />
    </Button>
  );
};

export type { Props };

export { WarningButton };
