import { css } from '@mui/material';

import { Theme } from 'src/shared/styles/theme';

import { PRESETS } from './constants';
import type { Props } from './File';

const createStyles = (
  props: Required<Pick<Props, 'type' | 'isGhost' | 'dropReady'>>,
  theme: Theme
) => {
  const { width, height } = PRESETS[props.type].large;

  return {
    root: css`
      position: relative;
      display: flex;
      justify-content: center;
      align-items: center;
      max-width: ${theme.spacing(width)};
      max-height: ${theme.spacing(height)};
      width: 100%;
      height: 100%;

      ${props.isGhost &&
      css`
        position: absolute;
        display: block;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        max-width: 100%;
        max-height: 100%;
        width: 100%;
        height: 100%;
      `}

      ${props.dropReady &&
      css`
        opacity: 0.25;
      `}
    `,
    warningWrapper: css`
      position: absolute;

      @media print, screen and (min-width: ${theme.breakpoints.values.sm}px) {
        ${props.type === 'sheet' &&
        css`
          margin-bottom: 75%;
          margin-right: 64%;
        `}
        ${props.type === 'board' &&
        css`
          margin-top: 57%;
          margin-left: 44%;
        `}
      }
    `,
  };
};

export { createStyles };
