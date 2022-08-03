import { css } from '@mui/material';

import { Theme } from 'src/shared/styles/theme';

import type { Props } from './Tag';

const createStyles = (props: Required<Pick<Props, 'color'>>, theme: Theme) => ({
  root: () => css`
    display: grid;
    max-width: ${theme.spacing(70)};
    max-height: ${theme.spacing(26)};
    width: 100%;
    height: 100%;
  `,
  icon: () => css`
    width: 100%;
    height: 100%;
    max-height: ${theme.spacing(26)};
    color: ${props.color};
    grid-area: 1/-1;
  `,
  text: () => css`
    grid-area: 1/-1;
    display: flex;
    align-items: center;
    color: ${theme.palette.common.white};
    font-family: ${theme.typography.fontFamily};
    font-weight: ${theme.typography.fontWeightMedium};
    font-size: ${theme.typography.pxToRem(12)};
    line-height: ${theme.typography.pxToRem(14)};
    max-width: ${theme.spacing(60)};
    padding-left: ${theme.spacing(8)};
  `,
});

export { createStyles };
