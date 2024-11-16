import { Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UserListComponent } from './user-list/user-list.component';

export const routes: Routes = [
  { 
    path: '', 
    component: DashboardComponent,
    children: [
      { path: '', redirectTo: '', pathMatch: 'full' },
      { path: '', component: UserListComponent }
    ]
  }
];