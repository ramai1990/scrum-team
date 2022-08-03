import { FC, useEffect } from 'react';

import { useAppDispatch, useAppSelector } from 'src/app/hooks';
import {
  Typography,
  ButtonList,
  CircularProgress,
} from 'src/shared/components';
import { REQUEST_STATUS } from 'src/shared/helpers/redux';

import {
  selectFiles,
  selectError,
  selectStatus,
  getSpreadsheets,
} from '../../../redux/slice';
import { ButtonListItem } from '../../../types';

type Props = {
  gapi: typeof window.gapi;
  onRejected?: (message: string) => void;
  onSelect?: (item: ButtonListItem) => void;
};

const FlatList: FC<Props> = ({ gapi, onRejected, onSelect }) => {
  const dispatch = useAppDispatch();
  const status = useAppSelector(selectStatus);
  const { items, nextPageToken } = useAppSelector(selectFiles);
  const error = useAppSelector(selectError);

  const buttonListItems: ButtonListItem[] = items
    .filter(({ id, name }) => id !== undefined && name !== undefined)
    .map<ButtonListItem>(({ id, name }) => ({ id: `${id}`, name: `${name}` }));

  useEffect(() => {
    const shouldDispatch =
      gapi?.client?.drive !== undefined &&
      (items.length === 0 || Boolean(nextPageToken));

    if (shouldDispatch) {
      dispatch(
        getSpreadsheets({
          gapi,
          queryParameters: {
            pageToken: nextPageToken,
          },
        })
      );
    }
  }, [dispatch, gapi, items.length, nextPageToken]);

  switch (status) {
    case REQUEST_STATUS.idle:
    case REQUEST_STATUS.pending: {
      return <CircularProgress size={20} />;
    }
    case REQUEST_STATUS.fulfilled: {
      const shouldShowMessage = items.length === 0;

      if (shouldShowMessage) {
        return <Typography>No sheets</Typography>;
      }

      return <ButtonList items={buttonListItems} onSelect={onSelect} />;
    }
    case REQUEST_STATUS.rejected: {
      onRejected?.(error ?? '');

      return <Typography>{error}</Typography>;
    }
    default: {
      return <Typography>Unknown error...</Typography>;
    }
  }
};

export type { Props };

export { FlatList };
