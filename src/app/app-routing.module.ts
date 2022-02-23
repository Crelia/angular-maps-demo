// app-routing.component.ts

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component'; //home screen (contains map)
import {CityComponent} from "./city/city/city.component"; //city screen (contains city info)

//set routes, city needs an associated id, "" redirects to home
const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'city/:id',
    component: CityComponent
  },
  { path: '',  redirectTo: '/home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
