import { FC, useState, useEffect, SyntheticEvent } from 'react';
import { useTheme } from '@mui/material';

import { useAppDispatch, useAppSelector } from 'src/app/hooks';
import {
  selectCardLists,
  selectCards,
  selectError,
} from 'src/features/board/redux/selectors';
import {
  Box,
  Typography,
  Link,
  LinearProgress,
  Alert,
} from 'src/shared/components';
import { REQUEST_STATUS } from 'src/shared/helpers/redux';

import { getBoardData, selectStatus } from './redux/slice';
import { Accordion } from './view/components';
import { createStyles } from './Board.style';

type Props = {
  boardID: string;
  boardName: string;
  route: string;
  token: string;
  href: string;
  onRejected?: () => void;
};

const Board: FC<Props> = ({
  boardID,
  boardName,
  route,
  token,
  href,
  onRejected,
}) => {
  const theme = useTheme();
  const styles = createStyles(theme);

  const [expandedListID, setExpandedListID] = useState<string>('');

  const makeAccordionClickHandler =
    (id?: string) => (e: SyntheticEvent, isExpanded: boolean) => {
      if (id === undefined) {
        return false;
      }

      return setExpandedListID(isExpanded ? id : '');
    };

  const dispatch = useAppDispatch();

  const status = useAppSelector(selectStatus);
  const error = useAppSelector(selectError);
  const cardLists = useAppSelector(selectCardLists);
  const cards = useAppSelector(selectCards);

  useEffect(() => {
    dispatch(getBoardData({ boardID, token }));
  }, [boardID, token, dispatch]);

  switch (status) {
    case REQUEST_STATUS.pending:
      return <LinearProgress css={styles.linearProgress} />;
    case REQUEST_STATUS.fulfilled:
      return (
        <Box css={styles.root}>
          <Link css={styles.title} href={href}>
            {boardName}
          </Link>
          {cardLists.length > 0 ? (
            cardLists.map(({ id, name }) => (
              <Accordion
                key={id}
                id={id}
                expanded={expandedListID === id}
                onChange={makeAccordionClickHandler(id)}
                content={name}
                items={cards}
                route={route}
              />
            ))
          ) : (
            <Typography variant="h5" fontWeight={500}>
              Здесь пока нет карточек...
            </Typography>
          )}
        </Box>
      );
    case REQUEST_STATUS.rejected:
      onRejected?.();

      return <Alert severity="error">{error}</Alert>;

    default:
      return null;
  }
};

export type { Props };

export { Board };
