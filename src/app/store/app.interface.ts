import { People } from '../models';

export interface IApp {
  currentPerson?: People;
}

export interface IAppState {
  AppState: IApp;
}

export const initialAppState: IApp = { currentPerson: undefined };
