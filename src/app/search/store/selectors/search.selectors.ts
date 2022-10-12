import { createFeatureSelector, createSelector } from '@ngrx/store';

import { searchFeatureKey } from '../reducers/search.reducers';
import { ISearchState } from '../search.interface';

export const getSearchState =
  createFeatureSelector<ISearchState>(searchFeatureKey);

export const getSearch = createSelector(
  getSearchState,
  (state) => state?.search
);

export const getSearchResponse = createSelector(
  getSearch,
  (search) => search?.searchResponse
);

export const getSearchResults = createSelector(
  getSearchResponse,
  (response) => response?.results
);
