import { css } from '@mui/material';

import { Theme } from 'src/shared/styles/theme';

const createStyles = (theme: Theme) => ({
  root: () => {
    return css`
      margin: ${theme.spacing(98, 0, 0, 73)};

      @media (max-width: 900px) {
        margin: ${theme.spacing(98, 10, 0, 73)};
      }

      @media (max-width: 599px) {
        margin: ${theme.spacing(0, 10, 0, 10)};
        margin-bottom: 100%;
      }
    `;
  },
  linearProgress: css`
    margin-top: ${theme.spacing(50)};
  `,
});

export { createStyles };
