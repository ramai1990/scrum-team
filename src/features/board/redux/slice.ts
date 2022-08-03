import { createSlice } from '@reduxjs/toolkit';
import { defaults } from 'lodash';

import { initialState } from './initialState';
import { getBoardData } from './thunks';
import {
  selectBoardName,
  selectCardLists,
  selectCards,
  selectStatus,
  selectError,
} from './selectors';

const slice = createSlice({
  name: 'board',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getBoardData.pending, (state) => {
        state.status = 'pending';
      })
      .addCase(getBoardData.fulfilled, (state, action) => {
        const { payload } = action;

        state.boardName = payload.boardName?.name;
        state.lists = defaults(payload.lists, initialState.lists);
        state.cards = defaults(payload.cards, initialState.cards);

        state.status = 'fulfilled';
      })
      .addCase(getBoardData.rejected, (state, action) => {
        state.status = 'rejected';
        state.error = action.error.message ?? '';
      });
  },
});

const { reducer } = slice;

export {
  reducer,
  selectBoardName,
  selectCardLists,
  selectCards,
  selectStatus,
  selectError,
  getBoardData,
};
