import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { IApp } from '../store/app.interface';
import { getOpeningCrawl } from '../store/selectors';

@Component({
  selector: 'app-opening-crawl',
  templateUrl: './opening-crawl.component.html',
  styleUrls: ['./opening-crawl.component.css'],
})
export class OpeningCrawlComponent implements OnInit {
  opening_scrawl$: Observable<string>;

  constructor(private store: Store<IApp>) {}

  ngOnInit(): void {
    this.opening_scrawl$ = this.store.pipe(select(getOpeningCrawl));
  }
}
