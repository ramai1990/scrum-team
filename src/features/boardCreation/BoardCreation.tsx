import { FC } from 'react';

import { useAppSelector } from 'src/app/hooks';
import { REQUEST_STATUS } from 'src/shared/helpers/redux';

import { Form } from './view/containers';
import { selectStatus } from './redux/slice';

type Props = {
  trelloToken: string;
  onFulfilled?: () => void;
  onRejected?: () => void;
};

const BoardCreation: FC<Props> = ({ trelloToken, onFulfilled, onRejected }) => {
  const status = useAppSelector(selectStatus);

  switch (status) {
    case REQUEST_STATUS.idle: {
      return <Form trelloToken={trelloToken} />;
    }
    case REQUEST_STATUS.pending: {
      return <Form trelloToken={trelloToken} showLoading />;
    }
    case REQUEST_STATUS.fulfilled: {
      onFulfilled?.();

      return null;
    }
    case REQUEST_STATUS.rejected: {
      onRejected?.();

      return null;
    }
    default: {
      return null;
    }
  }
};

export type { Props };

export { BoardCreation };
