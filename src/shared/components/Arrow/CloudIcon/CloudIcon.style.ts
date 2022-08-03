import { css } from '@mui/material';

import { Theme } from 'src/shared/styles/theme';

import type { Props } from './CloudIcon';

const createStyles = (
  props: {
    color: Props['color'];
    convertingStatus: string;
  },
  theme: Theme
) => ({
  root: () => {
    const isOpacity =
      props.convertingStatus === 'none'
        ? css`
            opacity: 0;
          `
        : css`
            opacity: 1;
          `;
    const root = css`
      margin: 0 auto;
      max-width: 21.2%;
      margin-bottom: ${theme.spacing(8)};

      ${isOpacity}
    `;

    return root;
  },

  icon: () => {
    const color =
      props.color &&
      css`
        color: ${props.color};
      `;

    const icon = css`
      display: block;
      width: 100%;
      height: 100%;
      max-height: ${theme.typography.pxToRem(71)};
      margin: 0 auto;
      color: ${theme.palette.grey[693]};

      ${color};
    `;

    return icon;
  },
});

export { createStyles };
