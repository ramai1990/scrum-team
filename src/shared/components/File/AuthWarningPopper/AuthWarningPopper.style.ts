import { css } from '@mui/material';

import { Theme } from 'src/shared/styles/theme';

const createStyles = (theme: Theme) => ({
  alert: css`
    display: flex;
    align-items: center;
    min-width: ${theme.spacing(360)};
    min-height: ${theme.spacing(48)};
    padding: ${theme.spacing(0, 24, 0, 17)};
    border-radius: 0;
    background-color: ${theme.palette.text.primary};
    box-shadow: ${theme.shadows[6]};
    color: ${theme.palette.primary.contrastText};
  `,
  message: css`
    font-size: ${theme.typography.pxToRem(17)};
    line-height: ${theme.typography.pxToRem(20)};
    font-weight: ${theme.typography.fontWeightLight};
  `,
  link: css`
    min-width: max-content;
    color: ${theme.palette.primary.contrastText};
    font-size: ${theme.typography.pxToRem(17)};
    line-height: ${theme.typography.pxToRem(16)};
    font-weight: ${theme.typography.fontWeightRegular};
    text-decoration: none;
  `,
});

export { createStyles };
