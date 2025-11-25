import { Routes } from '@angular/router';
import { DashboardComponent } from './view/dashboard/dashboard.component';
import { LoginComponent } from './view/login/login.component';
import { HomeComponent } from './view/home/home.component';

export const routes: Routes = [
    {
        path: 'home',
        component: HomeComponent
    },
    {
        path: 'dashboard',
        component: DashboardComponent
    },
    { path: 'login', component: LoginComponent },
    { path: '', redirectTo: '/login', pathMatch: 'full' },
    { path: '**', redirectTo: '/login' }
];
