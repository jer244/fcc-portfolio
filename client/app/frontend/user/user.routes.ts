import { Routes } from "@angular/router";

import { SignupComponent } from "app/frontend/user/signup/signup.component";
import { LogoutComponent } from "app/frontend/user/logout/logout.component";
import { LoginComponent } from "app/frontend/user/login/login.component";


export const USER_ROUTES: Routes = [
    { path: '', redirectTo: 'signup', pathMatch: 'full' },
    { path: 'signup', component: SignupComponent },
    { path: 'login', component: LoginComponent },
    { path: 'logout', component: LogoutComponent }
];