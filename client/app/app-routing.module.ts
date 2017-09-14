import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TributeComponent } from "app/frontend/tribute/tribute.component";
import { LandingPageComponent } from "app/landing-page/landing-page.component";
import { RandomQuoteComponent } from "app/frontend/random-quote/random-quote.component";
import { WeatherComponent } from "app/frontend/weather/weather.component";
import { WikiComponent } from "app/frontend/wiki/wiki.component";
import { TictactoeComponent } from "app/frontend/tictactoe/tictactoe.component";
import { PomodoroComponent } from "app/frontend/pomodoro/pomodoro.component";
import { SimonComponent } from "app/frontend/simon/simon.component";
import { CalculatorComponent } from "app/frontend/calculator/calculator.component";

const routes: Routes = [
  { path: '', component: LandingPageComponent, pathMatch: 'full' },
  { path: 'tribute', component: TributeComponent },
  { path: 'quotes', component: RandomQuoteComponent },
  { path: 'weather', component: WeatherComponent },
  { path: 'wiki', component: WikiComponent },
  { path: 'calculator', component: CalculatorComponent},
  { path: 'pomo', component: PomodoroComponent},
  { path: 'tictactoe', component: TictactoeComponent},
  { path: 'simon', component: SimonComponent},
  { path: '**', redirectTo:'/' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }
