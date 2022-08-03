import { css } from '@mui/material';

import { Theme } from 'src/shared/styles/theme';
import { LAYOUT_FACTOR } from 'src/shared/styles/base/constants';

const createStyles = (theme: Theme) => ({
  root: () => {
    return css`
      font-size: ${theme.typography.pxToRem(14)};
      color: ${theme.palette.primary.contrastText};
      background-color: ${theme.palette.primary.main};
    `;
  },
  nav: css`
    min-height: ${theme.typography.pxToRem(100)};
    display: flex;
    align-items: center;
    justify-content: space-between;

    @media (max-width: ${theme.spacing(640)}) {
      flex-direction: column;
      text-align: center;
      gap: ${theme.spacing(25)};
      padding-top: ${theme.spacing(30)};
      padding-bottom: ${theme.spacing(30)};
    }
  `,
  services: css`
    width: ${630 / LAYOUT_FACTOR}%;
    display: flex;
    justify-content: start;
    gap: ${theme.spacing(32)};

    @media (max-width: ${theme.spacing(830)}) {
      width: auto;
    }
  `,
  users: css`
    width: ${533 / LAYOUT_FACTOR}%;
    display: flex;
    gap: ${theme.spacing(96)};
    padding-bottom: ${theme.spacing(26)};

    @media (max-width: ${theme.spacing(830)}) {
      width: auto;
      gap: ${theme.spacing(40)};
    }

    @media (max-width: ${theme.spacing(640)}) {
      padding-bottom: 0;
    }
  `,
});

export { createStyles };
