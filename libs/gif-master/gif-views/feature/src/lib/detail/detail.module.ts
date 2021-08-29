import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { UiDetailModule } from '@gif-master/gif-views/ui';
import { DetailComponent } from './detail.component';
import { DataAccessModule } from '@gif-master/gif-views/data-access';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    DataAccessModule,
    UiDetailModule,
    CommonModule,
    RouterModule.forChild([{ path: '', pathMatch: 'full', component: DetailComponent }])
  ],
  declarations: [DetailComponent]
})
export class FeatureDetailModule {}
