import { css } from '@mui/material';

import { Theme } from 'src/shared/styles/theme';
import { ellipsis } from 'src/shared/helpers/materialUI/text';

const createStyles = (theme: Theme) => ({
  root: () => {
    return css`
      max-width: ${theme.typography.pxToRem(170)};
      padding-left: ${theme.spacing(5)};
      padding-right: ${theme.spacing(5)};

      ${ellipsis}
    `;
  },
  title: css`
    font-size: inherit;
    font-weight: ${theme.typography.fontWeightBold};
    line-height: ${theme.typography.pxToRem(24)};
    text-transform: capitalize;

    ${ellipsis}
  `,
  link: css`
    font-weight: ${theme.typography.fontWeightRegular};
    letter-spacing: ${theme.typography.pxToRem(0.05)};
    text-transform: capitalize;
    transition: ${theme.transitions.create('opacity')};
    text-decoration: none;

    &:hover {
      opacity: 0.74;
    }
  `,
});

export { createStyles };
