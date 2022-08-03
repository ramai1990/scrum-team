import { FC } from 'react';

import { useAppDispatch, useAppSelector } from 'src/app/hooks';
import { LinearProgress } from 'src/shared/components';
import { REQUEST_STATUS } from 'src/shared/helpers/redux';

import {
  goToBoard,
  increaseDisplayedItems,
  selectBoards,
} from '../../../redux/slice';
import { BoardsList, Message } from '../../components';

type Props = {
  route?: string;
};

const TiledList: FC<Props> = ({ route = '/' }) => {
  const dispatch = useAppDispatch();
  const { items, status, error, displayedItems } = useAppSelector(selectBoards);

  const withButton = items.length !== displayedItems;

  const portion = items.slice(0, displayedItems);

  const handleBoardsListShowMore = () => {
    dispatch(increaseDisplayedItems());
  };

  const handleBoardsListGoToBoard = (routeToChosen: string) => {
    dispatch(goToBoard(routeToChosen));
  };

  switch (status) {
    case REQUEST_STATUS.idle:
    case REQUEST_STATUS.pending:
      return <LinearProgress />;
    case REQUEST_STATUS.fulfilled: {
      if (items.length === 0) {
        return <Message text="No boards..." withIndents />;
      }

      return (
        <BoardsList
          items={portion}
          withButton={withButton}
          route={route}
          onShowMore={handleBoardsListShowMore}
          onGoToBoard={handleBoardsListGoToBoard}
        />
      );
    }
    default: {
      return <Message text={error ?? 'Unknown error...'} withIndents />;
    }
  }
};

export type { Props };

export { TiledList };
