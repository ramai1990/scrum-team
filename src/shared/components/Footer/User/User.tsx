import { FC } from 'react';
import { useTheme } from '@mui/material';

import { Box } from '../../Box/Box';
import { Typography } from '../../Typography/Typography';
import { Link } from '../../Link/Link';
import { createStyles } from './User.style';

type Props = {
  title: string;
  user: string;
  href: string;
};

const User: FC<Props> = ({ title, user = 'Авторизоваться', href }) => {
  const theme = useTheme();
  const styles = createStyles(theme);

  return (
    <Box css={styles.root}>
      <Typography css={styles.title} variant="h3">
        {title}
      </Typography>
      <Link css={styles.link} color="inherit" href={href}>
        {user}
      </Link>
    </Box>
  );
};

export type { Props };

export { User };
