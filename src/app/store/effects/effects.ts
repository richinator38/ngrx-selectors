import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { switchMap, map } from 'rxjs/operators';

import { StarWarsApiService } from 'src/app/services/starwars-api.service';
import { fetchPerson, setPerson } from '../actions/actions';

@Injectable()
export class AppEffects {
  fetchPerson$ = createEffect(() =>
    this.actions$.pipe(
      ofType(fetchPerson),
      switchMap((action) =>
        this.starWarsApiService
          .getPerson(action.personId)
          .pipe(map((person) => setPerson({ person })))
      )
    )
  );

  constructor(
    private actions$: Actions,
    private starWarsApiService: StarWarsApiService
  ) {}
}
