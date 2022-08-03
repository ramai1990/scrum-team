import { useTheme } from '@mui/material';
import { FC } from 'react';

import { Alert } from '../../Alert/Alert';
import { Link } from '../../Link/Link';
import { Popper } from '../../Popper/Popper';
import { Typography } from '../../Typography/Typography';
import { createStyles } from './AuthWarningPopper.style';

type Props = {
  isOpen: boolean;
  anchorElement: Element | null;
  href?: string;
};

const AuthWarningPopper: FC<Props> = ({
  isOpen,
  anchorElement,
  href = '/mock',
}) => {
  const theme = useTheme();
  const styles = createStyles(theme);

  return (
    <Popper open={isOpen} anchorEl={anchorElement} placement="top">
      <Alert
        css={styles.alert}
        icon={false}
        severity="warning"
        action={
          <Link css={styles.link} href={href}>
            AUTH
          </Link>
        }
      >
        <Typography css={styles.message}>You are not authorized</Typography>
      </Alert>
    </Popper>
  );
};

export type { Props };

export { AuthWarningPopper };
