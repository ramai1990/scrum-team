import { css } from '@mui/material';

import { Theme } from 'src/shared/styles/theme';

const MAX_WIDTH = 950;
const createStyles = (theme: Theme) => ({
  root: () => css`
    max-width: ${theme.spacing(MAX_WIDTH)};
    margin-left: 5.5%;
    margin-top: 8.527%;

    @media (max-width: 599px) {
      margin-left: ${theme.spacing(10)};
      margin-right: ${theme.spacing(10)};
      margin-top: 0;
    }
  `,
  title: () => css`
    display: inline-block;
    text-decoration: none;
    font-family: ${theme.typography.fontFamily};
    font-weight: ${theme.typography.fontWeightBold};
    font-size: ${theme.typography.pxToRem(36)};
    line-height: ${theme.typography.pxToRem(42)};
    letter-spacing: ${theme.typography.pxToRem(0.01)};
    color: ${theme.palette.common.black};
    margin-bottom: 9%;
  `,
  firstRow: () => css`
    display: flex;
    justify-content: space-between;
  `,
  TrelloButton: () => css`
    min-width: ${theme.spacing(169)};
  `,
  member: () => css`
    display: flex;
    margin-top: ${theme.spacing(6)};
    margin-right: ${theme.spacing(10)};
  `,

  memberText: () => css`
    font-size: ${theme.typography.pxToRem(24)};
    font-weight: ${theme.typography.fontWeightMedium};
    line-height: ${theme.typography.pxToRem(28)};
    margin-right: ${theme.spacing(10)};
    margin-bottom: ${theme.spacing(42)};
  `,
  avatar: () => css`
    width: ${theme.spacing(24)};
    margin-top: ${theme.spacing(2)};
  `,
  descriptionHeading: () => css`
    font-size: ${theme.typography.pxToRem(24)};
    font-weight: ${theme.typography.fontWeightMedium};
    line-height: ${theme.typography.pxToRem(28)};
    margin-bottom: ${theme.spacing(42)};
  `,
  description: () => css`
    margin-bottom: ${theme.spacing(20)};
  `,
  tags: () => css`
    display: flex;
    column-gap: ${theme.spacing(50)};
    margin-bottom: ${theme.spacing(51)};
  `,
  data: () => css`
    display: flex;
    margin-bottom: ${theme.spacing(100)};
    column-gap: ${theme.spacing(5)};
  `,
  dataHeading: () => css`
    font-size: ${theme.typography.pxToRem(24)};
    font-weight: ${theme.typography.fontWeightMedium};
    line-height: ${theme.typography.pxToRem(28)};
  `,
  dataText: () => css`
    font-size: ${theme.typography.pxToRem(24)};
    font-weight: ${theme.typography.fontWeightMedium};
    line-height: ${theme.typography.pxToRem(28)};
    color: ${theme.palette.grey[693]};
    letter-spacing: ${theme.typography.pxToRem(0.01)};
  `,
  commentsHeading: () => css`
    font-size: ${theme.typography.pxToRem(24)};
    font-weight: ${theme.typography.fontWeightMedium};
    line-height: ${theme.typography.pxToRem(28)};
    margin-bottom: ${theme.spacing(50)};
  `,
  commentsBox: () => css`
    display: grid;
    row-gap: ${theme.spacing(50)};
  `,
});

export { createStyles };
