import { useTheme } from '@mui/material';
import { FC } from 'react';

import { Typography } from 'src/shared/components';
import { SadEmoticon } from 'src/shared/components/Icon';

import { createStyles } from './Message.style';

type Props = {
  text: string;
  isSad?: boolean;
  withIndents?: boolean;
};

const Message: FC<Props> = ({ text, isSad = true, withIndents = false }) => {
  const theme = useTheme();
  const styles = createStyles({ withIndents }, theme);

  return (
    <Typography css={styles.root}>
      {text}
      {isSad && <SadEmoticon css={styles.emoticon} />}
    </Typography>
  );
};

export type { Props };

export { Message };
