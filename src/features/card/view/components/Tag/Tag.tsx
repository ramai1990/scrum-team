import { FC } from 'react';
import { useTheme } from '@mui/material';

import { Box, Typography, LabelIcon } from 'src/shared/components';

import { createStyles } from './Tag.style';

type Props = {
  color: string;
  text: string | undefined;
};

const Tag: FC<Props> = ({ color, text }) => {
  const theme = useTheme();
  const styles = createStyles({ color }, theme);

  return (
    <Box css={styles.root}>
      <LabelIcon
        css={styles.icon}
        viewBox="3 5 19 14"
        preserveAspectRatio="none"
      ></LabelIcon>
      <Typography css={styles.text} noWrap>
        {text}
      </Typography>
    </Box>
  );
};

export type { Props };

export { Tag };
