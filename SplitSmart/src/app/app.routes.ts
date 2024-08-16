import { Routes } from '@angular/router';
import { LoginComponent } from '../modules/login-signup/login/login.component';
import { SignupComponent } from '../modules/login-signup/signup/signup.component';
import { DashboardComponent } from '../modules/dashboard/dashboard-component/dashboard.component';
import { authGuard } from '../guard/auth.guard';

export const routes: Routes = [
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    { path: 'login', component: LoginComponent },
    { path: 'signup', component: SignupComponent },
    { 
        path: 'dashboard',
        component: DashboardComponent,
        canActivate : [authGuard]
    }
];
