import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app-routing.module';
import { MomentModule } from 'angular2-moment';
import { NgStringPipesModule } from 'ngx-pipes';

import { AppComponent } from './app.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { TributeComponent } from './frontend/tribute/tribute.component';
import { RandomQuoteComponent } from './frontend/random-quote/random-quote.component';
import { WeatherComponent } from './frontend/weather/weather.component';
import { WikiComponent } from './frontend/wiki/wiki.component';
import { QuoteService } from "app/frontend/random-quote/quote.service";
import { TictactoeComponent } from './frontend/tictactoe/tictactoe.component';
import { PomodoroComponent } from './frontend/pomodoro/pomodoro.component';
import { SimonComponent } from './frontend/simon/simon.component';
import { CalculatorComponent } from './frontend/calculator/calculator.component';
import { GameboardComponent } from './frontend/tictactoe/gameboard/gameboard.component';
import { ScoreboardComponent } from './frontend/tictactoe/scoreboard/scoreboard.component';
import { CellComponent } from './frontend/tictactoe/cell/cell.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    TributeComponent,
    RandomQuoteComponent,
    WeatherComponent,
    WikiComponent,
    TictactoeComponent,
    PomodoroComponent,
    SimonComponent,
    CalculatorComponent,
    GameboardComponent,
    ScoreboardComponent,
    CellComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    MomentModule,
    NgStringPipesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
