import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { IAppState } from '../store/app.interface';
import { fetchPerson } from '../store/actions/actions';
import { getPeopleComponentData } from '../store/selectors/people.component.selectors';
import { Film } from '../models';
import { getFilms } from '../store/selectors/selectors';

@Component({
  selector: 'app-starwars-container',
  templateUrl: './starwars-container.component.html',
  styleUrls: ['./starwars-container.component.css'],
})
export class StarwarsContainerComponent implements OnInit {
  personComponentData$: Observable<any>;
  films$: Observable<Film[]>;

  constructor(private store: Store<IAppState>) {}

  ngOnInit(): void {
    this.personComponentData$ = this.store.pipe(select(getPeopleComponentData));
    this.films$ = this.store.pipe(select(getFilms));

    this.store.dispatch(fetchPerson({ personId: 1 }));
  }
}
