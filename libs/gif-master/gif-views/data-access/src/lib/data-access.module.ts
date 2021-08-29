import { NgModule } from '@angular/core';
import { NgxsModule } from '@ngxs/store';

import { GifViewsState } from './store';

@NgModule({
  imports: [NgxsModule.forFeature([GifViewsState])]
})
export class DataAccessModule {}
