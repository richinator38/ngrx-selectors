import { createSelector } from '@ngrx/store';

import { StarWarsContainerComponentViewModel } from 'src/app/models/starwars-container.component.view-model';
import { getLastPersonId, getPersonNumberFromRoute } from './selectors';

export const getStarWarsContainerComponentData = createSelector(
  getLastPersonId,
  getPersonNumberFromRoute,
  (lastPersonId, personNumberFromRoute) => {
    return new StarWarsContainerComponentViewModel({
      currentPersonId: personNumberFromRoute,
      shouldGetPerson:
        personNumberFromRoute != null &&
        personNumberFromRoute.length > 0 &&
        personNumberFromRoute != lastPersonId,
    });
  }
);
