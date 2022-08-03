import { createAsyncThunk } from '@reduxjs/toolkit';

import { SheetValues } from 'src/shared/api/google/sheets';

import {
  googleSheetToTrelloBoardConversion,
  syncWithTrelloBoard,
} from '../../utils';

type Args = {
  trelloToken: string;
  boardID: string;
  sheetListValues: SheetValues;
};

const syncGoogleToTrello = createAsyncThunk(
  'synchronization/syncGoogleToTrello',
  async ({ trelloToken, boardID, sheetListValues }: Args) => {
    const lists = googleSheetToTrelloBoardConversion(sheetListValues);

    const response = await syncWithTrelloBoard({
      token: trelloToken,
      boardID,
      lists,
    });

    if (response instanceof globalThis.Error) {
      return Promise.reject(response);
    }

    return response;
  }
);

export { syncGoogleToTrello };
