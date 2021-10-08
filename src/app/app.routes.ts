import { Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './view/dashboard/dashboard.component';
import { CiscoComponent } from './view/cisco/cisco.component';
import { AppleComponent } from './view/apple/apple.component';
import { GoproComponent } from './view/gopro/gopro.component';

const APP_ROUTES: Routes = [
  { path: 'dashboard', component: DashboardComponent },
  { path: 'cisco', component: CiscoComponent },
  { path: 'apple', component: AppleComponent },
  { path: 'gopro', component: GoproComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'dashboard' },
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);
