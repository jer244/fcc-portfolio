import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TributeComponent } from "app/tribute/tribute.component";
import { LandingPageComponent } from "app/landing-page/landing-page.component";

const routes: Routes = [
  { path: '', component: LandingPageComponent, pathMatch: 'full' },
  { path: 'tribute', component: TributeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }
