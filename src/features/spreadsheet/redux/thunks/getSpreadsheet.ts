import { createAsyncThunk } from '@reduxjs/toolkit';

import { getSheetData } from 'src/shared/api/google/sheets/spreadsheets';

const getSpreadsheet = createAsyncThunk(
  'spreadsheet/getSpreadsheet',
  async (id: string) => {
    const result = await getSheetData(id);

    if (result instanceof globalThis.Error) {
      return Promise.reject(result);
    }

    return result;
  }
);

export { getSpreadsheet };
