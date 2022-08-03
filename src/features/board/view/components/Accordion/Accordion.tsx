import { FC, SyntheticEvent } from 'react';
import { useTheme } from '@mui/material';

import {
  Accordion as MuiAccordion,
  Typography,
  ExpandMore,
} from 'src/shared/components';
import { GetCardsOnABoardResponse } from 'src/shared/api/trello';

import { CardLists } from '../CardLists/CardLists';
import { createStyles } from './Accordion.style';

type Props = {
  items: GetCardsOnABoardResponse[];
  route: string;
  id: string | undefined;
  content: string | undefined;
  expanded: boolean | undefined;
  onChange?: (e: SyntheticEvent, isExpanded: boolean) => void;
};

const Accordion: FC<Props> = ({
  items,
  route,
  id,
  content,
  onChange,
  expanded = false,
}) => {
  const theme = useTheme();
  const styles = createStyles(theme);

  return (
    <MuiAccordion
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
        children:
          items.filter(({ idList }) => idList === id).length > 0 ? (
            <CardLists items={items} route={route} id={id} />
          ) : (
            <Typography variant="h6">Здесь пока нет карточек...</Typography>
          ),
      }}
    >
      {!!id}
    </MuiAccordion>
  );
};

export type { Props };

export { Accordion };
