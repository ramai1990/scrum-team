import { FC, MutableRefObject } from 'react';
import { useTheme } from '@mui/material';

import { File } from '../../File/File';
import type { DragEvent } from '../../File/types';
import { Box } from '../../Box/Box';
import { createStyles } from './Service.style';

type Props = {
  serviceName: string;
  type: 'sheet' | 'board';
  targets?: MutableRefObject<null>[];
  onDrag: (event: DragEvent) => void;
};

const Service: FC<Props> = ({ serviceName, type, targets = [], onDrag }) => {
  const theme = useTheme();
  const styles = createStyles(theme);

  return (
    <Box css={styles.root}>
      {serviceName}
      <File type={type} targets={targets} isGhost onDrag={onDrag} />
    </Box>
  );
};

export type { Props };

export { Service };
