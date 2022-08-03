import { useTheme } from '@mui/material';
import { FC } from 'react';

import { ListItemButton } from '../../ListItemButton/ListItemButton';
import { Typography } from '../../Typography/Typography';
import { Item } from '../types';
import { createStyles } from './Button.style';

type Props = {
  id: string;
  name: string;
  onClick?: (item: Item) => void;
};

const Button: FC<Props> = ({ id, name, onClick }) => {
  const theme = useTheme();
  const styles = createStyles(theme);

  const handleRootClick = () => {
    onClick?.({ id, name });
  };

  return (
    <ListItemButton css={styles.root} onClick={handleRootClick}>
      <Typography css={styles.text} noWrap>
        {name}
      </Typography>
    </ListItemButton>
  );
};

export type { Props };

export { Button };
