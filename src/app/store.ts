import {
  configureStore,
  combineReducers,
  Action,
  ThunkAction,
} from '@reduxjs/toolkit';
import { createWrapper } from 'next-redux-wrapper';

import { reducer as trelloAuthorizationReducer } from 'src/features/trelloAuthorization';
import { reducer as profileReducer } from 'src/features/profile';
import { reducer as spreadsheetsReducer } from 'src/features/spreadsheets';
import { reducer as boardCreationReducer } from 'src/features/boardCreation';
import { reducer as boardReducer } from 'src/features/board';
import { reducer as cardReducer } from 'src/features/card';
import { boardsReducer } from 'src/features/boards';
import { reducer as spreadsheetReducer } from 'src/features/spreadsheet';
import { googleProfileReducer } from 'src/features/googleProfile';
import { syncReducer } from 'src/features/synchronization';
import { themeReducer } from 'src/services/theme';

const makeStore = () =>
  configureStore({
    reducer: {
      services: combineReducers({ theme: themeReducer }),
      features: combineReducers({
        boardCreation: boardCreationReducer,
        board: boardReducer,
        card: cardReducer,
        trelloAuthorization: trelloAuthorizationReducer,
        profile: profileReducer,
        spreadsheets: spreadsheetsReducer,
        spreadsheet: spreadsheetReducer,
        boards: boardsReducer,
        googleProfile: googleProfileReducer,
        synchronization: syncReducer,
      }),
    },
    devTools: true,
  });

type AppStore = ReturnType<typeof makeStore>;

type AppDispatch = AppStore['dispatch'];

type AppState = ReturnType<AppStore['getState']>;

type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  AppState,
  unknown,
  Action
>;

const wrapper = createWrapper<AppStore>(makeStore);

export type { AppStore, AppDispatch, AppState, AppThunk };

export { wrapper, makeStore };
