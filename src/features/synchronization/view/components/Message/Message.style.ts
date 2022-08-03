import { css } from '@mui/material';

import { Theme } from 'src/shared/styles/theme';

const createStyles = (theme: Theme) => ({
  root: () => css`
    display: -webkit-box;
    -webkit-line-clamp: 4;
    -webkit-box-orient: vertical;
    min-height: ${theme.spacing(93)};
    height: ${theme.spacing(93)};
    padding: ${theme.spacing(0, 4)};
    text-align: center;
    font-weight: ${theme.typography.fontWeightMedium};
    font-size: ${theme.typography.pxToRem(20)};
    line-height: ${theme.typography.pxToRem(23)};
    letter-spacing: ${theme.typography.pxToRem(0.01)};
    word-wrap: break-word;
    text-overflow: ellipsis;
    color: ${theme.palette.common.black};
    overflow: hidden;

    @media print, screen and (max-width: ${theme.breakpoints.values.sm}px) {
      -webkit-line-clamp: 5;
      min-height: ${theme.spacing(115)};
      height: ${theme.spacing(115)};
    }
  `,
  link: () => css`
    text-decoration: none;
  `,
  linkText: () => css`
    display: inline-block;
    max-width: ${theme.spacing(170)};
    vertical-align: text-bottom;
    font-weight: ${theme.typography.fontWeightMedium};
    font-size: ${theme.typography.pxToRem(20)};
    line-height: ${theme.typography.pxToRem(23)};
    letter-spacing: ${theme.typography.pxToRem(0.01)};
    word-wrap: break-word;
    text-decoration: underline;
    text-underline-offset: 0.05rem;
    text-decoration-thickness: 0.05rem;
  `,
});

export { createStyles };
