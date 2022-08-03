import type { AppState } from 'src/app/store';

const selectStatus = (state: AppState) => state.features.synchronization.status;

const selectError = (state: AppState) => state.features.synchronization.error;

const selectTrelloData = (state: AppState) =>
  state.features.synchronization.trelloData;

const selectBoardToSheetConvertResponse = (state: AppState) =>
  state.features.synchronization.boardToSheetConvertResponse;

const selectFromFileType = (state: AppState) =>
  state.features.synchronization.fromFileType;

const selectToFileType = (state: AppState) =>
  state.features.synchronization.toFileType;

export {
  selectTrelloData,
  selectBoardToSheetConvertResponse,
  selectStatus,
  selectError,
  selectFromFileType,
  selectToFileType,
};
