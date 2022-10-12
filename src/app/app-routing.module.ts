import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OpeningCrawlComponent } from './starwars-container/opening-crawl/opening-crawl.component';
import { StarwarsContainerComponent } from './starwars-container/starwars-container.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'person/1',
  },
  {
    path: 'person/:personNumber',
    component: StarwarsContainerComponent,
  },
  {
    path: 'opening-crawl/:episodeNumber',
    component: OpeningCrawlComponent,
  },
  { path: 'search', loadChildren: () => import('./search/search.module').then(m => m.SearchModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
