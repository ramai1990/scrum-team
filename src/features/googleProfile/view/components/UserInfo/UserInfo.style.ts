import { css } from '@mui/material';

import { Theme } from 'src/shared/styles/theme';

const createStyles = (props: {}, theme: Theme) => ({
  root: () => css`
    display: grid;
    grid-template-rows: ${theme.spacing(25)};
    grid-template-columns: ${theme.spacing(140)} ${theme.spacing(110)} auto;
    grid-template-areas: 'avatar . .' 'avatar . info';
    margin-top: ${theme.spacing(16)};
    margin-left: 13.45%;

    @media print, screen and (max-width: ${theme.breakpoints.values.md}px) {
      grid-template-columns: ${theme.spacing(140)} 12% auto;
    }

    @media print, screen and (max-width: ${theme.breakpoints.values.sm}px) {
      grid-template: 3fr 1fr auto / 1fr ${theme.spacing(140)} 1fr;
      grid-template-areas: '. avatar .' '. . .' 'info info info';
      justify-content: center;
      margin: 0;
    }
  `,
  avatar: () => css`
    grid-area: avatar;
  `,
  info: () => css`
    grid-area: info;
  `,
});

export { createStyles };
