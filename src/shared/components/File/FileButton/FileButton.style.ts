import { css } from '@mui/material';

import { Theme } from 'src/shared/styles/theme';

import { MIN_SIZE, PRESETS } from '../constants';
import type { Props } from './FileButton';

const createStyles = (
  props: Required<
    Pick<Props, 'type' | 'size' | 'isGhost' | 'title' | 'titleRows' | 'details'>
  > & {
    hidden: boolean;
  },
  theme: Theme
) => {
  const withTitle = Boolean(props.title);
  const withDetails = Boolean(props.details) && props.size === 'large';
  const { width, height, borderRadius, aspectRatio } =
    PRESETS[props.type][props.size];

  return {
    root: css`
      position: relative;
      display: inline-flex;
      flex-direction: column;
      justify-content: flex-start;
      align-items: center;
      min-width: ${theme.spacing(MIN_SIZE)};
      max-width: ${theme.spacing(width)};
      width: 100%;
      min-height: ${theme.spacing(MIN_SIZE)};
      max-height: ${theme.spacing(height)};
      aspect-ratio: ${aspectRatio};
      padding: 0;
      border-radius: ${borderRadius};
      font-size: 0;

      &.Mui-disabled {
        background-color: transparent;
      }

      &:hover {
        background-color: transparent;
      }

      ${props.hidden &&
      css`
        visibility: hidden;
      `}

      ${withTitle &&
      props.size === 'small' &&
      css`
        max-width: max-content;
        max-height: max-content;
        width: auto;
        height: auto;
        aspect-ratio: initial;
        padding: ${theme.spacing(8)};
      `}

    ${props.isGhost &&
      css`
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        max-width: 100%;
        width: 100%;
        max-height: 100%;
        height: 100%;
        border-radius: 0;
      `}
    `,
    iconWrapper: css`
      display: inline-block;
      width: 100%;
      height: 100%;

      ${withTitle &&
      props.size === 'small' &&
      css`
        width: ${theme.spacing(width)};
        height: ${theme.spacing(height)};
      `}

      ${props.isGhost &&
      css`
        display: none;
      `}
    `,
    icon: css`
      width: 100%;
      height: 100%;
    `,
    title: css`
      max-width: 100%;
      min-height: ${props.titleRows}.3em;
      margin-top: ${theme.spacing(26)};
      text-transform: initial;
      text-align: center;
      font-weight: ${theme.typography.fontWeightMedium};
      font-size: ${theme.typography.pxToRem(20)};
      line-height: ${theme.typography.pxToRem(23)};
      color: ${theme.palette.grey[600]};
      display: -webkit-box;
      -webkit-line-clamp: ${props.titleRows};
      -webkit-box-orient: vertical;
      overflow: hidden;
      text-overflow: ellipsis;
      word-wrap: break-word;

      ${props.size === 'small' &&
      css`
        max-width: ${theme.spacing(PRESETS.default.small.width * 2.5)};
        min-height: ${props.titleRows}.05em;
        margin-top: ${theme.spacing(16)};
      `}

      ${withDetails &&
      css`
        min-height: ${props.titleRows}.05em;
      `}
    `,
    details: css`
      max-width: 100%;
      min-height: ${props.titleRows}.3em;
      text-transform: initial;
      text-align: center;
      font-weight: ${theme.typography.fontWeightMedium};
      font-size: ${theme.typography.pxToRem(16)};
      line-height: ${theme.typography.pxToRem(23)};
      color: ${theme.palette.grey[500]};
      display: -webkit-box;
      -webkit-line-clamp: ${props.titleRows};
      -webkit-box-orient: vertical;
      overflow: hidden;
      text-overflow: ellipsis;
      word-wrap: break-word;
    `,
  };
};

export { createStyles };
