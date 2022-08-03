import { css } from '@mui/material';

import { Theme } from 'src/shared/styles/theme';

const createStyles = (theme: Theme) => ({
  root: () => {
    return css`
      margin-top: ${theme.spacing(70)};
    `;
  },
  description: css`
    margin-top: ${theme.spacing(40)};
  `,
});

export { createStyles };
