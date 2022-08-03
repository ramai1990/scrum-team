import { css } from '@mui/material';

import { Theme } from 'src/shared/styles/theme';

const createStyles = (theme: Theme) => ({
  root: css`
    padding: ${theme.spacing(12, 16)};
  `,
  text: css`
    width: ${theme.spacing(296)};
    font-size: ${theme.typography.pxToRem(16)};
    line-height: ${theme.typography.pxToRem(24)};
  `,
});

export { createStyles };
