import { css } from '@mui/material';

import { Theme } from 'src/shared/styles/theme';

const createStyles = (theme: Theme) => ({
  root: css`
    min-width: ${theme.spacing(327)};
    max-width: ${theme.spacing(327)};
    min-height: ${theme.spacing(48)};
    max-height: ${theme.spacing(484)};
    height: max-content;
    padding: 0;
    background-color: ${theme.palette.background.default};
  `,
});

export { createStyles };
