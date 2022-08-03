import { FC } from 'react';
import { useTheme } from '@mui/material';

import { Button as ButtonComponent } from 'src/shared/components';

import { createStyles } from './TrelloButton.style';

type Props = { href: string };

const TrelloButton: FC<Props> = ({ href }: Props) => {
  const theme = useTheme();
  const styles = createStyles({}, theme);

  return (
    <ButtonComponent
      css={styles.root()}
      variant="contained"
      href={href}
      target="_blank"
      rel="noopener noreferrer"
    >
      Go to Trello
    </ButtonComponent>
  );
};

export type { Props };

export { TrelloButton };
