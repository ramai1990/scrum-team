import { css } from '@mui/material';

import { Theme } from 'src/shared/styles/theme';

const createStyles = (props: {}, theme: Theme) => ({
  root: () => css`
    max-width: ${theme.spacing(400)};
    border: ${theme.spacing(1)} solid ${theme.palette.common.linkWater};
    border-radius: ${theme.spacing(8)};
  `,
  profileBox: () => css`
    padding: ${theme.spacing(0)} ${theme.spacing(16)};
    display: grid;
    grid-template-columns: ${theme.spacing(24)} 1fr;
    grid-template-areas: 'avatar name';
    grid-template-rows: minmax(57px, auto);
    column-gap: ${theme.spacing(16)};
    align-items: center;
    border-bottom: ${theme.spacing(1)} solid ${theme.palette.common.linkWater};
  `,
  commentBox: () => css`
    padding: ${theme.spacing(16)};
  `,
  avatar: () => css`
    grid-area: avatar;
  `,
  name: () => css`
    grid-area: name;
    font-family: ${theme.typography.fontFamily};
    font-weight: ${theme.typography.fontWeightMedium};
    font-size: ${theme.typography.pxToRem(14)};
    line-height: ${theme.typography.pxToRem(16)};
  `,
  text: () => css`
    font-family: ${theme.typography.fontFamily};
    font-weight: ${theme.typography.fontWeightMedium};
    font-size: ${theme.typography.pxToRem(14)};
    line-height: ${theme.typography.pxToRem(20)};
    color: ${theme.palette.common.midnight};
    letter-spacing: ${theme.typography.pxToRem(0.01)};
  `,
  link: () => css`
    text-decoration: underline;
  `,
  date: () => css`
    font-family: ${theme.typography.fontFamily};
    font-weight: ${theme.typography.fontWeightRegular};
    font-size: ${theme.typography.pxToRem(14)};
    line-height: ${theme.typography.pxToRem(20)};
    color: ${theme.palette.grey[693]};
    margin-top: ${theme.spacing(10)};
  `,
});

export { createStyles };
