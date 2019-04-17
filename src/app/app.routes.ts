import { Routes } from '@angular/router';

export const ROUTES: Routes = [
  // { path: '', loadChildren: './admin/admin.module#AdminModule' }
  { path: '', loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule) }
];
