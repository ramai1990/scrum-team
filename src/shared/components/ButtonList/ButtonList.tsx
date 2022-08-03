import { useTheme } from '@mui/material';
import { FC } from 'react';

import { List } from '../List/List';
import { Button } from './Button/Button';
import type { Item } from './types';
import { createStyles } from './ButtonList.style';

type Props = {
  items: Item[];
  onSelect?: (item: Item) => void;
};

const ButtonList: FC<Props> = ({ items, onSelect }) => {
  const theme = useTheme();
  const styles = createStyles(theme);

  return (
    <List
      css={styles.root}
      items={items.map((item) => ({
        key: item.id,
        children: <Button id={item.id} name={item.name} onClick={onSelect} />,
      }))}
    />
  );
};

export type { Props };

export { ButtonList };
