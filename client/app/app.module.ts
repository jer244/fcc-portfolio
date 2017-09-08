import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { TributeComponent } from './tribute/tribute.component';
import { RandomQuoteComponent } from './random-quote/random-quote.component';
import { WeatherComponent } from './weather/weather.component';
import { WikiComponent } from './wiki/wiki.component';
import { QuoteService } from "app/random-quote/quote.service";

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
  providers: [QuoteService],
  bootstrap: [AppComponent]
})
export class AppModule { }
