import { css } from '@mui/material';

import { Theme } from 'src/shared/styles/theme';

const createStyles = (theme: Theme) => ({
  root: () => {
    return css`
      padding-top: 8.527%;
      margin-left: 5%;
      margin-bottom: 100%;

      @media (max-width: 900px) {
        padding-right: ${theme.spacing(10)};
        padding-left: ${theme.spacing(10)};
      }

      @media (max-width: 599px) {
        padding-top: 0;
        margin-left: 0;
      }
    `;
  },
  linearProgress: css`
    margin-top: ${theme.spacing(50)};
  `,
  title: css`
    display: inline-block;
    text-decoration: none;
    font-family: ${theme.typography.fontFamily};
    font-weight: ${theme.typography.fontWeightBold};
    font-size: ${theme.typography.pxToRem(36)};
    line-height: ${theme.typography.pxToRem(42)};
    letter-spacing: ${theme.typography.pxToRem(0.01)};
    color: ${theme.palette.common.black};
    word-break: break-word;
    margin-bottom: 8%;
  `,
});

export { createStyles };
