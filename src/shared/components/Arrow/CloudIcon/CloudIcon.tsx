import { FC, CSSProperties } from 'react';
import { useTheme } from '@mui/material';

import { CloudDownloadIcon, CloudDoneIcon, CloudErrorIcon } from '../../Icon';
import { Box } from '../../Box/Box';
import { DOWNLOAD, ERROR, NONE, SUCCESS } from '../constants';
import { Status } from '../status';
import { createStyles } from './CloudIcon.style';

type Props = {
  color?: CSSProperties['color'];
  convertingStatus: Status;
};

const CloudIcon: FC<Props> = ({ color = '', convertingStatus }) => {
  const theme = useTheme();

  const styles = createStyles({ color, convertingStatus }, theme);

  return (
    <>
      {convertingStatus === DOWNLOAD && (
        <Box css={styles.root()}>
          <CloudDownloadIcon
            css={styles.icon()}
            preserveAspectRatio="none"
            viewBox="0 0 24 20"
          />
        </Box>
      )}
      {convertingStatus === ERROR && (
        <Box css={styles.root()}>
          <CloudErrorIcon
            css={styles.icon()}
            preserveAspectRatio="none"
            viewBox="0 0 24 20"
          />
        </Box>
      )}
      {convertingStatus === SUCCESS && (
        <Box css={styles.root()}>
          <CloudDoneIcon
            css={styles.icon()}
            preserveAspectRatio="none"
            viewBox="0 0 24 20"
          />
        </Box>
      )}
      {convertingStatus === NONE && (
        <Box css={styles.root()}>
          <CloudDoneIcon
            css={styles.icon()}
            preserveAspectRatio="none"
            viewBox="0 0 24 20"
          />
        </Box>
      )}
    </>
  );
};

export type { Props };

export { CloudIcon };
