import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AgmCoreModule } from '@agm/core';

import { AppRoutingModule } from './app-routing.module';
import {CityModule} from "./city/city.module";
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CityModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCLiFKGTkoYO97cAYZ03XovWBrsWljQnFM'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
