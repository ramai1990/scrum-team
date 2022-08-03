import { css } from '@mui/material';

import { Theme } from 'src/shared/styles/theme';

const createStyles = (props: {}, theme: Theme) => ({
  root: () => css`
    font-size: ${theme.typography.pxToRem(24)};
    font-weight: ${theme.typography.fontWeightMedium};
    line-height: ${theme.typography.pxToRem(28)};
    color: ${theme.palette.grey[693]};
    letter-spacing: ${theme.typography.pxToRem(0.01)};
  `,
  link: () => css`
    font-size: ${theme.typography.pxToRem(24)};
    font-weight: ${theme.typography.fontWeightMedium};
    line-height: ${theme.typography.pxToRem(28)};
    color: ${theme.palette.grey[693]};
    letter-spacing: ${theme.typography.pxToRem(0.01)};
    text-decoration: none;
    position: relative;

    &::after {
      position: absolute;
      content: '';
      width: 100%;
      height: ${theme.spacing(1)};
      bottom: ${theme.spacing(3)};
      left: 0;
      right: 0;
      background-color: ${theme.palette.grey[693]};
    }
  `,
});

export { createStyles };
