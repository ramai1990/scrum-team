import { FC } from 'react';
import { useRouter } from 'next/router';

import { SideBar as SideBarComponent } from 'src/shared/components';

import { SideBarItems } from '../types';

type Props = {
  items: SideBarItems;
};

const SideBar: FC<Props> = ({ items }) => {
  const { pathname } = useRouter();
  const navigation = {
    items: items.map((route) => {
      const { key, children, href, isRoot } = route;

      const isCurrentPage = isRoot
        ? pathname === href
        : pathname.startsWith(href);

      return { key, children, href, isCurrentPage };
    }),
  };

  return <SideBarComponent items={navigation.items} />;
};

export type { Props };

export { SideBar };
