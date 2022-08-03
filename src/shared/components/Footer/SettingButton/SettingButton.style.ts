import { css } from '@mui/material';

import { Theme } from 'src/shared/styles/theme';

const createStyles = (theme: Theme) => ({
  root: () => {
    return css`
      position: relative;
    `;
  },
  button: css`
    max-width: ${theme.typography.pxToRem(100)};
    min-width: auto;
    letter-spacing: ${theme.typography.pxToRem(0.05)};
    text-transform: capitalize;
    padding: 0;
    transition: ${theme.transitions.create('opacity')};
    cursor: pointer;

    &:hover {
      opacity: 0.74;
    }
  `,
});

export { createStyles };
