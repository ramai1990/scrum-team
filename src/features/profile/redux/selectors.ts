import type { AppState } from 'src/app/store';

const selectProfile = (state: AppState) => state.features.profile;

export { selectProfile };
