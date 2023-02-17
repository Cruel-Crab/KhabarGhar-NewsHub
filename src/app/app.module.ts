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
import { NoResultComponent } from './Components/no-result/no-result.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    TechnologyComponent,
    SportsComponent,
    AllComponent,
    FooterComponent,
    NavbarComponent,
    NoResultComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LoadingBarHttpClientModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
