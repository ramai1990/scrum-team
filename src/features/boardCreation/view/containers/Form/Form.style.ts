import { css } from '@mui/material';

import { Theme } from 'src/shared/styles/theme';

const createStyles = (props: {}, theme: Theme) => {
  const rootWidth = 328;

  return {
    root: () => css`
      max-width: ${theme.spacing(rootWidth)};
      margin-top: ${theme.spacing(16)};
    `,
    name: () => css`
      margin-top: ${theme.spacing(8)};
    `,
    description: () => css`
      margin-top: ${theme.spacing(5)};
    `,
    palette: () => css``,
    submitButton: () => css`
      width: ${theme.spacing(169)};
    `,
  };
};

export { createStyles };
