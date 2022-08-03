import { FC } from 'react';
import { useTheme } from '@mui/material';

import { FormattedText } from '../FormattedText/FormattedText';
import { createStyles } from './CardDescription.style';

type Props = { text: string };

const CardDescription: FC<Props> = ({ text }) => {
  const theme = useTheme();
  const styles = createStyles({}, theme);

  return (
    <FormattedText
      content={text}
      textStyles={styles.root}
      linkStyles={styles.link}
    />
  );
};

export type { Props };

export { CardDescription };
