import { css } from '@mui/material';

import { Theme } from 'src/shared/styles/theme';

const createStyles = (props: {}, theme: Theme) => ({
  item: css`
    width: ${theme.spacing(225)};
  `,
});

export { createStyles };
