import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AllComponent} from "./Components/all/all.component";
import {TechnologyComponent} from "./Components/technology/technology.component";
import {SportsComponent} from "./Components/sports/sports.component";

const routes: Routes = [
  {
    path: '', redirectTo: '/all', pathMatch: 'full'
  },
  {
    path: 'all', component: AllComponent,
  },
  {
    path: 'technology', component: TechnologyComponent
  },
  {
    path: 'sports', component: SportsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
