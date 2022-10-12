import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { of } from 'rxjs';
import { switchMap, map, catchError } from 'rxjs/operators';

import { StarWarsApiService } from 'src/app/services/starwars-api.service';
import {
  searchForPeople,
  searchForPeopleSuccess,
} from '../actions/search.actions';

@Injectable()
export class SearchEffects {
  searchForPeople$ = createEffect(() =>
    this.actions$.pipe(
      ofType(searchForPeople),
      switchMap((action) =>
        this.starWarsApiService
          .searchForPeople(action.peopleText)
          .pipe(map((results) => searchForPeopleSuccess({ results })))
      )
    )
  );

  constructor(
    private actions$: Actions,
    private starWarsApiService: StarWarsApiService
  ) {}
}
