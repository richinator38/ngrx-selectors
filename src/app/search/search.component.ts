import { Component, OnDestroy, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { select, Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';

import { searchForPeople } from './store/actions/search.actions';
import { ISearchState } from './store/search.interface';
import { getSearchResults } from './store/selectors/search.selectors';
import { getLastPersonId } from '../store/selectors';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent implements OnInit, OnDestroy {
  peopleSearchText: string;
  subscription = new Subscription();
  results: string;
  lastPersonId$: Observable<string>;

  constructor(private title: Title, private store: Store<ISearchState>) {}

  ngOnInit(): void {
    this.title.setTitle('Search Star Wars');

    this.subscription.add(
      this.store.pipe(select(getSearchResults)).subscribe((results) => {
        this.results = JSON.stringify(results, null, 2);
      })
    );

    this.lastPersonId$ = this.store.pipe(select(getLastPersonId));
  }

  search() {
    this.store.dispatch(searchForPeople({ peopleText: this.peopleSearchText }));
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
