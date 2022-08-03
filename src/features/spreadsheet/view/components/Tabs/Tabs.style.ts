import { css } from '@mui/material';

import { Theme } from 'src/shared/styles/theme';

const createStyles = (theme: Theme) => ({
  root: () => {
    return css`
      max-width: ${theme.spacing(950)};

      @media (max-width: 900px) {
        max-width: ${theme.spacing(500)};
      }

      @media (max-width: 500px) {
        max-width: ${theme.spacing(300)};
      }

      & .MuiTabs-scrollButtons.Mui-disabled {
        width: 0;
      }
      & .MuiTabs-indicator {
        height: ${theme.spacing(3)};
      }
    `;
  },
  tab: css`
    max-width: inherit;
    position: relative;
    font-size: ${theme.spacing(20)};
    font-weight: ${theme.typography.fontWeightMedium};
    letter-spacing: ${theme.typography.pxToRem(0.01)};
    text-transform: capitalize;
    color: ${theme.palette.grey[693]};
    background: ${theme.palette.grey[70]};

    &::after {
      position: absolute;
      content: '';
      width: 100%;
      height: ${theme.spacing(3)};
      bottom: 0;
      left: 0;
      right: 0;
      background: ${theme.palette.grey[351]};
    }

    &.MuiTab-root {
      min-width: ${theme.spacing(104)};
    }
    &.Mui-selected {
      color: ${theme.palette.common.black};
    }
  `,
  linearProgress: css`
    margin-top: ${theme.spacing(50)};
  `,
});

export { createStyles };
