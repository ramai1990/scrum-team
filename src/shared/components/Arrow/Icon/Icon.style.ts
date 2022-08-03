import { css } from '@mui/material';

import { Theme } from 'src/shared/styles/theme';

import type { Props } from './Icon';

const createStyles = (
  props: {
    color: Props['color'];
  },
  theme: Theme
) => ({
  root: () => {
    const root = css`
      display: block;
      width: 100%;
      margin: 0 auto;
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
      max-height: ${theme.typography.pxToRem(59)};
      margin: 0 auto;

      ${color}
    `;

    return icon;
  },
});

export { createStyles };
