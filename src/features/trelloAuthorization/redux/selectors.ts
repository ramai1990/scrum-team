import type { AppState } from 'src/app/store';

const selectToken = (state: AppState) =>
  state.features.trelloAuthorization.token;

export { selectToken };
