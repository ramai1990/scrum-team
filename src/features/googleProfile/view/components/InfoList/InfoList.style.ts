import { css } from '@mui/material';

import { Theme } from 'src/shared/styles/theme';

const createStyles = (props: {}, theme: Theme) => ({
  root: () => css`
    display: flex;
    flex-direction: column;
    gap: ${theme.spacing(32)};
    padding: 0;
  `,
  item: () => css`
    font-family: ${theme.typography.fontFamily};
    font-weight: ${theme.typography.fontWeightMedium};
    font-size: ${theme.typography.pxToRem(20)};
    line-height: ${theme.typography.pxToRem(23)};
    word-break: break-word;

    @media print, screen and (max-width: ${theme.breakpoints.values.sm}px) {
      display: flex;
      justify-content: center;
      text-align: center;
    }
  `,
});

export { createStyles };
