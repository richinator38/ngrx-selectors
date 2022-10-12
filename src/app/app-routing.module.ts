import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OpeningCrawlComponent } from './opening-crawl/opening-crawl.component';
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
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
