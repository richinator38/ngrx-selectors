import { createFeatureSelector, createSelector } from '@ngrx/store';

import { IApp } from '../app.interface';
import { appRootKey } from '../reducers/reducers';

export const getAppState = createFeatureSelector<IApp>(appRootKey);

export const getCurrentPerson = createSelector(
  getAppState,
  (state) => state?.currentPerson
);

export const getAdditionalData = createSelector(
  getAppState,
  (state) => state?.apiStuff
);

export const getLastPersonId = createSelector(
  getAppState,
  (state) => state?.lastPersonId
);

export const getPersonName = createSelector(
  getCurrentPerson,
  (person) => person?.name
);
export const getPersonHairColor = createSelector(
  getCurrentPerson,
  (person) => person?.hair_color
);
export const getPersonGender = createSelector(
  getCurrentPerson,
  (person) => person?.gender
);
export const getPersonHeight = createSelector(
  getCurrentPerson,
  (person) => person?.height
);

export const getFilms = createSelector(
  getAdditionalData,
  (data) => data?.films
);

export const getShips = createSelector(
  getAdditionalData,
  (data) => data?.ships
);

export const getVehicles = createSelector(
  getAdditionalData,
  (data) => data?.vehicles
);
