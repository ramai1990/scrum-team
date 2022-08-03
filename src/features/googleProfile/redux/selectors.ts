import type { AppState } from 'src/app/store';

const selectProfile = (state: AppState) => state.features.googleProfile;

export { selectProfile };
