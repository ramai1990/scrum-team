import { FC } from 'react';

import { useAppSelector } from 'src/app/hooks';
import {
  ButtonList,
  CircularProgress,
  Typography,
} from 'src/shared/components';
import { REQUEST_STATUS } from 'src/shared/helpers/redux';

import { selectError, selectItems, selectStatus } from '../../../redux/slice';
import { ButtonListItem } from '../../../types';

type Props = {
  onSelect?: (item: ButtonListItem) => void;
};

const TitleList: FC<Props> = ({ onSelect }) => {
  const items = useAppSelector(selectItems);

  const status = useAppSelector(selectStatus);
  const error = useAppSelector(selectError);

  const buttonListItems = Object.entries(items).map(([key, value]) => ({
    id: `${value.id}`,
    name: key,
  }));

  switch (status) {
    case REQUEST_STATUS.idle:
    case REQUEST_STATUS.pending: {
      return <CircularProgress size={20} />;
    }
    case REQUEST_STATUS.fulfilled: {
      return <ButtonList items={buttonListItems} onSelect={onSelect} />;
    }
    case REQUEST_STATUS.rejected: {
      return <Typography>{error}</Typography>;
    }
    default: {
      return <Typography>Unknown error...</Typography>;
    }
  }
};

export type { Props };

export { TitleList };
