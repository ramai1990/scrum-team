import type { AppState } from 'src/app/store';

const selectStatus = (state: AppState) => state.features.card.status;

const selectData = (state: AppState) => state.features.card.data;

const selectError = (state: AppState) => state.features.card.error;

export { selectStatus, selectData, selectError };
