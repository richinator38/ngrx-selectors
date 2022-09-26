import { createFeatureSelector, createSelector } from '@ngrx/store';

import { IApp } from '../app.interface';
import { userFeatureKey } from '../reducers/reducers';

export const getAppState = createFeatureSelector<IApp>(userFeatureKey);

export const getCurrentPerson = createSelector(
  getAppState,
  (state) => state?.currentPerson
);

export const getFilms = createSelector(
  getCurrentPerson,
  (person) => person?.films_full
);
