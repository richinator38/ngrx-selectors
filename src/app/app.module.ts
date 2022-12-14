import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';
import { StoreRouterConnectingModule } from '@ngrx/router-store';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { reducers, metaReducers } from './store';
import { PeopleComponent } from './starwars-container/people/people.component';
import { AppEffects } from './store/effects/effects';
import { StarwarsContainerComponent } from './starwars-container/starwars-container.component';
import { FilmsComponent } from './starwars-container/films/films.component';
import { StarshipsComponent } from './starwars-container/starships/starships.component';
import { VehiclesComponent } from './starwars-container/vehicles/vehicles.component';
import { FormsModule } from '@angular/forms';
import { OpeningCrawlComponent } from './starwars-container/opening-crawl/opening-crawl.component';

@NgModule({
  declarations: [
    AppComponent,
    PeopleComponent,
    StarwarsContainerComponent,
    FilmsComponent,
    StarshipsComponent,
    VehiclesComponent,
    OpeningCrawlComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    StoreModule.forRoot(reducers, { metaReducers }),
    StoreDevtoolsModule.instrument(),
    EffectsModule.forRoot([AppEffects]),
    // Connects RouterModule with StoreModule, uses MinimalRouterStateSerializer by default
    StoreRouterConnectingModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
