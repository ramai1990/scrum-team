import { css } from '@mui/material';

import { Theme } from 'src/shared/styles/theme';

const createStyles = (props: {}, theme: Theme) => ({
  root: () => css`
    font-family: ${theme.typography.fontFamily};
    font-weight: ${theme.typography.fontWeightMedium};
    font-size: ${theme.typography.pxToRem(14)};
    line-height: ${theme.typography.pxToRem(16)};
    letter-spacing: ${theme.typography.pxToRem(0.75)};
    text-transform: uppercase;
    border-radius: ${theme.spacing(20)};
    padding: ${theme.spacing(10)} 0;
    width: 100%;
    min-width: ${theme.spacing(160)};
  `,
});

export { createStyles };
