import { createSlice } from '@reduxjs/toolkit';

import { initialState } from './initialState';
import { getSpreadsheet } from './thunks';
import { selectStatus, selectItems, selectError } from './selectors';

const slice = createSlice({
  name: 'spreadsheet',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getSpreadsheet.pending, (state) => {
        state.status = 'pending';
      })
      .addCase(getSpreadsheet.fulfilled, (state, action) => {
        const { payload } = action;
        state.status = 'fulfilled';
        state.items = payload;
      })
      .addCase(getSpreadsheet.rejected, (state, action) => {
        const { error } = action;
        state.status = 'rejected';
        state.error = error.message ?? '';
      });
  },
});

const { reducer } = slice;

export { reducer, selectStatus, selectItems, selectError, getSpreadsheet };
