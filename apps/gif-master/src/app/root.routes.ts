import { gifViewsRoutes } from '@gif-master/gif-views/feature';
import { Routes } from '@angular/router';

export const rootRoutes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'view-gifs' },
  { path: 'view-gifs', children: [...gifViewsRoutes] }
];
