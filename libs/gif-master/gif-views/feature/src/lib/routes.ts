import { Routes } from '@angular/router';

export const gifViewsRoutes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    loadChildren: () => import('./listing/listing.module').then((m) => m.FeatureListingModule),
    data: { title: 'Trending Gifs 🔥' }
  },
  {
    path: ':id',
    loadChildren: () => import('./detail/detail.module').then((m) => m.FeatureDetailModule),
    data: { title: 'Awesome Gif' }
  }
];
