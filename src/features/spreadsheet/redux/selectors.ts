import type { AppState } from 'src/app/store';

const selectStatus = (state: AppState) => state.features.spreadsheet.status;

const selectItems = (state: AppState) => state.features.spreadsheet.items;

const selectError = (state: AppState) => state.features.spreadsheet.error;

export { selectStatus, selectItems, selectError };
