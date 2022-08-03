import { FC, useEffect } from 'react';

import { useAppDispatch, useAppSelector } from 'src/app/hooks';

import { getBoards, selectBoards } from './redux/slice';
import { FlatList, TiledList } from './view/containers';
import { ButtonListItem } from './types';

type Props = {
  token: string;
  route?: string;
  isFlatList?: boolean;
  onSelect?: (item: ButtonListItem) => void;
};

const Boards: FC<Props> = ({
  token,
  route = '/',
  isFlatList = false,
  onSelect,
}) => {
  const dispatch = useAppDispatch();
  const { items } = useAppSelector(selectBoards);

  useEffect(() => {
    const canGetBoards = items.length === 0 && token !== null;

    if (canGetBoards) {
      dispatch(getBoards(token));
    }
  }, [dispatch, items, token]);

  return isFlatList ? (
    <FlatList onSelect={onSelect} />
  ) : (
    <TiledList route={route} />
  );
};

export type { Props };

export { Boards };
