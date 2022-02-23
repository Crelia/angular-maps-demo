import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CityComponent } from './city/city.component';


//set routes, city needs id
const routes: Routes = [
  {
    path: 'city/:id',
    component: CityComponent
  }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CityRoutingModule { }
