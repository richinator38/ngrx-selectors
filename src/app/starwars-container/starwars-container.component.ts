import { Component, OnDestroy, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { filter, take } from 'rxjs/operators';

import { IAppState } from '../store/app.interface';
import { fetchPerson } from '../store/actions/actions';
import { AdditionalApiViewModel, PeopleComponentViewModel } from '../models';
import {
  getPeopleComponentData,
  getAdditionalApiData,
  getStarWarsContainerComponentData,
} from '../store/selectors';
import { Router } from '@angular/router';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-starwars-container',
  templateUrl: './starwars-container.component.html',
  styleUrls: ['./starwars-container.component.css'],
})
export class StarwarsContainerComponent implements OnInit, OnDestroy {
  personComponentData$: Observable<PeopleComponentViewModel>;
  additionalApiData$: Observable<AdditionalApiViewModel>;
  selectedPerson: string;
  subscription = new Subscription();

  constructor(
    private store: Store<IAppState>,
    private router: Router,
    private titleService: Title
  ) {}

  ngOnInit(): void {
    this.titleService.setTitle('NGRX Selectors');
    this.personComponentData$ = this.store.pipe(select(getPeopleComponentData));
    this.additionalApiData$ = this.store.pipe(select(getAdditionalApiData));

    this.subscription.add(
      this.store
        .pipe(
          select(getStarWarsContainerComponentData),
          filter((vm) => vm != null && vm.currentPersonId != null)
        )
        .subscribe((vm) => {
          this.selectedPerson = vm.currentPersonId;

          if (vm.shouldGetPerson) {
            this.getPerson();
          }
        })
    );
  }

  getPerson() {
    this.store.dispatch(fetchPerson({ personId: +this.selectedPerson }));
  }

  changeRoute() {
    this.router.navigateByUrl(`/person/${this.selectedPerson}`);
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
