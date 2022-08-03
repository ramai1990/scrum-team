import { FC } from 'react';
import { useTheme } from '@mui/material';

import { Grid, File } from 'src/shared/components';

import { SpreadsheetFile } from '../../../types';
import { createStyles } from './FilesList.style';

type Props = {
  items: SpreadsheetFile[];
  route: string;
};

const FilesList: FC<Props> = ({ items, route }) => {
  const theme = useTheme();
  const styles = createStyles({}, theme);

  return (
    <Grid
      container
      columnSpacing={84}
      rowSpacing={26}
      justifyContent="space-evenly"
    >
      {items.map((item) => (
        <Grid item css={styles.item} key={item.id}>
          <File type="sheet" href={`${route}/${item.id}`} title={item.name} />
        </Grid>
      ))}
    </Grid>
  );
};

export type { Props };

export { FilesList };
