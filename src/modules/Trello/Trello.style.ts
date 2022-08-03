import { css } from '@mui/material';

import { Theme } from 'src/shared/styles/theme';

const createStyles = (props: {}, theme: Theme) => ({
  root: () => css`
    height: 100%;

    /* padding-top: ${theme.spacing(217)}; */
  `,
});

export { createStyles };
