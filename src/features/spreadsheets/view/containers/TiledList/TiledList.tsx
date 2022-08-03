import { FC, useEffect } from 'react';

import { useAppDispatch, useAppSelector } from 'src/app/hooks';
import {
  LinearProgress,
  LazyContainer,
  Typography,
} from 'src/shared/components';
import { REQUEST_STATUS } from 'src/shared/helpers/redux';

import {
  selectStatus,
  selectFiles,
  selectError,
  getSpreadsheets,
} from '../../../redux/slice';
import { FilesList } from '../../components';
import { SPREADSHEETS_TO_APPEND } from './constants';

type Props = {
  route: string;
  gapi: typeof window.gapi;
  onRejected?: (message: string) => void;
};

const TiledList: FC<Props> = ({ route, gapi, onRejected }) => {
  const dispatch = useAppDispatch();
  const status = useAppSelector(selectStatus);
  const { items, nextPageToken } = useAppSelector(selectFiles);
  const error = useAppSelector(selectError);

  const withButton = Boolean(nextPageToken);

  useEffect(() => {
    const shouldDispatch =
      gapi?.client?.drive !== undefined && items.length === 0;

    if (shouldDispatch) {
      dispatch(
        getSpreadsheets({
          gapi,
          queryParameters: { pageSize: SPREADSHEETS_TO_APPEND },
        })
      );
    }
  }, [dispatch, gapi, items.length]);

  const handleLazyContainerShowMore = () => {
    dispatch(
      getSpreadsheets({
        gapi,
        queryParameters: {
          pageToken: nextPageToken,
          pageSize: SPREADSHEETS_TO_APPEND,
        },
      })
    );
  };

  switch (status) {
    case REQUEST_STATUS.idle:
    case REQUEST_STATUS.pending: {
      return (
        <LazyContainer
          withButton={withButton}
          buttonTopMargin={19}
          onShowMore={handleLazyContainerShowMore}
        >
          <LinearProgress position="fixed-top" />
          <FilesList items={items} route={route} />
        </LazyContainer>
      );
    }
    case REQUEST_STATUS.fulfilled: {
      const shouldShowMessage = items.length === 0;

      if (shouldShowMessage) {
        return <Typography>No sheets</Typography>;
      }

      return (
        <LazyContainer
          withButton={withButton}
          buttonTopMargin={19}
          onShowMore={handleLazyContainerShowMore}
        >
          <FilesList items={items} route={route} />
        </LazyContainer>
      );
    }
    case REQUEST_STATUS.rejected: {
      onRejected?.(error ?? '');

      return null;
    }
    default: {
      return null;
    }
  }
};

export type { Props };

export { TiledList };
