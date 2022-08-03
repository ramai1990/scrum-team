import { createAsyncThunk } from '@reduxjs/toolkit';

import { getGoogleAPI } from 'src/shared/api/google';

import { BoardListCards, BoardLists } from '../../types';
import { startConvert } from '../../utils';

type Args = {
  boardLists: BoardLists;
  boardListCards: BoardListCards;
  spreadsheetID: string;
  spreadsheetListName: string;
  gapi: ReturnType<typeof getGoogleAPI>;
};

const syncTrelloToGoogle = createAsyncThunk(
  'synchronization/syncTrelloToGoogle',
  async ({
    boardLists,
    boardListCards,
    spreadsheetID,
    spreadsheetListName,
    gapi,
  }: Args) => {
    if (gapi === undefined) return Promise.reject(Error('gapi undefined'));

    const response = await startConvert({
      cardLists: boardLists,
      cards: boardListCards,
      spreadsheetId: spreadsheetID,
      sheetName: spreadsheetListName,
      lib: gapi,
    });

    if (response instanceof globalThis.Error) {
      return Promise.reject(response);
    }

    return response;
  }
);

export { syncTrelloToGoogle };
