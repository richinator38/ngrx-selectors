import { createReducer, on, Action } from '@ngrx/store';

import { initialAppState, IApp } from '../app.interface';
import { setPerson } from '../actions/actions';

export const userFeatureKey = 'AppState';

export const AppReducer = createReducer(
  initialAppState,
  on(setPerson, (state, { person }) => ({
    ...state,
    currentPerson: person,
  }))
);
