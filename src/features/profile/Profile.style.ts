import { css } from '@mui/material';

import { Theme } from 'src/shared/styles/theme';

const MAX_WIDTH = 620;
const createStyles = (props: {}, theme: Theme) => ({
  root: () => css`
    display: grid;
    grid-template-columns: ${(140 / MAX_WIDTH) * 100}% ${(110 / MAX_WIDTH) *
      100}% ${(370 / MAX_WIDTH) * 100}%;
    grid-template-rows: auto;
    grid-template-areas:
      'avatar . info'
      'description description description';
    align-items: flex-start;
    row-gap: ${theme.spacing(33)};
    max-width: ${theme.spacing(MAX_WIDTH)};
    margin-left: 13.45%;
    margin-top: ${theme.spacing(16)};

    @media print, screen and (max-width: ${theme.breakpoints.values.sm}px) {
      margin-left: 0;
      max-width: none;
      grid-template-columns: ${(160 / MAX_WIDTH) * 100}% ${(90 / MAX_WIDTH) *
        100}% ${(370 / MAX_WIDTH) * 100}%;
    }
  `,
  avatar: () => css`
    grid-area: avatar;

    @media print, screen and (max-width: ${theme.breakpoints.values.sm}px) {
      align-self: end;
    }
  `,
  info: () => css`
    grid-area: info;
  `,
  description: () => css`
    grid-area: description;
    min-width: ${theme.spacing(340)};
    margin-left: ${theme.spacing(5)};
  `,
  descriptionText: () => css`
    font-family: ${theme.typography.fontFamily};
    font-weight: ${theme.typography.fontWeightRegular};
    font-size: ${theme.typography.pxToRem(20)};
    line-height: ${theme.typography.pxToRem(23)};
    color: ${theme.palette.grey[693]};
    letter-spacing: 0;
    word-break: break-word;
  `,
  name: () => css`
    font-family: ${theme.typography.fontFamily};
    font-weight: ${theme.typography.fontWeightMedium};
    font-size: ${theme.typography.pxToRem(20)};
    line-height: ${theme.typography.pxToRem(23)};
    margin-top: ${theme.spacing(25)};
    word-break: break-all;
  `,
  board: () => css`
    font-family: ${theme.typography.fontFamily};
    font-weight: ${theme.typography.fontWeightMedium};
    font-size: ${theme.typography.pxToRem(20)};
    line-height: ${theme.typography.pxToRem(23)};
    margin-top: ${theme.spacing(40)};
    word-break: break-all;
  `,
});

export { createStyles };
