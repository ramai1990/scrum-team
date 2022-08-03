import { css } from '@mui/material';

import { Theme } from 'src/shared/styles/theme';

const createStyles = (theme: Theme) => ({
  root: () => {
    return css`
      @media (max-width: 789px) {
        justify-content: space-evenly;
      }
    `;
  },
  link: css`
    text-decoration: none;
    transition: ${theme.transitions.create('box-shadow')};

    &:hover {
      box-shadow: ${theme.shadows[3]};
    }
  `,
  item: css`
    min-width: ${theme.spacing(220)};
    max-width: ${theme.spacing(220)};
    height: 0;
  `,
});

export { createStyles };
