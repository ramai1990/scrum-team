import { SpreadsheetValues } from 'src/shared/api/google/sheets';
import {
  GetCardsOnABoardResponse,
  GetListsOnABoardResponse,
} from 'src/shared/api/trello';
import { Response as TrelloListResponse } from 'src/shared/api/trello/ArchiveOrUnarchiveAList/types';
import { Arrow, File } from 'src/shared/components';

import { SheetValue } from './utils/convertingToGoogleSheet/types';

type State = {
  status: Status;
  error: string | null;
  trelloData: TrelloData;
  boardToSheetConvertResponse: {
    oldSheetValue: SheetValue;
  } | null;
  fromFileType: FileType;
  toFileType: FileType;
};

type TrelloData = {
  archivedLists: TrelloListResponse[];
  createdLists: TrelloListResponse[];
};

type FileInfo = {
  title: string;
  url: string;
  type: 'board' | 'sheet';
  id: string;
  details?: string;
};

type Spreadsheet = SpreadsheetValues;

type BoardLists = GetListsOnABoardResponse[];
type BoardListCards = GetCardsOnABoardResponse[];

type Status = Required<Parameters<typeof Arrow>['0']['convertingStatus']>;

type SyncAction = 'sync' | 'rollback';

type FileType = Required<Parameters<typeof File>['0']['type']>;

export type {
  State,
  FileInfo,
  Spreadsheet,
  BoardLists,
  BoardListCards,
  TrelloData,
  SyncAction,
  Status,
  SheetValue,
};
