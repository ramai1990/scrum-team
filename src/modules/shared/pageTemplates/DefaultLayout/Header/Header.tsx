import { FC } from 'react';
import { useRouter } from 'next/router';

import { Header as HeaderComponent } from 'src/shared/components';

import { items } from './constants';

type Props = {};

const Header: FC<Props> = () => {
  const { pathname } = useRouter();
  const navigation = {
    items: items.map((item) => {
      const { key, title, href } = item;
      const isCurrentPage =
        href === '/' ? pathname === href : pathname.startsWith(href);

      return { key, children: title, href, isCurrentPage };
    }),
  };

  return (
    <HeaderComponent
      title="Integrator 1.0"
      subTitle="Just do it"
      navigation={navigation}
    />
  );
};

export type { Props };

export { Header };
