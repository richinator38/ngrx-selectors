import { RouterReducerState } from '@ngrx/router-store';
import { AdditionalApiViewModel, People } from '../models';

export interface IApp {
  currentPerson?: People;
  lastPersonId?: string;
  apiStuff?: AdditionalApiViewModel;
}

export interface IAppState {
  AppState: IApp;
  router: RouterReducerState;
}

export const initialAppState: IApp = { currentPerson: undefined };
