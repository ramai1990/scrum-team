import {
  GetCardsOnABoardResponse,
  GetListsOnABoardResponse,
} from 'src/shared/api/trello';

import { trelloBoardToGoogleSheet } from './conversion/trelloBoardToGoogleSheet';
import { clearSheet, getValues, updateSheet } from './tasks';
import { SheetValue } from './types';

type Options = {
  cardLists: GetListsOnABoardResponse[];
  cards: Partial<GetCardsOnABoardResponse>[];
  spreadsheetId: string;
  sheetName: string;
  lib: typeof window.gapi;
};

const startConvert = async ({
  cardLists,
  cards,
  spreadsheetId,
  lib,
  sheetName,
}: Options) => {
  const boardData = trelloBoardToGoogleSheet({
    cardLists,
    cards,
  });

  if (boardData instanceof Error) {
    return Promise.reject(boardData);
  }

  const { value } = boardData;

  if (value === undefined) {
    return Promise.reject(
      new Error('Значение полученные из Trello некорректны')
    );
  }

  const oldValueResponse = await getValues({
    spreadsheetId,
    sheetName,
    lib,
  });

  if (oldValueResponse instanceof globalThis.Error) {
    return Promise.reject(
      new Error('Текущее значение листа гугл таблицы получено некорректно')
    );
  }

  const oldSheetValue: SheetValue = oldValueResponse.result.values ?? [];

  await clearSheet({ spreadsheetId, sheetName, lib });

  await updateSheet({ sheetName, value, spreadsheetId, lib });

  return { oldSheetValue };
};

export { startConvert };
