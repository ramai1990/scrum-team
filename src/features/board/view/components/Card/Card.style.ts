import { css } from '@mui/material';

import { Theme } from 'src/shared/styles/theme';

import { CARD_BOX_SHADOW } from '../constants';

const createStyles = (theme: Theme) => ({
  root: () => {
    return css`
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      background-color: ${theme.palette.grey[50]};
      box-shadow: ${CARD_BOX_SHADOW};
      &.MuiPaper-root {
        border-radius: ${theme.spacing(2)};
      }
      & .MuiCardContent-root {
        min-width: ${theme.spacing(220)};
        max-width: ${theme.spacing(220)};
        min-height: ${theme.spacing(100)};
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        gap: ${theme.spacing(20)};
        padding: ${theme.spacing(14)};

        &:last-child {
          padding-bottom: ${theme.spacing(15)};
        }
      }
      & .MuiCardActions-spacing {
        padding: 0;
      }
    `;
  },
  title: css`
    font-size: ${theme.typography.pxToRem(14)};
    font-weight: ${theme.typography.fontWeightRegular};
    word-break: break-word;
    color: ${theme.palette.grey[693]};
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
  `,
  date: css`
    font-size: ${theme.typography.pxToRem(14)};
    line-height: ${theme.typography.pxToRem(16)};
    letter-spacing: ${theme.typography.pxToRem(0.05)};
    color: ${theme.palette.common.black};
    margin-left: auto;
  `,
});

export { createStyles };
