import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { UiDetailModule } from '@gif-master/gif-views/ui';
import { DetailComponent } from './detail.component';
import { DataAccessModule } from '@gif-master/gif-views/data-access';

@NgModule({
  imports: [
    DataAccessModule,
    UiDetailModule,
    RouterModule.forChild([{ path: '', pathMatch: 'full', component: DetailComponent }])
  ],
  declarations: [DetailComponent]
})
export class FeatureDetailModule {}
