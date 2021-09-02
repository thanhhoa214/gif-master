import { gifViewsRoutes } from '@gif-master/gif-views/feature';
import { Routes } from '@angular/router';
import { LayoutComponent } from '@gif-master/ui';

export const rootRoutes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      { path: 'view-gifs', children: [...gifViewsRoutes] },
      { path: '', pathMatch: 'full', redirectTo: 'view-gifs' }
    ]
  }
];
