import { css } from '@mui/material';

import { Theme } from 'src/shared/styles/theme';

const createStyles = (props: {}, theme: Theme) => ({
  root: () => css`
    margin-left: ${theme.spacing(61)};
  `,
  name: () => css`
    max-width: ${theme.spacing(300)};
    font-size: ${theme.typography.pxToRem(36)};
    font-weight: ${theme.typography.fontWeightBold};
    line-height: ${theme.typography.pxToRem(43)};
    letter-spacing: 0;
    word-break: break-all;

    @media print, screen and (min-width: ${theme.breakpoints.values.sm}px) {
      max-width: ${theme.spacing(450)};
    }

    @media print, screen and (min-width: 750px) {
      max-width: ${theme.spacing(608)};
    }
  `,
  id: () => css`
    font-size: ${theme.typography.pxToRem(36)};
    font-weight: ${theme.typography.fontWeightBold};
    line-height: ${theme.typography.pxToRem(43)};
    margin-top: ${theme.spacing(29)};
  `,
  link: () =>
    css`
      display: inline-flex;
      max-width: ${theme.spacing(300)};
      font-size: ${theme.typography.pxToRem(36)};
      letter-spacing: 0;

      @media print, screen and (min-width: ${theme.breakpoints.values.sm}px) {
        max-width: ${theme.spacing(450)};
      }

      @media print, screen and (min-width: 750px) {
        max-width: ${theme.spacing(608)};
      }
    `,
  url: () => css`
    font-size: ${theme.typography.pxToRem(36)};
    font-weight: ${theme.typography.fontWeightBold};
    line-height: ${theme.typography.pxToRem(43)};
    margin-top: ${theme.spacing(33)};
  `,
  button: () => css`
    margin-top: ${theme.spacing(80)};
    width: ${theme.spacing(169)};
  `,
});

export { createStyles };
