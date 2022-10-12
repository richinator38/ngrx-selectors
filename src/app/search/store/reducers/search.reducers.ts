import { createReducer, on } from '@ngrx/store';

import { initialSearchState } from '../search.interface';
import { searchForPeopleSuccess } from '../actions/search.actions';

export const searchFeatureKey = 'SearchState';

export const SearchReducer = createReducer(
  initialSearchState,
  on(searchForPeopleSuccess, (state, { results }) => ({
    ...state,
    searchResponse: results,
  }))
);
