import { createSelector } from '@ngrx/store';

import { AdditionalApiViewModel } from 'src/app/models';
import { getFilms, getShips, getVehicles } from './selectors';

export const getAdditionalApiData = createSelector(
  getFilms,
  getShips,
  getVehicles,
  (films, ships, vehicles) => {
    return new AdditionalApiViewModel({
      films,
      ships,
      vehicles,
    });
  }
);
