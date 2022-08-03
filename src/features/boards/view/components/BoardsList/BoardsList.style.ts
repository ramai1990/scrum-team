import { css } from '@mui/material';

import { Theme } from 'src/shared/styles/theme';

const createStyles = (theme: Theme) => ({
  list: css`
    display: flex;
    flex-flow: row wrap;
    padding: 0;
    gap: ${theme.spacing(52, 100)};

    @media print, screen and (max-width: ${theme.breakpoints.values.lg}px) {
      gap: ${theme.spacing(26, 50)};
    }
  `,
  item: css`
    display: flex;
    flex: 1 1 1%;
    justify-content: center;
    width: min-content;
  `,
});

export { createStyles };
