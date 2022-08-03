import { createSlice } from '@reduxjs/toolkit';
import { defaults } from 'lodash';

import { initialState } from './initialState';
import { getData } from './thunks';
import { selectStatus, selectData, selectError } from './selectors';

const slice = createSlice({
  name: 'card',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getData.pending, (state) => {
        state.status = 'pending';
      })
      .addCase(getData.fulfilled, (state, action) => {
        const { payload } = action;

        if ('message' in payload) {
          state.status = 'rejected';
          state.error = payload.message;
        } else {
          state.status = 'fulfilled';

          const { card, actions } = payload;

          const data = { ...card, comments: actions };

          state.data = defaults(data, initialState.data);
        }
      })
      .addCase(getData.rejected, (state, action) => {
        state.status = 'rejected';
        state.error = action.error.message ?? '';
      });
  },
});

const { reducer } = slice;

export { reducer, selectData, selectStatus, selectError, getData };
