import type { AppState } from 'src/app/store';

const selectBoardName = (state: AppState) => state.features.board.boardName;
const selectCardLists = (state: AppState) => state.features.board.lists;
const selectCards = (state: AppState) => state.features.board.cards;
const selectStatus = (state: AppState) => state.features.board.status;
const selectError = (state: AppState) => state.features.board.error;

export {
  selectBoardName,
  selectCardLists,
  selectCards,
  selectStatus,
  selectError,
};
