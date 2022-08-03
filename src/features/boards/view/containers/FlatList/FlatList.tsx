import { FC } from 'react';

import { useAppSelector } from 'src/app/hooks';
import { ButtonList, CircularProgress } from 'src/shared/components';
import { REQUEST_STATUS } from 'src/shared/helpers/redux';

import { ButtonListItem } from '../../../types';
import { selectBoards } from '../../../redux/slice';
import { Message } from '../../components';

type Props = {
  onSelect?: (item: ButtonListItem) => void;
};

const FlatList: FC<Props> = ({ onSelect }) => {
  const { items, status, error } = useAppSelector(selectBoards);

  switch (status) {
    case REQUEST_STATUS.idle:
    case REQUEST_STATUS.pending:
      return <CircularProgress size={20} />;
    case REQUEST_STATUS.fulfilled: {
      const shouldShowMessage = items.length === 0;

      if (shouldShowMessage) {
        return <Message text="No boards..." />;
      }

      return <ButtonList items={items} onSelect={onSelect} />;
    }
    default:
      return <Message text={error ?? 'Unknown error...'} />;
  }
};

export type { Props };

export { FlatList };
