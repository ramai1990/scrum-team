import { FC } from 'react';

import { FlatList, TiledList } from './view/containers';
import { ButtonListItem } from './types';

type Props = {
  gapi: typeof window.gapi;
  route?: string;
  isFlatList?: boolean;
  onRejected?: (message: string) => void;
  onSelect?: (item: ButtonListItem) => void;
};

const Spreadsheets: FC<Props> = ({
  gapi,
  route = '/',
  isFlatList = false,
  onRejected,
  onSelect,
}) => {
  return isFlatList ? (
    <FlatList gapi={gapi} onRejected={onRejected} onSelect={onSelect} />
  ) : (
    <TiledList route={route} gapi={gapi} onRejected={onRejected} />
  );
};

export type { Props };

export { Spreadsheets };
