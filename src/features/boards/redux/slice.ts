import { createSlice } from '@reduxjs/toolkit';

import { conversionBoardsFromResponse } from '../utils';
import { BOARDS_TO_APPEND } from '../constants';
import { getBoards } from './thunks';
import { initialState } from './initialState';
import { selectBoards, selectRouteToChosen } from './selectors';

const slice = createSlice({
  name: 'boards',
  initialState,
  reducers: {
    increaseDisplayedItems: (state) => {
      const newCount = state.displayedItems + BOARDS_TO_APPEND;
      state.displayedItems =
        newCount < state.items.length ? newCount : state.items.length;
    },
    goToBoard: (state, action) => {
      state.routeToChosen = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getBoards.pending, (state) => {
        state.status = 'pending';
      })
      .addCase(getBoards.fulfilled, (state, action) => {
        const { payload } = action;

        if (payload instanceof globalThis.Error) {
          state.status = 'rejected';
          state.error = payload.message;
        } else {
          const { length } = payload;
          state.status = 'fulfilled';
          state.items =
            length > 0 ? conversionBoardsFromResponse(payload) : state.items;
          state.displayedItems =
            length > BOARDS_TO_APPEND ? BOARDS_TO_APPEND : length;
        }
      })
      .addCase(getBoards.rejected, (state, action) => {
        state.status = 'rejected';
        state.error = action.error.message ?? '';
      });
  },
});

const { reducer } = slice;

const { increaseDisplayedItems, goToBoard } = slice.actions;

export {
  reducer,
  selectBoards,
  selectRouteToChosen,
  getBoards,
  increaseDisplayedItems,
  goToBoard,
};
