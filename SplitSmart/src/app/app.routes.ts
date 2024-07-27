import { Routes } from '@angular/router';
import { LoginComponent } from '../login-signup/login/login.component';
import { SignupComponent } from '../login-signup/signup/signup.component';
import { DashboardComponent } from '../dashboard/dashboard.component';

export const routes: Routes = [
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    { path: 'login', component: LoginComponent },
    { path: 'signup', component: SignupComponent },
    { path: 'dashboard', component: DashboardComponent}
];
