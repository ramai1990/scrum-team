import { css } from '@mui/material';

import { Theme } from 'src/shared/styles/theme';

import { MIN_SIZE } from '../constants';

const createStyles = (theme: Theme) => ({
  root: css`
    min-width: ${theme.spacing(MIN_SIZE)};
    max-width: ${theme.spacing(50)};
    max-height: ${theme.spacing(50)};
    width: 100%;
    height: 100%;
    padding: 0;
    font-size: 0;
    border-radius: ${theme.spacing(12)};
    &:hover {
      background-color: transparent;
    }
  `,
  icon: css`
    width: 100%;
    height: 100%;
    color: ${theme.palette.warning.main};
  `,
});

export { createStyles };
