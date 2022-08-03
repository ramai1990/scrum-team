import { createSlice } from '@reduxjs/toolkit';
import { defaults } from 'lodash';

import { initialState } from './initialState';
import { getSpreadsheets } from './thunks';
import { selectStatus, selectFiles, selectError } from './selectors';

const slice = createSlice({
  name: 'spreadsheets',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getSpreadsheets.pending, (state) => {
        state.status = 'pending';
      })
      .addCase(getSpreadsheets.fulfilled, (state, action) => {
        const { payload } = action;

        state.status = 'fulfilled';

        const { result } = payload;
        const { files: newFiles = [], nextPageToken } = result;
        const items = [...state.files.items, ...newFiles];

        state.files = defaults({ items, nextPageToken }, initialState.files);
      })
      .addCase(getSpreadsheets.rejected, (state, action) => {
        state.status = 'rejected';
        state.error = action.error.message ?? '';
      });
  },
});

const { reducer } = slice;

export { reducer, selectFiles, selectStatus, selectError, getSpreadsheets };
