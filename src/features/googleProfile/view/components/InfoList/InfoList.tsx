import { useTheme } from '@mui/material';
import { FC } from 'react';

import { List } from 'src/shared/components';

import { createStyles } from './InfoList.style';

type Props = {
  items: (string | null)[];
};

const InfoList: FC<Props> = ({ items }) => {
  const theme = useTheme();
  const styles = createStyles({}, theme);

  const itemsFinal = items.filter((item) => item !== null);

  return (
    <List
      css={styles.root()}
      items={itemsFinal.map((item) => ({
        css: styles.item(),
        key: item,
        children: item,
      }))}
    />
  );
};

export { InfoList };
