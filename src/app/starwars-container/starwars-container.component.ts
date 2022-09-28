import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { IAppState } from '../store/app.interface';
import { fetchPerson } from '../store/actions/actions';
import { AdditionalApiViewModel, PeopleComponentViewModel } from '../models';
import {
  getPeopleComponentData,
  getAdditionalApiData,
} from '../store/selectors';

@Component({
  selector: 'app-starwars-container',
  templateUrl: './starwars-container.component.html',
  styleUrls: ['./starwars-container.component.css'],
})
export class StarwarsContainerComponent implements OnInit {
  personComponentData$: Observable<PeopleComponentViewModel>;
  additionalApiData$: Observable<AdditionalApiViewModel>;

  constructor(private store: Store<IAppState>) {}

  ngOnInit(): void {
    this.personComponentData$ = this.store.pipe(select(getPeopleComponentData));
    this.additionalApiData$ = this.store.pipe(select(getAdditionalApiData));

    this.store.dispatch(fetchPerson({ personId: 1 }));
  }
}
