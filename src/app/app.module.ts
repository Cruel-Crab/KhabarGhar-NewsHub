import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TechnologyComponent } from './Components/technology/technology.component';
import { SportsComponent } from './Components/sports/sports.component';
import { AllComponent } from './Components/all/all.component';
import { HttpClientModule } from "@angular/common/http";

import{LoadingBarHttpClientModule}from'@ngx-loading-bar/http-client';
import { FooterComponent } from './Components/footer/footer.component';
import { NavbarComponent } from './Components/navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    TechnologyComponent,
    SportsComponent,
    AllComponent,
    FooterComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LoadingBarHttpClientModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
