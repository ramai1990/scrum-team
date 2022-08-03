import { createSlice } from '@reduxjs/toolkit';

import { initialState } from './initialState';
import {
  selectTrelloData,
  selectStatus,
  selectBoardToSheetConvertResponse,
  selectError,
  selectFromFileType,
  selectToFileType,
} from './selectors';
import {
  rollingBackSyncTrelloToGoogle,
  rollingBackSyncGoogleToTrello,
  syncTrelloToGoogle,
  syncGoogleToTrello,
} from './thunks';

const slice = createSlice({
  name: 'synchronization',
  initialState,
  reducers: {
    statusReset: (state) => {
      state.status = 'none';
    },
    setFromFileType: (state, action) => {
      state.fromFileType = action.payload;
    },
    setToFileType: (state, action) => {
      state.toFileType = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(syncGoogleToTrello.pending, (state) => {
        state.status = 'download';
      })
      .addCase(syncGoogleToTrello.fulfilled, (state, action) => {
        state.trelloData = action.payload;
        state.status = 'success';
      })
      .addCase(syncGoogleToTrello.rejected, (state, action) => {
        state.status = 'error';
        state.error = action.error.message ?? '';
      })
      .addCase(rollingBackSyncGoogleToTrello.pending, (state) => {
        state.status = 'download';
      })
      .addCase(rollingBackSyncGoogleToTrello.fulfilled, (state) => {
        state.trelloData = initialState.trelloData;
        state.status = 'success';
      })
      .addCase(rollingBackSyncGoogleToTrello.rejected, (state, action) => {
        state.status = 'error';
        state.error = action.error.message ?? '';
      })
      .addCase(syncTrelloToGoogle.pending, (state) => {
        state.status = 'download';
      })
      .addCase(syncTrelloToGoogle.fulfilled, (state, action) => {
        state.boardToSheetConvertResponse = action.payload;
        state.status = 'success';
      })
      .addCase(syncTrelloToGoogle.rejected, (state, action) => {
        state.status = 'error';
        state.error = action.error.message ?? '';
      })
      .addCase(rollingBackSyncTrelloToGoogle.pending, (state) => {
        state.status = 'download';
      })
      .addCase(rollingBackSyncTrelloToGoogle.fulfilled, (state) => {
        state.boardToSheetConvertResponse =
          initialState.boardToSheetConvertResponse;
        state.status = 'success';
      })
      .addCase(rollingBackSyncTrelloToGoogle.rejected, (state, action) => {
        state.status = 'error';
        state.error = action.error.message ?? '';
      });
  },
});

const { reducer } = slice;

const { statusReset, setFromFileType, setToFileType } = slice.actions;

export {
  reducer,
  syncGoogleToTrello,
  rollingBackSyncGoogleToTrello,
  syncTrelloToGoogle,
  rollingBackSyncTrelloToGoogle,
  statusReset,
  setFromFileType,
  setToFileType,
  selectTrelloData,
  selectStatus,
  selectBoardToSheetConvertResponse,
  selectError,
  selectFromFileType,
  selectToFileType,
};
