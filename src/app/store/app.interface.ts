import {
  AdditionalApiViewModel,
  Film,
  People,
  Starship,
  Vehicle,
} from '../models';

export interface IApp {
  currentPerson?: People;
  // films?: Film[];
  // ships?: Starship[];
  // vehicles?: Vehicle[];
  apiStuff?: AdditionalApiViewModel;
}

export interface IAppState {
  AppState: IApp;
}

export const initialAppState: IApp = { currentPerson: undefined };
