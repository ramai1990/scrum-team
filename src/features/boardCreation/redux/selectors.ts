import type { AppState } from 'src/app/store';

const selectStatus = (state: AppState) => state.features.boardCreation.status;

const selectNewBoard = (state: AppState) =>
  state.features.boardCreation.newBoard;

const selectError = (state: AppState) => state.features.boardCreation.error;

export { selectStatus, selectNewBoard, selectError };
