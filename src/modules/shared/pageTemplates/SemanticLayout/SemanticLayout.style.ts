import { css } from '@mui/material';

import { Theme } from 'src/shared/styles/theme';

import type { Props } from './SemanticLayout';

const createStyles = (
  props: Pick<Props, 'withHeader' | 'withHeading' | 'sideBarItems'>,
  theme: Theme
) => ({
  root: () => {
    const layout = css`
      grid:
        ${props.withHeader && "'header' auto"}
        'content' 1fr;
    `;

    return css`
      display: grid;
      min-height: 100%;

      ${layout}
    `;
  },
  header: () => {
    const mobileHeight = 123;

    return css`
      grid-area: header;
      margin-top: max(${mobileHeight}px, ${theme.spacing(150)});
    `;
  },
  content: () => {
    let grid;

    if (props.withHeading && props.sideBarItems !== null) {
      grid = css`
        grid: 'side-bar' 'heading' 'main' auto / auto;
        justify-content: center;
        padding-top: ${theme.spacing(80)};
        grid-template-rows: minmax(50px, max-content) minmax(40px, max-content) auto;

        @media print, screen and (min-width: ${theme.breakpoints.values.sm}px) {
          grid: '. heading' minmax(0, 200px) 'side-bar main' auto / ${theme.spacing(
              170
            )} 1fr;
          padding-top: 0;
        }
      `;
    } else if (props.withHeading) {
      grid = css`
        grid: 'heading' minmax(0, 200px) 'main' auto / auto;
      `;
    } else if (props.sideBarItems !== null) {
      grid = css`
        grid: 'side-bar' 'main' auto / auto;

        @media print, screen and (min-width: ${theme.breakpoints.values.sm}px) {
          grid: '. . main' ${theme.spacing(199)} 'side-bar . main' auto / auto ${theme.spacing(
              60
            )} 1fr;
        }
      `;
    } else {
      grid = css`
        grid: 'main' auto / auto;
      `;
    }

    return css`
      grid-area: content;
      display: grid;
      padding-bottom: 1em;

      ${grid}
    `;
  },
  heading: () => css`
    grid-area: heading;
  `,
  sideBar: () => css`
    grid-area: side-bar;
    max-width: ${theme.spacing(170)};
    margin-top: ${theme.spacing(18)};

    @media print, screen and (max-width: ${theme.breakpoints.values.sm}px) {
      justify-self: center;
      text-align: center;
    }
  `,
  main: () => css`
    grid-area: main;
  `,
});

export { createStyles };
