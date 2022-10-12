import { routerReducer } from '@ngrx/router-store';
import { ActionReducerMap, MetaReducer } from '@ngrx/store';

import { IAppState } from './app.interface';
import { AppReducer } from './reducers/reducers';

export const reducers: ActionReducerMap<IAppState> = {
  AppState: AppReducer,
  router: routerReducer,
};
export const metaReducers: MetaReducer<IAppState>[] = [];
