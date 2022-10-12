import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

import { SearchRoutingModule } from './search-routing.module';
import { SearchComponent } from './search.component';
import { FormsModule } from '@angular/forms';
import { SearchEffects } from './store/effects/search.effects';
import {
  searchFeatureKey,
  SearchReducer,
} from './store/reducers/search.reducers';

@NgModule({
  declarations: [SearchComponent],
  imports: [
    CommonModule,
    FormsModule,
    SearchRoutingModule,
    StoreModule.forFeature(searchFeatureKey, {
      search: SearchReducer,
    }),
    EffectsModule.forFeature([SearchEffects]),
  ],
})
export class SearchModule {}
