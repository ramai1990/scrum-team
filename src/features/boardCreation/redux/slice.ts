import { createSlice } from '@reduxjs/toolkit';
import { defaults } from 'lodash';

import { initialState } from './initialState';
import { createBoard } from './thunks';
import { selectStatus, selectNewBoard, selectError } from './selectors';

const slice = createSlice({
  name: 'boardCreation',
  initialState,
  reducers: {
    statusReset: (state) => {
      state.status = 'idle';
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(createBoard.pending, (state) => {
        state.status = 'pending';
      })
      .addCase(createBoard.fulfilled, (state, action) => {
        const { payload } = action;

        state.status = 'fulfilled';
        state.newBoard = defaults(payload, initialState.newBoard);
      })
      .addCase(createBoard.rejected, (state, action) => {
        state.status = 'rejected';
        state.error = action.error.message ?? '';
      });
  },
});

const { reducer } = slice;

const { statusReset } = slice.actions;

export {
  reducer,
  selectNewBoard,
  selectStatus,
  selectError,
  statusReset,
  createBoard,
};
