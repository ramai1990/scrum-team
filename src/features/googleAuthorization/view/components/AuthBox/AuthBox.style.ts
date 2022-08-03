import { css } from '@mui/material';

import { makeCalculatorPercentageOf } from 'src/shared/helpers/scripts/calculators';
import { Theme } from 'src/shared/styles/theme';

const MAX_WIDTH = 1098;

const createStyles = (props: {}, theme: Theme) => ({
  root: () => {
    const pxToPer = makeCalculatorPercentageOf(MAX_WIDTH);

    return css`
      display: grid;
      grid-template-columns: ${pxToPer(167)}% ${pxToPer(470)}% ${pxToPer(461)}%;
      grid-template-rows: 31% 69%;
      grid-template-areas:
        '. authText .'
        '. button .';
      row-gap: ${theme.spacing(36)};
      align-items: flex-start;
      margin-top: ${theme.spacing(16)};

      @media print, screen and (max-width: ${theme.breakpoints.values.sm}px) {
        display: block;
        margin: 0;
        text-align: center;
      }
    `;
  },
  authText: () => css`
    grid-area: authText;
    font-family: ${theme.typography.fontFamily};
    font-weight: ${theme.typography.fontWeightMedium};
    font-size: ${theme.typography.pxToRem(20)};
    line-height: ${theme.typography.pxToRem(23)};
  `,
  buttonWrapper: () => css`
    grid-area: button;
    max-width: ${theme.spacing(169)};

    @media print, screen and (max-width: ${theme.breakpoints.values.sm}px) {
      margin: 0 auto;
      margin-top: ${theme.spacing(37)};
    }
  `,
  button: () => css`
    font-family: ${theme.typography.fontFamily};
    font-weight: ${theme.typography.fontWeightMedium};
    font-size: ${theme.typography.pxToRem(14)};
    line-height: ${theme.typography.pxToRem(16)};
    letter-spacing: ${theme.typography.pxToRem(0.75)};
    text-transform: uppercase;
    border-radius: ${theme.spacing(20)};
    padding: ${theme.spacing(10)} 0;
    width: 100%;
    min-width: ${theme.spacing(160)};
  `,
});

export { createStyles };
