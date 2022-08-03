import { css } from '@mui/material';

import { Theme } from 'src/shared/styles/theme';

const createStyles = (props: {}, theme: Theme) => ({
  root: css`
    max-width: ${theme.spacing(817)};
    margin-top: ${theme.spacing(8)};

    @media print, screen and (min-width: ${theme.breakpoints.values.sm}px) {
      margin-left: ${theme.spacing(102)};
    }
  `,
});

export { createStyles };
