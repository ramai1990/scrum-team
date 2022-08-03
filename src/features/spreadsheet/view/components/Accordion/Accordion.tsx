import { FC, SyntheticEvent } from 'react';
import { useTheme } from '@mui/material';

import {
  Accordion as MUIAccordion,
  Typography,
  ExpandMore,
} from 'src/shared/components';

import { CardLists } from '../CardLists/CardLists';
import { createStyles } from './Accordion.style';

type Props = {
  id: string;
  content: string;
  cards: string[];
  href: string;
  expanded?: boolean;
  onChange?: (e: SyntheticEvent, isExpanded: boolean) => void;
};

const Accordion: FC<Props> = ({
  id,
  content,
  cards,
  href,
  expanded = false,
  onChange,
}) => {
  const theme = useTheme();
  const styles = createStyles(theme);

  return (
    <MUIAccordion
      css={styles.root}
      expanded={expanded}
      onChange={onChange}
      summary={{
        expandIcon: <ExpandMore css={styles.icon} />,
        'aria-controls': 'content',
        id,
        children: (
          <>
            <Typography css={styles.heading} variant="h3" noWrap>
              {content}
            </Typography>
          </>
        ),
      }}
      details={{
        css: styles.details,
        children: <CardLists cards={cards} href={href} />,
      }}
    />
  );
};

export type { Props };

export { Accordion };
