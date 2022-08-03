import { FC, useEffect } from 'react';

import { useAppDispatch } from 'src/app/hooks';

import { getSpreadsheet } from './redux/slice';
import { Sheets, TitleList } from './view/containers';
import { ButtonListItem } from './types';

type Props = {
  spreadsheetID: string;
  href?: string;
  isTitleList?: boolean;
  onSelect?: (item: ButtonListItem) => void;
};

const Spreadsheet: FC<Props> = ({
  spreadsheetID,
  href = '/',
  isTitleList = false,
  onSelect,
}) => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getSpreadsheet(spreadsheetID));
  }, [dispatch, spreadsheetID]);

  return isTitleList ? (
    <TitleList onSelect={onSelect} />
  ) : (
    <Sheets href={href} />
  );
};

export type { Props };

export { Spreadsheet };
