import { css } from '@mui/material';

import { Theme } from 'src/shared/styles/theme';

import { ACCORDION_BOX_SHADOW } from './constants';

const createStyles = (theme: Theme) => ({
  root: () => {
    return css`
      max-width: ${theme.spacing(950)};
      background: ${theme.palette.grey[258]};

      &.MuiAccordion-root {
        border-radius: 0;
        box-shadow: none;
        padding-right: ${theme.spacing(38)};
        padding-left: ${theme.spacing(38)};

        &::before {
          background-color: ${theme.palette.grey[20]};
        }
      }
      & .MuiAccordionSummary-content {
        padding-top: ${theme.spacing(21)};
        padding-bottom: ${theme.spacing(21)};
        margin: 0;
      }
      &.Mui-expanded {
        max-width: ${theme.spacing(946)};
        box-shadow: ${ACCORDION_BOX_SHADOW};
        margin: ${theme.spacing(2, 2, 6, 2)};

        &.MuiAccordion-root {
          padding-right: ${theme.spacing(35)};
          padding-left: ${theme.spacing(36)};
        }
        & .MuiAccordionSummary-content {
          margin-top: ${theme.spacing(16)};
          margin-bottom: ${theme.spacing(16)};
        }
        & .MuiAccordionSummary-root,
        & .MuiButtonBase-root {
          min-height: ${theme.spacing(50)};
        }
        & .MuiAccordionDetails-root {
          padding-top: ${theme.spacing(14)};
        }
        &::before {
          opacity: 1;
        }
      }
    `;
  },
  icon: css`
    color: ${theme.palette.common.black};
  `,
  heading: css`
    max-width: ${theme.spacing(200)};
    font-size: ${theme.typography.pxToRem(20)};
    font-weight: ${theme.typography.fontWeightMedium};
    color: ${theme.palette.common.black};
    overflow: hidden;
  `,
  details: css`
    max-height: ${theme.spacing(274)};
    overflow-y: auto;
    padding: ${theme.spacing(15, 5, 0, 5)};
  `,
});

export { createStyles };
