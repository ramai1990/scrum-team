import { css } from '@mui/material';

import { Theme } from 'src/shared/styles/theme';

const createStyles = (theme: Theme) => ({
  boardsWrapper: css`
    padding: ${theme.spacing(24, 86, 24, 61)};

    @media print, screen and (max-width: ${theme.breakpoints.values.lg}px) {
      padding: ${theme.spacing(24, 5, 24, 61)};
    }

    @media print, screen and (max-width: ${theme.breakpoints.values.sm}px) {
      padding: ${theme.spacing(0, 5, 15)};
    }
  `,
});

export { createStyles };
