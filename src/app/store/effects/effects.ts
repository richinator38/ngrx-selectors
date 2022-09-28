import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Action, Store } from '@ngrx/store';
import { switchMap, map } from 'rxjs/operators';

import { StarWarsApiService } from 'src/app/services/starwars-api.service';
import {
  fetchFilms,
  fetchPerson,
  fetchStarships,
  fetchVehicles,
  setFilms,
  setPerson,
  setStarships,
  setVehicles,
} from '../actions/actions';
import { IApp } from '../app.interface';

@Injectable()
export class AppEffects {
  fetchPerson$ = createEffect(() =>
    this.actions$.pipe(
      ofType(fetchPerson),
      switchMap((action) =>
        this.starWarsApiService.getPerson(action.personId).pipe(
          switchMap((person) => {
            this.store.dispatch(setPerson({ person }));
            const actionsToReturn: Action[] = [
              fetchFilms({ films: person.films }),
              fetchStarships({ ships: person.starships }),
              fetchVehicles({ vehicles: person.vehicles }),
            ];

            return actionsToReturn;
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
    private starWarsApiService: StarWarsApiService,
    private store: Store<IApp>
  ) {}
}
