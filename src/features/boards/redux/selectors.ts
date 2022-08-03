import type { AppState } from 'src/app/store';

const selectBoards = (state: AppState) => state.features.boards;

const selectRouteToChosen = (state: AppState) =>
  state.features.boards.routeToChosen;

export { selectBoards, selectRouteToChosen };
