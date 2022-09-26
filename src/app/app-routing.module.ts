import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StarwarsContainerComponent } from './starwars-container/starwars-container.component';

const routes: Routes = [
  {
    path: '',
    component: StarwarsContainerComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
