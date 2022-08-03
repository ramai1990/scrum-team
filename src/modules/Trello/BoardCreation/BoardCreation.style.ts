import { css } from '@mui/material';

import { Theme } from 'src/shared/styles/theme';

const createStyles = (props: {}, theme: Theme) => ({
  root: () => css`
    @media print, screen and (min-width: ${theme.breakpoints.values.sm}px) {
      margin-left: ${theme.spacing(60)};
    }
  `,
});

export { createStyles };
