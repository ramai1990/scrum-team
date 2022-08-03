import type { AppState } from 'src/app/store';

const selectStatus = (state: AppState) => state.features.spreadsheets.status;

const selectFiles = (state: AppState) => state.features.spreadsheets.files;

const selectError = (state: AppState) => state.features.spreadsheets.error;

export { selectStatus, selectFiles, selectError };
