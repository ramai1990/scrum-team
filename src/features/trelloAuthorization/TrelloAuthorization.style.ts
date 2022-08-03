import { css } from '@mui/material';

import { Theme } from 'src/shared/styles/theme';

const MAX_WIDTH = 1098;
const createStyles = (props: {}, theme: Theme) => ({
  root: () => css`
    display: grid;
    grid-template-columns: ${(167 / MAX_WIDTH) * 100}% ${(470 / MAX_WIDTH) *
      100}% ${(461 / MAX_WIDTH) * 100}%;
    grid-template-rows: 31% 69%;
    grid-template-areas:
      '. authText .'
      '. button .';
    row-gap: ${theme.spacing(36)};
    align-items: flex-start;
    margin-top: ${theme.spacing(16)};

    @media print, screen and (max-width: ${theme.breakpoints.values.sm}px) {
      display: block;
      text-align: center;
    }
  `,
  authText: () => css`
    grid-area: authText;
    font-family: ${theme.typography.fontFamily};
    font-weight: ${theme.typography.fontWeightMedium};
    font-size: ${theme.typography.pxToRem(20)};
    line-height: ${theme.typography.pxToRem(23)};

    @media print, screen and (max-width: ${theme.breakpoints.values.sm}px) {
      margin-bottom: ${theme.spacing(37)};
    }
  `,
  button: () => css`
    grid-area: button;
    max-width: ${theme.spacing(169)};

    @media print, screen and (max-width: ${theme.breakpoints.values.sm}px) {
      margin: 0 auto;
    }
  `,
});

export { createStyles };
