import { css } from '@mui/material';

import { Theme } from 'src/shared/styles/theme';

const createStyles = (props: { color: string }, theme: Theme) => ({
  root: css`
    display: flex;
    flex-direction: column;
    gap: ${theme.spacing(80)};
    padding: ${theme.spacing(40)};
  `,
  row: css`
    display: flex;
    justify-content: space-around;
  `,
  slot: css`
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: ${theme.spacing(320)};
    height: ${theme.spacing(160)};
    padding: ${theme.spacing(16)};
    background-color: ${theme.palette.grey[400]};
  `,
  hoverExample: css`
    color: ${props.color};
  `,
});

export { createStyles };
