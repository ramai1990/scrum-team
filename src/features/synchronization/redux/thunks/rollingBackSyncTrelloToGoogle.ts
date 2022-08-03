import { createAsyncThunk } from '@reduxjs/toolkit';

import { getGoogleAPI } from 'src/shared/api/google';

import { SheetValue } from '../../types';
import { rollingBackConvert } from '../../utils';

type Args = {
  oldSheetValue: SheetValue;
  spreadsheetID: string;
  spreadsheetListName: string;
  gapi: ReturnType<typeof getGoogleAPI>;
};

const rollingBackSyncTrelloToGoogle = createAsyncThunk(
  'synchronization/rollingBackSyncTrelloToGoogle',
  async ({ oldSheetValue, spreadsheetID, spreadsheetListName, gapi }: Args) => {
    if (gapi === undefined) return Promise.reject(Error('gapi undefined'));

    const response = await rollingBackConvert({
      sheetName: spreadsheetListName,
      spreadsheetId: spreadsheetID,
      oldSheetValue,
      lib: gapi,
    });

    if (response instanceof globalThis.Error) {
      return Promise.reject(response);
    }

    return response;
  }
);

export { rollingBackSyncTrelloToGoogle };
