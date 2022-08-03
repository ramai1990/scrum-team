import { css } from '@mui/material';

import { Theme } from 'src/shared/styles/theme';

import type { Props } from './Message';

const createStyles = (
  props: Required<Pick<Props, 'withIndents'>>,
  theme: Theme
) => ({
  root: css`
    display: flex;
    align-items: center;
    padding: ${theme.spacing(10)};
    font-size: ${theme.typography.pxToRem(20)};
    color: ${theme.palette.common.black};
    font-weight: ${theme.typography.fontWeightMedium};

    ${props.withIndents &&
    css`
      padding: ${theme.spacing(0, 106)};
    `}
  `,
  emoticon: css`
    margin-left: ${theme.spacing(9)};
  `,
});

export { createStyles };
