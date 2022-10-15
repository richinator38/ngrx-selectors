import { createSelector } from '@ngrx/store';

import { StarWarsContainerComponentViewModel } from 'src/app/models/starwars-container.component.view-model';
import { selectRouteParam } from './router.selectors';
import { getLastPersonId } from './selectors';

export const getPersonNumberFromRoute = selectRouteParam('personNumber');

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
