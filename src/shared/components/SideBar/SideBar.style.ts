import { css } from '@mui/material';

import { Theme } from 'src/shared/styles/theme';

const createStyles = (props: {}, theme: Theme) => ({
  root: () => css``,
  breadcrumbs: () =>
    css`
      display: block;

      & .MuiBreadcrumbs-ol {
        display: block;
      }

      & .MuiBreadcrumbs-li {
        font-family: ${theme.typography.button.fontFamily};
        font-weight: ${theme.typography.fontWeightMedium};
        font-size: ${theme.typography.pxToRem(20)};
        line-height: ${theme.typography.button.lineHeight};
        padding-bottom: ${theme.spacing(49)};
      }
      & .MuiBreadcrumbs-separator {
        margin-left: ${theme.typography.pxToRem(24)};
        margin-right: ${theme.typography.pxToRem(24)};
      }
    `,
});

export { createStyles };
