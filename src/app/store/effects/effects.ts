import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { of } from 'rxjs';
import { switchMap, map, catchError } from 'rxjs/operators';

import { StarWarsApiService } from 'src/app/services/starwars-api.service';
import {
  fetchFilms,
  fetchPerson,
  fetchStarships,
  fetchVehicles,
  setFilms,
  setLastPersonId,
  setPerson,
  setStarships,
  setVehicles,
} from '../actions/actions';

@Injectable()
export class AppEffects {
  fetchPerson$ = createEffect(() =>
    this.actions$.pipe(
      ofType(fetchPerson),
      switchMap((action) =>
        this.starWarsApiService.getPerson(action.personId).pipe(
          switchMap((person) => {
            const actionsToReturn: Action[] = [
              setLastPersonId({ personId: action.personId.toString() }),
              setPerson({ person }),
              fetchFilms({ films: person.films }),
              fetchStarships({ ships: person.starships }),
              fetchVehicles({ vehicles: person.vehicles }),
            ];

            return actionsToReturn;
          }),
          catchError(() => {
            alert('Person not found');
            return of(setPerson({ person: null }));
          })
        )
      )
    )
  );

  fetchFilms$ = createEffect(() =>
    this.actions$.pipe(
      ofType(fetchFilms),
      switchMap((action) =>
        this.starWarsApiService
          .getFilms(action.films)
          .pipe(map((films) => setFilms({ films })))
      )
    )
  );

  fetchStarships$ = createEffect(() =>
    this.actions$.pipe(
      ofType(fetchStarships),
      switchMap((action) =>
        this.starWarsApiService
          .getStarships(action.ships)
          .pipe(map((ships) => setStarships({ ships })))
      )
    )
  );

  fetchVehicles$ = createEffect(() =>
    this.actions$.pipe(
      ofType(fetchVehicles),
      switchMap((action) =>
        this.starWarsApiService
          .getVehicles(action.vehicles)
          .pipe(map((vehicles) => setVehicles({ vehicles })))
      )
    )
  );

  constructor(
    private actions$: Actions,
    private starWarsApiService: StarWarsApiService
  ) {}
}
