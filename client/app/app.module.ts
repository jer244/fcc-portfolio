import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { TributeComponent } from './frontend/tribute/tribute.component';
import { RandomQuoteComponent } from './frontend/random-quote/random-quote.component';
import { WeatherComponent } from './frontend/weather/weather.component';
import { WikiComponent } from './frontend/wiki/wiki.component';
import { QuoteService } from "app/frontend/random-quote/quote.service";

@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    TributeComponent,
    RandomQuoteComponent,
    WeatherComponent,
    WikiComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
