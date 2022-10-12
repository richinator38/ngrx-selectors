import { createReducer, on } from '@ngrx/store';

import { initialAppState } from '../app.interface';
import {
  setPerson,
  setFilms,
  setStarships,
  setVehicles,
  setLastPersonId,
} from '../actions/actions';
import { AdditionalApiViewModel } from 'src/app/models';

export const userFeatureKey = 'AppState';

export const AppReducer = createReducer(
  initialAppState,
  on(setPerson, (state, { person }) => ({
    ...state,
    currentPerson: person,
    apiStuff: null,
  })),
  on(setFilms, (state, { films }) => ({
    ...state,
    apiStuff: new AdditionalApiViewModel({ ...state.apiStuff, films }),
  })),
  on(setStarships, (state, { ships }) => ({
    ...state,
    apiStuff: new AdditionalApiViewModel({ ...state.apiStuff, ships }),
  })),
  on(setVehicles, (state, { vehicles }) => ({
    ...state,
    apiStuff: new AdditionalApiViewModel({ ...state.apiStuff, vehicles }),
  })),
  on(setLastPersonId, (state, { personId }) => ({
    ...state,
    lastPersonId: personId,
  }))
);
