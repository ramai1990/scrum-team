import { css } from '@mui/material';

import { Theme } from 'src/shared/styles/theme';

const createStyles = (theme: Theme) => ({
  root: () => {
    return css`
      position: relative;
      transition: ${theme.transitions.create('opacity')};
      padding-top: ${theme.spacing(1)};
      padding-right: ${theme.spacing(16)};

      &:hover {
        opacity: 0.74;
      }
    `;
  },
});

export { createStyles };
