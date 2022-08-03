import { alpha, css } from '@mui/material';

import { Theme } from 'src/shared/styles/theme';

import { SIZES, DESC_LINE_HEIGHT, NAME_LINE_HEIGHT } from './constants';
import type { Props } from './BoardCard';

const createStyles = (
  props: Required<Pick<Props, 'color' | 'image'>> & {
    hover: boolean;
    descLines: number;
    nameLines: number;
  },
  theme: Theme
) => ({
  root: css`
    position: relative;
    min-width: ${theme.spacing(SIZES.minWidth)};
    max-width: ${theme.spacing(SIZES.maxWidth)};
    width: 100%;
    min-height: ${theme.spacing(SIZES.minHeight)};
    max-height: ${theme.spacing(SIZES.maxHeight)};
    aspect-ratio: 25 / 17;
    border-radius: 0;
    box-shadow: ${theme.shadows[3]};
    touch-action: none;

    ${props.color &&
    css`
      background-color: ${props.color};
    `}

    ${props.image &&
    css`
      background-image: url(${props.image});
      background-position: center;
      background-size: cover;
      background-repeat: no-repeat;
    `}
  `,
  content: css`
    display: flex;
    flex-direction: column;
    gap: ${theme.spacing(4)};
    justify-content: space-between;
    min-height: 100%;
    max-height: 100%;
    padding: ${theme.spacing(15, 20)};
    background-color: ${alpha(theme.palette.background.default, 0.3)};
  `,
  nameWrapper: css`
    flex: 2 1 20%;
    min-height: ${theme.spacing(NAME_LINE_HEIGHT)};
    max-height: ${theme.spacing(NAME_LINE_HEIGHT * 2)};
    overflow: hidden;
  `,
  name: css`
    min-height: ${theme.spacing(NAME_LINE_HEIGHT)};
    max-height: ${theme.spacing(NAME_LINE_HEIGHT * 2)};
    font-size: ${theme.typography.pxToRem(24)};
    line-height: ${theme.typography.pxToRem(NAME_LINE_HEIGHT)};
    font-weight: ${theme.typography.fontWeightMedium};
    display: -webkit-box;
    -webkit-line-clamp: ${props.nameLines};
    -webkit-box-orient: vertical;
    overflow: hidden;
    word-break: break-word;
  `,
  descWrapper: css`
    display: flex;
    align-items: center;
    flex: 7 1 70%;
    min-height: ${theme.spacing(DESC_LINE_HEIGHT)};
    max-height: ${theme.spacing(80)};
    overflow: hidden;
  `,
  desc: css`
    display: -webkit-box;
    -webkit-line-clamp: ${props.descLines};
    -webkit-box-orient: vertical;
    overflow: hidden;
    min-height: ${theme.spacing(DESC_LINE_HEIGHT)};
    max-height: ${theme.spacing(80)};
    font-size: ${theme.typography.pxToRem(14)};
    line-height: ${theme.typography.pxToRem(DESC_LINE_HEIGHT)};
    word-break: break-word;
  `,
  members: css`
    display: flex;
    align-items: flex-end;
    flex: 1 1 10%;
    min-height: ${theme.spacing(21)};
    margin-top: ${theme.spacing(4)};
    font-size: ${theme.typography.pxToRem(18)};
    line-height: ${theme.typography.pxToRem(21)};
    font-weight: ${theme.typography.fontWeightMedium};
  `,
  actions: css`
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: ${alpha(theme.palette.background.default, 0.7)};

    ${!props.hover &&
    css`
      display: none;
    `}
  `,
  button: css`
    width: ${theme.spacing(169)};
    height: ${theme.spacing(36)};
    border-radius: ${theme.spacing(18)};
    font-size: ${theme.typography.pxToRem(14)};
    font-weight: ${theme.typography.fontWeightRegular};
    background-color: ${theme.palette.grey[400]};

    &:hover {
      background-color: #4f4f4f;
      background-color: ${theme.palette.grey[800]};
    }
  `,
});

export { createStyles };
