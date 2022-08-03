import { FC } from 'react';
import { useTheme } from '@mui/material';

import { createStyles } from './SideBar.style';
import { Breadcrumbs } from '../Breadcrumbs/Breadcrumbs';
import { Props as LinkProps } from '../Link/Link';
import { SideBarItem } from './types';

type Props = {
  items: SideBarItem[];
};

const SideBar: FC<Props> = ({ items }) => {
  const theme = useTheme();
  const styles = createStyles({}, theme);

  const breadcrumbsItems: LinkProps[] = items.map((item) => {
    const { isCurrentPage, ...theRest } = item;
    const color = isCurrentPage
      ? theme.palette.common.black
      : theme.palette.grey[693];
    const ariaCurrent = isCurrentPage && 'page';

    return {
      color,
      underline: 'hover',
      'aria-current': ariaCurrent,
      ...theRest,
    };
  });

  return (
    <Breadcrumbs
      css={styles.breadcrumbs()}
      separator=""
      aria-label="хлебные крошки"
      items={breadcrumbsItems}
    ></Breadcrumbs>
  );
};

export type { Props };

export { SideBar };
