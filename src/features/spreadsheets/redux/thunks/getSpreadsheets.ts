import { createAsyncThunk } from '@reduxjs/toolkit';

import { fetchDriveFilesList } from 'src/shared/api/google/drive';

type Args = {
  gapi: Parameters<typeof fetchDriveFilesList>['1'];
  queryParameters?: Parameters<typeof fetchDriveFilesList>['0'];
};

const getSpreadsheets = createAsyncThunk(
  'spreadsheets/getSpreadsheets',
  async (args: Args) => {
    const { gapi, queryParameters = {} } = args;
    const theQueryParameters = {
      q: "mimeType='application/vnd.google-apps.spreadsheet'",
      fields: 'nextPageToken, files(id, name)',
      orderBy: 'name_natural',
      ...queryParameters,
    };

    const result = await fetchDriveFilesList(theQueryParameters, gapi);

    if (result instanceof globalThis.Error) {
      return Promise.reject(result);
    }

    return result;
  }
);

export { getSpreadsheets };
